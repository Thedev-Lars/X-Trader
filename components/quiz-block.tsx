"use client"

import { useState, memo } from "react"
import type { QuizQuestion } from "@/lib/map/types"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Check, X } from "lucide-react"

interface QuizBlockProps {
  questions: QuizQuestion[]
  onComplete: () => void
}

export const QuizBlock = memo(function QuizBlock({ questions, onComplete }: QuizBlockProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [showResult, setShowResult] = useState(false)
  const [correctCount, setCorrectCount] = useState(0)
  const [isComplete, setIsComplete] = useState(false)

  const currentQuestion = questions[currentIndex]

  const handleSelect = (index: number) => {
    if (showResult) return
    setSelectedAnswer(index)
  }

  const handleSubmit = () => {
    if (selectedAnswer === null) return
    setShowResult(true)
    if (selectedAnswer === currentQuestion.correctIndex) {
      setCorrectCount((c) => c + 1)
    }
  }

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex((i) => i + 1)
      setSelectedAnswer(null)
      setShowResult(false)
    } else {
      setIsComplete(true)
      onComplete()
    }
  }

  if (isComplete) {
    return (
      <div className="bg-card border border-border rounded-lg p-5 sm:p-6">
        <h3 className="text-xl font-semibold text-foreground mb-3">Quiz Complete</h3>
        <p className="text-base text-muted-foreground leading-relaxed">
          You got {correctCount} out of {questions.length} correct!
        </p>
        <div className="mt-4 h-3 bg-muted rounded-full overflow-hidden">
          <div
            className="h-full bg-primary transition-all"
            style={{ width: `${(correctCount / questions.length) * 100}%` }}
          />
        </div>
      </div>
    )
  }

  return (
    <div className="bg-card border border-border rounded-lg p-5 sm:p-6">
      <div className="flex items-center justify-between mb-5">
        <h3 className="text-xl font-semibold text-foreground">Quiz</h3>
        <span className="text-base text-muted-foreground">
          {currentIndex + 1} / {questions.length}
        </span>
      </div>

      <p className="text-foreground mb-5 leading-relaxed text-base sm:text-lg font-medium">
        {currentQuestion.question}
      </p>

      <div className="space-y-3 mb-6">
        {currentQuestion.options.map((option, index) => {
          const isSelected = selectedAnswer === index
          const isCorrect = index === currentQuestion.correctIndex
          const showCorrect = showResult && isCorrect
          const showWrong = showResult && isSelected && !isCorrect

          return (
            <button
              key={index}
              onClick={() => handleSelect(index)}
              disabled={showResult}
              className={cn(
                "w-full p-4 text-left rounded-lg border transition-all min-h-[56px] touch-manipulation",
                !showResult && "hover:border-primary active:scale-[0.99] cursor-pointer",
                !showResult && isSelected && "border-primary bg-primary/10",
                !showResult && !isSelected && "border-border bg-background",
                showCorrect && "border-green-500 bg-green-500/10",
                showWrong && "border-red-500 bg-red-500/10",
                showResult && "cursor-default",
              )}
            >
              <div className="flex items-center justify-between gap-3">
                <span
                  className={cn(
                    "text-base leading-relaxed",
                    showCorrect
                      ? "text-green-600 dark:text-green-400 font-medium"
                      : showWrong
                        ? "text-red-600 dark:text-red-400"
                        : "text-foreground",
                  )}
                >
                  {option}
                </span>
                {showCorrect && <Check className="w-6 h-6 text-green-500 flex-shrink-0" />}
                {showWrong && <X className="w-6 h-6 text-red-500 flex-shrink-0" />}
              </div>
            </button>
          )
        })}
      </div>

      {!showResult ? (
        <Button onClick={handleSubmit} disabled={selectedAnswer === null} className="w-full h-14 text-base font-medium">
          Submit Answer
        </Button>
      ) : (
        <Button onClick={handleNext} className="w-full h-14 text-base font-medium">
          {currentIndex < questions.length - 1 ? "Next Question" : "Finish Quiz"}
        </Button>
      )}
    </div>
  )
})

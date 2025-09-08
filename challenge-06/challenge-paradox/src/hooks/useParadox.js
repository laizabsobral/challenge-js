
import { useState, useEffect, useRef } from "react"

export function useParadox() {
  const [achillesPosition, setAchillesPosition] = useState(0)
  const [tortoisePosition, setTortoisePosition] = useState(75)
  const [step, setStep] = useState(0)
  const [remainingDistance, setRemainingDistance] = useState(75)
  const intervalRef = useRef(null)

  const achillesSpeed = 10 // 10 m/s
  const tortoiseSpeed = 0.5 // 0.5 m/s
  const trackLength = 200
  const pixelsPerMeter = 4

  const startAnimation = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
    }

    intervalRef.current = setInterval(() => {
      setTortoisePosition((prevTortoise) => {
        const newTortoisePos = Math.min(prevTortoise + tortoiseSpeed * 0.2, trackLength)

        setAchillesPosition((prevAchilles) => {
          const currentDistance = newTortoisePos - prevAchilles
          const achillesMovement = currentDistance * 0.3
          const newAchillesPos = Math.min(prevAchilles + achillesMovement, newTortoisePos - 0.5)
          setRemainingDistance(newTortoisePos - newAchillesPos)
          return newAchillesPos
        })

        return newTortoisePos
      })

      setStep((prev) => prev + 1)
    }, 400)
  }

  const reset = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
    }
    setAchillesPosition(0)
    setTortoisePosition(75)
    setStep(0)
    setRemainingDistance(75)

    setTimeout(() => {
      startAnimation()
    }, 100)
  }

  useEffect(() => {
    startAnimation()

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [])

  const isGettingClose = remainingDistance < 10 && remainingDistance > 0

  return {
    achillesPosition,
    tortoisePosition,
    remainingDistance,
    isGettingClose,
    trackLength,
    achillesSpeed,
    tortoiseSpeed,
    step,
    pixelsPerMeter,
    reset,
  }
}

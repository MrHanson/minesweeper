import * as React from 'react'
import { RiEmotionHappyLine, RiEmotionNormalLine, RiEmotionUnhappyLine } from 'react-icons/ri' 
export interface MineNumProps {
  mineNum: number
}

export interface EmotionFaceProps {
  emotionFace: 'happy' | 'normal' | 'unhappy'
}

export interface TimerProps {
  time: number
}

export interface StatusBarProps extends MineNumProps, EmotionFaceProps, TimerProps {}

export const MineNumBar: React.FC<MineNumProps> = ({ mineNum }) => {
  return <div>{mineNum}</div>
}

export const EmotionFaceBtn: React.FC<EmotionFaceProps> = ({ emotionFace }) => {
  if (emotionFace === 'happy') {
    return (
      <button>
        <RiEmotionHappyLine />
      </button>
    )
  } else if (emotionFace === 'normal') {
    return (
      <button>
        <RiEmotionNormalLine />
      </button>
    )
  } else if (emotionFace === 'unhappy') {
    return (
      <button>
        <RiEmotionUnhappyLine />
      </button>
    )
  }

  return null
}

export const TimerBar: React.FC<TimerProps> = ({ time }) => {
  return <div>{time}</div>
}

export const StatusBar: React.FC<StatusBarProps> = ({ mineNum, emotionFace, time }) => {
  return (
    <header>
      <MineNumBar mineNum={mineNum} />
      <EmotionFaceBtn emotionFace={emotionFace} />
      <TimerBar time={time} />
    </header>
  )
}

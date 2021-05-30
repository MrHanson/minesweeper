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
  return (
    <select name='minenum' id='mine-num' className='h-16 w-16 focus:outline-none'>
      <option value='30'>30</option>
      <option value='60'>60</option>
      <option value='90'>90</option>
    </select>
  )
}

export const EmotionFaceBtn: React.FC<EmotionFaceProps> = ({ emotionFace }) => {
  let iconCom = null
  if (emotionFace === 'happy') {
    iconCom = <RiEmotionHappyLine />
  } else if (emotionFace === 'normal') {
    iconCom = <RiEmotionNormalLine />
  } else if (emotionFace === 'unhappy') {
    iconCom = <RiEmotionUnhappyLine />
  }

  const classList = [
    'w-16',
    'h-16',
    'flex',
    'justify-center',
    'items-center',
    'shadow-md',
    'outline-none',
    'py-2',
    'px-4',
    'rounded-lg',
    'active:bg-gray-100',
    'active:shadow-inner',
  ]
  return <button className={classList.join(' ')}>{iconCom}</button>
}

export const TimerBar: React.FC<TimerProps> = ({ time }) => {
  return <div className='h-16 w-16 flex justify-center items-center'>{time}</div>
}

export const StatusBar: React.FC<StatusBarProps> = ({ mineNum, emotionFace, time }) => {
  return (
    <div className='max-w-screen-md flex justify-between'>
      <MineNumBar mineNum={mineNum} />
      <EmotionFaceBtn emotionFace={emotionFace} />
      <TimerBar time={time} />
    </div>
  )
}

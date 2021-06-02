import * as React from 'react'
import { InsertEmoticonOutlined, SentimentSatisfiedOutlined, SentimentVeryDissatisfiedOutlined } from '@material-ui/icons';
import { Button } from '@material-ui/core'
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
    <select name='minenum' id='mine-num' className='status-bar--minenum'>
      <option value='30'>30</option>
      <option value='60'>60</option>
      <option value='90'>90</option>
    </select>
  )
}

export const EmotionFaceBtn: React.FC<EmotionFaceProps> = ({ emotionFace }) => {
  let iconCom = null
  if (emotionFace === 'happy') {
    iconCom = <InsertEmoticonOutlined />
    // iconCom = 'happy'
  } else if (emotionFace === 'normal') {
    iconCom = <SentimentSatisfiedOutlined />
    // iconCom = 'normal'
  } else if (emotionFace === 'unhappy') {
    iconCom = <SentimentVeryDissatisfiedOutlined />
    // iconCom = 'unhappy'
  }

  return <Button variant="contained" className='status-bar--emotion-btn'>{iconCom}</Button>
}

export const TimerBar: React.FC<TimerProps> = ({ time }) => {
  return <div className='status-bar--time-bar'>{time}</div>
}

export const StatusBar: React.FC<StatusBarProps> = ({ mineNum, emotionFace, time }) => {
  return (
    <div className='status-bar'>
      <MineNumBar mineNum={mineNum} />
      <EmotionFaceBtn emotionFace={emotionFace} />
      <TimerBar time={time} />
    </div>
  )
}

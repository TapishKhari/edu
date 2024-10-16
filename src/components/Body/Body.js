import React from 'react'
import './Body.css'
import Notification from '../Notification-div/Notification'
import { Registration } from '../Registration/Registration'

export const Body = () => {
  return (
    <>
    <div className='body'>
      <div className='a-bod'><Notification/></div>
      <div className='b-bod'><Registration/></div>
    </div>
    </>
  )
}

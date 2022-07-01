import React from 'react'
import Moment from 'react-moment'
import 'moment-timezone'
import { Welcome, TimeStamp, Greeting } from './TimeStyles'

const TimeKey = () => {

    let today = new Date()
    let greeting = () => {
        if (today.getHours() >= 5 && today.getHours() < 11) {
            return 'Good Morning, Hikmal.'
        } else if (today.getHours() >=11 && today.getHours() < 17) {
            return 'Good Afternoon, Hikmal.'
        } else if (today.gethours() >=17 && today.getHours() < 24) {
            return 'Good Evening, Hikmal.'
        } else {
            return 'What are you doing yp at this'
        }

    }

  return (
    <Welcome>
        <TimeStamp>
            <Moment format='LT'></Moment>
        </TimeStamp>
        <Greeting>
            {greeting()}
        </Greeting>
    </Welcome>
  )
  
}

export default TimeKey
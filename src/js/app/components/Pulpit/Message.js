import React from 'react'; 
import '../../../../scss/app/_message.scss'

export default function Message() {
    return (
        <div className='messageWrap'>
            <input type='text' placeholder='tutaj wpisz jak masz na imię'></input>
            <button className='btn'>Gotowe!</button>
        </div>
    )
}

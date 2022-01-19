import React from 'react'
import c from './Message.module.css'

type propsMessageDataType = {
    avatar: string
    name: string
    message: string
    time: string
}

export function Message(props: propsMessageDataType) {
    return (
        <div className={c.box}>
            <img src={props.avatar}/>
            <div className={c.corner}/>
            <div className={c.item} >
                <div className={c.name}>{props.name}</div>
                <div className={c.message}>{props.message}</div>
                <div className={c.time}>{props.time}</div>
            </div>
        </div>
    )
}



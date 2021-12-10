import React, { forwardRef } from 'react'

const SComment=forwardRef(({avatar,text,timestamp,username},ref) =>{
    return (
        <div className="s_comment" ref={ref}>
            <img src={avatar} alt="" />
            <div className="commentsInfo">
                <span>{username} - </span>
                <p>{text}</p>
            </div>
        </div>
    )
})

export default SComment

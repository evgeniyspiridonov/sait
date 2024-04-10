import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
    debugger
    return (
        <div className={s.item}>
            <img src='https://assets.turbologo.ru/blog/ru/2020/02/18162650/logistrade-958x575.png' />
            {props.message}
            <div>
                <span>like</span> {props.likesCount}
            </div>
        </div>
    )
}

export default Post;
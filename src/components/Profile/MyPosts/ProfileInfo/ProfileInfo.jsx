import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
    if (!props.profile) {
        return
            }
    return (
        <div>
            <div className={s.item}>
                <img src='https://i.ibb.co/bg5Zbkm/Mac-Book-Pro-16-1.png' />
            </div  >
            <div className={s.discriptionBloc}>
                <img src={props.profile.photos.large} />
                ava+discription
            </div>
        </div>
    )
}

export default ProfileInfo;
import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus";

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }

    return (
        <div>
            {/*<div>*/}
            {/*    <img*/}
            {/*        src='https://media.istockphoto.com/vectors/delivery-service-by-van-car-for-parcel-delivery-cartoon-vector-vector-id917180822'/>*/}
            {/*</div>*/}
            <div className={s.descriptionBlock}>
                <img src={props.profile.avatar}/>
                <span> {props.profile.id} </span>
                <span> {props.profile.fullName} </span>
                <span> {props.profile.location.country}</span>
                <span> {props.profile.location.city}</span>
                <ProfileStatus status={props.profile.status}/>
            </div>
        </div>
    )
}

export default ProfileInfo;
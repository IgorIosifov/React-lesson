import React from "react";
import s from './Users.module.css';

const Users = (props) => {

   if (props.users.length === 0) {
       props.setUsers([
           {
               id: 1,
               avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRBFC8gdBRergzgi31EKqSTlKhWUgqRwbxAtJKG9UX_iLOCVHFY&usqp=CAU',
               followed: false,
               fullName: 'Igor I.',
               status: 'OK',
               location: {city: 'Vlasikha', country: 'Russia'}
           },
           {
               id: 2,
               avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRBFC8gdBRergzgi31EKqSTlKhWUgqRwbxAtJKG9UX_iLOCVHFY&usqp=CAU',
               followed: true,
               fullName: 'Timur G.',
               status: 'OKOK',
               location: {city: 'Moscow', country: 'Russia'}
           },
           {
               id: 3,
               avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRBFC8gdBRergzgi31EKqSTlKhWUgqRwbxAtJKG9UX_iLOCVHFY&usqp=CAU',
               followed: false,
               fullName: 'Andrey S.',
               status: 'OKOkOk',
               location: {city: 'Iron', country: 'Russia'}
           }]);
   }

    return <div>
        {
            props.users.map(u => <div key={u.id}>
                <div>
                    <img src={u.avatar} className={s.avatar}/>
                </div>
                <div>
                    {u.followed
                        ? <button onClick={()=> {props.unfollow(u.id)}}>Unfollow</button>
                        : <button onClick={()=> {props.follow(u.id)}}>Follow</button>}
                </div>
                <div>{u.fullName}</div>
                <div>{u.status}</div>
                <div>{u.location.country}</div>
                <div>{u.location.city}</div>
            </div>)
        }
    </div>
}

export default Users;
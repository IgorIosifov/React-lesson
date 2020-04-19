import React from "react";
import s from './Users.module.css';
import * as axios from "axios";
import emptyUser from '../../assets/images/emptyUser.png';


const Users = (props) => {
    if (props.users.length === 0) {
        axios.get("https://equipment-rest.herokuapp.com/users").then(response => props.setUsers(response.data))
    }

    return <div>
        {
            props.users.map(u => <div key={u.id}>
                <div>
                    <img src={u.avatar !=='' ? u.avatar : emptyUser} className={s.avatar}/>
                </div>
                <div>
                    {u.followed
                        ? <button onClick={() => {
                            props.unfollow(u.id)
                        }}>Unfollow</button>
                        : <button onClick={() => {
                            props.follow(u.id)
                        }}>Follow</button>}
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
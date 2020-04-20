import React from "react";
import s from './Users.module.css';
import * as axios from "axios";
import emptyUser from '../../assets/images/emptyUser.png';

class UsersC extends React.Component {

    componentDidMount() {
        if (this.props.users.length === 0) {
            axios.get(`https://equipment-rest.herokuapp.com/users?page=${this.props.currentPage}&size=${this.props.pageSize}`)
                .then(response => {
                    this.props.setUsers(response.data);
                //this.props.setTotalUsersCount(response.data.TotalUsersCount)
                })
        }
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://equipment-rest.herokuapp.com/users?page=${pageNumber}&size=${this.props.pageSize}`)
            .then(response => this.props.setUsers(response.data))
    }

    render() {
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
        let pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i);
        }
        return <div>
            <div>
                {pages.map(p => {
                    return <span className={this.props.currentPage === p && s.selected}
                                 onClick={() => {
                                     this.onPageChanged(p)
                                 }}>{p}</span>
                })}
            </div>
            {
                this.props.users.map(u => <div key={u.id}>
                    <div>
                        <img src={u.avatar !== '' ? u.avatar : emptyUser} className={s.avatar}/>
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => {
                                this.props.unfollow(u.id)
                            }}>Unfollow</button>
                            : <button onClick={() => {
                                this.props.follow(u.id)
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
}

export default UsersC;
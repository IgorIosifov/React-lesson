import React from "react";
import {connect} from "react-redux";
import {followAC, setCurrentPageAC, setUsersAC, unfollowAC} from "../../redux/users-reducer";
import * as axios from "axios";
import Users from "./Users";

class UsersContainer extends React.Component {

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
        return <Users totalUsersCount={this.props.totalUsersCount}
                      pageSize = {this.props.pageSize}
                      currentPage = {this.props.currentPage}
                      users = {this.props.users}
                      onPageChanged = {this.onPageChanged}
                      follow = {this.props.follow}
                      unfollow = {this.props.unfollow}
        />
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId));
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId));
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users));
        },
        setCurrentPage: (pageNumber) =>{
            dispatch(setCurrentPageAC(pageNumber));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
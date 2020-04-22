import React from 'react';
import Header from "./Header";
import * as axios from "axios";
import {setAuthUserData} from "../../redux/auth-reducer";
import {connect} from "react-redux";


class HeaderContainer extends React.Component {
    componentDidMount() {

        axios.get(`https://equipment-rest.herokuapp.com/auth/me`, {withCredentials: true})
            .then(response => {
                if (response.data.resultCode === 0) {
                    let {id, email, login} = response.data.data;
                    this.props.setAuthUserData(id, email, login);
                }
            })
    }

    render() {
        return <Header{...this.props}/>
    }

}

const mapStateToProps = (state) => ({
    isAuth : state.auth.isAuth,
    login: state.auth.login
});

export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer);
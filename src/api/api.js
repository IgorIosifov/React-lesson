import * as axios from "axios";

const instance = axios.create({
    baseURL: "https://equipment-rest.herokuapp.com/",
    // withCredentials: true,
    // headers: {
    //     "API_KEY": "UNIQUE KEY"
    // }
});

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&size=${pageSize}`)
            .then(response => response.data);
    },
    follow(userId) {
        return instance.post(`follow/${userId}`)
    },
    unfollow(userId) {
        return instance.delete(`follow/${userId}`)
    },
    getProfile(userId) {
        return instance.get(`users/${userId}`);
    }
};

export const authAPI = {
    me() {
        return instance.get(`auth/me`)
    }

};


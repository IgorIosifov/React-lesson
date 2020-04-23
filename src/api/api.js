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
    }
};

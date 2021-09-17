import axios from "axios";

export default class UserService {


    async register(userRegisterDto){
        return await axios.post("http://localhost:8010/api/v1/users/register",userRegisterDto);
    }

    async login(userLoginDto){
        return await axios.post("http://localhost:8010/api/v1/users/login",userLoginDto);
    }

}
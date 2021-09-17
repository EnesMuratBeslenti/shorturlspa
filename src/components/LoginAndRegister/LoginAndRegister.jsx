import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router';
import UserRegisterDto from '../../models/UserRegisterDto';
import UserService from '../../services/userService'
import { UserLoginDto } from '../../models/UserLoginDto';
export default function LoginAndRegister() {

    const history = useHistory();
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [mail, setMail] = useState("");
    const [password, setPassword] = useState("");


    //Sınıfı build eden kod componenti
    useEffect(() => {
    }, [])

    const handleLogin = async (e) => {
        e.preventDefault();
        let userService = new UserService();
        let user = new UserLoginDto()

        user.mail = mail
        user.password = password
        userService.login(user).then(res => {
            let response = res.data.data;
            localStorage.setItem("id",response.id)
            localStorage.setItem("firstName",response.firstName)
            console.log(response, "response")
            history.push('/home')
        }).catch(err => alert(err.response.data.message));
    }



    const handleRegister = async (e) => {
        e.preventDefault();
        let userService = new UserService();
        let user = new UserRegisterDto()
        user.firstName = firstName
        user.lastName = lastName
        user.mail = mail
        user.password = password
        userService.register(user).then(res => {
            let response = res.data.data;
            console.log(response, "response")
            history.push('/home')
        }).catch(err => alert(err.response.data.message));

    }

    return (
        <div>
            <nav className="navbar navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand">WebUrlShorted</a>
                    <form className="d-flex" onSubmit={(e) => handleLogin(e)} >
                        <input className="form-control me-2" type="text" placeholder="Mail" id="mail" onChange={(e) => setMail(e.target.value)} />
                        <input className="form-control me-2" type="password" placeholder="Şifre" onChange={(e) => setPassword(e.target.value)} />
                        <button className="btn btn-outline-success w-50" type="submit">Giriş Yap</button>
                    </form>
                </div>
            </nav>

            <div className="">
                <div className="row">
                    <div className="d-flex align-items-center col-6">
                        <h1>Url Kısaltma Web Uygulaması</h1>
                    </div>
                    <div className="col-6">
                        <div className="">
                            <form onSubmit={(e) => handleRegister(e)}>
                                <div className="col-4">
                                    <label for="exampleInputEmail1" className="form-label">Adınız</label>
                                    <input type="text" className="form-control" id="exampleInputEmail1" onChange={(e) => setFirstName(e.target.value)} />
                                </div>
                                <div className="col-4">
                                    <label for="exampleInputEmail1" className="form-label">Soyadınız</label>
                                    <input type="text" className="form-control" id="exampleInputEmail1" onChange={(e) => setLastName(e.target.value)} />
                                </div>
                                <div className="col-4">
                                    <label for="exampleInputEmail1" className="form-label">Mail Adresiniz</label>
                                    <input type="email" className="form-control" id="exampleInputEmail1" onChange={(e) => setMail(e.target.value)} />
                                </div>
                                <div className="col-4">
                                    <label for="exampleInputPassword1" className="form-label">Şifre</label>
                                    <input type="password" className="form-control" id="exampleInputPassword1" onChange={(e) => setPassword(e.target.value)} />
                                </div>
                                <button type="submit" className="btn btn-primary mt-2">Kayıt Ol</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

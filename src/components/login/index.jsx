import "./style.scss";
import UserService from '../../services/UserServices'
import { Redirect } from "react-router-dom";

import {Link} from 'react-router-dom'
import { useState } from "react";
import { useAuth } from "../../contexts/AuthContext";

import axios from 'axios';


export default function Login(){
    const [error, setError] = useState("")
    const [token, setToken] = useAuth();
    const [username, setUsername] = useState()
    const [password, setPassword] = useState()


    const submit = async (e) => {
        try {
			e.preventDefault();
			if (username === undefined && password === undefined){
                setError("Please enter a username and password");
                return;
            };

            let res = await UserService.LoginAccount(username, password)
            
			if (res?.data?.token){
                setToken(res?.data?.token);
                window.location.href = "/admin"
            }
		} catch (error) {
			console.log(error);
		}
    }


    return(
        <div className="login">
            <div className="container">
                <h2>Login</h2>
                {error === ""? "" : <p>{error}</p>}
                <form action="" onSubmit={submit}>
                    <label>
                        <span>Username</span>
                        <input type="text" className="input" placeholder="Your Username" onChange={e => setUsername(e.target.value)}/>
                    </label>

                    <label>
                        <span>Password</span>
                        <input type="password" className="input" placeholder="Your Password" onChange={e => setPassword(e.target.value)}/>
                    </label>

                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    )
}

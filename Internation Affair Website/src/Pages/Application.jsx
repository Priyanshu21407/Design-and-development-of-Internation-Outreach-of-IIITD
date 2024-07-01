//Application
import React, { useState } from "react";
import '../styles/Application.css';
import userIcon from '../assets/userIcon.png'
import passwordIcon from '../assets/lockIcon.png'
import { Navigate } from "react-router-dom";

function Application()
{

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isLogin, setLogin] = useState(false)
    const [path, setPath] = useState('/Apply')

    let users = [{name: 'ABC', userid: 'abc@gmail.com', password: '1234'}, 
        {name: 'XYZ', userid: 'xyz@gmail.com', password: '1234'}
    ]

    const handleLogin = (event) => {
        event.preventDefault();
        let {uid,password} = document.forms[0];
        const user = users.find((user) => user.userid == uid.value && user.password == password.value);
        if(user) {
            setLogin(true)
            sessionStorage.setItem("Curr_user",JSON.stringify(user))
            setPath('/ApplicationPortal')
            console.log('Successful')
        }
        else {
            window.alert("Wrong Email or Password")
            console.log('Not Found')
        }

    }

    return (

        <div>
            <div class = "Application-header"
            >
            <a
                href="/"
            >
                <img src="https://iiitd.ac.in/sites/default/files/style3colorsmall.png" className="w-60 h-10" alt="" />
            </a>

            <div class="pageinfo" >
                Application Portal
            </div>
            </div>
            <Navigate to = {path}/>
            {isLogin ? <div> </div> :
            <div class = 'login-form'>
                <form onSubmit = {handleLogin}>
                    <div class = "input-field">
                        <img src = {userIcon} class="Icon" />
                        <input class = "input-field-email" type="text" name="uid" placeholder='Enter Email'/>
                    </div>
                    <div class ="input-field">
                        <img src = {passwordIcon} class="Icon" />
                        <input class = "input-field-password" type="password" name="password" placeholder='Enter Password' />
                    </div>
                    <button class = 'password-reset'> forgot password? </button>
                    <button class= "login" type="submit">Login</button>
         
                    <button class = "create-account">New Registration?</button>

                </form>

            </div>
        }
        </div>
    )
}

export default Application
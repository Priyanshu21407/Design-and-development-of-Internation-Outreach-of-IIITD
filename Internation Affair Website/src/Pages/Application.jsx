//Application
import React, { useState } from "react";
import './Application.css';
import userIcon from '../assets/userIcon.png'
import passwordIcon from '../assets/lockIcon.png'

function Application()
{

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleLogin = (event) => {

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
            <div class = 'login-form'>
                <form onSubmit = {handleLogin()}>
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
        </div>
    )
}

export default Application
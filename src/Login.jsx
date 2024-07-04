// inside src/Login.jsx

import React from "react";
import { useForm } from "react-hook-form";
import "./logincust.css";
import { useNavigate } from "react-router-dom";

function Login() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    let navigate = useNavigate();



    const onSubmit = (data) => {
        const userData = JSON.parse(localStorage.getItem(data.email));
        if (userData) {
            if (userData.password === data.password) {
                console.log(userData.name + " You Are Successfully Logged In");
                navigate("/Home");
            } else {
                console.log("Email or Password is not matching with our record");
                window.alert("Email or Password is not matching with our record");
            }
        } else {
            console.log("Email or Password is not matching with our record");
            window.alert("Email or Password is not matching with our record");

            
        }
    };

    const handleSignup = () => {
        navigate("/Register");
    };

    return (
        <>
        <div className="justify-center flex-1 p-20">
            <p className="title">Login Form</p>
            <form className="App" onSubmit={handleSubmit(onSubmit)}>
                <input type="email" placeholder="Email" {...register("email", { required: true })} />
                {errors.email && <span style={{ color: "red" }}>*Email* is mandatory</span>}
                <input type="password" placeholder="Password" {...register("password")} />
                <div className="button-group">
                    <input type="submit" value="Login" className="login-button" />
                    <input type="button" value="Signup" onClick={handleSignup} className="signup-button" />
                </div>
            </form>
            </div>
        </>
    );
}

export default Login;

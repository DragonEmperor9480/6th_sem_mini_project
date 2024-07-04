// inside src/App.js
// Replace previous code with this.

import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

function Register() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    let navigate = useNavigate();

    const onSubmit = (data) => {
        localStorage.setItem(data.email, JSON.stringify({ 
            name: data.name, password: data.password 
        }),
        window.alert("Successfully Registered")
    );
        console.log(JSON.parse(localStorage.getItem(data.email)));
      };
    return (
        <>
        <div className="justify-center flex-1 p-20"> 
            <p className="title">Registration Form</p>

            <form className="App" onSubmit={handleSubmit(onSubmit)}>
                <input type="text" placeholder="Username"{...register("name")} />
                <input type="email" placeholder="Email" {...register("email", { required: true })} />
                {errors.email && <span style={{ color: "red" }}>
                    *Email* is mandatory </span>}
                <input type="password" placeholder="new password" {...register("password")} />
                <div className="button-group">
                <input type={"submit"} style={{ backgroundColor: "#a1eafb", color: "white" }} />
                <input type={"submit"} value={"Go to Login"} onClick={navigate("/Login")} style={{ backgroundColor: "#f08080", color: "white" }} />
                </div>
            </form>
            </div>
        </>
    );
}
export default Register;

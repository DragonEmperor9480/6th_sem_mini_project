import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

function Register() {
    const { register, handleSubmit, formState: { errors }, setError } = useForm();
    let navigate = useNavigate();

    const onSubmit = (data) => {
        if (localStorage.getItem(data.email)) {
            setError("email", {
                type: "manual",
                message: "Email is already registered"
            });
            window.alert("Email is already registered");
            return;
        }

        localStorage.setItem(data.email, JSON.stringify({ 
            name: data.name, password: data.password 
        }));
        window.alert("Successfully Registered");
        navigate('/Login')
        console.log(JSON.parse(localStorage.getItem(data.email)));
    };

    return (
        <>
        <div className="justify-center flex-1 p-20"> 
            <p className="title">Registration Form</p>

            <form className="App" onSubmit={handleSubmit(onSubmit)}>
                <input type="text" placeholder="Username" {...register("name")} />
                <input type="email" placeholder="Email" {...register("email", { required: true })} />
                {errors.email && errors.email.type === "required" && (
                    <span style={{ color: "red" }}>*Email* is mandatory</span>
                )}
                {errors.email && errors.email.type === "manual" && (
                    <span style={{ color: "red" }}>{errors.email.message}</span>
                )}
                <input 
                    type="password" 
                    placeholder="New password"  
                    {...register("password", { 
                        required: true, 
                        minLength: 8 
                    })} 
                />
                {errors.password && errors.password.type === "required" && (
                    <span style={{ color: "red" }}>*Password* is mandatory</span>
                )}
                {errors.password && errors.password.type === "minLength" && (
                    <span style={{ color: "red" }}>Password must be at least 8 characters long</span>
                )}
                <div className="button-group">
                    <input type="submit" style={{ backgroundColor: "#a1eafb", color: "white" }} />
                    <input type="button" value="Go to Login" onClick={() => navigate("/Login")} style={{ backgroundColor: "#f08080", color: "white" }} />
                </div>
            </form>
        </div>
        </>
    );
}

export default Register;
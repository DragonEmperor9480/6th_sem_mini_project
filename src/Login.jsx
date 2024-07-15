import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ThemeStore } from "./utility/ThemeContext";

function Login() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    let navigate = useNavigate();
    const { theme } = useContext(ThemeStore);

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

    return (
        <div className={`min-h-screen flex items-center justify-center p-4 overflow-hidden relative ${theme === 'light' ? 'bg-gray-100' : 'bg-gray-900'}`}>
            {/* Animated background */}
            <div className="absolute inset-0 overflow-hidden">
                <svg className="absolute w-full h-full" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" style={{ stopColor: theme === 'light' ? 'rgba(59, 130, 246, 0.1)' : 'rgba(59, 130, 246, 0.05)', stopOpacity: 1 }} />
                            <stop offset="100%" style={{ stopColor: theme === 'light' ? 'rgba(147, 51, 234, 0.1)' : 'rgba(147, 51, 234, 0.05)', stopOpacity: 1 }} />
                        </linearGradient>
                    </defs>
                    {[...Array(10)].map((_, index) => (
                        <g key={index}>
                            <rect className={`animate-float${index % 3 + 1}`} x={Math.random() * 100 + "%"} y={Math.random() * 100 + "%"} width="100" height="100" fill="url(#grad1)">
                                <animateTransform attributeName="transform" type="translate" values={`0 0; ${Math.random() * 500 - 250} ${Math.random() * 500 - 250}; 0 0`} dur={`${20 + Math.random() * 20}s`} repeatCount="indefinite" />
                            </rect>
                            <circle className={`animate-float${(index + 1) % 3 + 1}`} cx={Math.random() * 100 + "%"} cy={Math.random() * 100 + "%"} r="50" fill="url(#grad1)">
                                <animateTransform attributeName="transform" type="translate" values={`0 0; ${Math.random() * 500 - 250} ${Math.random() * 500 - 250}; 0 0`} dur={`${20 + Math.random() * 20}s`} repeatCount="indefinite" />
                            </circle>
                        </g>
                    ))}
                </svg>
            </div>

            <motion.div 
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className={`${theme === 'light' ? 'bg-white' : 'bg-gray-800'} ${theme === 'light' ? 'bg-opacity-80' : 'bg-opacity-80'} rounded-lg shadow-xl p-8 w-full max-w-md relative z-10`}
            >
                <h2 className={`text-3xl font-bold mb-6 text-center ${theme === 'light' ? 'text-gray-800' : 'text-gray-100'}`}>Login Form</h2>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <div>
                        <motion.input 
                            whileFocus={{ scale: 1.02 }}
                            type="email" 
                            placeholder="Email" 
                            {...register("email", { required: true })} 
                            className={`w-full px-4 py-2 ${theme === 'light' ? 'bg-gray-100 text-gray-800' : 'bg-gray-700 text-gray-100'} border ${theme === 'light' ? 'border-gray-300' : 'border-gray-600'} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
                        />
                        {errors.email && (
                            <p className="mt-1 text-sm text-red-400">*Email* is mandatory</p>
                        )}
                    </div>
                    <div>
                        <motion.input 
                            whileFocus={{ scale: 1.02 }}
                            type="password" 
                            placeholder="Password"  
                            {...register("password", { required: true })} 
                            className={`w-full px-4 py-2 ${theme === 'light' ? 'bg-gray-100 text-gray-800' : 'bg-gray-700 text-gray-100'} border ${theme === 'light' ? 'border-gray-300' : 'border-gray-600'} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
                        />
                        {errors.password && (
                            <p className="mt-1 text-sm text-red-400">*Password* is mandatory</p>
                        )}
                    </div>
                    <div className="flex space-x-4">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            type="submit"
                            className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md transition duration-300 ease-in-out"
                        >
                            Login
                        </motion.button>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            type="button"
                            onClick={() => navigate("/Register")}
                            className={`w-full py-2 px-4 ${theme === 'light' ? 'bg-gray-200 hover:bg-gray-300 text-gray-800' : 'bg-gray-600 hover:bg-gray-700 text-white'} font-semibold rounded-md transition duration-300 ease-in-out`}
                        >
                            Go to Register
                        </motion.button>
                    </div>
                </form>
            </motion.div>
        </div>
    );
}

export default Login;
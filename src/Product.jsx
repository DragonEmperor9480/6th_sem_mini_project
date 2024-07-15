import React, { useState, useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from 'framer-motion';
import Products from "./data.js";
import { ThemeStore } from "./utility/ThemeContext";

const Product = () => {
    let { id } = useParams();
    const [product, setProduct] = useState(null);
    const navigate = useNavigate();
    const { theme, toggleTheme } = useContext(ThemeStore);
    
    useEffect(() => {
        const foundProduct = Products.find(product => product.id === parseInt(id));
        setProduct(foundProduct);
    }, [id]);

    if (!product) return <></>;

    const { title, description, views, likes, category, rating, thumbnail } = product;

    const goToCourse = () => {
        const courseRoutes = {
            2: "/CourseGamedev",
            3: "/Coursevim",
            4: "/Coursegenai",
            5: "/Coursenode1",
            6: "/Coursereact",
            7: "/Courseboothin"
        };
        navigate(courseRoutes[id] || "/CourseMain");
        localStorage.setItem("a", 1);
    };

    const goToArticle = () => {
        const articleUrls = {
            1: "https://www.learnpython.org/",
            2: "https://www.freecodecamp.org/news/javascript-gamedev-with-kaboomjs/",
            3: "https://www.freecodecamp.org/news/vim-beginners-guide/",
            4: "https://steaminai.org/?gad_source=1&gclid=CjwKCAjwp4m0BhBAEiwAsdc4aHFupF0gjHlSQS3hCGsvbPPcS8XY3qg9DkxQtbibzhjelyMj95CWARoCD4QQAvD_BwE",
            5: "https://www.geeksforgeeks.org/nodejs/",
            6: "https://www.freecodecamp.org/news/all-the-fundamental-react-js-concepts-jammed-into-this-single-medium-article-c83f9b53eac2/",
            7: "https://www.edureka.co/learning-center",
            8: "https://careerfoundry.com/en/tutorials/web-development-for-beginners/introduction-to-web-development",
            9: "https://aws.amazon.com/what-is/sql/",
            10: "https://www.w3schools.com/java/java_intro.asp"
        };
        window.location.href = articleUrls[id] || "/";
        localStorage.setItem("b", 1);
    };

    const goToQuiz = () => {
        if (localStorage.getItem("a") == 1 && localStorage.getItem("b") == 1) {
            const quizRoutes = {
                2: "/MCQGamedev",
                3: "/MCQvim",
                4: "/MCQgenai",
                5: "/MCQnode1",
                6: "/MCQreact",
                7: "/MCQBootstrap"
            };
            navigate(quizRoutes[id] || "/MCQ");
        } else {
            alert("Please complete videos and article first");
        }
    };

    return (
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className={`min-h-screen w-full ${theme === 'light' ? 'bg-gray-100' : 'bg-gray-900 text-white'} transition-colors duration-300 pt-10`}
        >
            <div className="container mx-auto px-4">
                <motion.div 
                    className={`card bg-base-100 shadow-xl overflow-hidden ${theme === 'light' ? 'bg-white' : 'bg-gray-800'}`}
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                >
                    <div className="flex flex-col md:flex-row">
                        <figure className="md:w-1/3">
                            <img src={thumbnail} alt={title} className="w-full h-full object-cover" />
                        </figure>
                        <div className="card-body md:w-2/3">
                            <h2 className="card-title text-2xl mb-4">{title}</h2>
                            <p className="mb-6">{description}</p>
                            <div className="flex flex-wrap justify-around mb-6">
                                {[
                                    { label: "Likes", value: likes },
                                    { label: "Category", value: category },
                                    { label: "Rating", value: rating },
                                    { label: "Views", value: views }
                                ].map((item, index) => (
                                    <motion.div 
                                        key={index}
                                        className={`badge ${theme === 'light' ? 'bg-blue-100 text-blue-800' : 'bg-blue-900 text-blue-100'} p-3 m-1`}
                                        whileHover={{ scale: 1.1 }}
                                    >
                                        {item.label}: {item.value}
                                    </motion.div>
                                ))}
                            </div>
                            <div className="card-actions justify-center mt-5">
                                {["Video", "Article", "Quiz!"].map((action, index) => (
                                    <motion.button
                                        key={index}
                                        className={`btn ${theme === 'light' ? 'bg-blue-500 hover:bg-blue-600 text-white' : 'bg-blue-700 hover:bg-blue-800 text-white'}`}
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        onClick={[goToCourse, goToArticle, goToQuiz][index]}
                                    >
                                        {action}
                                    </motion.button>
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>

        </motion.div>
    );
};

export default Product;
import React, { useEffect, useState, useContext } from 'react';
import { motion } from 'framer-motion';
import Typewriter from 'typewriter-effect';
import ProductCard from "./productcard.jsx";
import "./index.css";
import ShimmerUI from "./ShimmerUi.jsx";
import { ThemeStore } from "./utility/ThemeContext";
import Products from "./data.js";

const Home = () => {
    const [allProducts, setAllProducts] = useState([...Products]);
    const [productData, setProductData] = useState([...Products]);
    const { theme } = useContext(ThemeStore);
    const [searchQuery, setSearchQuery] = useState("");

    if (allProducts.length === 0) {
        return <ShimmerUI />;
    }

    const handleClick = (category) => {
        const filteredArray = allProducts.filter((obj) => {
            if (category === 'rating') return obj.rating > 4;
            return obj.category === category;
        });
        setProductData(filteredArray);
    };

    const handleSearch = () => {
        const filteredArray = allProducts.filter((obj) =>
            obj.title.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setProductData(filteredArray);
        setSearchQuery("");
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { 
            opacity: 1,
            transition: { 
                staggerChildren: 0.1 
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: { 
            y: 0, 
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 100
            }
        }
    };

    return (
        <div className={`min-h-screen w-full ${theme === 'light' ? 'bg-gray-100' : 'bg-gray-900 text-white'} transition-colors duration-300`}>
            <div className="container mx-auto px-4 py-8">
                <motion.div 
                    initial={{ y: -50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="mb-8"
                >
                    <h1 className="text-6xl font-bold text-center mb-4">
                        <span className="text-fuchsia-600">Code</span> Galaxy
                    </h1>
                    <div className="text-center text-lg">
                        <Typewriter
                            options={{
                                strings: ['Think', 'Code', 'Learn', 'Achieve'],
                                autoStart: true,
                                loop: true,
                            }}
                        />
                    </div>
                </motion.div>

                <motion.div 
                    className="flex flex-wrap justify-center gap-4 mb-8"
                    initial="hidden"
                    animate="visible"
                    variants={containerVariants}
                >
                    {['rating', 'python', 'Bootstrap', 'editor'].map((category) => (
                        <motion.button
                            key={category}
                            variants={itemVariants}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className={`px-4 py-2 rounded-full ${theme === 'light' ? 'bg-blue-500 text-white' : 'bg-blue-700 text-white'} hover:bg-blue-600 transition-colors duration-300`}
                            onClick={() => handleClick(category)}
                        >
                            {category === 'rating' ? 'Top-Rating' : category}
                        </motion.button>
                    ))}
                </motion.div>

                <motion.div 
                    className="flex justify-center mb-8"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                >
                    <input
                        type="text"
                        placeholder="Search products..."
                        className={`px-4 py-2 rounded-l-full w-64 focus:outline-none ${theme === 'light' ? 'bg-white' : 'bg-gray-800'}`}
                        value={searchQuery}
                        onChange={(event) => setSearchQuery(event.target.value)}
                    />
                    <button
                        className={`px-6 py-2 rounded-r-full ${theme === 'light' ? 'bg-blue-500 text-white' : 'bg-blue-700 text-white'} hover:bg-blue-600 transition-colors duration-300`}
                        onClick={handleSearch}
                    >
                        Search
                    </button>
                </motion.div>

                <motion.div 
                    className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
                    initial="hidden"
                    animate="visible"
                    variants={containerVariants}
                >
                    {productData.map((obj) => (
                        <motion.div key={obj.id} variants={itemVariants}>
                            <ProductCard obj={obj} />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
};

export default Home;
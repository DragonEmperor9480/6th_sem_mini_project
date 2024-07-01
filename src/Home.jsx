import data  from "./data.js"
import React from 'react'
import ProductCard from "./productcard.jsx"
import { useEffect, useState } from "react";
import "./index.css";
import ShimmerUI from "./ShimmerUi.jsx";
import { useContext } from "react";
import { ThemeStore } from "./utility/ThemeContext";

let Home = ()=>{
 
      let [allProducts, setAllProducts] = useState([...data]);
     let[productData, setProductData] = useState([...data]);
  
 let {theme}=useContext(ThemeStore);

    let [searchQuery, setsearchQuery] = useState("");


// let getData = async() =>{
//     let data = await fetch('https://dummyjson.com/products');
//     let obj = await data.json();
//     setAllProducts(obj.products)
//     setProductData(obj.products)
// }
// useEffect(()=>{
//     getData();
// },[])


if (allProducts.length == 0) {
    return (<ShimmerUI></ShimmerUI>)
}

    let handleClick = (someclick)=>{
        
        let filteredArray = allProducts.filter((obj)=>{
            if(someclick == 'rating'){
                return obj.rating > 4;
            }
            if(someclick == 'furniture')
            {
                return obj.category == someclick
            }
            if(someclick == 'beauty')
            {
                return obj.category == someclick
            }
            if(someclick == 'groceries')
            {
                return obj.category == someclick
            }
            
        });

        setProductData(filteredArray);
        
    }
    let handleSearch = ()=>{
        let filteredArray = allProducts.filter((obj)=>{
            return obj.title.toLowerCase().includes(searchQuery.toLowerCase());
        })        
        setProductData(filteredArray);
        setsearchQuery("")
    }

    let darkTheme=" min-h-[90vh] w-screen "
    let lightTheme=" min-h-[90vh] w-screen bg-gray-300"

    return(
        <div className={theme=='light'?lightTheme:darkTheme}>

            <div className="utility flex justify-around flex-wrap">
            <button className="btn btn-outline btn-primary" onClick={()=>handleClick('rating')} >Top-Rating</button>
            <button className="btn btn-outline btn-primary" onClick={()=>handleClick('category')}>Category</button>
            <div className="searchbar ">
                <input type="text" placeholder="Search" className="h-9 border text-center border-black  rounded-2xl" value={searchQuery} onChange={(event)=>(setsearchQuery(event.target.value))} />
                <button className="btn glass h-9 ml-3 " onClick={handleSearch}>Search</button>

            </div>
            <button className="btn btn-outline btn-primary"onClick={()=>handleClick('empty')}>Empty </button>
            <button className="btn btn-outline btn-primary" onClick={()=>handleClick('recommended')}>Recommended</button>

            </div>
            <div className="flex justify-around flex-wrap">
            {
                productData.map((obj)=>{
                    return(
                       <h1>hi</h1>
                    )
                })
            }

                </div>
        </div>
        
    )
}

export default Home
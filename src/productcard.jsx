import React from 'react'
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { ThemeStore } from "./utility/ThemeContext";

let ProductCard = ({obj})=>{
let{title, thumbnail, category, rating, price, id} = obj
let Navigate = useNavigate();
let {theme} = useContext(ThemeStore);

let handleclick = ()=>{
  Navigate(`/Product/${id}`);
}
let handlecall = (event)=>{
  console.log("Add button is clicked");
  event.stopPropagation()


}
let darkTheme="card w-96 h-96 bg-base-300 shadow-xl m-4"
let lightTheme="card w-96 h-96 bg-gray-200 shadow-xl m-4"  
return(  <div className={theme=='light'?lightTheme:darkTheme} 
onClick={handleclick}
>
  <figure><img className="bg-zinc-300 rounded-2xl " src={thumbnail} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">
      {title}
    </h2>
    <div className="card-actions justify-center">
      <div className="badge badge-secondary text-size-3">{category}</div>
      <div className="badge badge-secondary">{rating}</div>  
    </div>
  </div>
</div>);
}

export default ProductCard
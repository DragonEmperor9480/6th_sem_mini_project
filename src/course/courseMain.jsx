import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Products from "../data.js";

const CourseMain = () => {
    return(
        <div>
        <div className="h-[92vh] w-screen bg-base-300 pt-10">
            <div className="card card-side bg-base-100 shadow-xl w-1/2 mx-auto">
                {/* <figure><img src="https://placeimg.com/400/400/arch"  /></figure> */}
                <div className="card-body">
                    <h2 className="card-title center mx-7"></h2>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/UrsmFxEIp5k?si=HIjvGa1T2mo_fHZ5" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    <div className="card-actions justify-around">
                        
                    </div>
                  
                </div>
            </div>
        </div>
        
        </div>
    )
};

export default CourseMain;

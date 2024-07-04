import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Products from "./data.js";
import { useNavigate } from "react-router-dom";

const Product = () => {
    let { id } = useParams();
    const [product, setProduct] = useState(null);
    let Navigate = useNavigate();
    let a,b;
    const goToCourse = () => {
        if (id==2)
            Navigate("/CourseGamedev");
        else if (id==3)
            Navigate("/Coursevim");
        else if (id==4)
            Navigate("/Coursegenai");
        else if (id==5)
            Navigate("/Coursenode1");
        else if (id==6)
            Navigate("/Coursereact");
        else if (id==7)
            Navigate("/Courseboothin");
        else
        Navigate("/CourseMain");
        a=1;
        localStorage.setItem("a",a);
    };

    const goToArticle = () => {
        if(id==1)
        window.location.href = "https://www.learnpython.org/";
        else if(id==2)
            window.location.href = "https://www.freecodecamp.org/news/javascript-gamedev-with-kaboomjs/";
            else if(id==3)
            window.location.href = "https://www.freecodecamp.org/news/vim-beginners-guide/";
            else if(id==4)
            window.location.href = "https://steaminai.org/?gad_source=1&gclid=CjwKCAjwp4m0BhBAEiwAsdc4aHFupF0gjHlSQS3hCGsvbPPcS8XY3qg9DkxQtbibzhjelyMj95CWARoCD4QQAvD_BwE";
            else if(id==5)
            window.location.href = "https://www.bing.com/ck/a?!&&p=2e2439c163259832JmltdHM9MTcxOTc5MjAwMCZpZ3VpZD0xM2VmMWE5Yy03ZGMxLTZmNTktMGQ4Ni0wZTBkN2M3MzZlYzcmaW5zaWQ9NTUyNw&ptn=3&ver=2&hsh=3&fclid=13ef1a9c-7dc1-6f59-0d86-0e0d7c736ec7&psq=nodejs+article&u=a1aHR0cHM6Ly93d3cuZ2Vla3Nmb3JnZWVrcy5vcmcvbm9kZWpzLw&ntb=1";
            else if(id==6)
            window.location.href = "https://www.bing.com/ck/a?!&&p=7f28686b93488c39JmltdHM9MTcxOTc5MjAwMCZpZ3VpZD0xM2VmMWE5Yy03ZGMxLTZmNTktMGQ4Ni0wZTBkN2M3MzZlYzcmaW5zaWQ9NTQ4NA&ptn=3&ver=2&hsh=3&fclid=13ef1a9c-7dc1-6f59-0d86-0e0d7c736ec7&psq=react+article&u=a1aHR0cHM6Ly93d3cuZnJlZWNvZGVjYW1wLm9yZy9uZXdzL2FsbC10aGUtZnVuZGFtZW50YWwtcmVhY3QtanMtY29uY2VwdHMtamFtbWVkLWludG8tdGhpcy1zaW5nbGUtbWVkaXVtLWFydGljbGUtYzgzZjliNTNlYWMyLw&ntb=1";
            else if(id==7)
            window.location.href = "https://www.edureka.co/learning-center";
            else if(id==8)
            window.location.href = "https://careerfoundry.com/en/tutorials/web-development-for-beginners/introduction-to-web-development";
            else if(id==9)
            window.location.href = "https://aws.amazon.com/what-is/sql/#:~:text=Structured%20query%20language%20(SQL)%20is%20a%20standard%20language%20for%20database,undergoes%20continual%20upgrades%20and%20improvements.";
            else if(id==10)
            window.location.href = "https://www.w3schools.com/java/java_intro.asp";

        b=1;
        localStorage.setItem("b",b);
    };

    const goToQuiz = () => {
        if(localStorage.getItem("a")==1 && localStorage.getItem("b")==1)
        {   
            if (id==2)
            Navigate("/MCQGamedev");
            else if (id==3)
            Navigate("/MCQvim");
            else if (id==4)
            Navigate("/MCQgenai");
            else if (id==5)
            Navigate("/MCQnode1");
            else if (id==6)
                Navigate("/MCQreact");

            else if (id==7)
                Navigate("/MCQBootstrap");
            else
            Navigate("/MCQ");
        }
        else
        {
            alert("Please complete videos and article first");
        }
    }
    useEffect(() => {
        const foundProduct = Products.find(product => product.id === parseInt(id));
        setProduct(foundProduct);
    }, [id]);

    if (!product) return <></>;

    const { title, description, views, likes, category, rating, thumbnail } = product;
 
    return (
        <div>
        <div className="h-[92vh] w-screen bg-base-300 pt-10">
            <div className="card card-side bg-base-100 shadow-xl w-1/2 mx-auto">
                <figure><img src={thumbnail} alt={title} /></figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p>{description}</p>
                    <div className="card-actions justify-around">
                        <button className="btn">
                            Likes
                            <div className="badge badge-secondary">{likes}</div>
                        </button>
                        <button className="btn">
                            Category
                            <div className="badge badge-secondary">{category}</div>
                        </button>
                        <button className="btn">
                            Rating
                            <div className="badge badge-secondary">{rating}</div>
                        </button>
                        <button className="btn">
                            Views
                            <div className="badge badge-secondary">{views}</div>
                        </button>
                    </div>
                    <div className="card-actions justify-center mt-5">
                        <button className="btn btn-primary mx-7" onClick={goToCourse}> Video</button>
                        <button className="btn btn-primary mx-7" onClick={goToArticle}> Article</button>
                        <button className="btn btn-primary mx-7" onClick={goToQuiz}> Quiz!</button>

                    </div>
                </div>
            </div>
        </div>
        
        </div>
    );
};

export default Product;

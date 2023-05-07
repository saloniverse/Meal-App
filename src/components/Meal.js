import React, { useState } from "react";
import Mealitem from "./MealItem.js";
import './Meal.css';
import searchicon from './images/icon-search.png';

const Meal = () => {
    const[search,setSearch]=useState("");
    const[Mymeal,setMeal]=useState();
    const searchMeal=(evt)=>{
        if(evt.key=="Enter")
        {
            fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
            .then(res=>res.json())
            .then(data => {
                console.log(data);
                setMeal(data.meals);
                setSearch("")
            })
        }
    }
    return (
        <>
            <div className="main">
                <div className="heading">
                    <div className="searchBox">
                        <input type="search" className="search-bar" onChange={(e)=>setSearch(e.target.value)} value={search} onKeyDown={searchMeal}/>
                        <img className='searchicon' src={searchicon} />
                    </div>
                    <h1>What would you like to have today?</h1>
                </div>
                
                <div className="container">
                   {
                    (Mymeal==null)? <p className="noSearchFound">Search not found</p> : 
                         Mymeal.map((response)=>{
                             return(
                            <Mealitem data={response}/>)} 
                    )   
                   }
                </div>
            </div>
        </>
    )
}
export default Meal;
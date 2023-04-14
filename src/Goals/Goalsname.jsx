import React from "react";
import Goals from "./Goals";

export default function Goalsname(){
    let goals = [
        "I want to be a full stack developer by the end of this course",
         "Sooner or later, im going to achieve it",
        "I want to be a full stack developer by the end of this course", 
        "Sooner or later, im going to achieve it",
        "I want to be a full stack developer by the end of this course",
         "Sooner or later, im going to achieve it"
    ]

    // let goalss = goals.map(goal=> <Goals text ={goal}></Goals>)

    return (
        <div className="goalList">
        {goals.map(g => <h3>{g}</h3>)}


        </div>
    )
}


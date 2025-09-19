import React,{useState,useEffect} from "react"
import MusiCreate from "./MusiCreate"

export default function FilterLink(){
    return(
        <div>
            <h1>FilterLink</h1>
            <div id="CardList">
                <MusiCreate/>
            </div>
        </div>
    )
}
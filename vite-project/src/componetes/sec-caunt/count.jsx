import React from "react";
import {useEffect,useState } from "react";
const MyCount = ({count,add,mai}) => {

    return (
        <div>
           

            <div className="main-div" >
            <div className="button" type="button" onClick={add}>+</div>
            <div className="circal">
                    <h1>{count}</h1>
            </div>
            <div  className="button" type="button" onClick={mai}>-</div>
            </div>
        </div>
    )
}

export default MyCount;
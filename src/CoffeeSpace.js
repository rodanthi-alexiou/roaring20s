import './layout.css';
import {Link } from "react-router-dom";
import React, {useState, useEffect} from "react";

export default function CoffeeSpace(){

    
    return(

        <body>
  
        <div class="box">
        <div class="topnav">
        <Link to="/booksrec">Book Recs</Link>
        <Link to="/jams">Jams</Link>
        <Link to="/">Home</Link>
        
      </div>

        <div class="header">
          <h1>Coffee Space</h1>
          <p>Your safe space</p>
          <img src={"https://i.pinimg.com/564x/e2/57/d4/e257d41074880d5c51c326b994110639.jpg"} class="image"/>
          <p>and it's okay</p>
        </div>


        </div>
      </body>
    );
}
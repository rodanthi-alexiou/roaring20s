import './layout.css';
import {Link } from "react-router-dom";
import React, {useState, useEffect} from "react";

export default function BookPost(props){

    
    return(

        <body>
  
        <div class="topnav">
        <Link to="/">Home</Link>
        <Link to="/jams">Jams</Link>
        <Link to="/coffeespace">Coffee Space</Link>
      </div>

        <div class="bookpost_header">
          <h1>Review Coming Soon</h1>

        </div>

        <div class="bookpost_image">
        
        <img border="0" src={"https://i.pinimg.com/564x/0f/8e/c2/0f8ec2583cf0501b531ff8ac25e504ed.jpg"} width="300px" height="auto" class="image"/>

      </div>


        <div class="leftcolumn_post">
          <h5 class="bookpost_body">{props.article}</h5>
        </div>


        <div class="rightcolumn"> 
            <img border="0" src={props.photo} width="auto" height="auto"/>

        </div>
        

      </body>
    );
}
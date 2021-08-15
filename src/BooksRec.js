
  import './layout.css';
  import Book from './BookPhoto'
  import {Link } from "react-router-dom";
  
  function BooksRec() {
    return (
      <body>
      
                    <div class="topnav">
                    <Link to="/">Home</Link>
                    <Link to="/jams">Jams</Link>
                    <Link>Coffee Space</Link>
                  </div>
  
                    <div class="header">
                      <h1>Book Opinions No One Asked</h1>
                    </div>
      
                    <div class="leftcolumn">

                    <div class="grid">


                      <Book url="https://i.pinimg.com/236x/22/6c/b1/226cb15d6671e5de34e0f8f095b9f6e8.jpg"/>
                      <Book url="https://i.pinimg.com/236x/0b/89/96/0b89965d0e0827c6cf871b6d255c07dc.jpg"/>
                      <Book url="https://i.pinimg.com/236x/d7/67/2c/d7672c682e8cc5b447c04f2140b5cb0e.jpg"/>
                      <Book url="https://i.pinimg.com/236x/bd/b6/5e/bdb65e86708dbded2cf371c5895453ba.jpg"/>
                      <Book url="https://i.pinimg.com/236x/7f/82/2d/7f822dcaf69feb2cc74555c5e73874a7.jpg"/>


                      </div>
                    </div>


                    <div class="rightcolumn"> 
                        <h1>Almost Adulting</h1>
                        <h1>Feminist Works</h1>
                        <h1>Debate Club</h1>

                    </div>
                    
  
                  </body>
                  
                
  
    );
  }
  
  export default BooksRec;
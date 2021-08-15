import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import HashRouter from "hash-router";
import './layout.css';

import Jams from "./Jams"
import BooksRec from "./BooksRec"
import BookPost from './BookPost'




function App() {
  return (

    <body>
                          
    <div class="box">
    <div class="topnav">
    <a href="/roaring20s/booksrec">Book Recs</a>
    <a href="/roaring20s/jams">Jams</a>
    <a>Coffee Space</a>
  </div>

    <div class="header">
      <h1>Roaring 20s</h1>
      <p>No one knows what they're doing either</p>
      <img src={"https://i.pinimg.com/564x/e2/57/d4/e257d41074880d5c51c326b994110639.jpg"} class="image"/>
      <p>and it's okay</p>
    </div>


    </div>
  </body>     

  );
}

export default App;

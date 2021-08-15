import {
  BrowserRouter as Router,
  Switch,
  Route,
  HashRouter,
  Link,
} from "react-router-dom";

import './layout.css';

import Jams from "./Jams"
import BooksRec from "./BooksRec"
import BookPost from './BookPost'




function App() {
  return (
    <HashRouter basename="/">
    <Switch>
    <Route
      exact
      path="/" render={() => {
          return(
            
            <body>
            
            <div class="box">
            <div class="topnav">
            <Link to="/booksrec">Book Recs</Link>
            <Link to="/jams">Jams</Link>
            <Link>Coffee Space</Link>
            
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
        }}/>



    <Route path="/booksrec" component={BooksRec}/>
    <Route path="/jams" component={Jams}/>
    <Route path="/bookpost" component={BookPost}/>
  </Switch>     
  </HashRouter>
  );
}

export default App;

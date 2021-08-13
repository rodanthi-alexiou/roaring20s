import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './layout.css';
import Profile from "./Profile"
import Jams from "./Jams"
import Story from "./Story"
import CreateStory from "./CreateStory"
import BooksRec from "./BooksRec"
import BookPost from './BookPost'




function App() {
  return (
                
                <Router>
                <Switch>
                  <Route
                    exact
                    path="/" render={() => {
                        return(
                          
                          <body>
                          
                          <div class="box">
                          <div class="topnav">
                          <a href="/booksrec">Book Recs</a>
                          <a href="/jams">Jams</a>
                          <a href="/hobbys">Coffee Space</a>
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
        
        
                  <Route path="/profile" component={Profile}/>
                  <Route path="/booksrec" component={BooksRec}/>
                  <Route path="/jams" component={Jams}/>
                  <Route path="/story" component={Story}/>
                  <Route path="/createstory" component={CreateStory}/>
                  <Route path="/bookpost" component={BookPost}/>
                </Switch>
              </Router>
              

  );
}

export default App;

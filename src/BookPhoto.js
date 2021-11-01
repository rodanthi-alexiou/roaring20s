import './layout.css';
import  {Link} from "react-router-dom";

export default function Book(props){
    const newTo = { 
        pathname: "/bookpost", 
        name: "Par1", 
        article: "testing",
        photo: "https://i.pinimg.com/236x/13/a5/c2/13a5c2fb97c18b8c25fb8659d0c6adff.jpg"
      };
    return(
        <div class="book_grid">
        <Link to={newTo} params={{ name: "Part1" }}>
            <img border="0" src={props.url} width="auto" height="auto"/>
        </Link>
        </div>
    )
}
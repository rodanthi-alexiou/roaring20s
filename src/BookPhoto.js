import './layout.css';
import  {Link} from "react-router-dom";

export default function Book(props){
    return(
        <div class="book_grid">
        <Link to="/bookpost">
            <img border="0" src={props.url} width="auto" height="auto"/>
        </Link>
        </div>
    )
}
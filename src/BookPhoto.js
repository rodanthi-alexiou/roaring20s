import './layout.css';

export default function Book(props){
    return(
        <div class="book_grid">
        <a href="/bookpost">
            <img border="0" src={props.url} width="auto" height="auto"/>
        </a>
        </div>
    )
}
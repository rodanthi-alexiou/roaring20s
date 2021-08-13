import './layout.css';

export default function Playlist(props){
    return(
        <div class="card_grid">
        <iframe src={props.src_code} width="95%" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
        </div>
    )
}

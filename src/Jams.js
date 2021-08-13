import './layout.css';
import Playlist from './Playlist'
  
  
  function Jams() {
    return (
      <body>
  
                    <div class="topnav">
                    <a href="/">Home</a>
                    <a href="/booksrec">Books Rec</a>
                    <a >Coffee Space</a>
                  </div>
  
                    <div class="header">
                      <h1>Playlists that give some good vibes</h1>
                      <div class="grid">

                      <Playlist name="The 7 Husbands of Evelyn Hugo" src_code="https://open.spotify.com/embed/playlist/2SNwU2pK1XmIMokY3AGInI"/>
                      <Playlist name="Daisy Jones & the Six" src_code="https://open.spotify.com/embed/playlist/0QenuUPQl69LxnVDSOkE6f"/>
                      <Playlist name="100 Years of Solitude" src_code="https://open.spotify.com/embed/playlist/1qdS6pjmu2L0Q70wpl0KM3"/>
                      <Playlist name="mental breakdown soundtrack" src_code="https://open.spotify.com/embed/playlist/3GOepEWDIxjNl16XzXdD9S"/>
                      <Playlist name="mental breakdown soundtrack" src_code="https://open.spotify.com/embed/playlist/1VdV2GXVgOSA8hh8eeUw1E"/>
                      
                      
                      </div>
                    </div>

                    

                    
  
                  </body>
                  
                
  
    );
  }
  
  export default Jams;
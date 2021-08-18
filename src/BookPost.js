import './layout.css';
import {Link } from "react-router-dom";

export default function BookPost(props){
    return(

        <body>
  
        <div class="topnav">
        <Link to="/">Home</Link>
        <Link to="/jams">Jams</Link>
        <Link >Coffee Space</Link>
      </div>

        <div class="bookpost_header">
          <h1>100 Years of Solitude - Sad?</h1>
        </div>

        <div class="leftcolumn_post">
          
          <h5 class="bookpost_body">Earlier this year I made my first visit to Colombia. During my stay, I became familiar with many of the emblems around which this wonderful nation’s image revolves. There is of course the coffee, some of the best in the world and perhaps primarily known to Americans by the mustachioed Juan Valdez. There are also the ancient indigenous civilizations, whose exquisite artifacts you will see in museums everywhere. Then there is the world-famous painter Fernando Botero, who has adapted his unique style to depict countless national icons, as well as the torture practiced by US soldiers at Iraq’s Abu Ghraib prison. And most of all, towering over the rest, is Colombia’s most beloved author, Gabriel García Márquez.

          There is an oft-told anecdote that cuts to the heart of this writer’s greatness. As he wrote One Hundred Years of Solitude, he would regularly meet with his fellow great Colombian author Álvaro Mutis, updating Mutis on his progress by narrating the latest events from his novel. There was just one problem: none of what García Márquez told Mutis actually occurs in the book. He had effectively made up an entire shadow-novel while in the middle of writing one of the most imaginative and jam-packed books in the history of modern literature. This is a measure of how many competing realities existed in García Márquez’s voracious mind.
          
          I am writing about this author today because his greatest work, One Hundred Years of Solitude, turns 50 years old this year, and I would like to understand why it has had such flabbergasting success. This immense novel is claimed to be an effort to express everything that had influenced García Márquez throughout his childhood. It has been called a latter-day Genesis, the greatest thing in Spanish since Don Quixote (by Pablo Neruda, no less), and unique even by the standards of the colossi of the Boom era. García Márquez wrote it in one rapturous year in Mexico City, supposedly chain-smoking 60 cigarettes a day, secluded and reliant on his wife for the necessities of living. To paraphrase critic Harold Bloom, there is not a single line that does not flood with detail: “It is all story, where everything conceivable and inconceivable is happening at once.”
          
          There are hits, and then there are smash hits, and then there are rocket ships to Mars—One Hundred Years of Solitude would qualify as the last. Estimates of its sales are around 50 million worldwide, which would put it in the range of books like The Adventures of Sherlock Holmes, Lolita, To Kill a Mockingbird, and 1984. College syllabi can certainly account for some of this figure, but when one considers by just how much García Márquez’s sales dwarf his fellow Boom greats—Carlos Fuentes, Mario Vargas Llosa, and Julio Cortázar—something more than higher education must be called to account. Nor is it easy to explain One Hundred Years of Solitude’s global diffusion: published in at least 44 languages, it is the most translated Spanish-language literary work after Don Quixote.</h5>

        </div>


        <div class="rightcolumn"> 
            <img border="0" src={"https://i.pinimg.com/236x/13/a5/c2/13a5c2fb97c18b8c25fb8659d0c6adff.jpg"} width="auto" height="auto"/>

        </div>
        

      </body>
    );
}
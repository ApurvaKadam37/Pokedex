/*** @function : selectedPokemon
 *  @description:Created a function were  all pokemonData are getting fetch using api and id is passed from pokemonlist */
const selectedPokemon = async (id) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  const res = await fetch(url);
  const pokeinfo = await res.json();
  console.log("pokeinfo =", pokeinfo);
  displayPopup(pokeinfo);
};

/*** @function : displayPopup
 *  @description:Created a function were popup are getting displayed onclicking the card*/

const displayPopup = (pokemonlist) => {
  //   alert("pokemonlist info= " + pokemonlist);

  const name = pokemonlist.name.toUpperCase();
  const ID = pokemonlist.id.toString().padStart(3, "0");

  const popup = ` <div class="close-btn" onclick="togglePopup()">&times</div>
    <div class="pokemon-container" tabindex="5">        
        <section class="pokemonImg-container">
             <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemonlist.id}.svg" alt="${pokemonlist.name}" >
        </section>

        <div class="pokemon-content">    
                <div class="pokemon-title">   
                     <span class="name">${name} | </span>   
                      <span class="number">${ID} |</span>    
                </div>        
                <div class="pokemon-description">      
                  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. A numquam debitis, provident temporibus, suscipit deleniti veniam assumenda quidem harum amet, quibusdam aliquam tempora ullam voluptatibus modi sint consequatur rerum! Pariatur.</p>
                </div>         
         </div>      
    </div>  `;

  document.getElementById("poko").innerHTML = popup;
  togglePopup();
};

/*** @function : togglePopup
 *  @description:Created a function were its gets popped on getting activated */

const togglePopup = () => {
  document.getElementById("popup-1").classList.toggle("active");
};

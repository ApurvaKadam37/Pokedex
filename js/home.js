/*** @description: These used for importing colors according to their types */

import { typeColors } from "../js/utility/pokemontype.js";
const main_types = Object.keys(typeColors);
console.log("main_types :", main_types);

/*** @description: This id is used to render the function on DOM */
const pokemonbaby = document.getElementById("pokemonbaby");

/*** @description: These are the counts of pokemon to be listed */
const pokemonArray = 20;

/*** @description: These are used to search pokemon */
var pokemon = [];
var inputVal = "";
const inputData = document.getElementById("inputChange");
inputData.addEventListener(
  "change",
  (e) => {
    inputVal = e.target.value;
  },
  true
);

const res1 = document.getElementById("submitData");
res1.addEventListener("click", () => {
  return filteByNameOrNum();
});

function filteByNameOrNum() {
  let card = document.getElementsByClassName("pokemonlist");
  for (let i = 0; i < card.length; i++) {
    if (card[i].innerHTML.match(inputVal)) {
      card[i].style.display = "pokemon";
    } else {
      card[i].style.display = "none";
    }
  }
  console.log("filter ", filteredPokemon);
  createPokemonList(filterdPokemon);
}

/*** @description: These are type of list used for filter */
var checkList = document.getElementById("list1");
checkList.getElementsByClassName("anchor")[0].onclick = function (evt) {
  if (checkList.classList.contains("visible"))
    checkList.classList.remove("visible");
  else checkList.classList.add("visible");
};

/*** @function : fetchBabyPokemon
 *  @description: Created a function that runs the function upto the count*/

const fetchBabyPokemon = async () => {
  for (let i = 1; i <= pokemonArray; i++) {
    await getBabyPokemon(i);
  }
};

/*** @function : getBabyPokemon
 *  @description:Created a function were  all pokemonData are getting fetch using api */

const getBabyPokemon = async (id) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  const res = await fetch(url);
  const pokeinfo = await res.json();
  console.log("pokeinfo =", pokeinfo);
  createPokemonList(pokeinfo);
};

/*** @function : createPokemonList
 *  @description:Created a function were  all pokemonData are getting created and displayed */

const createPokemonList = (pokemonlist) => {
  const pokemonEl = document.createElement("div");
  pokemonEl.classList.add("pokemonlist");

  const name = pokemonlist.name[0].toUpperCase() + pokemonlist.name.slice(1);
  const ID = pokemonlist.id.toString().padStart(3, "0");

  console.log("Types Array :", pokemonlist.types);
  const pokemontypes = pokemonlist.types
    .map((data) => data.type.name)
    .join(",");
  console.log("Types =>", pokemontypes);
  const type = main_types.find((type) => pokemontypes.indexOf(type) > -1);
  console.log("type color :", type);
  const color = typeColors[type];
  pokemonEl.style.backgroundColor = color;

  const pokemonCardHTML = `
      <div class="pokemon-inner-container" onclick="selectedPokemon(${pokemonlist.id})" tabindex="4">
         <section class="pokemon-img-container">
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemonlist.id}.svg" alt="${name}" >
         </section>
         <section class="pokemon-info">
            <h3>${name}</h3>
            <span>${ID}</span>
         </section>
     </div>`;

  pokemonEl.innerHTML = pokemonCardHTML;
  pokemonbaby.appendChild(pokemonEl);
};

fetchBabyPokemon();

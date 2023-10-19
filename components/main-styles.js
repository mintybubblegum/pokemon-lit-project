import {css} from 'lit';

const typeColor = {
    "black": css`#1c1c1c`,
    "gray": css`#ececec`,
    "white": css`#f7f7f7`,

    "normal": css`#A8A878`,
    "fire": css`#F08030`,
    "water": css`#6890F0`,
    "grass": css`#78C850`,
    "electric": css`#F8D030`,
    "ice": css`#98D8D8`,
    "fighting": css`#C03028`,
    "poison": css`#A040A0`,
    "ground": css`#E0C068`,
    "flying": css`#A890F0`,
    "psychic": css`#F85888`,
    "bug": css`#A8B820`,
    "rock": css`#B8A038`,
    "ghost": css`#705898`,
    "dark": css`#705848`,
    "dragon": css`#7038F8`,
    "steel": css`#B8B8D0`,
    "fairy": css`#F0B6BC`
}

export const mainStyles = css`

@import url('https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500;600;700;800;900&display=swap');

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    color: var(--clr-black);
    font-family: 'Rubik', sans-serif;
}

ul {
    list-style-type: none;
    display: flex;
    justify-content: center;
}

button {
    background-color: transparent;
    border: 0;
    border-radius: 0;
}

body {
    min-height: 100vh;
    background-color: var(--clr-gray);
}

header {
    padding-block: 1rem;
    box-shadow: 0 0 2rem -1rem rgba(0, 0, 0, .5);
}

img {
    padding: 20px 0 20px 20px;
}

.nav {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: flex-start;
    padding-inline: 2rem;
    max-width: 1000px;
    margin: 0 auto;
}

.nav-list {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: .5rem;
}

.btn-header {
    background-color: var(--clr-gray);
    padding: .5rem;
    border-radius: 100vmax;
    cursor: pointer;
    text-transform: uppercase;
    font-weight: 600;
    box-shadow: 0 0 1rem rgba(0, 0, 0, .25);
    transition: .2s;
}

.btn-header:hover {
    transform: scale(1.1);
    box-shadow: 0 0 2rem rgba(0, 0, 0, .25);
}

main {
    padding: 2rem;
    max-width: 1000px;
    margin: 0 auto;
}

.pokemon-all {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1rem;
}

@media screen and (min-width: 470px) {
    .pokemon-all {
        grid-template-columns: 1fr 1fr;
    }
}

@media screen and (min-width: 700px) {
    .pokemon-all {
        grid-template-columns: 1fr 1fr 1fr;
    }
}

.pokemon {
    border-radius: 1rem;
    background-color: var(--clr-white);
    box-shadow: 0 0 3rem -1rem rgba(0, 0, 0, .25);
    padding-block: 1rem;
    text-transform: uppercase;
    position: relative;
    isolation: isolate;
    overflow: hidden;
}

.pokemon-id-back {
    position: absolute;
    top: 1rem;
    left: 50%;
    transform: translateX(-50%);
    font-size: 6rem;
    font-weight: 800;
    z-index: -1;
    color: var(--clr-gray);
}

.pokemon-image {
    padding-inline: 1rem;
    display: flex;
    justify-content: center;
}

.pokemon-image img {
    width: 100%;
    max-width: 6rem;
}

.pokemon-info {
    display: flex;
    flex-direction: column;
    gap: .5rem;
    padding-inline: 1rem;
    align-items: center;
    text-align: center;
}

.name-container {
    display: flex;
    align-items: center;
    column-gap: .5rem;
    flex-wrap: wrap;
    justify-content: center;
}

.pokemon-id {
    background-color: var(--clr-gray);
    padding: .25rem .5rem;
    border-radius: 100vmax;
    font-size: .75rem;
    font-weight: 500;
}

.pokemon-name {
    font-size: 1.4rem;
}

.pokemon-types {
    display: flex;
    gap: .5rem;
    font-size: .75rem;
    font-weight: 500;
    flex-wrap: wrap;
    justify-content: center;
}

.type {
    padding: .25rem .5rem;
    border-radius: 100vmax;
}

.pokemon-stats {
    display: flex;
    gap: 1rem;
    font-size: .85rem;
}

.stat {
    background-color: var(--clr-gray);
    padding: .25rem .5rem;
    border-radius: 100vmax;
}

/* COLOUR FILTER BUTTONS */

.normal {
    background-color: ${typeColor["normal"]};
    color: ${typeColor["black"]};
}

.fire {
    background-color: ${typeColor["fire"]};
    color: ${typeColor["black"]};
}

.water {
    background-color: ${typeColor["water"]};
    color: ${typeColor["white"]};
}

.grass {
    background-color: ${typeColor["grass"]};
    color: var(--clr-black);
}

.electric {
    background-color: ${typeColor["electric"]};
    color: var(--clr-black);
}

.ice {
    background-color: ${typeColor["ice"]};
    color: var(--clr-black);
}

.fighting {
    background-color: ${typeColor["fighting"]};
    color: var(--clr-white);
}

.poison {
    background-color: ${typeColor["fire"]};
    color: var(--clr-white);
}

.ground {
    background-color: ${typeColor[""]};
    color: var(--clr-black);
}

.flying {
    background-color: ${typeColor[""]};
    color: var(--clr-black);
}

.psychic {
    background-color: ${typeColor[""]};
    color: var(--clr-black);
}

.bug {
    background-color: ${typeColor[""]};
    color: var(--clr-black);
}

.rock {
    background-color: ${typeColor[""]};
    color: var(--clr-black);
}

.ghost {
    background-color: var(--type-ghost);
    color: var(--clr-white);
}

.dark {
    background-color: var(--type-dark);
    color: var(--clr-white);
}

.dragon {
    background-color: ${typeColor[""]};
    color: var(--clr-white);
}

.steel {
    background-color: ${typeColor[""]};
    color: var(--clr-black);
}

.fairy {
    background-color: ${typeColor[""]};
    color: var(--clr-black);
}`;
import {css} from 'lit';

const typeColor = {
    "smoke": css`#1c1c1c`,
    "cloudy": css`#ececec`,
    "snow": css`#f7f7f7`,

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

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    color: ${typeColor["smoke"]};
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

header {
    padding-block: 1rem;
    background-color:${typeColor["snow"]};
    box-shadow: 0 0 2rem -1rem rgba(0, 0, 0, 1)!important;
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
    background-color: ${typeColor["cloudy"]};
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


/* COLOUR FILTER BUTTONS */

.normal {
    background-color: ${typeColor["normal"]};
    color: ${typeColor["smoke"]};
}

.fire {
    background-color: ${typeColor["fire"]};
    color: ${typeColor["smoke"]};
}

.water {
    background-color: ${typeColor["water"]};
    color: ${typeColor["snow"]};
}

.grass {
    background-color: ${typeColor["grass"]};
    color: ${typeColor["smoke"]};
}

.electric {
    background-color: ${typeColor["electric"]};
    color: ${typeColor["smoke"]};
}

.ice {
    background-color: ${typeColor["ice"]};
    color: ${typeColor["smoke"]};
}

.fighting {
    background-color: ${typeColor["fighting"]};
    color: ${typeColor["snow"]};
}

.poison {
    background-color: ${typeColor["poison"]};
    color: ${typeColor["snow"]};
}

.ground {
    background-color: ${typeColor["ground"]};
    color: ${typeColor["snow"]};
}

.flying {
    background-color: ${typeColor["flying"]};
    color: ${typeColor["snow"]};
}

.psychic {
    background-color: ${typeColor["psychic"]};
    color: ${typeColor["snow"]};
}

.bug {
    background-color: ${typeColor["bug"]};
    color: ${typeColor["smoke"]};
}

.rock {
    background-color: ${typeColor["rock"]};
    color: ${typeColor["smoke"]};
}

.ghost {
    background-color: ${typeColor["ghost"]};
    color: ${typeColor["snow"]};
}

.dark {
    background-color: ${typeColor["dark"]};
    color: ${typeColor["snow"]};
}

.dragon {
    background-color: ${typeColor["dragon"]};
    color: ${typeColor["snow"]};
}

.steel {
    background-color: ${typeColor["steel"]};
    color: ${typeColor["smoke"]};
}

.fairy {
    background-color: ${typeColor["fairy"]};
    color: ${typeColor["smoke"]};
}
`;
// usar funciones y metodos para ordenar y filtrar -- sort, filter, map...

import { LitElement, html, css } from 'lit';
import { pokemons } from '../db/pokemon';
import './header';
import  './searchbar';
import './card';

import { mainStyles } from "./main-styles";
        

class main extends LitElement {
  static styles = [
    mainStyles,
    css`
      :host {
        display: block;
      }

      #pokemon-container{
        width: 400px;
        background-color: #ececec;
        border-radius:20px;
        box-shadow: 0 0 2.5rem -1rem rgba(0, 0, 0, .5);
        text-align: center;
        text-transform: uppercase;
        margin: auto;
        margin-bottom: 50px;
        float:left;
        margin-left:70px;
      }
      
      h3 {
        margin: -20px 0 20px 0;
      }
      
      section {
        margin:0;
        padding:0;
        background-color: #f9a7a7;
        }

        img {
        cursor: pointer;
        }

        img:hover {
        opacity: 0.5;
        }
    `
  ];

  static get properties() {
    return {
        pokemons: { type: Array},
        selectedPokemon:{type:Object},
        isCardOpen: { type: Boolean },
    };
  }

  constructor() {
      super();
      this.pokemons = pokemons;
      this.selectedPokemon = {};
      this.isCardOpen = false;
    }

  render() {
    return html`
      <header-section .isCardOpen="${this.isCardOpen}"></header-section>
      ${this.isCardOpen ? '' : html`<search-bar></search-bar>`}
      ${this._body}
      `;
  }

  handleSearch(event) {
    const searchTermNew = event.detail;
    const filteredPokemons = pokemons.filter(pokemon => pokemon.name.includes(searchTermNew));
    this.pokemons = filteredPokemons;
    this.allPokemons(filteredPokemons);
    this.requestUpdate();
  }

  allPokemons(pokemons){
    if(pokemons?.length){
    return html`
      <section>
        ${pokemons
          .map( pokemon => html`
            <a @click="${() => this.openCard(pokemon)}">
              <div id="pokemon-container">
                <p class="">#${pokemon.num}</p>
                <img src="${pokemon.img}" alt="${pokemon.name}">
                <h3>#${pokemon.num} ${pokemon.name}</h3>
              </div>
            </a>
          `)}
      </section>
    `;

    }
  }

  get _body() {
    if (this.selectedPokemon.img === undefined){
      return html `${this.allPokemons(this.pokemons)}`;
    } else {
      return html `${this._card}`;
    }
  }

  get _card() {
    return html`
      <card-page .pokemonData="${this.selectedPokemon}" @close-card="${this.closeCard}"></card-page>
      `;
  }

  openCard(pokemon) {
    this.selectedPokemon = pokemon;
    this.isCardOpen = true;
  }

  closeCard() {
    this.isCardOpen = false;
  }
}

customElements.define('main-page', main);
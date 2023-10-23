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
          text-align: center;
          margin: auto;
          float:left;
          margin-left:70px;
        }
        
        section {
          min-height: 100vh;
          background-color: #e02f2f;
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
          selectedPokemon:{type:Object}
      };
  }

  constructor() {
      super();
      this.pokemons = pokemons;
      this.selectedPokemon = {};
    }

  render() {
    return html`
      <header-section></header-section>
      <search-bar @search="${this.handleSearch}"></search-bar>
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
                <img src="${pokemon.img}" alt="${pokemon.name}">
                <h3>${pokemon.num} ${pokemon.name}</h3>
              </div>
            </a>
          `)}
      </section>
    `;

    }
  }

  get _body(){
    if(this.selectedPokemon.img===undefined){
     return html `${this.allPokemons(this.pokemons)}`;
    }else{
        return html `${this._card}`;
    }
  }

  openCard(pokemon) {
    this.selectedPokemon = pokemon;
  }

  get _card(){
    return html`
      <card-page .pokemonData="${this.selectedPokemon}">
      </card-page>
    `;
  }
}

customElements.define('main-page', main);
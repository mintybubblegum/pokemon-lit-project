// mostrar, filtrar y ordenar data
// usar funciones y metodos para ordenar y filtrar -- sort, filter, map...
// commit cada cosa importante que hagamos y al final del dia también

import { LitElement, html, css } from 'lit';
import { Header } from './header';
import { Footer } from './footer'
import { pokemons } from '../db/pokemon';

class Main extends LitElement {
    static styles = [
      css`
        :host {
          display: block;
        }
        #pokemon-container{
          width: 400px;
          text-align: center;
          border: 1px solid red;
          margin: auto;
          float:left;
        }
      `,
    ];

constructor() {
    super();
    this.pokemons = pokemons;
  }

  render() {
    return html`
        <header-section></header-section>
        ${this.pokemons.map( pokemon => html`
          <a>
            <div id="pokemon-container">
              <img src="${pokemon.img}" alt="${pokemon.name}">
              <h3>#${pokemon.num} ${pokemon.name}</h3>
            </div>
          </a>
        `)}
        
    `;
  }
}

customElements.define('main-page', Main);
import { LitElement, html, css } from 'lit';
import { mainStyles } from "./main-styles.js";
import './header';


export class card extends LitElement {
    static styles = [
        mainStyles,
        css`
            :host {
                display: block;
            }
            div {
                background-image: url("");
            }
            button {
                width: 250px;
                border: 2px solid green;
                background-color: #4CAF50;
                border-radius: 15px;
                color: white;
                padding: 20px;
                text-align: center;
                text-decoration: none;
                display: inline-block;
                font-size: 16px;
                margin: 4px 2px;
            }
        `
    ];
    static get properties() {
        return {
            pokemonData: { type: Object },
        };
    }

    constructor(){
        super();
        this.pokemonData = {};
    }

    render() {
        return html`
            <div id="card-container">
                <img src="${this.pokemonData?.img}" alt="${this.pokemonData?.name}">
                <h1>${this.pokemonData?.name}</h1>
                <p>${this.pokemonData.about}</p>
                <h3>${this.pokemonData.size.weight}</h3>
                <h3>${this.pokemonData.size.height}</h3>

                ${this.pokemonData.type
                    .map( data => html`
                        <button class="type-pokemon">${data[1]}</button>
                    `)
                }

                <h3>Weaknesses: ${this.pokemonData.weaknesses.target}</h3>
            </div>
        `;
    }
}
customElements.define('card-page', card);
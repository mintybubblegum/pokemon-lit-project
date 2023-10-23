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
                background-image: url("pokemon-bg.mp4");
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
                <h3>${this.pokemonData?.num} ${this.pokemonData?.name}</h3>
            </div>
        `;
    }
}
customElements.define('card-page', card);
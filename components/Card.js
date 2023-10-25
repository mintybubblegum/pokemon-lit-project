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
            #card-container {
                background-image: url("");
                background-color: #ececec;
                width: 800px;
                margin: auto;
                margin-top:100px;
                margin-bottom: 50px;
                padding: 0 30px;
                border-radius: 20px;
                box-shadow: 0 0 2rem -1rem rgba(0, 0, 0, 1)!important;
                text-align: center;
                font-family: 'Mukta', sans-serif;
            }
            button {
                width: 150px;
                background-color: #4CAF50;
                border-radius: 30px;
                color: white;
                padding: 10px 0;
                text-align: center;
                font-size: 16px;
                margin: 4px 2px;
            }
            p {
                padding: 0 60px 25px;
            }
            span.a {
                display: inline;
                padding: 5px;
            }
            span.b {
                display: inline;
                padding: 5px;
                font-weight: 600;
            }
            .inline-box {
                display: flex;
                align-items: center;
                justify-content:center;
                font-weight: 600;
            }
            .padding-box {
                padding-bottom: 25px;
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
                <div class="data-box">
                    <h1 class="padding-box">${this.pokemonData.name.toUpperCase()}</h1>
                    
                    <div class="padding-box">
                        <p>${this.pokemonData.about}</p>
                        <span class="b">Height:</span><span class="a"></span>${this.pokemonData.size.height}</span>
                        <span class="b">Weight:</span><span class="a">${this.pokemonData.size.weight}</span>
                    </div>
                    
                    
                    <div class="inline-box">
                        <div class="inline-text">Type: </div>
                        ${this.pokemonData.type
                            .map( data => html`
                                <div class="inline-type">
                                    <button class="type-pokemon">${data}</button>
                                </div>
                            `)
                        }
                    </div>
                    <div class="inline-box padding-box">
                        <div class="inline-text">Weaknesses: </div>
                        ${this.pokemonData.weaknesses
                            .map( weakness => html`
                                <div class="inline-type">
                                    <button class="type-pokemon">${weakness}</button>
                                </div>
                            `)
                        }
                    </div>
                </div>
            </div>
        `;
    }
    
}
customElements.define('card-page', card);
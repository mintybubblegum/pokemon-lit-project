import { LitElement, html, css } from 'lit';
import { mainStyles } from "./main-styles.js";

export class header extends LitElement {
    static styles = [
        mainStyles,
        css`
            :host {
                display: block;
            }
            img {
                cursor: pointer;
            }
            .team-img {
                width: 12em;
            }
            article {
                position: relative;
                height: 0;
                text-align: center;
            }
            .message-img {
                width: 10em;
                position: absolute;
                margin: -170px 0 0 -50px;
            }
        `
    ];

    static get properties() {
        return {
            isCardOpen: { type: Boolean }
        };
    }

    constructor() {
        super();
        this.isCardOpen = false;
      }

    render() {
        return html`
            <header>
                <a href="/"><img src="https://fontmeme.com/permalink/231019/5bc185de76f1f0c4891382e46a72db2a.png" alt="pokemon-font" border="0"></a>
                ${this.isCardOpen ? html`<img class="team-img" src="/src/ash-and-pikachu.png" alt="ash-and-pikachu-picture">` : ''}
                <article>
                    ${this.isCardOpen ? html`<img class="message-img" src="/src/poke-message.png" alt="pokemon-message">` : ''}
                </article>
                <ul class="nav-list">
                    ${this.isCardOpen ? '' : html`<li class="nav-item"><button class="btn btn-header" id="ver-all">See all</button></li>`}
                    ${this.isCardOpen ? '' : html`<li class="nav-item"><button class="btn btn-header normal" id="normal">Normal</button></li>`}
                    ${this.isCardOpen ? '' : html`<li class="nav-item"><button class="btn btn-header fire" id="fire">Fire</button></li>`}
                    ${this.isCardOpen ? '' : html`<li class="nav-item"><button class="btn btn-header water" id="water">Water</button></li>`}
                    ${this.isCardOpen ? '' : html`<li class="nav-item"><button class="btn btn-header grass" id="grass">Grass</button></li>`}
                    ${this.isCardOpen ? '' : html`<li class="nav-item"><button class="btn btn-header electric" id="electric">Electric</button></li>`}
                    ${this.isCardOpen ? '' : html`<li class="nav-item"><button class="btn btn-header ice" id="ice">Ice</button></li>`}
                    ${this.isCardOpen ? '' : html`<li class="nav-item"><button class="btn btn-header fighting" id="fighting">Fighting</button></li>`}
                    ${this.isCardOpen ? '' : html`<li class="nav-item"><button class="btn btn-header poison" id="poison">Poison</button></li>`}
                    ${this.isCardOpen ? '' : html`<li class="nav-item"><button class="btn btn-header ground" id="ground">Ground</button></li>`}
                    ${this.isCardOpen ? '' : html`<li class="nav-item"><button class="btn btn-header flying" id="flying">Flying</button></li>`}
                    ${this.isCardOpen ? '' : html`<li class="nav-item"><button class="btn btn-header psychic" id="psychic">Psychic</button></li>`}
                    ${this.isCardOpen ? '' : html`<li class="nav-item"><button class="btn btn-header bug" id="bug">Bug</button></li>`}
                    ${this.isCardOpen ? '' : html`<li class="nav-item"><button class="btn btn-header rock" id="rock">Rock</button></li>`}
                    ${this.isCardOpen ? '' : html`<li class="nav-item"><button class="btn btn-header ghost" id="ghost">Ghost</button></li>`}
                    ${this.isCardOpen ? '' : html`<li class="nav-item"><button class="btn btn-header dark" id="dark">Dark</button></li>`}
                    ${this.isCardOpen ? '' : html`<li class="nav-item"><button class="btn btn-header dragon" id="dragon">Dragon</button></li>`}
                    ${this.isCardOpen ? '' : html`<li class="nav-item"><button class="btn btn-header steel" id="steel">Steel</button></li>`}
                    ${this.isCardOpen ? '' : html`<li class="nav-item"><button class="btn btn-header fairy" id="fairy">Fairy</button></li>`}
                </ul>    
            </header>
        `;
    }
}
customElements.define('header-section', header);

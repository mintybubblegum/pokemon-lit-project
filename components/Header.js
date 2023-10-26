import { LitElement, html, css } from 'lit';
import { mainStyles } from "./main-styles.js";

export class Header extends LitElement {
    static styles = [
        mainStyles,
        css`
            :host {
                display: block;
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
                <div class="header-imgages">
                    <a href="/"><img class="poke-logo" src="https://fontmeme.com/permalink/231019/5bc185de76f1f0c4891382e46a72db2a.png" alt="pokemon-font" border="0"></a>
                    ${this.isCardOpen ? html`<img class="pika-img" src="/src/pika-message.png" alt="pokemon-message">` : ''}
                </div>
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
customElements.define('header-section', Header);

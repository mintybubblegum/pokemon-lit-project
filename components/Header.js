import { LitElement, html, css } from 'lit';
import { mainStyles } from "./main-styles.js";

export class header extends LitElement {
    static styles = [
        mainStyles,
        css`
            :host {
                display: block;
            }
        `
    ];

    render() {
        return html`
            <header>
                <a href="/"><img src="https://fontmeme.com/permalink/231019/5bc185de76f1f0c4891382e46a72db2a.png" alt="pokemon-font" border="0"></a>
                <ul class="nav-list">
                    <li class="nav-item"><button class="btn btn-header" id="ver-all">See all</button></li> 
                    <li class="nav-item"><button class="btn btn-header normal" id="normal">Normal</button></li>
                    <li class="nav-item"><button class="btn btn-header fire" id="fire">Fire</button></li>
                    <li class="nav-item"><button class="btn btn-header water" id="water">Water</button></li>
                    <li class="nav-item"><button class="btn btn-header grass" id="grass">Grass</button></li>
                    <li class="nav-item"><button class="btn btn-header electric" id="electric">Electric</button></li>
                    <li class="nav-item"><button class="btn btn-header ice" id="ice">Ice</button></li>
                    <li class="nav-item"><button class="btn btn-header fighting" id="fighting">Fighting</button></li>
                    <li class="nav-item"><button class="btn btn-header poison" id="poison">Poison</button></li>
                    <li class="nav-item"><button class="btn btn-header ground" id="ground">Ground</button></li>
                    <li class="nav-item"><button class="btn btn-header flying" id="flying">Flying</button></li>
                    <li class="nav-item"><button class="btn btn-header psychic" id="psychic">Psychic</button></li>
                    <li class="nav-item"><button class="btn btn-header bug" id="bug">Bug</button></li>
                    <li class="nav-item"><button class="btn btn-header rock" id="rock">Rock</button></li>
                    <li class="nav-item"><button class="btn btn-header ghost" id="ghost">Ghost</button></li>
                    <li class="nav-item"><button class="btn btn-header dark" id="dark">Dark</button></li>
                    <li class="nav-item"><button class="btn btn-header dragon" id="dragon">Dragon</button></li>
                    <li class="nav-item"><button class="btn btn-header steel" id="steel">Steel</button></li>
                    <li class="nav-item"><button class="btn btn-header fairy" id="fairy">Fairy</button></li>
                </ul>    
            </header>
        `;
    }
}
customElements.define('header-section', header);

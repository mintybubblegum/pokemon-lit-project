import { LitElement, html, css } from 'lit'
import './header';
import '../db/pokemon';

export class Searchbar extends LitElement {
    static styles = [
        css`
            :host {
                display: block;
            }
            div {
                display: flex;
                justify-content: center;
                margin: 2em 0;
            }
        `
    ];

    static get properties() {
        return {
            searchTextBox: { type: String },
        };
    }

    constructor(){
        super();
        this.searchTextBox = '';
    }

    render() {
        return html`
            <div>
                <input
                    class="inputSearch"
                    type="text"
                    placeholder="Search Pokémon by name..."
                    @input="${this.handleSearchInput}"
                />
            </div>
        `;
    }

    handleSearchInput(event) {
        const searchTermNew = event.target.value.toLowerCase();
        this.searchTextBox = searchTermNew;
        this.dispatchEvent(new CustomEvent('search', { detail: searchTermNew }));
      }
}
customElements.define('search-bar', Searchbar);

import { LitElement, html, css } from 'lit'
import './header';
import '../db/pokemon';

export class Searchbar extends LitElement {
    static styles = [
        css`
            :host {
                display: block;
            }
            .search-container {
                position: relative;
                display: inline-block;
                display:flex;
                justify-content:center;
                margin: 20px 0;
            }
            .searchbar {
                border: 1px solid gray;
                background-color:white;
                border-radius: 20px;
                padding: 0 20px 3px;
            }
            input {
                padding-right:40px;
                border:none;
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
            <div class="search-container">
                <div class="searchbar">
                    <input
                    type="text"
                    placeholder="Search pokemon name..."
                    @input="${this.handleSearchInput}"
                    />
                    <icon>🔎</icon>
                </div>
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

// consumir pokemon de la API: ${this.pokemon.name}
import { LitElement, html, css } from 'lit';

export class Card extends LitElement {
    static styles = [
        css`
            :host {
                display: block;
            }
        `
    ];

    render() {
        return html``;
    }
}
customElements.define('card-page', Card);

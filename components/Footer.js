import { LitElement, html, css } from 'lit';

export class Footer extends LitElement {
    static styles = [
        css`
            :host {
                display: block;
            }
            div {
                background-color:red;
                display: flex;
                justify-content:flex-end;
            }
        `
    ];

    render() {
        return html`
            <div>
                <a href="https://pokemongolive.com/?hl=es"><h4>Pokemon Go Live</h4></a>
            </div>
        `;
    }
}
customElements.define('footer-section', Footer);

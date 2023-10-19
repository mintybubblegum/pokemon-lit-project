import { LitElement, html, css } from 'lit';

export class Header extends LitElement {
    static styles = [
        css`
            :host {
                display: block;
            }
        `
    ];

    render() {
        return html`
        `;
    }
}
customElements.define('header-section', Header);

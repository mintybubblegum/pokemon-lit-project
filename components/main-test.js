import { LitElement, html, css } from 'lit';
import { Header } from './header';
import { Footer } from './footer'

export class MainTest extends LitElement {
  static styles = [
    css`
      :host {
        display: block;
        background-color: red;
        height: 100vh;
      }
      img {
        width: 12em;
      }
    `,
  ];

  constructor() {
    super();
  }

  render() {
    return html`
        <header-section></header-section>
        <div>
            <img src="./src/monalisa-square.jpg" alt="">
        </div>
        <footer-section></footer-section>
    `;
  }
}

customElements.define('main-test', MainTest);
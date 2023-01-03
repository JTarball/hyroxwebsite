import {LitElement, html, css} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('list-element')
export class ListElement extends LitElement {
  @property()
  override title: string = '';

  @property({type: Array, reflect: false})
  items = [];

  static override styles = css`
    .wrapper {
      margin-top: 16px;
      font-size: 14px;
    }

    .text {
      font-family: 'Segoe UI Web (West European)', 'Segoe UI', -apple-system,
        BlinkMacSystemFont, 'Roboto', 'Helvetica Neue', sans-serif;
        text-transform: uppercase;
        letter-spacing: 0.083em;
        line-height: 18px;
        font-size: 12px;
        font-weight: 700;
        color: rgba(41, 41, 41, 1);
    }

    ul {
      display: block;
      margin-block-start: 1em;
      margin-block-end: 1em;
      margin-inline-start: 0px;
      margin-inline-end: 0px;
      padding-inline-start: 40px;
      list-style-type: none;
    }

    li {
      display: list-item;
      text-align: -webkit-match-parent;
    }

    li a {
      color: rgba(0, 120, 212, 1);
      text-decoration: none;
      cursor: pointer;
    }
  `;

  override render() {
    // console.log("list-element", this.items)
    return html`
      <span class="wrapper">
        <ul>
          <span class="text">${this.title}</span>
          ${this.items.map(
            (item) => html`<li><a href=${item?.href}>${item?.name}</a></li>`
          )}
        </ul>
      </span>
    `;
  }
}

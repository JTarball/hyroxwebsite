import {LitElement, html, css} from 'lit';
import {customElement, property } from 'lit/decorators.js';

@customElement('discover-card-element')
export class DiscoverCardElement extends LitElement {

    @property()
    override title: string = '';

    static override styles = css`
        .box {
            overflow: hidden;
            padding: 0.3rem;
        }
        .text {
            font-family: 'Segoe UI Web (West European)', 'Segoe UI', -apple-system,
              BlinkMacSystemFont, 'Roboto', 'Helvetica Neue', sans-serif;
              text-transform: uppercase;
              letter-spacing: 0.083em;
              line-height: 16px;
              font-size: 18px;
              font-weight: 700;
              color: rgba(41, 41, 41, 1);
              margin: 1rem;
          }

    `;

    override render() {
        return html`
        <div class="box">
            <span class="text">${this.title}</span>
            <div>
            <slot></slot>
            </div>
        </div>
        `;
      }

}
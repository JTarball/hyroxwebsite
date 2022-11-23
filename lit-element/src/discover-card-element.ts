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
              display: block;
              font-family: 'Segoe UI Web (West European)', 'Segoe UI', -apple-system,
              BlinkMacSystemFont, 'Roboto', 'Helvetica Neue', sans-serif;
              text-transform: uppercase;
              letter-spacing: 0.083em;
              line-height: 16px;
              font-size: 18px;
              font-weight: 700;
              color: rgba(41, 41, 41, 1);
              margin: 1rem;
              margin-left: auto;
              margin-right: auto;
          }
          .text a {
            color: inherit; /* blue colors for links too */
            text-decoration: inherit; /* no underline */
        }
    `;

    override render() {
        return html`
        <div class="box">
            <span class="text"><a href="/discover">${this.title}</a></span>
            <div>
            <slot></slot>
            </div>
        </div>
        `;
      }

}
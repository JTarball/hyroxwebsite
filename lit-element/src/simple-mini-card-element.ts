import {LitElement, html, css} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('simple-mini-card-element')
export class SimpleMiniCardElement extends LitElement {
  @property({type: String})
  theme: string = "";


  @property({type: Object})
  item: object;

  static override styles = css`
    .card-wrapper {
      max-width: 100%;
      flex-basis: 100%;
      flex-grow: 0;
      display: block;
      box-sizing: inherit;
    }

    .card {
      display: flex;
    }

    .card-text,
    .card-image {
      padding: 0.4rem;
    }

    .card-meta-wrapper {
      padding-top: 8px;
      align-items: baseline;
      justify-content: space-between;
      display: flex;
    }

    .card-meta {
      align-items: center;
      display: flex;
      min-width: 0;
    }

    .card-meta-date {
      font-size: 13px;
      color: rgba(117, 117, 117, 1);
      font-family: sohne, 'Helvetica Neue', Helvetica, Arial, sans-serif;
      font-weight: 400;
      line-height: 20px;
    }

    .card-meta-dot {
      padding-left: 6px;
      padding-right: 6px;
      display: block;
      color: rgba(117, 117, 117, 1);
      line-height: 20px;
      font-size: 14px;
    }

    .card-meta-tag {
      background-color: #e3e7af;
      position: relative;
      line-height: 20px;
      padding: 2px 8px;
      border-radius: 100px;
      transition: background 300ms ease 0s;
      white-space: nowrap;
      font-size: 13px;
    }

    .title {
      -webkit-line-clamp: 2;
      max-height: 40px;
      -webkit-box-orient: vertical;
      display: -webkit-box;
      text-overflow: ellipsis;
      font-weight: 700;
      letter-spacing: 0;
      font-size: 16px;
      overflow: hidden;
      color: rgba(41, 41, 41, 1);
      line-height: 20px;
      font-family: sohne, 'Helvetica Neue', Helvetica, Arial, sans-serif;
    }

    .tag {
      border-radius: 3px;
      padding: 6px 16px;
      margin-bottom: 8px;
      margin-right: 8px;
      border: 1px solid rgba(230, 230, 230, 1);
      display: inline-block;
    }

    .text {
      font-size: 13px;
      color: rgba(117, 117, 117, 1);
      line-height: 20px;
      font-family: sohne, 'Helvetica Neue', Helvetica, Arial, sans-serif;
      font-weight: 400;
      margin: 0;
    }

    .tag:hover {
      border: 1px solid red;
    }

    .tag:hover p.text {
      color: red;
    }

    .image {
      object-fit: cover;
    }
  `;

  override render() {



    return html`
      <div class="card-wrapper">
        <div class="card">
          <div class="card-image">
            <img
              class="image"
              src="img/hyrox-photo-banner.jpg"
              alt="Girl in a jacket"
              width="${this.theme === 'large' ? '120': '75'}"
              height="${this.theme === 'large' ? '120': '75'}"
            />
          </div>
          <div class="card-text">
            <h2 class="title">${this.item.name}</h2>
            <div class="card-meta-wrapper">
              <div class="card-meta">
                ${this.item.date
                  ? html`
                      <span class="card-meta-date">
                        <span>${this.item.date}</span>
                      </span>
                      <div class="card-meta-dot" aria-hidden="true">
                        <span>·</span>
                      </div>
                    `
                  : ''}

                ${this.item.tag ? html`
                  <div class="card-meta-tag" aria-hidden="true">
                    <div class="">${item.tag}</div>
                  </div>
                ` : ""}

              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  }
}

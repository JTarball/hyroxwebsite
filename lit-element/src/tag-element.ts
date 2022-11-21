import {LitElement, html, css} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('tag-element')
export class TagElement extends LitElement {
    
    @property({type: String})
    name: string = ""
    
    static override styles = css`
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
            font-family: sohne, "Helvetica Neue", Helvetica, Arial, sans-serif;
            font-weight: 400;
            margin: 0;
        }

        .tag:hover {
            border: 1px solid red;
        }

       .tag:hover p.text {
            color: red;
        }

    `;

    override render() {
    return html`
        <a
        class="ay az ba bb bc bd be bf bg bh bi bj bk bl bm"
        rel="noopener follow"
        href="/tag/programming?source=home-------------------------------------"
        ><div class="tag">
            <div><p class="text">${this.name}</p></div>
        </div></a
        >
    `;
    }
}

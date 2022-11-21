import {LitElement, html, css} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('mini-card-element')
export class MiniCardElement extends LitElement {
  @property({type: String})
  name: string = '';

  static override styles = css`

    .card {
        max-width: 100%;
        flex-basis: 100%;
        padding-right: 12px;
        padding-left: 12px;
        flex-grow: 0;
        display: block;
        box-sizing: inherit;
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
  `;

  override render() {
    return html`
      <div
        class="card"
      >
        <div class="ae cx">
          <div class="pw-trending-post gh cx ae am eq">
            <div class="gi io y ip cu gj">
              <span class="bv ii fi fj fk fl">01</span>
            </div>
            <div class="am cy">
              <div class="hh y">
                <div class="am bq ax">
                  <a
                    href="https://medium.com/angular-blog?source=home---------0---------------------3237b243_7050_40d1_b84e_5cc4834a3b77-------7"
                    rel="noopener follow"
                    ><img
                      alt="Angular Blog"
                      class="gm gp go"
                      src="https://miro.medium.com/fit/c/40/40/1*nbJ41jD1-r2Oe6FsLjKaOg.png"
                      width="20"
                      height="20"
                      loading="lazy"
                  /></a>
                  <div class="iq am bq er">
                    <a
                      class="ay az ba bb bc bd be bf bg bh bi bj bk bl bm"
                      rel="noopener follow"
                      href="/@mgechev?source=home---------0---------------------3237b243_7050_40d1_b84e_5cc4834a3b77-------7"
                      ><h4 class="bv fh hw ik ct ir is it iu iv iw ix by iy">
                        Minko Gechev
                      </h4></a
                    >
                    <div class="am">
                      <h4 class="bv fh hw ik iz iy">in</h4>
                      <a
                        class="ay az ba bb bc bd be bf bg bh bi bj bk bl bm cp"
                        href="https://medium.com/angular-blog?source=home---------0---------------------3237b243_7050_40d1_b84e_5cc4834a3b77-------7"
                        rel="noopener follow"
                        ><h4 class="bv fh hw ik ct ir is it iu iv iw ix by">
                          Angular Blog
                        </h4></a
                      >
                    </div>
                  </div>
                </div>
              </div>
              <div class="hh y">
                <a
                  class="ay az ba bb bc bd be bf bg bh bi bj bk bl bm"
                  href="https://blog.angular.io/angular-v15-is-now-available-df7be7f2f4c8?source=home---------0---------------------3237b243_7050_40d1_b84e_5cc4834a3b77-------7"
                  rel="noopener follow"
                  ><div class="">
                    <h2 class="bv ii ec bx ct ja is it jb iv ix fk by">
                      Angular v15 is now available!
                    </h2>
                  </div></a
                >
              </div>
              <span class="bv b hw bx hj"
                ><div class="am bq">
                  <span>Nov 16</span>
                  <div class="jc jd y" aria-hidden="true">
                    <span class="y" aria-hidden="true"
                      ><span class="bv b bw bx hj">·</span></span
                    >
                  </div>
                  <span class="pw-reading-time bv b hw bx hj">10 min read</span>
                </div></span
              >
            </div>
          </div>
        </div>
      </div>
    `;
  }
}

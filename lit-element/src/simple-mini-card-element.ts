import {LitElement, html, css} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('simple-mini-card-element')
export class SimpleMiniCardElement extends LitElement {
  @property({type: String})
  name: string = '';

  static override styles = css`

    .card-wrapper {
        max-width: 100%;
        flex-basis: 100%;
        padding-right: 12px;
        padding-left: 12px;
        flex-grow: 0;
        display: block;
        box-sizing: inherit;
    }

    .card {
        display: flex;
    }

    .card-text, .card-image {
        padding: 0.4rem;
    }

    .card-meta {
        padding-top: 8px;
        align-items: baseline;
        justify-content: space-between;
        display: flex;
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
        font-family: sohne, "Helvetica Neue", Helvetica, Arial, sans-serif;
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
                    <img class="image" src="img/hyrox-photo-banner.jpg" alt="Girl in a jacket" width="100" height="100">
                </div>
                <div class="card-text">
                    <h2 class="title">
                        Angular v15 is now available!
                    </h2>
                    <div class="card-meta"><div class="au am bq"><span class="pw-published-date kc"><span class="bv b hw bx hj"><span>Sep 3, 2019</span></span></span><div class="jc jd cx y cu ll" aria-hidden="true"><span class="y" aria-hidden="true"><span class="bv b bw bx hj">·</span></span></div><span class="kc"><span class="pw-reading-time bv b hw bx hj">13 min read</span></span><div class="jc jd cx y cu ll h" aria-hidden="true"><span class="y" aria-hidden="true"><span class="bv b bw bx hj">·</span></span></div><a class="ay az ba bb bc bd be bf bg bh bi bj bk bl bm" rel="noopener follow" href="/tag/masculinity?source=home--------------------masculinity-------0----------"><div class="lv cu en lw lx ly bv b hw bx hj kc">Masculinity</div></a><div class="jj jk y"><div class="y" aria-hidden="false" aria-describedby="4" aria-labelledby="4"><button class="y jh ji bf"><div class=""><div><div class="cp" aria-hidden="false" aria-describedby="3" aria-labelledby="3"><svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M12.4 12.77l-1.81 4.99a.63.63 0 0 1-1.18 0l-1.8-4.99a.63.63 0 0 0-.38-.37l-4.99-1.81a.62.62 0 0 1 0-1.18l4.99-1.8a.63.63 0 0 0 .37-.38l1.81-4.99a.63.63 0 0 1 1.18 0l1.8 4.99a.63.63 0 0 0 .38.37l4.99 1.81a.63.63 0 0 1 0 1.18l-4.99 1.8a.63.63 0 0 0-.37.38z" fill="#FFC017"></path></svg></div></div></div></button></div></div></div><div class="am"><div class="am bq"><div class="gn y lm"><div><div class="cp" aria-hidden="false" aria-describedby="34" aria-labelledby="34"><span><a class="ay az ba bb bc bd be bf bg bh bi bj bk bl bm" rel="noopener follow" href="/m/signin?actionUrl=https%3A%2F%2Fmedium.com%2F_%2Fbookmark%2Fp%2Ffc422b2f3c&amp;operation=register&amp;redirect=https%3A%2F%2Fhumanparts.medium.com%2Fmiigwech-fc422b2f3c&amp;source=---------0-----------------bookmark_preview-0----------"><svg width="25" height="25" viewBox="0 0 25 25" fill="none" class="mg"><path d="M18 2.5a.5.5 0 0 1 1 0V5h2.5a.5.5 0 0 1 0 1H19v2.5a.5.5 0 1 1-1 0V6h-2.5a.5.5 0 0 1 0-1H18V2.5zM7 7a1 1 0 0 1 1-1h3.5a.5.5 0 0 0 0-1H8a2 2 0 0 0-2 2v14a.5.5 0 0 0 .8.4l5.7-4.4 5.7 4.4a.5.5 0 0 0 .8-.4v-8.5a.5.5 0 0 0-1 0v7.48l-5.2-4a.5.5 0 0 0-.6 0l-5.2 4V7z" fill="#292929"></path></svg></a></span></div></div></div><div class="y bp"></div></div></div></div>
                </div>
            </div>
        </div>




      <!-- <div class="card">
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
                    <h2 class="title">
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
      </div> -->
    `;
  }
}

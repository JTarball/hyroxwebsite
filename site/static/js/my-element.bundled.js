/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const e=window,t=e.ShadowRoot&&(void 0===e.ShadyCSS||e.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,i=Symbol(),s=new WeakMap;class n{constructor(e,t,s){if(this._$cssResult$=!0,s!==i)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const i=this.t;if(t&&void 0===e){const t=void 0!==i&&1===i.length;t&&(e=s.get(i)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),t&&s.set(i,e))}return e}toString(){return this.cssText}}const a=(e,...t)=>{const s=1===e.length?e[0]:t.reduce(((t,i,s)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+e[s+1]),e[0]);return new n(s,e,i)},l=t?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(const i of e.cssRules)t+=i.cssText;return(e=>new n("string"==typeof e?e:e+"",void 0,i))(t)})(e):e
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;var r;const o=window,h=o.trustedTypes,d=h?h.emptyScript:"",c=o.reactiveElementPolyfillSupport,b={toAttribute(e,t){switch(t){case Boolean:e=e?d:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let i=e;switch(t){case Boolean:i=null!==e;break;case Number:i=null===e?null:Number(e);break;case Object:case Array:try{i=JSON.parse(e)}catch(e){i=null}}return i}},v=(e,t)=>t!==e&&(t==t||e==e),u={attribute:!0,type:String,converter:b,reflect:!1,hasChanged:v};class m extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(e){var t;this.finalize(),(null!==(t=this.h)&&void 0!==t?t:this.h=[]).push(e)}static get observedAttributes(){this.finalize();const e=[];return this.elementProperties.forEach(((t,i)=>{const s=this._$Ep(i,t);void 0!==s&&(this._$Ev.set(s,i),e.push(s))})),e}static createProperty(e,t=u){if(t.state&&(t.attribute=!1),this.finalize(),this.elementProperties.set(e,t),!t.noAccessor&&!this.prototype.hasOwnProperty(e)){const i="symbol"==typeof e?Symbol():"__"+e,s=this.getPropertyDescriptor(e,i,t);void 0!==s&&Object.defineProperty(this.prototype,e,s)}}static getPropertyDescriptor(e,t,i){return{get(){return this[t]},set(s){const n=this[e];this[t]=s,this.requestUpdate(e,n,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||u}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const e=Object.getPrototypeOf(this);if(e.finalize(),void 0!==e.h&&(this.h=[...e.h]),this.elementProperties=new Map(e.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const e=this.properties,t=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(const i of t)this.createProperty(i,e[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const e of i)t.unshift(l(e))}else void 0!==e&&t.push(l(e));return t}static _$Ep(e,t){const i=t.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof e?e.toLowerCase():void 0}u(){var e;this._$E_=new Promise((e=>this.enableUpdating=e)),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(e=this.constructor.h)||void 0===e||e.forEach((e=>e(this)))}addController(e){var t,i;(null!==(t=this._$ES)&&void 0!==t?t:this._$ES=[]).push(e),void 0!==this.renderRoot&&this.isConnected&&(null===(i=e.hostConnected)||void 0===i||i.call(e))}removeController(e){var t;null===(t=this._$ES)||void 0===t||t.splice(this._$ES.indexOf(e)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach(((e,t)=>{this.hasOwnProperty(t)&&(this._$Ei.set(t,this[t]),delete this[t])}))}createRenderRoot(){var i;const s=null!==(i=this.shadowRoot)&&void 0!==i?i:this.attachShadow(this.constructor.shadowRootOptions);return((i,s)=>{t?i.adoptedStyleSheets=s.map((e=>e instanceof CSSStyleSheet?e:e.styleSheet)):s.forEach((t=>{const s=document.createElement("style"),n=e.litNonce;void 0!==n&&s.setAttribute("nonce",n),s.textContent=t.cssText,i.appendChild(s)}))})(s,this.constructor.elementStyles),s}connectedCallback(){var e;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(e=this._$ES)||void 0===e||e.forEach((e=>{var t;return null===(t=e.hostConnected)||void 0===t?void 0:t.call(e)}))}enableUpdating(e){}disconnectedCallback(){var e;null===(e=this._$ES)||void 0===e||e.forEach((e=>{var t;return null===(t=e.hostDisconnected)||void 0===t?void 0:t.call(e)}))}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$EO(e,t,i=u){var s;const n=this.constructor._$Ep(e,i);if(void 0!==n&&!0===i.reflect){const a=(void 0!==(null===(s=i.converter)||void 0===s?void 0:s.toAttribute)?i.converter:b).toAttribute(t,i.type);this._$El=e,null==a?this.removeAttribute(n):this.setAttribute(n,a),this._$El=null}}_$AK(e,t){var i;const s=this.constructor,n=s._$Ev.get(e);if(void 0!==n&&this._$El!==n){const e=s.getPropertyOptions(n),a="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==(null===(i=e.converter)||void 0===i?void 0:i.fromAttribute)?e.converter:b;this._$El=n,this[n]=a.fromAttribute(t,e.type),this._$El=null}}requestUpdate(e,t,i){let s=!0;void 0!==e&&(((i=i||this.constructor.getPropertyOptions(e)).hasChanged||v)(this[e],t)?(this._$AL.has(e)||this._$AL.set(e,t),!0===i.reflect&&this._$El!==e&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(e,i))):s=!1),!this.isUpdatePending&&s&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(e){Promise.reject(e)}const e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach(((e,t)=>this[t]=e)),this._$Ei=void 0);let t=!1;const i=this._$AL;try{t=this.shouldUpdate(i),t?(this.willUpdate(i),null===(e=this._$ES)||void 0===e||e.forEach((e=>{var t;return null===(t=e.hostUpdate)||void 0===t?void 0:t.call(e)})),this.update(i)):this._$Ek()}catch(e){throw t=!1,this._$Ek(),e}t&&this._$AE(i)}willUpdate(e){}_$AE(e){var t;null===(t=this._$ES)||void 0===t||t.forEach((e=>{var t;return null===(t=e.hostUpdated)||void 0===t?void 0:t.call(e)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(e){return!0}update(e){void 0!==this._$EC&&(this._$EC.forEach(((e,t)=>this._$EO(t,this[t],e))),this._$EC=void 0),this._$Ek()}updated(e){}firstUpdated(e){}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var p;m.finalized=!0,m.elementProperties=new Map,m.elementStyles=[],m.shadowRootOptions={mode:"open"},null==c||c({ReactiveElement:m}),(null!==(r=o.reactiveElementVersions)&&void 0!==r?r:o.reactiveElementVersions=[]).push("1.4.2");const g=window,f=g.trustedTypes,x=f?f.createPolicy("lit-html",{createHTML:e=>e}):void 0,y=`lit$${(Math.random()+"").slice(9)}$`,w="?"+y,k=`<${w}>`,j=document,S=(e="")=>j.createComment(e),_=e=>null===e||"object"!=typeof e&&"function"!=typeof e,$=Array.isArray,A=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,H=/-->/g,z=/>/g,C=RegExp(">|[ \t\n\f\r](?:([^\\s\"'>=/]+)([ \t\n\f\r]*=[ \t\n\f\r]*(?:[^ \t\n\f\r\"'`<>=]|(\"|')|))|$)","g"),O=/'/g,M=/"/g,E=/^(?:script|style|textarea|title)$/i,R=(e=>(t,...i)=>({_$litType$:e,strings:t,values:i}))(1),T=Symbol.for("lit-noChange"),U=Symbol.for("lit-nothing"),F=new WeakMap,N=j.createTreeWalker(j,129,null,!1),W=(e,t)=>{const i=e.length-1,s=[];let n,a=2===t?"<svg>":"",l=A;for(let t=0;t<i;t++){const i=e[t];let r,o,h=-1,d=0;for(;d<i.length&&(l.lastIndex=d,o=l.exec(i),null!==o);)d=l.lastIndex,l===A?"!--"===o[1]?l=H:void 0!==o[1]?l=z:void 0!==o[2]?(E.test(o[2])&&(n=RegExp("</"+o[2],"g")),l=C):void 0!==o[3]&&(l=C):l===C?">"===o[0]?(l=null!=n?n:A,h=-1):void 0===o[1]?h=-2:(h=l.lastIndex-o[2].length,r=o[1],l=void 0===o[3]?C:'"'===o[3]?M:O):l===M||l===O?l=C:l===H||l===z?l=A:(l=C,n=void 0);const c=l===C&&e[t+1].startsWith("/>")?" ":"";a+=l===A?i+k:h>=0?(s.push(r),i.slice(0,h)+"$lit$"+i.slice(h)+y+c):i+y+(-2===h?(s.push(void 0),t):c)}const r=a+(e[i]||"<?>")+(2===t?"</svg>":"");if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return[void 0!==x?x.createHTML(r):r,s]};class B{constructor({strings:e,_$litType$:t},i){let s;this.parts=[];let n=0,a=0;const l=e.length-1,r=this.parts,[o,h]=W(e,t);if(this.el=B.createElement(o,i),N.currentNode=this.el.content,2===t){const e=this.el.content,t=e.firstChild;t.remove(),e.append(...t.childNodes)}for(;null!==(s=N.nextNode())&&r.length<l;){if(1===s.nodeType){if(s.hasAttributes()){const e=[];for(const t of s.getAttributeNames())if(t.endsWith("$lit$")||t.startsWith(y)){const i=h[a++];if(e.push(t),void 0!==i){const e=s.getAttribute(i.toLowerCase()+"$lit$").split(y),t=/([.?@])?(.*)/.exec(i);r.push({type:1,index:n,name:t[2],strings:e,ctor:"."===t[1]?L:"?"===t[1]?J:"@"===t[1]?V:G})}else r.push({type:6,index:n})}for(const t of e)s.removeAttribute(t)}if(E.test(s.tagName)){const e=s.textContent.split(y),t=e.length-1;if(t>0){s.textContent=f?f.emptyScript:"";for(let i=0;i<t;i++)s.append(e[i],S()),N.nextNode(),r.push({type:2,index:++n});s.append(e[t],S())}}}else if(8===s.nodeType)if(s.data===w)r.push({type:2,index:n});else{let e=-1;for(;-1!==(e=s.data.indexOf(y,e+1));)r.push({type:7,index:n}),e+=y.length-1}n++}}static createElement(e,t){const i=j.createElement("template");return i.innerHTML=e,i}}function q(e,t,i=e,s){var n,a,l,r;if(t===T)return t;let o=void 0!==s?null===(n=i._$Co)||void 0===n?void 0:n[s]:i._$Cl;const h=_(t)?void 0:t._$litDirective$;return(null==o?void 0:o.constructor)!==h&&(null===(a=null==o?void 0:o._$AO)||void 0===a||a.call(o,!1),void 0===h?o=void 0:(o=new h(e),o._$AT(e,i,s)),void 0!==s?(null!==(l=(r=i)._$Co)&&void 0!==l?l:r._$Co=[])[s]=o:i._$Cl=o),void 0!==o&&(t=q(e,o._$AS(e,t.values),o,s)),t}class I{constructor(e,t){this.u=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}v(e){var t;const{el:{content:i},parts:s}=this._$AD,n=(null!==(t=null==e?void 0:e.creationScope)&&void 0!==t?t:j).importNode(i,!0);N.currentNode=n;let a=N.nextNode(),l=0,r=0,o=s[0];for(;void 0!==o;){if(l===o.index){let t;2===o.type?t=new P(a,a.nextSibling,this,e):1===o.type?t=new o.ctor(a,o.name,o.strings,this,e):6===o.type&&(t=new K(a,this,e)),this.u.push(t),o=s[++r]}l!==(null==o?void 0:o.index)&&(a=N.nextNode(),l++)}return n}p(e){let t=0;for(const i of this.u)void 0!==i&&(void 0!==i.strings?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}}class P{constructor(e,t,i,s){var n;this.type=2,this._$AH=U,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=s,this._$Cm=null===(n=null==s?void 0:s.isConnected)||void 0===n||n}get _$AU(){var e,t;return null!==(t=null===(e=this._$AM)||void 0===e?void 0:e._$AU)&&void 0!==t?t:this._$Cm}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return void 0!==t&&11===e.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=q(this,e,t),_(e)?e===U||null==e||""===e?(this._$AH!==U&&this._$AR(),this._$AH=U):e!==this._$AH&&e!==T&&this.g(e):void 0!==e._$litType$?this.$(e):void 0!==e.nodeType?this.T(e):(e=>$(e)||"function"==typeof(null==e?void 0:e[Symbol.iterator]))(e)?this.k(e):this.g(e)}O(e,t=this._$AB){return this._$AA.parentNode.insertBefore(e,t)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}g(e){this._$AH!==U&&_(this._$AH)?this._$AA.nextSibling.data=e:this.T(j.createTextNode(e)),this._$AH=e}$(e){var t;const{values:i,_$litType$:s}=e,n="number"==typeof s?this._$AC(e):(void 0===s.el&&(s.el=B.createElement(s.h,this.options)),s);if((null===(t=this._$AH)||void 0===t?void 0:t._$AD)===n)this._$AH.p(i);else{const e=new I(n,this),t=e.v(this.options);e.p(i),this.T(t),this._$AH=e}}_$AC(e){let t=F.get(e.strings);return void 0===t&&F.set(e.strings,t=new B(e)),t}k(e){$(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let i,s=0;for(const n of e)s===t.length?t.push(i=new P(this.O(S()),this.O(S()),this,this.options)):i=t[s],i._$AI(n),s++;s<t.length&&(this._$AR(i&&i._$AB.nextSibling,s),t.length=s)}_$AR(e=this._$AA.nextSibling,t){var i;for(null===(i=this._$AP)||void 0===i||i.call(this,!1,!0,t);e&&e!==this._$AB;){const t=e.nextSibling;e.remove(),e=t}}setConnected(e){var t;void 0===this._$AM&&(this._$Cm=e,null===(t=this._$AP)||void 0===t||t.call(this,e))}}class G{constructor(e,t,i,s,n){this.type=1,this._$AH=U,this._$AN=void 0,this.element=e,this.name=t,this._$AM=s,this.options=n,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=U}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,i,s){const n=this.strings;let a=!1;if(void 0===n)e=q(this,e,t,0),a=!_(e)||e!==this._$AH&&e!==T,a&&(this._$AH=e);else{const s=e;let l,r;for(e=n[0],l=0;l<n.length-1;l++)r=q(this,s[i+l],t,l),r===T&&(r=this._$AH[l]),a||(a=!_(r)||r!==this._$AH[l]),r===U?e=U:e!==U&&(e+=(null!=r?r:"")+n[l+1]),this._$AH[l]=r}a&&!s&&this.j(e)}j(e){e===U?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=e?e:"")}}class L extends G{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===U?void 0:e}}const D=f?f.emptyScript:"";class J extends G{constructor(){super(...arguments),this.type=4}j(e){e&&e!==U?this.element.setAttribute(this.name,D):this.element.removeAttribute(this.name)}}class V extends G{constructor(e,t,i,s,n){super(e,t,i,s,n),this.type=5}_$AI(e,t=this){var i;if((e=null!==(i=q(this,e,t,0))&&void 0!==i?i:U)===T)return;const s=this._$AH,n=e===U&&s!==U||e.capture!==s.capture||e.once!==s.once||e.passive!==s.passive,a=e!==U&&(s===U||n);n&&this.element.removeEventListener(this.name,this,s),a&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,i;"function"==typeof this._$AH?this._$AH.call(null!==(i=null===(t=this.options)||void 0===t?void 0:t.host)&&void 0!==i?i:this.element,e):this._$AH.handleEvent(e)}}class K{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){q(this,e)}}const Z=g.litHtmlPolyfillSupport;null==Z||Z(B,P),(null!==(p=g.litHtmlVersions)&&void 0!==p?p:g.litHtmlVersions=[]).push("2.4.0");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var Q,X;class Y extends m{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e,t;const i=super.createRenderRoot();return null!==(e=(t=this.renderOptions).renderBefore)&&void 0!==e||(t.renderBefore=i.firstChild),i}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=((e,t,i)=>{var s,n;const a=null!==(s=null==i?void 0:i.renderBefore)&&void 0!==s?s:t;let l=a._$litPart$;if(void 0===l){const e=null!==(n=null==i?void 0:i.renderBefore)&&void 0!==n?n:null;a._$litPart$=l=new P(t.insertBefore(S(),e),e,void 0,null!=i?i:{})}return l._$AI(e),l})(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),null===(e=this._$Do)||void 0===e||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),null===(e=this._$Do)||void 0===e||e.setConnected(!1)}render(){return T}}Y.finalized=!0,Y._$litElement$=!0,null===(Q=globalThis.litElementHydrateSupport)||void 0===Q||Q.call(globalThis,{LitElement:Y});const ee=globalThis.litElementPolyfillSupport;null==ee||ee({LitElement:Y}),(null!==(X=globalThis.litElementVersions)&&void 0!==X?X:globalThis.litElementVersions=[]).push("3.2.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const te=e=>t=>"function"==typeof t?((e,t)=>(customElements.define(e,t),t))(e,t):((e,t)=>{const{kind:i,elements:s}=t;return{kind:i,elements:s,finisher(t){customElements.define(e,t)}}})(e,t)
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */,ie=(e,t)=>"method"===t.kind&&t.descriptor&&!("value"in t.descriptor)?{...t,finisher(i){i.createProperty(t.key,e)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){"function"==typeof t.initializer&&(this[t.key]=t.initializer.call(this))},finisher(i){i.createProperty(t.key,e)}};function se(e){return(t,i)=>void 0!==i?((e,t,i)=>{t.constructor.createProperty(i,e)})(e,t,i):ie(e,t)
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */}var ne;null===(ne=window.HTMLSlotElement)||void 0===ne||ne.prototype.assignedElements;var ae=function(e,t,i,s){for(var n,a=arguments.length,l=a<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,i):s,r=e.length-1;r>=0;r--)(n=e[r])&&(l=(a<3?n(l):a>3?n(t,i,l):n(t,i))||l);return a>3&&l&&Object.defineProperty(t,i,l),l};let le=class extends Y{constructor(){super(...arguments),this.title=""}render(){return R`
        <div class="box">
            <span class="text">${this.title}</span>
            <div>
            <slot></slot>
            </div>
        </div>
        `}};le.styles=a`
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

    `,ae([se()],le.prototype,"title",void 0),le=ae([te("discover-card-element")],le);var re=function(e,t,i,s){for(var n,a=arguments.length,l=a<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,i):s,r=e.length-1;r>=0;r--)(n=e[r])&&(l=(a<3?n(l):a>3?n(t,i,l):n(t,i))||l);return a>3&&l&&Object.defineProperty(t,i,l),l};let oe=class extends Y{constructor(){super(...arguments),this.name=""}render(){return R`
        <a
        class="ay az ba bb bc bd be bf bg bh bi bj bk bl bm"
        rel="noopener follow"
        href="/tag/programming?source=home-------------------------------------"
        ><div class="tag">
            <div><p class="text">${this.name}</p></div>
        </div></a
        >
    `}};oe.styles=a`
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

    `,re([se({type:String})],oe.prototype,"name",void 0),oe=re([te("tag-element")],oe);var he=function(e,t,i,s){for(var n,a=arguments.length,l=a<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,i):s,r=e.length-1;r>=0;r--)(n=e[r])&&(l=(a<3?n(l):a>3?n(t,i,l):n(t,i))||l);return a>3&&l&&Object.defineProperty(t,i,l),l};let de=class extends Y{constructor(){super(...arguments),this.name=""}render(){return R`
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
    `}};de.styles=a`

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
  `,he([se({type:String})],de.prototype,"name",void 0),de=he([te("mini-card-element")],de);var ce=function(e,t,i,s){for(var n,a=arguments.length,l=a<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,i):s,r=e.length-1;r>=0;r--)(n=e[r])&&(l=(a<3?n(l):a>3?n(t,i,l):n(t,i))||l);return a>3&&l&&Object.defineProperty(t,i,l),l};let be=class extends Y{constructor(){super(...arguments),this.name=""}render(){return R`

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
    `}};be.styles=a`

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

  `,ce([se({type:String})],be.prototype,"name",void 0),be=ce([te("simple-mini-card-element")],be);var ve=function(e,t,i,s){for(var n,a=arguments.length,l=a<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,i):s,r=e.length-1;r>=0;r--)(n=e[r])&&(l=(a<3?n(l):a>3?n(t,i,l):n(t,i))||l);return a>3&&l&&Object.defineProperty(t,i,l),l};let ue=class extends Y{constructor(){super(...arguments),this.title="",this.items=[]}render(){return R`
      <span class="wrapper">
        <ul>
          <span class="text">${this.title}</span>
          ${this.items.map((e=>R`<li><a href=${e.href}>${e.name}</a></li>`))}
        </ul>
      </span>
    `}};ue.styles=a`
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
  `,ve([se()],ue.prototype,"title",void 0),ve([se()],ue.prototype,"items",void 0),ue=ve([te("list-element")],ue);var me=function(e,t,i,s){for(var n,a=arguments.length,l=a<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,i):s,r=e.length-1;r>=0;r--)(n=e[r])&&(l=(a<3?n(l):a>3?n(t,i,l):n(t,i))||l);return a>3&&l&&Object.defineProperty(t,i,l),l};let pe=class extends Y{render(){return R`
      <div class="info-box">

        <div class="info-col-4">
          <div class="section">
            <list-element title="Welcome" .items=${[{name:"What is Hyrox?",href:""},{name:"How hard is Hyrox?",href:""},{name:"Can a begineer do a Hyrox?",href:""},{name:"A begineer guide to Hyrox",href:""},{name:"The history of hyrox",href:""}]}></list-element>
          </div>
          <div class="section ">
            <list-element title="Guides" .items=${[{name:"How to Structure you Hyrox Training",href:""},{name:"Ultimate Hyrox Training Guide",href:""},{name:"Hyrox Q & A",href:""},{name:"Training Guide",href:""},{name:"Tips & Tricks Per Station",href:""},{name:"Movement Standards",href:""},{name:"Hyrox PFT Guide",href:""},{name:"Ultimate List of Hyrox Workouts",href:""},{name:"A begineer guide to Hyrox",href:""}]}></list-element>
          </div>
          <div class="section no-border">
            <list-element title="Resources" .items=${[{name:"Hyrox Rules",href:""},{name:"Hyrox Double Rules",href:""},{name:"Hyrox Relay Rules",href:""},{name:"Hyrox Training Plan",href:""},{name:"Hyrox Workouts",href:""}]}></list-element>
          </div>
        </div>

        <div class="info-col-4">
          <list-element title="Must Reads" .items=${[{name:"Hyrox London 2022: The Aftermath",href:""},{name:"Running Gear",href:""}]}></list-element>
        </div>

        <div class="info-col-4">
            <div class="section">
                <span class="section-title">Hyrox Workouts</span>
                <simple-mini-card-element></simple-mini-card-element>
                <simple-mini-card-element></simple-mini-card-element>
                <simple-mini-card-element></simple-mini-card-element>
            </div>
        </div>

        <div class="info-col-4">
            <div class="section">
                <discover-card-element title="Discover">
                    <tag-element name="Motivation"></tag-element>
                    <tag-element name="Hyrox Comp Analysis"></tag-element>
                    <tag-element name="Tips & Tricks"></tag-element>
                    <tag-element name="Movement Standards"></tag-element>
                    <tag-element name="Power Endurance"></tag-element>
                    <tag-element name="Max Strength"></tag-element>
                    <tag-element name="Full Body"></tag-element>
                    <tag-element name="Hyrox Workouts"></tag-element>
                    <tag-element name="Running"></tag-element>
                    <tag-element name="Ski Erg"></tag-element>
                    <tag-element name="Sled Push"></tag-element>
                    <tag-element name="Sled Pull"></tag-element>
                    <tag-element name="Burpee Broad Jumps"></tag-element>
                    <tag-element name="Rowing"></tag-element>
                    <tag-element name="Farmers Carry"></tag-element>
                    <tag-element name="Sandbag Lunges"></tag-element>
                    <tag-element name="Wall Balls"></tag-element>
                    <tag-element name="Must Reads"></tag-element>
                </discover-card-element>
            </div> 



          <div class="section">
            <list-element title="Recovery & Health" .items=${[{name:"How to maximum recovery",href:""},{name:"Supplements we use",href:""},{name:"Tech we use",href:""}]}></list-element>
          </div>         
          <div class="section no-border">
            <list-element title="Gear" .items=${[{name:"Shoes",href:""},{name:"Running Gear",href:""}]}></list-element>
          </div>   




          
          <!-- <mini-card-element></mini-card-element> -->
        </div>
      </div>
    `}};pe.styles=a`
    .info-box {
      overflow: hidden;
      border-bottom: 1px solid rgba(230, 230, 230, 1);
    }

    .info-box .info-col-2 {
      box-sizing: border-box;
      float: left;
      width: 50%;
      padding: 0;
      min-height: 50px;
    }

    .info-box .info-col-3 {
      box-sizing: border-box;
      float: left;
      width: 33.3%;
      padding: 0;
      min-height: 50px;
      padding-left: 0.5rem;
      padding-right: 0.5rem;
    }

    .info-box .info-col-4 {
        box-sizing: border-box;
        float: left;
        width: 25%;
        padding: 0;
        min-height: 50px;
        padding-left: 0.5rem;
        padding-right: 0.5rem;
      }

    .section {
      display: block;
      flex-direction: column;
      padding-bottom: 24px;
      border-bottom: 1px solid rgba(230, 230, 230, 1);
    }

    .no-border {
      border: none;
    }

    .section-title {
        font-family: 'Segoe UI Web (West European)', 'Segoe UI', -apple-system,
          BlinkMacSystemFont, 'Roboto', 'Helvetica Neue', sans-serif;
          text-transform: uppercase;
          letter-spacing: 0.083em;
          line-height: 18px;
          font-size: 12px;
          font-weight: 700;
          color: rgba(41, 41, 41, 1);
      }
  

  `,pe=me([te("dashboard-element")],pe);
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var ge=function(e,t,i,s){for(var n,a=arguments.length,l=a<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,i):s,r=e.length-1;r>=0;r--)(n=e[r])&&(l=(a<3?n(l):a>3?n(t,i,l):n(t,i))||l);return a>3&&l&&Object.defineProperty(t,i,l),l};let fe=class extends Y{constructor(){super(...arguments),this.name="World",this.count=0}render(){return R`
      <h1>${this.sayHello(this.name)}!</h1>
      <button @click=${this._onClick} part="button">
        Click Count: ${this.count}
      </button>
      <slot></slot>
    `}_onClick(){this.count++,this.dispatchEvent(new CustomEvent("count-changed"))}sayHello(e){return`Hello, ${e}`}};fe.styles=a`
    :host {
      display: block;
      border: solid 1px gray;
      padding: 16px;
      max-width: 800px;
    }
  `,ge([se()],fe.prototype,"name",void 0),ge([se({type:Number})],fe.prototype,"count",void 0),fe=ge([te("my-element")],fe);

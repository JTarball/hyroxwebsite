/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t=window,i=t.ShadowRoot&&(void 0===t.ShadyCSS||t.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,e=Symbol(),s=new WeakMap;class n{constructor(t,i,s){if(this._$cssResult$=!0,s!==e)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=i}get styleSheet(){let t=this.o;const e=this.t;if(i&&void 0===t){const i=void 0!==e&&1===e.length;i&&(t=s.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&s.set(e,t))}return t}toString(){return this.cssText}}const o=(t,...i)=>{const s=1===t.length?t[0]:i.reduce(((i,e,s)=>i+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(e)+t[s+1]),t[0]);return new n(s,t,e)},r=i?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let i="";for(const e of t.cssRules)i+=e.cssText;return(t=>new n("string"==typeof t?t:t+"",void 0,e))(i)})(t):t
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;var a;const l=window,h=l.trustedTypes,d=h?h.emptyScript:"",c=l.reactiveElementPolyfillSupport,u={toAttribute(t,i){switch(i){case Boolean:t=t?d:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,i){let e=t;switch(i){case Boolean:e=null!==t;break;case Number:e=null===t?null:Number(t);break;case Object:case Array:try{e=JSON.parse(t)}catch(t){e=null}}return e}},p=(t,i)=>i!==t&&(i==i||t==t),v={attribute:!0,type:String,converter:u,reflect:!1,hasChanged:p};class b extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(t){var i;this.finalize(),(null!==(i=this.h)&&void 0!==i?i:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((i,e)=>{const s=this._$Ep(e,i);void 0!==s&&(this._$Ev.set(s,e),t.push(s))})),t}static createProperty(t,i=v){if(i.state&&(i.attribute=!1),this.finalize(),this.elementProperties.set(t,i),!i.noAccessor&&!this.prototype.hasOwnProperty(t)){const e="symbol"==typeof t?Symbol():"__"+t,s=this.getPropertyDescriptor(t,e,i);void 0!==s&&Object.defineProperty(this.prototype,t,s)}}static getPropertyDescriptor(t,i,e){return{get(){return this[i]},set(s){const n=this[t];this[i]=s,this.requestUpdate(t,n,e)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||v}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),void 0!==t.h&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,i=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const e of i)this.createProperty(e,t[e])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const i=[];if(Array.isArray(t)){const e=new Set(t.flat(1/0).reverse());for(const t of e)i.unshift(r(t))}else void 0!==t&&i.push(r(t));return i}static _$Ep(t,i){const e=i.attribute;return!1===e?void 0:"string"==typeof e?e:"string"==typeof t?t.toLowerCase():void 0}u(){var t;this._$E_=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(t=this.constructor.h)||void 0===t||t.forEach((t=>t(this)))}addController(t){var i,e;(null!==(i=this._$ES)&&void 0!==i?i:this._$ES=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(e=t.hostConnected)||void 0===e||e.call(t))}removeController(t){var i;null===(i=this._$ES)||void 0===i||i.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach(((t,i)=>{this.hasOwnProperty(i)&&(this._$Ei.set(i,this[i]),delete this[i])}))}createRenderRoot(){var e;const s=null!==(e=this.shadowRoot)&&void 0!==e?e:this.attachShadow(this.constructor.shadowRootOptions);return((e,s)=>{i?e.adoptedStyleSheets=s.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):s.forEach((i=>{const s=document.createElement("style"),n=t.litNonce;void 0!==n&&s.setAttribute("nonce",n),s.textContent=i.cssText,e.appendChild(s)}))})(s,this.constructor.elementStyles),s}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostConnected)||void 0===i?void 0:i.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$ES)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostDisconnected)||void 0===i?void 0:i.call(t)}))}attributeChangedCallback(t,i,e){this._$AK(t,e)}_$EO(t,i,e=v){var s;const n=this.constructor._$Ep(t,e);if(void 0!==n&&!0===e.reflect){const o=(void 0!==(null===(s=e.converter)||void 0===s?void 0:s.toAttribute)?e.converter:u).toAttribute(i,e.type);this._$El=t,null==o?this.removeAttribute(n):this.setAttribute(n,o),this._$El=null}}_$AK(t,i){var e;const s=this.constructor,n=s._$Ev.get(t);if(void 0!==n&&this._$El!==n){const t=s.getPropertyOptions(n),o="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==(null===(e=t.converter)||void 0===e?void 0:e.fromAttribute)?t.converter:u;this._$El=n,this[n]=o.fromAttribute(i,t.type),this._$El=null}}requestUpdate(t,i,e){let s=!0;void 0!==t&&(((e=e||this.constructor.getPropertyOptions(t)).hasChanged||p)(this[t],i)?(this._$AL.has(t)||this._$AL.set(t,i),!0===e.reflect&&this._$El!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,e))):s=!1),!this.isUpdatePending&&s&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach(((t,i)=>this[i]=t)),this._$Ei=void 0);let i=!1;const e=this._$AL;try{i=this.shouldUpdate(e),i?(this.willUpdate(e),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostUpdate)||void 0===i?void 0:i.call(t)})),this.update(e)):this._$Ek()}catch(t){throw i=!1,this._$Ek(),t}i&&this._$AE(e)}willUpdate(t){}_$AE(t){var i;null===(i=this._$ES)||void 0===i||i.forEach((t=>{var i;return null===(i=t.hostUpdated)||void 0===i?void 0:i.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){void 0!==this._$EC&&(this._$EC.forEach(((t,i)=>this._$EO(i,this[i],t))),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var f;b.finalized=!0,b.elementProperties=new Map,b.elementStyles=[],b.shadowRootOptions={mode:"open"},null==c||c({ReactiveElement:b}),(null!==(a=l.reactiveElementVersions)&&void 0!==a?a:l.reactiveElementVersions=[]).push("1.4.2");const g=window,m=g.trustedTypes,x=m?m.createPolicy("lit-html",{createHTML:t=>t}):void 0,y=`lit$${(Math.random()+"").slice(9)}$`,w="?"+y,$=`<${w}>`,k=document,S=(t="")=>k.createComment(t),j=t=>null===t||"object"!=typeof t&&"function"!=typeof t,H=Array.isArray,_=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,A=/-->/g,z=/>/g,O=RegExp(">|[ \t\n\f\r](?:([^\\s\"'>=/]+)([ \t\n\f\r]*=[ \t\n\f\r]*(?:[^ \t\n\f\r\"'`<>=]|(\"|')|))|$)","g"),C=/'/g,E=/"/g,R=/^(?:script|style|textarea|title)$/i,U=(t=>(i,...e)=>({_$litType$:t,strings:i,values:e}))(1),T=Symbol.for("lit-noChange"),N=Symbol.for("lit-nothing"),M=new WeakMap,W=k.createTreeWalker(k,129,null,!1),I=(t,i)=>{const e=t.length-1,s=[];let n,o=2===i?"<svg>":"",r=_;for(let i=0;i<e;i++){const e=t[i];let a,l,h=-1,d=0;for(;d<e.length&&(r.lastIndex=d,l=r.exec(e),null!==l);)d=r.lastIndex,r===_?"!--"===l[1]?r=A:void 0!==l[1]?r=z:void 0!==l[2]?(R.test(l[2])&&(n=RegExp("</"+l[2],"g")),r=O):void 0!==l[3]&&(r=O):r===O?">"===l[0]?(r=null!=n?n:_,h=-1):void 0===l[1]?h=-2:(h=r.lastIndex-l[2].length,a=l[1],r=void 0===l[3]?O:'"'===l[3]?E:C):r===E||r===C?r=O:r===A||r===z?r=_:(r=O,n=void 0);const c=r===O&&t[i+1].startsWith("/>")?" ":"";o+=r===_?e+$:h>=0?(s.push(a),e.slice(0,h)+"$lit$"+e.slice(h)+y+c):e+y+(-2===h?(s.push(void 0),i):c)}const a=o+(t[e]||"<?>")+(2===i?"</svg>":"");if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return[void 0!==x?x.createHTML(a):a,s]};class P{constructor({strings:t,_$litType$:i},e){let s;this.parts=[];let n=0,o=0;const r=t.length-1,a=this.parts,[l,h]=I(t,i);if(this.el=P.createElement(l,e),W.currentNode=this.el.content,2===i){const t=this.el.content,i=t.firstChild;i.remove(),t.append(...i.childNodes)}for(;null!==(s=W.nextNode())&&a.length<r;){if(1===s.nodeType){if(s.hasAttributes()){const t=[];for(const i of s.getAttributeNames())if(i.endsWith("$lit$")||i.startsWith(y)){const e=h[o++];if(t.push(i),void 0!==e){const t=s.getAttribute(e.toLowerCase()+"$lit$").split(y),i=/([.?@])?(.*)/.exec(e);a.push({type:1,index:n,name:i[2],strings:t,ctor:"."===i[1]?D:"?"===i[1]?J:"@"===i[1]?K:q})}else a.push({type:6,index:n})}for(const i of t)s.removeAttribute(i)}if(R.test(s.tagName)){const t=s.textContent.split(y),i=t.length-1;if(i>0){s.textContent=m?m.emptyScript:"";for(let e=0;e<i;e++)s.append(t[e],S()),W.nextNode(),a.push({type:2,index:++n});s.append(t[i],S())}}}else if(8===s.nodeType)if(s.data===w)a.push({type:2,index:n});else{let t=-1;for(;-1!==(t=s.data.indexOf(y,t+1));)a.push({type:7,index:n}),t+=y.length-1}n++}}static createElement(t,i){const e=k.createElement("template");return e.innerHTML=t,e}}function G(t,i,e=t,s){var n,o,r,a;if(i===T)return i;let l=void 0!==s?null===(n=e._$Co)||void 0===n?void 0:n[s]:e._$Cl;const h=j(i)?void 0:i._$litDirective$;return(null==l?void 0:l.constructor)!==h&&(null===(o=null==l?void 0:l._$AO)||void 0===o||o.call(l,!1),void 0===h?l=void 0:(l=new h(t),l._$AT(t,e,s)),void 0!==s?(null!==(r=(a=e)._$Co)&&void 0!==r?r:a._$Co=[])[s]=l:e._$Cl=l),void 0!==l&&(i=G(t,l._$AS(t,i.values),l,s)),i}class B{constructor(t,i){this.u=[],this._$AN=void 0,this._$AD=t,this._$AM=i}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}v(t){var i;const{el:{content:e},parts:s}=this._$AD,n=(null!==(i=null==t?void 0:t.creationScope)&&void 0!==i?i:k).importNode(e,!0);W.currentNode=n;let o=W.nextNode(),r=0,a=0,l=s[0];for(;void 0!==l;){if(r===l.index){let i;2===l.type?i=new L(o,o.nextSibling,this,t):1===l.type?i=new l.ctor(o,l.name,l.strings,this,t):6===l.type&&(i=new Z(o,this,t)),this.u.push(i),l=s[++a]}r!==(null==l?void 0:l.index)&&(o=W.nextNode(),r++)}return n}p(t){let i=0;for(const e of this.u)void 0!==e&&(void 0!==e.strings?(e._$AI(t,e,i),i+=e.strings.length-2):e._$AI(t[i])),i++}}class L{constructor(t,i,e,s){var n;this.type=2,this._$AH=N,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=e,this.options=s,this._$Cm=null===(n=null==s?void 0:s.isConnected)||void 0===n||n}get _$AU(){var t,i;return null!==(i=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==i?i:this._$Cm}get parentNode(){let t=this._$AA.parentNode;const i=this._$AM;return void 0!==i&&11===t.nodeType&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,i=this){t=G(this,t,i),j(t)?t===N||null==t||""===t?(this._$AH!==N&&this._$AR(),this._$AH=N):t!==this._$AH&&t!==T&&this.g(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>H(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]))(t)?this.k(t):this.g(t)}O(t,i=this._$AB){return this._$AA.parentNode.insertBefore(t,i)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}g(t){this._$AH!==N&&j(this._$AH)?this._$AA.nextSibling.data=t:this.T(k.createTextNode(t)),this._$AH=t}$(t){var i;const{values:e,_$litType$:s}=t,n="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=P.createElement(s.h,this.options)),s);if((null===(i=this._$AH)||void 0===i?void 0:i._$AD)===n)this._$AH.p(e);else{const t=new B(n,this),i=t.v(this.options);t.p(e),this.T(i),this._$AH=t}}_$AC(t){let i=M.get(t.strings);return void 0===i&&M.set(t.strings,i=new P(t)),i}k(t){H(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let e,s=0;for(const n of t)s===i.length?i.push(e=new L(this.O(S()),this.O(S()),this,this.options)):e=i[s],e._$AI(n),s++;s<i.length&&(this._$AR(e&&e._$AB.nextSibling,s),i.length=s)}_$AR(t=this._$AA.nextSibling,i){var e;for(null===(e=this._$AP)||void 0===e||e.call(this,!1,!0,i);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i}}setConnected(t){var i;void 0===this._$AM&&(this._$Cm=t,null===(i=this._$AP)||void 0===i||i.call(this,t))}}class q{constructor(t,i,e,s,n){this.type=1,this._$AH=N,this._$AN=void 0,this.element=t,this.name=i,this._$AM=s,this.options=n,e.length>2||""!==e[0]||""!==e[1]?(this._$AH=Array(e.length-1).fill(new String),this.strings=e):this._$AH=N}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,i=this,e,s){const n=this.strings;let o=!1;if(void 0===n)t=G(this,t,i,0),o=!j(t)||t!==this._$AH&&t!==T,o&&(this._$AH=t);else{const s=t;let r,a;for(t=n[0],r=0;r<n.length-1;r++)a=G(this,s[e+r],i,r),a===T&&(a=this._$AH[r]),o||(o=!j(a)||a!==this._$AH[r]),a===N?t=N:t!==N&&(t+=(null!=a?a:"")+n[r+1]),this._$AH[r]=a}o&&!s&&this.j(t)}j(t){t===N?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class D extends q{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===N?void 0:t}}const F=m?m.emptyScript:"";class J extends q{constructor(){super(...arguments),this.type=4}j(t){t&&t!==N?this.element.setAttribute(this.name,F):this.element.removeAttribute(this.name)}}class K extends q{constructor(t,i,e,s,n){super(t,i,e,s,n),this.type=5}_$AI(t,i=this){var e;if((t=null!==(e=G(this,t,i,0))&&void 0!==e?e:N)===T)return;const s=this._$AH,n=t===N&&s!==N||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,o=t!==N&&(s===N||n);n&&this.element.removeEventListener(this.name,this,s),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var i,e;"function"==typeof this._$AH?this._$AH.call(null!==(e=null===(i=this.options)||void 0===i?void 0:i.host)&&void 0!==e?e:this.element,t):this._$AH.handleEvent(t)}}class Z{constructor(t,i,e){this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=e}get _$AU(){return this._$AM._$AU}_$AI(t){G(this,t)}}const Q=g.litHtmlPolyfillSupport;null==Q||Q(P,L),(null!==(f=g.litHtmlVersions)&&void 0!==f?f:g.litHtmlVersions=[]).push("2.4.0");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var V,X;class Y extends b{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,i;const e=super.createRenderRoot();return null!==(t=(i=this.renderOptions).renderBefore)&&void 0!==t||(i.renderBefore=e.firstChild),e}update(t){const i=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,i,e)=>{var s,n;const o=null!==(s=null==e?void 0:e.renderBefore)&&void 0!==s?s:i;let r=o._$litPart$;if(void 0===r){const t=null!==(n=null==e?void 0:e.renderBefore)&&void 0!==n?n:null;o._$litPart$=r=new L(i.insertBefore(S(),t),t,void 0,null!=e?e:{})}return r._$AI(t),r})(i,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!1)}render(){return T}}Y.finalized=!0,Y._$litElement$=!0,null===(V=globalThis.litElementHydrateSupport)||void 0===V||V.call(globalThis,{LitElement:Y});const tt=globalThis.litElementPolyfillSupport;null==tt||tt({LitElement:Y}),(null!==(X=globalThis.litElementVersions)&&void 0!==X?X:globalThis.litElementVersions=[]).push("3.2.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const it=t=>i=>"function"==typeof i?((t,i)=>(customElements.define(t,i),i))(t,i):((t,i)=>{const{kind:e,elements:s}=i;return{kind:e,elements:s,finisher(i){customElements.define(t,i)}}})(t,i)
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */,et=(t,i)=>"method"===i.kind&&i.descriptor&&!("value"in i.descriptor)?{...i,finisher(e){e.createProperty(i.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:i.key,initializer(){"function"==typeof i.initializer&&(this[i.key]=i.initializer.call(this))},finisher(e){e.createProperty(i.key,t)}};function st(t){return(i,e)=>void 0!==e?((t,i,e)=>{i.constructor.createProperty(e,t)})(t,i,e):et(t,i)
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */}var nt;null===(nt=window.HTMLSlotElement)||void 0===nt||nt.prototype.assignedElements;var ot=function(t,i,e,s){for(var n,o=arguments.length,r=o<3?i:null===s?s=Object.getOwnPropertyDescriptor(i,e):s,a=t.length-1;a>=0;a--)(n=t[a])&&(r=(o<3?n(r):o>3?n(i,e,r):n(i,e))||r);return o>3&&r&&Object.defineProperty(i,e,r),r};let rt=class extends Y{constructor(){super(...arguments),this.title=""}render(){return U`
        <div class="box">
            <span class="text"><a href="/discover">${this.title}</a></span>
            <div>
            <slot></slot>
            </div>
        </div>
        `}};rt.styles=o`
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
    `,ot([st()],rt.prototype,"title",void 0),rt=ot([it("discover-card-element")],rt);var at=function(t,i,e,s){for(var n,o=arguments.length,r=o<3?i:null===s?s=Object.getOwnPropertyDescriptor(i,e):s,a=t.length-1;a>=0;a--)(n=t[a])&&(r=(o<3?n(r):o>3?n(i,e,r):n(i,e))||r);return o>3&&r&&Object.defineProperty(i,e,r),r};let lt=class extends Y{constructor(){super(...arguments),this.name="",this.active=!1}render(){return U`
        <a
        class="ay az ba bb bc bd be bf bg bh bi bj bk bl bm"
        rel="noopener follow"
        href="/discover/${this.name.replace(/\s+/g,"-").toLowerCase()}"
        ><div class="tag">
            <div><p class="text">${this.name}</p></div>
        </div></a
        >
    `}};lt.styles=o`
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

        .tag:hover, :host([active]) .tag {
            border: 1px solid red;
        }
     

       .tag:hover p.text {
            color: red;
        }

    `,at([st({type:String})],lt.prototype,"name",void 0),at([st({type:Boolean,reflect:!0})],lt.prototype,"active",void 0),lt=at([it("tag-element")],lt);var ht=function(t,i,e,s){for(var n,o=arguments.length,r=o<3?i:null===s?s=Object.getOwnPropertyDescriptor(i,e):s,a=t.length-1;a>=0;a--)(n=t[a])&&(r=(o<3?n(r):o>3?n(i,e,r):n(i,e))||r);return o>3&&r&&Object.defineProperty(i,e,r),r};let dt=class extends Y{constructor(){super(...arguments),this.name=""}render(){return U`
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
    `}};dt.styles=o`

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
  `,ht([st({type:String})],dt.prototype,"name",void 0),dt=ht([it("mini-card-element")],dt);var ct=function(t,i,e,s){for(var n,o=arguments.length,r=o<3?i:null===s?s=Object.getOwnPropertyDescriptor(i,e):s,a=t.length-1;a>=0;a--)(n=t[a])&&(r=(o<3?n(r):o>3?n(i,e,r):n(i,e))||r);return o>3&&r&&Object.defineProperty(i,e,r),r};let ut=class extends Y{constructor(){super(...arguments),this.theme="",this.tagDisplayCount=3}render(){return console.log(this.item.image),U`
      <div class="card-wrapper">
        <div class="card">
          <div class="card-image">
            <img
              class="image"
              src="${this.item.image?this.item.image:"img/hyrox-photo-banner.jpg"}"
              alt="Girl in a jacket"
              width="${"large"===this.theme?"100%":"100"}"
              height="${"large"===this.theme?"300":"100"}"
            />
          </div>
          <div class="card-text">
            <h2 class="title">${this.item.name}</h2>
            <div class="card-meta-wrapper">
              <div class="card-meta">
                ${this.item.date?U`
                      <span class="card-meta-date">
                        <span>${this.item.date}</span>
                      </span>
                      <div class="card-meta-dot" aria-hidden="true">
                        <span>·</span>
                      </div>
                    `:""}
                ${this.item.tags?U`
                      <ul class="card-meta-tags">
                        ${this.item.tags.map(((t,i)=>i<this.tagDisplayCount?U`<li>
                              <a
                                class="card-meta-tag"
                                aria-hidden="true"
                                href="tags/${t}"
                                >${t}</a
                              >
                            </li>`:""))}
                      </ul>
                    `:""}
              </div>
            </div>
          </div>
        </div>
      </div>
    `}};ut.styles=o`
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


    :host([theme=large]) .card {
      flex-direction: column;
    }

    .card-text,
    .card-image {
      padding: 0.4rem;
    }

    .card-meta-wrapper {
      padding-top: 0px;
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

    .card-meta-tags {
      list-style-type: none;
      padding-left: 6px;
      padding-right: 6px;
      display: block;
      color: rgba(117, 117, 117, 1);
      line-height: 20px;
      font-size: 14px;
    }

    .card-meta-tags li {
      padding-right: 0.1rem;
      display: inline;
    }

    .card-meta-tag {
      background-color: #e3e7af;
      color: rgba(117, 117, 117, 1);
      position: relative;
      line-height: 20px;
      padding: 2px 8px;
      border-radius: 100px;
      transition: background 300ms ease 0s;
      white-space: nowrap;
      font-size: 13px;
      text-decoration: none;
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
      padding-bottom: 0px;
    }

    h2 {
      padding-bottom: 0px;
      margin-bottom: 0px;
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
  `,ct([st({type:String})],ut.prototype,"theme",void 0),ct([st({type:Object,reflect:!1})],ut.prototype,"item",void 0),ct([st({type:Number})],ut.prototype,"tagDisplayCount",void 0),ut=ct([it("simple-mini-card-element")],ut);var pt=function(t,i,e,s){for(var n,o=arguments.length,r=o<3?i:null===s?s=Object.getOwnPropertyDescriptor(i,e):s,a=t.length-1;a>=0;a--)(n=t[a])&&(r=(o<3?n(r):o>3?n(i,e,r):n(i,e))||r);return o>3&&r&&Object.defineProperty(i,e,r),r};let vt=class extends Y{constructor(){super(...arguments),this.title="",this.items=[]}render(){return U`
      <span class="wrapper">
        <ul>
          <span class="text">${this.title}</span>
          ${this.items.map((t=>U`<li><a href=${t.href}>${t.name}</a></li>`))}
        </ul>
      </span>
    `}};vt.styles=o`
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
  `,pt([st()],vt.prototype,"title",void 0),pt([st()],vt.prototype,"items",void 0),vt=pt([it("list-element")],vt);var bt=function(t,i,e,s){for(var n,o=arguments.length,r=o<3?i:null===s?s=Object.getOwnPropertyDescriptor(i,e):s,a=t.length-1;a>=0;a--)(n=t[a])&&(r=(o<3?n(r):o>3?n(i,e,r):n(i,e))||r);return o>3&&r&&Object.defineProperty(i,e,r),r};let ft=class extends Y{render(){return U`
      <div class="info-box">
        <div class="info-col-4">
          <div class="section">
            <list-element title="Welcome" .items=${[{name:"What is Hyrox?",href:""},{name:"How hard is Hyrox?",href:""},{name:"Can a begineer do a Hyrox?",href:""},{name:"A begineer guide to Hyrox",href:""},{name:"The history of hyrox",href:""}]}></list-element>
          </div>
          <div class="section ">
            <list-element title="Guides" .items=${[{name:"How to Structure you Hyrox Training",href:""},{name:"Ultimate Hyrox Training Guide",href:""},{name:"Who you should be following",href:""},{name:"Hyrox Q & A",href:""},{name:"Training Guide",href:""},{name:"Tips & Tricks Per Station",href:""},{name:"Movement Standards",href:""},{name:"Hyrox PFT Guide",href:""},{name:"Ultimate List of Hyrox Workouts",href:""},{name:"A begineer guide to Hyrox",href:""}]}></list-element>
          </div>
          <div class="section no-border">
            <list-element
              title="Resources"
              .items=${[{name:"Hyrox Rules",href:"how-hard-is-hyrox"},{name:"Hyrox Double Rules",href:""},{name:"Hyrox Relay Rules",href:""},{name:"Hyrox Training Plan",href:""},{name:"Hyrox Workouts",href:""},{name:"Hyrox Podcasts",href:""}]}
            ></list-element>
          </div>
        </div>

        <div class="info-col-4-greater">
          <span class="section-title">Must Reads</span>

          ${[{name:"Hyrox London 2022: The Aftermath",href:""},{name:"Running Gear",href:""}].map((t=>U`<simple-mini-card-element
                .item=${t}
              ></simple-mini-card-element>`))}
        </div>

        <div class="info-col-4-less">
          <div class="section">
            <span class="section-title">Hyrox Workouts</span>
            ${[{name:"Strength Workout",href:"",date:" "},{name:"60m AMRAP",href:"",date:" "}].map((t=>U`<simple-mini-card-element
                  .item=${t}
                ></simple-mini-card-element>`))}
          </div>
        </div>

        <div class="info-col-4">
         
          <div class="section">
            <slot name="fourth"></slot>
          </div>

          <div class="section">
            <list-element
              title="Recovery & Health"
              .items=${[{name:"How to maximise recovery",href:""},{name:"Supplements we use",href:""},{name:"Tech we use",href:""}]}
            ></list-element>
          </div>
          <div class="section no-border">
            <list-element title="Gear" .items=${[{name:"Shoes",href:""},{name:"Running Gear",href:""}]}></list-element>
          </div>
        </div>
      </div>
    `}};ft.styles=o`
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
      width: 22%;
      padding: 0;
      min-height: 50px;
      padding-left: 0.5rem;
      padding-right: 0.5rem;
    }

    .info-box .info-col-4-greater {
      box-sizing: border-box;
      float: left;
      width: 38%;
      padding: 0;
      min-height: 50px;
      padding-left: 0.5rem;
      padding-right: 0.5rem;
    }

    .info-box .info-col-4-less {
      box-sizing: border-box;
      float: left;
      width: 18%;
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
  `,ft=bt([it("dashboard-element")],ft);
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var gt=function(t,i,e,s){for(var n,o=arguments.length,r=o<3?i:null===s?s=Object.getOwnPropertyDescriptor(i,e):s,a=t.length-1;a>=0;a--)(n=t[a])&&(r=(o<3?n(r):o>3?n(i,e,r):n(i,e))||r);return o>3&&r&&Object.defineProperty(i,e,r),r};let mt=class extends Y{constructor(){super(...arguments),this.name="World",this.count=0}render(){return U`
      <h1>${this.sayHello(this.name)}!</h1>
      <button @click=${this._onClick} part="button">
        Click Count: ${this.count}
      </button>
      <slot></slot>
    `}_onClick(){this.count++,this.dispatchEvent(new CustomEvent("count-changed"))}sayHello(t){return`Hello, ${t}`}};mt.styles=o`
    :host {
      display: block;
      border: solid 1px gray;
      padding: 16px;
      max-width: 800px;
    }
  `,gt([st()],mt.prototype,"name",void 0),gt([st({type:Number})],mt.prototype,"count",void 0),mt=gt([it("my-element")],mt);

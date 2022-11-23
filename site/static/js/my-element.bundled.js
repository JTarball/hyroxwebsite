/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t=window,e=t.ShadowRoot&&(void 0===t.ShadyCSS||t.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,i=Symbol(),s=new WeakMap;class n{constructor(t,e,s){if(this._$cssResult$=!0,s!==i)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const i=this.t;if(e&&void 0===t){const e=void 0!==i&&1===i.length;e&&(t=s.get(i)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),e&&s.set(i,t))}return t}toString(){return this.cssText}}const o=(t,...e)=>{const s=1===t.length?t[0]:e.reduce(((e,i,s)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[s+1]),t[0]);return new n(s,t,i)},r=e?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new n("string"==typeof t?t:t+"",void 0,i))(e)})(t):t
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;var a;const l=window,h=l.trustedTypes,d=h?h.emptyScript:"",c=l.reactiveElementPolyfillSupport,u={toAttribute(t,e){switch(e){case Boolean:t=t?d:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},m=(t,e)=>e!==t&&(e==e||t==t),p={attribute:!0,type:String,converter:u,reflect:!1,hasChanged:m};class v extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(t){var e;this.finalize(),(null!==(e=this.h)&&void 0!==e?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((e,i)=>{const s=this._$Ep(i,e);void 0!==s&&(this._$Ev.set(s,i),t.push(s))})),t}static createProperty(t,e=p){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i="symbol"==typeof t?Symbol():"__"+t,s=this.getPropertyDescriptor(t,i,e);void 0!==s&&Object.defineProperty(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(s){const n=this[t];this[e]=s,this.requestUpdate(t,n,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||p}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),void 0!==t.h&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const i of e)this.createProperty(i,t[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(r(t))}else void 0!==t&&e.push(r(t));return e}static _$Ep(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}u(){var t;this._$E_=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(t=this.constructor.h)||void 0===t||t.forEach((t=>t(this)))}addController(t){var e,i;(null!==(e=this._$ES)&&void 0!==e?e:this._$ES=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(i=t.hostConnected)||void 0===i||i.call(t))}removeController(t){var e;null===(e=this._$ES)||void 0===e||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach(((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])}))}createRenderRoot(){var i;const s=null!==(i=this.shadowRoot)&&void 0!==i?i:this.attachShadow(this.constructor.shadowRootOptions);return((i,s)=>{e?i.adoptedStyleSheets=s.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):s.forEach((e=>{const s=document.createElement("style"),n=t.litNonce;void 0!==n&&s.setAttribute("nonce",n),s.textContent=e.cssText,i.appendChild(s)}))})(s,this.constructor.elementStyles),s}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)}))}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EO(t,e,i=p){var s;const n=this.constructor._$Ep(t,i);if(void 0!==n&&!0===i.reflect){const o=(void 0!==(null===(s=i.converter)||void 0===s?void 0:s.toAttribute)?i.converter:u).toAttribute(e,i.type);this._$El=t,null==o?this.removeAttribute(n):this.setAttribute(n,o),this._$El=null}}_$AK(t,e){var i;const s=this.constructor,n=s._$Ev.get(t);if(void 0!==n&&this._$El!==n){const t=s.getPropertyOptions(n),o="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==(null===(i=t.converter)||void 0===i?void 0:i.fromAttribute)?t.converter:u;this._$El=n,this[n]=o.fromAttribute(e,t.type),this._$El=null}}requestUpdate(t,e,i){let s=!0;void 0!==t&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||m)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),!0===i.reflect&&this._$El!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,i))):s=!1),!this.isUpdatePending&&s&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach(((t,e)=>this[e]=t)),this._$Ei=void 0);let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)})),this.update(i)):this._$Ek()}catch(t){throw e=!1,this._$Ek(),t}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;null===(e=this._$ES)||void 0===e||e.forEach((t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){void 0!==this._$EC&&(this._$EC.forEach(((t,e)=>this._$EO(e,this[e],t))),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var g;v.finalized=!0,v.elementProperties=new Map,v.elementStyles=[],v.shadowRootOptions={mode:"open"},null==c||c({ReactiveElement:v}),(null!==(a=l.reactiveElementVersions)&&void 0!==a?a:l.reactiveElementVersions=[]).push("1.4.2");const b=window,f=b.trustedTypes,x=f?f.createPolicy("lit-html",{createHTML:t=>t}):void 0,y=`lit$${(Math.random()+"").slice(9)}$`,w="?"+y,$=`<${w}>`,k=document,S=(t="")=>k.createComment(t),j=t=>null===t||"object"!=typeof t&&"function"!=typeof t,H=Array.isArray,A=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,_=/-->/g,z=/>/g,C=RegExp(">|[ \t\n\f\r](?:([^\\s\"'>=/]+)([ \t\n\f\r]*=[ \t\n\f\r]*(?:[^ \t\n\f\r\"'`<>=]|(\"|')|))|$)","g"),O=/'/g,E=/"/g,R=/^(?:script|style|textarea|title)$/i,M=(t=>(e,...i)=>({_$litType$:t,strings:e,values:i}))(1),T=Symbol.for("lit-noChange"),U=Symbol.for("lit-nothing"),N=new WeakMap,W=k.createTreeWalker(k,129,null,!1),P=(t,e)=>{const i=t.length-1,s=[];let n,o=2===e?"<svg>":"",r=A;for(let e=0;e<i;e++){const i=t[e];let a,l,h=-1,d=0;for(;d<i.length&&(r.lastIndex=d,l=r.exec(i),null!==l);)d=r.lastIndex,r===A?"!--"===l[1]?r=_:void 0!==l[1]?r=z:void 0!==l[2]?(R.test(l[2])&&(n=RegExp("</"+l[2],"g")),r=C):void 0!==l[3]&&(r=C):r===C?">"===l[0]?(r=null!=n?n:A,h=-1):void 0===l[1]?h=-2:(h=r.lastIndex-l[2].length,a=l[1],r=void 0===l[3]?C:'"'===l[3]?E:O):r===E||r===O?r=C:r===_||r===z?r=A:(r=C,n=void 0);const c=r===C&&t[e+1].startsWith("/>")?" ":"";o+=r===A?i+$:h>=0?(s.push(a),i.slice(0,h)+"$lit$"+i.slice(h)+y+c):i+y+(-2===h?(s.push(void 0),e):c)}const a=o+(t[i]||"<?>")+(2===e?"</svg>":"");if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return[void 0!==x?x.createHTML(a):a,s]};class B{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let n=0,o=0;const r=t.length-1,a=this.parts,[l,h]=P(t,e);if(this.el=B.createElement(l,i),W.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(s=W.nextNode())&&a.length<r;){if(1===s.nodeType){if(s.hasAttributes()){const t=[];for(const e of s.getAttributeNames())if(e.endsWith("$lit$")||e.startsWith(y)){const i=h[o++];if(t.push(e),void 0!==i){const t=s.getAttribute(i.toLowerCase()+"$lit$").split(y),e=/([.?@])?(.*)/.exec(i);a.push({type:1,index:n,name:e[2],strings:t,ctor:"."===e[1]?q:"?"===e[1]?J:"@"===e[1]?K:F})}else a.push({type:6,index:n})}for(const e of t)s.removeAttribute(e)}if(R.test(s.tagName)){const t=s.textContent.split(y),e=t.length-1;if(e>0){s.textContent=f?f.emptyScript:"";for(let i=0;i<e;i++)s.append(t[i],S()),W.nextNode(),a.push({type:2,index:++n});s.append(t[e],S())}}}else if(8===s.nodeType)if(s.data===w)a.push({type:2,index:n});else{let t=-1;for(;-1!==(t=s.data.indexOf(y,t+1));)a.push({type:7,index:n}),t+=y.length-1}n++}}static createElement(t,e){const i=k.createElement("template");return i.innerHTML=t,i}}function I(t,e,i=t,s){var n,o,r,a;if(e===T)return e;let l=void 0!==s?null===(n=i._$Co)||void 0===n?void 0:n[s]:i._$Cl;const h=j(e)?void 0:e._$litDirective$;return(null==l?void 0:l.constructor)!==h&&(null===(o=null==l?void 0:l._$AO)||void 0===o||o.call(l,!1),void 0===h?l=void 0:(l=new h(t),l._$AT(t,i,s)),void 0!==s?(null!==(r=(a=i)._$Co)&&void 0!==r?r:a._$Co=[])[s]=l:i._$Cl=l),void 0!==l&&(e=I(t,l._$AS(t,e.values),l,s)),e}class G{constructor(t,e){this.u=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}v(t){var e;const{el:{content:i},parts:s}=this._$AD,n=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:k).importNode(i,!0);W.currentNode=n;let o=W.nextNode(),r=0,a=0,l=s[0];for(;void 0!==l;){if(r===l.index){let e;2===l.type?e=new L(o,o.nextSibling,this,t):1===l.type?e=new l.ctor(o,l.name,l.strings,this,t):6===l.type&&(e=new Z(o,this,t)),this.u.push(e),l=s[++a]}r!==(null==l?void 0:l.index)&&(o=W.nextNode(),r++)}return n}p(t){let e=0;for(const i of this.u)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class L{constructor(t,e,i,s){var n;this.type=2,this._$AH=U,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cm=null===(n=null==s?void 0:s.isConnected)||void 0===n||n}get _$AU(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$Cm}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=I(this,t,e),j(t)?t===U||null==t||""===t?(this._$AH!==U&&this._$AR(),this._$AH=U):t!==this._$AH&&t!==T&&this.g(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>H(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]))(t)?this.k(t):this.g(t)}O(t,e=this._$AB){return this._$AA.parentNode.insertBefore(t,e)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}g(t){this._$AH!==U&&j(this._$AH)?this._$AA.nextSibling.data=t:this.T(k.createTextNode(t)),this._$AH=t}$(t){var e;const{values:i,_$litType$:s}=t,n="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=B.createElement(s.h,this.options)),s);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===n)this._$AH.p(i);else{const t=new G(n,this),e=t.v(this.options);t.p(i),this.T(e),this._$AH=t}}_$AC(t){let e=N.get(t.strings);return void 0===e&&N.set(t.strings,e=new B(t)),e}k(t){H(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const n of t)s===e.length?e.push(i=new L(this.O(S()),this.O(S()),this,this.options)):i=e[s],i._$AI(n),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){var i;for(null===(i=this._$AP)||void 0===i||i.call(this,!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cm=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}}class F{constructor(t,e,i,s,n){this.type=1,this._$AH=U,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=n,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=U}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,s){const n=this.strings;let o=!1;if(void 0===n)t=I(this,t,e,0),o=!j(t)||t!==this._$AH&&t!==T,o&&(this._$AH=t);else{const s=t;let r,a;for(t=n[0],r=0;r<n.length-1;r++)a=I(this,s[i+r],e,r),a===T&&(a=this._$AH[r]),o||(o=!j(a)||a!==this._$AH[r]),a===U?t=U:t!==U&&(t+=(null!=a?a:"")+n[r+1]),this._$AH[r]=a}o&&!s&&this.j(t)}j(t){t===U?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class q extends F{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===U?void 0:t}}const D=f?f.emptyScript:"";class J extends F{constructor(){super(...arguments),this.type=4}j(t){t&&t!==U?this.element.setAttribute(this.name,D):this.element.removeAttribute(this.name)}}class K extends F{constructor(t,e,i,s,n){super(t,e,i,s,n),this.type=5}_$AI(t,e=this){var i;if((t=null!==(i=I(this,t,e,0))&&void 0!==i?i:U)===T)return;const s=this._$AH,n=t===U&&s!==U||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,o=t!==U&&(s===U||n);n&&this.element.removeEventListener(this.name,this,s),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;"function"==typeof this._$AH?this._$AH.call(null!==(i=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==i?i:this.element,t):this._$AH.handleEvent(t)}}class Z{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){I(this,t)}}const Q=b.litHtmlPolyfillSupport;null==Q||Q(B,L),(null!==(g=b.litHtmlVersions)&&void 0!==g?g:b.litHtmlVersions=[]).push("2.4.0");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var V,X;class Y extends v{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,e;const i=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=i.firstChild),i}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,i)=>{var s,n;const o=null!==(s=null==i?void 0:i.renderBefore)&&void 0!==s?s:e;let r=o._$litPart$;if(void 0===r){const t=null!==(n=null==i?void 0:i.renderBefore)&&void 0!==n?n:null;o._$litPart$=r=new L(e.insertBefore(S(),t),t,void 0,null!=i?i:{})}return r._$AI(t),r})(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!1)}render(){return T}}Y.finalized=!0,Y._$litElement$=!0,null===(V=globalThis.litElementHydrateSupport)||void 0===V||V.call(globalThis,{LitElement:Y});const tt=globalThis.litElementPolyfillSupport;null==tt||tt({LitElement:Y}),(null!==(X=globalThis.litElementVersions)&&void 0!==X?X:globalThis.litElementVersions=[]).push("3.2.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const et=t=>e=>"function"==typeof e?((t,e)=>(customElements.define(t,e),e))(t,e):((t,e)=>{const{kind:i,elements:s}=e;return{kind:i,elements:s,finisher(e){customElements.define(t,e)}}})(t,e)
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */,it=(t,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(i){i.createProperty(e.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(i){i.createProperty(e.key,t)}};function st(t){return(e,i)=>void 0!==i?((t,e,i)=>{e.constructor.createProperty(i,t)})(t,e,i):it(t,e)
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */}var nt;null===(nt=window.HTMLSlotElement)||void 0===nt||nt.prototype.assignedElements;var ot=function(t,e,i,s){for(var n,o=arguments.length,r=o<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s,a=t.length-1;a>=0;a--)(n=t[a])&&(r=(o<3?n(r):o>3?n(e,i,r):n(e,i))||r);return o>3&&r&&Object.defineProperty(e,i,r),r};let rt=class extends Y{constructor(){super(...arguments),this.title=""}render(){return M`
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
    `,ot([st()],rt.prototype,"title",void 0),rt=ot([et("discover-card-element")],rt);var at=function(t,e,i,s){for(var n,o=arguments.length,r=o<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s,a=t.length-1;a>=0;a--)(n=t[a])&&(r=(o<3?n(r):o>3?n(e,i,r):n(e,i))||r);return o>3&&r&&Object.defineProperty(e,i,r),r};let lt=class extends Y{constructor(){super(...arguments),this.name="",this.active=!1}render(){return M`
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

    `,at([st({type:String})],lt.prototype,"name",void 0),at([st({type:Boolean,reflect:!0})],lt.prototype,"active",void 0),lt=at([et("tag-element")],lt);var ht=function(t,e,i,s){for(var n,o=arguments.length,r=o<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s,a=t.length-1;a>=0;a--)(n=t[a])&&(r=(o<3?n(r):o>3?n(e,i,r):n(e,i))||r);return o>3&&r&&Object.defineProperty(e,i,r),r};let dt=class extends Y{constructor(){super(...arguments),this.name=""}render(){return M`
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
  `,ht([st({type:String})],dt.prototype,"name",void 0),dt=ht([et("mini-card-element")],dt);var ct=function(t,e,i,s){for(var n,o=arguments.length,r=o<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s,a=t.length-1;a>=0;a--)(n=t[a])&&(r=(o<3?n(r):o>3?n(e,i,r):n(e,i))||r);return o>3&&r&&Object.defineProperty(e,i,r),r};let ut=class extends Y{constructor(){super(...arguments),this.theme="",this.tagDisplayCount=3}render(){return M`
      <div class="card-wrapper">
        <div class="card">
          <div class="card-image">
            <img
              class="image"
              src="img/hyrox-photo-banner.jpg"
              alt="Girl in a jacket"
              width="${"large"===this.theme?"100%":"100"}"
              height="${"large"===this.theme?"300":"100"}"
            />
          </div>
          <div class="card-text">
            <h2 class="title">${this.item.name}</h2>
            <div class="card-meta-wrapper">
              <div class="card-meta">
                ${this.item.date?M`
                      <span class="card-meta-date">
                        <span>${this.item.date}</span>
                      </span>
                      <div class="card-meta-dot" aria-hidden="true">
                        <span>·</span>
                      </div>
                    `:""}
                ${this.item.tags?M`
                      <ul class="card-meta-tags">
                        ${this.item.tags.map(((t,e)=>e<this.tagDisplayCount?M`<li>
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
  `,ct([st({type:String})],ut.prototype,"theme",void 0),ct([st({type:Object,reflect:!1})],ut.prototype,"item",void 0),ct([st({type:Number})],ut.prototype,"tagDisplayCount",void 0),ut=ct([et("simple-mini-card-element")],ut);var mt=function(t,e,i,s){for(var n,o=arguments.length,r=o<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s,a=t.length-1;a>=0;a--)(n=t[a])&&(r=(o<3?n(r):o>3?n(e,i,r):n(e,i))||r);return o>3&&r&&Object.defineProperty(e,i,r),r};let pt=class extends Y{constructor(){super(...arguments),this.title="",this.items=[]}render(){return M`
      <span class="wrapper">
        <ul>
          <span class="text">${this.title}</span>
          ${this.items.map((t=>M`<li><a href=${t.href}>${t.name}</a></li>`))}
        </ul>
      </span>
    `}};pt.styles=o`
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
  `,mt([st()],pt.prototype,"title",void 0),mt([st()],pt.prototype,"items",void 0),pt=mt([et("list-element")],pt);var vt=function(t,e,i,s){for(var n,o=arguments.length,r=o<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s,a=t.length-1;a>=0;a--)(n=t[a])&&(r=(o<3?n(r):o>3?n(e,i,r):n(e,i))||r);return o>3&&r&&Object.defineProperty(e,i,r),r};let gt=class extends Y{render(){return M`
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
              .items=${[{name:"Hyrox Rules",href:""},{name:"Hyrox Double Rules",href:""},{name:"Hyrox Relay Rules",href:""},{name:"Hyrox Training Plan",href:""},{name:"Hyrox Workouts",href:""},{name:"Hyrox Podcasts",href:""}]}
            ></list-element>
          </div>
        </div>

        <div class="info-col-4-greater">
          <span class="section-title">Must Reads</span>

          ${[{name:"Hyrox London 2022: The Aftermath",href:""},{name:"Running Gear",href:""}].map((t=>M`<simple-mini-card-element
                .item=${t}
              ></simple-mini-card-element>`))}
        </div>

        <div class="info-col-4-less">
          <div class="section">
            <span class="section-title">Hyrox Workouts</span>
            ${[{name:"Strength Workout",href:"",date:" "},{name:"60m AMRAP",href:"",date:" "}].map((t=>M`<simple-mini-card-element
                  .item=${t}
                ></simple-mini-card-element>`))}
          </div>
        </div>

        <div class="info-col-4">
         
          <div class="section">
            <slot name="fourth"></slot>
            <!-- <discover-card-element title="Discover">
              <tag-element name="Mobility"></tag-element>
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
            </discover-card-element> -->
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
    `}};gt.styles=o`
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
  `,gt=vt([et("dashboard-element")],gt);
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var bt=function(t,e,i,s){for(var n,o=arguments.length,r=o<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s,a=t.length-1;a>=0;a--)(n=t[a])&&(r=(o<3?n(r):o>3?n(e,i,r):n(e,i))||r);return o>3&&r&&Object.defineProperty(e,i,r),r};let ft=class extends Y{constructor(){super(...arguments),this.name="World",this.count=0}render(){return M`
      <h1>${this.sayHello(this.name)}!</h1>
      <button @click=${this._onClick} part="button">
        Click Count: ${this.count}
      </button>
      <slot></slot>
    `}_onClick(){this.count++,this.dispatchEvent(new CustomEvent("count-changed"))}sayHello(t){return`Hello, ${t}`}};ft.styles=o`
    :host {
      display: block;
      border: solid 1px gray;
      padding: 16px;
      max-width: 800px;
    }
  `,bt([st()],ft.prototype,"name",void 0),bt([st({type:Number})],ft.prototype,"count",void 0),ft=bt([et("my-element")],ft);

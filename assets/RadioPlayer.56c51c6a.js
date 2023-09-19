var Se=Object.defineProperty;var Ce=(e,t,n)=>t in e?Se(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var j=(e,t,n)=>(Ce(e,typeof t!="symbol"?t+"":t,n),n);import{_ as Oe,o as w,c as O,a as b,j as B,t as A,F as U,i as I,J as Re,K as $e,L as Le,M,N as Pe,O as se,P as xe,r as R,Q as re,z as ae,R as oe,S as T,x as S,T as ie,U as ke,V as Ee,W as Te,X as De,Y as je,n as Ae}from"./entry.e59b5d3c.js";const qe={props:{channelDetails:{type:Object,default:{}}},methods:{setDefaultThumbnail(){this.channelDetails.favicon="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTiKIGiH9HTFluylskypHMDTStOHsXMTzHDA&usqp=CAU"},isLive(){fetch(this.channelDetails.urlResolved,{method:"HEAD"}).then(e=>{this.channelDetails.isLive=e.status===200}).catch(e=>{this.channelDetails.isLive=!1})}}},Ne={class:"card shadow m-2",style:{"min-width":"18rem"}},ze={class:"row g-0 d-flex align-items-center justify-content-center"},Be={class:"col-3"},Me={class:"position-relative"},Ve=["src"],Fe={key:0,class:"position-absolute top-0 start-100 translate-middle p-1 bg-success border border-light rounded-circle"},Ue=b("span",{class:"visually-hidden"},"Streaming Status",-1),Ie=[Ue],He={class:"col-9"},We={class:"card-body p-1"},Ge={class:"card-title text-truncate"},Je={class:"text-truncate opacity-75"},Ke={key:0,class:"border rounded-2 px-1"},Qe={class:"border rounded-2 px-1"},Xe={key:0,class:"border rounded-2 px-1"};function Ye(e,t,n,s,a,r){return w(),O("div",Ne,[b("div",ze,[b("div",Be,[b("span",Me,[b("img",{src:this.channelDetails.favicon,class:"img-thumbnail object-fit-cover rounded-5",alt:"thumbnail",onError:t[0]||(t[0]=o=>r.setDefaultThumbnail()),style:{"max-width":"4rem"}},null,40,Ve),n.channelDetails.isLive?(w(),O("span",Fe,Ie)):B("",!0)])]),b("div",He,[b("div",We,[b("h6",Ge,A(n.channelDetails.name),1),b("div",Je,[n.channelDetails.countryCode?(w(),O("span",Ke,A(n.channelDetails.countryCode),1)):B("",!0),(w(!0),O(U,null,I(n.channelDetails.tags,o=>(w(),O("span",Qe,A(o),1))),256)),(w(!0),O(U,null,I(n.channelDetails.language,o=>(w(),O("span",null,[o?(w(),O("span",Xe,A(o),1)):B("",!0)]))),256))])])])])])}const Ze=Oe(qe,[["render",Ye]]),W=()=>Re("nowPlayingChannel",()=>null);function H(e){return $e()?(Le(e),!0):!1}function F(e){return typeof e=="function"?e():M(e)}const et=typeof window<"u",le=()=>{};function tt(e,t){function n(...s){return new Promise((a,r)=>{Promise.resolve(e(()=>t.apply(this,s),{fn:t,thisArg:this,args:s})).then(a).catch(r)})}return n}const ce=e=>e();function nt(e=ce){const t=R(!0);function n(){t.value=!1}function s(){t.value=!0}const a=(...r)=>{t.value&&e(...r)};return{isActive:se(t),pause:n,resume:s,eventFilter:a}}function st(...e){if(e.length!==1)return Pe(...e);const t=e[0];return typeof t=="function"?se(xe(()=>({get:t,set:le}))):R(t)}function rt(e,t=!0){re()?ae(e):t?e():oe(e)}var G=Object.getOwnPropertySymbols,at=Object.prototype.hasOwnProperty,ot=Object.prototype.propertyIsEnumerable,it=(e,t)=>{var n={};for(var s in e)at.call(e,s)&&t.indexOf(s)<0&&(n[s]=e[s]);if(e!=null&&G)for(var s of G(e))t.indexOf(s)<0&&ot.call(e,s)&&(n[s]=e[s]);return n};function lt(e,t,n={}){const s=n,{eventFilter:a=ce}=s,r=it(s,["eventFilter"]);return T(e,tt(a,t),r)}var ct=Object.defineProperty,ut=Object.defineProperties,dt=Object.getOwnPropertyDescriptors,V=Object.getOwnPropertySymbols,ue=Object.prototype.hasOwnProperty,de=Object.prototype.propertyIsEnumerable,J=(e,t,n)=>t in e?ct(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,ft=(e,t)=>{for(var n in t||(t={}))ue.call(t,n)&&J(e,n,t[n]);if(V)for(var n of V(t))de.call(t,n)&&J(e,n,t[n]);return e},ht=(e,t)=>ut(e,dt(t)),pt=(e,t)=>{var n={};for(var s in e)ue.call(e,s)&&t.indexOf(s)<0&&(n[s]=e[s]);if(e!=null&&V)for(var s of V(e))t.indexOf(s)<0&&de.call(e,s)&&(n[s]=e[s]);return n};function yt(e,t,n={}){const s=n,{eventFilter:a}=s,r=pt(s,["eventFilter"]),{eventFilter:o,pause:i,resume:l,isActive:u}=nt(a);return{stop:lt(e,t,ht(ft({},r),{eventFilter:o})),pause:i,resume:l,isActive:u}}function k(e){var t;const n=F(e);return(t=n==null?void 0:n.$el)!=null?t:n}const E=et?window:void 0;function K(...e){let t,n,s,a;if(typeof e[0]=="string"||Array.isArray(e[0])?([n,s,a]=e,t=E):[t,n,s,a]=e,!t)return le;Array.isArray(n)||(n=[n]),Array.isArray(s)||(s=[s]);const r=[],o=()=>{r.forEach(f=>f()),r.length=0},i=(f,c,h,p)=>(f.addEventListener(c,h,p),()=>f.removeEventListener(c,h,p)),l=T(()=>[k(t),F(a)],([f,c])=>{o(),f&&r.push(...n.flatMap(h=>s.map(p=>i(f,h,p,c))))},{immediate:!0,flush:"post"}),u=()=>{l(),o()};return H(u),u}function mt(){const e=R(!1);return re()&&ae(()=>{e.value=!0}),e}function fe(e){const t=mt();return S(()=>(t.value,!!e()))}function vt(e,t={}){const{window:n=E}=t,s=fe(()=>n&&"matchMedia"in n&&typeof n.matchMedia=="function");let a;const r=R(!1),o=u=>{r.value=u.matches},i=()=>{a&&("removeEventListener"in a?a.removeEventListener("change",o):a.removeListener(o))},l=ke(()=>{s.value&&(i(),a=n.matchMedia(F(e)),"addEventListener"in a?a.addEventListener("change",o):a.addListener(o),r.value=a.matches)});return H(()=>{l(),i(),a=void 0}),r}const N=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},z="__vueuse_ssr_handlers__",gt=bt();function bt(){return z in N||(N[z]=N[z]||{}),N[z]}function he(e,t){return gt[e]||t}function _t(e){return e==null?"any":e instanceof Set?"set":e instanceof Map?"map":e instanceof Date?"date":typeof e=="boolean"?"boolean":typeof e=="string"?"string":typeof e=="object"?"object":Number.isNaN(e)?"any":"number"}var wt=Object.defineProperty,Q=Object.getOwnPropertySymbols,St=Object.prototype.hasOwnProperty,Ct=Object.prototype.propertyIsEnumerable,X=(e,t,n)=>t in e?wt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Y=(e,t)=>{for(var n in t||(t={}))St.call(t,n)&&X(e,n,t[n]);if(Q)for(var n of Q(t))Ct.call(t,n)&&X(e,n,t[n]);return e};const Ot={boolean:{read:e=>e==="true",write:e=>String(e)},object:{read:e=>JSON.parse(e),write:e=>JSON.stringify(e)},number:{read:e=>Number.parseFloat(e),write:e=>String(e)},any:{read:e=>e,write:e=>String(e)},string:{read:e=>e,write:e=>String(e)},map:{read:e=>new Map(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e.entries()))},set:{read:e=>new Set(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e))},date:{read:e=>new Date(e),write:e=>e.toISOString()}},Z="vueuse-storage";function Rt(e,t,n,s={}){var a;const{flush:r="pre",deep:o=!0,listenToStorageChanges:i=!0,writeDefaults:l=!0,mergeDefaults:u=!1,shallow:f,window:c=E,eventFilter:h,onError:p=d=>{console.error(d)}}=s,y=(f?ie:R)(t);if(!n)try{n=he("getDefaultStorage",()=>{var d;return(d=E)==null?void 0:d.localStorage})()}catch(d){p(d)}if(!n)return y;const m=F(t),$=_t(m),C=(a=s.serializer)!=null?a:Ot[$],{pause:L,resume:D}=yt(y,()=>g(y.value),{flush:r,deep:o,eventFilter:h});return c&&i&&(K(c,"storage",P),K(c,Z,q)),P(),y;function g(d){try{if(d==null)n.removeItem(e);else{const v=C.write(d),_=n.getItem(e);_!==v&&(n.setItem(e,v),c&&c.dispatchEvent(new CustomEvent(Z,{detail:{key:e,oldValue:_,newValue:v,storageArea:n}})))}}catch(v){p(v)}}function x(d){const v=d?d.newValue:n.getItem(e);if(v==null)return l&&m!==null&&n.setItem(e,C.write(m)),m;if(!d&&u){const _=C.read(v);return typeof u=="function"?u(_,m):$==="object"&&!Array.isArray(_)?Y(Y({},m),_):_}else return typeof v!="string"?v:C.read(v)}function q(d){P(d.detail)}function P(d){if(!(d&&d.storageArea!==n)){if(d&&d.key==null){y.value=m;return}if(!(d&&d.key!==e)){L();try{y.value=x(d)}catch(v){p(v)}finally{d?oe(D):D()}}}}}function $t(e){return vt("(prefers-color-scheme: dark)",e)}var Lt=Object.defineProperty,ee=Object.getOwnPropertySymbols,Pt=Object.prototype.hasOwnProperty,xt=Object.prototype.propertyIsEnumerable,te=(e,t,n)=>t in e?Lt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,kt=(e,t)=>{for(var n in t||(t={}))Pt.call(t,n)&&te(e,n,t[n]);if(ee)for(var n of ee(t))xt.call(t,n)&&te(e,n,t[n]);return e};function Xt(e={}){const{selector:t="html",attribute:n="class",initialValue:s="auto",window:a=E,storage:r,storageKey:o="vueuse-color-scheme",listenToStorageChanges:i=!0,storageRef:l,emitAuto:u,disableTransition:f=!0}=e,c=kt({auto:"",light:"light",dark:"dark"},e.modes||{}),h=$t({window:a}),p=S(()=>h.value?"dark":"light"),y=l||(o==null?st(s):Rt(o,s,r,{window:a,listenToStorageChanges:i})),m=S(()=>y.value==="auto"?p.value:y.value),$=he("updateHTMLAttrs",(g,x,q)=>{const P=typeof g=="string"?a==null?void 0:a.document.querySelector(g):k(g);if(!P)return;let d;if(f){d=a.document.createElement("style");const v="*,*::before,*::after{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}";d.appendChild(document.createTextNode(v)),a.document.head.appendChild(d)}if(x==="class"){const v=q.split(/\s/g);Object.values(c).flatMap(_=>(_||"").split(/\s/g)).filter(Boolean).forEach(_=>{v.includes(_)?P.classList.add(_):P.classList.remove(_)})}else P.setAttribute(x,q);f&&(a.getComputedStyle(d).opacity,document.head.removeChild(d))});function C(g){var x;$(t,n,(x=c[g])!=null?x:g)}function L(g){e.onChanged?e.onChanged(g,C):C(g)}T(m,L,{flush:"post",immediate:!0}),rt(()=>L(m.value));const D=S({get(){return u?y.value:m.value},set(g){y.value=g}});try{return Object.assign(D,{store:y,system:p,state:m})}catch{return D}}var ne=Object.getOwnPropertySymbols,Et=Object.prototype.hasOwnProperty,Tt=Object.prototype.propertyIsEnumerable,Dt=(e,t)=>{var n={};for(var s in e)Et.call(e,s)&&t.indexOf(s)<0&&(n[s]=e[s]);if(e!=null&&ne)for(var s of ne(e))t.indexOf(s)<0&&Tt.call(e,s)&&(n[s]=e[s]);return n};function jt(e,t,n={}){const s=n,{window:a=E}=s,r=Dt(s,["window"]);let o;const i=fe(()=>a&&"ResizeObserver"in a),l=()=>{o&&(o.disconnect(),o=void 0)},u=S(()=>Array.isArray(e)?e.map(h=>k(h)):[k(e)]),f=T(u,h=>{if(l(),i.value&&a){o=new ResizeObserver(t);for(const p of h)p&&o.observe(p,r)}},{immediate:!0,flush:"post",deep:!0}),c=()=>{l(),f()};return H(c),{isSupported:i,stop:c}}function At(e,t={width:0,height:0},n={}){const{window:s=E,box:a="content-box"}=n,r=S(()=>{var l,u;return(u=(l=k(e))==null?void 0:l.namespaceURI)==null?void 0:u.includes("svg")}),o=R(t.width),i=R(t.height);return jt(e,([l])=>{const u=a==="border-box"?l.borderBoxSize:a==="content-box"?l.contentBoxSize:l.devicePixelContentBoxSize;if(s&&r.value){const f=k(e);if(f){const c=s.getComputedStyle(f);o.value=Number.parseFloat(c.width),i.value=Number.parseFloat(c.height)}}else if(u){const f=Array.isArray(u)?u:[u];o.value=f.reduce((c,{inlineSize:h})=>c+h,0),i.value=f.reduce((c,{blockSize:h})=>c+h,0)}else o.value=l.contentRect.width,i.value=l.contentRect.height},n),T(()=>k(e),l=>{o.value=l?t.width:0,i.value=l?t.height:0}),{width:o,height:i}}function qt(e,t){const{containerStyle:n,wrapperProps:s,scrollTo:a,calculateRange:r,currentList:o,containerRef:i}="itemHeight"in t?Bt(t,e):zt(t,e);return{list:o,scrollTo:a,containerProps:{ref:i,onScroll:()=>{r()},style:n},wrapperProps:s}}function pe(e){const t=R(null),n=At(t),s=R([]),a=ie(e);return{state:R({start:0,end:10}),source:a,currentList:s,size:n,containerRef:t}}function ye(e,t,n){return s=>{if(typeof n=="number")return Math.ceil(s/n);const{start:a=0}=e.value;let r=0,o=0;for(let i=a;i<t.value.length;i++){const l=n(i);if(r+=l,o=i,r>s)break}return o-a}}function me(e,t){return n=>{if(typeof t=="number")return Math.floor(n/t)+1;let s=0,a=0;for(let r=0;r<e.value.length;r++){const o=t(r);if(s+=o,s>=n){a=r;break}}return a+1}}function ve(e,t,n,s,{containerRef:a,state:r,currentList:o,source:i}){return()=>{const l=a.value;if(l){const u=n(e==="vertical"?l.scrollTop:l.scrollLeft),f=s(e==="vertical"?l.clientHeight:l.clientWidth),c=u-t,h=u+f+t;r.value={start:c<0?0:c,end:h>i.value.length?i.value.length:h},o.value=i.value.slice(r.value.start,r.value.end).map((p,y)=>({data:p,index:y+r.value.start}))}}}function ge(e,t){return n=>typeof e=="number"?n*e:t.value.slice(0,n).reduce((a,r,o)=>a+e(o),0)}function be(e,t,n){T([e.width,e.height,t],()=>{n()})}function _e(e,t){return S(()=>typeof e=="number"?t.value.length*e:t.value.reduce((n,s,a)=>n+e(a),0))}const Nt={horizontal:"scrollLeft",vertical:"scrollTop"};function we(e,t,n,s){return a=>{s.value&&(s.value[Nt[e]]=n(a),t())}}function zt(e,t){const n=pe(t),{state:s,source:a,currentList:r,size:o,containerRef:i}=n,l={overflowX:"auto"},{itemWidth:u,overscan:f=5}=e,c=ye(s,a,u),h=me(a,u),p=ve("horizontal",f,h,c,n),y=ge(u,a),m=S(()=>y(s.value.start)),$=_e(u,a);be(o,t,p);const C=we("horizontal",p,y,i),L=S(()=>({style:{height:"100%",width:`${$.value-m.value}px`,marginLeft:`${m.value}px`,display:"flex"}}));return{scrollTo:C,calculateRange:p,wrapperProps:L,containerStyle:l,currentList:r,containerRef:i}}function Bt(e,t){const n=pe(t),{state:s,source:a,currentList:r,size:o,containerRef:i}=n,l={overflowY:"auto"},{itemHeight:u,overscan:f=5}=e,c=ye(s,a,u),h=me(a,u),p=ve("vertical",f,h,c,n),y=ge(u,a),m=S(()=>y(s.value.start)),$=_e(u,a);be(o,t,p);const C=we("vertical",p,y,i),L=S(()=>({style:{width:"100%",height:`${$.value-m.value}px`,marginTop:`${m.value}px`}}));return{calculateRange:p,scrollTo:C,containerStyle:l,wrapperProps:L,currentList:r,containerRef:i}}const Mt={class:"card shadow"},Vt={class:"card-header"},Ft={key:0,class:"text-center"},Ut=b("div",{class:"spinner-border",role:"status"},[b("span",{class:"visually-hidden"},"Loading...")],-1),It=[Ut],Ht={__name:"ChannelsListing",props:{listTitle:{type:String,default:"List Title"},channelsList:{type:Array,default:[]},isLoading:{type:Boolean,default:!1}},emits:["loadMore"],setup(e,{emit:t}){const n=e,s=R(W()),a=S(()=>n.channelsList),{list:r,containerProps:o,wrapperProps:i}=qt(a,{itemHeight:73});function l(c){W().value=c,localStorage.setItem("nowPlayingChannel",JSON.stringify(c))}function u(c){const{scrollTop:h,clientHeight:p,scrollHeight:y}=c.target;return h+p>=y}function f(c){u(c)&&t("loadMore")}return(c,h)=>{const p=Ze;return w(),O("div",Mt,[b("h5",Vt,A(e.listTitle),1),b("div",De({class:"card-body"},M(o),{onScroll:h[0]||(h[0]=y=>f(y))}),[b("div",Ee(Te(M(i))),[(w(!0),O(U,null,I(M(r),({data:y})=>{var m;return w(),je(p,{channelDetails:y,class:Ae(["btn btn-outline-primary",{"border-success border-2":y.id===((m=s.value)==null?void 0:m.id)}]),onClick:$=>l(y)},null,8,["channelDetails","class","onClick"])}),256)),e.isLoading?(w(),O("div",Ft,It)):B("",!0)],16)],16)])}}},Yt=Ht,Wt="http://all.api.radio-browser.info/json/servers",Gt=[{ip:"2a0a:4cc0:0:db9:282b:91ff:fed0:ddea",name:"at1.api.radio-browser.info"},{ip:"2a03:4000:37:42:c4fe:4cff:fea7:8941",name:"de1.api.radio-browser.info"},{ip:"2001:19f0:5001:32a4:5400:2ff:fe37:75c2",name:"nl1.api.radio-browser.info"},{ip:"91.132.145.114",name:"de1.api.radio-browser.info"},{ip:"95.179.139.106",name:"nl1.api.radio-browser.info"}],Jt={byUuid:"byUuid",byName:"byName",byNameExact:"byNameExact",byCodec:"byCodec",byCodexExact:"byCodecExact",byCountry:"byCountry",byCountryExact:"byCountryExact",byCountryCodeExact:"byCountryCodeExact",byState:"byState",byStateExact:"byStateExact",byLanguage:"byLanguage",byLanguageExact:"byLanguageExact",byTag:"byTag",byTagExact:"byTagExact"};class Zt{constructor(t="iRadioPlayerJS",n=!0){j(this,"appName");j(this,"hideBroken");j(this,"baseUrl");j(this,"fetchConfig",{method:"GET",redirect:"follow"});this.appName=t,this.hideBroken=n,this.fetchConfig.headers={"user-agent":this.appName}}async getServersList(t=!1){return t?await fetch(Wt).then(s=>s.ok?s.json():Promise.reject(s)):Gt}setBaseUrl(t){this.baseUrl=t}getBaseUrl(){return this.baseUrl}async getRandomBaseUrl(t=!1,n=!1){const s=await this.getServersList(n);if(s.sort(()=>Math.random()-.5),t){for(const a of s)if((await fetch(`https://${a.name}/json/stats`)).ok)return`https://${a.name}`}return`https://${s[0].name}`}async getCountries(t,n,s){return this.runRequest(this.buildRequest("countries",t,n),s)}async getCountryCodes(t,n,s){return t=t?`${t.toUpperCase()}`:"",this.runRequest(this.buildRequest("countrycodes",t,n),s)}async getCodecs(t,n){return this.runRequest(this.buildRequest("codecs","",t),n)}async getCountryStates(t,n,s){return this.runRequest(this.buildRequest("states",t,n),s)}async getLanguages(t,n,s){return this.runRequest(this.buildRequest("languages",t,n),s)}async getTags(t,n,s){return t=t?t.toLowerCase():"",this.runRequest(this.buildRequest("tags",t,n),s)}async getStationsBy(t,n,s,a,r=!1){if(!Jt[t])throw new Error(`search type does not exist: ${t}`);n=n?n.toLowerCase():"";const o=await this.runRequest(this.buildRequest(`stations/${t.toLowerCase()}`,n,s),a);return this.normalizeStations(o,r)}normalizeStations(t,n=!1){const s=[],a={};for(const r of t){if(n){const i=`${r.name.toLowerCase().trim()}${r.url.toLowerCase().trim()}`;if(a[i])continue;a[i]=!0}const o={changeId:r.changeuuid,id:r.stationuuid,name:r.name,url:r.url,urlResolved:r.url_resolved,homepage:r.homepage,favicon:r.favicon,country:r.country,countryCode:r.countrycode,state:r.state,votes:r.votes,codec:r.codec,bitrate:r.bitrate,clickCount:r.clickcount,clickTrend:r.clicktrend,hls:!!r.hls,lastCheckOk:!!r.lastcheckok,lastChangeTime:new Date(r.lastchangetime),lastCheckOkTime:new Date(r.lastcheckoktime),clickTimestamp:new Date(r.clicktimestamp),lastLocalCheckTime:new Date(r.lastlocalchecktime),language:r.language.split(","),lastCheckTime:new Date(r.lastchecktime),geoLat:r.geo_lat,geoLong:r.geo_long,tags:Array.from(new Set(r.tags.split(","))).filter(i=>i.length>0&&i.length<10)};s.push(o)}return s}async getAllStations(t,n,s=!1){const a=await this.runRequest(this.buildRequest("stations","",t),n);return this.normalizeStations(a,s)}async searchStations(t,n,s=!1){const a=await this.runRequest(this.buildRequest("stations/search",void 0,t),n);return this.normalizeStations(a,s)}async getStationsByClicks(t,n){return this.resolveGetStations("topclick",t,n)}async getStationsByVotes(t,n){return this.resolveGetStations("topvote",t,n)}async getStationsByRecentClicks(t,n){return this.resolveGetStations("lastclick",t,n)}async sendStationClick(t,n){return this.runRequest(this.buildRequest("url",t,void 0,!1),n)}async voteForStation(t,n){return this.runRequest(this.buildRequest("vote",t),n)}async getStationsById(t,n){const s=t.join(","),a=await this.runRequest(this.buildRequest(`stations/byuuid?uuids=${s}`,void 0,void 0,!1),n);return this.normalizeStations(a)}async getStationByUrl(t,n){const s=await this.runRequest(this.buildRequest(`stations/byurl/${t}`,void 0,void 0,!1),n);return this.normalizeStations(s)}async resolveGetStations(t,n,s){const a=n?`/${n}`:"",r=await this.runRequest(this.buildRequest(`stations/${t}${a}`,void 0,void 0,!1),s);return this.normalizeStations(r)}buildRequest(t,n,s,a=!0){n=n?`/${encodeURIComponent(n)}`:"";let r;s&&(r={...s},"tagList"in r&&Array.isArray(r.tagList)&&(r.tagList=[...r.tagList]),a&&r.hideBroken===void 0&&(r.hideBroken=this.hideBroken));const o=r?this.createQueryParams(r):"";return`${t}${n}${o}`}async runRequest(t,n={}){const s={...this.fetchConfig,...n,headers:{...this.fetchConfig.headers,...n.headers}};this.baseUrl=this.baseUrl||await this.getRandomBaseUrl(!0);const a=await fetch(`${this.baseUrl}/json/${t}`,s);if(a.ok)return a.json();throw a}createQueryParams(t){let n="";if(t)for(const[s,a]of Object.entries(t)){let r=s.toLowerCase();switch(r){case"hasgeoinfo":r="has_geo_info";break;case"hidebroken":r="hidebroken";break;case"taglist":r="tagList"}n+=`&${r}=${encodeURIComponent(a)}`}return n.length?`?${n.slice(1)}`:""}}export{Zt as R,Yt as _,W as n,Xt as u};

(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))s(a);new MutationObserver(a=>{for(const o of a)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function i(a){const o={};return a.integrity&&(o.integrity=a.integrity),a.referrerPolicy&&(o.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?o.credentials="include":a.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(a){if(a.ep)return;a.ep=!0;const o=i(a);fetch(a.href,o)}})();var Be=/([:*])(\w+)/g,Ie="([^/]+)",Ne=/\*/g,qe="?(?:.*)",je=/\/\?/g,xe="/?([^/]+|)",Ue="(?:/^|^)",Ze="";function pe(e){return e===void 0&&(e="/"),Z()?location.pathname+location.search+location.hash:e}function f(e){return e.replace(/\/+$/,"").replace(/^\/+/,"")}function H(e){return typeof e=="string"}function Ge(e){return typeof e=="function"}function M(e){return e&&e.indexOf("#")>=0&&e.split("#").pop()||""}function De(e,t){return t.length===0||!e?null:e.slice(1,e.length).reduce(function(i,s,a){return i===null&&(i={}),i[t[a]]=decodeURIComponent(s),i},null)}function F(e){var t=f(e).split(/\?(.*)?$/);return[f(t[0]),t.slice(1).join("")]}function U(e){for(var t={},i=e.split("&"),s=0;s<i.length;s++){var a=i[s].split("=");if(a[0]!==""){var o=decodeURIComponent(a[0]);t[o]?(Array.isArray(t[o])||(t[o]=[t[o]]),t[o].push(decodeURIComponent(a[1]||""))):t[o]=decodeURIComponent(a[1]||"")}}return t}function fe(e,t){var i=F(f(e.currentLocationPath)),s=i[0],a=i[1],o=a===""?null:U(a),l=[],p;if(H(t.path)){if(p=Ue+f(t.path).replace(Be,function(b,v,C){return l.push(C),Ie}).replace(Ne,qe).replace(je,xe)+"$",f(t.path)===""&&f(s)==="")return{url:s,queryString:a,hashString:M(e.to),route:t,data:null,params:o}}else p=t.path;var _=new RegExp(p,Ze),h=s.match(_);if(h){var m=H(t.path)?De(h,l):h.groups?h.groups:h.slice(1);return{url:f(s.replace(new RegExp("^"+e.instance.root),"")),queryString:a,hashString:M(e.to),route:t,data:m,params:o}}return!1}function _e(){return!!(typeof window<"u"&&window.history&&window.history.pushState)}function k(e,t){return typeof e[t]>"u"||e[t]===!0}function Ke(e){if(!e)return{};var t=e.split(","),i={},s;return t.forEach(function(a){var o=a.split(":").map(function(l){return l.replace(/(^ +| +$)/g,"")});switch(o[0]){case"historyAPIMethod":i.historyAPIMethod=o[1];break;case"resolveOptionsStrategy":s||(s={}),s.strategy=o[1];break;case"resolveOptionsHash":s||(s={}),s.hash=o[1]==="true";break;case"updateBrowserURL":case"callHandler":case"updateState":case"force":i[o[0]]=o[1]==="true";break}}),s&&(i.resolveOptions=s),i}function Z(){return typeof window<"u"}function We(e,t){return e===void 0&&(e=[]),t===void 0&&(t={}),e.filter(function(i){return i}).forEach(function(i){["before","after","already","leave"].forEach(function(s){i[s]&&(t[s]||(t[s]=[]),t[s].push(i[s]))})}),t}function y(e,t,i){var s=t||{},a=0;(function o(){if(!e[a]){i&&i(s);return}Array.isArray(e[a])?(e.splice.apply(e,[a,1].concat(e[a][0](s)?e[a][1]:e[a][2])),o()):e[a](s,function(l){typeof l>"u"||l===!0?(a+=1,o()):i&&i(s)})})()}y.if=function(e,t,i){return Array.isArray(t)||(t=[t]),Array.isArray(i)||(i=[i]),[e,t,i]};function J(e,t){typeof e.currentLocationPath>"u"&&(e.currentLocationPath=e.to=pe(e.instance.root)),e.currentLocationPath=e.instance._checkForAHash(e.currentLocationPath),t()}function T(e,t){for(var i=0;i<e.instance.routes.length;i++){var s=e.instance.routes[i],a=fe(e,s);if(a&&(e.matches||(e.matches=[]),e.matches.push(a),e.resolveOptions.strategy==="ONE")){t();return}}t()}function Ve(e,t){e.navigateOptions&&(typeof e.navigateOptions.shouldResolve<"u"&&console.warn('"shouldResolve" is deprecated. Please check the documentation.'),typeof e.navigateOptions.silent<"u"&&console.warn('"silent" is deprecated. Please check the documentation.')),t()}function Xe(e,t){e.navigateOptions.force===!0?(e.instance._setCurrent([e.instance._pathToMatchObject(e.to)]),t(!1)):t()}var Q=Z(),ze=_e();function Je(e,t){if(k(e.navigateOptions,"updateBrowserURL")){var i=("/"+e.to).replace(/\/\//g,"/"),s=Q&&e.resolveOptions&&e.resolveOptions.hash===!0;ze?(history[e.navigateOptions.historyAPIMethod||"pushState"](e.navigateOptions.stateObj||{},e.navigateOptions.title||"",s?"#"+i:i),location&&location.hash&&(e.instance.__freezeListening=!0,setTimeout(function(){if(!s){var a=location.hash;location.hash="",location.hash=a}e.instance.__freezeListening=!1},1))):Q&&(window.location.href=e.to)}t()}function he(e,t){var i=e.instance;if(!i.lastResolved()){t();return}y(i.lastResolved().map(function(s){return function(a,o){if(!s.route.hooks||!s.route.hooks.leave){o();return}var l=!1,p=e.instance.matchLocation(s.route.path,e.currentLocationPath,!1);if(s.route.path!=="*")l=!p;else{var _=e.matches?e.matches.find(function(h){return s.route.path===h.route.path}):!1;l=!_}if(k(e.navigateOptions,"callHooks")&&l){y(s.route.hooks.leave.map(function(h){return function(m,b){return h(function(v){v===!1?e.instance.__markAsClean(e):b()},e.matches&&e.matches.length>0?e.matches.length===1?e.matches[0]:e.matches:void 0)}}).concat([function(){return o()}]));return}else o()}}),{},function(){return t()})}function Qe(e,t){e.match.route.hooks&&e.match.route.hooks.before&&k(e.navigateOptions,"callHooks")?y(e.match.route.hooks.before.map(function(i){return function(a,o){return i(function(l){l===!1?e.instance.__markAsClean(e):o()},e.match)}}).concat([function(){return t()}])):t()}function Ye(e,t){k(e.navigateOptions,"callHandler")&&e.match.route.handler(e.match),e.instance.updatePageLinks(),t()}function et(e,t){e.match.route.hooks&&e.match.route.hooks.after&&k(e.navigateOptions,"callHooks")&&e.match.route.hooks.after.forEach(function(i){return i(e.match)}),t()}function tt(e,t){var i=e.instance.lastResolved();if(i&&i[0]&&i[0].route===e.match.route&&i[0].url===e.match.url&&i[0].queryString===e.match.queryString){i.forEach(function(s){s.route.hooks&&s.route.hooks.already&&k(e.navigateOptions,"callHooks")&&s.route.hooks.already.forEach(function(a){return a(e.match)})}),t(!1);return}t()}function st(e,t){var i=e.instance._notFoundRoute;if(i){e.notFoundHandled=!0;var s=F(e.currentLocationPath),a=s[0],o=s[1],l=M(e.to);i.path=f(a);var p={url:i.path,queryString:o,hashString:l,data:null,route:i,params:o!==""?U(o):null};e.matches=[p],e.match=p}t()}function rt(e,t){(!e.resolveOptions||e.resolveOptions.noMatchWarning===!1||typeof e.resolveOptions.noMatchWarning>"u")&&console.warn('Navigo: "'+e.currentLocationPath+`" didn't match any of the registered routes.`),t()}function it(e,t){e.instance._setCurrent(null),t()}function ge(e,t){k(e.navigateOptions,"updateState")&&e.instance._setCurrent(e.matches),t()}var me=[tt,Qe,Ye,et],Y=[he,st,y.if(function(e){var t=e.notFoundHandled;return t},me.concat([ge]),[rt,it])];function j(){return j=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var s in i)Object.prototype.hasOwnProperty.call(i,s)&&(e[s]=i[s])}return e},j.apply(this,arguments)}function ee(e,t){var i=0;function s(){if(i===e.matches.length){ge(e,t);return}y(me,j({},e,{match:e.matches[i]}),function(){i+=1,s()})}he(e,s)}function B(e){e.instance.__markAsClean(e)}function x(){return x=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var s in i)Object.prototype.hasOwnProperty.call(i,s)&&(e[s]=i[s])}return e},x.apply(this,arguments)}var te="[data-navigo]";function at(e,t){var i=t||{strategy:"ONE",hash:!1,noMatchWarning:!1,linksSelector:te},s=this,a="/",o=null,l=[],p=!1,_,h=_e(),m=Z();e?a=f(e):console.warn('Navigo requires a root path in its constructor. If not provided will use "/" as default.');function b(r){return r.indexOf("#")>=0&&(i.hash===!0?r=r.split("#")[1]||"/":r=r.split("#")[0]),r}function v(r){return f(a+"/"+f(r))}function C(r,n,c,d){return r=H(r)?v(r):r,{name:d||f(String(r)),path:r,handler:n,hooks:We(c)}}function D(r,n,c){var d=this;return typeof r=="object"&&!(r instanceof RegExp)?(Object.keys(r).forEach(function(u){if(typeof r[u]=="function")d.on(u,r[u]);else{var w=r[u],E=w.uses,Fe=w.as,Te=w.hooks;l.push(C(u,E,[_,Te],Fe))}}),this):(typeof r=="function"&&(c=n,n=r,r=a),l.push(C(r,n,[_,c])),this)}function O(r,n){if(s.__dirty){s.__waiting.push(function(){return s.resolve(r,n)});return}else s.__dirty=!0;r=r?f(a)+"/"+f(r):void 0;var c={instance:s,to:r,currentLocationPath:r,navigateOptions:{},resolveOptions:x({},i,n)};return y([J,T,y.if(function(d){var u=d.matches;return u&&u.length>0},ee,Y)],c,B),c.matches?c.matches:!1}function K(r,n){if(s.__dirty){s.__waiting.push(function(){return s.navigate(r,n)});return}else s.__dirty=!0;r=f(a)+"/"+f(r);var c={instance:s,to:r,navigateOptions:n||{},resolveOptions:n&&n.resolveOptions?n.resolveOptions:i,currentLocationPath:b(r)};y([Ve,Xe,T,y.if(function(d){var u=d.matches;return u&&u.length>0},ee,Y),Je,B],c,B)}function be(r,n,c){var d=V(r,n);return d!==null?(K(d.replace(new RegExp("^/?"+a),""),c),!0):!1}function we(r){return this.routes=l=l.filter(function(n){return H(r)?f(n.path)!==f(r):Ge(r)?r!==n.handler:String(n.path)!==String(r)}),this}function ye(){h&&(this.__popstateListener=function(){s.__freezeListening||O()},window.addEventListener("popstate",this.__popstateListener))}function ke(){this.routes=l=[],h&&window.removeEventListener("popstate",this.__popstateListener),this.destroyed=p=!0}function Le(r,n){return s._notFoundRoute=C("*",r,[_,n],"__NOT_FOUND__"),this}function W(){if(m)return Ee().forEach(function(r){if(r.getAttribute("data-navigo")==="false"||r.getAttribute("target")==="_blank"){r.hasListenerAttached&&r.removeEventListener("click",r.navigoHandler);return}r.hasListenerAttached||(r.hasListenerAttached=!0,r.navigoHandler=function(n){if((n.ctrlKey||n.metaKey)&&n.target.tagName.toLowerCase()==="a")return!1;var c=r.getAttribute("href");if(typeof c>"u"||c===null)return!1;if(c.match(/^(http|https)/)&&typeof URL<"u")try{var d=new URL(c);c=d.pathname+d.search}catch{}var u=Ke(r.getAttribute("data-navigo-options"));p||(n.preventDefault(),n.stopPropagation(),s.navigate(f(c),u))},r.addEventListener("click",r.navigoHandler))}),s}function Ee(){return m?[].slice.call(document.querySelectorAll(i.linksSelector||te)):[]}function Se(r){return"/"+a+"/"+f(r)}function Oe(r){return _=r,this}function Ae(){return o}function V(r,n,c){var d=l.find(function(E){return E.name===r}),u=null;if(d){if(u=d.path,n)for(var w in n)u=u.replace(":"+w,n[w]);u=u.match(/^\//)?u:"/"+u}return u&&c&&!c.includeRoot&&(u=u.replace(new RegExp("^/"+a),"")),u}function Re(r){return r.getAttribute("href")}function X(r){var n=F(f(r)),c=n[0],d=n[1],u=d===""?null:U(d),w=M(r),E=C(c,function(){},[_],c);return{url:c,queryString:d,hashString:w,route:E,data:null,params:u}}function Pe(){return X(f(pe(a)).replace(new RegExp("^"+a),""))}function $e(r){var n={instance:s,currentLocationPath:r,to:r,resolveOptions:i};return T(n,function(){}),n.matches?n.matches:!1}function He(r,n,c){typeof n<"u"&&(typeof c>"u"||c)&&(n=v(n));var d={instance:s,to:n,currentLocationPath:n};J(d,function(){}),typeof r=="string"&&(r=typeof c>"u"||c?v(r):r);var u=fe(d,{name:String(r),path:r,handler:function(){},hooks:{}});return u||!1}function A(r,n,c){return typeof n=="string"&&(n=z(n)),n?(n.hooks[r]||(n.hooks[r]=[]),n.hooks[r].push(c),function(){n.hooks[r]=n.hooks[r].filter(function(d){return d!==c})}):(console.warn("Route doesn't exists: "+n),function(){})}function z(r){return typeof r=="string"?l.find(function(n){return n.name===v(r)}):l.find(function(n){return n.handler===r})}function Me(r){r.instance.__dirty=!1,r.instance.__waiting.length>0&&r.instance.__waiting.shift()()}this.root=a,this.routes=l,this.destroyed=p,this.current=o,this.__freezeListening=!1,this.__waiting=[],this.__dirty=!1,this.__markAsClean=Me,this.on=D,this.off=we,this.resolve=O,this.navigate=K,this.navigateByName=be,this.destroy=ke,this.notFound=Le,this.updatePageLinks=W,this.link=Se,this.hooks=Oe,this.extractGETParameters=function(r){return F(b(r))},this.lastResolved=Ae,this.generate=V,this.getLinkPath=Re,this.match=$e,this.matchLocation=He,this.getCurrentLocation=Pe,this.addBeforeHook=A.bind(this,"before"),this.addAfterHook=A.bind(this,"after"),this.addAlreadyHook=A.bind(this,"already"),this.addLeaveHook=A.bind(this,"leave"),this.getRoute=z,this._pathToMatchObject=X,this._clean=f,this._checkForAHash=b,this._setCurrent=function(r){return o=s.current=r},ye.call(this),W.call(this)}const L=(e,...t)=>{const i=document.createElement("div");return i.classList.add("container"),t&&i.classList.add(...t),typeof e=="string"?i.innerHTML=e:i.append(e),i};let se=!1;const R=()=>{if(console.log("header componet"),se)return"";const e=document.createElement("header");return e.classList.add("header"),e.append(L(`
    <div class="header__wrapper">
      <a class="header__logo-link header__link" href="/" title="Переход на главную страницу" aria-label="Переход на главную страницу">
        <img class="header__logo-image logo" src="/img/logo.svg" alt="Логотип SKI-People" />
      </a>

      <form class="header__search" action="#">
        <input class="header__search-input" type="search" name="search" placeholder="Поиск товара">
        <button class="header__search-button">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.66683 14C11.1646 14 14.0002 11.1645 14.0002 7.66671C14.0002 4.1689 11.1646 1.33337 7.66683 1.33337C4.16903 1.33337 1.3335 4.1689 1.3335 7.66671C1.3335 11.1645 4.16903 14 7.66683 14Z" stroke="#1C1C1C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M14.6668 14.6667L13.3335 13.3334" stroke="#1C1C1C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>
      </form>

      <div class="header__links-list">
        <a class="header__link" href="/favorite" title="Показать избранные товары" aria-label="Показать избранные товары">
          <span class="header__link-text">Избранное</span>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.4135 13.8733C8.18683 13.9533 7.8135 13.9533 7.58683 13.8733C5.6535 13.2133 1.3335 10.46 1.3335 5.79332C1.3335 3.73332 2.9935 2.06665 5.04016 2.06665C6.2535 2.06665 7.32683 2.65332 8.00016 3.55998C8.6735 2.65332 9.7535 2.06665 10.9602 2.06665C13.0068 2.06665 14.6668 3.73332 14.6668 5.79332C14.6668 10.46 10.3468 13.2133 8.4135 13.8733Z" stroke="#1C1C1C" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </a>

        <a class="header__link" href="/cart" title="В корзине сейчас (5) товаров" aria-label="Показать товары в корзине">
          <span class="header__link-text">Корзина</span>
          <span class="header__link-count">(5)</span>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.87329 1.33337L3.45996 3.75337" stroke="#1C1C1C" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M10.1265 1.33337L12.5398 3.75337" stroke="#1C1C1C" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M1.3335 5.23336C1.3335 4.00002 1.9935 3.90002 2.8135 3.90002H13.1868C14.0068 3.90002 14.6668 4.00002 14.6668 5.23336C14.6668 6.66669 14.0068 6.56669 13.1868 6.56669H2.8135C1.9935 6.56669 1.3335 6.66669 1.3335 5.23336Z" stroke="#1C1C1C"/>
            <path d="M6.50684 9.33337V11.7" stroke="#1C1C1C" stroke-linecap="round"/>
            <path d="M9.57324 9.33337V11.7" stroke="#1C1C1C" stroke-linecap="round"/>
            <path d="M2.3335 6.66663L3.2735 12.4266C3.48683 13.72 4.00016 14.6666 5.90683 14.6666H9.92683C12.0002 14.6666 12.3068 13.76 12.5468 12.5066L13.6668 6.66663" stroke="#1C1C1C" stroke-linecap="round"/>
          </svg>
        </a>
      </div>
    </div>
  `,"header__container")),document.body.prepend(e),se=!0,e};let re=!1;const S=e=>{if(re)return document.querySelector("main");const t=document.createElement("main");return t.classList.add("main"),document.body.append(t),re=!0,t};let ie=!1;const P=()=>{if(console.log("footer componet"),ie)return"";const e=document.createElement("footer");return e.classList.add("footer"),e.append(L(`
    <a class="footer__logo-link" href="/" title="Переход на главную страницу" aria-label="Переход на главную страницу">
      <img class="footer__logo-image footer__logo-icon logo" src="/img/logo.svg" alt="Логотип SKI-People" />
    </a>

    <div class="footer__social">
      <a class="footer__link footer__social-phone" href="tel:+79398391297" type="phone" title="Перезвонить нам">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4.48578 1.54458L5.59264 1.21086C5.95794 1.1009 6.35076 1.12758 6.69784 1.28592C7.04492 1.44427 7.32254 1.72347 7.47892 2.07143L8.25492 3.79715C8.38961 4.09653 8.42715 4.43058 8.36227 4.75239C8.2974 5.0742 8.13336 5.36761 7.89321 5.59143L6.71206 6.692C6.55378 6.84229 6.67378 7.428 7.25206 8.43029C7.83092 9.43315 8.27835 9.82972 8.48464 9.768L10.0321 9.29486C10.3457 9.19892 10.6816 9.20353 10.9925 9.30806C11.3034 9.41258 11.5738 9.61178 11.7658 9.87772L12.8686 11.4063C13.0914 11.715 13.1945 12.094 13.1589 12.473C13.1233 12.852 12.9513 13.2051 12.6749 13.4669L11.8223 14.2743C11.5471 14.5349 11.2077 14.7179 10.8387 14.8045C10.4696 14.8912 10.0842 14.8784 9.72178 14.7674C7.93549 14.2206 6.28121 12.5977 4.73664 9.92172C3.18864 7.24172 2.60406 4.98115 3.01149 3.13429C3.09367 2.76215 3.2736 2.41866 3.53275 2.13922C3.79189 1.85978 4.12088 1.65452 4.48578 1.54458Z" fill="white"/>
        </svg>            
        +7&nbsp;(939)&nbsp;839&nbsp;12&nbsp;97
      </a>

      <ul class="footer__social-list">
        <li class="footer__social-item">
          <a class="footer__social-link" href="#" title="Перейти в наш паблик в ВК">
            <svg class="social__icon-vk" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12.0005 0.47998C5.63807 0.47998 0.480469 5.63758 0.480469 12C0.480469 18.3624 5.63807 23.52 12.0005 23.52C18.3629 23.52 23.5205 18.3624 23.5205 12C23.5205 5.63758 18.3629 0.47998 12.0005 0.47998ZM16.4309 13.4772C16.4309 13.4772 17.4497 14.4828 17.7005 14.9496C17.7077 14.9592 17.7113 14.9688 17.7137 14.9736C17.8157 15.1452 17.8397 15.2784 17.7893 15.378C17.7053 15.5436 17.4173 15.6252 17.3189 15.6324H15.5189C15.3941 15.6324 15.1325 15.6 14.8157 15.3816C14.5721 15.2112 14.3321 14.9316 14.0981 14.6592C13.7489 14.2536 13.4465 13.9032 13.1417 13.9032C13.103 13.9031 13.0645 13.9092 13.0277 13.9212C12.7973 13.9956 12.5021 14.3244 12.5021 15.2004C12.5021 15.474 12.2861 15.6312 12.1337 15.6312H11.3093C11.0285 15.6312 9.56567 15.5328 8.26967 14.166C6.68327 12.492 5.25527 9.13438 5.24327 9.10318C5.15327 8.88598 5.33927 8.76958 5.54207 8.76958H7.36007C7.60247 8.76958 7.68167 8.91718 7.73687 9.04798C7.80167 9.20038 8.03927 9.80638 8.42927 10.488C9.06167 11.5992 9.44927 12.0504 9.76007 12.0504C9.81835 12.0497 9.87559 12.0349 9.92687 12.0072C10.3325 11.7816 10.2569 10.3356 10.2389 10.0356C10.2389 9.97918 10.2377 9.38878 10.0301 9.10558C9.88127 8.90038 9.62807 8.82238 9.47447 8.79358C9.53664 8.70779 9.61855 8.63823 9.71327 8.59078C9.99167 8.45158 10.4933 8.43118 10.9913 8.43118H11.2685C11.8085 8.43838 11.9477 8.47318 12.1433 8.52238C12.5393 8.61718 12.5477 8.87278 12.5129 9.74758C12.5021 9.99598 12.4913 10.2768 12.4913 10.608C12.4913 10.68 12.4877 10.7568 12.4877 10.8384C12.4757 11.2836 12.4613 11.7888 12.7757 11.9964C12.8167 12.0221 12.8641 12.0358 12.9125 12.036C13.0217 12.036 13.3505 12.036 14.2409 10.5084C14.5155 10.0167 14.7541 9.50575 14.9549 8.97958C14.9729 8.94838 15.0257 8.85238 15.0881 8.81518C15.1341 8.7917 15.1852 8.77976 15.2369 8.78038H17.3741C17.6069 8.78038 17.7665 8.81518 17.7965 8.90518C17.8493 9.04798 17.7869 9.48358 16.8113 10.8048L16.3757 11.3796C15.4913 12.5388 15.4913 12.5976 16.4309 13.4772Z" fill="white"/>
            </svg>
          </a>
        </li>

        <li class="footer__social-item">
          <a class="footer__social-link" href="#">
            <svg class="social__icon-yt" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 15L15.19 12L10 9V15ZM21.56 7.17C21.69 7.64 21.78 8.27 21.84 9.07C21.91 9.87 21.94 10.56 21.94 11.16L22 12C22 14.19 21.84 15.8 21.56 16.83C21.31 17.73 20.73 18.31 19.83 18.56C19.36 18.69 18.5 18.78 17.18 18.84C15.88 18.91 14.69 18.94 13.59 18.94L12 19C7.81 19 5.2 18.84 4.17 18.56C3.27 18.31 2.69 17.73 2.44 16.83C2.31 16.36 2.22 15.73 2.16 14.93C2.09 14.13 2.06 13.44 2.06 12.84L2 12C2 9.81 2.16 8.2 2.44 7.17C2.69 6.27 3.27 5.69 4.17 5.44C4.64 5.31 5.5 5.22 6.82 5.16C8.12 5.09 9.31 5.06 10.41 5.06L12 5C16.19 5 18.8 5.16 19.83 5.44C20.73 5.69 21.31 6.27 21.56 7.17Z" fill="white"/>
            </svg>
          </a>
        </li>

        <li class="footer__social-item">
          <a class="footer__social-link" href="#">
            <svg class="social__icon-tg" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M24 12C24 15.1826 22.7357 18.2348 20.4853 20.4853C18.2348 22.7357 15.1826 24 12 24C8.8174 24 5.76516 22.7357 3.51472 20.4853C1.26428 18.2348 0 15.1826 0 12C0 8.8174 1.26428 5.76516 3.51472 3.51472C5.76516 1.26428 8.8174 0 12 0C15.1826 0 18.2348 1.26428 20.4853 3.51472C22.7357 5.76516 24 8.8174 24 12ZM12.4305 8.859C11.2635 9.345 8.9295 10.35 5.4315 11.874C4.8645 12.099 4.566 12.321 4.539 12.537C4.494 12.9015 4.9515 13.0455 5.574 13.242L5.8365 13.3245C6.4485 13.524 7.2735 13.7565 7.701 13.7655C8.091 13.7745 8.5245 13.6155 9.003 13.2855C12.2715 11.079 13.959 9.9645 14.064 9.9405C14.139 9.9225 14.244 9.9015 14.313 9.9645C14.3835 10.026 14.376 10.1445 14.3685 10.176C14.3235 10.3695 12.528 12.0375 11.5995 12.9015C11.31 13.1715 11.1045 13.362 11.0625 13.4055C10.97 13.5 10.876 13.593 10.7805 13.6845C10.2105 14.2335 9.7845 14.6445 10.803 15.3165C11.2935 15.6405 11.6865 15.906 12.078 16.173C12.504 16.464 12.93 16.7535 13.482 17.1165C13.6215 17.2065 13.7565 17.304 13.887 17.397C14.3835 17.751 14.832 18.069 15.3825 18.018C15.7035 17.988 16.035 17.688 16.203 16.788C16.6005 14.6625 17.382 10.059 17.562 8.1615C17.573 8.00376 17.5664 7.84529 17.5425 7.689C17.5284 7.56288 17.4673 7.44669 17.3715 7.3635C17.235 7.26928 17.0723 7.22047 16.9065 7.224C16.4565 7.2315 15.762 7.473 12.4305 8.859Z" fill="white"/>
            </svg>
          </a>
        </li>
      </ul>
    </div>

    <ul class="footer__developer-list">
      <li class="footer__developer-item">
        Designer:&nbsp;<a
            class="footer__developer-link" 
            target="_blank" 
            rel="noreferrer"
            href="mailto:@mrshmallowww"
            title="Anastasia">
          Anastasia&nbsp;Ilina</a> 
      </li>

      <li class="footer__developer-item">
        Developer:&nbsp;<a 
          class="footer__developer-link" 
          target="_blank" 
          rel="noreferrer"
          href="mailto:mindfling@gmail.com"
          title="MindFling">
        MindFling</a>
      </li>
    </ul>

    <p class="footer__copyright">&copy;&nbsp;SKI-People,&nbsp;2025</p>
  `,"footer__container")),document.body.append(e),ie=!0,e};let I=!1;const ae=(e,t,i=[])=>{if(console.log("cart component"),e==="remove"){document.querySelector(".cart").remove(),I=!1;return}if(I)return document.querySelector(".cart");const s=document.createElement("section");return s.classList.add("cart"),s.append(L(`
    <!-- CART КОРЗИНА -->
    <h2 class="cart__title">Корзина</h2>

    <div class="cart__wrapper">

      <ul class="cart__list">
        <li class="cart__item">
          <img src="/img/products/ski-blue-mini.png" alt="Синие горные лыжи на снегу" 
            title="Синие горные лыжи на снегу" class="cart__item-image" />
          <h3 class="cart__item-title">Горные&nbsp;лыжи</h3>
          <p class="cart__item-price">5&nbsp;000&nbsp;₽</p>
          <p class="cart__item-id">арт.&nbsp;84348945757</p>
          <div class="input__item-counter counter">
            <button class="counter__button counter__minus" type="button">&minus;</button>
            <p class="counter__number">1</p>
            <button class="counter__button counter__plus" type="button">&plus;</button>
          </div>
        </li>
        <li class="cart__item">
          <img src="/img/products/ski-blue-mini.png" alt="Синие горные лыжи на снегу"
            title="Синие горные лыжи на снегу" class="cart__item-image" />
          <h3 class="cart__item-title">Горные&nbsp;лыжи</h3>
          <p class="cart__item-price">5&nbsp;000&nbsp;₽</p>
          <p class="cart__item-id">арт.&nbsp;84348945757</p>
          <div class="input__item-counter counter">
            <button class="counter__button counter__minus" type="button">&minus;</button>
            <p class="counter__number">1</p>
            <button class="counter__button counter__plus" type="button">&plus;</button>
          </div>
        </li>
        <li class="cart__item">
          <img src="/img/products/ski-blue-mini.png" alt="Синие горные лыжи на снегу"
            title="Синие горные лыжи на снегу" class="cart__item-image" />
          <h3 class="cart__item-title">Горные&nbsp;лыжи</h3>
          <p class="cart__item-price">5&nbsp;000&nbsp;₽</p>
          <p class="cart__item-id">арт.&nbsp;84348945757</p>
          <div class="input__item-counter counter">
            <button class="counter__button counter__minus" type="button">&minus;</button>
            <p class="counter__number">1</p>
            <button class="counter__button counter__plus" type="button">&plus;</button>
          </div>
        </li>
      </ul>

      <div class="cart__order">
        <h3 class="cart__order-title">Оформление</h3>
        <div class="cart__order-info">
          <p class="cart__order-count">
            <span class="cart__order-number">4</span>
            <span class="cart__order-text">товаров на сумму:</span>
          </p>
          <p class="cart__order-price">20&nbsp;000&nbsp;₽</p>
        </div>
        <p class="cart__order-delivery">Доставка 0&nbsp;₽</p>
        <button class="cart__order-button" type="submit" form="cartForm">Оформить заказ</button>
      </div>

      <form action="#" id="cartForm" class="cart__form" method="POST">
        <h3 class="cart__form-title">Данные для доставки</h3>

        <fieldset class="cart__form-inputs">
          <input type="text" name="name" class="cart__form-input" placeholder="Фамилия Имя Отчество"
            title="Ввести имя заказчика" />
          <input type="tel" name="tel" class="cart__form-input" placeholder="Телефон"
            title="Ввести номер телефона заказчика" />
          <input type="email" name="email" class="cart__form-input" placeholder="E-mail"
            title="Ввести адрес электронной почты для электронного чека" />
          <input type="text" name="address" class="cart__form-input" placeholder="Адрес доставки"
            title="Ввести адрес доставки" />
          <textarea class="cart__form-text" name="comment" id="comment" placeholder="Комментарий к заказу"
            title="Ввести комментарии заказчика"></textarea>
        </fieldset>

        <fieldset class="cart__form-fieldset">
          <legend class="cart__form-legend">Доставка</legend>
          <label class="cart__form-label">
            <input class="cart__form-radio" type="radio" value="delivery" name="delivery"
              title="Доставка к клиенту" />
            Доставка
          </label>
          <label class="cart__form-label">
            <input class="cart__form-radio" type="radio" value="pickup" name="delivery"
              title="Получение клиентом самовывозом" />
            Самовывоз
          </label>
        </fieldset>

        <fieldset class="cart__form-fieldset">
          <legend class="cart__form-legend">Оплата</legend>
          <label class="cart__form-label">
            <input class="cart__form-radio" type="radio" value="card" name="payment"
              title="Выбор оплаты банковской картой при получении" />
            Картой при получении
          </label>
          <label class="cart__form-label">
            <input class="cart__form-radio" type="radio" value="cash" name="payment"
              title="Выбор оплаты наличными при получении" />
            Наличными при получении
          </label>
        </fieldset>
      </form>

    </div>
  `,"cart__container")),t.append(s),I=!0,s};let N=!1;const ne=(e,t=[])=>{if(console.log("catalog component"),(!e||e==="remove")&&(console.log("\x1B[35m%s\x1B[0m","catalog remove"),document.querySelector(".catalog").remove(),N=!1),N)return document.querySelector(".catalog");const i=t.map(l=>l.type),s=[...new Set(i)],a=document.createElement("div");a.classList.add("catalog");const o=`
    <ul class="catalog__list">
      ${s.reduce((l,p,_)=>l+`
        <li class="catalog__item">
          <a 
            class="catalog__link"
            href="#?s=${p}"
            title="Отобразить категории товаров ${p}"
          >${p}</a>
        </li>
      `,`
        <li class="catalog__item">
          <a 
            class="catalog__link catalog__link_active"
            href="#all"
            title="Отобразить ВСЕ категории товаров"
          >ВСЕ</a>
        </li>
      `)}
    </ul>
    `;return a.append(L(o,"catalog__container")),e&&e.append(a),N=!0,a},ve="http://localhost:3000/allgoods",g="http://localhost:3000",nt=(e,t)=>t?`
    <div class="goods__pagination pagination">
      <ul class="pagination__list">
        <li class="pagination__item pagination__item_active"></li>
        <li class="pagination__item">
          <a class="pagination__link"> </a>
        </li>
        <li class="pagination__item">
          <a class="pagination__link"> </a>
        </li>
        <li class="pagination__item">
          <a class="pagination__link"> </a>
        </li>
      </ul>
      <div class="pagination__controle">
        <button class="pagination__btn pagination__btn_prev" title="Предыдующая страница">
          <svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.2279 16L17.5506 4.36399C17.6438 4.27022 17.7175 4.15889 17.7674 4.03645C17.8173 3.914 17.8424 3.78288 17.8414 3.65066C17.8403 3.51844 17.8129 3.38775 17.761 3.26615C17.7091 3.14456 17.6335 3.03447 17.5388 2.94226C17.444 2.85005 17.3319 2.77755 17.2089 2.72895C17.0859 2.68036 16.9545 2.65663 16.8223 2.65915C16.6901 2.66166 16.5598 2.69037 16.4387 2.74362C16.3177 2.79686 16.2084 2.87357 16.1172 2.96932L4.11724 15.3027C3.93561 15.4893 3.83398 15.7395 3.83398 16C3.83398 16.2605 3.93561 16.5106 4.11724 16.6973L16.1172 29.0307C16.2084 29.1264 16.3177 29.2031 16.4387 29.2564C16.5598 29.3096 16.6901 29.3383 16.8223 29.3408C16.9545 29.3433 17.0859 29.3196 17.2089 29.271C17.3319 29.2224 17.444 29.1499 17.5388 29.0577C17.6335 28.9655 17.7091 28.8554 17.761 28.7338C17.8129 28.6122 17.8403 28.4815 17.8414 28.3493C17.8424 28.2171 17.8173 28.086 17.7674 27.9635C17.7175 27.8411 17.6438 27.7298 17.5506 27.636L6.2279 16Z" fill="#1C1C1C"/>
          </svg>
        </button>
        <p class="pagination__pages">
          <span class="pagination__curr-page">${e}</span>
          из
          <span class="pagination__total-page">${t}</span>
        </p>
        <button class="pagination__btn pagination__btn_next" title="Следующая страница">
          <svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M26.7721 16L15.4494 4.36399C15.3562 4.27022 15.2825 4.15889 15.2326 4.03645C15.1827 3.914 15.1575 3.78288 15.1586 3.65066C15.1597 3.51844 15.1871 3.38775 15.239 3.26615C15.2909 3.14456 15.3665 3.03447 15.4612 2.94226C15.556 2.85005 15.6681 2.77755 15.7911 2.72895C15.9141 2.68036 16.0454 2.65663 16.1776 2.65915C16.3098 2.66166 16.4402 2.69037 16.5613 2.74362C16.6823 2.79686 16.7916 2.87357 16.8828 2.96932L28.8828 15.3027C29.0644 15.4893 29.166 15.7395 29.166 16C29.166 16.2605 29.0644 16.5106 28.8828 16.6973L16.8828 29.0307C16.7916 29.1264 16.6823 29.2031 16.5613 29.2564C16.4402 29.3096 16.3098 29.3383 16.1776 29.3408C16.0454 29.3434 15.9141 29.3196 15.7911 29.271C15.6681 29.2224 15.556 29.1499 15.4612 29.0577C15.3665 28.9655 15.2909 28.8554 15.239 28.7338C15.1871 28.6122 15.1597 28.4815 15.1586 28.3493C15.1575 28.2171 15.1827 28.086 15.2326 27.9635C15.2825 27.8411 15.3562 27.7298 15.4494 27.636L26.7721 16Z" fill="#1C1C1C"/>
          </svg>                  
        </button>
      </div>
    </div>
    `:"",ot="ski-people-favorite",lt="ski-people-cart",q=(e,t)=>{localStorage.setItem(e,JSON.stringify(t))},Ce=e=>{const t=localStorage.getItem(e);return JSON.parse(t)||[]},G=()=>Ce(ot),ct=()=>Ce(lt),$=(e,t=[],i)=>{if(console.log("title, data = [], parent: ",e,t,i),e==="remove"){console.log("здесь очищаем список товаров",document.querySelector(".goods")),document.querySelector(".goods").remove();return}const s=G();console.log("product list favoriteList: ",s);const a=_=>{let h="";return _.forEach(({id:m,price:b,img:v,name:C,type:D})=>{h+=`
        <li class="goods__item">
          <article class="goods__card card">
            <a class="card__link" href="/product?id=${m}" title="Товар ${C} цена ${b} ₽">
              <img class="card__image" src="${g}/img${v}" alt="Товар ${C}">
            </a>
            <button class="card__like-button ${s.find(O=>O.id==m)?"card__like-button_active":""}" title="Добавить товар ${C} в избранное" data-id="${m}">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.41301 13.8733C8.18634 13.9533 7.81301 13.9533 7.58634 13.8733C5.65301 13.2133 1.33301 10.46 1.33301 5.79332C1.33301 3.73332 2.99301 2.06665 5.03967 2.06665C6.25301 2.06665 7.32634 2.65332 7.99967 3.55998C8.67301 2.65332 9.75301 2.06665 10.9597 2.06665C13.0063 2.06665 14.6663 3.73332 14.6663 5.79332C14.6663 10.46 10.3463 13.2133 8.41301 13.8733Z" fill="currentColor" stroke="#1C1C1C" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </button>
            <div class="card__info">
              <h3 class="card__info-title">${C}</h3>
              <p class="card__info-price">${b}&nbsp;&#8381;</p>
            </div>
            <button class="card__button" title="Добавить товар ${C} в корзину">В&nbsp;корзину</button>
          </article>
        </li>
      `}),h},o=`
    <h2 class="goods__title goods__title_favorites">${e}</h2>

    <!-- ТОВАРЫ -->
    <ul class="goods__list">
      ${a(t)}
    </ul>

    <!-- ПАГИНАЦИЯ ВНИЗУ -->
    ${nt(2,t.length)}
  `,l=document.createElement("section");l.classList.add("goods"),l.append(L(o,"goods__container")),i.append(l);const p=document.querySelector(".catalog");return p&&p.addEventListener("click",_=>{if(_.target.matches("a")){p.querySelectorAll(".catalog__link").forEach(v=>v.classList.remove("catalog__link_active")),_.target.classList.add("catalog__link_active");const h=_.target.textContent,m=document.querySelector(".goods__list"),b=document.querySelector(".goods__title");if(_.target.textContent.toString().toLowerCase()==="все")console.log("отдаем все товары"),m.innerHTML=a(t),b.innerHTML=e;else{const v=t.filter(C=>C.type.toString().toLowerCase()===h.toString().toLowerCase());console.log("\x1B[36m%s\x1B[0m","Обновленный список товаров refreshList: ",v),m.innerHTML=a(v),b.innerHTML=`${e} ${h}`}}}),l},oe=async()=>{try{return await(await fetch(ve)).json()}catch(e){return new Error(`fetch error ${e.message}`)}},ut=async()=>await fetch(ve).then(e=>e.json()).then(e=>e).catch(e=>console.log(`fetch ошибка ${e.message}`)),le=async e=>{console.log("load local storage");const t=document.querySelector(".goods__list");t&&t.addEventListener("click",i=>{const s=G();console.log("add favorite favoriteList: ",s);const o=i.target.closest(".card__like-button");if(o){o.classList.toggle("card__like-button_active");const l=Number(i.target.closest(".card__like-button").dataset.id);console.log("addfavorite id: ",l);const p=e.find(_=>_.id===l);if(s.length===0)s.push(p),q("ski-people-favorite",s);else{let _=!1;s.forEach((h,m)=>{h.id===l&&(_=!0,s.splice(m,1),q("ski-people-favorite",s))}),_||(s.push(p),q("ski-people-favorite",s))}}console.log("ready favorite favoriteList: ",s)})};let ce=!1;const ue=(e,t)=>{if(e==="remove"){document.querySelector(".product").remove(),ce=!1;return}if(ce)return"";const i=document.createElement("section");i.classList.add("product");const s=`
    <h2 class="product__title ">${e}</h2>

    <div class="product__description">
      <div class="product__slider">
        <div class="swiper product__slider-main">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <img class="product__slider-image" src="${g}/img/ski1.png" />
            </div>
            <div class="swiper-slide">
              <img class="product__slider-image" src="${g}/img/ski2.png" />
            </div>
            <div class="swiper-slide">
              <img class="product__slider-image" src="${g}/img/ski3.png" />
            </div>
            <div class="swiper-slide">
              <img class="product__slider-image" src="${g}/img/ski4.png" />
            </div>
            <div class="swiper-slide">
              <img class="product__slider-image" src="${g}/img/ski5.png" />
            </div>
            <div class="swiper-slide">
              <img class="product__slider-image" src="${g}/img/ski6.png" />
            </div>
          </div>
          <button type="button" class="product__slider-arrow product__slider-arrow_prev">
            <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M1.86395 7.0001L7.52528 1.1821C7.5719 1.13522 7.60874 1.07955 7.6337 1.01833C7.65866 0.957109 7.67122 0.891546 7.67068 0.825436C7.67013 0.759326 7.65647 0.693981 7.6305 0.633183C7.60453 0.572385 7.56676 0.517341 7.51938 0.471236C7.472 0.425131 7.41594 0.388881 7.35445 0.364583C7.29297 0.340285 7.22727 0.328422 7.16117 0.32968C7.09507 0.330939 7.02988 0.345294 6.96936 0.371914C6.90885 0.398535 6.85421 0.436893 6.80862 0.484768L0.808619 6.65143C0.717804 6.74478 0.666992 6.86987 0.666992 7.0001C0.666992 7.13033 0.717804 7.25542 0.808619 7.34877L6.80862 13.5154C6.85421 13.5633 6.90885 13.6017 6.96936 13.6283C7.02988 13.6549 7.09507 13.6693 7.16117 13.6705C7.22727 13.6718 7.29297 13.6599 7.35445 13.6356C7.41594 13.6113 7.472 13.5751 7.51938 13.529C7.56676 13.4829 7.60453 13.4278 7.6305 13.367C7.65647 13.3062 7.67013 13.2409 7.67068 13.1748C7.67122 13.1087 7.65866 13.0431 7.6337 12.9819C7.60874 12.9207 7.5719 12.865 7.52528 12.8181L1.86395 7.0001Z"
                fill="currentColor" />
            </svg>
          </button>
          <button type="button" class="product__slider-arrow product__slider-arrow_next">
            <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M6.47394 7.0001L0.812606 1.1821C0.765995 1.13522 0.729146 1.07955 0.70419 1.01833C0.679234 0.957109 0.666666 0.891546 0.667215 0.825436C0.667764 0.759326 0.681419 0.693981 0.707389 0.633183C0.733359 0.572385 0.771128 0.517341 0.818511 0.471236C0.865894 0.425131 0.92195 0.388881 0.983436 0.364583C1.04492 0.340285 1.11062 0.328422 1.17672 0.32968C1.24282 0.330939 1.30801 0.345294 1.36853 0.371914C1.42904 0.398535 1.48368 0.436893 1.52927 0.484768L7.52927 6.65143C7.62009 6.74478 7.6709 6.86987 7.6709 7.0001C7.6709 7.13033 7.62009 7.25542 7.52927 7.34877L1.52927 13.5154C1.48368 13.5633 1.42904 13.6017 1.36853 13.6283C1.30801 13.6549 1.24282 13.6693 1.17672 13.6705C1.11062 13.6718 1.04492 13.6599 0.983436 13.6356C0.92195 13.6113 0.865894 13.5751 0.818511 13.529C0.771128 13.4829 0.733359 13.4278 0.707389 13.367C0.681419 13.3062 0.667764 13.2409 0.667215 13.1748C0.666666 13.1087 0.679234 13.0431 0.70419 12.9819C0.729146 12.9207 0.765995 12.865 0.812606 12.8181L6.47394 7.0001Z"
                fill="currentColor" />
            </svg>
          </button>
        </div>
        <div class="swiper product__slider-thumbs slider-thumbs">
          <div class="swiper-wrapper">
            <div class="swiper-slide slider-thumbs__item" class="swiper-slide">
              <img class="slider-thumbs__image" src="${g}/img/ski1.png" />
            </div>
            <div class="swiper-slide slider-thumbs__item" class="swiper-slide">
              <img class="slider-thumbs__image" src="${g}/img/ski2.png" />
            </div>
            <div class="swiper-slide slider-thumbs__item" class="swiper-slide">
              <img class="slider-thumbs__image" src="${g}/img/ski3.png" />
            </div>
            <div class="swiper-slide slider-thumbs__item" class="swiper-slide">
              <img class="slider-thumbs__image" src="${g}/img/ski4.png" />
            </div>
            <div class="swiper-slide slider-thumbs__item" class="swiper-slide">
              <img class="slider-thumbs__image" src="${g}/img/ski5.png" />
            </div>
            <div class="swiper-slide slider-thumbs__item" class="swiper-slide">
              <img class="slider-thumbs__image" src="${g}/img/ski6.png" />
            </div>
            <div class="swiper-slide slider-thumbs__item" class="swiper-slide">
              <img class="slider-thumbs__image" src="${g}/img/ski7.png" />
            </div>
            <div class="swiper-slide slider-thumbs__item" class="swiper-slide">
              <img class="slider-thumbs__image" src="${g}/img/ski8.png" />
            </div>
          </div>
        </div>
      </div>

      <div class="product__info">
        <p class="product__info-price">5&nbsp;000&nbsp;₽</p>
        <p class="product__info-id">арт.&nbsp;84348945757</p>
        <h3 class="product__info-title">Общие характеристики</h3>
        <table class="product__info-table product__table">
          <tr class="product__table-row">
            <td class="product__table-item">Коллекция</td>
            <td class="product__table-item">Snow</td>
          </tr>
          <tr class="product__table-row">
            <td class="product__table-item">Производитель</td>
            <td class="product__table-item">Россия</td>
          </tr>
          <tr class="product__table-row">
            <td class="product__table-item">Гарантия</td>
            <td class="product__table-item">18 мес.</td>
          </tr>
          <tr class="product__table-row">
            <td class="product__table-item">Срок службы</td>
            <td class="product__table-item">5 лет</td>
          </tr>
          <tr class="product__table-row">
            <td class="product__table-item">Цвет</td>
            <td class="product__table-item">Синий</td>
          </tr>
          <tr class="product__table-row">
            <td class="product__table-item">Макс. нагрузка</td>
            <td class="product__table-item">130 кг</td>
          </tr>
        </table>
        <div class="info-buttons">
          <button class="info-buttons__to-cart" type="button">
            В корзину
          </button>
          <button class="info-buttons__like">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.41301 13.8733C8.18634 13.9533 7.81301 13.9533 7.58634 13.8733C5.65301 13.2133 1.33301 10.46 1.33301 5.79332C1.33301 3.73332 2.99301 2.06665 5.03967 2.06665C6.25301 2.06665 7.32634 2.65332 7.99967 3.55998C8.67301 2.65332 9.75301 2.06665 10.9597 2.06665C13.0063 2.06665 14.6663 3.73332 14.6663 5.79332C14.6663 10.46 10.3463 13.2133 8.41301 13.8733Z"
                fill="white"
                stroke="#1C1C1C"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </div> 
  `;return i.append(L(s,"product__container")),t.append(i),i},de=new at("/",{linksSelector:'a[href^="/"]'}),dt=()=>{console.log("init router 😃"),de.on("/",async()=>{console.log("\x1B[32m%s\x1B[0m","Главная страница");const e=await oe();R(),ne(S(),e),$("Список товаров",e,S()),P(),le(e)},{leave(e){console.log("\x1B[35m%s\x1B[0m","leave Главную страницу"),ne(),$("remove"),e()}}).on("/product",async()=>{console.log("Страница товара продукта"),R(),ue("Товар",S()),P()},{leave(e){console.log("\x1B[35m%s\x1B[0m","leave Закрываем Product"),ue("remove"),e()}}).on("/favorite",async()=>{console.log("\x1B[32m%s\x1B[0m","Favorite⭐ page Избранное");const e=await ut();R(),$("Избранное⭐",G(),S()),P(),le(e)},{leave(e){console.log("\x1B[35m%s\x1B[0m","leave Закрываем Избранное"),$("remove"),e()}}).on("/cart",async()=>{console.log("\x1B[32m%s\x1B[0m","Cart🛒 Корзина"),await oe();const e=ct();console.log("cartList: ",e),R(),ae("Корзина товаров",S(),e),P()},{leave(e){console.log("\x1B[35m%s\x1B[0m","leave Оставляем корзину"),ae("remove"),e()}}).notFound(()=>{console.log("🤖 page 404"),document.body.innerHTML=`
          <main class="main">
            <div class="container page__notfound" style="display:flex;flex-direction:column;justify-content:center;align-items:center;gap:7px;padding:70px;">
              <h1 class="page__title" style="text-align:center;font-size:54px;font-family:cursive;">Title 404 PAGE</h1>
              <p class="page__text" style="text-align:center;">Жаль, похоже страницы по данному адресу не существует ;)</p>
              <a class="page__link" style="text-decoration:underline;" href="/">Вернуться на главную</a>
            </div>
          </main>`},{leave(e){console.log("\x1B[33m%s\x1B[0m","Возвращаемся на Главную"),document.body.innerHTML="",e()}}),de.resolve()},pt=()=>{dt()};pt();

!function(e){"function"==typeof define&&define.amd?define(e):e()}((function(){"use strict";var e,n,_,t,l={},o=[],r=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function i(e,n){for(var _ in n)e[_]=n[_];return e}function u(e){var n=e.parentNode;n&&n.removeChild(e)}function c(e,n,_){var t,l,o,r=arguments,i={};for(o in n)"key"==o?t=n[o]:"ref"==o?l=n[o]:i[o]=n[o];if(arguments.length>3)for(_=[_],o=3;o<arguments.length;o++)_.push(r[o]);if(null!=_&&(i.children=_),"function"==typeof e&&null!=e.defaultProps)for(o in e.defaultProps)void 0===i[o]&&(i[o]=e.defaultProps[o]);return f(e,i,t,l,null)}function f(n,_,t,l,o){var r={type:n,props:_,key:t,ref:l,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:null==o?++e.__v:o};return null!=e.vnode&&e.vnode(r),r}function s(e){return e.children}function a(e,n){this.props=e,this.context=n}function p(e,n){if(null==n)return e.__?p(e.__,e.__.__k.indexOf(e)+1):null;for(var _;n<e.__k.length;n++)if(null!=(_=e.__k[n])&&null!=_.__e)return _.__e;return"function"==typeof e.type?p(e):null}function h(e){var n,_;if(null!=(e=e.__)&&null!=e.__c){for(e.__e=e.__c.base=null,n=0;n<e.__k.length;n++)if(null!=(_=e.__k[n])&&null!=_.__e){e.__e=e.__c.base=_.__e;break}return h(e)}}function d(l){(!l.__d&&(l.__d=!0)&&n.push(l)&&!v.__r++||t!==e.debounceRendering)&&((t=e.debounceRendering)||_)(v)}function v(){for(var e;v.__r=n.length;)e=n.sort((function(e,n){return e.__v.__b-n.__v.__b})),n=[],e.some((function(e){var n,_,t,l,o,r;e.__d&&(o=(l=(n=e).__v).__e,(r=n.__P)&&(_=[],(t=i({},l)).__v=l.__v+1,x(r,l,t,n.__n,void 0!==r.ownerSVGElement,null!=l.__h?[o]:null,_,null==o?p(l):o,l.__h),C(_,l),l.__e!=o&&h(l)))}))}function y(e,n,_,t,r,i,u,c,a,h){var d,v,y,k,b,S,w,C=t&&t.__k||o,D=C.length;for(_.__k=[],d=0;d<n.length;d++)if(null!=(k=_.__k[d]=null==(k=n[d])||"boolean"==typeof k?null:"string"==typeof k||"number"==typeof k?f(null,k,null,null,k):Array.isArray(k)?f(s,{children:k},null,null,null):k.__b>0?f(k.type,k.props,k.key,null,k.__v):k)){if(k.__=_,k.__b=_.__b+1,null===(y=C[d])||y&&k.key==y.key&&k.type===y.type)C[d]=void 0;else for(v=0;v<D;v++){if((y=C[v])&&k.key==y.key&&k.type===y.type){C[v]=void 0;break}y=null}x(e,k,y=y||l,r,i,u,c,a,h),b=k.__e,(v=k.ref)&&y.ref!=v&&(w||(w=[]),y.ref&&w.push(y.ref,null,k),w.push(v,k.__c||b,k)),null!=b?(null==S&&(S=b),"function"==typeof k.type&&null!=k.__k&&k.__k===y.__k?k.__d=a=m(k,a,e):a=g(e,k,y,C,b,a),h||"option"!==_.type?"function"==typeof _.type&&(_.__d=a):e.value=""):a&&y.__e==a&&a.parentNode!=e&&(a=p(y))}for(_.__e=S,d=D;d--;)null!=C[d]&&("function"==typeof _.type&&null!=C[d].__e&&C[d].__e==_.__d&&(_.__d=p(t,d+1)),H(C[d],C[d]));if(w)for(d=0;d<w.length;d++)E(w[d],w[++d],w[++d])}function m(e,n,_){var t,l;for(t=0;t<e.__k.length;t++)(l=e.__k[t])&&(l.__=e,n="function"==typeof l.type?m(l,n,_):g(_,l,l,e.__k,l.__e,n));return n}function g(e,n,_,t,l,o){var r,i,u;if(void 0!==n.__d)r=n.__d,n.__d=void 0;else if(null==_||l!=o||null==l.parentNode)e:if(null==o||o.parentNode!==e)e.appendChild(l),r=null;else{for(i=o,u=0;(i=i.nextSibling)&&u<t.length;u+=2)if(i==l)break e;e.insertBefore(l,o),r=o}return void 0!==r?r:l.nextSibling}function k(e,n,_){"-"===n[0]?e.setProperty(n,_):e[n]=null==_?"":"number"!=typeof _||r.test(n)?_:_+"px"}function b(e,n,_,t,l){var o;e:if("style"===n)if("string"==typeof _)e.style.cssText=_;else{if("string"==typeof t&&(e.style.cssText=t=""),t)for(n in t)_&&n in _||k(e.style,n,"");if(_)for(n in _)t&&_[n]===t[n]||k(e.style,n,_[n])}else if("o"===n[0]&&"n"===n[1])o=n!==(n=n.replace(/Capture$/,"")),n=n.toLowerCase()in e?n.toLowerCase().slice(2):n.slice(2),e.l||(e.l={}),e.l[n+o]=_,_?t||e.addEventListener(n,o?w:S,o):e.removeEventListener(n,o?w:S,o);else if("dangerouslySetInnerHTML"!==n){if(l)n=n.replace(/xlink[H:h]/,"h").replace(/sName$/,"s");else if("href"!==n&&"list"!==n&&"form"!==n&&"download"!==n&&n in e)try{e[n]=null==_?"":_;break e}catch(r){}"function"==typeof _||(null!=_&&(!1!==_||"a"===n[0]&&"r"===n[1])?e.setAttribute(n,_):e.removeAttribute(n))}}function S(n){this.l[n.type+!1](e.event?e.event(n):n)}function w(n){this.l[n.type+!0](e.event?e.event(n):n)}function x(n,_,t,r,c,f,p,h,d){var v,m,g,k,S,w,x,C,E,H,T,P=_.type;if(void 0!==_.constructor)return null;null!=t.__h&&(d=t.__h,h=_.__e=t.__e,_.__h=null,f=[h]),(v=e.__b)&&v(_);try{e:if("function"==typeof P){if(C=_.props,E=(v=P.contextType)&&r[v.__c],H=v?E?E.props.value:v.__:r,t.__c?x=(m=_.__c=t.__c).__=m.__E:("prototype"in P&&P.prototype.render?_.__c=m=new P(C,H):(_.__c=m=new a(C,H),m.constructor=P,m.render=D),E&&E.sub(m),m.props=C,m.state||(m.state={}),m.context=H,m.__n=r,g=m.__d=!0,m.__h=[]),null==m.__s&&(m.__s=m.state),null!=P.getDerivedStateFromProps&&(m.__s==m.state&&(m.__s=i({},m.__s)),i(m.__s,P.getDerivedStateFromProps(C,m.__s))),k=m.props,S=m.state,g)null==P.getDerivedStateFromProps&&null!=m.componentWillMount&&m.componentWillMount(),null!=m.componentDidMount&&m.__h.push(m.componentDidMount);else{if(null==P.getDerivedStateFromProps&&C!==k&&null!=m.componentWillReceiveProps&&m.componentWillReceiveProps(C,H),!m.__e&&null!=m.shouldComponentUpdate&&!1===m.shouldComponentUpdate(C,m.__s,H)||_.__v===t.__v){m.props=C,m.state=m.__s,_.__v!==t.__v&&(m.__d=!1),m.__v=_,_.__e=t.__e,_.__k=t.__k,m.__h.length&&p.push(m);break e}null!=m.componentWillUpdate&&m.componentWillUpdate(C,m.__s,H),null!=m.componentDidUpdate&&m.__h.push((function(){m.componentDidUpdate(k,S,w)}))}m.context=H,m.props=C,m.state=m.__s,(v=e.__r)&&v(_),m.__d=!1,m.__v=_,m.__P=n,v=m.render(m.props,m.state,m.context),m.state=m.__s,null!=m.getChildContext&&(r=i(i({},r),m.getChildContext())),g||null==m.getSnapshotBeforeUpdate||(w=m.getSnapshotBeforeUpdate(k,S)),T=null!=v&&v.type===s&&null==v.key?v.props.children:v,y(n,Array.isArray(T)?T:[T],_,t,r,c,f,p,h,d),m.base=_.__e,_.__h=null,m.__h.length&&p.push(m),x&&(m.__E=m.__=null),m.__e=!1}else null==f&&_.__v===t.__v?(_.__k=t.__k,_.__e=t.__e):_.__e=function(e,n,_,t,r,i,c,f){var s,a,p,h,d=_.props,v=n.props,m=n.type,g=0;if("svg"===m&&(r=!0),null!=i)for(;g<i.length;g++)if((s=i[g])&&(s===e||(m?s.localName==m:3==s.nodeType))){e=s,i[g]=null;break}if(null==e){if(null===m)return document.createTextNode(v);e=r?document.createElementNS("http://www.w3.org/2000/svg",m):document.createElement(m,v.is&&v),i=null,f=!1}if(null===m)d===v||f&&e.data===v||(e.data=v);else{if(i=i&&o.slice.call(e.childNodes),a=(d=_.props||l).dangerouslySetInnerHTML,p=v.dangerouslySetInnerHTML,!f){if(null!=i)for(d={},h=0;h<e.attributes.length;h++)d[e.attributes[h].name]=e.attributes[h].value;(p||a)&&(p&&(a&&p.__html==a.__html||p.__html===e.innerHTML)||(e.innerHTML=p&&p.__html||""))}if(function(e,n,_,t,l){var o;for(o in _)"children"===o||"key"===o||o in n||b(e,o,null,_[o],t);for(o in n)l&&"function"!=typeof n[o]||"children"===o||"key"===o||"value"===o||"checked"===o||_[o]===n[o]||b(e,o,n[o],_[o],t)}(e,v,d,r,f),p)n.__k=[];else if(g=n.props.children,y(e,Array.isArray(g)?g:[g],n,_,t,r&&"foreignObject"!==m,i,c,e.firstChild,f),null!=i)for(g=i.length;g--;)null!=i[g]&&u(i[g]);f||("value"in v&&void 0!==(g=v.value)&&(g!==e.value||"progress"===m&&!g)&&b(e,"value",g,d.value,!1),"checked"in v&&void 0!==(g=v.checked)&&g!==e.checked&&b(e,"checked",g,d.checked,!1))}return e}(t.__e,_,t,r,c,f,p,d);(v=e.diffed)&&v(_)}catch(L){_.__v=null,(d||null!=f)&&(_.__e=h,_.__h=!!d,f[f.indexOf(h)]=null),e.__e(L,_,t)}}function C(n,_){e.__c&&e.__c(_,n),n.some((function(_){try{n=_.__h,_.__h=[],n.some((function(e){e.call(_)}))}catch(t){e.__e(t,_.__v)}}))}function E(n,_,t){try{"function"==typeof n?n(_):n.current=_}catch(l){e.__e(l,t)}}function H(n,_,t){var l,o,r;if(e.unmount&&e.unmount(n),(l=n.ref)&&(l.current&&l.current!==n.__e||E(l,null,_)),t||"function"==typeof n.type||(t=null!=(o=n.__e)),n.__e=n.__d=void 0,null!=(l=n.__c)){if(l.componentWillUnmount)try{l.componentWillUnmount()}catch(i){e.__e(i,_)}l.base=l.__P=null}if(l=n.__k)for(r=0;r<l.length;r++)l[r]&&H(l[r],_,t);null!=o&&u(o)}function D(e,n,_){return this.constructor(e,_)}e={__e:function(e,n){for(var _,t,l;n=n.__;)if((_=n.__c)&&!_.__)try{if((t=_.constructor)&&null!=t.getDerivedStateFromError&&(_.setState(t.getDerivedStateFromError(e)),l=_.__d),null!=_.componentDidCatch&&(_.componentDidCatch(e),l=_.__d),l)return _.__E=_}catch(o){e=o}throw e},__v:0},a.prototype.setState=function(e,n){var _;_=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=i({},this.state),"function"==typeof e&&(e=e(i({},_),this.props)),e&&i(_,e),null!=e&&this.__v&&(n&&this.__h.push(n),d(this))},a.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),d(this))},a.prototype.render=s,n=[],_="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,v.__r=0;var T,P,L,A=0,F=[],N=e.__b,U=e.__r,M=e.diffed,W=e.__c,$=e.unmount;function B(n,_){e.__h&&e.__h(P,n,A||_),A=0;var t=P.__H||(P.__H={__:[],__h:[]});return n>=t.__.length&&t.__.push({}),t.__[n]}function R(e){return A=1,function(e,n,_){var t=B(T++,2);return t.t=e,t.__c||(t.__=[_?_(n):G(void 0,n),function(e){var n=t.t(t.__[0],e);t.__[0]!==n&&(t.__=[n,t.__[1]],t.__c.setState({}))}],t.__c=P),t.__}(G,e)}function q(){F.forEach((function(n){if(n.__P)try{n.__H.__h.forEach(I),n.__H.__h.forEach(j),n.__H.__h=[]}catch(J){n.__H.__h=[],e.__e(J,n.__v)}})),F=[]}e.__b=function(e){P=null,N&&N(e)},e.__r=function(e){U&&U(e),T=0;var n=(P=e.__c).__H;n&&(n.__h.forEach(I),n.__h.forEach(j),n.__h=[])},e.diffed=function(n){M&&M(n);var _=n.__c;_&&_.__H&&_.__H.__h.length&&(1!==F.push(_)&&L===e.requestAnimationFrame||((L=e.requestAnimationFrame)||function(e){var n,_=function(){clearTimeout(t),O&&cancelAnimationFrame(n),setTimeout(e)},t=setTimeout(_,100);O&&(n=requestAnimationFrame(_))})(q)),P=void 0},e.__c=function(n,_){_.some((function(n){try{n.__h.forEach(I),n.__h=n.__h.filter((function(e){return!e.__||j(e)}))}catch(X){_.some((function(e){e.__h&&(e.__h=[])})),_=[],e.__e(X,n.__v)}})),W&&W(n,_)},e.unmount=function(n){$&&$(n);var _=n.__c;if(_&&_.__H)try{_.__H.__.forEach(I)}catch(t){e.__e(t,_.__v)}};var O="function"==typeof requestAnimationFrame;function I(e){var n=P;"function"==typeof e.__c&&e.__c(),P=n}function j(e){var n=P;e.__c=e.__(),P=n}function G(e,n){return"function"==typeof n?n(e):n}const V=e=>{const n=new Date(e);return`${n.toLocaleDateString(void 0,{weekday:"short",month:"short",day:"numeric"})} ${n.getFullYear()}`};function z(){const[n,_]=R(!1),[t,l]=R([]),[o,r]=R("");var i,u,f,a,p;return i=()=>{_(!0),fetch("https://hthsy35yo6.execute-api.eu-west-1.amazonaws.com/prod/feeds/8bc28381/20134028/12/performances.json").then((e=>e.json())).then((e=>{l(e),_(!1)})).catch((e=>{console.log("ERROR",e),r("Oops, something went wrong"),_(!1)}))},u=[],p=B(T++,3),!e.__s&&(f=p.__H,a=u,!f||f.length!==a.length||a.some((function(e,n){return e!==f[n]})))&&(p.__=i,p.__H=u,P.__H.__h.push(p)),c(s,null,n&&c("p",null,"Loading..."),o&&c("p",null,o),t.map((e=>c(s,null,c("h3",null,V(e.date),e.endDate&&e.endDate!==e.date?` - ${V(e.endDate)}`:null),c("h2",null,c("strong",null,e.eventName),e.eventSubtitle),c("p",null,"Start time: ",e.time||"TBC"),c("p",null,"Venue: ",e.venue||"TBC"," ",e.lat&&e.lng?c("a",{style:{color:"#007f80",textDecoration:"underline"},target:"blank",href:`https://maps.google.com/?q=${e.lat},${e.lng}`},"Google maps"):null),c("p",null,"Tickets:"," ",e.ticketLink&&"string"==typeof e.ticketLink?c("a",{target:"blank",href:e.ticketLink,style:{color:"#007f80",textDecoration:"underline"}},"Click here"):"TBC"),c("hr",{style:{color:"rgba(204,204,204,.63)"}})))))}var Y,J,K,Q,X,Z;Y=c(z,null),J=document.getElementById("voces8-feed"),e.__&&e.__(Y,J),X=(Q="function"==typeof K)?null:K&&K.__k||J.__k,Z=[],x(J,Y=(!Q&&K||J).__k=c(s,null,[Y]),X||l,l,void 0!==J.ownerSVGElement,!Q&&K?[K]:X?null:J.firstChild?o.slice.call(J.childNodes):null,Z,!Q&&K?K:X?X.__e:J.firstChild,Q),C(Z,Y)}));

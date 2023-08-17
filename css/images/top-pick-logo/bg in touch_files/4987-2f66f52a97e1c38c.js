"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4987],{44987:function(e,n,t){t.d(n,{Z:function(){return S}});var o=t(45987),r=t(87462),i=t(67294),a=t(73935),c=t(41601),l=t(93869),u=t(30626),d=t(34236),s=t(17294);var f="undefined"!==typeof window?i.useLayoutEffect:i.useEffect;var p=i.forwardRef((function(e,n){var t=e.children,o=e.container,r=e.disablePortal,c=void 0!==r&&r,l=e.onRendered,u=i.useState(null),p=u[0],v=u[1],h=(0,s.Z)(i.isValidElement(t)?t.ref:null,n);return f((function(){c||v(function(e){return e="function"===typeof e?e():e,a.findDOMNode(e)}(o)||document.body)}),[o,c]),f((function(){if(p&&!c)return(0,d.Z)(n,p),function(){(0,d.Z)(n,null)}}),[n,p,c]),f((function(){l&&(p||c)&&l()}),[l,p,c]),c?i.isValidElement(t)?i.cloneElement(t,{ref:h}):t:p?a.createPortal(t,p):p})),v=t(42959),h=t(55192),m=t(92781);var b=t(43144),y=t(74902),E=t(75840),g=t(80713);function k(e,n){n?e.setAttribute("aria-hidden","true"):e.removeAttribute("aria-hidden")}function R(e){return parseInt(window.getComputedStyle(e)["padding-right"],10)||0}function w(e,n,t){var o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[],r=arguments.length>4?arguments[4]:void 0,i=[n,t].concat((0,y.Z)(o)),a=["TEMPLATE","SCRIPT","STYLE"];[].forEach.call(e.children,(function(e){1===e.nodeType&&-1===i.indexOf(e)&&-1===a.indexOf(e.tagName)&&k(e,r)}))}function Z(e,n){var t=-1;return e.some((function(e,o){return!!n(e)&&(t=o,!0)})),t}function x(e,n){var t,o=[],r=[],i=e.container;if(!n.disableScrollLock){if(function(e){var n=(0,u.Z)(e);return n.body===e?(0,g.Z)(n).innerWidth>n.documentElement.clientWidth:e.scrollHeight>e.clientHeight}(i)){var a=(0,E.Z)();o.push({value:i.style.paddingRight,key:"padding-right",el:i}),i.style["padding-right"]="".concat(R(i)+a,"px"),t=(0,u.Z)(i).querySelectorAll(".mui-fixed"),[].forEach.call(t,(function(e){r.push(e.style.paddingRight),e.style.paddingRight="".concat(R(e)+a,"px")}))}var c=i.parentElement,l="HTML"===c.nodeName&&"scroll"===window.getComputedStyle(c)["overflow-y"]?c:i;o.push({value:l.style.overflow,key:"overflow",el:l}),l.style.overflow="hidden"}return function(){t&&[].forEach.call(t,(function(e,n){r[n]?e.style.paddingRight=r[n]:e.style.removeProperty("padding-right")})),o.forEach((function(e){var n=e.value,t=e.el,o=e.key;n?t.style.setProperty(o,n):t.style.removeProperty(o)}))}}var C=function(){function e(){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),this.modals=[],this.containers=[]}return(0,b.Z)(e,[{key:"add",value:function(e,n){var t=this.modals.indexOf(e);if(-1!==t)return t;t=this.modals.length,this.modals.push(e),e.modalRef&&k(e.modalRef,!1);var o=function(e){var n=[];return[].forEach.call(e.children,(function(e){e.getAttribute&&"true"===e.getAttribute("aria-hidden")&&n.push(e)})),n}(n);w(n,e.mountNode,e.modalRef,o,!0);var r=Z(this.containers,(function(e){return e.container===n}));return-1!==r?(this.containers[r].modals.push(e),t):(this.containers.push({modals:[e],container:n,restore:null,hiddenSiblingNodes:o}),t)}},{key:"mount",value:function(e,n){var t=Z(this.containers,(function(n){return-1!==n.modals.indexOf(e)})),o=this.containers[t];o.restore||(o.restore=x(o,n))}},{key:"remove",value:function(e){var n=this.modals.indexOf(e);if(-1===n)return n;var t=Z(this.containers,(function(n){return-1!==n.modals.indexOf(e)})),o=this.containers[t];if(o.modals.splice(o.modals.indexOf(e),1),this.modals.splice(n,1),0===o.modals.length)o.restore&&o.restore(),e.modalRef&&k(e.modalRef,!0),w(o.container,e.mountNode,e.modalRef,o.hiddenSiblingNodes,!1),this.containers.splice(t,1);else{var r=o.modals[o.modals.length-1];r.modalRef&&k(r.modalRef,!1)}return n}},{key:"isTopModal",value:function(e){return this.modals.length>0&&this.modals[this.modals.length-1]===e}}]),e}();var I=function(e){var n=e.children,t=e.disableAutoFocus,o=void 0!==t&&t,r=e.disableEnforceFocus,c=void 0!==r&&r,l=e.disableRestoreFocus,d=void 0!==l&&l,f=e.getDoc,p=e.isEnabled,v=e.open,h=i.useRef(),m=i.useRef(null),b=i.useRef(null),y=i.useRef(),E=i.useRef(null),g=i.useCallback((function(e){E.current=a.findDOMNode(e)}),[]),k=(0,s.Z)(n.ref,g),R=i.useRef();return i.useEffect((function(){R.current=v}),[v]),!R.current&&v&&"undefined"!==typeof window&&(y.current=f().activeElement),i.useEffect((function(){if(v){var e=(0,u.Z)(E.current);o||!E.current||E.current.contains(e.activeElement)||(E.current.hasAttribute("tabIndex")||E.current.setAttribute("tabIndex",-1),E.current.focus());var n=function(){null!==E.current&&(e.hasFocus()&&!c&&p()&&!h.current?E.current&&!E.current.contains(e.activeElement)&&E.current.focus():h.current=!1)},t=function(n){!c&&p()&&9===n.keyCode&&e.activeElement===E.current&&(h.current=!0,n.shiftKey?b.current.focus():m.current.focus())};e.addEventListener("focus",n,!0),e.addEventListener("keydown",t,!0);var r=setInterval((function(){n()}),50);return function(){clearInterval(r),e.removeEventListener("focus",n,!0),e.removeEventListener("keydown",t,!0),d||(y.current&&y.current.focus&&y.current.focus(),y.current=null)}}}),[o,c,d,p,v]),i.createElement(i.Fragment,null,i.createElement("div",{tabIndex:0,ref:m,"data-test":"sentinelStart"}),i.cloneElement(n,{ref:k}),i.createElement("div",{tabIndex:0,ref:b,"data-test":"sentinelEnd"}))},A={root:{zIndex:-1,position:"fixed",right:0,bottom:0,top:0,left:0,backgroundColor:"rgba(0, 0, 0, 0.5)",WebkitTapHighlightColor:"transparent"},invisible:{backgroundColor:"transparent"}},F=i.forwardRef((function(e,n){var t=e.invisible,a=void 0!==t&&t,c=e.open,l=(0,o.Z)(e,["invisible","open"]);return c?i.createElement("div",(0,r.Z)({"aria-hidden":!0,ref:n},l,{style:(0,r.Z)({},A.root,a?A.invisible:{},l.style)})):null}));var P=new C,S=i.forwardRef((function(e,n){var t=(0,c.Z)(),d=(0,l.Z)({name:"MuiModal",props:(0,r.Z)({},e),theme:t}),f=d.BackdropComponent,b=void 0===f?F:f,y=d.BackdropProps,E=d.children,g=d.closeAfterTransition,R=void 0!==g&&g,w=d.container,Z=d.disableAutoFocus,x=void 0!==Z&&Z,C=d.disableBackdropClick,A=void 0!==C&&C,S=d.disableEnforceFocus,T=void 0!==S&&S,L=d.disableEscapeKeyDown,N=void 0!==L&&L,D=d.disablePortal,M=void 0!==D&&D,O=d.disableRestoreFocus,B=void 0!==O&&O,K=d.disableScrollLock,W=void 0!==K&&K,z=d.hideBackdrop,H=void 0!==z&&z,_=d.keepMounted,V=void 0!==_&&_,q=d.manager,Y=void 0===q?P:q,j=d.onBackdropClick,G=d.onClose,J=d.onEscapeKeyDown,Q=d.onRendered,U=d.open,X=(0,o.Z)(d,["BackdropComponent","BackdropProps","children","closeAfterTransition","container","disableAutoFocus","disableBackdropClick","disableEnforceFocus","disableEscapeKeyDown","disablePortal","disableRestoreFocus","disableScrollLock","hideBackdrop","keepMounted","manager","onBackdropClick","onClose","onEscapeKeyDown","onRendered","open"]),$=i.useState(!0),ee=$[0],ne=$[1],te=i.useRef({}),oe=i.useRef(null),re=i.useRef(null),ie=(0,s.Z)(re,n),ae=function(e){return!!e.children&&e.children.props.hasOwnProperty("in")}(d),ce=function(){return(0,u.Z)(oe.current)},le=function(){return te.current.modalRef=re.current,te.current.mountNode=oe.current,te.current},ue=function(){Y.mount(le(),{disableScrollLock:W}),re.current.scrollTop=0},de=(0,h.Z)((function(){var e=function(e){return e="function"===typeof e?e():e,a.findDOMNode(e)}(w)||ce().body;Y.add(le(),e),re.current&&ue()})),se=i.useCallback((function(){return Y.isTopModal(le())}),[Y]),fe=(0,h.Z)((function(e){oe.current=e,e&&(Q&&Q(),U&&se()?ue():k(re.current,!0))})),pe=i.useCallback((function(){Y.remove(le())}),[Y]);if(i.useEffect((function(){return function(){pe()}}),[pe]),i.useEffect((function(){U?de():ae&&R||pe()}),[U,pe,ae,R,de]),!V&&!U&&(!ae||ee))return null;var ve=function(e){return{root:{position:"fixed",zIndex:e.zIndex.modal,right:0,bottom:0,top:0,left:0},hidden:{visibility:"hidden"}}}(t||{zIndex:m.Z}),he={};return void 0===E.props.tabIndex&&(he.tabIndex=E.props.tabIndex||"-1"),ae&&(he.onEnter=(0,v.Z)((function(){ne(!1)}),E.props.onEnter),he.onExited=(0,v.Z)((function(){ne(!0),R&&pe()}),E.props.onExited)),i.createElement(p,{ref:fe,container:w,disablePortal:M},i.createElement("div",(0,r.Z)({ref:ie,onKeyDown:function(e){"Escape"===e.key&&se()&&(J&&J(e),N||(e.stopPropagation(),G&&G(e,"escapeKeyDown")))},role:"presentation"},X,{style:(0,r.Z)({},ve.root,!U&&ee?ve.hidden:{},X.style)}),H?null:i.createElement(b,(0,r.Z)({open:U,onClick:function(e){e.target===e.currentTarget&&(j&&j(e),!A&&G&&G(e,"backdropClick"))}},y)),i.createElement(I,{disableEnforceFocus:T,disableAutoFocus:x,disableRestoreFocus:B,getDoc:ce,isEnabled:se,open:U},i.cloneElement(E,he))))}))},75840:function(e,n,t){function o(){var e=document.createElement("div");e.style.width="99px",e.style.height="99px",e.style.position="absolute",e.style.top="-9999px",e.style.overflow="scroll",document.body.appendChild(e);var n=e.offsetWidth-e.clientWidth;return document.body.removeChild(e),n}t.d(n,{Z:function(){return o}})}}]);
"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3474],{89875:function(r,e,t){var a=t(95318),n=t(20862);e.Z=void 0;var o=n(t(67294)),i=(0,a(t(2108)).default)(o.createElement("path",{d:"M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"}),"ChevronLeft");e.Z=i},66735:function(r,e,t){var a=t(95318),n=t(20862);e.Z=void 0;var o=n(t(67294)),i=(0,a(t(2108)).default)(o.createElement("path",{d:"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"}),"ChevronRight");e.Z=i},88441:function(r,e,t){var a=t(63366),n=t(87462),o=t(67294),i=t(86010),l=t(94780),d=t(98012),s=t(94581),c=t(98216),u=t(2734),v=t(90948),f=t(71657),m=t(28962),b=t(85893);const h=["className","color","value","valueBuffer","variant"];let p,g,w,x,y,Z,C=r=>r;const N=(0,d.F4)(p||(p=C`
  0% {
    left: -35%;
    right: 100%;
  }

  60% {
    left: 100%;
    right: -90%;
  }

  100% {
    left: 100%;
    right: -90%;
  }
`)),j=(0,d.F4)(g||(g=C`
  0% {
    left: -200%;
    right: 100%;
  }

  60% {
    left: 107%;
    right: -8%;
  }

  100% {
    left: 107%;
    right: -8%;
  }
`)),k=(0,d.F4)(w||(w=C`
  0% {
    opacity: 1;
    background-position: 0 -23px;
  }

  60% {
    opacity: 0;
    background-position: 0 -23px;
  }

  100% {
    opacity: 1;
    background-position: -200px -23px;
  }
`)),_=(r,e)=>"inherit"===e?"currentColor":r.vars?r.vars.palette.LinearProgress[`${e}Bg`]:"light"===r.palette.mode?(0,s.$n)(r.palette[e].main,.62):(0,s._j)(r.palette[e].main,.5),S=(0,v.ZP)("span",{name:"MuiLinearProgress",slot:"Root",overridesResolver:(r,e)=>{const{ownerState:t}=r;return[e.root,e[`color${(0,c.Z)(t.color)}`],e[t.variant]]}})((({ownerState:r,theme:e})=>(0,n.Z)({position:"relative",overflow:"hidden",display:"block",height:4,zIndex:0,"@media print":{colorAdjust:"exact"},backgroundColor:_(e,r.color)},"inherit"===r.color&&"buffer"!==r.variant&&{backgroundColor:"none","&::before":{content:'""',position:"absolute",left:0,top:0,right:0,bottom:0,backgroundColor:"currentColor",opacity:.3}},"buffer"===r.variant&&{backgroundColor:"transparent"},"query"===r.variant&&{transform:"rotate(180deg)"}))),$=(0,v.ZP)("span",{name:"MuiLinearProgress",slot:"Dashed",overridesResolver:(r,e)=>{const{ownerState:t}=r;return[e.dashed,e[`dashedColor${(0,c.Z)(t.color)}`]]}})((({ownerState:r,theme:e})=>{const t=_(e,r.color);return(0,n.Z)({position:"absolute",marginTop:0,height:"100%",width:"100%"},"inherit"===r.color&&{opacity:.3},{backgroundImage:`radial-gradient(${t} 0%, ${t} 16%, transparent 42%)`,backgroundSize:"10px 10px",backgroundPosition:"0 -23px"})}),(0,d.iv)(x||(x=C`
    animation: ${0} 3s infinite linear;
  `),k)),P=(0,v.ZP)("span",{name:"MuiLinearProgress",slot:"Bar1",overridesResolver:(r,e)=>{const{ownerState:t}=r;return[e.bar,e[`barColor${(0,c.Z)(t.color)}`],("indeterminate"===t.variant||"query"===t.variant)&&e.bar1Indeterminate,"determinate"===t.variant&&e.bar1Determinate,"buffer"===t.variant&&e.bar1Buffer]}})((({ownerState:r,theme:e})=>(0,n.Z)({width:"100%",position:"absolute",left:0,bottom:0,top:0,transition:"transform 0.2s linear",transformOrigin:"left",backgroundColor:"inherit"===r.color?"currentColor":(e.vars||e).palette[r.color].main},"determinate"===r.variant&&{transition:"transform .4s linear"},"buffer"===r.variant&&{zIndex:1,transition:"transform .4s linear"})),(({ownerState:r})=>("indeterminate"===r.variant||"query"===r.variant)&&(0,d.iv)(y||(y=C`
      width: auto;
      animation: ${0} 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;
    `),N))),D=(0,v.ZP)("span",{name:"MuiLinearProgress",slot:"Bar2",overridesResolver:(r,e)=>{const{ownerState:t}=r;return[e.bar,e[`barColor${(0,c.Z)(t.color)}`],("indeterminate"===t.variant||"query"===t.variant)&&e.bar2Indeterminate,"buffer"===t.variant&&e.bar2Buffer]}})((({ownerState:r,theme:e})=>(0,n.Z)({width:"100%",position:"absolute",left:0,bottom:0,top:0,transition:"transform 0.2s linear",transformOrigin:"left"},"buffer"!==r.variant&&{backgroundColor:"inherit"===r.color?"currentColor":(e.vars||e).palette[r.color].main},"inherit"===r.color&&{opacity:.3},"buffer"===r.variant&&{backgroundColor:_(e,r.color),transition:"transform .4s linear"})),(({ownerState:r})=>("indeterminate"===r.variant||"query"===r.variant)&&(0,d.iv)(Z||(Z=C`
      width: auto;
      animation: ${0} 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) 1.15s infinite;
    `),j))),L=o.forwardRef((function(r,e){const t=(0,f.Z)({props:r,name:"MuiLinearProgress"}),{className:o,color:d="primary",value:s,valueBuffer:v,variant:p="indeterminate"}=t,g=(0,a.Z)(t,h),w=(0,n.Z)({},t,{color:d,variant:p}),x=(r=>{const{classes:e,variant:t,color:a}=r,n={root:["root",`color${(0,c.Z)(a)}`,t],dashed:["dashed",`dashedColor${(0,c.Z)(a)}`],bar1:["bar",`barColor${(0,c.Z)(a)}`,("indeterminate"===t||"query"===t)&&"bar1Indeterminate","determinate"===t&&"bar1Determinate","buffer"===t&&"bar1Buffer"],bar2:["bar","buffer"!==t&&`barColor${(0,c.Z)(a)}`,"buffer"===t&&`color${(0,c.Z)(a)}`,("indeterminate"===t||"query"===t)&&"bar2Indeterminate","buffer"===t&&"bar2Buffer"]};return(0,l.Z)(n,m.E,e)})(w),y=(0,u.Z)(),Z={},C={bar1:{},bar2:{}};if("determinate"===p||"buffer"===p)if(void 0!==s){Z["aria-valuenow"]=Math.round(s),Z["aria-valuemin"]=0,Z["aria-valuemax"]=100;let r=s-100;"rtl"===y.direction&&(r=-r),C.bar1.transform=`translateX(${r}%)`}else 0;if("buffer"===p)if(void 0!==v){let r=(v||0)-100;"rtl"===y.direction&&(r=-r),C.bar2.transform=`translateX(${r}%)`}else 0;return(0,b.jsxs)(S,(0,n.Z)({className:(0,i.default)(x.root,o),ownerState:w,role:"progressbar"},Z,{ref:e},g,{children:["buffer"===p?(0,b.jsx)($,{className:x.dashed,ownerState:w}):null,(0,b.jsx)(P,{className:x.bar1,ownerState:w,style:C.bar1}),"determinate"===p?null:(0,b.jsx)(D,{className:x.bar2,ownerState:w,style:C.bar2})]}))}));e.Z=L},28962:function(r,e,t){t.d(e,{E:function(){return n}});var a=t(34867);function n(r){return(0,a.Z)("MuiLinearProgress",r)}const o=(0,t(1588).Z)("MuiLinearProgress",["root","colorPrimary","colorSecondary","determinate","indeterminate","buffer","query","dashed","dashedColorPrimary","dashedColorSecondary","bar","barColorPrimary","barColorSecondary","bar1Indeterminate","bar1Determinate","bar1Buffer","bar2Indeterminate","bar2Buffer"]);e.Z=o},88852:function(r,e,t){t.r(e),t.d(e,{default:function(){return f}});var a=t(828),n=t(85893),o=t(67294),i=t(33983),l=t.n(i),d=t(83574),s=t(66735),c=t(89875),u=t(70461),v=t(27215);function f(r){var e,t,i,f,m=(0,o.useState)(1),b=m[0],h=m[1],p=(0,o.useState)(!1),g=p[0],w=p[1],x=(0,o.useState)(""),y=x[0],Z=x[1],C=(0,a.Z)((0,u.Z)(""),2),N=C[0];C[1];(0,o.useEffect)((function(){Z(window),window.innerWidth<1200&&w(!0)}),[]);var j,k=function(e,t){if("prev"===t)if(Number(b)<=1){var a,n,o=4;window.innerWidth<=770?o=2:window.innerWidth<=1200&&(o=3),h(Math.ceil(Number(null===r||void 0===r||null===(a=r.data)||void 0===a||null===(n=a.contentData)||void 0===n?void 0:n.length)/o))}else h(b-1);else if("next"===t){var i,l,d=4;window.innerWidth<=770?d=2:window.innerWidth<=1200&&(d=3),Number(b)>=Number(Math.ceil(Number(null===r||void 0===r||null===(i=r.data)||void 0===i||null===(l=i.contentData)||void 0===l?void 0:l.length))/d)?h(1):h(b+1)}},_=0;if(r.data&&y){var S,$,P=4;y.innerWidth<=770?P=2:y.innerWidth<=1200&&(P=3),j=(b-1)*P,_=b*P;var D,L,M=Number(null===r||void 0===r||null===(S=r.data)||void 0===S||null===($=S.contentData)||void 0===$?void 0:$.length)-j;if(M<P)_=Number(null===r||void 0===r||null===(D=r.data)||void 0===D||null===(L=D.contentData)||void 0===L?void 0:L.length),j-=P-M}(0,o.useRef)();return(0,n.jsx)("div",{children:(0,n.jsxs)("div",{className:"".concat(l().backGroundTextureDesktop_blue),children:[(0,n.jsx)("div",{className:"".concat(l().layoutTitleDiv),children:(0,n.jsxs)("div",{className:l().layout_7_title,children:[(0,n.jsx)("hr",{className:"".concat(l().centeredBorder," me-3 ")}),(0,n.jsx)("div",{className:"".concat(l().layoutTitle_layout7," titleFont"),children:(null===r||void 0===r||null===(e=r.data)||void 0===e?void 0:e.isTitleEnabled)>0&&(null===r||void 0===r||null===(t=r.data)||void 0===t?void 0:t.title)}),(0,n.jsx)("hr",{className:"".concat(l().centeredBorder," ms-3")})]})}),(0,n.jsxs)("div",{className:" ".concat(l().productCardCarosuel," "),onMouseEnter:function(){return w(!0)},onMouseLeave:function(){window.innerWidth>1100?w(!1):w(!0)},children:[(0,n.jsx)("div",{className:"".concat(l().arrow_main_div," col-1"),children:g&&(0,n.jsx)("div",{className:"".concat(l().arrow_icons_div),children:(0,n.jsx)(c.Z,{onClick:function(r){return k(0,"prev")},className:"d-block img-fluid ".concat(l().layout_cursor),fontSize:"large",style:{color:"var(--secondary-color)"}})})}),(0,n.jsx)("div",{className:" ".concat(l().productCardOuterDiv),children:(0,n.jsx)("div",{className:"d-flex justify-content-center ".concat(l().productCardDiv),children:r&&(null===r||void 0===r||null===(i=r.data)||void 0===i||null===(f=i.contentData)||void 0===f?void 0:f.filter((function(r,e){return e>=j&&e<_})).map((function(e,t){var a,o,i;return(0,n.jsx)("div",{className:"".concat(l().productIndiDiv),onClick:function(){!function(e,t){(0,v.tH)({data:null===r||void 0===r?void 0:r.data,prodData:e,layout_view:"Products",index:t,customer_id:(null===N||void 0===N?void 0:N.custId)?null===N||void 0===N?void 0:N.custId:"null"})}(null===e||void 0===e?void 0:e.product_json,t)},children:(0,n.jsx)(d.Z,{item:null===e||void 0===e?void 0:e.product_json,wishlist:null===r||void 0===r||null===(a=r.wishlistedItems)||void 0===a?void 0:a.includes(null===(i=null===e||void 0===e||null===(o=e.product_json)||void 0===o?void 0:o.variants[0])||void 0===i?void 0:i.id),homepage:!0})})})))})}),(0,n.jsx)("div",{className:"".concat(l().arrow_main_div," col-1"),children:g&&(0,n.jsx)("div",{className:"".concat(l().arrow_icons_div),children:(0,n.jsx)(s.Z,{onClick:function(r){return k(0,"next")},className:"d-block img-fluid ".concat(l().layout_cursor),fontSize:"large",style:{color:"var(--secondary-color)"}})})})]})]})})}}}]);
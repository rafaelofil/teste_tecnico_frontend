(this["webpackJsonpteste-mediar-criptomoedas"]=this["webpackJsonpteste-mediar-criptomoedas"]||[]).push([[0],{13:function(e,t,a){e.exports={container:"ChartCoin_container__3dBRb",error:"ChartCoin_error__cPAGe",slideRight:"ChartCoin_slideRight__1F2EL",chart:"ChartCoin_chart__iF22V",loading:"ChartCoin_loading__2br9p"}},14:function(e,t,a){e.exports={container:"ChartCurrency_container__2JTpR",error:"ChartCurrency_error__1iDRN",slideRight:"ChartCurrency_slideRight__3X9qD",chart:"ChartCurrency_chart__32CGN",loading:"ChartCurrency_loading__3ebuX"}},172:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),r=a(23),i=a.n(r),o=(a(65),a(2)),s=a(60),l=a.n(s),d=a(0);var j=function(){return Object(d.jsx)("div",{className:l.a.container,id:"about",children:Object(d.jsx)("div",{children:Object(d.jsxs)("p",{children:["Voc\xea est\xe1 pronto para",Object(d.jsx)("br",{}),"saber o que voc\xea vende.",Object(d.jsx)("br",{}),"N\xf3s podemos mostrar",Object(d.jsx)("br",{}),"o que voc\xea poderia vender."]})})})},u=a(7),b=a.n(u),h=a(12),m=a(13),O=a.n(m),_=a(24);var x=function(){var e,t,a=Object(n.useState)(null),c=Object(o.a)(a,2),r=c[0],i=c[1],s=Object(n.useState)(null),l=Object(o.a)(s,2),j=l[0],u=l[1],m=Object(n.useState)(!0),x=Object(o.a)(m,2),v=x[0],p=x[1],f=Object(n.useState)(null),g=Object(o.a)(f,2),C=g[0],k=g[1];function N(){return(N=Object(h.a)(b.a.mark((function e(t){var a,n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(t);case 3:return a=e.sent,e.next=6,a.json();case 6:n=e.sent,i(n),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),k("Um erro ocorreu, tente recarregar a p\xe1gina.");case 13:return e.prev=13,p(!1),e.finish(13);case 16:case"end":return e.stop()}}),e,null,[[0,10,13,16]])})))).apply(this,arguments)}function y(){return(y=Object(h.a)(b.a.mark((function e(t){var a,n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(t);case 3:return a=e.sent,e.next=6,a.json();case 6:n=e.sent,u(n),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),k("Um erro ocorreu.");case 13:return e.prev=13,p(!1),e.finish(13);case 16:case"end":return e.stop()}}),e,null,[[0,10,13,16]])})))).apply(this,arguments)}Object(n.useEffect)((function(){!function(e){N.apply(this,arguments)}("https://api.coinlore.net/api/tickers/?start=100&limit=10"),function(e){y.apply(this,arguments)}("https://api.exchangeratesapi.io/latest?base=USD")}),[]);var L=Object(n.useState)("BRL"),w=Object(o.a)(L,2),M=w[0],R=w[1];null!==r&&(e=r.data.map((function(e){return e.symbol})),t=r.data.map((function(e){return e.price_usd*j.rates[M]})));var S={labels:e,datasets:[{label:M,data:t,borderColor:"#0079ac",pointBackgroundColor:"#ef5145"}]};return v?Object(d.jsx)("div",{className:O.a.loading}):C?Object(d.jsx)("div",{className:O.a.error,children:Object(d.jsx)("h1",{children:C})}):Object(d.jsx)("div",{className:O.a.container,id:"chart",children:Object(d.jsxs)("div",{children:[Object(d.jsx)("h1",{children:"Criptomoedas"}),Object(d.jsx)("form",{children:Object(d.jsx)("select",{name:"currency",id:"currency",value:M,onChange:function(e){var t=e.target;return R(t.value)},children:Object.keys(j.rates).map((function(e){return Object(d.jsx)("option",{value:e,children:e},e)}))})}),Object(d.jsx)("div",{className:O.a.chart,children:Object(d.jsx)(_.Line,{data:S})})]})})},v=a(14),p=a.n(v);var f=function(){var e,t,a=Object(n.useState)(null),c=Object(o.a)(a,2),r=c[0],i=c[1],s=Object(n.useState)("BRL"),l=Object(o.a)(s,2),j=l[0],u=l[1],m=Object(n.useState)(!0),O=Object(o.a)(m,2),x=O[0],v=O[1],f=Object(n.useState)(null),g=Object(o.a)(f,2),C=g[0],k=g[1];function N(){return(N=Object(h.a)(b.a.mark((function e(t){var a,n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(t);case 3:return a=e.sent,e.next=6,a.json();case 6:n=e.sent,i(n),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),k("Um erro ocorreu, tente recarregar a p\xe1gina.");case 13:return e.prev=13,v(!1),e.finish(13);case 16:case"end":return e.stop()}}),e,null,[[0,10,13,16]])})))).apply(this,arguments)}Object(n.useEffect)((function(){!function(e){N.apply(this,arguments)}("https://api.exchangeratesapi.io/latest?base=".concat(j))}),[j]),null!==r&&(e=Object.keys(r.rates).filter((function(e){return"IDR"!==e&&"HUF"!==e&&"KRW"!==e})),t=Object.keys(r.rates).filter((function(e){return"IDR"!==e&&"HUF"!==e&&"KRW"!==e})).map((function(e){return r.rates[e]})));var y={labels:e,datasets:[{label:"Valor",data:t,backgroundColor:"rgba(239, 81, 69, 0.6)",color:"rgba(255,255,255, 0.6)",fontColor:"rgba(255,255,255,0.6)"}]};return x?Object(d.jsx)("div",{className:p.a.loading}):C?Object(d.jsx)("div",{className:p.a.error,children:Object(d.jsx)("h1",{children:C})}):Object(d.jsx)("div",{className:p.a.container,children:Object(d.jsxs)("div",{children:[Object(d.jsx)("h1",{children:"Moedas"}),Object(d.jsx)("form",{children:Object(d.jsx)("select",{name:"countryCurrency",id:"contryCurrency",value:j,onChange:function(e){var t=e.target;return u(t.value)},children:e.map((function(e){return Object(d.jsx)("option",{value:e,children:e},e)}))})}),Object(d.jsx)("div",{className:p.a.chart,children:Object(d.jsx)(_.Bar,{data:y})})]})})},g=a(4),C=a.n(g);var k=function(){var e=Object(n.useRef)(null),t=.6*window.innerHeight,a=Object(n.useState)(!1),c=Object(o.a)(a,2),r=c[0],i=c[1];return window.addEventListener("scroll",(function a(){var n;(null===(n=e.current)||void 0===n?void 0:n.getBoundingClientRect().top)-t<0&&(i(!0),window.removeEventListener("scroll",a))})),Object(d.jsx)("div",{className:C.a.container,id:"contact",ref:e,children:Object(d.jsxs)("div",{className:r?C.a.animationContactActive:C.a.animationContact,children:[Object(d.jsx)("h1",{className:C.a.marginLeft,children:"Contato"}),Object(d.jsxs)("div",{className:"".concat(C.a.contact," ").concat(C.a.marginLeft),children:[Object(d.jsxs)("div",{className:C.a.forms,children:[Object(d.jsxs)("form",{children:[Object(d.jsx)("label",{htmlFor:"name",children:"Nome"}),Object(d.jsx)("input",{type:"text",name:"name",id:"name"}),Object(d.jsx)("label",{htmlFor:"email",children:"Email"}),Object(d.jsx)("input",{type:"email",name:"email",id:"email"}),Object(d.jsx)("label",{htmlFor:"message",children:"Mensagem"}),Object(d.jsx)("textarea",{name:"message",id:"message",cols:"30",rows:"10"})]}),Object(d.jsx)("button",{children:"Enviar"})]}),Object(d.jsxs)("div",{children:[Object(d.jsx)("p",{className:C.a.adress,children:"Rua Visconde de Mau\xe1"}),Object(d.jsx)("p",{className:C.a.adress,children:"+55 99999-9999"}),Object(d.jsx)("p",{className:C.a.adress,children:"rafaelofil@outlook.com"})]})]})]})})},N=a(3),y=a.n(N),L=a(25);var w=function(e){var t=c.a.useState(null),a=Object(o.a)(t,2),n=a[0],r=a[1];return c.a.useEffect((function(){function t(){var t=window.matchMedia(e).matches;r(t)}return t(),window.addEventListener("resize",t),function(){window.removeEventListener("resize",t)}})),n};var M=function(e){var t=e.setModalLogin,a=w("(max-width: 860px)"),n=c.a.useState(!1),r=Object(o.a)(n,2),i=r[0],s=r[1];function l(){s(!1)}function j(){t(!0)}return Object(d.jsxs)("header",{className:y.a.header,children:[Object(d.jsxs)("div",{className:y.a.container,children:[Object(d.jsx)("img",{className:y.a.logo,src:"./logo.png",alt:"logo"}),a&&Object(d.jsx)("button",{"aria-label":"Menu",className:"".concat(y.a.mobileButton," ").concat(i&&y.a.mobileButtonActive),onClick:function(){return s(!i)}}),Object(d.jsxs)("nav",{className:"".concat(a?y.a.navMobile:y.a.nav," ").concat(i&&y.a.navMobileActive),children:[Object(d.jsx)(L.Link,{className:y.a.link,to:"about",smooth:!0,duration:500,onClick:l,children:"Sobre"}),Object(d.jsx)(L.Link,{className:y.a.link,to:"chart",smooth:!0,duration:500,onClick:l,children:"Gr\xe1ficos"}),Object(d.jsx)(L.Link,{className:y.a.link,to:"contact",smooth:!0,duration:1e3,onClick:l,children:"Contato"}),a&&Object(d.jsx)("button",{className:y.a.login,onClick:function(){j(),l()},children:"Login"})]})]}),!a&&Object(d.jsx)("button",{className:y.a.login,onClick:j,children:"Login"})]})},R=a(26),S=a.n(R);var A=function(e){var t=e.setModalLogin,a="password";return Object(d.jsx)("div",{className:S.a.modalContainer,onClick:function(e){e.target===e.currentTarget&&t(!1)},children:Object(d.jsxs)("div",{className:S.a.modal,children:[Object(d.jsx)("button",{className:S.a.close,onClick:function(){t(!1)},children:"X"}),Object(d.jsxs)("form",{action:"",children:[Object(d.jsx)("label",{htmlFor:"email",children:"Email"}),Object(d.jsx)("input",{type:"text",htmlFor:"email",id:"email"}),Object(d.jsx)("label",{htmlFor:"password",children:"Senha"}),Object(d.jsx)("input",{type:a,htmlFor:a,id:a}),Object(d.jsx)("button",{type:"submit",children:"Entrar"})]})]})})};var E=function(){var e=Object(n.useState)(!1),t=Object(o.a)(e,2),a=t[0],c=t[1];return Object(d.jsxs)("div",{children:[Object(d.jsx)(M,{setModalLogin:c}),a&&Object(d.jsx)(A,{setModalLogin:c}),Object(d.jsx)(j,{}),Object(d.jsx)(x,{}),Object(d.jsx)(f,{}),Object(d.jsx)(k,{})]})};i.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(E,{})}),document.getElementById("root"))},26:function(e,t,a){e.exports={modalContainer:"ModalLogin_modalContainer__2NOtj",modal:"ModalLogin_modal__tpi7G",scaleUp:"ModalLogin_scaleUp__oMiWy",close:"ModalLogin_close__3-nOf"}},3:function(e,t,a){e.exports={header:"Header_header__1AeDr",container:"Header_container__17-nE",fadeIn:"Header_fadeIn__3A3uT",logo:"Header_logo__2UPuP",nav:"Header_nav__2uqrO",login:"Header_login__VghnI",link:"Header_link__3s2be",mobileButton:"Header_mobileButton__3gkt-",mobileButtonActive:"Header_mobileButtonActive__3m_Ho",navMobile:"Header_navMobile__3azpv",navMobileActive:"Header_navMobileActive__39Qa-"}},4:function(e,t,a){e.exports={container:"Contact_container__31_EP",contact:"Contact_contact__3xImx",forms:"Contact_forms__2ceza",adress:"Contact_adress__1XAAk",animationContact:"Contact_animationContact__1k0rQ",animationContactActive:"Contact_animationContactActive__1Ml_W",slideRight:"Contact_slideRight__3CSiw",marginLeft:"Contact_marginLeft__LihFx"}},60:function(e,t,a){e.exports={container:"About_container__1nc2G",slideRight:"About_slideRight__1dkV-"}},65:function(e,t,a){}},[[172,1,2]]]);
//# sourceMappingURL=main.fea6125d.chunk.js.map
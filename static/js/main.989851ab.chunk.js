(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{148:function(e,a,t){e.exports=t(292)},291:function(e,a,t){},292:function(e,a,t){"use strict";t.r(a);var n={};t.r(n),t.d(n,"changeAppLocation",function(){return x});var r={};t.r(r),t.d(r,"sendEmail",function(){return G});var c={};t.r(c),t.d(c,"fetchRepos",function(){return K});var l=t(0),i=t.n(l),o=t(9),s=t.n(o),m=t(16),u=t(12),p=t(141),d=t(48),h=t(29),g=t(54),E=t(49),b=t(55),f=t(145),v=t(338),_=t(328),N=t(329),O=t(330),y=t(336),w=t(6),j=t(326),k=t(325);var C=function(e){var a=e.children,t=e.window,n=Object(k.a)({target:t?t():void 0});return i.a.createElement(j.a,{appear:!1,direction:"down",in:!n},a)},T={headerTop:{background:"transparent",boxShadow:"0px 0px rgba(0,0,0,0)",color:"black",marginTop:"3rem"},headerBottom:{background:"transparent",boxShadow:"0px 0px rgba(0,0,0,0)",color:"#777"},title:{flexGrow:1,cursor:"pointer",paddingRight:"1rem"},indicatorColor:{color:"black"}},x=function(e){switch(e){case"Projects":return{type:"TO_PROJECTS"};case"Home":return{type:"TO_HOME"};case"About":return{type:"TO_ABOUT"};case"Contact":return{type:"TO_CONTACT"}}},S=Object(w.a)(T)(Object(m.b)(function(e){return{location:e.location}},n)(function(e){e.classes;var a=i.a.useState(""),t=Object(f.a)(a,2),n=(t[0],t[1]);return console.log(e),i.a.createElement(i.a.Fragment,null,i.a.createElement(v.a,null),i.a.createElement(C,e,i.a.createElement(_.a,{className:"header"},i.a.createElement(N.a,{className:"header__toolbar"},i.a.createElement(O.a,{className:"header__title",variant:"h6",onClick:function(){e.changeAppLocation("Home"),n("")}},"Ryan Flores"),["About","Projects","Contact"].map(function(a,t){return i.a.createElement(y.a,{key:t,onClick:function(){return e.changeAppLocation(a)},className:"header__tab",sizeLarge:!0},a)})))),i.a.createElement(N.a,null))})),A=t(331),R=t(335),P=t(334),M=t(332),z=t(103),H=function(e){var a=e.style,t=void 0===a?{}:a,n=e.fill,r=void 0===n?"#000":n,c=e.width,l=void 0===c?"100%":c,o=e.className,s=void 0===o?"":o,m=e.viewBox,u=void 0===m?"0 0 32 32":m,p=e.path,d=void 0===p?"":p;return i.a.createElement("svg",{width:"100%",style:t,height:l,viewBox:u,xmlns:"http://www.w3.org/2000/svg",className:"svg-icon ".concat(s||""),xmlnsXlink:"http://www.w3.org/1999/xlink"},i.a.createElement("path",{fill:r,d:d}))},I=function(e){function a(){return Object(d.a)(this,a),Object(g.a)(this,Object(E.a)(a).apply(this,arguments))}return Object(b.a)(a,e),Object(h.a)(a,[{key:"render",value:function(){return i.a.createElement("div",{className:"map"},i.a.createElement("div",{className:"map__container"},i.a.createElement(z.Map,{google:this.props.google,zoom:15,style:this.props.mapStyles,fullscreenControl:!1,initialCenter:{lat:33.871506,lng:-117.862776}}),i.a.createElement("div",{className:"social__container"},i.a.createElement("ul",{className:"social__list"},i.a.createElement("li",{className:"social__item"},i.a.createElement("a",{href:"https://www.github.com/ryantylerflores",target:"_blank",className:"social__link"},i.a.createElement(H,{width:60,fill:"#333",path:"M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"}))),i.a.createElement("li",{className:"social__item"},i.a.createElement("a",{href:"https://www.linkedin.com/in/ryantylerflores",target:"_blank",className:"social__link"},i.a.createElement(H,{width:60,fill:"#333",path:"M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"}))),i.a.createElement("li",{className:"social__item"},i.a.createElement("a",{href:"https:///www.instagram.com/ryantyler.xo",target:"_blank",className:"social__link"},i.a.createElement(H,{width:60,fill:"#333",path:"M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"})))))))}}]),a}(i.a.Component),L=Object(z.GoogleApiWrapper)({apiKey:"AIzaSyBkVd7dkvIEIW1YTAFVZHGOLvRDN8FKbbA"})(I),F=t(57),B=t.n(F),U=t(82),J=t(101),D=t.n(J),G=function(e){return function(){var a=Object(U.a)(B.a.mark(function a(t,n){return B.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:console.log(e);case 1:case"end":return a.stop()}},a)}));return function(e,t){return a.apply(this,arguments)}}()},Y=function(e){var a=e.input,t=e.label,n=e.meta;n.touched,n.error;return console.log(),i.a.createElement(M.a,Object.assign({required:!0,label:t,className:"contact__text-field",margin:"normal",variant:"outlined"},a))},q=Object(P.a)({form:"contactForm"})(Object(m.b)(null,r)(function(e){e.handleSubmit,e.pristine,e.reset,e.submitting,e.classes;return i.a.createElement("div",{className:"contact"},i.a.createElement("div",{className:"contact__form"},i.a.createElement(O.a,{variant:"h2",className:"heading-tertiary"},"Contact Me"),i.a.createElement(O.a,{className:"heading-primary--sub u-color-gray-dark-1"},"I'll be glad to answer your questions!"),i.a.createElement("form",{action:"https://formspree.io/rtflores90@gmail.com",method:"POST",target:"_blank"},i.a.createElement("div",null,i.a.createElement(R.a,{name:"name",component:Y,label:"Your Name (required)"})),i.a.createElement("div",null,i.a.createElement(R.a,{name:"email",component:Y,label:"Your Email (required)"})),i.a.createElement("div",null,i.a.createElement(R.a,{name:"subject",component:Y,label:"Subject"})),i.a.createElement("div",null,i.a.createElement(R.a,{name:"message",component:Y,label:"Your Message",multiLine:!0,rows:10})),i.a.createElement("div",{className:"u-text-center u-margin-top-big"},i.a.createElement("button",{type:"submit",className:"btn btn--blue"},"Submit")))))})),V=function(e){return{root:{marginTop:"-6.4rem",backgroundImage:"url(/assets/main-background.jpg)",height:"97vh"},container:{width:"85%",margin:"0 auto",color:"white",marginTop:e.spacing(10)},profilePictureContainer:{width:"100%",margin:"0 auto",paddingTop:e.spacing(6),color:"#2f313d"},bodyContainer:{height:"50rem",paddingLeft:"15%",paddingRight:"15%",color:"white",flexGrow:1,display:"flex",alignItems:"center"},padding:{padding:e.spacing(3)},margin:{margin:e.spacing(3,0)},lineHeight:{}}},X=Object(w.a)(V)(Object(m.b)(null,r)(function(e){var a=e.classes;return i.a.createElement("main",null,i.a.createElement("div",{className:"section-intro"},i.a.createElement("div",{className:"profile-img__container"},i.a.createElement("img",{src:"./assets/me.jpg",alt:"Profile picture",className:"profile-img"})),i.a.createElement("div",{className:"heading__container"},i.a.createElement(O.a,{variant:"h1",className:"heading-primary"},i.a.createElement("span",{className:"heading-primary--main"},"Ryan"),i.a.createElement("span",{className:"heading-primary--main"},"Flores."),i.a.createElement("span",{className:"heading-primary--sub heading-primary--sub-up"},"Designer, "),i.a.createElement("span",{className:"heading-primary--sub heading-primary--sub-down"},"Developer, "),i.a.createElement("span",{className:"heading-primary--sub heading-primary--sub-up"},"Enthusiast")))),i.a.createElement("div",{className:"section-summary"},i.a.createElement("div",{className:a.bodyContainer},i.a.createElement(A.a,{container:!0,spacing:2,className:"u-padding-big"},i.a.createElement(A.a,{item:!0,xs:12,md:6,className:"u-padding-small summary"},i.a.createElement(O.a,{align:"center",variant:"h3",className:"heading-tertiary"},"Hi. I'm Ryan, a software developer from Placentia, California. Feel free to reach out.")),i.a.createElement("div",{className:"u-line-center-mobile"}),i.a.createElement(A.a,{item:!0,xs:12,md:6,className:"u-padding-small summary"},i.a.createElement(O.a,{align:"center",variant:"body1",className:"paragraph"},"As a software engineer I pride myself on creating readable, reusable code using the best industry practices. My passion lies in helping companies create beautiful, user-friendly UIs. My current toolset is coding these UIs in VSCode, ReactJS with Redux, Bootstrap, & Material-UI. Let me know how I can best help you!"))))),i.a.createElement("div",{className:"section-contact"},i.a.createElement("div",{className:"contact__container"},i.a.createElement("div",{className:"map__container"},i.a.createElement(L,{mapStyles:{width:"100%",height:"45rem",borderRadius:"3px",boxShadow:"0 1rem 4rem rgba(0,0,0,.2)"}})),i.a.createElement("div",{className:"contact__position contact__position-home"},i.a.createElement(q,null)))))})),K=function(){return function(){var e=Object(U.a)(B.a.mark(function e(a){var t;return B.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D.a.get("https://api.github.com/users/ryantylerflores/repos");case 2:t=e.sent,a({type:"FETCH_REPOS",payload:t.data});case 4:case"end":return e.stop()}},e)}));return function(a){return e.apply(this,arguments)}}()},W=function(e){function a(e){var t;return Object(d.a)(this,a),(t=Object(g.a)(this,Object(E.a)(a).call(this,e))).renderProject=function(){return t.props.projects?t.props.projects.map(function(e,a){return i.a.createElement("li",{key:a},i.a.createElement("a",{href:"".concat(e.html_url),className:"projects__link",target:"_blank"},e.name))}):i.a.createElement("li",null,"Loading...")},t}return Object(b.a)(a,e),Object(h.a)(a,[{key:"componentDidMount",value:function(){this.props.fetchRepos()}},{key:"render",value:function(){return i.a.createElement("div",{className:"projects"},i.a.createElement("div",{className:"projects__background"}),i.a.createElement("div",{className:"projects__container"},i.a.createElement("div",{className:"projects-heading__container"},i.a.createElement(O.a,{variant:"h1",className:"heading-primary u-margin-top-none heading-primary--animated"},i.a.createElement("span",{className:"heading-primary--main u-color-black"},"Projects"))),i.a.createElement("ul",{className:"projects__list projects__list--animated"},this.renderProject())))}}]),a}(i.a.Component),Z=Object(m.b)(function(e){return{projects:e.projects.repositories}},c)(W),Q=function(e){return{root:{height:"100vh",background:"url(./assets/blurry-image.jpg) no-repeat center center fixed",backgroundSize:"cover"},white:{color:"white"},paddingTop:{paddingTop:e.spacing(25)}}},$=Object(w.a)(Q)(function(e){var a=e.classes;return i.a.createElement("div",{className:"construction"},i.a.createElement("div",{className:"construction__container"},i.a.createElement(O.a,{variant:"h2",className:"".concat(a.white)},"Page is Under Construction!")))}),ee=function(){return i.a.createElement("div",null,i.a.createElement($,null))},ae=function(e){e.handleSubmit,e.pristine,e.reset,e.submitting,e.classes;return i.a.createElement("div",{className:"contact"},i.a.createElement("div",null,i.a.createElement(L,{mapStyles:{width:"100%",height:"45rem",borderRadius:"3px"}})),i.a.createElement("div",null,i.a.createElement(q,null)))},te=function(e){return{root:{height:"100vh"}}},ne=(Object(w.a)(te)(function(e){var a=e.classes;return i.a.createElement("div",{className:a.root},"closing content")}),t(58)),re=function(e){var a;return{footer:(a={height:"20px",padding:"1rem",width:"100%",color:"white",backgroundColor:"#333"},Object(ne.a)(a,"height","6rem"),Object(ne.a)(a,"fontSize","1.6rem"),Object(ne.a)(a,"padding","10rem 0"),a),textContainer:{transform:"translateY(50%)"},gray:{color:"#aaa"},borderTop:{borderTop:"rgba(0,0,0,.125) 1px solid"},grow:{flexGrow:1}}},ce=Object(w.a)(re)(Object(m.b)(null,n)(function(e){var a=e.classes;return console.log(e),i.a.createElement("footer",{className:"footer"},i.a.createElement(A.a,{container:!0,spacing:2,className:a.padding},i.a.createElement(A.a,{item:!0,xs:12,md:6},i.a.createElement("div",{className:"footer__nav"},i.a.createElement("ul",{className:"footer__list"},i.a.createElement("li",{className:"footer__item"},i.a.createElement("a",{onClick:function(){return e.changeAppLocation("Home")},className:"footer__link"},"Home")),i.a.createElement("li",{className:"footer__item"},i.a.createElement("a",{onClick:function(){return e.changeAppLocation("About")},className:"footer__link"},"About")),i.a.createElement("li",{className:"footer__item"},i.a.createElement("a",{onClick:function(){return e.changeAppLocation("Projects")},className:"footer__link"},"Projects")),i.a.createElement("li",{className:"footer__item"},i.a.createElement("a",{onClick:function(){return e.changeAppLocation("Contact")},className:"footer__link"},"Contact"))))),i.a.createElement(A.a,{item:!0,xs:12,md:6},i.a.createElement("p",{className:"footer__copyright"},"\xa9 Ryan Flores, 2019. All rights reserved."))))})),le=(t(291),function(e){function a(e){return Object(d.a)(this,a),Object(g.a)(this,Object(E.a)(a).call(this,e))}return Object(b.a)(a,e),Object(h.a)(a,[{key:"render",value:function(){var e;switch(this.props.location.current){case"HOME":e=i.a.createElement(X,null);break;case"PROJECTS":e=i.a.createElement(Z,null);break;case"ABOUT":e=i.a.createElement(ee,null);break;case"CONTACT":e=i.a.createElement(ae,null)}return i.a.createElement(i.a.Fragment,null,i.a.createElement(S,null),e,i.a.createElement(ce,null))}}]),a}(i.a.Component)),ie=Object(m.b)(function(e){return{location:e.location}})(le),oe=t(46),se=t(337),me=Object(u.c)({location:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{current:"HOME"};switch((arguments.length>1?arguments[1]:void 0).type){case"TO_HOME":return Object(oe.a)({},e,{current:"HOME"});case"TO_PROJECTS":return Object(oe.a)({},e,{current:"PROJECTS"});case"TO_CONTACT":return Object(oe.a)({},e,{current:"CONTACT"});case"TO_ABOUT":return Object(oe.a)({},e,{current:"ABOUT"})}return e},form:se.a,projects:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"FETCH_REPOS":return Object(oe.a)({},e,{repositories:a.payload});default:return e}}}),ue=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||u.d,pe=Object(u.e)(me,ue(Object(u.a)(p.a)));s.a.render(i.a.createElement(m.a,{store:pe},i.a.createElement(ie,null)),document.getElementById("root"))}},[[148,1,2]]]);
//# sourceMappingURL=main.989851ab.chunk.js.map
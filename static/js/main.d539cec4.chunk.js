(this["webpackJsonpportfolio-react"]=this["webpackJsonpportfolio-react"]||[]).push([[0],[,,,,,,,,function(e,s,c){},function(e,s,c){},,,,,,,function(e,s,c){},function(e,s,c){},,,function(e,s,c){},function(e,s,c){},function(e,s,c){},function(e,s,c){"use strict";c.r(s);var t=c(1),a=c.n(t),i=c(10),n=c.n(i),l=(c(16),c.p,c(17),c(8),c(18),c(5)),r=c(0),o=[{name:"Home",link:"/"},{name:"Projects",link:"/works"},{name:"Contact",link:"/contact"}],d=function(){return Object(t.useEffect)((function(){window.addEventListener("scroll",(function(){var e=window.scrollY<100,s=document.getElementById("banner");e?s.classList.remove("shrink"):s.classList.add("shrink")}))})),Object(r.jsx)(a.a.Fragment,{children:Object(r.jsx)("header",{children:Object(r.jsx)("nav",{className:"navbar navbar-expand-md shrink navbar-dark fixed-top",id:"banner",children:Object(r.jsxs)("div",{className:"container",children:[Object(r.jsx)("span",{className:"grey-color",children:" < "}),Object(r.jsx)("a",{className:"navbar-brand",href:"#",children:Object(r.jsx)("span",{children:"Aldeek"})}),Object(r.jsx)("span",{className:"grey-color",children:"/>"}),Object(r.jsx)("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#collapsibleNavbar",children:Object(r.jsx)("span",{className:"navbar-toggler-icon"})}),Object(r.jsx)("div",{className:"collapse navbar-collapse",id:"collapsibleNavbar",children:Object(r.jsx)("ul",{className:"navbar-nav ml-auto",children:o.map((function(e){return Object(r.jsx)("li",{className:"nav-item",children:Object(r.jsx)(l.c,{to:e.link,className:"nav-link",children:e.name})},e.name)}))})})]})})})})},j=function(){return Object(r.jsx)("footer",{className:"apps-footer",id:"contact",children:Object(r.jsx)("div",{className:"footer-top",children:Object(r.jsxs)("div",{className:"container",children:[Object(r.jsx)("div",{className:"apps-short-info",children:Object(r.jsxs)("h3",{children:[" ",Object(r.jsx)("span",{className:"grey-color",children:" < "})," Abdulkareem Aldeek"," ",Object(r.jsx)("span",{className:"grey-color",children:"/>"})]})}),Object(r.jsxs)("ul",{className:"list-inline list-unstyled footer-social-links",children:[Object(r.jsx)("li",{children:Object(r.jsx)("a",{href:"https://www.facebook.com/abood.aldeek.cs",children:Object(r.jsx)("i",{className:"fab fa-facebook-f"})})}),Object(r.jsx)("li",{children:Object(r.jsx)("a",{href:"https://www.instagram.com/d.eek9",children:Object(r.jsx)("i",{className:"fab fa-instagram"})})}),Object(r.jsx)("li",{children:Object(r.jsx)("a",{href:"https://www.linkedin.com/in/abdulkareem-aldeek//",children:Object(r.jsx)("i",{className:"fab fa-linkedin-in"})})})]})]})})})},m=c(3),b=function(e){var s=e.src,c=e.name,t=e.link,a=e.filter;return Object(r.jsx)("div",{className:"col-lg-4 col-md-6 col-12 ".concat(a),"data-aos":"fade-up",children:Object(r.jsxs)("div",{className:"card-imG ",children:[Object(r.jsx)("img",{src:s,alt:""}),Object(r.jsx)("div",{className:"overlay-hover",children:Object(r.jsxs)("div",{className:"text-hover",children:[Object(r.jsx)("span",{children:c})," ",Object(r.jsx)("br",{}),Object(r.jsxs)("a",{href:t,target:"_blank",children:[Object(r.jsx)("i",{className:"fas fa-link"})," Live Preview"]})]})})]})})},h=[{name:"All",filter:"all"},{name:"React",filter:"react"},{name:"Mobile",filter:"webDev"},{name:"WordPress",filter:"wordpress"}],x=[{id:5,name:"My Portfolio",src:"./assets/img/portfolio/portfolio-1.jpg",link:"https://deek.codes/",filter:"react"},{id:1,name:"Clever Team",src:"./images/clever-team.png",link:"https://clever-team.com/",filter:"all"},{id:2,name:"My Blog",src:"https://github.com/DeekCS/Portfolio-ReactApp/blob/master/public/images/blog.png",link:"https://deekcs.github.io/Blog-ReactApp/",filter:"react"},{id:3,name:"Cello Ecommerce",src:"./images/cello.png",link:"https://cello-e-commerce.netlify.app/",filter:"react"},{id:4,name:"iFix - Repair & Service",src:"./images/ifix.png",link:"https://i-fix.netlify.app/",filter:"react"}],O=function(){var e=Object(t.useState)("all"),s=Object(m.a)(e,2),c=s[0],a=s[1],i=Object(t.useState)(x),n=Object(m.a)(i,2),l=n[0],o=n[1];return Object(t.useEffect)((function(){var e=x.filter((function(e){return"all"===c?e:e.filter===c}));o(e)}),[c]),Object(r.jsx)(r.Fragment,{children:Object(r.jsx)("section",{className:"works",children:Object(r.jsx)("div",{className:"works-img",children:Object(r.jsxs)("div",{className:"overlay",children:[Object(r.jsxs)("div",{className:"works-content",children:[Object(r.jsx)("h3",{className:"mb-3",children:"My Works"}),Object(r.jsx)("div",{className:"works-item text-center",children:Object(r.jsx)("ul",{className:"portfolio-sorting list-unstyled text-center kayo-taps",children:h.map((function(e,s){return Object(r.jsx)("li",{onClick:function(){return a(e.filter)},className:"mixitup-control ".concat(c===e.filter?"active":""),children:e.name},s)}))})})]}),Object(r.jsx)("div",{className:"container box-mix",children:Object(r.jsxs)("div",{className:"row",children:[l.length>0?l.map((function(e){return Object(r.jsx)(b,{name:e.name,src:e.src,link:e.link,filter:e.filter},e.id)})):Object(r.jsx)("div",{className:"text-center",children:Object(r.jsx)("h3",{children:"Coming Soon ..."})}),") }"]})})]})})})})},u=(c(9),function(e){return Object(r.jsx)("div",{className:"col-lg-4 col-md-6 col-sm-12",children:Object(r.jsx)("div",{className:"",children:Object(r.jsx)("div",{className:"inner-width",children:Object(r.jsx)("div",{className:"slides owl-carousel",children:Object(r.jsxs)("div",{className:"testimonial",children:[Object(r.jsxs)("div",{className:"test-info",children:[Object(r.jsx)("img",{className:"test-pic",src:e.image,alt:""}),Object(r.jsxs)("div",{className:"test-name",children:[Object(r.jsx)("span",{children:e.name}),Object(r.jsx)("p",{children:e.position})]})]}),Object(r.jsx)("p",{children:e.desc})]})})})})})}),p=[{id:1,image:"assets/images/ellon.jpg",name:"Ellon",position:"CEO",desc:"Proin iaculis purus consequat sem cure digni ssim donec porttitora entum"},{id:2,image:"assets/images/ellon.jpg",name:"Ellon",position:"CEO",desc:"Proin iaculis purus consequat sem cure digni ssim donec porttitora entum"},{id:3,image:"/images/assets/ellon.jpg",name:"Ellon",position:"CEO",desc:"Proin iaculis purus consequat sem cure digni ssim donec porttitora entum"}],f=function(){return Object(r.jsx)("section",{className:"testimonial-section",children:Object(r.jsx)("div",{className:"container ",children:Object(r.jsx)("div",{className:"row ",children:p.map((function(e){return Object(r.jsx)(u,{src:e.image,name:e.name,position:e.position,desc:e.desc},e.id)}))})})})},v=c(2),g=c(11),N=c.n(g),k=function(){var e=Object(t.useRef)(null);return Object(t.useEffect)((function(){var s=new N.a(e.current,{strings:["Web Developer","Web Designer","Web Designer & Developer"],typeSpeed:100,backSpeed:100,backDelay:1e3,loop:!0});return function(){s.destroy()}}),[]),Object(r.jsx)("div",{className:"banner",id:"home",children:Object(r.jsx)("div",{className:"overlay",id:"overlay-light",children:Object(r.jsx)("div",{className:"container",children:Object(r.jsxs)("div",{className:"banner-text",children:[Object(r.jsxs)("div",{className:"banner-heading",children:["HI, I AM ",Object(r.jsx)("img",{className:"wave",src:"",alt:"",srcSet:""})]}),Object(r.jsx)("div",{className:"banner-sub-heading",children:"Abdulkareem Al-deek"}),Object(r.jsxs)("h4",{className:"kayo-work-description",children:["\xa0",Object(r.jsx)("span",{className:"kayo-work",ref:e}),Object(r.jsx)("span",{className:"typed-cursor "})]}),Object(r.jsxs)("div",{className:"button2 mt-3",children:[Object(r.jsxs)(l.b,{className:" btn-banner btn1",to:"/contact",children:[Object(r.jsx)("i",{className:"fa fa-rocket",children:" "})," Hire Me"," "]}),Object(r.jsxs)("a",{className:" btn-banner btn2",href:"https://drive.google.com/uc?export=download&id=1X0SLxdlUedSkrxQ1SdCl3D5ot0Z-kcxa",children:[Object(r.jsx)("i",{className:"fa fa-download",children:" "})," My Resume"," "]})]})]})})})})},w=function(){return Object(r.jsx)(a.a.Fragment,{children:Object(r.jsx)("section",{id:"about",children:Object(r.jsx)("div",{className:" overlay2",children:Object(r.jsxs)("div",{className:"container-flex",children:[Object(r.jsx)("div",{className:"about-img   ",children:Object(r.jsx)("img",{src:"https://deek.codes/assets/images/about-img.jpg",width:"330",height:"440",alt:"",srcSet:""})}),Object(r.jsx)("div",{className:"about-img-floid",children:Object(r.jsx)("img",{src:"https://deek.codes/assets/images/about-img.jpg",width:"200",height:"440",alt:"",srcSet:""})}),Object(r.jsxs)("div",{className:"text-intro ",children:[Object(r.jsx)("h3",{children:"HELLO,"}),Object(r.jsxs)("p",{className:"about-text",children:["I am interested in"," ",Object(r.jsx)("span",{style:{fontWeight:"700"},children:" web development "}),"and computer science I graduated from Al-Balqa' Applied University with a ,"," ",Object(r.jsxs)("span",{style:{fontWeight:"700"},children:["very good grade"," "]})," in"," ",Object(r.jsx)("span",{style:{fontWeight:"700"},children:"Computer Science"})," , I love creating websites, learning new technologies, and sharing my knowledge with others. I have high energy to add, great value to offer, a teamwork spirit, and a passion for website development. I have leadership qualities, control qualities, and abilities for self-learning."]})]})]})})})})},y=[{id:1,title:"Web Design",desc:"Re build your website in modern design.",icon:"fa fa-desktop"},{id:2,title:"Mobile Application",desc:"Re build your Apps in modern design.",icon:"fa fa-mobile-alt"},{id:3,title:"Wordpress",desc:"Re build your website in modern design.",icon:"fab fa-wordpress"}],S=function(){return Object(r.jsx)(a.a.Fragment,{children:Object(r.jsx)("section",{id:"services",children:Object(r.jsx)("div",{className:"services-img",children:Object(r.jsxs)("div",{className:"overlay",id:"overlay-light",children:[Object(r.jsx)("h3",{children:"Services"}),Object(r.jsx)("div",{className:"container-flex",children:Object(r.jsx)("div",{className:"serv-content",children:y.map((function(e,s){return Object(r.jsxs)("div",{className:"card",children:[Object(r.jsx)("div",{className:"card-icon",children:Object(r.jsx)("i",{className:e.icon})}),Object(r.jsxs)("div",{className:"box",children:[Object(r.jsx)("div",{className:"text",children:e.title}),Object(r.jsx)("p",{children:e.desc})]})]},s.id)}))})})]})})})})},E=function(){return Object(r.jsxs)("div",{children:[Object(r.jsx)(k,{}),Object(r.jsx)(w,{}),Object(r.jsx)(S,{})]})},C=(c(20),[{id:1,title:"ADDRESS",desc:"Irbid, Jordan",icon:"fa fa-map-marker-alt"},{id:2,title:"EMAIL",desc:"abdelkarim.aldeek@gmail.com",icon:"fa fa-envelope"},{id:3,title:"PHONE",desc:"+962-778-123-123",icon:"fa fa-phone"}]),A=function(){return Object(r.jsx)(a.a.Fragment,{children:Object(r.jsx)("section",{id:"services",children:Object(r.jsx)("div",{className:"services-img",children:Object(r.jsxs)("div",{className:"overlay",id:"overlay-light",children:[Object(r.jsx)("div",{className:"container-flex",children:Object(r.jsx)("div",{className:"serv-content",children:C.map((function(e,s){return Object(r.jsx)("div",{className:"card",children:Object(r.jsxs)("div",{className:"box",children:[Object(r.jsx)("i",{className:e.icon}),Object(r.jsx)("div",{className:"text",children:e.title}),Object(r.jsx)("p",{children:e.desc})]})},s.id)}))})}),Object(r.jsx)("div",{className:"contact-form bg-img",id:"contact",children:Object(r.jsxs)("div",{className:"container",children:[Object(r.jsx)("div",{className:"mrkayo-main-title"}),Object(r.jsx)("div",{className:"row",children:Object(r.jsx)("div",{className:"col-lg-8 col-lg-offset-2 col-md-12 col-md-offset-0 col-sm-10 col-sm-offset-1 mx-auto con-form",children:Object(r.jsxs)("form",{className:"kayo-form",action:"",method:"post",id:"contact-form",children:[Object(r.jsxs)("div",{className:"input-row",children:[Object(r.jsx)("div",{className:"form-group",children:Object(r.jsx)("input",{className:"form-control",type:"text",id:"subject",placeholder:"Subject",name:"subject"})}),Object(r.jsx)("div",{className:"form-group",children:Object(r.jsx)("input",{className:"form-control",type:"text",id:"fullName",placeholder:"Your Full Name",name:"name"})})]}),Object(r.jsxs)("div",{className:"input-row",children:[Object(r.jsx)("div",{className:"form-group",children:Object(r.jsx)("input",{className:"form-control",type:"text",id:"email",placeholder:"E-mail",name:"email"})}),Object(r.jsx)("div",{className:"form-group",children:Object(r.jsx)("input",{className:"form-control",type:"text",id:"phone",placeholder:"phone",name:"phone"})})]}),Object(r.jsx)("div",{className:"form-group",children:Object(r.jsx)("textarea",{className:"form-control",id:"message",placeholder:"Your Message ..",name:"message"})}),Object(r.jsx)("div",{children:Object(r.jsxs)("button",{className:"btn kayo-btn-1 btn-block btn-rgba",type:"submit",children:[Object(r.jsx)("i",{className:"fa fa-send-o"})," Send Your Message"]})})]})})})]})})]})})})})},D=(c(21),function(){var e=Object(t.useState)("dark"),s=Object(m.a)(e,2),c=s[0],a=s[1],i=Object(t.useState)(!1),n=Object(m.a)(i,2),l=n[0],o=n[1];return Object(r.jsx)("div",{className:"toggle-theme",children:Object(r.jsx)("button",{onClick:function(){document.querySelector("body").classList.toggle("dark-theme"),o(!l),a(l?"dark":"light")},children:"dark"===c?"Light":"Dark"})})}),L=(c(22),function(){var e=Object(t.useState)(!1),s=Object(m.a)(e,2),c=s[0],a=s[1];return window.addEventListener("scroll",(function(){var e=document.documentElement.scrollTop,s=document.body.scrollTop;e>20||s>20?a(!0):e<=20&&a(!1)})),Object(r.jsx)("div",{className:"scrollTopBtn",onClick:function(){window.scrollTo({top:0,behavior:"smooth"})},style:{display:c?"block":"none"},children:Object(r.jsx)("i",{className:"fas fa-arrow-up"})})});var F=function(){return Object(r.jsx)(l.a,{children:Object(r.jsxs)(a.a.Fragment,{children:[Object(r.jsx)(d,{}),Object(r.jsx)(D,{}),Object(r.jsx)(L,{}),Object(r.jsxs)(v.c,{children:[Object(r.jsx)(v.a,{path:"/",element:Object(r.jsx)(E,{})}),Object(r.jsx)(v.a,{path:"/works",element:Object(r.jsx)(O,{})}),Object(r.jsx)(v.a,{path:"/reviews",element:Object(r.jsx)(f,{})}),Object(r.jsx)(v.a,{path:"/contact",element:Object(r.jsx)(A,{})})]}),Object(r.jsx)(j,{})]})})},I=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,24)).then((function(s){var c=s.getCLS,t=s.getFID,a=s.getFCP,i=s.getLCP,n=s.getTTFB;c(e),t(e),a(e),i(e),n(e)}))};n.a.render(Object(r.jsx)(a.a.StrictMode,{children:Object(r.jsx)(F,{})}),document.getElementById("root")),I()}],[[23,1,2]]]);
//# sourceMappingURL=main.d539cec4.chunk.js.map
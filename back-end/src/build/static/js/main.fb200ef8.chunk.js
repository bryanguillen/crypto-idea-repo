(this["webpackJsonpfront-end"]=this["webpackJsonpfront-end"]||[]).push([[0],{126:function(e,t,n){},128:function(e,t,n){},129:function(e,t,n){},130:function(e,t,n){},231:function(e,t,n){},232:function(e,t,n){},233:function(e,t,n){},234:function(e,t,n){},235:function(e,t,n){"use strict";n.r(t);var a=n(2),c=n.n(a),o=n(45),s=n.n(o),i=(n(95),n(23)),r=n.n(i),l=n(46),d=n(4),u=n(5),b=n(16),h=n.n(b),j=n(31),m=n.n(j),p=(n(126),n(1));function x(){return Object(p.jsxs)("div",{className:"countdown-container",children:[Object(p.jsx)("div",{className:"header-2-bold",children:"Next Giveaway: 05/15/21 @ 12 PM EST"}),Object(p.jsx)("div",{className:"header-2-bold",children:"Prize: 50$ (USD) In ADA or BTC (your choice)"})]})}var O=n(0),v=n(7);n(128);function f(e){var t=e.context,n=e.description,a=e.title,c=e.upvoteIdea,o=e.downvoteIdea,s=e.numUpvotes,i=e.upvoted;return Object(p.jsxs)("div",{className:"idea",children:[Object(p.jsx)("div",{className:"header-2-bold",children:a}),Object(p.jsxs)("div",{className:"idea-section",children:[Object(p.jsx)("div",{className:"idea-section-header",children:"What dApp do you wish existed?"}),Object(p.jsx)("div",{className:"idea-section-text",children:n})]}),Object(p.jsxs)("div",{className:"idea-section",children:[Object(p.jsx)("div",{className:"idea-section-header",children:"Why?"}),Object(p.jsx)("div",{className:"idea-section-text",children:t})]}),Object(p.jsxs)("div",{className:"idea-upvote-button-container",children:[Object(p.jsx)(O.b.Provider,{value:{color:i?"#1DA1F2":"#ffffff",size:"3rem"},children:Object(p.jsx)(v.a,{className:"idea-upvote-button",onClick:function(){i?o():c()}})}),Object(p.jsx)("span",{className:"idea-upvote-count",children:s})]})]})}n(129);function N(e){return Object(p.jsxs)(m.a,{className:e.className?e.className:"",isOpen:e.isOpen,onRequestClose:e.closeModal,style:{content:{background:"#000000 none repeat scroll 0% 0%"}},children:[Object(p.jsx)("div",{className:"close-modal-button-container",children:Object(p.jsx)(O.b.Provider,{value:{size:"5rem"},children:Object(p.jsx)(v.b,{className:"close-modal-button",onClick:e.closeModal})})}),Object(p.jsx)("div",{className:"modal-content-container",children:e.children})]})}function y(e){return Object(p.jsxs)(N,{closeModal:e.closeModal,isOpen:e.isOpen,children:[Object(p.jsx)("div",{className:"modal-header header-2-bold",children:"Welcome"}),Object(p.jsx)("div",{className:"header-3-bold",children:"Site Mission"}),Object(p.jsx)("p",{className:"modal-content-body-text",children:"To help serve as a repository for dApps.  A repository that will help give developers, in the ecosystem, clues on what to build to further facilitate the mass adoption of crypto.  Through this, investors and developers could greatly benefit."}),Object(p.jsx)("div",{className:"header-3-bold",children:"How It Works"}),Object(p.jsxs)("ul",{children:[Object(p.jsx)("li",{children:"Viewing Ideas: Checkout ideas submitted by other community members.  You could also upvote those that you like, which helps validate which projects should be worked on.  Note: There is no login functionality, so what this means is that if you like an idea and refresh the page, you will notice that you can upvote it again.  Currently, we do not want to support accounts."}),Object(p.jsx)("li",{children:"Submitting Ideas: Share a project you think would be cool to invest in and can add value to the space."}),Object(p.jsx)("li",{children:"Win Crypto: Submit an idea and share the link generated on crypto twitter or wherever you would like."})]}),Object(p.jsx)("div",{className:"header-3-bold",children:"Prizes"}),Object(p.jsx)("div",{className:"modal-content-body-text",children:"I like to give out BTC, ADA, or whatever else seems like a good bet.  Checkout the giveaway board on the home page to see what will be given away (hint: you can choose between two or more)."}),Object(p.jsx)("div",{className:"header-3-bold",children:"How To Win Prizes"}),Object(p.jsxs)("ul",{children:[Object(p.jsx)("li",{children:"Get Started: Submit an idea"}),Object(p.jsx)("li",{children:"Start Earning Points: Share the link generated, once idea is submitted, with your friends on social media.  For every person who visits with that link, you earn a point."})]}),Object(p.jsx)("div",{className:"header-3-bold",children:"Contact"}),Object(p.jsx)("p",{className:"modal-content-body-text",children:"Send an email to: admin@prequalie.com if you have any questions"})]})}n(130);function w(e){return Object(p.jsxs)("div",{className:"secondary-navigation",children:[Object(p.jsx)("button",{className:"secondary-navigation-button secondary-navigation-button-help",children:Object(p.jsx)(O.b.Provider,{value:{size:"2rem",color:"#1DA1F2"},children:Object(p.jsx)(v.d,{onClick:e.openIntroModal})})}),Object(p.jsx)("button",{className:"secondary-navigation-button secondary-navigation-button-create-idea",children:Object(p.jsx)(O.b.Provider,{value:{size:"2rem",color:"#ffffff"},children:Object(p.jsx)(v.f,{onClick:e.openCreateModal})})})]})}var k=n(22),C=n(17),g=n(237),S=n(24),I=n(90);n(231);function M(e){var t=e.label,n=e.useTextArea,a=e.useCharacterCount,c=e.maxCount,o=(e.className,Object(I.a)(e,["label","useTextArea","useCharacterCount","maxCount","className"])),s=Object(k.c)(o),i=Object(u.a)(s,2),r=i[0],l=i[1];return Object(p.jsxs)("div",{className:"text-input-container text-input-container-".concat(o.id||o.name),children:[Object(p.jsx)("label",{className:"text-input-label",htmlFor:o.id||o.name,children:t}),l.touched&&l.error?Object(p.jsx)("div",{className:"text-input-error",children:l.error}):null,n?Object(p.jsx)("textarea",Object(S.a)(Object(S.a)({className:"form-control text-area"},r),o)):Object(p.jsx)("input",Object(S.a)(Object(S.a)({className:"form-control text-input"},r),o)),a?Object(p.jsxs)("div",{className:"form-control-character-count",children:[-(r.value.length-c)," / ",c]}):null]})}M.defaultProps={className:""};n(232);function A(e){return Object(p.jsx)(N,{closeModal:e.closeModal,isOpen:e.isOpen,children:e.formSubmitted?Object(p.jsx)(P,{link:e.link}):Object(p.jsx)(T,{onSubmit:e.onSubmit})})}function T(e){return Object(p.jsx)(k.b,{initialValues:{title:"",description:"",context:"",email:""},validationSchema:C.a({title:C.b().max(60,"Can be no more than 60 characters").required("Required"),description:C.b().max(250,"Can be no more than 250 characters").required("Required"),context:C.b().max(250,"Can be no more than 250 characters").required("Required"),email:C.b().email("Invalid email address").required("Required")}),onSubmit:e.onSubmit,children:function(e){var t=e.isSubmitting;return Object(p.jsxs)(k.a,{children:[Object(p.jsx)(M,{label:"Title",name:"title",placeholder:"Moneycake Swap"}),Object(p.jsx)(M,{label:"What dApp would you like to see built and invest in?",name:"description",placeholder:"Example: App that processes crypto payments",useTextArea:!0,useCharacterCount:!0,maxCount:250}),Object(p.jsx)(M,{name:"context",label:"Why?  What problem would it solve for you?",placeholder:"Example: It would allow me to use ETH tokens",useTextArea:!0,useCharacterCount:!0,maxCount:250}),Object(p.jsx)(M,{label:"Email",name:"email",placeholder:"hodler@hodler.com"}),Object(p.jsx)("div",{className:"share-idea-modal-row-button",children:Object(p.jsx)("button",{className:"share-idea-modal-submit-button",children:t?"Submitting...":"Submit"})})]})}})}function P(e){var t=Object(a.useRef)(null);return Object(p.jsxs)("div",{className:"share-idea-post-submit-content",children:[Object(p.jsx)("div",{className:"header-2-bold modal-header",children:"Thanks!"}),Object(p.jsx)("p",{className:"modal-content-body-text",children:"Thanks for helping build the future of crypto!"}),Object(p.jsx)("div",{className:"header-3-bold modal-sub-header",children:"Link"}),Object(p.jsx)("p",{className:"modal-content-body-text",children:"Now that you've shared an idea, here is the link you can share to earn you points and put you in the running to earn some crypto:"}),Object(p.jsx)("input",{className:"share-link-text-input",readOnly:!0,ref:t,value:e.link}),Object(p.jsx)("div",{className:"header-3-bold modal-sub-header",children:"Copy And Share The Link"}),Object(p.jsx)("div",{className:"share-link-buttons-container",children:Object(p.jsxs)(O.b.Provider,{value:{size:"3rem",color:"#1DA1F2"},children:[Object(p.jsxs)(g.a,{className:"share-link-button",title:"PreQualie - Share dApp Ideas",url:e.link,children:[Object(p.jsx)("span",{className:"share-link-button-icon",children:Object(p.jsx)(v.e,{})}),Object(p.jsx)("span",{className:"share-link-button-text",children:"Twitter"})]}),Object(p.jsxs)("button",{className:"share-link-button share-link-button-second",onClick:function(){return t.current.focus(),t.current.select(),void document.execCommand("copy")},children:[Object(p.jsx)("span",{className:"share-link-button-icon",children:Object(p.jsx)(v.c,{})}),Object(p.jsx)("span",{className:"share-link-button-text",children:"Copy Link"})]})]})})]})}n(233);function q(e){return Object(p.jsxs)("div",{className:"welcome-container",children:[Object(p.jsx)("div",{className:"header-2-bold",children:"Hodlers, Help Build the Future of Crypto."}),Object(p.jsxs)("div",{className:"welcome-container-buttons-container",children:[Object(p.jsx)("button",{className:"welcome-container-button welcome-container-button-start",onClick:function(){return e.openIntroModal()},children:"New? Start Here"}),Object(p.jsx)("button",{className:"welcome-container-button welcome-container-button-share",onClick:function(){return e.openShareIdeaModal()},children:"Share Idea"})]})]})}n(234);function E(e){return Object(p.jsx)("div",{className:"ideas",children:e.ideas.map((function(t){return Object(p.jsx)(f,{context:t.context,description:t.description,downvoteIdea:function(){return e.handleUpvoteClick(t.id,!1)},title:t.title,upvoteIdea:function(){return e.handleUpvoteClick(t.id,!0)},numUpvotes:t.upvotes,upvoted:t.upvoted},t.id)}))})}var F=function(){var e=Object(a.useState)([]),t=Object(u.a)(e,2),n=t[0],c=t[1],o=Object(a.useState)(0),s=Object(u.a)(o,2),i=s[0],b=s[1],j=Object(a.useState)(!1),O=Object(u.a)(j,2),v=O[0],f=O[1],N=Object(a.useState)("null"),k=Object(u.a)(N,2),C=k[0],g=k[1],S=Object(a.useState)(!0),I=Object(u.a)(S,2),M=I[0],T=I[1],P=Object(a.useState)(!0),F=Object(u.a)(P,2),W=F[0],z=F[1],R=Object(a.useState)(!1),D=Object(u.a)(R,2),H=D[0],U=D[1],L=Object(a.useState)(""),B=Object(u.a)(L,2),G=B[0],J=B[1],V=Object(a.useRef)(null);function Q(){return(Q=Object(l.a)(r.a.mark((function e(t,a){var o,s,i;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,o=Object(d.a)(n),s=o.findIndex((function(e){return e.id===t})),i=o[s].upvotes,o[s].upvoted=a,o[s].upvotes=a?i+1:i-1,!a){e.next=11;break}return e.next=9,h.a.put("/ideas/".concat(t,"/upvote"));case 9:e.next=13;break;case 11:return e.next=13,h.a.put("/ideas/".concat(t,"/downvote"));case 13:c(o),e.next=19;break;case 16:throw e.prev=16,e.t0=e.catch(0),e.t0;case 19:case"end":return e.stop()}}),e,null,[[0,16]])})))).apply(this,arguments)}function Y(){return(Y=Object(l.a)(r.a.mark((function e(t,n){var a,o,s;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=n.setSubmitting,e.prev=1,a(!0),e.next=5,h.a.post("/ideas",t);case 5:o=e.sent,s=o.data,a(!1),J("https://prequalie.com?ref=".concat(s.results.user.idHash)),c((function(e){return[s.results.idea].concat(Object(d.a)(e))})),e.next=16;break;case 12:throw e.prev=12,e.t0=e.catch(1),a(!1),e.t0;case 16:case"end":return e.stop()}}),e,null,[[1,12]])})))).apply(this,arguments)}return m.a.setAppElement("#root"),Object(a.useEffect)((function(){h.a.get("/ideas?lid=".concat(C)).then((function(e){var t=e.data.results;c((function(e){return[].concat(Object(d.a)(e),Object(d.a)(t))})),g(t[t.length-1].id),z(10===t.length),M&&T(!1)})).catch((function(){T(!1)}))}),[i]),Object(a.useEffect)((function(){var e=new URLSearchParams(window.location.search).get("ref");e&&h.a.put("/users",{ref:e}).catch((function(e){return console.log(e)}))}),[]),M?Object(p.jsx)("div",{children:"loading..."}):Object(p.jsxs)("div",{className:"app",children:[Object(p.jsx)(w,{openIntroModal:function(){return f(!0)},openCreateModal:function(){return U(!0)}}),Object(p.jsx)(y,{closeModal:function(){return f(!1)},isOpen:v}),Object(p.jsx)(A,{closeModal:function(){U(!1),J("")},formSubmitted:""!==G,isOpen:H,link:G,onSubmit:function(e,t){return Y.apply(this,arguments)}}),Object(p.jsx)(q,{openIntroModal:function(){return f(!0)},openShareIdeaModal:function(){return U(!0)}}),Object(p.jsx)(x,{}),Object(p.jsx)(E,{handleUpvoteClick:function(e,t){return Q.apply(this,arguments)},ideas:n}),W?Object(p.jsx)("div",{ref:function(e){var t;null!==e&&null===V.current&&(V.current=e,t=e,new IntersectionObserver((function(e){e.forEach((function(e){e.isIntersecting&&b((function(e){return e+1}))}))})).observe(t))}}):null]})},W=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,238)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,o=t.getLCP,s=t.getTTFB;n(e),a(e),c(e),o(e),s(e)}))};s.a.render(Object(p.jsx)(c.a.StrictMode,{children:Object(p.jsx)(F,{})}),document.getElementById("root")),W()},95:function(e,t,n){}},[[235,1,2]]]);
//# sourceMappingURL=main.fb200ef8.chunk.js.map
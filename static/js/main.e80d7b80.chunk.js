(this["webpackJsonporder-pro"]=this["webpackJsonporder-pro"]||[]).push([[0],{76:function(e,t,n){},77:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n(39),r=n.n(a),s=n(7),o=n(6),i=n(17),l=Object(c.createContext)({}),j=function(e,t){var n=Object(c.useState)((function(){try{var n=localStorage.getItem(e);return n?JSON.parse(n):t}catch(c){return t}})),a=Object(s.a)(n,2),r=a[0],o=a[1];return Object(c.useEffect)((function(){localStorage.setItem(e,JSON.stringify(r))}),[e,r]),[r,o]},u=(n(47),function(){var e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;e&&"/".concat(e);return new Promise((function(){}),(function(){console.log(1)}))}),d=n(1),b=function(e){var t=e.nav;if(!t)return null;var n=Object(s.a)(t,2),c=n[0],a=n[1];return Object(d.jsx)("nav",{className:"navbar bg-primary navBar"+a,children:c})},O=function(e){var t=e.head;if(!t)return null;var n=Object(s.a)(t,2),c=n[0],a=n[1];return Object(d.jsx)("header",{className:"font-weight-bold p-2 m-2 "+a,children:Object(d.jsx)("h2",{children:c})})},m=function(e){var t=e.Class,n=e.Content;return Object(d.jsx)("div",{className:t,children:n})},p=function(e){var t=e.Class,n=e.Content,c=e.to;return Object(d.jsx)("a",{className:"text-decoration-none "+t,href:c,children:n})},h=n(15),x=n.n(h),f=n(20),v=function(){var e=Object(c.useContext)(l),t=e.setNav,n=e.setHead,a=[[Object(d.jsx)(m,{Class:"logo m-3 mt-0 p-5"}),Object(d.jsx)(m,{Content:"Order Pro",Class:"mb-1"})]," flex-column align-content-start"];return Object(c.useLayoutEffect)((function(){t(a),n()})),Object(d.jsx)("header",{children:Object(d.jsxs)("div",{className:"links",children:[Object(d.jsx)(p,{to:"/login",Content:"Home",Class:"link icon-home"}),Object(d.jsx)(p,{to:"/add",Class:"link icon-notepad",Content:"Order entry"}),Object(d.jsx)(p,{to:"/add",Class:"link icon-notepad",Content:"Receipt entry"}),Object(d.jsx)(p,{to:"/orders",Class:"link icon-pad",Content:"Order history"}),Object(d.jsx)(p,{to:"/orders",Class:"link icon-pad",Content:"Receipt history"}),Object(d.jsx)(p,{to:"/",Class:"link icon-refresh",Content:"Refresh data"}),Object(d.jsx)(p,{to:"/login",Class:"link icon-power",Content:"Logout"})]})})},C=n(14),y=n(16),N=n(78),g=n(80),w=function(){var e=Object(c.useContext)(l),t=e.handleLogin,n=e.setNav,a=e.setHead,r=Object(c.useState)(""),o=Object(s.a)(r,2),i=o[0],j=o[1],u=Object(c.useState)({username:"",password:""}),b=Object(s.a)(u,2),O=b[0],p=b[1],h=[[Object(d.jsx)(m,{Class:"logo mx-5"}),Object(d.jsx)(m,{Content:"webinfosoftwares@gmail.com",Class:"mx-5"}),Object(d.jsx)(m,{Content:"9387303270",Class:""})]," justify-content-center py-5"],x=["Welcome!","text-primary"];Object(c.useLayoutEffect)((function(){n(h),a(x)}));var f=function(e){var t=e.target,n=t.name,c=t.value;p((function(e){return Object(y.a)(Object(y.a)({},e),{},Object(C.a)({},n,c))}))};return Object(d.jsxs)("div",{className:"main-form",children:[i&&Object(d.jsx)("p",{className:"errorMsg",children:i}),Object(d.jsxs)(N.a,{onSubmit:function(e){e.preventDefault();var n="";Object.values(O).every((function(e){return""!=="".concat(e).trim()}))?(console.log(O),t(O)):n="Please fill out all the fields.",j(n)},children:[Object(d.jsx)(N.a.Group,{children:Object(d.jsx)(N.a.Control,{className:"icon-people input-control",value:O.username,placeholder:"Username",onChange:f,name:"username"})}),Object(d.jsx)(N.a.Group,{children:Object(d.jsx)(N.a.Control,{className:"icon-password input-control",type:"password",value:O.password,placeholder:"Password",onChange:f,name:"password"})}),Object(d.jsx)(g.a,{variant:"default",type:"submit",className:"d-inline-flex justify-content-center border border-primary text-primary submit-btn",children:"Login"})]})]})},S=n(21),k=function(e){var t=e.orderToEdit,n=e.handleOnSubmit,a=e.setNav,r=e.setHead,o=e.history;Object(c.useLayoutEffect)((function(){var e=[Object(d.jsx)(g.a,{className:"icon-back",onClick:function(){o.goBack()}}),Object(d.jsx)(m,{Content:"ACCOUNT DETAILS",Class:""}),Object(d.jsx)(m,{Content:""})];a([e,"justify-content-between py-3"]),r(["Heading","font-weight-bold"])}));var i=Object(c.useState)(null!==t&&void 0!==t?t:{id:"",customerName:"",customerDetails:"",date:"",discount:"",amount:"",time:""}),l=Object(s.a)(i,2),j=l[0],u=l[1],b=Object(c.useState)(""),O=Object(s.a)(b,2),p=O[0],h=O[1],x=function(e){var t=e.target,n=t.name,c=t.value;u((function(e){return Object(y.a)(Object(y.a)({},e),{},Object(C.a)({},n,c))}))};return Object(d.jsxs)("div",{className:"main-form",children:[p&&Object(d.jsx)("p",{className:"errorMsg",children:p}),Object(d.jsxs)(N.a,{onSubmit:function(e){e.preventDefault();var t="";Object.values(j).every((function(e){return""!=="".concat(e).trim()}))?n(j):t="Please fill out all the fields.",h(t)},children:[Object(d.jsx)(N.a.Group,{children:Object(d.jsx)(N.a.Control,{className:"icon-menu input-control",type:"number",value:j.id,placeholder:"Order Number",onChange:x,name:"id"})}),Object(d.jsx)(N.a.Group,{children:Object(d.jsx)(N.a.Control,{className:"input-control",type:"date",value:j.date,placeholder:"Date",onChange:x,name:"date"})}),Object(d.jsx)(N.a.Group,{children:Object(d.jsx)(N.a.Control,{className:"input-control icon-time",type:"time",value:j.time,placeholder:"Time",onChange:x,name:"time"})}),Object(d.jsx)(N.a.Group,{children:Object(d.jsx)(N.a.Control,{className:"icon-people input-control",type:"text",value:j.customerName,placeholder:"Customer Name",onChange:x,name:"customerName"})}),Object(d.jsx)(N.a.Group,{children:Object(d.jsx)(N.a.Control,{className:"icon-hamburger input-control",value:j.customerDetails,placeholder:"Customer Details",onChange:x,type:"text",name:"customerDetails"})}),Object(d.jsx)(N.a.Group,{children:Object(d.jsx)(N.a.Label,{className:"icon-plus input-control py-2 px-3 text-primary",children:"Add an item"})}),Object(d.jsx)(N.a.Group,{children:Object(d.jsx)(N.a.Control,{className:"icon-discount input-control",type:"number",value:j.discount,placeholder:"Discount",onChange:x,name:"discount"})}),Object(d.jsx)(N.a.Group,{children:Object(d.jsx)(N.a.Control,{className:"icon-amount input-control",type:"number",value:j.amount,placeholder:"Total Amount",onChange:x,name:"amount"})}),Object(d.jsx)(g.a,{variant:"default",type:"submit",className:"d-inline-flex justify-content-center border border-primary text-primary submit-btn",children:"Submit"})]})]})},E=function(e){var t=e.history,n=Object(c.useContext)(l),a=n.orders,r=n.setOrders,s=n.api,o=n.setNav,i=n.setHead,j=function(){var e=Object(f.a)(x.a.mark((function e(n){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r([].concat(Object(S.a)(a),[n]));case 2:s("POST",n),t.push("/");case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(d.jsx)(c.Fragment,{children:Object(d.jsx)(k,{handleOnSubmit:j,setNav:o,setHead:i,history:t})})},H=n(40),D=n.n(H),G=n(79),P=function(e){var t=e.order,n=(e.handleRemoveOrder,Object(o.g)()),c=t.id,a=(t.time,t.date),r=t.customerName;t.customerDetails;return Object(d.jsx)(G.a,{style:{width:"18rem"},className:"order",children:Object(d.jsxs)(G.a.Body,{children:[Object(d.jsx)(G.a.Title,{className:"order-title",children:c}),Object(d.jsxs)("div",{className:"order-details",children:[Object(d.jsx)("div",{children:r}),Object(d.jsx)("div",{children:a}),Object(d.jsx)(g.a,{className:"icon-back",onClick:function(){n.goBack()}})]})]})})},T=function(){var e=Object(c.useContext)(l),t=e.orders,n=(e.setOrders,e.api,e.setNav),a=e.setHead,r=e.history;return Object(c.useEffect)((function(){var e=[Object(d.jsx)(p,{Class:"icon-list"}),Object(d.jsx)(g.a,{type:"submit",className:"rounded border-white px-4 py-1",onClick:function(){return r.push("/")},children:"PUNCH OUT"})];n([e,"justify-content-between"]),a(["",""])})),Object(d.jsx)(c.Fragment,{children:Object(d.jsx)("div",{className:"order-list",children:D.a.isEmpty(t)?Object(d.jsx)("p",{className:"message",children:"No Orders Yet"}):t.map((function(e){return Object(d.jsx)(P,{order:e},e.id)}))})})},L=function(e){var t=e.history,n=Object(c.useContext)(l),a=n.orders,r=n.setOrders,s=n.api,i=n.setNav,j=Object(o.h)().id,u=a.find((function(e){return e.id==j}));return Object(c.useEffect)((function(){return i(["",""])})),Object(d.jsx)("div",{children:Object(d.jsx)(k,{orderToEdit:u,handleOnSubmit:function(e){var n=a.filter((function(e){return e.id!=j}));r([e].concat(Object(S.a)(n))),s("PATCH",e,j),t.push("/")}})})},A=function(){var e=j("orders",[]),t=Object(s.a)(e,2),n=t[0],a=t[1],r=Object(c.useRef)(["",""]),m=Object(c.useRef)(["",""]),p=Object(c.useState)(!1),h=Object(s.a)(p,2),x=(h[0],h[1]),f=Object(c.useState)(!1),C=Object(s.a)(f,2),y=(C[0],C[1]),N=Object(o.g)(),g=Object(c.useState)(["",""]),S=Object(s.a)(g,2);S[0],S[1];Object(c.useEffect)((function(){u().then((function(e){if(500!==e.status){var t=e.data;a(t)}})),console.log("PIA")}));return Object(d.jsx)(i.a,{children:Object(d.jsxs)("div",{children:[Object(d.jsx)(b,{nav:r.current}),Object(d.jsx)(O,{head:m.current}),Object(d.jsx)("div",{className:"main-content",children:Object(d.jsx)(l.Provider,{value:{orders:n,setOrders:a,api:u,setNav:function(e){r.current=e,x(!0)},setHead:function(e){m.current=e,x(!0)},handleLogin:function(e){y(!0),N.push("/")},history:N},children:Object(d.jsxs)(o.d,{children:[Object(d.jsx)(o.b,{component:v,path:"/",exact:!0}),Object(d.jsx)(o.b,{component:E,path:"/add"}),Object(d.jsx)(o.b,{component:T,path:"/orders"}),Object(d.jsx)(o.b,{component:L,path:"/edit/:id"}),Object(d.jsx)(o.b,{component:w,path:"/login"}),Object(d.jsx)(o.b,{path:"*",component:function(){return Object(d.jsx)(o.a,{to:"/"})}})]})})})]})})};n(75),n(76);r.a.render(Object(d.jsx)(A,{}),document.getElementById("root"))}},[[77,1,2]]]);
//# sourceMappingURL=main.e80d7b80.chunk.js.map
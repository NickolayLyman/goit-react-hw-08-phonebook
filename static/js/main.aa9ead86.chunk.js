(this["webpackJsonpgoit-react-hw-08-phonebook"]=this["webpackJsonpgoit-react-hw-08-phonebook"]||[]).push([[2],{107:function(t,e,n){},109:function(t,e,n){"use strict";n.r(e);var r,c,a,u,s,i,o,b,j=n(0),O=n.n(j),f=n(33),l=n.n(f),d=n(20),g=n(61),h=n(17),p=n(26),v=n(5),x=n(24),m=n(65),k=n.n(m),y=n(66),S=n.n(y),C=n(3),E=n(9),I=n(6),R={items:[],filter:"",isLoading:!1,error:""},w=Object(v.c)(R.items,(r={},Object(C.a)(r,I.j,(function(t,e){return e.payload})),Object(C.a)(r,I.c,(function(t,e){var n=e.payload;return[].concat(Object(p.a)(t),[n])})),Object(C.a)(r,I.g,(function(t,e){var n=e.payload;return t.filter((function(t){return t.id!==n}))})),Object(C.a)(r,I.n,(function(t,e){var n=e.payload;return t.forEach((function(t){return t.id===n.id?n:t}))})),r)),U=Object(v.c)(R.filter,Object(C.a)({},I.d,(function(t,e){return e.payload}))),q=Object(v.c)(R.isLoading,(c={},Object(C.a)(c,I.m,(function(){return!0})),Object(C.a)(c,I.n,(function(){return!1})),Object(C.a)(c,I.l,(function(){return!1})),Object(C.a)(c,I.i,(function(){return!0})),Object(C.a)(c,I.j,(function(){return!1})),Object(C.a)(c,I.h,(function(){return!1})),Object(C.a)(c,I.b,(function(){return!0})),Object(C.a)(c,I.c,(function(){return!1})),Object(C.a)(c,I.a,(function(){return!1})),Object(C.a)(c,I.f,(function(){return!0})),Object(C.a)(c,I.g,(function(){return!1})),Object(C.a)(c,I.e,(function(){return!1})),c)),L=Object(v.c)(R.error,(a={},Object(C.a)(a,I.h,(function(t,e){return e.payload})),Object(C.a)(a,I.a,(function(t,e){return e.payload})),Object(C.a)(a,I.e,(function(t,e){return e.payload})),Object(C.a)(a,I.l,(function(t,e){return e.payload})),Object(C.a)(a,I.k,(function(t,e){return e.payload})),a)),T=Object(E.c)({items:w,filter:U,isLoading:q,error:L}),z=n(4),A={name:null,email:null},B=null,W=!1,P=null,D=!1,F=Object(v.c)(A,(u={},Object(C.a)(u,z.a.registrationSuccess,(function(t,e){return e.payload.user})),Object(C.a)(u,z.a.signInSuccess,(function(t,e){return e.payload.user})),Object(C.a)(u,z.a.signOutSuccess,(function(){return A})),Object(C.a)(u,z.a.getCurrentUserSuccess,(function(t,e){return e.payload})),u)),J=Object(v.c)(B,(s={},Object(C.a)(s,z.a.registrationSuccess,(function(t,e){return e.payload.token})),Object(C.a)(s,z.a.signInSuccess,(function(t,e){return e.payload.token})),Object(C.a)(s,z.a.signOutSuccess,(function(){return null})),s)),M=Object(v.c)(D,(i={},Object(C.a)(i,z.a.registrationRequest,(function(){return!0})),Object(C.a)(i,z.a.registrationSuccess,(function(){return!1})),Object(C.a)(i,z.a.registrationError,(function(){return!1})),Object(C.a)(i,z.a.signInRequest,(function(){return!0})),Object(C.a)(i,z.a.signInSuccess,(function(){return!1})),Object(C.a)(i,z.a.signInError,(function(){return!1})),Object(C.a)(i,z.a.signOutRequest,(function(){return!0})),Object(C.a)(i,z.a.signOutSuccess,(function(){return!1})),Object(C.a)(i,z.a.signOutError,(function(){return!1})),Object(C.a)(i,z.a.getCurrentUserRequest,(function(){return!0})),Object(C.a)(i,z.a.getCurrentUserSuccess,(function(){return!1})),Object(C.a)(i,z.a.getCurrentUserError,(function(){return!1})),i)),H=function(t,e){return e.payload},N=Object(v.c)(P,(o={},Object(C.a)(o,z.a.registrationError,H),Object(C.a)(o,z.a.signInError,H),Object(C.a)(o,z.a.signOutError,H),Object(C.a)(o,z.a.getCurrentUserError,H),o)),G=Object(v.c)(W,(b={},Object(C.a)(b,z.a.registrationSuccess,(function(){return!0})),Object(C.a)(b,z.a.signInSuccess,(function(){return!0})),Object(C.a)(b,z.a.getCurrentUserSuccess,(function(){return!0})),Object(C.a)(b,z.a.registrationError,(function(){return!1})),Object(C.a)(b,z.a.signInError,(function(){return!1})),Object(C.a)(b,z.a.getCurrentUserError,(function(){return!1})),Object(C.a)(b,z.a.signOutSuccess,(function(){return!1})),b)),K=Object(E.c)({user:F,token:J,isSignedIn:G,error:N,isAuthLoading:M}),Q=[].concat(Object(p.a)(Object(v.d)({serializableCheck:{ignoredActions:[x.a,x.f,x.b,x.c,x.d,x.e]}})),[k.a]),V={key:"auth",storage:S.a,whitelist:["token"]},X=Object(v.a)({reducer:{auth:Object(x.g)(V,K),contacts:T},middleware:Q,devTools:!1}),Y=Object(x.h)(X),Z=n(8),$=n(128),_=n(2),tt=function(t){var e=t.children;return Object(_.jsxs)("div",{children:[e,Object(_.jsx)($.a,{})]})},et=n(22),nt=n(7),rt=n(27);function ct(t){var e=t.children,n=t.redirectTo,r=void 0===n?"/":n,c=Object(nt.a)(t,["children","redirectTo"]),a=Object(h.c)(rt.a.getIsSignIn);return Object(_.jsx)(Z.b,Object(et.a)(Object(et.a)({},c),{},{children:a?e:Object(_.jsx)(Z.a,{to:r})}))}var at=function(t){var e=t.children,n=t.restricted,r=void 0!==n&&n,c=t.redirectTo,a=void 0===c?"/":c,u=Object(nt.a)(t,["children","restricted","redirectTo"]),s=Object(h.c)(rt.a.getIsSignIn)&&r;return Object(_.jsx)(Z.b,Object(et.a)(Object(et.a)({},u),{},{children:s?Object(_.jsx)(Z.a,{to:a}):e}))},ut=n(34),st={link:{display:"inline-block",textDecoration:"none",padding:12,fontWeight:600,color:"green"},activeLink:{color:"red"}},it=function(){return Object(_.jsxs)("nav",{children:[Object(_.jsx)(d.b,{to:"/",exact:!0,style:st.link,activeStyle:st.activeLink,children:"Home"}),Object(_.jsx)(d.b,{to:"/contacts",exact:!0,style:st.link,activeStyle:st.activeLink,children:"Contacts"})]})},ot=n(49),bt={container:{display:"flex",alignItems:"center"},name:{fontWeight:700,marginRight:12}},jt=function(){var t=Object(h.b)(),e=Object(h.c)(rt.a.getUsername);return Object(_.jsxs)("div",{style:bt.container,children:[Object(_.jsxs)("span",{style:bt.name,children:["Welcome, ",e," "]}),Object(_.jsx)(ot.a,{type:"button",onClick:function(){return t(ut.a.signOut())},value:"Sign Out"})]})},Ot={link:{display:"inline-block",textDecoration:"none",padding:12,fontWeight:600,color:"green"},activeLink:{color:"red",fontSize:"24px"}},ft=function(){return Object(_.jsxs)("div",{children:[Object(_.jsx)(d.b,{to:"/register",exact:!0,style:Ot.link,activeStyle:Ot.activeLink,children:"Registration"}),Object(_.jsx)(d.b,{to:"/login",exact:!0,style:Ot.link,activeStyle:Ot.activeLink,children:"Sign In"})]})},lt={header:{display:"flex",justifyContent:"space-between",alignItems:"center",borderBottom:"1px solid red"}},dt=function(){var t=Object(h.c)(rt.a.getIsSignIn);return Object(_.jsxs)("header",{style:lt.header,children:[Object(_.jsx)(it,{}),t?Object(_.jsx)(jt,{}):Object(_.jsx)(ft,{})]})},gt=n(132),ht=n(133),pt=n(134),vt=Object(gt.a)((function(t){return{appBar:{top:"auto",bottom:0}}})),xt=function(){var t=vt();return Object(_.jsxs)(_.Fragment,{children:[Object(_.jsx)($.a,{}),Object(_.jsx)(ht.a,{color:"primary",className:t.appBar,children:Object(_.jsx)(pt.a,{})})]})},mt=n(50),kt=n(69),yt=n(135),St=Object(j.lazy)((function(){return n.e(10).then(n.bind(null,323))})),Ct=Object(j.lazy)((function(){return Promise.all([n.e(0),n.e(1),n.e(5),n.e(9)]).then(n.bind(null,324))})),Et=Object(j.lazy)((function(){return Promise.all([n.e(0),n.e(7)]).then(n.bind(null,326))})),It=Object(j.lazy)((function(){return Promise.all([n.e(0),n.e(1),n.e(8),n.e(6)]).then(n.bind(null,328))})),Rt=Object(kt.a)({palette:{primary:{main:"#011211"},secondary:{main:"#faa346"}}});function wt(){var t=Object(h.b)();return Object(j.useEffect)((function(){t(mt.a.fetchContacts(ut.a.fetchCurrentUser()))}),[t]),Object(_.jsx)(tt,{children:Object(_.jsxs)(yt.a,{theme:Rt,children:[Object(_.jsx)(dt,{}),Object(_.jsx)(Z.d,{children:Object(_.jsxs)(j.Suspense,{fallback:Object(_.jsx)("h2",{children:"Loading...."}),children:[Object(_.jsx)(at,{exact:!0,path:"/",children:Object(_.jsx)(St,{})}),Object(_.jsx)(at,{path:"/register",reddirectTo:"/",children:Object(_.jsx)(Ct,{})}),Object(_.jsx)(at,{path:"/login",reddirectTo:"/",children:Object(_.jsx)(Et,{})}),Object(_.jsx)(ct,{path:"/contacts",redirectTo:"/login",children:Object(_.jsx)(It,{})})]})}),Object(_.jsx)(xt,{})]})})}n(107),n(108);l.a.render(Object(_.jsx)(O.a.StrictMode,{children:Object(_.jsx)(h.a,{store:X,children:Object(_.jsx)(g.a,{loading:null,persistor:Y,children:Object(_.jsx)(d.a,{children:Object(_.jsx)(wt,{})})})})}),document.getElementById("root"))},27:function(t,e,n){"use strict";var r={getIsSignIn:function(t){return t.auth.isSignedIn},getUsername:function(t){return t.auth.user.name},getUserEmail:function(t){return t.auth.user.email},getToken:function(t){return t.auth.token},getIsAuthLoading:function(t){return t.auth.isAuthLoading},getErrorMessage:function(t){return t.auth.error}};e.a=r},34:function(t,e,n){"use strict";var r=n(11),c=n.n(r),a=n(21),u=n(14),s=n.n(u),i=n(4);s.a.defaults.baseURL="https://goit-phonebook-api.herokuapp.com";var o=function(t){s.a.defaults.headers.common.Authorization="Bearer ".concat(t)},b=function(){s.a.defaults.headers.common.Authorization=""},j={registration:function(t){return function(){var e=Object(a.a)(c.a.mark((function e(n){var r,a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(i.a.registrationRequest()),e.prev=1,e.next=4,s.a.post("/users/signup",t);case 4:r=e.sent,a=r.data,o(a.token),n(i.a.registrationSuccess(a)),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),n(i.a.registrationError(e.t0.message));case 13:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t){return e.apply(this,arguments)}}()},signIn:function(t){return function(){var e=Object(a.a)(c.a.mark((function e(n){var r,a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(i.a.signInRequest()),e.prev=1,e.next=4,s.a.post("/users/login",t);case 4:r=e.sent,a=r.data,o(a.token),n(i.a.signInSuccess(a)),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),n(i.a.signInError(e.t0.message));case 13:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t){return e.apply(this,arguments)}}()},signOut:function(){return function(){var t=Object(a.a)(c.a.mark((function t(e){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e(i.a.signOutRequest()),t.prev=1,t.next=4,s.a.post("/users/logout");case 4:b(),e(i.a.signOutSuccess()),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),e(i.a.signOutError(t.t0.message));case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}()},fetchCurrentUser:function(){return function(){var t=Object(a.a)(c.a.mark((function t(e,n){var r,a,u,b;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r=n(),a=r.auth.token){t.next=3;break}return t.abrupt("return");case 3:return o(a),e(i.a.getCurrentUserRequest()),t.prev=5,t.next=8,s.a.get("/users/current");case 8:u=t.sent,b=u.data,e(i.a.getCurrentUserSuccess(b)),t.next=16;break;case 13:t.prev=13,t.t0=t.catch(5),e(i.a.getCurrentUserError(t.t0.message));case 16:case"end":return t.stop()}}),t,null,[[5,13]])})));return function(e,n){return t.apply(this,arguments)}}()}};e.a=j},4:function(t,e,n){"use strict";var r=n(5),c={registrationRequest:Object(r.b)("auth/registretionRequest"),registrationSuccess:Object(r.b)("auth/registretionSuccess"),registrationError:Object(r.b)("auth/registretionError"),signInRequest:Object(r.b)("auth/signInRequest"),signInSuccess:Object(r.b)("auth/signInSuccess"),signInError:Object(r.b)("auth/signInError"),signOutRequest:Object(r.b)("auth/signOutRequest"),signOutSuccess:Object(r.b)("auth/signOutSuccess"),signOutError:Object(r.b)("auth/signOutError"),getCurrentUserRequest:Object(r.b)("auth/getCurrentUserRequest"),getCurrentUserSuccess:Object(r.b)("auth/getCurrentUserSuccess"),getCurrentUserError:Object(r.b)("auth/getCurrentUserError")};e.a=c},48:function(t,e,n){"use strict";var r=n(22),c=n(7),a=n(2);e.a=function(t){var e=t.value,n=Object(c.a)(t,["value"]);return Object(a.jsx)("button",Object(r.a)(Object(r.a)({},n),{},{children:e}))}},49:function(t,e,n){"use strict";var r=n(48);n.d(e,"a",(function(){return r.a}))},50:function(t,e,n){"use strict";var r=n(11),c=n.n(r),a=n(21),u=n(14),s=n.n(u),i=n(6),o=function(t){return setTimeout((function(){return t(Object(i.k)(null))}),2500)};s.a.defaults.baseURL="https://goit-phonebook-api.herokuapp.com";var b={fetchContacts:function(){return function(){var t=Object(a.a)(c.a.mark((function t(e){var n,r;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e(Object(i.i)()),t.prev=1,t.next=4,s.a.get("/contacts");case 4:return n=t.sent,r=n.data,t.abrupt("return",e(Object(i.j)(r)));case 9:t.prev=9,t.t0=t.catch(1),e(Object(i.h)(t.t0.message)),o(e);case 13:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e){return t.apply(this,arguments)}}()},addContact:function(t){return function(){var e=Object(a.a)(c.a.mark((function e(n){var r,a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(Object(i.b)()),e.prev=1,e.next=4,s.a.post("/contacts",t);case 4:return r=e.sent,a=r.data,e.abrupt("return",n(Object(i.c)(a)));case 9:e.prev=9,e.t0=e.catch(1),n(Object(i.a)(e.t0.message)),o(n);case 13:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}()},deleteContact:function(t){return function(){var e=Object(a.a)(c.a.mark((function e(n){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(Object(i.f)()),e.prev=1,e.next=4,s.a.delete("/contacts/".concat(t));case 4:return e.abrupt("return",n(Object(i.g)(t)));case 7:e.prev=7,e.t0=e.catch(1),n(Object(i.e)(e.t0)),o(n);case 11:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(t){return e.apply(this,arguments)}}()},updateContact:function(t){return function(){var e=Object(a.a)(c.a.mark((function e(n){var r,a,u,b,j;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(Object(i.m)()),r=t.id,a=t.name,u=t.number,e.prev=2,e.next=5,s.a.patch("/contacts/".concat(r),{name:a,number:u});case 5:return b=e.sent,j=b.data,e.abrupt("return",n(Object(i.n)(j)));case 10:e.prev=10,e.t0=e.catch(2),n(Object(i.l)(e.t0.message)),o(n);case 14:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t){return e.apply(this,arguments)}}()}};e.a=b},6:function(t,e,n){"use strict";n.d(e,"i",(function(){return c})),n.d(e,"j",(function(){return a})),n.d(e,"h",(function(){return u})),n.d(e,"b",(function(){return s})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){return o})),n.d(e,"f",(function(){return b})),n.d(e,"g",(function(){return j})),n.d(e,"e",(function(){return O})),n.d(e,"m",(function(){return f})),n.d(e,"n",(function(){return l})),n.d(e,"l",(function(){return d})),n.d(e,"k",(function(){return g})),n.d(e,"d",(function(){return h}));var r=n(5),c=Object(r.b)("contacts/fetchContactsRequest"),a=Object(r.b)("contacts/fetchContactsSuccess"),u=Object(r.b)("contacts/fetchContactsError"),s=Object(r.b)("contacts/addContactRequest"),i=Object(r.b)("contacts/addContactSuccess"),o=Object(r.b)("contacts/addContactError"),b=Object(r.b)("contacts/deleteContactRequest"),j=Object(r.b)("contacts/deleteContactSuccess"),O=Object(r.b)("contacts/deleteContactError"),f=Object(r.b)("contacts/updateContactRequest"),l=Object(r.b)("contacts/updateContactSuccess"),d=Object(r.b)("contacts/updateContactError"),g=Object(r.b)("contacts/removeError"),h=Object(r.b)("contacts/changeFilter")}},[[109,3,4]]]);
//# sourceMappingURL=main.aa9ead86.chunk.js.map
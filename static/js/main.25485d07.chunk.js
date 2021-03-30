(this["webpackJsonpmini-paint"]=this["webpackJsonpmini-paint"]||[]).push([[0],{172:function(t,e,n){},173:function(t,e,n){"use strict";n.r(e);var a=n(2),s=n.n(a),r=n(31),i=n.n(r),c=n(5),o=n(21),u=n(68),l=n(69),h="/",d="/painter",b="/drawing",j="/profile",p="/login",f="/register",O="/reset-password",m="SIGNUP",v="LOGIN",_="LOGOUT",x="RESET_PASSWORD",g="UPDATE_EMAIL",w="UPDATE_PASSWORD",y="SET_LOADING",T="SET_THEME",N=["black","white","green","blue","red","yellow","purple"],E=[2,5,10,20,30,40,50],S={RECTANGLE:"RECTANGLE",CIRCLE:"CIRCLE"},C="BRUSH",k="LINE",P={SET_COLOR:"SET_COLOR",SET_SIZE:"SET_SIZE",SET_TOOL_TYPE:"SET_TOOL_TYPE"},L={DARK:"dark",LIGHT:"light"},I=localStorage.getItem("user"),R=localStorage.getItem("theme"),B=null!==R?R:L.DARK,A=I?{user:JSON.parse(I),isAuthorization:!0,isLoading:!1,theme:B}:{user:null,isAuthorization:!1,isLoading:!1,theme:B},z=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case m:case v:return{user:e.user,isAuthorization:!0,isLoading:!1,theme:t.theme};case _:return{user:null,isAuthorization:!1,isLoading:!1,theme:t.theme};case y:return{user:t.user,isAuthorization:t.isAuthorization,isLoading:e.isLoading,theme:t.theme};case T:return{user:t.user,isAuthorization:t.isAuthorization,isLoading:t.isLoading,theme:t.theme===L.DARK?L.LIGHT:L.DARK};default:return t}},D=n(13),U=n.n(D),W=n(19),G=n(70),M=(n(88),n(174),G.a.initializeApp({apiKey:"AIzaSyAa8qhDzXPEIlyOypjuB5AhiDOQJoZy-N4",authDomain:"mini-paint-dev.firebaseapp.com",projectId:"mini-paint-dev",storageBucket:"mini-paint-dev.appspot.com",messagingSenderId:"283437229221",appId:"1:283437229221:web:7dd1029fef90bda3d3194c"})),Y=M.firestore(),H=M.auth();function K(){return(K=Object(W.a)(U.a.mark((function t(e,n,a){return U.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",H.createUserWithEmailAndPassword(e,a).then(function(){var t=Object(W.a)(U.a.mark((function t(a){var s,r;return U.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(null!==a.user){t.next=2;break}throw new Error("Error while creating user!");case 2:return s=a.user.uid,r={username:n,userId:s},t.next=6,Y.doc("/users/".concat(e)).set(r).catch((function(){throw new Error("Error while creating user!")}));case 6:return t.abrupt("return",a.user);case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()).catch((function(t){throw new Error(t)})));case 1:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function J(){return(J=Object(W.a)(U.a.mark((function t(e,n){return U.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",H.signInWithEmailAndPassword(e,n).then((function(t){if(!t.user)throw new Error("User not found!");return t.user})).catch((function(t){throw new Error(t)})));case 1:case"end":return t.stop()}}),t)})))).apply(this,arguments)}var X={signup:function(t,e,n){return K.apply(this,arguments)},login:function(t,e){return J.apply(this,arguments)},logout:function(){return H.signOut()},resetPassword:function(t){return H.sendPasswordResetEmail(t)},updateEmail:function(t,e){return t.updateEmail(e)},updatePassword:function(t,e){return t.updatePassword(e)}},Z=n(71),F=n.n(Z);function q(){return(q=Object(W.a)(U.a.mark((function t(e){return U.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",Y.doc("/users/".concat(e)).get().then((function(t){var e=t.data();if(!e)throw new Error("User not found!");return e})).catch((function(t){throw new Error(t.message)})));case 1:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function Q(){return(Q=Object(W.a)(U.a.mark((function t(e,n,a){var s,r;return U.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:s=F()(),r={userId:e,username:n,drawingUrl:a,drawingId:s},Y.doc("/drawings/".concat(s)).set(r);case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function V(){return(V=Object(W.a)(U.a.mark((function t(){var e;return U.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=[],t.next=3,Y.collection("/drawings/").get().then((function(t){t.forEach((function(t){e.push(t.data())}))}));case 3:return t.abrupt("return",e);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function $(){return($=Object(W.a)(U.a.mark((function t(e){var n;return U.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=!0,t.next=3,Y.doc("/users/".concat(e)).get().then((function(t){if(!t.data())throw new Error("User not found!");n=!0})).catch((function(){n=!1}));case 3:return t.abrupt("return",n);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}var tt={getUserData:function(t){return q.apply(this,arguments)},saveImageData:function(t,e,n){return Q.apply(this,arguments)},getImages:function(){return V.apply(this,arguments)},checkUser:function(t){return $.apply(this,arguments)}},et=n(36);var nt={switchTheme:function(){return function(t){t({type:T})}},setIsLoading:function(t){return function(e){e({type:y,isLoading:t})}},signup:function(t,e,n){return function(a){tt.checkUser(t).then((function(s){s?(Object(et.error)("Error while creating user!"),a({type:y,isLoading:!1})):X.signup(t,e,n).then((function(t){var n={fbUser:t,username:e};localStorage.setItem("user",JSON.stringify(n)),a({type:m,user:n})})).catch((function(t){Object(et.error)(t.message),a({type:y,isLoading:!1})}))}))}},login:function(t,e){return function(n){X.login(t,e).then((function(e){tt.getUserData(t).then((function(t){var a={fbUser:e,username:t.username};localStorage.setItem("user",JSON.stringify(a)),n({type:v,user:a})}))})).catch((function(t){Object(et.error)(t.message),n({type:y,isLoading:!1})}))}},logout:function(){return function(t){X.logout().then((function(){localStorage.removeItem("user"),t({type:_})}))}},resetPassword:function(t){return function(e){X.resetPassword(t).then((function(){e({type:x})}))}},updateEmail:function(t,e){return function(n){X.updateEmail(t,e).then((function(){n({type:g})}))}},updatePassword:function(t,e){return function(n){X.updatePassword(t,e).then((function(){n({type:w})}))}}},at={toolColor:N[0],brushSize:10,toolType:C},st=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:at,e=arguments.length>1?arguments[1]:void 0,n=P;switch(e.type){case n.SET_COLOR:return{toolColor:e.toolColor,brushSize:t.brushSize,toolType:t.toolType};case n.SET_SIZE:return{toolColor:t.toolColor,brushSize:e.brushSize,toolType:t.toolType};case n.SET_TOOL_TYPE:return{toolColor:t.toolColor,brushSize:t.brushSize,toolType:e.toolType};default:return t}};var rt={setToolColor:function(t){return function(e){var n;null===(n=window.drawing)||void 0===n||n.setToolColor(t),e({type:P.SET_COLOR,toolColor:t})}},setBrushSize:function(t){return function(e){var n;null===(n=window.drawing)||void 0===n||n.setBrushSize(t),e({type:P.SET_SIZE,brushSize:t})}},setToolType:function(t){return function(e){var n;null===(n=window.drawing)||void 0===n||n.setToolType(t),e({type:P.SET_TOOL_TYPE,toolType:t})}}},it=Object(o.combineReducers)({auth:z,painter:st}),ct=n(11),ot=n(9),ut=n.p+"static/media/brush.95650063.svg",lt=n.p+"static/media/profile-user.2ab6e483.svg",ht=n.p+"static/media/shapes.1b1dc535.svg",dt=n(25),bt=n.n(dt),jt=n(1);function pt(){var t=Object(ot.g)().location.pathname;return Object(jt.jsxs)("div",{className:bt.a.container,children:[Object(jt.jsxs)("ul",{className:bt.a.list,children:[Object(jt.jsx)("li",{className:bt.a.link+(t===h?" active":""),children:Object(jt.jsx)(ct.b,{to:h,children:"HOME"})}),Object(jt.jsx)("li",{className:bt.a.link+(t===d?" active":""),children:Object(jt.jsx)(ct.b,{to:d,children:"PAINTER"})})]}),Object(jt.jsx)(ct.b,{className:bt.a.profileLink+(t===j?" active":""),to:j,children:Object(jt.jsx)("img",{src:lt,alt:"user"})})]})}function ft(t){var e=t.component,n=t.path,a=Object(c.c)((function(t){return t.auth.isAuthorization}));return Object(jt.jsx)(ot.b,{path:n,render:function(){return a?Object(jt.jsxs)(jt.Fragment,{children:[Object(jt.jsx)(pt,{}),Object(jt.jsx)(e,{})]}):Object(jt.jsx)(ot.a,{to:p})}})}var Ot=n(72),mt=n(73),vt=function(){function t(e){Object(Ot.a)(this,t),this.container=void 0,this.ctx=void 0,this.canvasRect=void 0,this.isTouching=void 0,this.startTouchPosition=void 0,this.toolType=void 0,this.toolColor=void 0,this.brushSize=void 0,this.savedImageData=void 0;var n=e,a=n.getContext("2d");if(!(a&&a instanceof CanvasRenderingContext2D))throw new Error("Failed to get 2D context");if(!n.parentElement)throw new Error("Failed to get container");this.container=n.parentElement,this.ctx=a,this.canvasRect=n.getBoundingClientRect(),this.isTouching=!1,this.toolType=C,this.toolColor="black",this.brushSize=10,this.savedImageData={},this.startTouchPosition={x:0,y:0},n.addEventListener("mousedown",this.touch.bind(this)),n.addEventListener("touchstart",this.touch.bind(this)),n.addEventListener("mouseup",this.stopTouch.bind(this)),n.addEventListener("touchend",this.stopTouch.bind(this)),n.addEventListener("mousemove",this.move.bind(this)),n.addEventListener("touchmove",this.move.bind(this)),this.ctx.canvas.width=this.container.offsetWidth,this.ctx.canvas.height=this.container.offsetHeight,this.canvasRect=this.ctx.canvas.getBoundingClientRect(),a.fillStyle="white",a.fillRect(0,0,n.width,n.height),this.setToolColor(this.toolColor),this.setBrushSize(this.brushSize)}return Object(mt.a)(t,[{key:"setToolColor",value:function(t){this.toolColor=t,this.ctx.strokeStyle=t,this.ctx.fillStyle=t}},{key:"setBrushSize",value:function(t){this.brushSize=t,this.ctx.lineWidth=t}},{key:"setToolType",value:function(t){this.toolType=t}},{key:"getDrawingURL",value:function(){return this.ctx.canvas.toDataURL()}},{key:"getTouchPosition",value:function(t){return t instanceof MouseEvent?{x:t.clientX-this.canvasRect.left,y:t.clientY-this.canvasRect.top}:{x:t.changedTouches[0].clientX-this.canvasRect.left,y:t.changedTouches[0].clientY-this.canvasRect.top}}},{key:"touch",value:function(t){this.isTouching=!0,this.startTouchPosition=this.getTouchPosition(t),this.saveCanvasImage(),this.move(t)}},{key:"stopTouch",value:function(){this.isTouching=!1,this.ctx.beginPath()}},{key:"saveCanvasImage",value:function(){this.savedImageData=this.ctx.getImageData(0,0,this.ctx.canvas.width,this.ctx.canvas.height)}},{key:"redrawCanvasImage",value:function(){this.ctx.putImageData(this.savedImageData,0,0)}},{key:"drawBrush",value:function(t,e){var n=this.ctx,a=this.brushSize;n.lineTo(t,e),n.stroke(),n.beginPath(),this.ctx.arc(t,e,a/2,0,2*Math.PI),n.fill(),n.beginPath(),n.moveTo(t,e)}},{key:"drawLine",value:function(t,e){var n=this.ctx,a=this.brushSize;this.redrawCanvasImage(),n.beginPath(),n.moveTo(this.startTouchPosition.x,this.startTouchPosition.y),n.lineTo(t,e),n.stroke(),this.ctx.arc(this.startTouchPosition.x,this.startTouchPosition.y,a/2,0,2*Math.PI),this.ctx.arc(t,e,a/2,0,2*Math.PI),n.fill()}},{key:"drawRectangle",value:function(t,e){this.redrawCanvasImage(),this.ctx.fillRect(this.startTouchPosition.x,this.startTouchPosition.y,-(this.startTouchPosition.x-t),-(this.startTouchPosition.y-e))}},{key:"drawCircle",value:function(t,e){this.redrawCanvasImage();var n=this.startTouchPosition.x-t,a=this.startTouchPosition.y-e,s=Math.sqrt(n*n+a*a),r=2*Math.PI;this.ctx.beginPath(),this.ctx.arc(this.startTouchPosition.x,this.startTouchPosition.y,s,0,r),this.ctx.fill()}},{key:"move",value:function(t){if(this.isTouching){var e=k,n=S,a=this.getTouchPosition(t);switch(this.toolType){case e:this.drawLine(a.x,a.y);break;case n.RECTANGLE:this.drawRectangle(a.x,a.y);break;case n.CIRCLE:this.drawCircle(a.x,a.y);break;default:this.drawBrush(a.x,a.y)}}}}]),t}(),_t=n(74),xt=n(37),gt=n.n(xt);function wt(){var t=Object(c.c)((function(t){var e;return null===(e=t.auth.user)||void 0===e?void 0:e.fbUser.uid})),e=Object(c.c)((function(t){var e;return null===(e=t.auth.user)||void 0===e?void 0:e.username}));return Object(jt.jsxs)("div",{className:gt.a.container,children:[Object(jt.jsx)("button",{className:gt.a.btn,onClick:function(){if(window.drawing){var t=window.drawing.getDrawingURL();Object(_t.saveAs)(t,"image")}},type:"button",children:"Download"}),Object(jt.jsx)("button",{className:gt.a.btn,onClick:function(){if(window.drawing&&t&&e){var n=window.drawing.getDrawingURL();tt.saveImageData(t,e,n)}},type:"button",children:"Save"})]})}var yt=n(7),Tt=n(75),Nt=n.n(Tt);function Et(t){var e=t.elements,n=t.hidePanel,s=Object(a.useRef)({});return Object(a.useEffect)((function(){var t=function(t){s.current.contains(t.target)||n()};return document.addEventListener("mousedown",t),function(){return document.removeEventListener("mousedown",t)}}),[n]),Object(jt.jsx)("div",{className:Nt.a.wrapper,ref:s,children:e})}var St=n(76),Ct=n.n(St);function kt(t){var e=t.hidePanel,n=Object(c.b)(),s=Object(a.useCallback)((function(){return N.map((function(t){var a={backgroundColor:t};return Object(jt.jsx)("button",{className:Ct.a.panelBtn,onClick:function(){return function(t){n(rt.setToolColor(t)),e()}(t)},type:"button",children:Object(jt.jsx)("div",{style:a})},t)}))}),[n,e]);return Object(jt.jsx)(Et,{elements:s(),hidePanel:e})}var Pt=n(38),Lt=n.n(Pt);function It(){var t=Object(a.useState)(!1),e=Object(yt.a)(t,2),n=e[0],s=e[1],r={background:Object(c.c)((function(t){return t.painter.toolColor}))},i=Object(a.useCallback)((function(){s(!n)}),[n]);return Object(jt.jsxs)("div",{className:Lt.a.tool,children:[n&&Object(jt.jsx)(kt,{hidePanel:function(){s(!1)}}),Object(jt.jsx)("button",{className:Lt.a.toolBtn,type:"button",onClick:i,children:Object(jt.jsx)("div",{className:Lt.a.selectedColor,style:r})})]})}var Rt=n(77),Bt=n.n(Rt);function At(t){var e=t.hidePanel,n=Object(c.b)(),s=Object(a.useCallback)((function(){return E.map((function(t){return Object(jt.jsx)("button",{className:Bt.a.panelBtn,onClick:function(){return function(t){n(rt.setBrushSize(t)),e()}(t)},type:"button",children:Object(jt.jsx)("div",{children:t})},t)}))}),[n,e]);return Object(jt.jsx)(Et,{elements:s(),hidePanel:e})}var zt=n(47),Dt=n.n(zt);function Ut(){var t=Object(a.useState)(!1),e=Object(yt.a)(t,2),n=e[0],s=e[1],r=Object(a.useRef)({}),i=Object(c.c)((function(t){return t.painter.brushSize})),o=Object(a.useCallback)((function(){s(!n)}),[n]);return Object(jt.jsxs)("div",{className:Dt.a.tool,ref:r,children:[n&&Object(jt.jsx)(At,{hidePanel:function(){s(!1)}}),Object(jt.jsx)("button",{className:Dt.a.toolBtn,type:"button",onClick:o,children:Object(jt.jsxs)("div",{children:[i,"px"]})})]})}var Wt=n(48),Gt=n.n(Wt);function Mt(t){var e=t.hidePanel,n=Object(c.b)(),s=Object(a.useCallback)((function(){var t=S;return Object.keys(t).map((function(t){return Object(jt.jsx)("button",{className:Gt.a.panelBtn,onClick:function(){return a=t,n(rt.setToolType(a)),void e();var a},type:"button",children:Object(jt.jsx)("div",{className:Gt.a[t]})},t)}))}),[n,e]);return Object(jt.jsx)(Et,{elements:s(),hidePanel:e})}var Yt=n(49),Ht=n.n(Yt);function Kt(){var t=Object(a.useState)(!1),e=Object(yt.a)(t,2),n=e[0],s=e[1],r=Object(a.useCallback)((function(){s(!n)}),[n]);return Object(jt.jsxs)("div",{className:Ht.a.tool,children:[n&&Object(jt.jsx)(Mt,{hidePanel:function(){s(!1)}}),Object(jt.jsx)("button",{className:Ht.a.toolBtn,type:"button",onClick:r,children:Object(jt.jsx)("img",{src:ht,alt:"shapes"})})]})}var Jt=n(39),Xt=n.n(Jt);function Zt(){var t=Object(c.b)(),e=Object(c.c)((function(t){return t.painter.toolType}))===C;return Object(jt.jsx)("div",{className:"".concat(Xt.a.tool," ").concat(e?"active":""),children:Object(jt.jsx)("button",{className:Xt.a.toolBtn,type:"button",onClick:function(){e||t(rt.setToolType(C))},children:Object(jt.jsx)("img",{className:Xt.a.icon,src:ut,alt:"brush"})})})}var Ft=n(50),qt=n.n(Ft);function Qt(){var t=Object(c.b)(),e=Object(c.c)((function(t){return t.painter.toolType}))===k;return Object(jt.jsx)("div",{className:"".concat(qt.a.tool," ").concat(e?"active":""),children:Object(jt.jsx)("button",{className:qt.a.toolBtn,type:"button",onClick:function(){e||t(rt.setToolType(k))},children:Object(jt.jsx)("div",{})})})}var Vt=n(78),$t=n.n(Vt);function te(){return Object(jt.jsxs)("div",{className:$t.a.toolbar,children:[Object(jt.jsx)(It,{}),Object(jt.jsx)(Ut,{}),Object(jt.jsx)(Zt,{}),Object(jt.jsx)(Qt,{}),Object(jt.jsx)(Kt,{})]})}var ee=n(51),ne=n.n(ee);function ae(){var t=Object(a.useRef)({});return Object(a.useEffect)((function(){return window.drawing=new vt(t.current),function(){window.drawing=null}}),[t]),Object(jt.jsxs)("div",{className:ne.a.container,children:[Object(jt.jsx)(wt,{}),Object(jt.jsx)("div",{className:ne.a.canvasWrapper,children:Object(jt.jsx)("canvas",{ref:t})}),Object(jt.jsx)(te,{})]})}var se=n(28),re=n.n(se);function ie(t){var e=t.src,n=t.username,a=Object(ot.g)();return Object(jt.jsxs)("button",{className:re.a.picture,onClick:function(){a.push("".concat(b,"#").concat(e))},type:"button",children:[Object(jt.jsx)("div",{className:re.a.pictureImgWrapper,children:Object(jt.jsx)("img",{src:e,alt:"img"})}),Object(jt.jsx)("p",{className:re.a.pictureUsername,children:n})]})}function ce(t){var e=t.drawings,n=Object(a.useState)([]),s=Object(yt.a)(n,2),r=s[0],i=s[1];return Object(a.useEffect)((function(){var t=[];e.forEach((function(e){t.push(Object(jt.jsx)(ie,{src:e.drawingUrl,username:e.username},e.drawingId))})),i(t)}),[e,i]),Object(jt.jsx)("div",{className:re.a.container,children:r})}var oe=n(52),ue=n.n(oe);function le(t){var e=t.filter,n=Object(a.useRef)({});return Object(jt.jsx)("div",{className:ue.a.container,children:Object(jt.jsx)("input",{className:ue.a.input,onChange:function(){n.current&&e(n.current.value)},ref:n,type:"text",placeholder:"username"})})}function he(){var t=Object(a.useState)([]),e=Object(yt.a)(t,2),n=e[0],s=e[1],r=Object(a.useState)([]),i=Object(yt.a)(r,2),c=i[0],o=i[1];return Object(a.useEffect)((function(){var t=!0;return tt.getImages().then((function(e){t&&(s(e),o(e))})),function(){t=!1}}),[]),Object(jt.jsxs)("div",{className:"page_wrapper",children:[Object(jt.jsx)(le,{filter:function(t){var e=n.filter((function(e){return e.username.includes(t)}));o(e)}}),Object(jt.jsx)(ce,{drawings:c})]})}var de=n(20),be=n.n(de);function je(){var t=Object(c.b)(),e=Object(c.c)((function(t){var e;return null===(e=t.auth.user)||void 0===e?void 0:e.username})),n=Object(ot.g)();return Object(jt.jsx)("div",{className:"page_wrapper",children:Object(jt.jsx)("div",{className:be.a.container,children:Object(jt.jsxs)("div",{className:be.a.main,children:[Object(jt.jsxs)("div",{className:be.a.mainTop,children:[Object(jt.jsx)("p",{className:be.a.username,children:e}),Object(jt.jsx)("button",{className:be.a.logoOutBtn,type:"button",onClick:function(){t(nt.logout()),n.push(p)},children:"Log out"})]}),Object(jt.jsx)("div",{className:be.a.mainCenter,children:Object(jt.jsx)("button",{className:be.a.switchThemeBtn,type:"button",onClick:function(){t(nt.switchTheme())},children:"Switch theme"})})]})})})}var pe=n(35),fe=n.n(pe);function Oe(t){var e=t.setEmail,n=Object(a.useState)(!1),s=Object(yt.a)(n,2),r=s[0],i=s[1];return Object(jt.jsx)("input",{className:"auth_t-input ".concat(r?"wrong":""),onChange:function(t){var n=t.target.value;if(!fe.a.isEmail(n))return i(!0),void e("");i(!1),e(n)},type:"email",placeholder:"e-mail"})}function me(t){var e=t.setNickname;return Object(jt.jsx)("input",{className:"auth_t-input",onChange:function(t){e(t.target.value)},type:"text",placeholder:"nickname"})}function ve(t){var e=t.setPassword,n=t.validate,s=Object(a.useState)(!1),r=Object(yt.a)(s,2),i=r[0],c=r[1];return Object(jt.jsx)("input",{className:"auth_t-input ".concat(i?"wrong":""),onChange:function(t){var a=t.target.value;return n&&fe.a.isStrongPassword(a)||a?(c(!1),void e(a)):(c(!0),void e(""))},type:"password",placeholder:"password"})}function _e(t){var e=t.password,n=t.setPasswordConfirm,s=Object(a.useState)(!1),r=Object(yt.a)(s,2),i=r[0],c=r[1];return Object(jt.jsx)("input",{className:"auth_t-input ".concat(i?"wrong":""),onChange:function(t){var a=t.target.value;if(a!==e)return c(!0),void n("");c(!1),n(a)},type:"password",placeholder:"password confirm"})}function xe(t){var e=t.text,n=t.disabled;return Object(jt.jsx)("button",{className:"auth_submit-btn",type:"submit",disabled:n,children:e})}function ge(){var t=Object(a.useState)(""),e=Object(yt.a)(t,2),n=e[0],s=e[1],r=Object(a.useState)(""),i=Object(yt.a)(r,2),o=i[0],u=i[1],l=Object(c.b)(),d=Object(c.c)((function(t){return t.auth.isAuthorization})),b=Object(c.c)((function(t){return t.auth.isLoading}));var j=!(n&&o)||b;return d?Object(jt.jsx)(ot.a,{to:h}):Object(jt.jsx)("div",{className:"page_wrapper",children:Object(jt.jsxs)("div",{className:"auth_container",children:[Object(jt.jsx)("p",{className:"auth_title",children:"Login"}),Object(jt.jsxs)("form",{className:"auth_form",onSubmit:function(t){t.preventDefault(),l(nt.setIsLoading(!0)),l(nt.login(n,o))},children:[Object(jt.jsx)(Oe,{setEmail:s}),Object(jt.jsx)(ve,{setPassword:u}),Object(jt.jsx)(xe,{text:"LOGIN",disabled:j})]}),Object(jt.jsx)(ct.b,{className:"auth_link",to:O,children:"Forgot password?"}),Object(jt.jsxs)("div",{className:"auth_bottom",children:[Object(jt.jsx)("p",{className:"auth_bottom__title",children:"Need an account?"}),Object(jt.jsx)(ct.b,{className:"auth_bottom__link",to:f,children:"Sign up"})]})]})})}function we(){var t=Object(a.useState)(""),e=Object(yt.a)(t,2),n=e[0],s=e[1],r=Object(a.useState)(""),i=Object(yt.a)(r,2),o=i[0],u=i[1],l=Object(a.useState)(""),d=Object(yt.a)(l,2),b=d[0],j=d[1],f=Object(a.useState)(""),O=Object(yt.a)(f,2),m=O[0],v=O[1],_=Object(c.b)(),x=Object(c.c)((function(t){return t.auth.isAuthorization})),g=Object(c.c)((function(t){return t.auth.isLoading}));var w=!(n&&o&&b&&m)||g;return x?Object(jt.jsx)(ot.a,{to:h}):Object(jt.jsx)("div",{className:"page_wrapper",children:Object(jt.jsxs)("div",{className:"auth_container",children:[Object(jt.jsx)("p",{className:"auth_title",children:"Sign up"}),Object(jt.jsxs)("form",{className:"auth_form",onSubmit:function(t){t.preventDefault(),_(nt.setIsLoading(!0)),_(nt.signup(n,o,b))},children:[Object(jt.jsx)(Oe,{setEmail:s}),Object(jt.jsx)(me,{setNickname:u}),Object(jt.jsx)(ve,{setPassword:j}),Object(jt.jsx)(_e,{password:b,setPasswordConfirm:v}),Object(jt.jsx)(xe,{text:"SIGNUP",disabled:w})]}),Object(jt.jsxs)("div",{className:"auth_bottom",children:[Object(jt.jsx)("p",{className:"auth_bottom__title",children:"Already have an account?"}),Object(jt.jsx)(ct.b,{className:"auth_bottom__link",to:p,children:"Log in"})]})]})})}function ye(){var t=Object(a.useState)(""),e=Object(yt.a)(t,2),n=e[0],s=e[1],r=Object(c.b)(),i=Object(c.c)((function(t){return t.auth.isAuthorization})),o=Object(c.c)((function(t){return t.auth.isLoading}));return i?Object(jt.jsx)(ot.a,{to:h}):Object(jt.jsx)("div",{className:"page_wrapper",children:Object(jt.jsxs)("div",{className:"auth_container",children:[Object(jt.jsx)("p",{className:"auth_title",children:"Reset Password"}),Object(jt.jsxs)("form",{className:"auth_form",onSubmit:function(t){t.preventDefault(),r(nt.setIsLoading(!0)),r(nt.resetPassword(n))},children:[Object(jt.jsx)(Oe,{setEmail:s}),Object(jt.jsx)(xe,{text:"SEND",disabled:o})]}),Object(jt.jsx)(ct.b,{className:"auth_link",to:p,children:"Log in"}),Object(jt.jsxs)("div",{className:"auth_bottom",children:[Object(jt.jsx)("p",{className:"auth_bottom__title",children:"Need an account?"}),Object(jt.jsx)(ct.b,{className:"auth_bottom__link",to:f,children:"Sign up"})]})]})})}function Te(){return Object(jt.jsx)("div",{className:"page_wrapper",children:Object(jt.jsx)(ae,{})})}function Ne(){var t=Object(ot.g)().location.hash.substr(1);return Object(jt.jsx)("div",{className:"page_wrapper",children:Object(jt.jsx)("img",{src:t,alt:"drawing"})})}function Ee(){var t=Object(c.c)((function(t){return t.auth.theme}));return Object(jt.jsx)("div",{className:"App ".concat(t),children:Object(jt.jsx)("div",{className:"App__main",children:Object(jt.jsx)(ct.a,{children:Object(jt.jsxs)(ot.d,{children:[Object(jt.jsx)(ot.b,{path:p,component:ge}),Object(jt.jsx)(ot.b,{path:f,component:we}),Object(jt.jsx)(ot.b,{path:O,component:ye}),Object(jt.jsx)(ft,{path:j,component:je}),Object(jt.jsx)(ft,{exact:!0,path:h,component:he}),Object(jt.jsx)(ft,{path:d,component:Te}),Object(jt.jsx)(ft,{path:b,component:Ne})]})})})})}ve.defaultProps={validate:!1};n(172);var Se=Object(o.createStore)(it,Object(u.composeWithDevTools)(Object(o.applyMiddleware)(l.a)));i.a.render(Object(jt.jsx)(s.a.StrictMode,{children:Object(jt.jsx)(c.a,{store:Se,children:Object(jt.jsx)(Ee,{})})}),document.getElementById("root"))},20:function(t,e,n){t.exports={wrapper:"_styles_wrapper__1_tnB",container:"_styles_container__2dUcu",main:"_styles_main__2Xgk7",mainTop:"_styles_mainTop__3i2-C",username:"_styles_username__XYAPN",logoOutBtn:"_styles_logoOutBtn__3vHMn",mainCenter:"_styles_mainCenter__3a0qt",switchThemeBtn:"_styles_switchThemeBtn__3_MNR"}},25:function(t,e,n){t.exports={container:"_styles_container__2wbng",link:"_styles_link__2eKbD",profileLink:"_styles_profileLink__6QFKG",list:"_styles_list__17SzJ"}},28:function(t,e,n){t.exports={container:"_styles_container__1ya0m",picture:"_styles_picture__2jV9R",pictureImgWrapper:"_styles_pictureImgWrapper__3X3j0",pictureUsername:"_styles_pictureUsername__1khW_"}},37:function(t,e,n){t.exports={container:"_styles_container__1Bzj_",btn:"_styles_btn__fPm-9"}},38:function(t,e,n){t.exports={tool:"_styles_tool__2kPl9",toolBtn:"_styles_toolBtn__2uduP",selectedColor:"_styles_selectedColor__1CK-m"}},39:function(t,e,n){t.exports={tool:"_styles_tool__3CxCe",toolBtn:"_styles_toolBtn__FtXqL",icon:"_styles_icon__3wOsl"}},47:function(t,e,n){t.exports={tool:"_styles_tool__1qZ7d",toolBtn:"_styles_toolBtn__2niON"}},48:function(t,e,n){t.exports={panelBtn:"_styles_panelBtn__rkx72",RECTANGLE:"_styles_RECTANGLE__vou-3",CIRCLE:"_styles_CIRCLE__28M9N"}},49:function(t,e,n){t.exports={tool:"_styles_tool__Ydr7c",toolBtn:"_styles_toolBtn__2YHuQ"}},50:function(t,e,n){t.exports={tool:"_styles_tool__2KTuR",toolBtn:"_styles_toolBtn__3e0jB"}},51:function(t,e,n){t.exports={container:"_styles_container__3neTB",canvasWrapper:"_styles_canvasWrapper__1Y9UP"}},52:function(t,e,n){t.exports={container:"_styles_container__24g_L",input:"_styles_input__3L58H"}},75:function(t,e,n){t.exports={wrapper:"_styles_wrapper__2lJvm"}},76:function(t,e,n){t.exports={panelBtn:"_styles_panelBtn__3auWz"}},77:function(t,e,n){t.exports={panelBtn:"_styles_panelBtn__beOBy"}},78:function(t,e,n){t.exports={toolbar:"_styles_toolbar__2ExZh"}}},[[173,1,2]]]);
//# sourceMappingURL=main.25485d07.chunk.js.map
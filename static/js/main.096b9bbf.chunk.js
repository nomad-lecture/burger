(this.webpackJsonpburger=this.webpackJsonpburger||[]).push([[0],{11:function(e,t,r){e.exports={BreadTop:"style_BreadTop__3qAIG",Seed:"style_Seed__2r6Pw",Second:"style_Second__3c4cf",Third:"style_Third__1nWZ0",Fourth:"style_Fourth__AzZ2h",Salad:"style_Salad__2SWHh",Meat:"style_Meat__37bOB",Cheese:"style_Cheese__1xoxU",Bacon:"style_Bacon__Bsqzs",BreadBottom:"style_BreadBottom__1CkfX"}},17:function(e,t,r){e.exports={SideBar:"style_SideBar__3YX8-",Logo:"style_Logo__1q9xM",Open:"style_Open__2IG9O",Close:"style_Close__bWZ5K"}},20:function(e,t,r){e.exports={BuildControl:"style_BuildControl__3ngAS",Label:"style_Label__2cG_B",Less:"style_Less__2Z0OA"}},25:function(e,t,r){e.exports={MenuItem:"style_MenuItem__3X1O2",active:"style_active__2hJa4"}},28:function(e,t,r){e.exports={Toolbar:"style_Toolbar__39Fw-",HideOnMobile:"style_HideOnMobile__1oQUi"}},29:function(e,t,r){e.exports={BuildControls:"style_BuildControls__3LCNt",OrderButton:"style_OrderButton__wrOmf",enable:"style_enable__3eTHo"}},30:function(e,t,r){e.exports={Button:"style_Button__3gWXH",Success:"style_Success__1ZIWk",Danger:"style_Danger__1Rw18"}},39:function(e,t,r){e.exports={Content:"style_Content__1RLS5"}},41:function(e,t,r){e.exports={HamburgerMenu:"style_HamburgerMenu__2F3Td"}},42:function(e,t,r){e.exports={Logo:"style_Logo__2B59F"}},44:function(e,t,r){e.exports={Menu:"style_Menu__3Pdb1"}},45:function(e,t,r){e.exports={Burger:"style_Burger__3hK5p"}},46:function(e,t,r){e.exports={Modal:"style_Modal__1X6Bt"}},47:function(e,t,r){e.exports={Shadow:"style_Shadow__1nq-a"}},48:function(e,t,r){e.exports={Loader:"style_Loader__6bz_m",load6:"style_load6__1_bJ5",round:"style_round__2M7Nc"}},49:function(e,t,r){e.exports={Order:"style_Order__1yrcA"}},50:function(e,t,r){e.exports={ShippingPage:"style_ShippingPage__3Txf8"}},51:function(e,t,r){e.exports={ContactData:"style_ContactData__1ApSi"}},52:function(e,t,r){e.exports={Login:"style_Login__m7HLI"}},53:function(e,t,r){e.exports={Signup:"style_Signup__32fhN"}},59:function(e,t,r){},88:function(e,t,r){"use strict";r.r(t);var n=r(1),s=r(22),o=r.n(s),a=(r(59),r(5)),c=r(6),i=r(8),d=r(7),u=r(39),l=r.n(u),j=r(4),b=r(3),g=r(41),O=r.n(g),p=r(0),h=function(e){return Object(p.jsxs)("div",{className:O.a.HamburgerMenu,onClick:e.toggleSideBar,children:[Object(p.jsx)("div",{}),Object(p.jsx)("div",{}),Object(p.jsx)("div",{})]})},f=r(42),_=r.n(f),x=r.p+"static/media/burger-logo.ec69c7f6.png",S=function(){return Object(p.jsx)("div",{className:_.a.Logo,children:Object(p.jsx)("img",{src:x,alt:"logo"})})},y=r(25),m=r.n(y),v=r(14),R=function(e){return Object(p.jsx)("li",{className:m.a.MenuItem,children:Object(p.jsxs)(v.b,{exact:e.exact,activeClassName:m.a.active,to:e.link,children:[e.children," "]})})},I=r(44),E=r.n(I),C=Object(b.b)((function(e){return{userId:e.signupLoginReducer.userId}}))((function(e){return Object(p.jsx)("div",{children:Object(p.jsx)("ul",{className:E.a.Menu,children:e.userId?Object(p.jsxs)(n.Fragment,{children:[Object(p.jsx)(R,{exact:!0,link:"/",children:"New Order"}),Object(p.jsx)(R,{link:"/orders",children:"Orders"}),Object(p.jsx)(R,{link:"/logout",children:"Logout"})]}):Object(p.jsxs)(n.Fragment,{children:[Object(p.jsx)(R,{link:"/login",children:"Login"}),Object(p.jsx)(R,{link:"/signup",children:"SignUp"})]})})})})),w=r(28),N=r.n(w),k=function(e){return Object(p.jsxs)("header",{className:N.a.Toolbar,children:[Object(p.jsx)(h,{toggleSideBar:e.toggleSideBar}),Object(p.jsx)(S,{}),Object(p.jsx)("nav",{className:N.a.HideOnMobile,children:Object(p.jsx)(C,{})})]})},T=r(11),L=r.n(T),D=function(e){return"bread-top"===e.type?Object(p.jsxs)("div",{className:L.a.BreadTop,children:[Object(p.jsx)("div",{className:L.a.Seed}),Object(p.jsx)("div",{className:"".concat(L.a.Seed," ").concat(L.a.Second)}),Object(p.jsx)("div",{className:"".concat(L.a.Seed," ").concat(L.a.Third)}),Object(p.jsx)("div",{className:"".concat(L.a.Seed," ").concat(L.a.Fourth)})]}):"salad"===e.type?Object(p.jsx)("div",{className:L.a.Salad}):"bacon"===e.type?Object(p.jsx)("div",{className:L.a.Bacon}):"meat"===e.type?Object(p.jsx)("div",{className:L.a.Meat}):"cheese"===e.type?Object(p.jsx)("div",{className:L.a.Cheese}):"bread-bottom"===e.type?Object(p.jsx)("div",{className:L.a.BreadBottom}):Object(p.jsx)("div",{children:"..."})},B=r(45),M=r.n(B),P=Object(b.b)((function(e){return{ingredients:e.burgerReducer.ingredients}}))(Object(j.g)((function(e){var t=[];return Object.entries(e.ingredients).map((function(e){for(var r=0;r<e[1];r++)t.push(Object(p.jsx)(D,{type:e[0]},"".concat(e[0]).concat(r)));return null})),0===t.length&&(t=Object(p.jsx)("p",{children:" Please choose burger ingredients ... "})),Object(p.jsxs)("div",{className:M.a.Burger,children:[Object(p.jsx)(D,{type:"bread-top"}),t,Object(p.jsx)(D,{type:"bread-bottom"})]})}))),A=r(2),U=r(29),G=r.n(U),F=r(20),Z=r.n(F),H=function(e){return Object(p.jsxs)("div",{className:Z.a.BuildControl,children:[Object(p.jsx)("div",{className:Z.a.Label,children:e.ingredient}),Object(p.jsx)("button",{className:Z.a.Less,onClick:function(){return e.deleteEvent(e.type)},disabled:e.disabledIngredient,children:"Delete"}),Object(p.jsx)("button",{className:Z.a.More,onClick:function(){return e.addEvent(e.type)},children:"Add"})]})},V=Object(b.b)((function(e){return{ingredients:e.burgerReducer.ingredients,totalPrice:e.burgerReducer.totalPrice,disabledOrder:!e.burgerReducer.purchasing,ingredientNames:e.burgerReducer.ingredientNames}}),(function(e){return{addIngredient:function(t){return e(function(e){return{type:"ADD_INGREDIENT",ingredient:e}}(t))},removeIngredient:function(t){return e(function(e){return{type:"REMOVE_INGREDIENT",ingredient:e}}(t))}}}))((function(e){var t=Object(A.a)({},e.ingredients);for(var r in t)t[r]=t[r]<=0;return Object(p.jsxs)("div",{className:G.a.BuildControls,children:[Object(p.jsxs)("p",{children:["Total Price: ",Object(p.jsx)("strong",{children:e.totalPrice})]}),Object.keys(e.ingredientNames).map((function(r){return Object(p.jsx)(H,{addEvent:e.addIngredient,deleteEvent:e.removeIngredient,disabledIngredient:t[r],type:r,ingredient:e.ingredientNames[r]},r)})),Object(p.jsx)("button",{onClick:e.showConfirmModal,className:G.a.OrderButton,disabled:e.disabledOrder,children:"Check Out"})]})})),q=r(46),z=r.n(q),X=r(47),Y=r.n(X),W=function(e){return e.show?Object(p.jsx)("div",{onClick:e.close,className:Y.a.Shadow}):null},K=function(e){return Object(p.jsxs)("div",{children:[Object(p.jsx)(W,{close:e.closeConfirmModal,show:e.show}),Object(p.jsx)("div",{style:{transform:e.show?"translateY(0)":"translateY(-100vh)",opacity:e.show?"1":"0"},className:z.a.Modal,children:e.children})]})},J=r(30),Q=r.n(J),$=function(e){return Object(p.jsx)("button",{className:"".concat(Q.a.Button," ").concat(Q.a[e.btnType]),onClick:e.clicked,children:e.text})},ee=Object(b.b)((function(e){return{ingredients:e.burgerReducer.ingredients,ingredientNames:e.burgerReducer.ingredientNames,totalPrice:e.burgerReducer.totalPrice}}))((function(e){return Object(p.jsxs)("div",{children:[Object(p.jsx)("h3",{children:"Your Order"}),Object(p.jsx)("p",{children:"your chosen ingredients"}),Object(p.jsx)("ul",{children:Object.keys(e.ingredients).map((function(t){return Object(p.jsxs)("li",{children:[e.ingredientNames[t]," : ",e.ingredients[t]]},t)}))}),Object(p.jsxs)("strong",{children:["Your Total Price : ",e.totalPrice," MNT "]}),Object(p.jsx)("p",{children:"go to next step ?"}),Object(p.jsx)($,{clicked:e.onCancel,btnType:"Danger",text:"Decline"}),Object(p.jsx)($,{clicked:e.onContinue,btnType:"Success",text:"Continue"})]})})),te=r(48),re=r.n(te),ne=function(){return Object(p.jsx)("div",{className:re.a.Loader})},se=function(e){Object(i.a)(r,e);var t=Object(d.a)(r);function r(){var e;Object(a.a)(this,r);for(var n=arguments.length,s=new Array(n),o=0;o<n;o++)s[o]=arguments[o];return(e=t.call.apply(t,[this].concat(s))).state={confirmOrder:!1,loading:!1},e.showConfirmModal=function(){e.setState({confirmOrder:!0})},e.closeConfirmModal=function(){e.setState({confirmOrder:!1})},e.continueOrder=function(){e.props.history.push("/shipping")},e}return Object(c.a)(r,[{key:"render",value:function(){return Object(p.jsxs)("div",{children:[Object(p.jsx)(K,{closeConfirmModal:this.closeConfirmModal,show:this.state.confirmOrder,children:this.state.loading?Object(p.jsx)(ne,{}):Object(p.jsx)(ee,{onCancel:this.closeConfirmModal,onContinue:this.continueOrder})}),this.state.loading&&Object(p.jsx)(ne,{}),Object(p.jsx)(P,{}),Object(p.jsx)(V,{showConfirmModal:this.showConfirmModal})]})}}]),r}(n.Component),oe=r(17),ae=r.n(oe),ce=function(e){var t=[ae.a.SideBar,ae.a.Close];return e.showSidebar&&(t=[ae.a.SideBar,ae.a.Open]),Object(p.jsxs)("div",{children:[Object(p.jsx)(W,{show:e.showSidebar,close:e.toggleSideBar}),Object(p.jsxs)("div",{onClick:e.toggleSideBar,className:t.join(" "),children:[Object(p.jsx)("div",{className:ae.a.Logo,children:Object(p.jsx)(S,{})}),Object(p.jsx)(C,{})]})]})},ie=r(49),de=r.n(ie),ue=function(e){return Object(p.jsxs)("div",{className:de.a.Order,children:[Object(p.jsxs)("p",{children:["Ingredients : Bacon : ",e.order.ingredients.bacon,", Salad :",e.order.ingredients.salad,", Meat : ",e.order.ingredients.meat,", Cheese : ",e.order.ingredients.cheese,","]}),Object(p.jsxs)("p",{children:["Address :",e.order.address.name," | ",e.order.address.street," |",e.order.address.city]}),Object(p.jsxs)("p",{children:["Total Price : ",Object(p.jsxs)("strong",{children:[e.order.totalPrice," MNT"]})]})]})},le=r(15),je=r.n(le),be=je.a.create({baseURL:"https://burger-43020-default-rtdb.asia-southeast1.firebasedatabase.app/"}),ge=function(){return{type:"LOAD_ORDERS_START"}},Oe=function(e){return{type:"LOAD_ORDERS_SUCCESS",orders:e}},pe=function(e){return{type:"LOAD_ORDERS_ERROR",error:e}},he=function(){return{type:"SAVE_ORDER_START"}},fe=function(){return{type:"SAVE_ORDER_SUCCESS"}},_e=function(e){return{type:"SAVE_ORDER_ERROR",errorMessage:e}},xe=function(e){Object(i.a)(r,e);var t=Object(d.a)(r);function r(){return Object(a.a)(this,r),t.apply(this,arguments)}return Object(c.a)(r,[{key:"componentDidMount",value:function(){this.props.loadOrders(this.props.userId)}},{key:"render",value:function(){return Object(p.jsx)("div",{children:this.props.loading?Object(p.jsx)(ne,{}):this.props.orders.map((function(e){return Object(p.jsx)(ue,{order:e[1]},e[0])}))})}}]),r}(n.Component),Se=Object(b.b)((function(e){return{loading:e.orderReducer.loading,orders:e.orderReducer.orders,userId:e.signupLoginReducer.userId}}),(function(e){return{loadOrders:function(t){return e(function(e){return function(t,r){t(ge());var n=r().signupLoginReducer.token;be.get("orders.json?auth=".concat(n,'&orderBy="userId"&equalTo="').concat(e,'"')).then((function(e){var r=Object.entries(e.data).reverse();t(Oe(r))})).catch((function(e){return t(pe(e))}))}}(t))}}}))(xe),ye=r(50),me=r.n(ye),ve=r(51),Re=r.n(ve),Ie=function(e){Object(i.a)(r,e);var t=Object(d.a)(r);function r(){var e;Object(a.a)(this,r);for(var n=arguments.length,s=new Array(n),o=0;o<n;o++)s[o]=arguments[o];return(e=t.call.apply(t,[this].concat(s))).state={name:null,city:null,street:null},e.changeName=function(t){e.setState({name:t.target.value})},e.changeCity=function(t){e.setState({city:t.target.value})},e.changeStreet=function(t){e.setState({street:t.target.value})},e.saveOrder=function(){var t={userId:e.props.userId,ingredients:e.props.ingredients,totalPrice:e.props.totalPrice,address:{name:e.state.name,city:e.state.city,street:e.state.street}};e.props.saveOrderAction(t)},e}return Object(c.a)(r,[{key:"componentDidUpdate",value:function(){this.props.newOrderStatus.finished&&!this.props.newOrderStatus.error&&this.props.history.replace("/orders")}},{key:"render",value:function(){return Object(p.jsxs)("div",{className:Re.a.ContactData,children:["Total Price : ",this.props.totalPrice,Object(p.jsx)("div",{children:this.props.newOrderStatus.error&&"Order save process failed : ".concat(this.props.newOrderStatus.error)}),this.props.newOrderStatus.saving?Object(p.jsx)(ne,{}):Object(p.jsxs)("div",{children:[Object(p.jsx)("input",{onChange:this.changeName,type:"text",name:"name",placeholder:"your name"}),Object(p.jsx)("input",{onChange:this.changeCity,type:"text",name:"city",placeholder:"your city"}),Object(p.jsx)("input",{onChange:this.changeStreet,type:"text",name:"street",placeholder:"your street address"}),Object(p.jsx)($,{text:"Sent",btnType:"Success",clicked:this.saveOrder})]})]})}}]),r}(n.Component),Ee=Object(b.b)((function(e){return{totalPrice:e.burgerReducer.totalPrice,ingredients:e.burgerReducer.ingredients,newOrderStatus:e.orderReducer.newOrderStatus,userId:e.signupLoginReducer.userId}}),(function(e){return{saveOrderAction:function(t){return e(function(e){return function(t,r){t(he());var n=r().signupLoginReducer.token;be.post("orders.json?auth=".concat(n),e).then((function(e){t(fe())})).catch((function(e){t(_e(e))}))}}(t))}}}))(Object(j.g)(Ie)),Ce=function(e){Object(i.a)(r,e);var t=Object(d.a)(r);function r(){var e;Object(a.a)(this,r);for(var n=arguments.length,s=new Array(n),o=0;o<n;o++)s[o]=arguments[o];return(e=t.call.apply(t,[this].concat(s))).goBack=function(){e.props.history.goBack()},e.showContactData=function(){e.props.history.push("/shipping/contact")},e}return Object(c.a)(r,[{key:"render",value:function(){return console.log(this.props),Object(p.jsxs)("div",{className:me.a.ShippingPage,children:[Object(p.jsx)("p",{style:{fontSize:"24px"},children:Object(p.jsx)("strong",{children:" Your Order "})}),Object(p.jsx)("p",{style:{fontSize:"24px"},children:Object(p.jsxs)("strong",{children:["Total Price: ",this.props.totalPrice]})}),Object(p.jsx)(P,{}),Object(p.jsx)($,{clicked:this.goBack,btnType:"Danger",text:"Decline shipping"}),Object(p.jsx)($,{clicked:this.showContactData,btnType:"Success",text:"Enter shipping information"}),Object(p.jsx)(j.b,{path:"/shipping/contact",children:Object(p.jsx)(Ee,{})})]})}}]),r}(n.Component),we=Object(b.b)((function(e){return{totalPrice:e.burgerReducer.totalPrice}}))(Ce),Ne=r(52),ke=r.n(Ne),Te=function(){return{type:"LOGIN_USER_START"}},Le=function(e,t){return{type:"LOGIN_USER_SUCCESS",token:e,userId:t}},De=function(e){return{type:"LOGIN_USER_ERROR",error:e}},Be=function(){return localStorage.removeItem("token"),localStorage.removeItem("userId"),localStorage.removeItem("expireDate"),localStorage.removeItem("refreshToken"),{type:"LOGOUT"}},Me=function(e){return function(e){je.a.post("https://securetoken.googleapis.com/v1/token?key=AIzaSyBynCwZZ2y9ytKQOlon2_FODGqvu55jN44",{grand_type:"refresh_token",refresh_token:localStorage.getItem("refreshToken")}).then((function(t){var r=t.data.id_token,n=t.data.user_id;e(Le(r,n))})).catch((function(t){e(De(t))}))}},Pe=function(e){Object(i.a)(r,e);var t=Object(d.a)(r);function r(){var e;Object(a.a)(this,r);for(var n=arguments.length,s=new Array(n),o=0;o<n;o++)s[o]=arguments[o];return(e=t.call.apply(t,[this].concat(s))).state={email:"",password:""},e.changeEmail=function(t){e.setState({email:t.target.value})},e.changePassword=function(t){e.setState({password:t.target.value})},e.login=function(){e.props.login(e.state.email,e.state.password)},e}return Object(c.a)(r,[{key:"render",value:function(){return Object(p.jsxs)("div",{className:ke.a.Login,children:[this.props.userId&&Object(p.jsx)(j.a,{to:"/orders"}),Object(p.jsx)("input",{type:"text",placeholder:"Email",onChange:this.changeEmail}),Object(p.jsx)("input",{type:"password",placeholder:"Enter your password",onChange:this.changePassword}),this.props.firebaseError&&Object(p.jsxs)("div",{style:{color:"red"},children:[this.props.firebaseError," | ",this.props.firebaseErrorCode]}),this.props.logginIn?Object(p.jsx)(ne,{}):Object(p.jsx)($,{text:"Login",btnType:"Success",clicked:this.login})]})}}]),r}(n.Component),Ae=Object(b.b)((function(e){return{logginIn:e.signupLoginReducer.logginIn,firebaseError:e.signupLoginReducer.firebaseError,firebaseErrorCode:e.signupLoginReducer.firebaseErrorCode,userId:e.signupLoginReducer.userId}}),(function(e){return{login:function(t,r){return e(function(e,t){return function(r){r(Te());var n={email:e,password:t,returnSecureToken:!0};je.a.post("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBynCwZZ2y9ytKQOlon2_FODGqvu55jN44",n).then((function(e){var t=e.data.idToken,n=e.data.localId,s=e.data.expiresIn,o=new Date((new Date).getTime()+1e3*s),a=e.data.refreshToken;localStorage.setItem("token",t),localStorage.setItem("userId",n),localStorage.setItem("expireDate",o),localStorage.setItem("refreshToken",a),r(Le(t,n)),r(Me(1e3*s))})).catch((function(e){r(De(e))}))}}(t,r))}}}))(Pe),Ue=r(53),Ge=r.n(Ue),Fe=function(){return{type:"SIGNUP_USER_START"}},Ze=function(e,t){return{type:"SIGNUP_USER_SUCCESS",token:e,userId:t}},He=function(e){return{type:"SIGNUP_USER_ERROR",error:e}},Ve=function(e){Object(i.a)(r,e);var t=Object(d.a)(r);function r(){var e;Object(a.a)(this,r);for(var n=arguments.length,s=new Array(n),o=0;o<n;o++)s[o]=arguments[o];return(e=t.call.apply(t,[this].concat(s))).state={email:"",password1:"",password2:"",error:""},e.changeEmail=function(t){e.setState({email:t.target.value})},e.changePassword1=function(t){e.setState({password1:t.target.value})},e.changePassword2=function(t){e.setState({password2:t.target.value})},e.signup=function(){e.state.password1===e.state.password2?e.props.signupUser(e.state.email,e.state.password1):e.setState({error:"Password does not match"})},e}return Object(c.a)(r,[{key:"render",value:function(){return Object(p.jsxs)("div",{className:Ge.a.Signup,children:[this.props.userId&&Object(p.jsx)(j.a,{to:"/"}),Object(p.jsx)("h1",{children:"Login Form"}),Object(p.jsx)("div",{children:"Enter Your information"}),Object(p.jsx)("input",{type:"text",placeholder:"Email",onChange:this.changeEmail}),Object(p.jsx)("input",{type:"password",placeholder:"Enter your password",onChange:this.changePassword1}),Object(p.jsx)("input",{type:"password",placeholder:"Re-Enter your password",onChange:this.changePassword2}),this.state.error&&Object(p.jsx)("div",{style:{color:"red"},children:this.state.error}),this.props.firebaseError&&Object(p.jsx)("div",{style:{color:"red"},children:this.props.firebaseError}),this.props.saving?Object(p.jsx)(ne,{}):Object(p.jsx)($,{text:"Register",btnType:"Success",clicked:this.signup})]})}}]),r}(n.Component),qe=Object(b.b)((function(e){return{saving:e.signupLoginReducer.saving,firebaseError:e.signupLoginReducer.firebaseError,userId:e.signupLoginReducer.userId}}),(function(e){return{signupUser:function(t,r){return e(function(e,t){return function(r){r(Fe());var n={email:e,password:t,returnSecureToken:!0};je.a.post("https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBynCwZZ2y9ytKQOlon2_FODGqvu55jN44",n).then((function(e){var t=e.data.idToken,n=e.data.localId;localStorage.setItem("token",t),localStorage.setItem("userId",n),r(Ze(t,n))})).catch((function(e){r(He(e))}))}}(t,r))}}}))(Ve),ze=function(e){Object(i.a)(r,e);var t=Object(d.a)(r);function r(){var e;Object(a.a)(this,r);for(var n=arguments.length,s=new Array(n),o=0;o<n;o++)s[o]=arguments[o];return(e=t.call.apply(t,[this].concat(s))).componentDidMount=function(){e.props.logout()},e}return Object(c.a)(r,[{key:"render",value:function(){return Object(p.jsx)(j.a,{to:"/login"})}}]),r}(n.Component),Xe=Object(b.b)(null,(function(e){return{logout:function(){return e(Be())}}}))(ze),Ye=function(e){Object(i.a)(r,e);var t=Object(d.a)(r);function r(){var e;Object(a.a)(this,r);for(var n=arguments.length,s=new Array(n),o=0;o<n;o++)s[o]=arguments[o];return(e=t.call.apply(t,[this].concat(s))).state={showSidebar:!1},e.toggleSideBar=function(){e.setState((function(e){return{showSidebar:!e.showSidebar}}))},e.componentDidMount=function(){var t=localStorage.getItem("token"),r=localStorage.getItem("userId"),n=new Date(localStorage.getItem("expireDate"));localStorage.getItem("refreshToken");t&&r&&(n>new Date?(e.props.autoLogin(t,r),e.props.autoLogoutAfterMillisec(n.getTime()-(new Date).getTime())):e.props.logout())},e}return Object(c.a)(r,[{key:"render",value:function(){return Object(p.jsxs)("div",{children:[Object(p.jsx)(k,{toggleSideBar:this.toggleSideBar}),Object(p.jsx)(ce,{showSidebar:this.state.showSidebar,toggleSideBar:this.toggleSideBar}),Object(p.jsxs)("main",{className:l.a.Content,children:["UserID: ",this.props.userId,this.props.userId?Object(p.jsxs)(j.d,{children:[Object(p.jsx)(j.b,{path:"/shipping",component:we}),Object(p.jsx)(j.b,{path:"/orders",component:Se}),Object(p.jsx)(j.b,{path:"/logout",component:Xe}),Object(p.jsx)(j.b,{path:"/",component:se})]}):Object(p.jsxs)(j.d,{children:[Object(p.jsx)(j.b,{path:"/login",component:Ae}),Object(p.jsx)(j.b,{path:"/signup",component:qe}),Object(p.jsx)(j.a,{to:"/login"})]})]})]})}}]),r}(n.Component),We=Object(b.b)((function(e){return{userId:e.signupLoginReducer.userId}}),(function(e){return{autoLogin:function(t,r){return e(Le(t,r))},logout:function(){e(Be())},autoLogoutAfterMillisec:function(t){e(Me(t))}}}))(Ye),Ke=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,89)).then((function(t){var r=t.getCLS,n=t.getFID,s=t.getFCP,o=t.getLCP,a=t.getTTFB;r(e),n(e),s(e),o(e),a(e)}))},Je=r(21),Qe=r(54),$e=r(19),et={ingredients:{salad:0,meat:0,cheese:0,bacon:0},totalPrice:0,purchasing:!1,ingredientNames:{bacon:"Bacon",cheese:"Cheese",meat:"Meat",salad:"Salad"}},tt={salad:150,cheese:250,bacon:800,meat:1500},rt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:et,t=arguments.length>1?arguments[1]:void 0;if("ADD_INGREDIENT"===t.type)return Object(A.a)(Object(A.a)({},e),{},{ingredients:Object(A.a)(Object(A.a)({},e.ingredients),{},Object($e.a)({},t.ingredient,e.ingredients[t.ingredient]+1)),totalPrice:e.totalPrice+tt[t.ingredient],purchasing:!0});if("REMOVE_INGREDIENT"===t.type){var r=e.totalPrice-tt[t.ingredient];return Object(A.a)(Object(A.a)({},e),{},{ingredients:Object(A.a)(Object(A.a)({},e.ingredients),{},Object($e.a)({},t.ingredient,e.ingredients[t.ingredient]-1)),totalPrice:r,purchasing:r>0})}return e},nt={orders:[],loading:!1,error:null,newOrderStatus:{saving:!1,finished:!1,error:null}},st=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:nt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOAD_ORDERS_START":return Object(A.a)(Object(A.a)({},e),{},{loading:!0});case"LOAD_ORDERS_SUCCESS":return Object(A.a)(Object(A.a)({},e),{},{loading:!1,orders:t.orders});case"LOAD_ORDERS_ERROR":return Object(A.a)(Object(A.a)({},e),{},{loading:!1,error:t.error});case"SAVE_ORDER_START":return Object(A.a)(Object(A.a)({},e),{},{newOrderStatus:Object(A.a)(Object(A.a)({},e.newOrderStatus),{},{saving:!0})});case"SAVE_ORDER_SUCCESS":return Object(A.a)(Object(A.a)({},e),{},{newOrderStatus:Object(A.a)(Object(A.a)({},e.newOrderStatus),{},{saving:!1,finished:!0,error:null})});case"SAVE_ORDER_ERROR":return Object(A.a)(Object(A.a)({},e),{},{newOrderStatus:Object(A.a)(Object(A.a)({},e.newOrderStatus),{},{saving:!1,finished:!0,error:t.errorMessage})});default:return e}},ot={saving:!1,finished:!1,firebaseError:"",token:null,userId:null,logginIn:!1,firebaseErrorCode:""},at=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ot,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SIGNUP_USER_START":return Object(A.a)(Object(A.a)({},e),{},{saving:!0});case"SIGNUP_USER_SUCCESS":return Object(A.a)(Object(A.a)({},e),{},{saving:!1,finished:!0,token:t.token,userId:t.userId});case"SIGNUP_USER_ERROR":return Object(A.a)(Object(A.a)({},e),{},{login:!1,finsihed:!0,firebaseError:t.error.response.data.error.message});case"LOGIN_USER_START":return Object(A.a)(Object(A.a)({},e),{},{logginIn:!0});case"LOGIN_USER_SUCCESS":return Object(A.a)(Object(A.a)({},e),{},{logginIn:!1,token:t.token,userId:t.userId});case"LOGIN_USER_ERROR":return Object(A.a)(Object(A.a)({},e),{},{logginIn:!1,firebaseError:t.error.response.data.error.message,firebaseErrorCode:t.error.response.data.error.code});case"LOGOUT":return Object(A.a)(Object(A.a)({},e),{},{token:null,userId:null,firebaseError:null,firebaseErrorCode:null});default:return e}},ct=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||Je.c,it=Object(Je.b)({burgerReducer:rt,orderReducer:st,signupLoginReducer:at}),dt=[function(e){return function(t){return function(r){console.log("My Logger Middleware : Dispatching ==> ",r),console.log("My Logger Middleware : State before: ",e.getState());var n=t(r);return console.log("My Logger Middleware : State after: ",n),n}}},Qe.a],ut=Object(Je.d)(it,ct(Je.a.apply(void 0,dt)));o.a.render(Object(p.jsx)(b.a,{store:ut,children:Object(p.jsx)(v.a,{children:Object(p.jsx)(We,{})})}),document.getElementById("root")),Ke()}},[[88,1,2]]]);
//# sourceMappingURL=main.096b9bbf.chunk.js.map
(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{44:function(e,t,s){},45:function(e,t,s){},47:function(e,t,s){},87:function(e,t,s){"use strict";s.r(t);var n=s(7),a=s.n(n),r=s(33),c=s.n(r),i=(s(44),s(17)),o=s(34),l=s(35),u=s(39),m=s(38),g=(s(45),s(0)),h=function(e){var t=e.item,s=e.currentUser,n=t.user===s?"alert alert-primary":"alert alert-dark";return Object(g.jsx)("div",{className:"message-container",children:Object(g.jsxs)("span",{className:n,children:[t.user,": ",t.text]})})},j=function(e){var t=e.value,s=e.onChange,n=e.onSend;return Object(g.jsxs)("form",{className:"input-group mb-3",onSubmit:n,children:[Object(g.jsx)("input",{className:"form-control",value:t,onChange:s}),Object(g.jsx)("button",{className:"btn btn-primary",type:"submit",children:"Send"})]})},d=(s(47),s(36)),b=s.n(d)()("https://simple-chat-app-project.herokuapp.com/"),f=s(37),p=s.n(f),v=function(e){Object(u.a)(s,e);var t=Object(m.a)(s);function s(){var e;Object(o.a)(this,s);for(var n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).socket=b,e.state={currentUser:"",messages:[],message:"",isLoggedIn:!1,users:{}},e.changeName=function(t){e.setState({currentUser:t.target.value})},e.inputName=function(){var t=e.state.currentUser;t.trim().length>0&&(e.socket.emit("change:name",t),e.setState({isLoggedIn:!0}))},e.sendMessage=function(t){t.preventDefault();var s=e.state,n=s.currentUser,a=s.message;a.trim().length>0&&(e.socket.emit("message",{user:n,message:a.trim()}),e.setState({message:""}))},e.changeMessage=function(t){e.setState({message:t.target.value})},e}return Object(l.a)(s,[{key:"componentDidMount",value:function(){var e=this;this.socket.on("message",(function(t){e.state.isLoggedIn&&e.setState((function(e){var s=e.messages,n=Object(i.a)(s);return n.length>10&&n.shift(),{messages:[].concat(Object(i.a)(n),[{user:t.user,text:t.message,id:p.a.generate()}])}}))})),this.socket.on("users",(function(t){e.setState({users:t})}))}},{key:"render",value:function(){var e=this.state,t=e.message,s=e.messages,n=e.currentUser,a=e.isLoggedIn,r=e.users;return a?Object(g.jsx)("div",{className:"container",children:Object(g.jsxs)("div",{className:"row align-items-start",children:[Object(g.jsxs)("div",{className:"message-list col-md-9",children:[Object(g.jsx)(j,{value:t,onChange:this.changeMessage,onSend:this.sendMessage}),Object(g.jsx)("div",{className:"messages",children:s.map((function(e){var t=e.id;return Object(g.jsx)(h,{item:e,currentUser:n},t)}))})]}),Object(g.jsx)("ul",{className:"list-group col-md-3",children:Object.values(r).map((function(e,t){return Object(g.jsx)("li",{className:"list-group-item",children:e},t)}))})]})}):Object(g.jsxs)("main",{className:"form-signin",children:[Object(g.jsx)("h4",{className:"form-floating mb-3",children:"Introduce yourself, please"}),Object(g.jsxs)("div",{className:"form-floating mb-3",children:[Object(g.jsx)("input",{className:"form-control",value:n,onChange:this.changeName,placeholder:"Enter Your Nickname",id:"floatingInput"}),Object(g.jsx)("label",{for:"floatingInput",children:"Nickname"})]}),Object(g.jsx)("button",{className:"w-100 btn btn-lg btn-primary",onClick:this.inputName,children:"Enter chat"})]})}}]),s}(n.PureComponent),O=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,88)).then((function(t){var s=t.getCLS,n=t.getFID,a=t.getFCP,r=t.getLCP,c=t.getTTFB;s(e),n(e),a(e),r(e),c(e)}))};c.a.render(Object(g.jsx)(a.a.StrictMode,{children:Object(g.jsx)(v,{})}),document.getElementById("root")),O()}},[[87,1,2]]]);
//# sourceMappingURL=main.5feedd04.chunk.js.map
(this["webpackJsonpshopify-winter"]=this["webpackJsonpshopify-winter"]||[]).push([[0],{41:function(e,t,a){e.exports=a.p+"static/media/loader.de50e2e9.gif"},53:function(e,t,a){e.exports=a(83)},58:function(e,t,a){},59:function(e,t,a){},82:function(e,t,a){},83:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(7),o=a.n(i),l=(a(58),a(59),a(12)),c=a(13),s=a(16),m=a(15),u=a(87),d=a(88),p=a(89),h=a(90),f=a(45),v=a(91),g=a(92),E=a(39),y=a(46),b=a(86),O=a(10),S={borderRadius:"30px"},N=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).handleOnClick=function(t){e.props.addNominee(e.props.movie)},e}return Object(c.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{style:{display:"flex",padding:"10px 10px"}},r.a.createElement("li",null,this.props.movie.Title," ("+this.props.movie.Year+")"),"\xa0",void 0===this.props.mainPageState.nominations.find((function(t){return t.imdbID===e.props.movie.imdbID}))?r.a.createElement(b.a,{style:{buttonStyle:S},variant:"primary",size:"sm",onClick:this.handleOnClick},"Nominate"):r.a.createElement(b.a,{style:{buttonStyle:S},variant:"primary",size:"sm",disabled:!0},"Nominate"))}}]),a}(n.Component),j=Object(O.b)((function(e){return{mainPageState:e.mainPageState}}),{addNominee:function(e){return function(t){t({type:"ADD_NOMINEE",payload:e})}}})(N),w=a(20),k=a.n(w),x=a(41),I=a.n(x),P=(a(82),{borderRadius:"30px"}),C=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).handleOnClick=function(t){e.props.deleteNominee(e.props.movie)},e}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{style:{display:"flex",padding:"10px 10px"}},r.a.createElement("li",null,this.props.movie.Title," ("+this.props.movie.Year+")"),"\xa0",r.a.createElement(b.a,{style:{buttonStyle:P},variant:"secondary",size:"sm",onClick:this.handleOnClick},"Remove"))}}]),a}(n.Component),D=Object(O.b)((function(e){return{mainPageState:e.mainPageState}}),{deleteNominee:function(e){return function(t){t({type:"DEL_NOMINEE",payload:e})}}})(C),R=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).fetchResults=function(e){var t="https://www.omdbapi.com/?apikey=9c54a82a&s=".concat(e);n.cancel&&n.cancel.cancel(),n.cancel=k.a.CancelToken.source(),k.a.get(t,{cancelToken:n.cancel.token}).then((function(e){n.setState({results:e.data.Search,error:e.data.Error,isLoading:!1})})).catch((function(e){(k.a.isCancel(e)||e)&&n.setState({isLoading:!1,error:"Failed to fetch results.Please check network"})}))},n.handleOnChange=function(e){var t=e.target.value;""===t?n.setState({keyword:t,results:[],error:""}):n.setState({keyword:t,isLoading:!0,error:""},(function(){n.fetchResults(t)}))},n.handleSubmit=function(e){e.preventDefault()},n.renderResults=function(){var e=n.state,t=e.results,a=e.keyword;if(void 0!==t)return r.a.createElement("div",{className:"results-container"},r.a.createElement("h4",{style:{textAlign:"justify",padding:"10px 30px"}},"Results for ",a,"..."),r.a.createElement("ul",null,t.map((function(e){return r.a.createElement(j,{movie:e})}))))},n.renderNominations=function(){var e=n.props.mainPageState.nominations;if(void 0!==e)return r.a.createElement("div",null,r.a.createElement("ul",null,e.map((function(e){return r.a.createElement(r.a.Fragment,{key:e.imdbID},r.a.createElement(D,{movie:e}))}))))},n.state={keyword:"",results:[],error:"",isLoading:!1,showAlert:!1},n.cancel="",n}return Object(c.a)(a,[{key:"render",value:function(){var e=this.state,t=e.error,a=e.isLoading;return r.a.createElement("div",null,r.a.createElement("br",null),r.a.createElement("br",null),this.props.mainPageState.nominations.length>=5&&r.a.createElement(g.a,{variant:"success"},r.a.createElement(g.a.Heading,null,"5 Nominations Banner"),r.a.createElement("p",null,"You have nominated atleast 5 movies! Enjoy!")),r.a.createElement("div",{style:{padding:"0 20%",margin:"0",width:"auto",borderRadius:"35px"}},r.a.createElement(u.a,null,r.a.createElement(d.a,{onSubmit:this.handleSubmit},r.a.createElement(p.a,{className:"mb-4"},r.a.createElement(h.a,{addonType:"prepend"},r.a.createElement(f.a,null,r.a.createElement(E.a,{icon:y.a}))),r.a.createElement(v.a,{placeholder:"Search for a movie",type:"text",onChange:this.handleOnChange}))))),r.a.createElement("div",{style:{display:"flex"}},""!==this.state.keyword&&this.renderResults(),r.a.createElement("div",{className:"nominations-container"},r.a.createElement("h4",{style:{textAlign:"justify",padding:"10px 30px"}},"Nominations"),this.props.mainPageState.nominations.length?this.renderNominations():r.a.createElement("p",null,"No nominations added. Please search for a movie and add them."))),t&&r.a.createElement("h3",{className:"errorMessage"},t),r.a.createElement("img",{src:I.a,className:"search-loading ".concat(a?"show":"hide"),alt:"loader"}))}}]),a}(n.Component),A=Object(O.b)((function(e){return{mainPageState:e.mainPageState}}))(R);var L=function(){return r.a.createElement("div",{className:"App"},r.a.createElement("h1",{className:"pageHeading"},"THE SHOPPIES"),r.a.createElement(A,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var T=a(8),M=a(47),J=a(17),H=a(26),_={nominations:null==localStorage.getItem("nominations")?[]:JSON.parse(localStorage.getItem("nominations"))},z=Object(T.combineReducers)({mainPageState:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_NOMINEE":var a=[].concat(Object(H.a)(e.nominations),[t.payload]);return localStorage.setItem("nominations",JSON.stringify(a)),Object(J.a)(Object(J.a)({},e),{},{nominations:[].concat(Object(H.a)(e.nominations),[t.payload])});case"DEL_NOMINEE":var n=e.nominations.filter((function(e){return e.imdbID!==t.payload.imdbID}));return localStorage.setItem("nominations",JSON.stringify(n)),Object(J.a)(Object(J.a)({},e),{},{nominations:n});default:return e}}}),B=a(49),W=[M.a],Y=Object(T.createStore)(z,{},Object(B.composeWithDevTools)(T.applyMiddleware.apply(void 0,W)));o.a.render(r.a.createElement(O.a,{store:Y},r.a.createElement(L,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[53,1,2]]]);
//# sourceMappingURL=main.a62b3b0a.chunk.js.map
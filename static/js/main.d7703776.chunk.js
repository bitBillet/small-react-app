(this["webpackJsonpsmall-react-app"]=this["webpackJsonpsmall-react-app"]||[]).push([[0],{34:function(e,t,a){e.exports=a(46)},39:function(e,t,a){},46:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(14),o=a.n(c),l=a(10),i=a(4),s=(a(39),a(9)),u=a(11);var m=Object(u.c)({items:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;return"FETCH_DATA_SUCCESS"===t.type?t.payload:e},itemsIsLoading:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0;return"ITEMS_IS_LOADING"===t.type?t.payload:e}}),p=a(31),h=Object(u.d)(m,Object(u.a)(p.a)),f=a(17),d=a(18),v=a(20),E=a(19),b=a(21),g=a(48),y=a(49),j=a(47),O=a(24),w=a.n(O),k=a(32);function C(e){return function(){var t=Object(k.a)(w.a.mark((function t(a){return w.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(e);case 2:t.sent.json().then((function(e){a({type:"FETCH_DATA_SUCCESS",payload:e}),a({type:"ITEMS_IS_LOADING",payload:!0})}));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}var I=a(16),D=function(e){function t(){var e,a;Object(f.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(v.a)(this,(e=Object(E.a)(t)).call.apply(e,[this].concat(r)))).searchHandler=function(e){var t=e.target.value;t?a.props.fetchData("http://api.tvmaze.com/search/shows?q=".concat(t)):a.props.fetchData("http://api.tvmaze.com/search/shows?q=stargate")},a}return Object(b.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return r.a.createElement(j.a,{style:{backgroundColor:"green",height:50,position:"fixed",top:0,zIndex:1e3,display:"flex",alignItems:"center",justifyContent:"center"},fluid:!0},r.a.createElement("input",{type:"search",placeholder:"search movie",onChange:this.searchHandler}))}}]),t}(n.Component),S=Object(s.b)(null,(function(e){return{fetchData:function(t){return e(C(t))}}}))(D),A=function(e){function t(){return Object(f.a)(this,t),Object(v.a)(this,Object(E.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){this.props.fetchData("http://api.tvmaze.com/search/shows?q=stargate")}},{key:"render",value:function(){var e,t=[],a=this.props,n=a.items,c=a.isLoad;if(c){e=n.map((function(e,t){var a=e.show,n=a.id,c=a.image,o=a.name;return r.a.createElement(g.a,{key:t},r.a.createElement(I.a,{to:"/about/".concat(t)},r.a.createElement("img",{src:c?c.medium:null,alt:n})),r.a.createElement("p",{style:{marginTop:10}}," ",o," "))}));for(var o=0;o<e.length;o++)t.push(r.a.createElement(y.a,{key:o,lg:"3",className:"gallery"},e[o],e[++o],e[++o]))}return console.log(n),r.a.createElement("div",null,r.a.createElement(S,null),r.a.createElement(j.a,null,c?t:"Loading..."))}}]),t}(n.Component),_=Object(s.b)((function(e){return{items:e.items,isLoad:e.itemsIsLoading}}),(function(e){return{fetchData:function(t){return e(C(t))}}}))(A),x=Object(s.b)((function(e){return{items:e.items}}))((function(e){var t=e.match.params.number,a=e.items[t].show,n=a.name,c=a.image,o=a.summary;return r.a.createElement(j.a,{className:"pt-4 About"},r.a.createElement(y.a,null,r.a.createElement(g.a,null,r.a.createElement("h1",null,n))),r.a.createElement(y.a,null,r.a.createElement(g.a,null,r.a.createElement("img",{src:c.original,alt:n}))),r.a.createElement(y.a,{className:"pt-4 pb-5"},r.a.createElement(g.a,null,r.a.createElement("h3",null,o?o.replace(/<[^>]+>/g,""):null))))}));var L=function(){return r.a.createElement(s.a,{store:h},r.a.createElement(l.c,null,r.a.createElement(l.a,{exact:!0,path:"/",component:_}),r.a.createElement(l.a,{path:"/about/:number",component:x})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var T=Object(i.a)();o.a.render(r.a.createElement(l.b,{history:T},r.a.createElement(L,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[34,1,2]]]);
//# sourceMappingURL=main.d7703776.chunk.js.map
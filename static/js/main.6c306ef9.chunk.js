(this.webpackJsonpstarwiki=this.webpackJsonpstarwiki||[]).push([[0],{31:function(e,t,r){},32:function(e,t,r){},38:function(e,t,r){},39:function(e,t,r){},40:function(e,t,r){},41:function(e,t,r){},42:function(e,t,r){},43:function(e,t,r){},44:function(e,t,r){},45:function(e,t,r){"use strict";r.r(t);var n=r(0),a=r(4),s=r.n(a),c=r(11),i=r(14),o=r(1),l=r.n(o),u=r(20),d=r.n(u),j=r(21),m=r(24),h=r(23),b=(r(31),function(){return Object(n.jsxs)("div",{className:"error",children:[Object(n.jsxs)("h2",{children:["Oops!",Object(n.jsx)("br",{})]}),Object(n.jsxs)("span",{children:["Something clearly went wrong..",Object(n.jsx)("br",{})]}),Object(n.jsxs)("span",{children:["Everything will work soon, don't worry :) ",Object(n.jsx)("br",{})]})]})}),p=function(e){Object(m.a)(r,e);var t=Object(h.a)(r);function r(){var e;Object(i.a)(this,r);for(var n=arguments.length,a=new Array(n),s=0;s<n;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).state={error:!1},e}return Object(j.a)(r,[{key:"componentDidCatch",value:function(){this.setState({error:!0})}},{key:"render",value:function(){return this.state.error?Object(n.jsx)(b,{}):this.props.children}}]),r}(o.Component),g=l.a.createContext(),O=g.Provider,f=(g.Consumer,r(5)),x=(r(32),function(){var e=Object(o.useContext)(g).pages;return Object(n.jsxs)("header",{className:"header",children:[Object(n.jsx)(f.b,{to:"/",className:"header-link",children:"star DB"}),Object(n.jsx)("nav",{children:Object(n.jsxs)("ul",{className:"header-ul",children:[Object(n.jsx)("li",{children:Object(n.jsx)(f.b,{to:"/"+e[0]+"/",children:e[0]})}),Object(n.jsx)("li",{children:Object(n.jsx)(f.b,{to:"/"+e[1]+"/",children:e[1]})}),Object(n.jsx)("li",{children:Object(n.jsx)(f.b,{to:"/"+e[2]+"/",children:e[2]})})]})}),Object(n.jsx)(v,{})]})}),v=function(){var e=Object(o.useContext)(g).pages;return Object(n.jsxs)("div",{className:"dropdown header-menu",children:[Object(n.jsx)("button",{className:"btn btn-secondary dropdown-toggle",type:"button",id:"dropdownMenuButton","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false",children:"Menu"}),Object(n.jsxs)("div",{className:"dropdown-menu header-menu-list","aria-labelledby":"dropdownMenuButton",children:[Object(n.jsx)(f.b,{className:"dropdown-item",to:"/"+e[0]+"/",children:e[0]}),Object(n.jsx)(f.b,{className:"dropdown-item",to:"/"+e[1]+"/",children:e[1]}),Object(n.jsx)(f.b,{className:"dropdown-item",to:"/"+e[2]+"/",children:e[2]})]})]})},w=r(9),I=r(6),G=(r(38),function(){return Object(n.jsx)("div",{className:"loadingio-spinner-eclipse-j6bz9624dx",children:Object(n.jsx)("div",{className:"ldio-0qmq0nafzgsp",children:Object(n.jsx)("div",{})})})}),N=(r(39),r(1).useContext),P=function(e){var t=e.item,r=t.id,a=t.name,s=e.sourceImg,c=e.record,i=e.namesHeader,o=N(g).GetNewUrlImg;return Object(n.jsxs)("section",{className:"alert alert-dark random-item",children:[Object(n.jsxs)("h1",{className:"random-item-header",children:["Random ",i]}),Object(n.jsx)("img",{className:"rounded random-item-img",src:s(r),alt:a,onError:function(){return o(".random-item-img")}}),Object(n.jsx)("h2",{className:"random-item-name",children:a}),Object(n.jsx)("ul",{className:"random-item-ul list-group",children:c})]})},C=function(e){var t,r=e.maxItem,a=e.sourceData,s=e.sourceImg,c=e.namesHeader,i=e.children,u=Object(o.useState)({}),d=Object(I.a)(u,2),j=d[0],m=d[1],h=Object(o.useState)({loading:!0,error:!1}),b=Object(I.a)(h,2),p=b[0],g=b[1],O=function(e){m(e),g(Object(w.a)(Object(w.a)({},p),{},{loading:!1}))},f=function e(){g(Object(w.a)(Object(w.a)({},p),{},{loading:!0}));var t=function(e,t){var r=e-.5+Math.random()*(t-e+1);return Math.round(r)}(1,r);null!==t&&a(t).then(O).catch((function(t){e()}))};return Object(o.useEffect)((function(){return f(),t=setInterval((function(){return f()}),6e4),function(){return clearInterval(t)}}),[]),p.loading?Object(n.jsx)("section",{className:"list-group random-item",children:Object(n.jsx)(G,{})}):Object(n.jsx)(P,{item:j,sourceImg:s,record:l.a.Children.map(i,(function(e){return l.a.cloneElement(e,{item:j})})),namesHeader:c})},U=(r(40),function(e){var t=e.item,r=e.field,a=e.label,s=e.reduction,c=void 0===s?"":s;return Object(n.jsxs)("li",{className:"list-group-item item-detalis-li",children:[a," ",t[r]," ",c]})}),_=function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";return Object(n.jsx)(U,{field:e,label:t+":",reduction:r})},y=function(){var e=Object(o.useContext)(g),t=e.GetPerson,r=e.GetImgPersonUrl2,a=e.namesHeader;return Object(n.jsxs)(C,{sourceImg:r,sourceData:t,maxItem:80,namesHeader:a[0],children:[_("eyeColor","Eye color"),_("birthYear","Birth year"),_("gender","Gender"),_("mass","Mass","kg"),_("height","Height","sm")]})},k=function(){var e=Object(o.useContext)(g),t=e.GetPlanet,r=e.GetImgPlanetUrl2,a=e.namesHeader;return Object(n.jsxs)(C,{sourceImg:r,sourceData:t,maxItem:60,namesHeader:a[1],children:[_("population","Population",""),_("surfaceWater","surface water","%"),_("terrain","Terrain"),_("rotationPeriod","Rotation period","day"),_("diameter","Diameter","km")]})},S=function(){var e=Object(o.useContext)(g),t=e.GetStarship,r=e.GetImgStarshipUrl2,a=e.namesHeader;return Object(n.jsxs)(C,{sourceImg:r,sourceData:t,maxItem:15,namesHeader:a[2],children:[_("starshipClass","Class"),_("length","Length","m"),_("maxAtmospheringSpeed","Max speed",""),_("crew","Crew"),_("passengers","passengers")]})},H=r(2),D=(r(41),Object(H.f)((function(e){var t=e.itemList,r=e.history,a=e.currentPage,s=t.map((function(e){return Object(n.jsx)("li",{className:"list-group-item item-list-view",onClick:function(){r.push("/".concat(a,"/").concat(e.id))},children:e.name},e.name)}));return Object(n.jsx)("ul",{className:"list-group item-list",children:s})}))),L=function(e){var t=e.onGetAlldata,r=e.onLoadItemDetalis,a=e.currentPage,s=Object(o.useState)(null),c=Object(I.a)(s,2),i=c[0],l=c[1],u=Object(o.useState)({loading:!0,error:!1}),d=Object(I.a)(u,2),j=d[0],m=d[1];return Object(o.useEffect)((function(){t().then((function(e){l(e),m(Object(w.a)(Object(w.a)({},j),{},{loading:!1}))})).catch((function(e){return m({loading:!1,error:!0})}))}),[]),j.loading?Object(n.jsx)("ul",{className:"list-group item-list",children:Object(n.jsx)(G,{})}):Object(n.jsx)(D,{itemList:i,onLoadItemDetalis:function(e){r(e)},currentPage:a})},M=(r(42),function(e){var t=e.item,r=e.img,a=e.record,s=e.namesHeader,c=t.name,i=Object(o.useContext)(g).GetNewUrlImg;return Object(n.jsxs)("section",{className:"item-detalis alert alert-dark",children:[Object(n.jsxs)("h2",{className:"item-detalis-header",children:["Selected ",s]}),Object(n.jsx)("img",{className:"rounded item-detalis-img",src:r,alt:c,onError:function(){return i(".item-detalis-img")}}),Object(n.jsx)("h3",{className:"item-detalis-name",children:c}),Object(n.jsx)("ul",{className:"list-group item-detalis-ul",children:a})]})}),A=Object(H.f)((function(e){var t,r=e.onGetData,a=e.getImgUrl,s=e.children,c=e.match,i=e.namesHeader,u=c.params.id,d=Object(o.useState)({item:null,img:null}),j=Object(I.a)(d,2),m=j[0],h=j[1],b=Object(o.useState)({loading:!0,error:!1}),p=Object(I.a)(b,2),g=p[0],O=p[1],f=Object(o.useCallback)((function(){null!==u&&void 0!==u&&(O((function(){return Object(w.a)(Object(w.a)({},g),{},{loading:!0,error:!0})})),r(u).then((function(e){h((function(){return{item:e,img:a(e)}})),O((function(){return Object(w.a)(Object(w.a)({},g),{},{loading:!1})}))})))}),[a,u,r]);Object(o.useEffect)((function(){f()}),[u,f]);var x=m.item;return g.loading?(t=null===x||void 0===x?Object(n.jsx)("div",{children:"Character selection pending ..."}):Object(n.jsx)(G,{}),Object(n.jsx)("section",{className:"item-detalis alert alert-dark",children:t})):Object(n.jsx)(M,{item:x,img:m.img,record:l.a.Children.map(s,(function(e){return l.a.cloneElement(e,{item:x})})),namesHeader:i})})),E=function(){var e=Object(o.useState)(null),t=Object(I.a)(e,2),r=t[0],a=t[1],s=Object(o.useContext)(g),c=s.GetAllPeople,i=s.GetPerson,u=s.GetImgPersonUrl,d=s.pages,j=s.namesHeader;return Object(n.jsxs)(l.a.Fragment,{children:[Object(n.jsx)(L,{onLoadItemDetalis:function(e){a(e)},onGetAlldata:c,currentPage:d[0]}),Object(n.jsxs)(A,{itemId:r,onGetData:i,getImgUrl:u,namesHeader:j[0],children:[_("eyeColor","Eye color"),_("birthYear","Birth year"),_("gender","Gender"),_("mass","Mass","kg"),_("height","Height","sm")]})]})},R=function(){var e=Object(o.useState)(null),t=Object(I.a)(e,2),r=t[0],a=t[1],s=Object(o.useContext)(g),c=s.GetImgPlanetUrl,i=s.GetPlanet,u=s.GetAllPlanets,d=s.pages,j=s.namesHeader;return Object(n.jsxs)(l.a.Fragment,{children:[Object(n.jsx)(L,{onLoadItemDetalis:function(e){a(e)},onGetAlldata:u,currentPage:d[1]}),Object(n.jsxs)(A,{itemId:r,onGetData:i,getImgUrl:c,namesHeader:j[1],children:[_("population","Population",""),_("surfaceWater","surface water","%"),_("terrain","Terrain"),_("rotationPeriod","Rotation period","day"),_("diameter","Diameter","km")]})]})},F=function(){var e=Object(o.useState)(null),t=Object(I.a)(e,2),r=t[0],a=t[1],s=Object(o.useContext)(g),c=s.GetImgStarshipUrl,i=s.GetStarship,u=s.GetAllStarships,d=s.pages,j=s.namesHeader;return Object(n.jsxs)(l.a.Fragment,{children:[Object(n.jsx)(L,{onLoadItemDetalis:function(e){a(e)},onGetAlldata:u,currentPage:d[2]}),Object(n.jsxs)(A,{itemId:r,onGetData:i,getImgUrl:c,namesHeader:j[2],children:[_("starshipClass","Class"),_("length","Length","m"),_("MGLT","MGLT","In h"),_("crew","Crew"),_("passengers","passengers")]})]})},B=(r(43),function(){return Object(n.jsxs)("div",{className:"not-found-view",children:[Object(n.jsxs)("h2",{children:["Page not found!",Object(n.jsx)("br",{})]}),Object(n.jsxs)("span",{children:["Unfortunately, there is no such page :(",Object(n.jsx)("br",{})]})]})}),T=(r(44),function(){var e=Object(o.useContext)(g).pages;return Object(n.jsx)("div",{className:"app",children:Object(n.jsx)("div",{className:"container",children:Object(n.jsx)("div",{className:"row",children:Object(n.jsx)("div",{className:"col-12",children:Object(n.jsxs)("div",{className:"app-gird",children:[Object(n.jsx)(x,{}),Object(n.jsxs)(H.c,{children:[Object(n.jsx)(H.a,{path:"/"+e[0]+"/:id?",render:function(){return Object(n.jsxs)(l.a.Fragment,{children:[Object(n.jsx)(y,{}),Object(n.jsx)(E,{})]})}}),Object(n.jsx)(H.a,{path:"/"+e[1]+"/:id?",render:function(){return Object(n.jsxs)(l.a.Fragment,{children:[Object(n.jsx)(k,{}),Object(n.jsx)(R,{})]})}}),Object(n.jsx)(H.a,{path:"/"+e[2]+"/:id?",render:function(){return Object(n.jsxs)(l.a.Fragment,{children:[Object(n.jsx)(S,{}),Object(n.jsx)(F,{})]})}}),Object(n.jsx)(H.a,{path:"/",exact:!0,render:function(){return Object(n.jsx)(l.a.Fragment,{})}}),Object(n.jsx)(H.a,{render:function(){return Object(n.jsx)(B,{})}})]})]})})})})})}),q=new function e(){var t=this;Object(i.a)(this,e),this.pages=["people","planets","starships"],this.namesHeader=["character","planet","starship"],this._apiUrl="https://swapi.dev/api/",this._imgUrl="https://starwars-visualguide.com/assets/img/",this._getId=function(e){return e.match(/\/([0-9]*)\/$/)[1]},this.getResource=function(){var e=Object(c.a)(s.a.mark((function e(r){var n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(t._apiUrl).concat(r));case 2:if((n=e.sent).status,!1!==n.ok){e.next=6;break}throw new Error("Could not fetch ".concat("".concat(t._apiUrl).concat(r)," received ",n.saltLength));case 6:return e.next=8,n.json();case 8:return e.abrupt("return",e.sent);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.GetAllPeople=Object(c.a)(s.a.mark((function e(){var r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getResource(t.pages[0]+"/");case 2:return r=e.sent,e.abrupt("return",r.results.map(t._transformPerson));case 4:case"end":return e.stop()}}),e)}))),this.GetPerson=function(){var e=Object(c.a)(s.a.mark((function e(r){var n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getResource(t.pages[0]+"/".concat(r,"/"));case 2:return n=e.sent,e.abrupt("return",t._transformPerson(n));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this._transformPerson=function(e){return{id:t._getId(e.url),name:e.name,gender:e.gender,birthYear:e.birth_year,eyeColor:e.eye_color,mass:e.mass,height:e.height}},this.GetImgPersonUrl=function(e){var r=e.id;return t._imgUrl+"characters/"+r+".jpg"},this.GetImgPersonUrl2=function(e){return t._imgUrl+"characters/"+e+".jpg"},this.GetAllPlanets=Object(c.a)(s.a.mark((function e(){var r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getResource(t.pages[1]+"/");case 2:return r=e.sent,e.abrupt("return",r.results.map(t._transformPlanet));case 4:case"end":return e.stop()}}),e)}))),this.GetPlanet=function(){var e=Object(c.a)(s.a.mark((function e(r){var n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getResource(t.pages[1]+"/".concat(r,"/"));case 2:return n=e.sent,e.abrupt("return",t._transformPlanet(n));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this._transformPlanet=function(e){return{id:t._getId(e.url),name:e.name,population:e.population,rotationPeriod:e.rotation_period,diameter:e.diameter,climate:e.climate,terrain:e.terrain,surfaceWater:e.surface_water}},this.GetImgPlanetUrl=function(e){var r=e.id;return t._imgUrl+t.pages[1]+"/"+r+".jpg"},this.GetImgPlanetUrl2=function(e){return t._imgUrl+t.pages[1]+"/"+e+".jpg"},this.GetAllStarships=Object(c.a)(s.a.mark((function e(){var r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getResource(t.pages[2]+"/");case 2:return r=e.sent,e.abrupt("return",r.results.map(t._transformStarship));case 4:case"end":return e.stop()}}),e)}))),this.GetStarship=function(){var e=Object(c.a)(s.a.mark((function e(r){var n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getResource(t.pages[2]+"/".concat(r,"/"));case 2:return n=e.sent,e.abrupt("return",t._transformStarship(n));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this._transformStarship=function(e){return{id:t._getId(e.url),name:e.name,model:e.model,starshipClass:e.starship_class,costInCredits:e.cost_in_credits,length:e.length,passengers:e.passengers,crew:e.crew,MGLT:e.MGLT}},this.GetImgStarshipUrl=function(e){var r=e.id;return t._imgUrl+t.pages[2]+"/"+r+".jpg"},this.GetImgStarshipUrl2=function(e){return t._imgUrl+t.pages[2]+"/"+e+".jpg"},this.GetNewUrlImg=function(e){document.querySelector(e).src="https://i.ibb.co/dMz5tpx/note404.jpg"}};d.a.render(Object(n.jsx)(p,{children:Object(n.jsx)(O,{value:q,children:Object(n.jsx)(f.a,{children:Object(n.jsx)(T,{})})})}),document.getElementById("root"))}},[[45,1,2]]]);
//# sourceMappingURL=main.6c306ef9.chunk.js.map
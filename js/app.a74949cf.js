(function(e){function t(t){for(var n,i,s=t[0],c=t[1],l=t[2],d=0,m=[];d<s.length;d++)i=s[d],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&m.push(r[i][0]),r[i]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);u&&u(t);while(m.length)m.shift()();return o.push.apply(o,l||[]),a()}function a(){for(var e,t=0;t<o.length;t++){for(var a=o[t],n=!0,s=1;s<a.length;s++){var c=a[s];0!==r[c]&&(n=!1)}n&&(o.splice(t--,1),e=i(i.s=a[0]))}return e}var n={},r={app:0},o=[];function i(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=e,i.c=n,i.d=function(e,t,a){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(a,n,function(t){return e[t]}.bind(null,n));return a},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var u=c;o.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"015f":function(e,t,a){"use strict";var n=a("7d71"),r=a.n(n);r.a},"034f":function(e,t,a){"use strict";var n=a("85ec"),r=a.n(n);r.a},"115f":function(e,t,a){"use strict";var n=a("cd8d"),r=a.n(n);r.a},1541:function(e,t,a){"use strict";var n=a("9d47"),r=a.n(n);r.a},2233:function(e,t,a){},"45fd":function(e,t,a){"use strict";var n=a("ce0f"),r=a.n(n);r.a},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d"),a("6cc5");var n=a("2b0e"),r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("Header"),a("FacebookUser",{on:{setLoginData:e.setLoginData}}),e._v("> "),a("Weather"),a("Map"),a("AddReservation",{attrs:{userName:e.userName,isConnected:e.isConnected}}),a("Reservations",{attrs:{isAdmin:e.isAdmin}}),a("Contact"),a("Footer")],1)},o=[],i=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},s=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("header",{staticClass:"header"},[a("nav",{staticClass:"navbar navbar-expand-lg navbar-dark bg-dark static-top"},[a("a",{staticClass:"navbar-brand",attrs:{href:"#"}},[e._v("Segway Rental Company")])])])}],c={name:"Header"},l=c,u=(a("fda5"),a("2877")),d=Object(u["a"])(l,i,s,!1,null,"684e1afe",null),m=d.exports,v=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"footer"},[a("div",{staticClass:"container"},[e._v(" Copyright © "+e._s((new Date).getFullYear())+" ")])])},p=[],f={name:"Footer"},h=f,b=(a("1541"),Object(u["a"])(h,v,p,!1,null,"6ec9fe1e",null)),g=b.exports,_=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},w=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"contact"},[a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-lg-12 text-center"},[e._v(" Contact for our shop on Streets: ")])])])])}],y={name:"Contact"},k=y,C=Object(u["a"])(k,_,w,!1,null,"4e74e600",null),x=C.exports,O=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"facebookUser"}},[a("facebook-login",{staticClass:"button",attrs:{appId:"657623535072697"},on:{login:e.onLogin,logout:e.onLogout,"get-initial-status":e.getUserData,"sdk-loaded":e.sdkLoaded}}),e.isConnected?a("div",{staticClass:"information"},[a("h1",[e._v("Hi "+e._s(e.name)+"! You are logged in.")]),a("div",{staticClass:"well"},[a("div",{staticClass:"list-item"},[a("img",{attrs:{src:e.picture}})]),a("div",{staticClass:"list-item"},[a("i",[e._v(e._s(e.name))])])])]):e._e()],1)},j=[],R=(a("b0c0"),a("6d09")),P=a.n(R),S={name:"FacebookUser",components:{facebookLogin:P.a},data:function(){return{isConnected:!1,name:"",email:"",personalID:"",picture:"",FB:void 0}},methods:{getUserData:function(){var e=this;this.FB.api("/me","GET",{fields:"id,name,email,picture"},(function(t){e.personalID=t.id,e.email=t.email,e.name=t.name,e.picture=t.picture.data.url;var a=e.isAdmin(e.email),n=[e.personalID,e.email,e.name,e.isConnected,a];e.$emit("setLoginData",n)}))},sdkLoaded:function(e){this.isConnected=e.isConnected,this.FB=e.FB,this.isConnected&&this.getUserData()},onLogin:function(){this.isConnected=!0,this.getUserData()},onLogout:function(){this.isConnected=!1;var e=[this.personalID,this.email,this.name,this.isConnected,!1];this.$emit("setLoginData",e)},isAdmin:function(e){return"sucharek7@gmail.com"===e}}},L=S,$=(a("45fd"),Object(u["a"])(L,O,j,!1,null,null,null)),A=$.exports,N=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticStyle:{height:"500px",width:"100%"}},[a("div",{staticStyle:{height:"200px overflow: auto"}},[a("p",[e._v("These are our stores. Click on them for more info!")]),a("br"),a("button",{staticClass:"btn btn-primary",on:{click:e.showLongText}},[e._v(" Show availablity in the store ")]),a("button",{staticClass:"btn btn-primary",on:{click:function(t){e.showMap=!e.showMap}}},[e._v(" Toggle map ")])]),e.showMap?a("l-map",{staticStyle:{height:"80%"},attrs:{zoom:e.zoom,center:e.center,options:e.mapOptions},on:{"update:center":e.centerUpdate,"update:zoom":e.zoomUpdate}},[a("l-tile-layer",{attrs:{url:e.url,attribution:e.attribution}}),a("l-marker",{attrs:{"lat-lng":e.withPopup}},[a("l-popup",[a("div",{on:{click:e.innerClick}},[e._v(" Store k.Gurgacza 6 "),a("p",{directives:[{name:"show",rawName:"v-show",value:e.showParagraph,expression:"showParagraph"}]},[e._v(" Available segways to rent: "+e._s(e.allAvailability.gurgacza)+" ")])])])],1),a("l-marker",{attrs:{"lat-lng":e.withPopup2}},[a("l-popup",[a("div",{on:{click:e.innerClick}},[e._v(" Store Karmelicka 45 "),a("p",{directives:[{name:"show",rawName:"v-show",value:e.showParagraph,expression:"showParagraph"}]},[e._v(" Available segways to rent: "+e._s(e.allAvailability.karmelicka)+" ")])])])],1)],1):e._e()],1)},E=[],z=a("5530"),D=a("e11e"),M=a("2699"),U=a("a40a"),T=a("4e2b"),F=a("f60f"),I=a("2f62");delete D["Icon"].Default.prototype._getIconUrl,D["Icon"].Default.mergeOptions({iconRetinaUrl:a("584d"),iconUrl:a("6397"),shadowUrl:a("e2b9")});var B={name:"Map",components:{LMap:M["a"],LTileLayer:U["a"],LMarker:T["a"],LPopup:F["a"]},data:function(){return{zoom:13,center:Object(D["latLng"])(50.064878,19.965705),url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",attribution:'&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',withPopup:Object(D["latLng"])(50.056806,19.951279),withPopup2:Object(D["latLng"])(50.067724,19.92836),currentZoom:13,currentCenter:Object(D["latLng"])(50.064878,19.965705),showParagraph:!1,mapOptions:{zoomSnap:.5},showMap:!0}},methods:Object(z["a"])({zoomUpdate:function(e){this.currentZoom=e},centerUpdate:function(e){this.currentCenter=e},showLongText:function(){this.showParagraph=!this.showParagraph},innerClick:function(){alert("Click!")}},Object(I["b"])(["fetchReservations"])),computed:Object(I["c"])(["allAvailability"]),updated:function(){this.fetchReservations()}},W=B,G=Object(u["a"])(W,N,E,!1,null,null,null),H=G.exports,K=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("h3",[e._v("Add a reservation")]),e.isConnected?a("div",[a("div",{staticClass:"add"},[a("form",{attrs:{action:"https://vuejs.org/",method:"post"},on:{submit:e.onSubmit}},[e._m(0),a("input",{directives:[{name:"model",rawName:"v-model",value:e.reservation.name,expression:"reservation.name"}],attrs:{type:"text"},domProps:{value:e.reservation.name},on:{input:function(t){t.target.composing||e.$set(e.reservation,"name",t.target.value)}}}),e._m(1),a("select",{directives:[{name:"model",rawName:"v-model",value:e.reservation.store,expression:"reservation.store"}],on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.$set(e.reservation,"store",t.target.multiple?a:a[0])}}},[a("option",{attrs:{disabled:"",value:""}},[e._v("Please choose:")]),a("option",[e._v("Store Karmelicka")]),a("option",[e._v("Store k.Gurgacza")])]),e._m(2),a("input",{directives:[{name:"model",rawName:"v-model",value:e.reservation.amount,expression:"reservation.amount"}],attrs:{type:"number",min:"1"},domProps:{value:e.reservation.amount},on:{input:function(t){t.target.composing||e.$set(e.reservation,"amount",t.target.value)}}}),e._m(3),a("input",{directives:[{name:"model",rawName:"v-model",value:e.reservation.comment,expression:"reservation.comment"}],attrs:{type:"text",placeholder:"Add a comment..."},domProps:{value:e.reservation.comment},on:{input:function(t){t.target.composing||e.$set(e.reservation,"comment",t.target.value)}}}),a("input",{attrs:{type:"submit",value:"Submit"}})])])]):a("div",[a("p",{staticClass:"lead"},[e._v("Please log in by faceook if you want to make reservation.")])])])},J=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("span",[a("b",[e._v("First Name:")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("span",[a("b",[e._v("Pickup:")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("span",[a("b",[e._v("Number of segways:")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("span",[a("b",[e._v("Comment:")])])}],Y={name:"AddReservation",props:{userName:String,isConnected:Boolean},data:function(){return{reservation:{name:"",store:"",amount:0,comment:""}}},watch:{userName:function(){this.setName(this.userName)},isConnected:function(){this.setName(this.userName)}},methods:Object(z["a"])({setName:function(e){this.reservation.name=e}},Object(I["b"])(["addReservation"]),{onSubmit:function(e){e.preventDefault(),this.addReservation(this.reservation)}})},Z=Y,q=(a("015f"),Object(u["a"])(Z,K,J,!1,null,"1b2cea00",null)),Q=q.exports,V=function(){var e=this,t=e.$createElement,a=e._self._c||t;return e.isAdmin?a("div",[a("h3",[e._v("Reservations")]),a("div",{staticClass:"reservations"},e._l(e.allReservations,(function(t){return a("div",{key:t.id,staticClass:"reservation"},[e._v(" "+e._s(t.name)+", "+e._s(t.store)+": "+e._s(t.amount)+" Segways "),a("button",{staticClass:"btn btn-primary",on:{click:e.removeReservation}},[e._v("Remove reservation")])])})),0)]):e._e()},X=[],ee={name:"Reservations",props:{isAdmin:Boolean},methods:Object(z["a"])({},Object(I["b"])(["fetchReservations"])),computed:Object(I["c"])(["allReservations"]),created:function(){this.fetchReservations()}},te=ee,ae=(a("8526"),Object(u["a"])(te,V,X,!1,null,"84cf92a0",null)),ne=ae.exports,re=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},oe=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("h3",[e._v("This is the weather for the next 5 days!")]),a("p",{attrs:{id:"myWeather"}})])}],ie=(a("d3b7"),a("bc3a")),se=a.n(ie),ce={name:"Weather",methods:{getWeather:function(){se()({method:"GET",url:"https://www.metaweather.com/api/location/523920/"}).then((function(e){for(var t=0;t<e.data.consolidated_weather.length;t++){var a="Date: "+e.data.consolidated_weather[t].applicable_date+" Min/Max Temperature: "+Math.round(e.data.consolidated_weather[t].min_temp/2)+"/"+Math.round(e.data.consolidated_weather[t].max_temp/2)+" °C Weather state: "+e.data.consolidated_weather[t].weather_state_name,n=document.getElementsByTagName("p")[t],r=document.createElement("p"),o=document.createTextNode(a);r.appendChild(o),n.appendChild(r)}})).catch((function(e){console.log(e)})).finally((function(){}))}},mounted:function(){this.getWeather()}},le=ce,ue=(a("115f"),Object(u["a"])(le,re,oe,!1,null,"72f110b9",null)),de=ue.exports,me=(a("4989"),{name:"App",components:{Header:m,Weather:de,Map:H,FacebookUser:A,AddReservation:Q,Reservations:ne,Contact:x,Footer:g},data:function(){return{isConnected:!1,userName:"User",email:"",isAdmin:!1}},methods:{setLoginData:function(e){console.log(e);var t=e;this.isConnected=t[3],this.email=e[1],this.userName=e[2],this.isAdmin=e[4]}}}),ve=me,pe=(a("034f"),Object(u["a"])(ve,r,o,!1,null,null,null)),fe=pe.exports,he=(a("96cf"),a("1da1")),be={reservations:[],availablity:{}},ge={allReservations:function(e){return e.reservations},allAvailability:function(e){return e.availablity}},_e={fetchReservations:function(e){return Object(he["a"])(regeneratorRuntime.mark((function t(){var a,n,r,o,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a=e.commit,t.next=3,se.a.get("https://projectbai-92dd.restdb.io/rest/reservations?apikey=e2188a9594267b58cb06a85133fae1183b3d9");case 3:for(o in n=t.sent,console.log(n.data),r={res:[],availablity:{karmelicka:21,gurgacza:23}},n.data)r.res.push(n.data[o].reservation);for(i in n.data)console.log(n.data[i].reservation),"Store Karmelicka"==n.data[i].reservation.store?r.availablity.karmelicka-n.data[i].reservation.amount>=0?r.availablity.karmelicka=r.availablity.karmelicka-n.data[i].reservation.amount:r.availablity.karmelicka-n.data[i].reservation.amount<0&&(r.availablity.karmelicka=0):"Store k.Gurgacza"==n.data[i].reservation.store&&(r.availablity.gurgacza-n.data[i].reservation.amount>=0?r.availablity.gurgacza=r.availablity.gurgacza-n.data[i].reservation.amount:r.availablity.gurgacza-n.data[i].reservation.amount<0&&(r.availablity.gurgacza=0));console.log("inside fetchreser"),a("setReservations",r);case 10:case"end":return t.stop()}}),t)})))()},addReservation:function(e,t){return Object(he["a"])(regeneratorRuntime.mark((function a(){var n,r;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return n=e.commit,a.next=3,se.a.post("https://projectbai-92dd.restdb.io/rest/reservations?apikey=e2188a9594267b58cb06a85133fae1183b3d9",{reservation:t});case 3:r=a.sent,n("newReservation",r.data.reservation);case 5:case"end":return a.stop()}}),a)})))()},removeReservation:function(e,t){return Object(he["a"])(regeneratorRuntime.mark((function a(){var n,r;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return n=e.commit,a.next=3,se.a.post("https://projectbai-92dd.restdb.io/rest/reservations?apikey=e2188a9594267b58cb06a85133fae1183b3d9",{reservation:t});case 3:r=a.sent,n("newReservation",r.data.reservation);case 5:case"end":return a.stop()}}),a)})))()}},we={setReservations:function(e,t){e.reservations=t.res,e.availablity=t.availablity},newReservation:function(e,t){return e.reservations.unshift(t)}},ye={state:be,getters:ge,actions:_e,mutations:we};n["a"].use(I["a"]);var ke=new I["a"].Store({modules:{reservations:ye}});a("1157");n["a"].config.productionTip=!1,new n["a"]({store:ke,render:function(e){return e(fe)}}).$mount("#app")},"7a59":function(e,t,a){},"7d71":function(e,t,a){},8526:function(e,t,a){"use strict";var n=a("7a59"),r=a.n(n);r.a},"85ec":function(e,t,a){},"9d47":function(e,t,a){},cd8d:function(e,t,a){},ce0f:function(e,t,a){},fda5:function(e,t,a){"use strict";var n=a("2233"),r=a.n(n);r.a}});
//# sourceMappingURL=app.a74949cf.js.map
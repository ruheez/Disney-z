(()=>{"use strict";var n,e={679:(n,e,t)=>{t(618);var r=t(388),i=(t(926),t(252)),o={class:"sub-root"},a=t(201),s=t(577),c={class:"movies"},l={class:"movies_list_title"},u={class:"movies_list_container"},p={class:"movie"},v={class:"movie-inner"},m={class:"movie-inner_front"},d={class:"movie-inner_back"},g=(0,i.Wm)("span",{class:"movie-inner_back_definitions"},"Title: ",-1),f={class:"movie-inner_back_overview"},h=(0,i.Wm)("span",{class:"movie-inner_back_definitions"},"Overview: ",-1),w={key:0},b=(0,i.Wm)("span",{class:"star"},null,-1),y=(0,i.Uk)("  "),_={class:"movie-details_info_first-line_score"},x={class:"movie-inner_back_play-icon"};const k={name:"Movie",data:function(){return{playIcon:"play-icon.jpeg"}},props:{title:{type:String,required:!0},img:{type:String,required:!0},overview:{type:String,required:!0},average:{type:Number,required:!0}},methods:{getImgUrl:function(n){return t(194)("./"+n)},textIsShort:function(){return this.$props.overview.length<300},breakTextAt250Char:function(){return this.$props.overview.substring(0,250)+'... <a class="read-more">read more</a>'}}};var W=t(379),j=t.n(W),O=t(795),T=t.n(O),Z=t(569),M=t.n(Z),P=t(565),A=t.n(P),S=t(216),I=t.n(S),C=t(589),U=t.n(C),E=t(533),R={};R.styleTagTransform=U(),R.setAttributes=A(),R.insert=M().bind(null,"head"),R.domAPI=T(),R.insertStyleElement=I(),j()(E.Z,R),E.Z&&E.Z.locals&&E.Z.locals,k.render=function(n,e,t,r,o,a){return(0,i.wg)(),(0,i.j4)("div",p,[(0,i.Wm)("div",v,[(0,i.Wm)("div",m,[(0,i.Wm)("img",{class:"movie-inner_movie_img",src:t.img,alt:t.title},null,8,["src","alt"])]),(0,i.Wm)("div",d,[(0,i.Wm)("h3",null,[g,(0,i.Uk)(" "+(0,s.zw)(t.title),1)]),(0,i.Wm)("div",f,[h,a.textIsShort()?((0,i.wg)(),(0,i.j4)("span",w,(0,s.zw)(t.overview),1)):((0,i.wg)(),(0,i.j4)("span",{key:1,innerHTML:a.breakTextAt250Char()},null,8,["innerHTML"]))]),(0,i.Wm)("div",null,[b,y,(0,i.Wm)("span",_,(0,s.zw)(t.average),1)]),(0,i.Wm)("div",x,[(0,i.Wm)("img",{class:"play-icon",src:a.getImgUrl(o.playIcon),onClick:e[1]||(e[1]=function(e){return n.$emit("openMoviePage",{event:e,id:n.id})})},null,8,["src"])])])])])};const $=k;function q(n,e,t,r,i,o,a){try{var s=n[o](a),c=s.value}catch(n){return void t(n)}s.done?e(c):Promise.resolve(c).then(r,i)}function H(n){return function(){var e=this,t=arguments;return new Promise((function(r,i){var o=n.apply(e,t);function a(n){q(o,r,i,a,s,"next",n)}function s(n){q(o,r,i,a,s,"throw",n)}a(void 0)}))}}t(666);const Y={name:"Movies",components:{Movie:$},data:function(){return{movies:{now_playing:{id:1,name:"Now Playing",list:[]},popular:{id:2,name:"Popular",list:[]},top_rated:{id:3,name:"Top Rated",list:[]},upcoming:{id:4,name:"Upcoming",list:[]}},images:[]}},methods:{getDataFromApi:function(){var n=this;return H(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:["now_playing","popular","top_rated","upcoming"].forEach(function(){var e=H(regeneratorRuntime.mark((function e(t,r){var i,o,a;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i="https://api.themoviedb.org/3/movie/".concat(t,"?api_key=").concat("b9b95774804923e6978e27bc40df2c97","&language=en-US"),e.prev=1,e.next=4,fetch(i);case 4:return o=e.sent,e.next=7,o.json();case 7:a=e.sent,n.movies[t].list=a.results,e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),console.log("Can't get data from API: "+e.t0);case 14:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(n,t){return e.apply(this,arguments)}}());case 3:case"end":return e.stop()}}),e)})))()},navigateMovie:function(n){window.open("./movie-page.html?movie="+encodeURI(n))}},created:function(){this.getDataFromApi()}};var z=t(50),F={};F.styleTagTransform=U(),F.setAttributes=A(),F.insert=M().bind(null,"head"),F.domAPI=T(),F.insertStyleElement=I(),j()(z.Z,F),z.Z&&z.Z.locals&&z.Z.locals,Y.render=function(n,e,t,r,o,a){var p=(0,i.up)("movie");return(0,i.wg)(),(0,i.j4)("div",c,[((0,i.wg)(!0),(0,i.j4)(i.HY,null,(0,i.Ko)(o.movies,(function(n){return(0,i.wg)(),(0,i.j4)("div",{class:"movies_list",key:n.id},[(0,i.Wm)("h2",l,(0,s.zw)(n.name),1),(0,i.Wm)("div",u,[((0,i.wg)(!0),(0,i.j4)(i.HY,null,(0,i.Ko)(n.list,(function(n){return(0,i.wg)(),(0,i.j4)(p,{key:n.id,img:"https://image.tmdb.org/t/p/w500/"+n.poster_path,title:n.title,overview:n.overview,average:n.vote_average,onOpenMoviePage:function(e){return a.navigateMovie(n.id)}},null,8,["img","title","overview","average","onOpenMoviePage"])})),128))])])})),128))])};const K=Y;var N=t(402),B=t(422);const D={name:"App",components:{Bar:a.Z,Youtube:N.Z,Movies:K,AppFooter:B.Z},data:function(){return{youtubeKey:"https://www.youtube.com/embed/9qH-mWfTMm0?controls=0&autoplay=1&cc_load_policy=1&rel=0"}},render:function(n,e,t,r,a,s){var c=(0,i.up)("bar"),l=(0,i.up)("youtube"),u=(0,i.up)("movies"),p=(0,i.up)("app-footer");return(0,i.wg)(),(0,i.j4)("div",o,[(0,i.Wm)(c),(0,i.Wm)(l,{ykey:a.youtubeKey},null,8,["ykey"]),(0,i.Wm)(u),(0,i.Wm)(p)])}};var L=t(963);document.body.appendChild((0,r.Z)()),(0,L.ri)(D).mount(".app-root")},533:(n,e,t)=>{t.d(e,{Z:()=>o});var r=t(645),i=t.n(r)()((function(n){return n[1]}));i.push([n.id,'\n.movie {\n  display: flex;\n  flex-direction: row;\n  background-color: transparent;\n  width: fit-content;\n  height: 300px;\n  margin: 5px;\n  perspective: 1000px;\n  cursor: pointer;\n}\n.movie-inner {\n  position: relative;\n  width: 250px;\n  height: 300px;\n  text-align: left;\n  transition: transform 0.6s;\n  transform-style: preserve-3d;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n}\n.movie:hover .movie-inner {\n  transform: rotateY(180deg);\n}\n.movie-inner_front,\n.movie-inner_back {\n  position: absolute;\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n}\n.movie-inner_back {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  height: 100%;\n  padding: 5px;\n  background-color: #141414;\n  color: white;\n  transform: rotateY(180deg);\n}\n.movie-inner_movie_img {\n  width: 250px;\n  height: 300px;\n}\n.movie-inner_back_overview {\n  padding: 5px 0;\n}\n.movie-inner_back_definitions {\n  color: #777;\n}\n.read-more {\n  color: #0071c2;\n  text-decoration: underline;\n}\n.read-more:hover {\n  opacity: 0.7;\n}\n.movie-inner_back_play-icon {\n  margin-left: auto;\n  margin-top: auto;\n}\n.movie-inner_back_play-icon:hover {\n  opacity: 0.7;\n}\n.play-icon {\n  width: 50px;\n  height: auto;\n}\n.star {\n  color: #ff8c00;\n}\n.star::before {\n  content: "\\2605";\n}\n',""]);const o=i},50:(n,e,t)=>{t.d(e,{Z:()=>o});var r=t(645),i=t.n(r)()((function(n){return n[1]}));i.push([n.id,"\n.movies {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  margin: 50px;\n}\n.movies_list {\n  display: flex;\n  flex-direction: column;\n  overflow-x: scroll;\n}\n.movies_list_container {\n  display: flex;\n  flex-direction: row;\n}\n.movies_list_title {\n  color: white;\n  padding: 25px 25px 0 25px;\n}\n",""]);const o=i}},t={};function r(n){var i=t[n];if(void 0!==i)return i.exports;var o=t[n]={id:n,exports:{}};return e[n](o,o.exports,r),o.exports}r.m=e,n=[],r.O=(e,t,i,o)=>{if(!t){var a=1/0;for(u=0;u<n.length;u++){for(var[t,i,o]=n[u],s=!0,c=0;c<t.length;c++)(!1&o||a>=o)&&Object.keys(r.O).every((n=>r.O[n](t[c])))?t.splice(c--,1):(s=!1,o<a&&(a=o));if(s){n.splice(u--,1);var l=i();void 0!==l&&(e=l)}}return e}o=o||0;for(var u=n.length;u>0&&n[u-1][2]>o;u--)n[u]=n[u-1];n[u]=[t,i,o]},r.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return r.d(e,{a:e}),e},r.d=(n,e)=>{for(var t in e)r.o(e,t)&&!r.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:e[t]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),r.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;r.g.importScripts&&(n=r.g.location+"");var e=r.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var t=e.getElementsByTagName("script");t.length&&(n=t[t.length-1].src)}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),r.p=n})(),(()=>{var n={179:0};r.O.j=e=>0===n[e];var e=(e,t)=>{var i,o,[a,s,c]=t,l=0;for(i in s)r.o(s,i)&&(r.m[i]=s[i]);if(c)var u=c(r);for(e&&e(t);l<a.length;l++)o=a[l],r.o(n,o)&&n[o]&&n[o][0](),n[a[l]]=0;return r.O(u)},t=self.webpackChunkstreaming=self.webpackChunkstreaming||[];t.forEach(e.bind(null,0)),t.push=e.bind(null,t.push.bind(t))})();var i=r.O(void 0,[249,29],(()=>r(679)));i=r.O(i)})();
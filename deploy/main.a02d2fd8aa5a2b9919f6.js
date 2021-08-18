(()=>{"use strict";var e,n={683:(e,n,t)=>{t(618);var r=t(388),i=t(252),o={class:"sub-root",lang:"en"},a=t(229),s=t(577),c={class:"movies"},l={class:"movies_list_title"},u={class:"movies_list_container"},p={class:"movie"},v={class:"movie-inner"},m={class:"movie-inner_front"},d={class:"movie-inner_back"},g=(0,i.Wm)("span",{class:"movie-inner_back_definitions"},"Title: ",-1),f={class:"movie-inner_back_overview"},h=(0,i.Wm)("span",{class:"movie-inner_back_definitions"},"Overview: ",-1),b={key:0},y=(0,i.Wm)("span",{class:"star"},null,-1),w=(0,i.Uk)("  "),_={class:"movie-details_info_first-line_score"},x={class:"movie-inner_back_play-icon"};const k={name:"Movie",data:function(){return{playIcon:"play-icon.jpeg"}},props:{title:{type:String,required:!0},img:{type:String,required:!0},overview:{type:String,required:!0},average:{type:Number,required:!0}},methods:{getImgUrl:function(e){return t(194)("./"+e)},textIsShort:function(){return this.$props.overview.length<300},breakTextAt250Char:function(){return this.$props.overview.substring(0,250)+'... <a class="read-more">read more</a>'}}};var W=t(379),j=t.n(W),A=t(795),O=t.n(A),T=t(569),Z=t.n(T),M=t(565),P=t.n(M),S=t(216),I=t.n(S),C=t(589),U=t.n(C),q=t(506),E={};E.styleTagTransform=U(),E.setAttributes=P(),E.insert=Z().bind(null,"head"),E.domAPI=O(),E.insertStyleElement=I(),j()(q.Z,E),q.Z&&q.Z.locals&&q.Z.locals,k.render=function(e,n,t,r,o,a){return(0,i.wg)(),(0,i.j4)("div",p,[(0,i.Wm)("div",v,[(0,i.Wm)("div",m,[(0,i.Wm)("img",{class:"movie-inner_movie_img",src:t.img,alt:t.title},null,8,["src","alt"])]),(0,i.Wm)("div",d,[(0,i.Wm)("h3",null,[g,(0,i.Uk)(" "+(0,s.zw)(t.title),1)]),(0,i.Wm)("div",f,[h,a.textIsShort()?((0,i.wg)(),(0,i.j4)("span",b,(0,s.zw)(t.overview),1)):((0,i.wg)(),(0,i.j4)("span",{key:1,innerHTML:a.breakTextAt250Char()},null,8,["innerHTML"]))]),(0,i.Wm)("div",null,[y,w,(0,i.Wm)("span",_,(0,s.zw)(t.average),1)]),(0,i.Wm)("div",x,[(0,i.Wm)("img",{class:"play-icon",src:a.getImgUrl(o.playIcon),alt:"play-icon",onClick:n[1]||(n[1]=function(n){return e.$emit("openMoviePage",{event:n,id:e.id})})},null,8,["src"])])])])])};const R=k;function $(e,n,t,r,i,o,a){try{var s=e[o](a),c=s.value}catch(e){return void t(e)}s.done?n(c):Promise.resolve(c).then(r,i)}function H(e){return function(){var n=this,t=arguments;return new Promise((function(r,i){var o=e.apply(n,t);function a(e){$(o,r,i,a,s,"next",e)}function s(e){$(o,r,i,a,s,"throw",e)}a(void 0)}))}}t(666);const Y={name:"Movies",components:{Movie:R},data:function(){return{movies:{now_playing:{id:1,name:"Now Playing",list:[]},popular:{id:2,name:"Popular",list:[]},top_rated:{id:3,name:"Top Rated",list:[]},upcoming:{id:4,name:"Upcoming",list:[]}},images:[]}},methods:{getDataFromApi:function(){var e=this;return H(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:["now_playing","popular","top_rated","upcoming"].forEach(function(){var n=H(regeneratorRuntime.mark((function n(t,r){var i,o,a;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return i="https://api.themoviedb.org/3/movie/".concat(t,"?api_key=").concat("b9b95774804923e6978e27bc40df2c97","&language=en-US"),n.prev=1,n.next=4,fetch(i);case 4:return o=n.sent,n.next=7,o.json();case 7:a=n.sent,e.movies[t].list=a.results,n.next=14;break;case 11:n.prev=11,n.t0=n.catch(1),console.log("Can't get data from API: "+n.t0);case 14:case"end":return n.stop()}}),n,null,[[1,11]])})));return function(e,t){return n.apply(this,arguments)}}());case 3:case"end":return n.stop()}}),n)})))()},navigateMovie:function(e){window.open("./movie-page.html?movie="+encodeURI(e))}},created:function(){this.getDataFromApi()}};var z=t(99),F={};F.styleTagTransform=U(),F.setAttributes=P(),F.insert=Z().bind(null,"head"),F.domAPI=O(),F.insertStyleElement=I(),j()(z.Z,F),z.Z&&z.Z.locals&&z.Z.locals,Y.render=function(e,n,t,r,o,a){var p=(0,i.up)("movie");return(0,i.wg)(),(0,i.j4)("div",c,[((0,i.wg)(!0),(0,i.j4)(i.HY,null,(0,i.Ko)(o.movies,(function(e){return(0,i.wg)(),(0,i.j4)("div",{class:"movies_list",key:e.id},[(0,i.Wm)("h2",l,(0,s.zw)(e.name),1),(0,i.Wm)("div",u,[((0,i.wg)(!0),(0,i.j4)(i.HY,null,(0,i.Ko)(e.list,(function(e){return(0,i.wg)(),(0,i.j4)(p,{key:e.id,img:"https://image.tmdb.org/t/p/w500/"+e.poster_path,title:e.title,overview:e.overview,average:e.vote_average,onOpenMoviePage:function(n){return a.navigateMovie(e.id)}},null,8,["img","title","overview","average","onOpenMoviePage"])})),128))])])})),128))])};const K=Y;var N=t(316),B=t(514);const D={name:"App",components:{Bar:a.Z,Youtube:N.Z,Movies:K,AppFooter:B.Z},data:function(){return{youtubeKey:"https://www.youtube.com/embed/9qH-mWfTMm0?controls=0&autoplay=1&cc_load_policy=1&rel=0"}},created:function(){var e=document.querySelector("html");e.setAttribute("dir","ltr"),e.setAttribute("lang","en")},render:function(e,n,t,r,a,s){var c=(0,i.up)("bar"),l=(0,i.up)("youtube"),u=(0,i.up)("movies"),p=(0,i.up)("app-footer");return(0,i.wg)(),(0,i.j4)("div",o,[(0,i.Wm)(c),(0,i.Wm)(l,{ykey:a.youtubeKey},null,8,["ykey"]),(0,i.Wm)(u),(0,i.Wm)(p)])}};var L=t(963);document.body.appendChild((0,r.Z)()),(0,L.ri)(D).mount(".app-root")},506:(e,n,t)=>{t.d(n,{Z:()=>o});var r=t(645),i=t.n(r)()((function(e){return e[1]}));i.push([e.id,'\n.movie {\n  display: flex;\n  flex-direction: row;\n  background-color: transparent;\n  width: fit-content;\n  height: 300px;\n  margin: 10px 10px 10px 0;\n  perspective: 1000px;\n  cursor: pointer;\n}\n.movie-inner {\n  position: relative;\n  width: 250px;\n  height: 300px;\n  text-align: left;\n  transition: transform 0.6s;\n  transform-style: preserve-3d;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n}\n.movie:hover .movie-inner {\n  transform: rotateY(180deg);\n}\n.movie-inner_front,\n.movie-inner_back {\n  position: absolute;\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n}\n.movie-inner_back {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  height: 100%;\n  padding: 5px;\n  background-color: #141414;\n  color: white;\n  transform: rotateY(180deg);\n}\n.movie-inner_movie_img {\n  width: 250px;\n  height: 300px;\n}\n.movie-inner_back_overview {\n  padding: 5px 0;\n}\n.movie-inner_back_definitions {\n  color: #777;\n}\n.read-more {\n  color: #0071c2;\n  text-decoration: underline;\n}\n.read-more:hover {\n  opacity: 0.7;\n}\n.movie-inner_back_play-icon {\n  margin-left: auto;\n  margin-top: auto;\n}\n.movie-inner_back_play-icon:hover {\n  opacity: 0.7;\n}\n.play-icon {\n  width: 50px;\n  height: auto;\n}\n.star {\n  color: #ff8c00;\n}\n.star::before {\n  content: "\\2605";\n}\n',""]);const o=i},99:(e,n,t)=>{t.d(n,{Z:()=>o});var r=t(645),i=t.n(r)()((function(e){return e[1]}));i.push([e.id,"\n.movies {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  margin: 50px;\n}\n.movies_list {\n  display: flex;\n  flex-direction: column;\n}\n.movies_list_container {\n  display: flex;\n  flex-direction: row;\n  overflow-x: scroll;\n}\n.movies_list_title {\n  color: white;\n  padding: 25px 25px 0 25px;\n}\n",""]);const o=i}},t={};function r(e){var i=t[e];if(void 0!==i)return i.exports;var o=t[e]={id:e,exports:{}};return n[e](o,o.exports,r),o.exports}r.m=n,e=[],r.O=(n,t,i,o)=>{if(!t){var a=1/0;for(u=0;u<e.length;u++){for(var[t,i,o]=e[u],s=!0,c=0;c<t.length;c++)(!1&o||a>=o)&&Object.keys(r.O).every((e=>r.O[e](t[c])))?t.splice(c--,1):(s=!1,o<a&&(a=o));if(s){e.splice(u--,1);var l=i();void 0!==l&&(n=l)}}return n}o=o||0;for(var u=e.length;u>0&&e[u-1][2]>o;u--)e[u]=e[u-1];e[u]=[t,i,o]},r.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return r.d(n,{a:n}),n},r.d=(e,n)=>{for(var t in n)r.o(n,t)&&!r.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:n[t]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;r.g.importScripts&&(e=r.g.location+"");var n=r.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var t=n.getElementsByTagName("script");t.length&&(e=t[t.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),r.p=e})(),(()=>{var e={179:0};r.O.j=n=>0===e[n];var n=(n,t)=>{var i,o,[a,s,c]=t,l=0;for(i in s)r.o(s,i)&&(r.m[i]=s[i]);if(c)var u=c(r);for(n&&n(t);l<a.length;l++)o=a[l],r.o(e,o)&&e[o]&&e[o][0](),e[a[l]]=0;return r.O(u)},t=self.webpackChunkstreaming=self.webpackChunkstreaming||[];t.forEach(n.bind(null,0)),t.push=n.bind(null,t.push.bind(t))})();var i=r.O(void 0,[249,190],(()=>r(683)));i=r.O(i)})();
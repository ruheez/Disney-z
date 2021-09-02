(()=>{"use strict";var e,n={4664:(e,n,r)=>{r(1618);var t=r(8388),i=r(6252),o={class:"sub-root"},a=r(6741),s=r(3577),l={class:"movies"},c={key:0},u={class:"movies_list_title"},d={class:"movie"},p={class:"movie-inner"},v={class:"movie-inner_front"},m={class:"movie-inner_back"},f=(0,i.Wm)("span",{class:"movie-inner_back_definitions"},"Title: ",-1),g={class:"movie-inner_back_overview"},h=(0,i.Wm)("span",{class:"movie-inner_back_definitions"},"Overview: ",-1),w={key:0},b=(0,i.Wm)("span",{class:"star"},null,-1),y=(0,i.Uk)("  "),x={class:"movie-details_info_first-line_score"},_={class:"movie-inner_back__genre"},k={class:"movie-inner_back_play-icon"};const W={name:"Movie",data:function(){return{playIcon:"play-icon.jpeg"}},props:{title:{type:String,required:!0},img:{type:String,required:!0},overview:{type:String,required:!0},average:{type:Number,required:!0},genre:{type:String,required:!0}},methods:{getImgUrl:function(e){return r(4194)("./"+e)},textIsShort:function(){return this.$props.overview.length<200},breakTextAt200Char:function(){return this.$props.overview.substring(0,200)+' <a class="read-more">...read more</a>'}}};var A=r(3379),j=r.n(A),L=r(7795),M=r.n(L),S=r(569),O=r.n(S),P=r(3565),T=r.n(P),Z=r(9216),C=r.n(Z),R=r(4589),I=r.n(R),E=r(7781),z={};z.styleTagTransform=I(),z.setAttributes=T(),z.insert=O().bind(null,"head"),z.domAPI=M(),z.insertStyleElement=C(),j()(E.Z,z),E.Z&&E.Z.locals&&E.Z.locals,W.render=function(e,n,r,t,o,a){return(0,i.wg)(),(0,i.j4)("div",d,[(0,i.Wm)("div",p,[(0,i.Wm)("div",v,[(0,i.Wm)("img",{class:"movie-inner_movie_img",src:r.img,alt:r.title},null,8,["src","alt"])]),(0,i.Wm)("div",m,[(0,i.Wm)("h3",null,[f,(0,i.Uk)(" "+(0,s.zw)(r.title),1)]),(0,i.Wm)("div",g,[h,a.textIsShort()?((0,i.wg)(),(0,i.j4)("span",w,(0,s.zw)(r.overview),1)):((0,i.wg)(),(0,i.j4)("span",{key:1,innerHTML:a.breakTextAt200Char()},null,8,["innerHTML"]))]),(0,i.Wm)("div",null,[b,y,(0,i.Wm)("span",x,(0,s.zw)(r.average),1)]),(0,i.Wm)("h4",_,(0,s.zw)(r.genre),1),(0,i.Wm)("div",k,[(0,i.Wm)("img",{class:"play-icon",src:a.getImgUrl(o.playIcon),alt:"play-icon",onClick:n[1]||(n[1]=function(n){return e.$emit("openMoviePage",{event:n,id:e.id})})},null,8,["src"])])])])])};const U=W;function q(e,n,r,t,i,o,a){try{var s=e[o](a),l=s.value}catch(e){return void r(e)}s.done?n(l):Promise.resolve(l).then(t,i)}function F(e){return function(){var n=this,r=arguments;return new Promise((function(t,i){var o=e.apply(n,r);function a(e){q(o,t,i,a,s,"next",e)}function s(e){q(o,t,i,a,s,"throw",e)}a(void 0)}))}}r(5666);const N={name:"Movies",components:{Movie:U},data:function(){return{movies:[{id:1,name:"Now Playing",list:[]},{id:2,name:"Popular",list:[]},{id:3,name:"Top Rated",list:[]},{id:4,name:"Upcoming",list:[]}],genres:[]}},computed:{filteredMovies:function(){var e=this.getFilteredMovies();return e?this.movies.map((function(n){return{id:n.id,list:Array.from(n.list).filter((function(n){if(n.genre)return n.title.toLowerCase().includes(e.toLowerCase())||n.genre.toLowerCase().includes(e.toLowerCase())})),name:n.name}})):this.movies}},created:function(){this.getDataFromApi()},methods:{getDataFromApi:function(){var e=this;return F(regeneratorRuntime.mark((function n(){var r,t,i,o;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=["now_playing","popular","top_rated","upcoming"],t="https://api.themoviedb.org/3/genre/movie/list?api_key=".concat("b9b95774804923e6978e27bc40df2c97","&language=en-US"),n.prev=3,r.forEach(function(){var n=F(regeneratorRuntime.mark((function n(r,t){var i,o,a;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return i="https://api.themoviedb.org/3/movie/".concat(r,"?api_key=").concat("b9b95774804923e6978e27bc40df2c97","&language=en-US"),n.next=3,fetch(i);case 3:return o=n.sent,n.next=6,o.json();case 6:a=n.sent,e.movies[t].list=a.results;case 8:case"end":return n.stop()}}),n)})));return function(e,r){return n.apply(this,arguments)}}()),n.next=7,fetch(t);case 7:return i=n.sent,n.next=10,i.json();case 10:o=n.sent,e.genres=o.genres,n.next=17;break;case 14:n.prev=14,n.t0=n.catch(3),console.log("Can't get data from API: "+n.t0);case 17:e.assignGenre();case 18:case"end":return n.stop()}}),n,null,[[3,14]])})))()},assignGenre:function(){var e=this;this.movies.forEach((function(n){n.list.forEach((function(n){var r=e.genres.find((function(e){return e.id===n.genre_ids[0]}));n.genre=r.name}))}))},getFilteredMovies:function(){return new URLSearchParams(window.location.search).get("key")},navigateMovie:function(e,n){window.open("./movie-page.html?movie="+encodeURI(e+","+n))},handleArrows:function(e){var n=e.target,r=Array.from(n.children),t=r.find((function(e){return e.className.includes("prev")})),i=r.find((function(e){return e.className.includes("next")}));this.hideLeftArrow(n,t),this.hideRightArrow(n,i)},hideLeftArrow:function(e,n){0===e.scrollLeft?n.classList.add("hide-arrow"):n.classList.remove("hide-arrow")},hideRightArrow:function(e,n){e.scrollLeft===e.scrollWidth-e.offsetWidth?n.classList.add("hide-arrow"):n.classList.remove("hide-arrow")},scrollLeft:function(e){e.target.parentNode.scrollLeft-=600},scrollRight:function(e){e.target.parentNode.scrollLeft+=600}}};var $=r(393),H={};H.styleTagTransform=I(),H.setAttributes=T(),H.insert=O().bind(null,"head"),H.domAPI=M(),H.insertStyleElement=C(),j()($.Z,H),$.Z&&$.Z.locals&&$.Z.locals,N.render=function(e,n,r,t,o,a){var d=(0,i.up)("movie");return(0,i.wg)(),(0,i.j4)("div",l,[((0,i.wg)(!0),(0,i.j4)(i.HY,null,(0,i.Ko)(a.filteredMovies,(function(e){return(0,i.wg)(),(0,i.j4)("div",{class:"movies_list",key:e.id},[e.list.length>0?((0,i.wg)(),(0,i.j4)("div",c,[(0,i.Wm)("h2",u,(0,s.zw)(e.name),1),(0,i.Wm)("div",{class:"movies_list_container",onScroll:n[3]||(n[3]=function(){return a.handleArrows&&a.handleArrows.apply(a,arguments)})},[((0,i.wg)(!0),(0,i.j4)(i.HY,null,(0,i.Ko)(e.list,(function(e){return(0,i.wg)(),(0,i.j4)(d,{key:e.id,img:"https://image.tmdb.org/t/p/w500/"+e.poster_path,title:e.title,overview:e.overview,average:e.vote_average,genre:e.genre,onOpenMoviePage:function(n){return a.navigateMovie(e.id,e.genre)}},null,8,["img","title","overview","average","genre","onOpenMoviePage"])})),128)),(0,i.Wm)("a",{class:"slideshow_arrow prev hide-arrow",onClick:n[1]||(n[1]=function(){return a.scrollLeft&&a.scrollLeft.apply(a,arguments)})},"❮"),(0,i.Wm)("a",{class:"slideshow_arrow next",onClick:n[2]||(n[2]=function(){return a.scrollRight&&a.scrollRight.apply(a,arguments)})},"❯")],32)])):(0,i.kq)("v-if",!0)])})),128))])};const Y=N;var K=r(7388),B=r(3206);const D={name:"App",components:{Bar:a.Z,Youtube:K.Z,Movies:Y,AppFooter:B.Z},data:function(){return{searchedWord:"",youtubeKey:"https://www.youtube.com/embed/9qH-mWfTMm0?controls=0&autoplay=1&cc_load_policy=1&rel=0"}},created:function(){var e=document.querySelector("html");e.setAttribute("dir","ltr"),e.setAttribute("lang","en")},render:function(e,n,r,t,a,s){var l=(0,i.up)("bar"),c=(0,i.up)("youtube"),u=(0,i.up)("movies"),d=(0,i.up)("app-footer");return(0,i.wg)(),(0,i.j4)("div",o,[(0,i.Wm)(l),(0,i.Wm)(c,{ykey:a.youtubeKey},null,8,["ykey"]),(0,i.Wm)(u),(0,i.Wm)(d)])}};var G=r(9963);document.body.appendChild((0,t.Z)()),(0,G.ri)(D).mount(".app-root")},7781:(e,n,r)=>{r.d(n,{Z:()=>o});var t=r(3645),i=r.n(t)()((function(e){return e[1]}));i.push([e.id,'\n.movie {\n  display: flex;\n  flex-direction: row;\n  background-color: transparent;\n  width: fit-content;\n  height: 300px;\n  margin: 10px 10px 10px 0;\n  perspective: 1000px;\n  cursor: pointer;\n}\n.movie-inner {\n  position: relative;\n  width: 250px;\n  height: 300px;\n  text-align: left;\n  transition: transform 0.6s;\n  transform-style: preserve-3d;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n}\n.movie:hover .movie-inner {\n  transform: rotateY(180deg);\n}\n.movie-inner_front,\n.movie-inner_back {\n  position: absolute;\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n}\n.movie-inner_back {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  height: 100%;\n  padding: 5px;\n  background-color: #141414;\n  color: white;\n  transform: rotateY(180deg);\n}\n.movie-inner_movie_img {\n  width: 250px;\n  height: 300px;\n}\n.movie-inner_back_overview {\n  padding: 5px 0;\n}\n.movie-inner_back_definitions {\n  color: #777;\n}\n.read-more {\n  color: #0071c2;\n  text-decoration: underline;\n  white-space: nowrap;\n}\n.read-more:hover {\n  opacity: 0.7;\n}\n.movie-inner_back__genre {\n  margin: 5px 0;\n}\n.movie-inner_back_play-icon {\n  margin-left: auto;\n  margin-top: auto;\n}\n.movie-inner_back_play-icon:hover {\n  opacity: 0.7;\n}\n.play-icon {\n  width: 50px;\n  height: auto;\n}\n.star {\n  color: #ff8c00;\n}\n.star::before {\n  content: "\\2605";\n}\n',""]);const o=i},393:(e,n,r)=>{r.d(n,{Z:()=>o});var t=r(3645),i=r.n(t)()((function(e){return e[1]}));i.push([e.id,"\n.movies {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  margin: 50px;\n}\n.movies_list {\n  display: flex;\n  flex-direction: column;\n  position: relative;\n}\n.movies_list_container {\n  display: flex;\n  flex-direction: row;\n  overflow-x: scroll;\n  scroll-behavior: smooth;\n  -ms-overflow-style: none; /* IE and Edge */\n  scrollbar-width: none; /* Firefox */\n}\n.movies_list_container::-webkit-scrollbar {\n  display: none;\n}\n.movies_list_title {\n  color: white;\n  padding: 25px 25px 0 25px;\n}\n.slideshow_arrow {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: absolute;\n  top: 250px;\n  width: 50px;\n  height: 75px;\n  padding: 16px;\n  margin-top: -50px;\n  color: white;\n  font-weight: bold;\n  font-size: 65px;\n  border-radius: 0 3px 3px 0;\n  opacity: 1;\n  transition-duration: 3s;\n  cursor: pointer;\n  user-select: none;\n  -webkit-user-select: none;\n}\n.slideshow_arrow:hover {\n  font-size: 80px;\n}\n.prev {\n  left: 0;\n}\n.next {\n  right: 0;\n  border-radius: 3px 0 0 3px;\n}\n.hide-arrow {\n  opacity: 0;\n}\n@media only screen and (max-width: 750px) {\n.slideshow_arrow {\n    font-size: 40px;\n}\n.slideshow_arrow:hover {\n    font-size: 65px;\n}\n}\n",""]);const o=i}},r={};function t(e){var i=r[e];if(void 0!==i)return i.exports;var o=r[e]={id:e,exports:{}};return n[e](o,o.exports,t),o.exports}t.m=n,e=[],t.O=(n,r,i,o)=>{if(!r){var a=1/0;for(u=0;u<e.length;u++){for(var[r,i,o]=e[u],s=!0,l=0;l<r.length;l++)(!1&o||a>=o)&&Object.keys(t.O).every((e=>t.O[e](r[l])))?r.splice(l--,1):(s=!1,o<a&&(a=o));if(s){e.splice(u--,1);var c=i();void 0!==c&&(n=c)}}return n}o=o||0;for(var u=e.length;u>0&&e[u-1][2]>o;u--)e[u]=e[u-1];e[u]=[r,i,o]},t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var r=n.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),(()=>{var e={179:0};t.O.j=n=>0===e[n];var n=(n,r)=>{var i,o,[a,s,l]=r,c=0;for(i in s)t.o(s,i)&&(t.m[i]=s[i]);if(l)var u=l(t);for(n&&n(r);c<a.length;c++)o=a[c],t.o(e,o)&&e[o]&&e[o][0](),e[a[c]]=0;return t.O(u)},r=self.webpackChunkstreaming=self.webpackChunkstreaming||[];r.forEach(n.bind(null,0)),r.push=n.bind(null,r.push.bind(r))})();var i=t.O(void 0,[237,994,252,552],(()=>t(4664)));i=t.O(i)})();
(()=>{"use strict";var e,n={576:(e,n,t)=>{t(618);var i=t(388),o=t(252),r={class:"sub-root"},a=t(229),s=t(577),l={class:"movie-details"},c={class:"movie-details_info"},u={class:"movie-details_info_first-line"},m={class:"movie-details_info_title"},p=(0,o.Wm)("span",{class:"star"},null,-1),d=(0,o.Uk)("  "),v={class:"movie-details_info_first-line_score"},f={class:"movie-details_info_details"},_={class:"movie-details_info_details_detail"},h={class:"movie-details_info_details_detail"},g={class:"movie-details_info_details_detail"},y={class:"movie-details_info_details_detail"},b={class:"movie-details_info_details_detail"},w={class:"movie-inner_back_play-icon"};function x(e,n,t,i,o,r,a){try{var s=e[r](a),l=s.value}catch(e){return void t(e)}s.done?n(l):Promise.resolve(l).then(i,o)}t(666);const W={name:"MovieDetails",components:{Youtube:t(316).Z},data:function(){return{movie:"",youtubeKey:"",playIcon:"play-icon.jpeg"}},methods:{getMovie:function(){return new URLSearchParams(window.location.search).get("movie")},getDataFromApi:function(){var e,n=this;return(e=regeneratorRuntime.mark((function e(){var t,i,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="https://api.themoviedb.org/3/movie/".concat(n.getMovie(),"?api_key=").concat("b9b95774804923e6978e27bc40df2c97","&append_to_response=videos"),e.prev=2,e.next=5,fetch(t);case 5:return i=e.sent,e.next=8,i.json();case 8:o=e.sent,n.youtubeKey=o.videos.results[0].key,n.movie=o,e.next=16;break;case 13:e.prev=13,e.t0=e.catch(2),console.log("Can't get data from API: "+e.t0);case 16:case"end":return e.stop()}}),e,null,[[2,13]])})),function(){var n=this,t=arguments;return new Promise((function(i,o){var r=e.apply(n,t);function a(e){x(r,i,o,a,s,"next",e)}function s(e){x(r,i,o,a,s,"throw",e)}a(void 0)}))})()},getYoutubeUrl:function(e){return"https://www.youtube.com/embed/".concat(e,"?controls=0&autoplay=1&cc_load_policy=1&rel=0")},getImgUrl:function(e){return t(194)("./"+e)},playMovie:function(e){window.open("./movie-page.html?movie="+encodeURI(e))}},computed:{productions:function(){var e=Object(this.movie.production_companies);return(e=Array.from(e).map((function(e){return e.name}))).join(" - ")},year:function(){return String(this.movie.release_date).substring(0,4)},countries:function(){var e=Object(this.movie.production_countries);return(e=Array.from(e).map((function(e){return e.name}))).join(" - ")}},created:function(){this.getDataFromApi()}};var k=t(379),j=t.n(k),O=t(795),z=t.n(O),A=t(569),P=t.n(A),Z=t(565),M=t.n(Z),I=t(216),U=t.n(I),S=t(589),C=t.n(S),T=t(464),D={};D.styleTagTransform=C(),D.setAttributes=M(),D.insert=P().bind(null,"head"),D.domAPI=z(),D.insertStyleElement=U(),j()(T.Z,D),T.Z&&T.Z.locals&&T.Z.locals,W.render=function(e,n,t,i,r,a){var x=(0,o.up)("youtube");return(0,o.wg)(),(0,o.j4)("div",l,[(0,o.Wm)(x,{ykey:a.getYoutubeUrl(r.youtubeKey)},null,8,["ykey"]),(0,o.Wm)("div",c,[(0,o.Wm)("div",u,[(0,o.Wm)("h1",m,(0,s.zw)(r.movie.title),1),(0,o.Wm)("div",null,[p,d,(0,o.Wm)("span",v,(0,s.zw)(r.movie.vote_average),1)])]),(0,o.Wm)("div",f,[(0,o.Wm)("p",_,(0,s.zw)(r.movie.overview),1),(0,o.Wm)("span",h,(0,s.zw)(a.productions),1),(0,o.Wm)("span",g,(0,s.zw)(a.countries),1),(0,o.Wm)("span",y,(0,s.zw)(a.year),1),(0,o.Wm)("h3",b,(0,s.zw)(r.movie.tagline),1)])]),(0,o.Wm)("div",w,[(0,o.Wm)("img",{class:"play-icon",src:a.getImgUrl(r.playIcon),onClick:n[1]||(n[1]=function(e){return a.playMovie(r.movie.id)})},null,8,["src"])])])};const E=W;var F=t(514);const R={name:"MoviePage",components:{Bar:a.Z,MovieDetails:E,AppFooter:F.Z},render:function(e,n,t,i,a,s){var l=(0,o.up)("bar"),c=(0,o.up)("movie-details"),u=(0,o.up)("app-footer");return(0,o.wg)(),(0,o.j4)("div",r,[(0,o.Wm)(l),(0,o.Wm)(c),(0,o.Wm)(u)])}};var K=t(963);document.body.appendChild((0,i.Z)()),(0,K.ri)(R).mount(".app-root")},464:(e,n,t)=>{t.d(n,{Z:()=>r});var i=t(645),o=t.n(i)()((function(e){return e[1]}));o.push([e.id,'\n.movie-details {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  color: white;\n  line-height: 20px;\n  font-size: 16px;\n}\n.movie-details_info {\n  display: flex;\n  flex-direction: column;\n  margin: 50px;\n}\n.movie-details_info_first-line {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  width: 100%;\n}\n.movie-details_info_first-line_score {\n  font-size: 20px;\n}\n.movie-details_info_title {\n  line-height: 35px;\n}\n.star {\n  color: #ff8c00;\n}\n.star::before {\n  content: "\\2605";\n}\n.movie-details_info_details {\n  display: flex;\n  flex-direction: column;\n}\n.movie-details_info_details_detail {\n  margin: 15px 0;\n}\n.movie-inner_back_play-icon {\n  margin: auto 50px auto auto;\n  cursor: pointer;\n}\n.movie-inner_back_play-icon:hover {\n  opacity: 0.7;\n}\n.play-icon {\n  width: 150px;\n  height: auto;\n}\n',""]);const r=o}},t={};function i(e){var o=t[e];if(void 0!==o)return o.exports;var r=t[e]={id:e,exports:{}};return n[e](r,r.exports,i),r.exports}i.m=n,e=[],i.O=(n,t,o,r)=>{if(!t){var a=1/0;for(u=0;u<e.length;u++){for(var[t,o,r]=e[u],s=!0,l=0;l<t.length;l++)(!1&r||a>=r)&&Object.keys(i.O).every((e=>i.O[e](t[l])))?t.splice(l--,1):(s=!1,r<a&&(a=r));if(s){e.splice(u--,1);var c=o();void 0!==c&&(n=c)}}return n}r=r||0;for(var u=e.length;u>0&&e[u-1][2]>r;u--)e[u]=e[u-1];e[u]=[t,o,r]},i.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return i.d(n,{a:n}),n},i.d=(e,n)=>{for(var t in n)i.o(n,t)&&!i.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:n[t]})},i.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),i.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;i.g.importScripts&&(e=i.g.location+"");var n=i.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var t=n.getElementsByTagName("script");t.length&&(e=t[t.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),i.p=e})(),(()=>{var e={929:0};i.O.j=n=>0===e[n];var n=(n,t)=>{var o,r,[a,s,l]=t,c=0;for(o in s)i.o(s,o)&&(i.m[o]=s[o]);if(l)var u=l(i);for(n&&n(t);c<a.length;c++)r=a[c],i.o(e,r)&&e[r]&&e[r][0](),e[a[c]]=0;return i.O(u)},t=self.webpackChunkstreaming=self.webpackChunkstreaming||[];t.forEach(n.bind(null,0)),t.push=n.bind(null,t.push.bind(t))})();var o=i.O(void 0,[249,190],(()=>i(576)));o=i.O(o)})();
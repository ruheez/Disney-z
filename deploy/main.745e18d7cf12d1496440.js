(()=>{var e,n={416:(e,n,t)=>{"use strict";var i=t(379),r=t.n(i),a=t(795),o=t.n(a),s=t(569),c=t.n(s),l=t(565),p=t.n(l),g=t(216),m=t.n(g),d=t(589),u=t.n(d),f=t(982),b={};b.styleTagTransform=u(),b.setAttributes=p(),b.insert=c().bind(null,"head"),b.domAPI=o(),b.insertStyleElement=m(),r()(f.Z,b),f.Z&&f.Z.locals&&f.Z.locals;var v=t(252),h=t(577),x={class:"navigation-bar"},j={class:"navigation-bar_list"},y={class:"navigation-bar_list_item_link"},_={key:1,class:"navigation-bar_list_item_link_text"};const w={name:"NavigationBar",data:function(){return{buttons:[{id:1,text:"Logo",link:"logo.png"},{id:2,text:"Home"},{id:3,text:"Watch again"},{id:4,text:"Series"},{id:5,text:"Movies"},{id:6,text:"News"},{id:7,text:"My list"},{id:8,text:"Magnifying glass",link:"magnifying.png"},{id:9,text:"Notifications",link:"bell.png"},{id:10,text:"Account",link:"account.png"}]}},methods:{assignClasses:function(){var e=document.getElementsByTagName("img");Array.from(e).filter((function(e){return"Magnifying glass"===e.alt}))[0].parentElement.parentElement.classList.add("images-margin-left"),e[0].classList.add("images-margin-right")},getImgUrl:function(e){return t(871)("./"+e)},itemIsImg:function(e){return!!e}},mounted:function(){this.assignClasses()}};var k=t(640),T={};T.styleTagTransform=u(),T.setAttributes=p(),T.insert=c().bind(null,"head"),T.domAPI=o(),T.insertStyleElement=m(),r()(k.Z,T),k.Z&&k.Z.locals&&k.Z.locals,w.render=function(e,n,t,i,r,a){return(0,v.wg)(),(0,v.j4)("div",x,[(0,v.Wm)("ul",j,[((0,v.wg)(!0),(0,v.j4)(v.HY,null,(0,v.Ko)(r.buttons,(function(e){return(0,v.wg)(),(0,v.j4)("li",{class:"navigation-bar_list_item",key:e.id},[(0,v.Wm)("a",y,[a.itemIsImg(e.link)?((0,v.wg)(),(0,v.j4)("img",{key:0,class:"navigation-bar_list_item_link_img",src:a.getImgUrl(e.link),alt:e.text},null,8,["src","alt"])):((0,v.wg)(),(0,v.j4)("span",_,(0,h.zw)(e.text),1))])])})),128))])])};const A=w;var Z={class:"home-video",autoplay:"",muted:"",loop:"",playsinline:""},S=(0,v.Wm)("source",{type:"video/mp4",src:"https://media.githubusercontent.com/media/Srizza93/streaming/main/src/videos/home.mp4"},null,-1);const W={name:"Home"};var C=t(104),E={};E.styleTagTransform=u(),E.setAttributes=p(),E.insert=c().bind(null,"head"),E.domAPI=o(),E.insertStyleElement=m(),r()(C.Z,E),C.Z&&C.Z.locals&&C.Z.locals,W.render=function(e,n,t,i,r,a){return(0,v.wg)(),(0,v.j4)("video",Z,[S])};const O=W;var M={class:"movies"},P={class:"movie"},I={class:"movie-inner"},z={class:"movie-inner_front"},H={class:"movie-inner_back"},L=(0,v.Wm)("span",{class:"movie-inner_back_definitions"},"Title:",-1),U={class:"movie-inner_back_cast"},N=(0,v.Wm)("span",{class:"movie-inner_back_definitions"},"Cast:",-1),B={class:"movie-inner_back_genre"},D=(0,v.Wm)("span",{class:"movie-inner_back_definitions"},"Genre:",-1),K={class:"movie-inner_back_duration"},G=(0,v.Wm)("span",{class:"movie-inner_back_definitions"},"Duration:",-1);const J={name:"Movie",props:{title:{type:String,required:!0},img:{type:String,required:!0},cast:{type:String,required:!0},genre:{type:String,required:!0},duration:{type:String,required:!0}}};var q=t(163),F={};F.styleTagTransform=u(),F.setAttributes=p(),F.insert=c().bind(null,"head"),F.domAPI=o(),F.insertStyleElement=m(),r()(q.Z,F),q.Z&&q.Z.locals&&q.Z.locals,J.render=function(e,n,t,i,r,a){return(0,v.wg)(),(0,v.j4)("div",P,[(0,v.Wm)("div",I,[(0,v.Wm)("div",z,[(0,v.Wm)("img",{class:"movie-inner_movie_img",src:t.img,alt:t.title},null,8,["src","alt"])]),(0,v.Wm)("div",H,[(0,v.Wm)("h3",null,[L,(0,v.Uk)(" "+(0,h.zw)(t.title),1)]),(0,v.Wm)("span",U,[N,(0,v.Uk)(" "+(0,h.zw)(t.cast),1)]),(0,v.Wm)("span",B,[D,(0,v.Uk)(" "+(0,h.zw)(t.genre),1)]),(0,v.Wm)("span",K,[G,(0,v.Uk)(" "+(0,h.zw)(t.duration),1)])])])])};const Y={name:"Movies",components:{Movie:J},data:function(){return{movies:[{id:1,title:"Spiderman",img:"spiderman.jpeg",cast:"Tom Holland, Michael Keaton etc",genre:"Action",duration:"1h35min"},{id:2,title:"Hulk",img:"hulk.jpeg",cast:"Eric Bana, Jennifer Connely etc",genre:"Action",duration:"2h15min"},{id:3,title:"Luca",img:"luca.jpeg",cast:"Giacomo Gianniotti, Jacob Tremblay etc",genre:"Animation",duration:"2h15min"},{id:4,title:"The Tomorrow War",img:"tomorrow-war.jpeg",cast:"Chris Pratt, Yvonne Strahovski etc",genre:"War",duration:"1h55min"},{id:5,title:"Men in black",img:"mib.jpeg",cast:"Tommy Lee Jones, Will Smith etc",genre:"Action",duration:"1h35min"},{id:6,title:"Forrest Gump",img:"forrest-gump.jpeg",cast:"Tom Hanks, Robin Wright",genre:"Comedy",duration:"1h45min"},{id:7,title:"3%",img:"3perc.jpeg",cast:"Bianca Comparato, Vaneza Oliveira etc",genre:"Action",duration:"1h30min"},{id:9,title:"The Good Place",img:"good-place.jpeg",cast:"Kristen Bell, Ted Danson etc",genre:"Comedy",duration:"1h30min"},{id:10,title:"The Big Bang Theory",img:"big-bang.jpeg",cast:"Johnny Galecki, Jim Parsons etc",genre:"Comedy",duration:"1h40min"},{id:11,title:"Cruella",img:"cruella.jpeg",cast:"Emma Stone, Emma Thompsons etc",genre:"Comedy",duration:"1h50min"},{id:12,title:"Avatar",img:"avatar.jpeg",cast:"Zoe Saldana, Sam Worthington etc",genre:"Action",duration:"2h50min"},{id:13,title:"New Amsterdam",img:"new-amsterdam.jpeg",cast:"Ryan Eggold, Freema Agyeman etc",genre:"Comedy",duration:"1h50min"},{id:14,title:"Titanic",img:"titanic.jpeg",cast:"Kate Winslet, Leonardo Di Caprio etc",genre:"Romantic",duration:"2h15min"},{id:15,title:"Catch me if you can",img:"catch-me.jpeg",cast:"Tom Hanks, Leonardo Di Caprio etc",genre:"Comedy",duration:"1h15min"},{id:16,title:"The revenant",img:"revenant.jpeg",cast:"Leonardo Di Caprio, Tom Hardy etc",genre:"Action",duration:"2h15min"},{id:17,title:"Mortal Kombat",img:"mortal-kombat.jpeg",cast:"Jessica McNamee, Lewis Tan etc",genre:"Action",duration:"2h35min"},{id:18,title:"Meet the parents",img:"meet-the-parents.jpeg",cast:"Ben Stillwe, Teri Polo etc",genre:"Comedy",duration:"1h45min"},{id:19,title:"Paw patrol",img:"paw-patrol.jpeg",cast:"Kallan Holley, Ron Pardo etc",genre:"Animation",duration:"1h25min"},{id:20,title:"15:17 Paris",img:"1517-paris.jpeg",cast:"Spencer Stone, Anthony Sandler etc",genre:"Action",duration:"1h50min"}]}},methods:{getImgUrl:function(e){return t(853)("./"+e)}}};var R=t(139),$={};$.styleTagTransform=u(),$.setAttributes=p(),$.insert=c().bind(null,"head"),$.domAPI=o(),$.insertStyleElement=m(),r()(R.Z,$),R.Z&&R.Z.locals&&R.Z.locals,Y.render=function(e,n,t,i,r,a){var o=(0,v.up)("movie");return(0,v.wg)(),(0,v.j4)("div",M,[((0,v.wg)(!0),(0,v.j4)(v.HY,null,(0,v.Ko)(r.movies,(function(e){return(0,v.wg)(),(0,v.j4)(o,{key:e.id,title:e.title,img:a.getImgUrl(e.img),cast:e.cast,genre:e.genre,duration:e.duration},null,8,["title","img","cast","genre","duration"])})),128))])};const V={name:"App",components:{Bar:A,Home:O,Movies:Y},render:function(e,n,t,i,r,a){var o=(0,v.up)("bar"),s=(0,v.up)("home"),c=(0,v.up)("movies");return(0,v.wg)(),(0,v.j4)("div",null,[(0,v.Wm)(o),(0,v.Wm)(s),(0,v.Wm)(c)])}};var Q,X=t(963);document.body.appendChild(((Q=document.createElement("div")).classList.add("app-root"),Q)),(0,X.ri)(V).mount(".app-root")},104:(e,n,t)=>{"use strict";t.d(n,{Z:()=>a});var i=t(645),r=t.n(i)()((function(e){return e[1]}));r.push([e.id,"\n.home-video {\n  position: relative;\n  object-fit: fill;\n  width: 100%;\n  height: 600px;\n}\n",""]);const a=r},163:(e,n,t)=>{"use strict";t.d(n,{Z:()=>a});var i=t(645),r=t.n(i)()((function(e){return e[1]}));r.push([e.id,"\n.movie {\n  background-color: transparent;\n  width: fit-content;\n  height: 150px;\n  margin: 5px;\n  perspective: 1000px;\n  cursor: pointer;\n}\n.movie-inner {\n  position: relative;\n  width: 250px;\n  height: 150px;\n  text-align: left;\n  transition: transform 0.6s;\n  transform-style: preserve-3d;\n  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);\n}\n.movie:hover .movie-inner {\n  transform: rotateY(180deg);\n}\n.movie-inner_front, .movie-inner_back {\n  position: absolute;\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n}\n.movie-inner_back {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  height: 100%;\n  padding: 5px;\n  background-color: #141414;\n  color: white;\n  transform: rotateY(180deg);\n}\n.movie-inner_movie_img {\n  width: 250px;\n  height: 150px;\n}\n.movie-inner_back_cast {\n  padding: 5px 0;\n}\n.movie-inner_back_genre {\n  padding: 5px 0;\n}\n.movie-inner_back_duration {\n  padding: 5px 0;\n}\n.movie-inner_back_definitions {\n  color: #777;\n}\n",""]);const a=r},139:(e,n,t)=>{"use strict";t.d(n,{Z:()=>a});var i=t(645),r=t.n(i)()((function(e){return e[1]}));r.push([e.id,"\n.movies {\n  display: flex;\n  flex-flow: row wrap;\n  justify-content: center;\n  position: absolute;\n  margin: -50px 25px 25px 25px;\n}\n",""]);const a=r},640:(e,n,t)=>{"use strict";t.d(n,{Z:()=>a});var i=t(645),r=t.n(i)()((function(e){return e[1]}));r.push([e.id,"\n.navigation-bar {\n  background-color: white;\n}\n.navigation-bar_list {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  list-style-type: none;\n  margin: 0;\n  padding: 0;\n  overflow: hidden;\n  box-shadow: 0 8px 16px 0 rgb(0 0 0 / 20%), 0 6px 20px 0 rgb(0 0 0 / 19%);\n  font-size: 16px;\n  font-weight: bold;\n  white-space: nowrap;\n}\n.navigation-bar_list_item {\n  float: left;\n}\n.navigation-bar_list_item_link {\n  display: block;\n  color: black;\n  text-align: center;\n  text-decoration: none;\n  cursor: pointer;\n}\n.navigation-bar_list_item_link:hover {\n  opacity: .7;\n}\n.navigation-bar_list_item_link_img {\n  width: 25px;\n  height: auto;\n  margin: 14px 16px;\n}\n.navigation-bar_list_item_link_text {\n  margin: 0 15px;\n}\n.images-margin-left {\n  margin-left: auto;\n}\n.images-margin-right {\n  margin-right: 25px;\n}\n",""]);const a=r},982:(e,n,t)=>{"use strict";t.d(n,{Z:()=>a});var i=t(645),r=t.n(i)()((function(e){return e[1]}));r.push([e.id,"html, body {\n  width: 100%;\n  height: 100%;\n  margin: 0;\n  box-sizing: border-box;\n  font-family: Arial, Helvetica, sans-serif;\n  font-size: 14px;\n  background-color: #141414;\n}\n\n* {\n  box-sizing: border-box;\n}\n\n.app-root {\n  display: flex;\n  flex-direction: column;\n}",""]);const a=r},933:(e,n,t)=>{"use strict";e.exports=t.p+"fe2476c5eee7d5324d8f.jpeg"},721:(e,n,t)=>{"use strict";e.exports=t.p+"3b55ee154b5ab29e82b3.jpeg"},176:(e,n,t)=>{"use strict";e.exports=t.p+"a5f299e208492ae9a56b.png"},935:(e,n,t)=>{"use strict";e.exports=t.p+"cd5acf40cdd33f59574f.jpeg"},932:(e,n,t)=>{"use strict";e.exports=t.p+"06976666ce4df2372b58.png"},162:(e,n,t)=>{"use strict";e.exports=t.p+"0a19f98d791805590da5.jpeg"},750:(e,n,t)=>{"use strict";e.exports=t.p+"6e8ba1eb258a2341832b.jpeg"},683:(e,n,t)=>{"use strict";e.exports=t.p+"68d6ff89dcd382242a94.jpeg"},796:(e,n,t)=>{"use strict";e.exports=t.p+"139235892928e6bd6afc.jpeg"},599:(e,n,t)=>{"use strict";e.exports=t.p+"63a89e7886333eb8fec2.jpeg"},930:(e,n,t)=>{"use strict";e.exports=t.p+"ab5469b3d0d52b67757c.jpeg"},243:(e,n,t)=>{"use strict";e.exports=t.p+"4bc13dbb8032bf4dce7a.png"},879:(e,n,t)=>{"use strict";e.exports=t.p+"8f88a620803093ef1231.jpeg"},555:(e,n,t)=>{"use strict";e.exports=t.p+"7024e1a53b28f4454afe.png"},456:(e,n,t)=>{"use strict";e.exports=t.p+"cc63bdc0884e13807cd0.jpeg"},310:(e,n,t)=>{"use strict";e.exports=t.p+"92515890c56836b1f36a.jpeg"},231:(e,n,t)=>{"use strict";e.exports=t.p+"7fd1f88b948927093409.jpeg"},212:(e,n,t)=>{"use strict";e.exports=t.p+"ab2be3c1d93414381c26.jpeg"},362:(e,n,t)=>{"use strict";e.exports=t.p+"6efe04f7c2d6a1e498b1.jpeg"},246:(e,n,t)=>{"use strict";e.exports=t.p+"1f482ed85cb0595779f2.jpeg"},395:(e,n,t)=>{"use strict";e.exports=t.p+"1f66a7e8d4b9fa3cebc2.jpeg"},562:(e,n,t)=>{"use strict";e.exports=t.p+"6d7cd33435127a3e9431.jpeg"},39:(e,n,t)=>{"use strict";e.exports=t.p+"6bba2663ec3331cda7ca.jpeg"},853:(e,n,t)=>{var i={"./1517-paris.jpeg":933,"./3perc.jpeg":721,"./avatar.jpeg":935,"./big-bang.jpeg":162,"./catch-me.jpeg":750,"./cruella.jpeg":683,"./forrest-gump.jpeg":796,"./good-place.jpeg":599,"./hulk.jpeg":930,"./luca.jpeg":879,"./meet-the-parents.jpeg":456,"./mib.jpeg":310,"./mortal-kombat.jpeg":231,"./new-amsterdam.jpeg":212,"./paw-patrol.jpeg":362,"./revenant.jpeg":246,"./spiderman.jpeg":395,"./titanic.jpeg":562,"./tomorrow-war.jpeg":39};function r(e){var n=a(e);return t(n)}function a(e){if(!t.o(i,e)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return i[e]}r.keys=function(){return Object.keys(i)},r.resolve=a,e.exports=r,r.id=853},871:(e,n,t)=>{var i={"./account.png":176,"./bell.png":932,"./logo.png":243,"./magnifying.png":555};function r(e){var n=a(e);return t(n)}function a(e){if(!t.o(i,e)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return i[e]}r.keys=function(){return Object.keys(i)},r.resolve=a,e.exports=r,r.id=871}},t={};function i(e){var r=t[e];if(void 0!==r)return r.exports;var a=t[e]={id:e,exports:{}};return n[e](a,a.exports,i),a.exports}i.m=n,e=[],i.O=(n,t,r,a)=>{if(!t){var o=1/0;for(p=0;p<e.length;p++){for(var[t,r,a]=e[p],s=!0,c=0;c<t.length;c++)(!1&a||o>=a)&&Object.keys(i.O).every((e=>i.O[e](t[c])))?t.splice(c--,1):(s=!1,a<o&&(o=a));if(s){e.splice(p--,1);var l=r();void 0!==l&&(n=l)}}return n}a=a||0;for(var p=e.length;p>0&&e[p-1][2]>a;p--)e[p]=e[p-1];e[p]=[t,r,a]},i.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return i.d(n,{a:n}),n},i.d=(e,n)=>{for(var t in n)i.o(n,t)&&!i.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:n[t]})},i.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),i.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;i.g.importScripts&&(e=i.g.location+"");var n=i.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var t=n.getElementsByTagName("script");t.length&&(e=t[t.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),i.p=e})(),(()=>{var e={179:0};i.O.j=n=>0===e[n];var n=(n,t)=>{var r,a,[o,s,c]=t,l=0;for(r in s)i.o(s,r)&&(i.m[r]=s[r]);if(c)var p=c(i);for(n&&n(t);l<o.length;l++)a=o[l],i.o(e,a)&&e[a]&&e[a][0](),e[o[l]]=0;return i.O(p)},t=self.webpackChunkstreaming=self.webpackChunkstreaming||[];t.forEach(n.bind(null,0)),t.push=n.bind(null,t.push.bind(t))})();var r=i.O(void 0,[315],(()=>i(416)));r=i.O(r)})();
"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[781],{781:function(n,t,e){e.r(t),e.d(t,{default:function(){return a}});var r=e(433),i=e(439),c=e(87),o=e(791),u="Home_movieItem__yfa+9",f=e(275),s=e(184),a=function(){var n=(0,o.useState)([]),t=(0,i.Z)(n,2),e=t[0],a=t[1];return(0,o.useEffect)((function(){var n=(0,f.W)("trending/movie/day","");(0,f.c)(n).then((function(n){a((0,r.Z)(n.results))})).catch((function(n){})).finally((function(){}))}),[]),(0,s.jsxs)("section",{children:[(0,s.jsx)("h1",{children:"Trending today"}),e&&(0,s.jsx)("ul",{children:e.map((function(n){var t=n.title,e=n.id;return(0,s.jsx)("li",{className:u,children:(0,s.jsx)(c.rU,{to:"/movies/".concat(e),children:t})},e)}))})]})}},275:function(n,t,e){e.d(t,{W:function(){return r},c:function(){return i}});function r(n,t){return"https://api.themoviedb.org/3/"+n+"?api_key=8bdb4b862ffa773481adb9dc6c5538df"+t}function i(n){return fetch(n).then((function(n){return n.ok?n.json():Promise.reject(new Error("\u041d\u0435\u043c\u0430\u0454 \u0434\u0430\u043d\u0438\u0445 \u043f\u043e \u0437\u0430\u043f\u0438\u0442\u0443"))}))}}}]);
//# sourceMappingURL=781.5a87c39a.chunk.js.map
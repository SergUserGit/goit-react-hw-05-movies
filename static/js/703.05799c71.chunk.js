"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[703],{703:function(e,t,n){n.r(t),n.d(t,{default:function(){return f}});var i=n(433),a=n(439),o=n(791),r=n(87),u="Movies_findForm__La+Xb",c="Movies_findInput__S9G-s",s="Movies_movieItem__WBe6u",l=n(184),f=function(){var e=(0,o.useState)(""),t=(0,a.Z)(e,2),n=t[0],f=t[1],d=(0,o.useState)([]),h=(0,a.Z)(d,2),m=h[0],_=h[1];return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)("form",{onSubmit:function(e){e.preventDefault(),fetch("https://api.themoviedb.org/3/search/movie?api_key=8bdb4b862ffa773481adb9dc6c5538df&language=en-US&page=1&include_adult=false&query=".concat(n)).then((function(e){return e.ok?e.json():Promise.reject(new Error("\u041d\u0435\u043c\u0430\u0454 \u0434\u0430\u043d\u0438\u0445 \u043f\u043e \u0437\u0430\u043f\u0438\u0442\u0443"))})).then((function(e){_((0,i.Z)(e.results))})).catch((function(e){console.log("\u041e\u0448\u0438\u0431\u043a\u0430")})).finally((function(){}))},className:u,children:[(0,l.jsx)("input",{className:c,type:"text",value:n,name:"find",autoComplete:"off",autoFocus:!0,required:!0,onChange:function(e){var t=e.target.value;f((function(e){return t}))}}),(0,l.jsx)("button",{type:"submit",children:"Search"})]}),m&&(0,l.jsx)("ul",{children:m.map((function(e){var t=e.title,n=e.id;return(0,l.jsx)("li",{className:s,children:(0,l.jsx)(r.rU,{to:"/movies/".concat(n),children:t})},n)}))})]})}}}]);
//# sourceMappingURL=703.05799c71.chunk.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,function(e,t,a){},,,function(e,t,a){e.exports=a.p+"static/media/altius.9a08cf0d.jpg"},function(e,t,a){e.exports=a.p+"static/media/inn.e328fa9b.jpg"},function(e,t,a){e.exports=a.p+"static/media/ross.0a2d0d11.jpg"},function(e,t,a){e.exports=a.p+"static/media/amc.1e57e3f0.jpg"},function(e,t,a){e.exports=a.p+"static/media/cmu.3e5cd564.jpg"},function(e,t,a){e.exports=a.p+"static/media/home.b3bfc37c.jpg"},function(e,t,a){e.exports=a.p+"static/media/view.065bfeaa.jpg"},function(e,t,a){e.exports=a.p+"static/media/dinner.46174ba1.jpg"},function(e,t,a){e.exports=a.p+"static/media/birthday.2b918568.jpg"},function(e,t,a){e.exports=a.p+"static/media/cat.ee8c6ec3.jpg"},function(e,t,a){e.exports=a.p+"static/media/map.1d12214a.jpg"},function(e,t,a){e.exports=a.p+"static/media/pittsburgh.8c448cd8.jpg"},function(e,t,a){e.exports=a(29)},,,,,function(e,t,a){},,,function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(8),s=a.n(r),o=(a(26),a(1)),c=a(2),l=a(4),u=a(3),d=a(5),p=(a(6),function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"pWrapper",onClick:this.props.onClick},i.a.createElement("div",{className:"List-container"},i.a.createElement("img",{className:"pImage",src:this.props.image,alt:this.props.altText}),i.a.createElement("div",{className:"pLabel"},this.props.description)))}}]),t}(n.Component)),m=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"detailPane"},i.a.createElement("div",{className:"Xout",onClick:this.props.onClose},"X"),i.a.createElement("div",{className:"detailPane-inner"},i.a.createElement("div",{className:"detailLabel"},this.props.description),i.a.createElement("img",{className:"detailImg",src:this.props.image,alt:this.props.altText}),i.a.createElement("div",{className:"detailDetail"},this.props.detail),i.a.createElement("div",{className:"detailLocation"},this.props.location)))}}]),t}(n.Component),h=a(9),f=a.n(h),g=a(10),v=a.n(g),b=a(11),w=a.n(b),y=a(12),E=a.n(y),j=a(13),k=a.n(j),A=function(e){function t(e){var a;Object(o.a)(this,t),a=Object(l.a)(this,Object(u.a)(t).call(this,e));var n={image:f.a,altText:"altius",description:"Altius",location:"Address: 1230 Grandview Ave, Pittsburgh, PA 15211 \xb7 Hours: Opens 5PM \xb7 Menu: altiuspgh.com \xb7 Phone: (412) 904-4442",detail:"Altius is a fine dining restaurant near Point of View Park. This modern outpost for upscale New American dishes and craft cocktails offers scenic city views."},i={image:v.a,altText:"Inn",description:"Shadyside Inn",location:"Address: 5405 Fifth Ave, Pittsburgh, PA 15232 \xb7 Phone: (412) 441-4444",detail:"Shadyside Inn All Suites is a cozy hotel near CMU that offers gorgeous suites at affordable prices. It\u2019s a nice place to stay in for parents who are visiting their children or anyone who wants to explore Pittsburgh."},r={image:w.a,altText:"mall",description:"Ross Park Mall",location:"Address: 1000 Ross Park Mall Dr, Pittsburgh, PA 15237 \xb7 Hours: Opens 10AM",detail:"Ross Park Mall Is the best shopping center in Pittsburgh. Anchored by Nordstrom, Macy's, and jcpenney, Ross Park Mall makes shopping fun, fulfilling and full of surprises."},s={image:E.a,altText:"amc",description:"AMC Waterfront",location:"Address: 300 W Waterfront Dr, West Homestead, PA 15120 \xb7 Phone: (412) 462-6550",detail:"AMC Waterfront 22 is a cinema in Waterfront where people can watch the latest movies and get relaxed."},c={image:k.a,altText:"cmu",description:"Carnegie Mellon University",location:"Address: 5000 Forbes Ave, Pittsburgh, PA 15213 \xb7 Phone: (412) 268-2000",detail:"Carnegie Mellon University is  a selective private institution most known for its programs in technology, science, and the performing. Founded by Andrew Carnegie in 1900, the university has risen to prominence as a Top 25 institution."};return a.state={inventory:[n,i,r,s,c],detail:null},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"selectItem",value:function(e){var t=this;console.log("selected ",e);var a=this.state.inventory[e],n=i.a.createElement(m,{onClose:function(e){return t.setState({detail:null})},image:a.image,altText:a.altText,description:a.description,detail:a.detail,location:a.location});this.setState({detail:n})}},{key:"renderDetailView",value:function(){if(null!==this.state.detail)return this.state.detail}},{key:"renderLocations",value:function(){for(var e=[],t=0;t<this.state.inventory.length;t++){var a=this.state.inventory[t];e.push(i.a.createElement(p,{onClick:this.selectItem.bind(this,t),image:a.image,altText:a.altText,description:a.description,detail:a.detail,location:a.location}))}return i.a.createElement("div",null,e,this.renderDetailView())}},{key:"render",value:function(){return this.renderLocations()}}]),t}(n.Component),P=a(14),O=a.n(P),N=a(15),x=a.n(N),M=a(16),C=a.n(M),T=a(17),S=a.n(T),I=a(18),W=a.n(I),L={}.hasOwnProperty;var V=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(l.a)(this,Object(u.a)(t).call(this))).state={activeIndex:0},e}return Object(d.a)(t,e),Object(c.a)(t,[{key:"jumpToSlide",value:function(e){this.setState({activeIndex:e})}},{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:"slideshow"},i.a.createElement("ul",{className:"slideshow-slides"},this.props.slides.map(function(t,a){return i.a.createElement("li",{className:function e(){for(var t="",a=0;a<arguments.length;a++){var n=arguments[a];if(n){var i=typeof n;if("string"===i||"number"===i)t+=" "+n;else if(Array.isArray(n))t+=" "+e.apply(null,n);else if("object"===i)for(var r in n)L.call(n,r)&&n[r]&&(t+=" "+r)}}return t.substr(1)}({active:a===e.state.activeIndex})},i.a.createElement("figure",null,i.a.createElement("img",{src:t.imageSrc}),t.caption?i.a.createElement("figcaption",null,t.caption):null))})),i.a.createElement("ul",{className:"slideshow-dots"},this.props.slides.map(function(t,a){return i.a.createElement("li",{className:a==e.state.activeIndex?"active":""},i.a.createElement("a",{onClick:function(t){return e.jumpToSlide(a)}},a+1))})))}}]),t}(i.a.Component),D=[{imageSrc:O.a,caption:"The best corner in my apartment."},{imageSrc:x.a,caption:"Pittsburgh is incredibly beautiful sometimes."},{imageSrc:C.a,caption:"Dinner at Altius when there is no due."},{imageSrc:W.a,caption:"At downtown coffee shop with cats."},{imageSrc:S.a,caption:"21st birthday party in Shadyside Inn."}],R=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{id:"about"},i.a.createElement("p",{className:"App-aboutUs"},i.a.createElement("div",{id:"more"},"More about me and Pitt!"),"I am a junior student at Carnegie Mellon University. I came to Pittsburgh two years ago. Pittsburgh is a vibrant, mid-sized city that has the feel of a small town. Riverfronts are thoughtfully developed, utilized for recreation now more than ever. Businesses look to the environment as an asset, not a challenge. And, best of all, people here are energetic, hard-working and passionate about life.  The five sub-locations I\u2019ve chosen in Pittsburgh are Carnegie Mellon University, Shadyside Inn All Suites Hotel, AMC Waterfront 22, Ross Park Mall and the Altius Restaurant."),i.a.createElement(V,{slides:D}))}}]),t}(n.Component),U=a(19),B=a.n(U),H=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={detail:null},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"renderDetailView",value:function(){if(null!==this.state.detail)return this.state.detail}},{key:"renderInventory",value:function(){return i.a.createElement("div",null,this.renderDetailView())}},{key:"render",value:function(){return i.a.createElement("div",null,this.renderInventory(),i.a.createElement("div",{className:"Map-container"},i.a.createElement("img",{src:B.a,className:"Map-largeView",alt:"map view",useMap:"#image-map"}),i.a.createElement("map",{name:"image-map"},i.a.createElement("area",{target:"",alt:"",title:"",href:"https://www.simon.com/mall/ross-park-mall",coords:"427,11,618,198",shape:"rect"}),i.a.createElement("area",{target:"",alt:"",title:"",href:"http://altiuspgh.com/",coords:"460,469,599,647",shape:"0"}),i.a.createElement("area",{target:"",alt:"",title:"",href:"https://www.cmu.edu/",coords:"728,404,891,589",shape:"0"}),i.a.createElement("area",{target:"",alt:"",title:"",href:"https://www.amctheatres.com/movie-theatres/pittsburgh/amc-waterfront-22",coords:"912,621,1086,782",shape:"0"}),i.a.createElement("area",{target:"",alt:"",title:"",href:"http://www.shadysideinn.com/",coords:"1061,381,1222,571",shape:"0"})),i.a.createElement("div",{className:"Map-label"},i.a.createElement("h1",null,"Click on the pin and check their websites!"))))}}]),t}(n.Component),F=a(20),z=a.n(F),J=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={page:0},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"navToListPage",value:function(){this.setState({page:0})}},{key:"navToMapPage",value:function(){this.setState({page:1})}},{key:"navToAboutPage",value:function(){this.setState({page:2})}},{key:"navToHomePage",value:function(){this.setState({page:3})}},{key:"renderPageView",value:function(){return 0===this.state.page?i.a.createElement(A,null):1===this.state.page?i.a.createElement(H,null):2===this.state.page?i.a.createElement(R,null):void 0}},{key:"render",value:function(){return i.a.createElement("div",{className:"App"},i.a.createElement("img",{src:z.a,className:"App-largeView",alt:"city view"}),i.a.createElement("div",{className:"App-navMenu"},i.a.createElement("div",{className:"App-navMenu-button"+(0===this.state.page?" active":""),onClick:this.navToListPage.bind(this)},"See List"),i.a.createElement("div",{className:"App-navMenu-button"+(1===this.state.page?" active":""),onClick:this.navToMapPage.bind(this)},"See Map"),i.a.createElement("div",{className:"App-navMenu-button"+(2===this.state.page?" active":""),onClick:this.navToAboutPage.bind(this)},"About Me")),i.a.createElement("div",{className:"App-content"},i.a.createElement("h1",{className:"App-title"},"BEST OF"),i.a.createElement("div",{id:"pitt"},"Pittsburgh"),this.renderPageView()))}}]),t}(n.Component),X=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function G(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}s.a.render(i.a.createElement(J,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/Best-of-Pittsburgh",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("/Best-of-Pittsburgh","/service-worker.js");X?function(e){fetch(e).then(function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):G(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e):G(e)})}}()}],[[21,2,1]]]);
//# sourceMappingURL=main.59c48ebc.chunk.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,a){},16:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(7),i=a.n(r),l=(a(15),a(1)),c=a(2),s=a(4),u=a(3),h=a(5),d=(a(16),function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(c.a)(t,[{key:"viewMovie",value:function(){var e="https://www.themoviedb.org/movie/"+this.props.movie.id;window.location.href=e}},{key:"render",value:function(){var e="#FFFFFF";return e=0===this.props.color?"#FFFFFF":"#E0E0E0",o.a.createElement("table",{style:{width:"100%",backgroundColor:e},key:this.props.movie.id},o.a.createElement("tbody",null,o.a.createElement("tr",null,o.a.createElement("td",{style:{width:"120px"}},o.a.createElement("img",{alt:"poster",width:"120px",src:this.props.movie.poster_src})),o.a.createElement("td",null,o.a.createElement("h3",null,this.props.movie.title),o.a.createElement("p",null,this.props.movie.overview),o.a.createElement("input",{type:"button",onClick:this.viewMovie.bind(this),value:"View"})))))}}]),t}(o.a.Component)),p=a(8),m=a.n(p),v=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={},a.performSearch("A"),a}return Object(h.a)(t,e),Object(c.a)(t,[{key:"performSearch",value:function(e){var t=this;console.log("Perform search using movieDB");var a="https://api.themoviedb.org/3/search/movie?api_key=b1cd3d46d2cb1a68ea7e2ef504c75536&language=en-US&page=1&include_adult=false&query="+e;m.a.ajax({url:a,success:function(e){console.log("Fetched data successfully!"),console.log(e);var a=e.results,n=[],r=0,i=0;a.forEach(function(e){i=r%2===1?0:1,r++,e.poster_src="https://image.tmdb.org/t/p/w185"+e.poster_path;var t=o.a.createElement(d,{key:e.id,movie:e,color:i});n.push(t)}),t.setState({rows:n})},error:function(e,t,a){console.log("Failed to fetch data")}})}},{key:"searchChangeHandler",value:function(e){console.log(e.target.value);var t=e.target.value;this.performSearch(t)}},{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("table",{className:"titleBar"},o.a.createElement("tbody",null,o.a.createElement("tr",null,o.a.createElement("td",null,o.a.createElement("img",{alt:"web icon",width:"50",src:"video-player.svg"})),o.a.createElement("td",{width:"8"}),o.a.createElement("td",null,o.a.createElement("h2",{style:{paddingLeft:16}},"Movies Search"))))),o.a.createElement("input",{style:{fontSize:24,display:"block",width:"99.7%",paddingTop:8,paddingBottom:8,paddingLeft:16},onChange:this.searchChangeHandler.bind(this),placeholder:"Type to search..."}),this.state.rows)}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},9:function(e,t,a){e.exports=a(17)}},[[9,1,2]]]);
//# sourceMappingURL=main.1b83e055.chunk.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,function(e,t,n){e.exports=n(20)},,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),s=n(8),r=n.n(s),i=(n(16),n(9)),p=n(1),c=n(2),u=n(5),m=n(3),l=n(6),h=n(4),k=(n(17),n(18),function(e){function t(){return Object(p.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props,t=e.name,n=e.photo,a=e.types;return o.a.createElement("div",null,o.a.createElement("img",{src:n,className:"photo",alt:t}),o.a.createElement("p",{className:"name"},t),o.a.createElement("ul",{className:"types"},a.map(function(e,t){return o.a.createElement("li",{className:"pokemonTypes",key:t},e)})))}}]),t}(o.a.Component)),v=(n(19),function(e){function t(){return Object(p.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement("ul",{className:"pokemonList"},this.props.pokemon.map(function(t){return o.a.createElement("li",{className:"pokemonItem ".concat(e.props.favPokemon.includes(t.id)?"pokemonFav":"anything"),id:t.id,key:t.id,onClick:e.props.actionToFav},o.a.createElement(k,{name:t.name,photo:t.url,types:t.types}))}))}}]),t}(o.a.Component)),b=[{id:1,name:"bulbasaur",types:["poison","grass"],evolution:null,url:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"},{id:2,name:"ivysaur",types:["poison","grass"],evolution:"bulbasaur",url:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png"},{id:3,name:"venusaur",types:["poison","grass"],evolution:"ivysaur",url:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png"},{id:4,name:"charmander",types:["fire"],evolution:null,url:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png"},{id:5,name:"charmeleon",types:["fire"],evolution:"charmander",url:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png"},{id:6,name:"charizard",types:["flying","fire"],evolution:"charmeleon",url:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png"},{id:7,name:"squirtle",types:["water"],evolution:null,url:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png"},{id:8,name:"wartortle",types:["water"],evolution:"squirtle",url:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png"},{id:9,name:"blastoise",types:["water"],evolution:"wartortle",url:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png"},{id:10,name:"caterpie",types:["bug"],evolution:null,url:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png"}],d=function(e){function t(e){var n;return Object(p.a)(this,t),(n=Object(u.a)(this,Object(m.a)(t).call(this,e))).state={pokemon:b,favPokemon:[]},n.handleClickFav=n.handleClickFav.bind(Object(l.a)(n)),n}return Object(h.a)(t,e),Object(c.a)(t,[{key:"handleClickFav",value:function(e){var t=parseInt(e.currentTarget.id);this.setState(function(e){return e.favPokemon.indexOf(t)<0?{favPokemon:[].concat(Object(i.a)(e.favPokemon),[t])}:{favPokemon:e.favPokemon.splice(t,1)}})}},{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement("h1",null,"Mi lista de Pok\xe9mon"),o.a.createElement(v,{pokemon:this.state.pokemon,favPokemon:this.state.favPokemon,actionToFav:this.handleClickFav}))}}]),t}(o.a.Component);r.a.render(o.a.createElement(d,null),document.getElementById("root"))}],[[10,1,2]]]);
//# sourceMappingURL=main.85143213.chunk.js.map
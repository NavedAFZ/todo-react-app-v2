(this["webpackJsonptodo-list"]=this["webpackJsonptodo-list"]||[]).push([[0],{22:function(e,t,c){},23:function(e,t,c){},24:function(e,t,c){},31:function(e,t,c){"use strict";c.r(t);var s=c(1),n=c.n(s),i=c(5),a=c.n(i),l=(c(22),c(16)),r=c(11),o=c(12),d=c(17),u=c(15),j=(c.p,c(23),c(3)),b=(c(24),c(13)),h=c(14),m=c(0),x=function(e){var t=Object(s.useState)("none"),c=Object(j.a)(t,2),n=c[0],i=c[1],a=Object(s.useState)("none"),l=Object(j.a)(a,2),r=(l[0],l[1],e.items.filter((function(e){if(""!==e.text)return e})).map((function(t){return Object(m.jsx)("div",{className:"List ",children:Object(m.jsxs)("p",{children:[Object(m.jsx)("input",{type:"text",id:t.key,value:t.text,onChange:function(c){e.setUpdate(c.target.value,t.key)}}),Object(m.jsx)("span",{children:Object(m.jsx)(b.a,{className:"faicons",icon:"trash",onClick:function(){e.deleteItem(t.key)}})})]})},t.key)}))),o=e.items.map((function(e){return Object(m.jsx)("table",{class:"ui fixed single line celled table",children:Object(m.jsx)("thead",{children:Object(m.jsx)("tr",{children:Object(m.jsx)("th",{children:e.text})})})},e.key)}));return Object(m.jsxs)("div",{style:{},children:[Object(m.jsx)(h.a,{duration:300,easing:"ease-in-out",children:r}),Object(m.jsx)("br",{}),Object(m.jsx)("hr",{}),Object(m.jsx)("br",{}),Object(m.jsx)("button",{className:"ui button viewList",onClick:function(){i("none"===n?"block":"none")},children:"View your todo"}),Object(m.jsx)("div",{className:"myList",style:{display:n},children:o}),Object(m.jsx)("br",{}),Object(m.jsx)("br",{}),Object(m.jsx)("br",{})]})},O=function(e){var t=e.options,c=e.selected,n=e.onSelectedChange,i=Object(s.useState)(!1),a=Object(j.a)(i,2),l=a[0],r=a[1],o=Object(s.useRef)();Object(s.useEffect)((function(){var e=function(e){o.current.contains(e.target)||r(!1)};return document.body.addEventListener("click",e,{capture:!0}),function(){document.body.removeEventListener("click",e,{capture:!0})}}),[]);var d=t.map((function(e){return e.value==c.value?null:Object(m.jsx)("div",{onClick:function(){n(e)},className:"item",children:e.label},e.value)}));return Object(m.jsx)("div",{className:"ui form",ref:o,children:Object(m.jsxs)("div",{className:"field",children:[Object(m.jsx)("label",{className:"label",children:s.label}),Object(m.jsxs)("div",{onClick:function(){r(!l)},className:"ui selection dropdown ".concat(l?"visible active":""),children:[Object(m.jsx)("i",{className:"dropdown icon"}),Object(m.jsx)("div",{className:"text",children:c.label}),Object(m.jsx)("div",{className:"menu ".concat(l?"visible transition":""),children:d})]})]})})},f=c(4),v=c(10);f.b.add(v.a);var p=function(e){Object(d.a)(c,e);var t=Object(u.a)(c);function c(e){var s;return Object(r.a)(this,c),(s=t.call(this,e)).setSelected=function(e){s.setState({selected:e})},s.addItem=function(e){e.preventDefault();var t=s.state.currentItem;if(""!==t.text&&" "!==t.text){var c=[].concat(Object(l.a)(s.state.items),[t]);s.setState({items:c,currentItem:{text:"",key:""}})}localStorage.setItem("items",JSON.stringify(s.state.items)),localStorage.setItem("currentItem",JSON.stringify(s.state.currentItem))},s.handleInput=function(e){s.setState({currentItem:{text:e.target.value.replace(/[^a-z\s]/gi,"").replace(/\s{2,}/g," "),key:Date.now()}})},s.deleteItem=function(e){var t=s.state.items.filter((function(t){if(t.key!=e)return t}));s.setState({items:t})},s.deleteAll=function(){s.setState({items:[]})},s.setUpdate=function(e,t){var c=s.state.items.map((function(c){return c.key==t&&(c.text=e.replace(/[^a-z\s]/gi,"").replace(/\s{2,}/g," ")),c}));s.setState({items:c})},s.items=[{title:"What is React?",content:"React is a front end javascript framework"},{title:"Why use React?",content:"React is a favorite JS library among engineers"},{title:"How do you use React?",content:"You use React by creating components"}],s.options=[{label:"Light",value:"#F0E68C",secondary:"#FFE4B5"},{label:"Dark",value:"rgba(16, 17, 19, 0.2)",secondary:" rgba(16, 17, 19, 0.5)"},{label:"Soothing blue",value:"#1E90FF",secondary:"#87ceeb"}],s.state={items:[],currentItem:{text:"",key:""},selected:s.options[0]},s}return Object(o.a)(c,[{key:"render",value:function(){return document.querySelector("body").style.backgroundColor=this.state.selected.value,Object(m.jsxs)(n.a.Fragment,{children:[Object(m.jsxs)("div",{class:"ui menu",children:[Object(m.jsx)("br",{}),Object(m.jsxs)("h5",{className:"ui center aligned icon header",children:[Object(m.jsx)("i",{class:"circular users icon"}),Object(m.jsx)("h3",{children:" ToDo-List"})]}),Object(m.jsx)("div",{class:"header item",children:"Theme"}),Object(m.jsx)("div",{class:"ui item",children:Object(m.jsx)(O,{label:"Choose a color",selected:this.state.selected,onSelectedChange:this.setSelected,options:this.options})})]}),Object(m.jsxs)("div",{style:{backgroundColor:this.state.selected.value},children:[Object(m.jsxs)("div",{className:"App",style:{backgroundColor:this.state.selected.secondary},children:[Object(m.jsx)("br",{}),Object(m.jsx)("header",{className:"ui center aligned icon header",children:Object(m.jsx)("form",{id:"to-do-form",onSubmit:this.addItem,children:Object(m.jsxs)("div",{class:"ui input",children:[Object(m.jsx)("input",{type:"text",placeholder:"enter text",value:this.state.currentItem.text,onChange:this.handleInput}),Object(m.jsxs)("div",{class:"ui buttons",children:[Object(m.jsx)("button",{type:"submit",class:"ui positive button",style:{backgroundColor:"#00FA9A",color:"#ffffff"},children:"Add"}),Object(m.jsx)("div",{class:"or"}),Object(m.jsx)("button",{onClick:this.deleteAll,class:"ui button",style:{backgroundColor:"red",color:"#ffffff"},children:"Delete All"})]})]})})}),Object(m.jsx)("br",{}),Object(m.jsx)(x,{items:this.state.items,deleteItem:this.deleteItem,setUpdate:this.setUpdate})]}),Object(m.jsx)("br",{}),Object(m.jsx)("br",{})]})]})}}]),c}(n.a.Component),y=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,32)).then((function(t){var c=t.getCLS,s=t.getFID,n=t.getFCP,i=t.getLCP,a=t.getTTFB;c(e),s(e),n(e),i(e),a(e)}))};a.a.render(Object(m.jsx)(n.a.StrictMode,{children:Object(m.jsx)(p,{})}),document.getElementById("root")),y()}},[[31,1,2]]]);
//# sourceMappingURL=main.d6871dba.chunk.js.map
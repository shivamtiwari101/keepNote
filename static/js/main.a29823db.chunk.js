(this.webpackJsonpapp1=this.webpackJsonpapp1||[]).push([[0],{14:function(e,t,n){"use strict";n.r(t);var a=n(7),l=n.n(a),c=n(0),r=n.n(c),o=n(8),i=n(2),u=function(){return r.a.createElement("div",{style:{height:"10%",width:"100%",background:"yellow",display:"flex"}},r.a.createElement("img",{src:"./Images/man.png",alt:"img not found",width:"70",height:"50"}),r.a.createElement("h1",null,"S Keep"))},m=function(){var e=(new Date).getFullYear();return r.a.createElement("footer",{className:"footer"},r.a.createElement("p",null,"\xa9and \xae BY Shivam Keep App ",e))},s=n(4),p=n(5),f=function(e){var t=Object(c.useState)({title:"",content:""}),n=Object(i.a)(t,2),a=n[0],l=n[1],o=function(e){var t=e.target,n=t.name,a=t.value;l((function(e){return Object(p.a)(Object(p.a)({},e),{},Object(s.a)({},n,a))}))},u=Object(c.useState)(!1),m=Object(i.a)(u,2),f=m[0],E=m[1];return r.a.createElement("div",{className:"main_note"},r.a.createElement("form",null,f?r.a.createElement("input",{type:"text",placeholder:"Title",value:a.title,onChange:o,name:"title",className:"inner-item"}):null,r.a.createElement("textarea",{placeholder:"Write a note.......",value:a.content,onChange:o,name:"content",onClick:function(){E(0==f)},className:"inner-item"}),r.a.createElement("br",null),r.a.createElement("span",{className:"btn-box"},r.a.createElement("input",{type:"button",value:"+",className:"btn btn-info",onClick:function(){e.passNote(a),l({title:"",content:""})}}))))},E=function(e){return r.a.createElement("div",{className:"note"},r.a.createElement("h4",null,e.title),r.a.createElement("br",null),r.a.createElement("p",null,e.content),r.a.createElement("span",{style:{float:"right"}},r.a.createElement("button",{className:"btn btn-danger",onClick:function(t){e.deleteItem(e.id)}},"X")))},b=function(){var e=Object(c.useState)([]),t=Object(i.a)(e,2),n=t[0],a=t[1],l=function(e){1==window.confirm("Are you Sure To delete The Record")&&a((function(t){return t.filter((function(t,n){return n!==e}))}))};return r.a.createElement(r.a.Fragment,null,r.a.createElement(u,null),r.a.createElement(f,{passNote:function(e){a((function(t){return[].concat(Object(o.a)(t),[e])}))}}),r.a.createElement("div",{className:"note-box"},n.map((function(e,t){return r.a.createElement(E,{key:t,id:t,title:e.title,content:e.content,deleteItem:l})}))),r.a.createElement(m,null))};l.a.render(r.a.createElement(b,null),document.getElementById("root"))},9:function(e,t,n){e.exports=n(14)}},[[9,1,2]]]);
//# sourceMappingURL=main.a29823db.chunk.js.map
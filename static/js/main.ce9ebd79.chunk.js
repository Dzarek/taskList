(this.webpackJsonptodoapplist=this.webpackJsonptodoapplist||[]).push([[0],{14:function(t,e,a){},15:function(t,e,a){},17:function(t,e,a){"use strict";a.r(e);var n=a(1),s=a.n(n),c=a(9),i=a.n(c),r=(a(14),a(7)),o=a(2),l=a(3),h=a(5),d=a(4),j=(a(8),a(15),a(0)),u=function(t){Object(h.a)(a,t);var e=Object(d.a)(a);function a(){var t;Object(o.a)(this,a);for(var n=arguments.length,s=new Array(n),c=0;c<n;c++)s[c]=arguments[c];return(t=e.call.apply(e,[this].concat(s))).minDate=(new Date).toISOString().slice(0,10),t.state={text:"",checked:!1,date:t.minDate,active:!1},t.handleText=function(e){t.setState({text:e.target.value})},t.handleCheckbox=function(e){t.setState({checked:e.target.checked})},t.handleDate=function(e){t.setState({date:e.target.value})},t.handleClick=function(){var e=t.state,a=e.text,n=e.checked,s=e.date;t.props.add(a,s,n)&&""!==a&&t.setState({text:"",checked:!1,date:t.minDate,active:!t.state.active})},t}return Object(l.a)(a,[{key:"render",value:function(){var t=this,e=1*this.minDate.slice(0,4)+1;e+="-12-31";var a={form_off:{display:"none"},form_oon:{display:"block"}},n=[];return this.state.active&&n.push("btnLess"),this.state.active||n.push("btnMore"),Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("button",{className:n.join(" "),onClick:function(){return t.setState({active:!t.state.active})},children:this.state.active?Object(j.jsx)("i",{class:"fas fa-sort-up"}):"+"}),Object(j.jsxs)("div",{className:"form",style:this.state.active?a.form_on:a.form_off,children:[Object(j.jsx)("input",{className:"taskTextInput",type:"text",placeholder:"zadanie...",value:this.state.text,onChange:this.handleText}),Object(j.jsx)("br",{}),Object(j.jsx)("label",{htmlFor:"date",children:"Czas na wykonanie:"}),Object(j.jsx)("input",{style:{borderRadius:10},type:"date",value:this.state.date,min:this.minDate,max:e,onChange:this.handleDate}),Object(j.jsx)("br",{}),Object(j.jsx)("input",{style:{height:20,width:20},type:"checkbox",checked:this.state.checked,id:"important",onChange:this.handleCheckbox}),Object(j.jsx)("label",{htmlFor:"important",children:"Priorytet!"}),Object(j.jsx)("button",{style:{borderRadius:5,cursor:"pointer",backgroundColor:"transparent",color:"rgb(241, 248, 174)",border:"2px solid white"},onClick:this.handleClick,children:"Dodaj"})]})]})}}]),a}(n.Component),b=function(t){var e=t.task,a=e.text,n=e.date,s=e.id,c=e.active,i=e.important,r=e.finishDate;if(c)return Object(j.jsx)("div",{children:Object(j.jsxs)("p",{className:"todotask",children:[Object(j.jsx)("button",{className:"ok",onClick:function(){return t.change(s)},children:Object(j.jsx)("i",{class:"far fa-check-circle"})}),Object(j.jsx)("strong",{className:"oneTask",style:i?{color:"rgb(207, 90, 12)"}:null,children:a}),Object(j.jsxs)("span",{style:{fontSize:18,fontStyle:"italic"},children:[" -",n]}),Object(j.jsx)("button",{className:"cancel",onClick:function(){return t.delete(s)},children:Object(j.jsx)("i",{class:"fas fa-trash"})})]})});var o=new Date(r).toLocaleDateString();return Object(j.jsx)("div",{children:Object(j.jsxs)("p",{children:[Object(j.jsxs)("strong",{children:["- ",a]}),Object(j.jsx)("br",{}),"wykonano: ",Object(j.jsxs)("span",{children:[" ",o]}),Object(j.jsx)("button",{className:"cancel",onClick:function(){return t.delete(s)},children:Object(j.jsx)("i",{class:"fas fa-trash"})})]})})},f=function(t){var e=t.tasks.filter((function(t){return t.active})),a=t.tasks.filter((function(t){return!t.active}));a.length>=2&&a.sort((function(t,e){return t.finishDate>e.finishDate?-1:t.finishDate<e.finishDate?1:0})),e.length>=2&&e.sort((function(t,e){return(t=t.text.toLowerCase())<(e=e.text.toLowerCase())?-1:t>e?1:0}));var n=e.map((function(e){return Object(j.jsx)(b,{task:e,delete:t.delete,change:t.change},e.id)})),s=a.map((function(e){return Object(j.jsx)(b,{task:e,delete:t.delete,change:t.change},e.id)}));return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("div",{className:"active",children:[Object(j.jsx)("h2",{children:"Zadania do zrobienia"}),n.length>0?n:Object(j.jsx)("p",{style:{color:"rgb(98, 163, 24)",fontWeight:700},children:"Nie masz nic do roboty :)"})]}),Object(j.jsx)("hr",{}),Object(j.jsxs)("div",{className:"done",children:[Object(j.jsxs)("h2",{className:"oldTask",children:["Zadania zrobione ",Object(j.jsxs)("em",{children:["(",a.length,")"]})]}),a.length>5&&Object(j.jsx)("span",{style:{fontSize:"14px"},children:"Wy\u015bwietlonych jest ostatnich 5 zada\u0144"}),s.slice(0,5)]})]})},x=function(t){Object(h.a)(a,t);var e=Object(d.a)(a);function a(){var t;Object(o.a)(this,a);for(var n=arguments.length,s=new Array(n),c=0;c<n;c++)s[c]=arguments[c];return(t=e.call.apply(e,[this].concat(s))).counter=1,t.state={tasks:[]},t.deleteTask=function(e){var a=Object(r.a)(t.state.tasks);a=a.filter((function(t){return t.id!==e})),t.setState({tasks:a})},t.changeTaskStatus=function(e){var a=Array.from(t.state.tasks);a.forEach((function(t){t.id===e&&(t.active=!1,t.finishDate=(new Date).getTime())})),t.setState({tasks:a})},t.addTask=function(e,a,n){var s={id:t.counter,text:e,date:a,important:n,active:!0,finishDate:null};return t.counter++,""!==s.text&&t.setState((function(t){return{tasks:[].concat(Object(r.a)(t.tasks),[s])}})),!0},t}return Object(l.a)(a,[{key:"render",value:function(){return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)("h1",{children:"LISTA ZADA\u0143"}),Object(j.jsx)("h2",{children:"Dodaj nowe zadanie"}),Object(j.jsx)(u,{className:"Addtasks",add:this.addTask}),Object(j.jsx)("hr",{}),Object(j.jsx)(f,{className:"TaskList",tasks:this.state.tasks,delete:this.deleteTask,change:this.changeTaskStatus})]})}}]),a}(n.Component),O=function(t){t&&t instanceof Function&&a.e(3).then(a.bind(null,18)).then((function(e){var a=e.getCLS,n=e.getFID,s=e.getFCP,c=e.getLCP,i=e.getTTFB;a(t),n(t),s(t),c(t),i(t)}))};i.a.render(Object(j.jsx)(s.a.StrictMode,{children:Object(j.jsx)(x,{})}),document.getElementById("root")),O()},8:function(t,e,a){}},[[17,1,2]]]);
//# sourceMappingURL=main.ce9ebd79.chunk.js.map
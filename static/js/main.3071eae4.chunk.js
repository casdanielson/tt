(this["webpackJsonpreact-task-tracker"]=this["webpackJsonpreact-task-tracker"]||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),a=n(8),s=n.n(a),o=(n(14),n(9)),i=n(5),d=n(2),l=(n(15),n(0)),u=function(e){var t=e.color,n=e.text,c=e.onClick;return Object(l.jsx)("div",{children:Object(l.jsx)("button",{onClick:c,style:{backgroundColor:t},className:"btn",children:n})})};u.defaultProps={color:"steelblue"};var j=u,b=function(e){var t=e.title,n=e.onAdd,c=e.showAdd;return Object(l.jsxs)("header",{className:"header",children:[Object(l.jsx)("h1",{children:t}),Object(l.jsx)(j,{color:c?"red":"green",text:c?"Close":"Add",onClick:n})]})};b.defaultProps={title:"CV-19 Task Tracker"};var h=b,O=n(7),x=function(e){var t=e.task,n=e.onDelete,c=e.onToggle;return Object(l.jsxs)("div",{className:"task ".concat(t.reminder?"reminder":""),onDoubleClick:function(){return c(t.id)},children:[Object(l.jsxs)("h3",{children:[t.text," ",Object(l.jsx)(O.a,{style:{color:"red",cursor:"pointer"},onClick:function(){return n(t.id)}})]}),Object(l.jsx)("p",{children:t.day})]})},m=function(e){var t=e.tasks,n=e.onDelete,c=e.onToggle;return Object(l.jsx)(l.Fragment,{children:t.map((function(e){return Object(l.jsx)(x,{task:e,onDelete:n,onToggle:c},e.id)}))})},f=function(e){var t=e.onAdd,n=Object(c.useState)(""),r=Object(d.a)(n,2),a=r[0],s=r[1],o=Object(c.useState)(""),i=Object(d.a)(o,2),u=i[0],j=i[1],b=Object(c.useState)(!1),h=Object(d.a)(b,2),O=h[0],x=h[1];return Object(l.jsxs)("form",{className:"add-form",onSubmit:function(e){e.preventDefault(),a?(t({text:a,day:u,reminder:O}),s(""),j(""),x(!1)):alert("Please add a task, human!")},children:[Object(l.jsxs)("div",{className:"form-control",children:[Object(l.jsx)("label",{children:"Task"}),Object(l.jsx)("input",{type:"text",placeholder:"Add Task",value:a,onChange:function(e){return s(e.target.value)}})]}),Object(l.jsxs)("div",{className:"form-control",children:[Object(l.jsx)("label",{children:"Day & Time"}),Object(l.jsx)("input",{type:"text",placeholder:"Add Day & Time",value:u,onChange:function(e){return j(e.target.value)}})]}),Object(l.jsxs)("div",{className:"form-control form-control-check",children:[Object(l.jsx)("label",{children:"Set Reminder"}),Object(l.jsx)("input",{type:"checkbox",checked:O,value:O,onChange:function(e){return x(e.currentTarget.checked)}})]}),Object(l.jsx)("input",{type:"submit",value:"Save Task",className:"btn btn-block"})]})};var k=function(){var e=Object(c.useState)(!1),t=Object(d.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)([{id:1,text:"Nationwide Public Mask Mandate",day:"August 16th at 2.30pm CT",reminder:!0},{id:2,text:"Nationwide School Mask Mandate",day:"August 16th at 2.30pm CT",reminder:!0},{id:3,text:"Nationwide Restaurant Mask Mandate",day:"August 16th at 2.30pm CT",reminder:!0}]),s=Object(d.a)(a,2),u=s[0],j=s[1];return Object(l.jsxs)("div",{className:"container",children:[Object(l.jsx)(h,{onAdd:function(){return r(!n)},showAdd:n}),n&&Object(l.jsx)(f,{onAdd:function(e){var t=Math.floor(1e4*Math.random())+1,n=Object(i.a)({id:t},e);j([].concat(Object(o.a)(u),[n]))}}),Object(l.jsxs)("h4",{children:["Emergency Response by ","Fauci"]}),Object(l.jsxs)("h4",{children:["Masking Order: ",2," Orders Active in the U.S."]}),Object(l.jsxs)("h4",{children:["Delta Variant Active?: ","Yes"]}),Object(l.jsx)("br",{}),u.length>0?Object(l.jsx)(m,{tasks:u,onDelete:function(e){j(u.filter((function(t){return t.id!==e})))},onToggle:function(e){j(u.map((function(t){return t.id===e?Object(i.a)(Object(i.a)({},t),{},{reminder:!t.reminder}):t})))}}):"All CV-19 Tasks Completed!"]})},g=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,19)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),c(e),r(e),a(e),s(e)}))};s.a.render(Object(l.jsx)(r.a.StrictMode,{children:Object(l.jsx)(k,{})}),document.getElementById("root")),g()}},[[17,1,2]]]);
//# sourceMappingURL=main.3071eae4.chunk.js.map
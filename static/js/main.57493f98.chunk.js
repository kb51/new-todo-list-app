(this["webpackJsonptodo-list-application-2"]=this["webpackJsonptodo-list-application-2"]||[]).push([[0],{10:function(e,t,a){e.exports=a(18)},15:function(e,t,a){},18:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),l=a(9),o=a.n(l),c=a(7),r=a(1),i=a(2),d=a(4),u=a(3),m=a(5),p=function(e){function t(){return Object(r.a)(this,t),Object(d.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement("h1",null,"Todo Application"))}}]),t}(n.Component),k=function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,s=new Array(n),l=0;l<n;l++)s[l]=arguments[l];return(a=Object(d.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(s)))).state={taskName:"",dueDate:"0000-00-00"},a.updateTaskName=function(e){a.setState({taskName:e.target.value})},a.updateDueDate=function(e){a.setState({dueDate:e.target.value})},a.handleAdd=function(e){a.props.addNewTask(a.state.taskName,a.state.dueDate)},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-sm-4"},s.a.createElement("input",{type:"text",onChange:this.updateTaskName,value:this.state.taskName,className:"form-control",placeholder:"Enter task"})),s.a.createElement("div",{className:"col-sm-4"},s.a.createElement("input",{type:"date",className:"form-control",onChange:this.updateDueDate,value:this.state.dueDate})),s.a.createElement("div",{className:"col-sm-4"},s.a.createElement("button",{onClick:this.handleAdd,className:"btn btn-primary"},"Add")))}}]),t}(n.Component),h=function(e){function t(){return Object(r.a)(this,t),Object(d.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement("h3",null,"Outstanding Tasks: ",s.a.createElement("span",null,this.props.count)))}}]),t}(n.Component),b=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(d.a)(this,Object(u.a)(t).call(this,e))).handleDelete=function(){a.props.deleteTask(a.props.id)},a.handleMarkComplete=function(){a.props.markComplete(a.props.id)},a.handleEditTask=function(){a.props.editTask(a.props.id)},a.state={taskName:e.taskName,dueDate:e.dueDate},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return console.log(this.props),s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-12 col-sm-3"},this.props.editModeOn?s.a.createElement("input",{type:"text",value:this.state.taskName,onChange:function(t){return e.setState({taskName:t.target.value})},className:"form-control"}):s.a.createElement("p",null,this.props.taskName)),s.a.createElement("div",{className:"col-12 col-sm-3"},this.props.editModeOn?s.a.createElement("input",{type:"date",value:this.state.dueDate,onChange:function(t){return e.setState({dueDate:t.target.value})},className:"form-control"}):s.a.createElement("p",null,this.props.dueDate)),s.a.createElement("div",{className:"col-12 col-sm-2"},this.props.editModeOn?s.a.createElement("button",{className:"btn btn-secondary",onClick:function(){return e.props.updateTask(e.props.id,e.state.taskName,e.state.dueDate)}},"Update"):s.a.createElement("button",{className:"btn btn-primary",onClick:this.handleEditTask},"Edit")),s.a.createElement("div",{className:"col-12 col-sm-2"},this.props.complete?s.a.createElement("button",{className:"btn btn-primary",disabled:!0},"Complete"):s.a.createElement("button",{className:"btn btn-primary",onClick:this.handleMarkComplete},"Mark Complete")),s.a.createElement("div",{className:"col-12 col-sm-2"},s.a.createElement("button",{className:"btn btn-danger",onClick:this.handleDelete},"Delete")))}}]),t}(n.Component),f=(a(15),a(6)),N=a.n(f),v=function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,s=new Array(n),l=0;l<n;l++)s[l]=arguments[l];return(a=Object(d.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(s)))).state={tasks:[{id:N()(),taskName:"Learn HTML",complete:!0,dueDate:"2019-11-28",editModeOn:!1},{id:N()(),taskName:"Learn CSS",complete:!0,dueDate:"2019-12-02",editModeOn:!1},{id:N()(),taskName:"Learn JavaScript",complete:!0,dueDate:"2019-11-11",editModeOn:!1},{id:N()(),taskName:"Learn React",complete:!1,dueDate:"2020-01-06",editModeOn:!1}]},a.addNewTask=function(e,t){var n={id:N()(),taskName:e,complete:!1,dueDate:t,editModeOn:!1},s=a.state.tasks.slice();s.push(n),a.setState({tasks:s})},a.deleteTask=function(e){var t=a.state.tasks.filter((function(t){return!(t.id===e)}));a.setState({tasks:t})},a.markComplete=function(e){var t=a.state.tasks.map((function(t){return t.id===e?Object(c.a)({},t,{complete:!0}):t}));a.setState({tasks:t})},a.editTask=function(e){var t=a.state.tasks.map((function(t){return t.id===e?Object(c.a)({},t,{editModeOn:!0}):t}));a.setState({tasks:t})},a.updateTask=function(e,t,n){console.log(t,n);var s=a.state.tasks.map((function(a){return a.id===e?Object(c.a)({},a,{taskName:t,dueDate:n,editModeOn:!1}):a}));a.setState({tasks:s})},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this,t=this.state.tasks.filter((function(e){return!1===e.complete})),a=this.state.tasks.filter((function(e){return!0===e.complete}));return s.a.createElement("div",{className:"container"},s.a.createElement(p,null),s.a.createElement(k,{addNewTask:this.addNewTask}),s.a.createElement(h,{count:t.length}),s.a.createElement("h2",null,"Todo:"),!t.length&&s.a.createElement("h1",null,"You have no outstanding tasks. Add one above!"),t.map((function(t){return s.a.createElement(b,{key:t.id,taskName:t.taskName,dueDate:t.dueDate,complete:t.complete,id:t.id,editModeOn:t.editModeOn,editTask:e.editTask,updateTask:e.updateTask,deleteTask:e.deleteTask,markComplete:e.markComplete})})),s.a.createElement("h2",null,"Done:"),!a.length&&s.a.createElement("h1",null,"You do not have any complete tasks. Get to work!"),a.map((function(t){return s.a.createElement(b,{key:t.id,taskName:t.taskName,dueDate:t.dueDate,complete:t.complete,id:t.id,editModeOn:t.editModeOn,editTask:e.editTask,updateTask:e.updateTask,deleteTask:e.deleteTask})})))}}]),t}(n.Component);o.a.render(s.a.createElement(v,null),document.getElementById("root"))}},[[10,1,2]]]);
//# sourceMappingURL=main.57493f98.chunk.js.map
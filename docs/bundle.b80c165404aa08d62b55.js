!function(t){function e(n){if(o[n])return o[n].exports;var r=o[n]={i:n,l:!1,exports:{}};return t[n].call(r.exports,r,r.exports,e),r.l=!0,r.exports}var o={};e.m=t,e.c=o,e.i=function(t){return t},e.d=function(t,o,n){e.o(t,o)||Object.defineProperty(t,o,{configurable:!1,enumerable:!0,get:n})},e.n=function(t){var o=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(o,"a",o),o},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=28)}([function(t,e,o){"use strict";function n(t){var e="template#"+t,o=document.querySelector(e);if(!o)throw new Error("Document missing required '"+e+"' element");return document.importNode(o.content,!0)}function r(t,e,o){i(t,e).forEach(function(t){t.innerHTML="",t.appendChild(o)})}function i(t,e){return c(t,"[data-estd-controller='"+e+"']")}function l(t,e,o){a(t,e).forEach(function(t){return t.textContent=o})}function a(t,e){return c(t,"[data-estd-content='"+e+"']")}function s(t,e,o){u(t,e).forEach(function(t){return t.setAttribute(e,o)})}function u(t,e){return c(t,"[data-estd-attr='"+e+"']")}function d(t,e){var o=t.querySelector(e);if(!o)throw new Error("'"+t+"' missing required '"+e+"' element");return o}function c(t,e){var o=t.querySelectorAll(e);if(!o.length)throw new Error("'"+t+"' missing required '"+e+"' element");return o}function f(t,e){var o=t.getAttribute(e);if(!o)throw new Error("'"+t+"' missing required '"+e+"' attribute");return o}Object.defineProperty(e,"__esModule",{value:!0}),e.templateClone=n,e.fillControllerElements=r,e.fillContentElements=l,e.setAttrElements=s,e.findElement=d,e.getRequiredAttribute=f},function(t,e,o){"use strict";function n(t,e){return l.domainEventsByAggregate(e).then(function(e){var o=new a.TodoList(e);s.fillControllerElements(document,"incompleteTodoListController",t.incompleteTodoListController(t,o.todos)),s.fillControllerElements(document,"completedTodoListController",t.completedTodoListController(t,o.completedTodos)),s.fillControllerElements(document,"eventListController",t.eventListController(t,e))})}function r(t,e){return l.domainEventsByAggregate(e).then(function(e){s.fillControllerElements(document,"bodyController",t.bodyController(t,e))})}function i(t){function e(){r.removeClass("has-error"),i.removeClass("btn-danger").addClass("btn-success"),r.off(l),n.off(l)}var o=t.currentTarget,n=$(o),r=n.closest("form"),i=n.next().children("button");r.addClass("has-error"),i.removeClass("btn-success").addClass("btn-danger");var l=".nameTodoInputValidation:"+u.v4();n.on("input"+l,function(t){o.validity.valid&&e()}),r.on("focusout"+l,function(t){t.currentTarget.contains(t.relatedTarget)||e()})}Object.defineProperty(e,"__esModule",{value:!0});var l=o(2),a=o(4),s=o(0),u=o(3);e.todoIdDataAttrName="data-estd-todo-id",e.eventIdDataAttrName="data-estd-event-id",e.refreshLists=n,e.refreshBody=r,e.invalidNameInputHandler=i},function(t,e,o){"use strict";function n(){return a.default.open(s,1,function(t){switch(t.oldVersion){case 0:t.createObjectStore(u,{autoIncrement:!0,keyPath:c}).createIndex(d,d)}}).catch(function(t){alert("Database error: "+t)})}function r(t){return n().then(function(e){var o=e.transaction(u).objectStore(u);return t?o.getAll(IDBKeyRange.upperBound(t)):o.getAll()}).catch(function(t){alert("Database error: "+t)})}function i(t,e){return n().then(function(o){var n=o.transaction(u).objectStore(u).index(d),r=n.getAll(t);return e?r.then(function(t){return t.filter(function(t){return t.id<=e})}):r}).catch(function(t){alert("Database error: "+t)})}function l(t){return n().then(function(e){var o=e.transaction(u,"readwrite"),n=o.objectStore(u);return t.forEach(function(t){return n.add(t)}),o.complete}).catch(function(t){alert("Database error: "+t)})}Object.defineProperty(e,"__esModule",{value:!0});var a=o(32);!function(t){t[t.TodoAdded=0]="TodoAdded",t[t.TodoRemoved=1]="TodoRemoved",t[t.TodoCompleted=2]="TodoCompleted",t[t.TodoUncompleted=3]="TodoUncompleted",t[t.TodoRenamed=4]="TodoRenamed",t[t.TodoPositionChanged=5]="TodoPositionChanged"}(e.DomainEventType||(e.DomainEventType={}));var s="estd-db",u="domain-event",d="aggregateId",c="id";e.allDomainEvents=r,e.domainEventsByAggregate=i,e.postDomainEvents=l},function(t,e,o){var n=o(33),r=o(34),i=r;i.v1=n,i.v4=r,t.exports=i},function(t,e,o){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function i(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var l=function(){function t(t,e){for(var o=0;o<e.length;o++){var n=e[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,o,n){return o&&t(e.prototype,o),n&&t(e,n),e}}(),a=function t(e,o,n){null===e&&(e=Function.prototype);var r=Object.getOwnPropertyDescriptor(e,o);if(void 0===r){var i=Object.getPrototypeOf(e);return null===i?void 0:t(i,o,n)}if("value"in r)return r.value;var l=r.get;if(void 0!==l)return l.call(n)};Object.defineProperty(e,"__esModule",{value:!0});var s=o(29),u=o(31),d=o(30),c=o(3),f=function(t){function e(){return n(this,e),r(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return i(e,t),l(e,[{key:"init",value:function(){a(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"init",this).call(this),this._todos=[]}},{key:"TodoAdded",value:function(t){this.id||(this._id=t.aggregateId),this._todos.push(new u.Todo(t.todoId,t.todoName))}},{key:"TodoRemoved",value:function(t){var e=this._todos.findIndex(function(e){return e.id===t.todoId});-1!==e&&this._todos.splice(e,1)}},{key:"TodoCompleted",value:function(t){var e=this._todos.findIndex(function(e){return e.id===t.todoId});if(-1!==e){var o=this._todos[e],n=new u.CompletedTodo(o.id,o.name,t.todoCompletionTimestamp);this._todos[e]=n}}},{key:"TodoUncompleted",value:function(t){var e=this._todos.findIndex(function(e){return e.id===t.todoId});if(-1!==e){var o=this._todos[e],n=new u.Todo(o.id,o.name);this._todos[e]=n}}},{key:"TodoRenamed",value:function(t){var e=this._todos.find(function(e){return e.id===t.todoId});e&&(e.name=t.todoName)}},{key:"TodoPositionChanged",value:function(t){function e(t,e,o){var n=t[e];t[e]=t[o],t[o]=n}var o=this,n=this._todos.reduce(function(t,e,o){return e.isCompleted||t.push(o),t},new Array),r=n.findIndex(function(e){return o._todos[e].id===t.todoId});if(-1!==r){var i=r+t.todoOffset;if(i<0?i=0:i>n.length-1&&(i=n.length-1),r!==i)if(i<r)for(var l=i;l<r;l++)e(this._todos,n[r],n[l]);else for(var a=i;a>r;a--)e(this._todos,n[r],n[a])}}},{key:"add",value:function(t,e){var o=this.id||c.v4();this.applyAndStage(new d.TodoAdded(o,t,e))}},{key:"remove",value:function(t){this.applyAndStage(new d.TodoRemoved(this.id,t))}},{key:"complete",value:function(t,e){this.applyAndStage(new d.TodoCompleted(this.id,t,e))}},{key:"uncomplete",value:function(t){this.applyAndStage(new d.TodoUncompleted(this.id,t))}},{key:"rename",value:function(t,e){this.applyAndStage(new d.TodoRenamed(this.id,t,e))}},{key:"changePosition",value:function(t,e){this.applyAndStage(new d.TodoPositionChanged(this.id,t,e))}},{key:"todos",get:function(){return this._todos.filter(function(t){return!t.isCompleted})}},{key:"completedTodos",get:function(){return this._todos.filter(function(t){return t.isCompleted}).sort(function(t,e){return e.completionTimestamp-t.completionTimestamp})}}]),e}(s.AggregateRoot);e.TodoList=f},function(t,e,o){"use strict";function n(t,e){var o=e.isCompleted?r.templateClone("historyCompletedTodoTemplate"):r.templateClone("historyTodoTemplate");return r.fillControllerElements(o,"historyTodoTitlePanelController",t.historyTodoTitlePanelController(t,e)),o}Object.defineProperty(e,"__esModule",{value:!0});var r=o(0);e.historyTodoController=n},function(t,e,o){"use strict";function n(){return i.allDomainEvents().then(function(t){var e=r(t);return e.length?i.domainEventsByAggregate(e[0]):[]})}function r(t){return t.reduce(function(t,e){return e.type===i.DomainEventType.TodoAdded&&-1===t.indexOf(e.aggregateId)&&t.push(e.aggregateId),t},[])}Object.defineProperty(e,"__esModule",{value:!0});var i=o(2);e.todoListEvents=n},function(t,e){function o(t,e){var o=e||0,r=n;return r[t[o++]]+r[t[o++]]+r[t[o++]]+r[t[o++]]+"-"+r[t[o++]]+r[t[o++]]+"-"+r[t[o++]]+r[t[o++]]+"-"+r[t[o++]]+r[t[o++]]+"-"+r[t[o++]]+r[t[o++]]+r[t[o++]]+r[t[o++]]+r[t[o++]]+r[t[o++]]}for(var n=[],r=0;r<256;++r)n[r]=(r+256).toString(16).substr(1);t.exports=o},function(t,e,o){(function(e){var o,n=e.crypto||e.msCrypto;if(n&&n.getRandomValues){var r=new Uint8Array(16);o=function(){return n.getRandomValues(r),r}}if(!o){var i=new Array(16);o=function(){for(var t,e=0;e<16;e++)0==(3&e)&&(t=4294967296*Math.random()),i[e]=t>>>((3&e)<<3)&255;return i}}t.exports=o}).call(e,o(35))},function(t,e,o){"use strict";function n(t,e){var o=r.templateClone("addTodoFormTemplate"),n=r.findElement(o,"#addTodoForm"),d=r.findElement(n,"#addTodoInput");return $(d).on("invalid",i.invalidNameInputHandler),$(n).submit(function(o){o.preventDefault(),(e?l.domainEventsByAggregate(e):a.todoListEvents()).then(function(t){var o=new u.TodoList(t);return o.add(s.v4(),d.value),n.reset(),e=o.id,l.postDomainEvents(o.uncommittedEvents)}).then(function(){return t.refreshLists(t,e)})}),o}Object.defineProperty(e,"__esModule",{value:!0});var r=o(0),i=o(1),l=o(2),a=o(6),s=o(3),u=o(4);e.addTodoFormController=n},function(t,e,o){"use strict";function n(t,e){var o=r.templateClone("bodyTemplate");return r.fillControllerElements(o,"todoListPanelController",t.todoListPanelController(t,e)),r.fillControllerElements(o,"eventListController",t.eventListController(t,e)),o}Object.defineProperty(e,"__esModule",{value:!0});var r=o(0);e.bodyController=n},function(t,e,o){"use strict";function n(t,e){if(!e.length)return new DocumentFragment;var o=r.templateClone("completedTodoListTemplate");return r.fillControllerElements(o,"todoListController",t.todoListController(t,e)),o}Object.defineProperty(e,"__esModule",{value:!0});var r=o(0);e.completedTodoListController=n},function(t,e,o){"use strict";function n(t,e){if(!e.length)return r.templateClone("emptyEventListTemplate");var o=e[0].aggregateId,n=r.templateClone("eventListTemplate"),s=Object.assign({},t);s.todoController=l.historyTodoController;var u=r.findElement(n,"#eventListDelegatedEventTarget");return $(u).on("click",".event-list-item",function(n){var l=".activeEventFocusOut:"+a.v4();$(document).on("click"+l+" keypress"+l,function(e){n.originalEvent===e.originalEvent||"keypress"===e.type&&13!==e.which||n.currentTarget.contains(e.target)||($(document).off(l),u.contains(e.target)||t.refreshBody(t,o))});var d=r.getRequiredAttribute(n.currentTarget,i.eventIdDataAttrName),c=e.slice(0,parseInt(d));r.fillControllerElements(document,"todoListPanelController",s.historyTodoListPanelController(s,c))}),r.fillControllerElements(n,"eventListGroupController",t.eventListGroupController(t,e)),n}Object.defineProperty(e,"__esModule",{value:!0});var r=o(0),i=o(1),l=o(5),a=o(3);e.eventListController=n},function(t,e,o){"use strict";function n(t,e){if(e.length){var o=new DocumentFragment;return e.forEach(function(e){var n=r.templateClone("eventListItemTemplate");r.setAttrElements(n,i.eventIdDataAttrName,e.id.toString()),r.fillControllerElements(n,"eventTextController",t.eventTextController(t,e)),o.appendChild(n)}),o}return r.templateClone("emptyEventListTemplate")}Object.defineProperty(e,"__esModule",{value:!0});var r=o(0),i=o(1);e.eventListGroupController=n},function(t,e,o){"use strict";function n(t,e){var o=new DocumentFragment;return o.textContent=e.id+" : "+r.DomainEventType[e.type],o}Object.defineProperty(e,"__esModule",{value:!0});var r=o(2);e.eventTextController=n},function(t,e,o){"use strict";function n(t,e){var o=r.templateClone("historyTodoListPanelTemplate"),n=new i.TodoList(e);return r.fillControllerElements(o,"incompleteTodoListController",t.incompleteTodoListController(t,n.todos)),r.fillControllerElements(o,"completedTodoListController",t.completedTodoListController(t,n.completedTodos)),o}Object.defineProperty(e,"__esModule",{value:!0});var r=o(0),i=o(4);e.historyTodoListPanelController=n},function(t,e,o){"use strict";function n(t,e){var o=r.templateClone("historyTodoTitlePanelTemplate");return r.fillControllerElements(o,"todoTitleController",t.todoTitleController(t,e)),o}Object.defineProperty(e,"__esModule",{value:!0});var r=o(0);e.historyTodoTitlePanelController=n},function(t,e,o){"use strict";function n(t,e){if(!e.length)return new DocumentFragment;var o=r.templateClone("incompleteTodoListTemplate");return r.fillControllerElements(o,"todoListController",t.todoListController(t,e)),o}Object.defineProperty(e,"__esModule",{value:!0});var r=o(0);e.incompleteTodoListController=n},function(t,e,o){"use strict";function n(t,e){var o=r.templateClone("todoDeleteBtnTemplate");return e.isCompleted||(o.appendChild(r.templateClone("todoMoveUpBtnTemplate")),o.appendChild(r.templateClone("todoMoveDownBtnTemplate"))),o.appendChild(r.templateClone("todoRenameBtnTemplate")),r.setAttrElements(o,i.todoIdDataAttrName,e.id),o}Object.defineProperty(e,"__esModule",{value:!0});var r=o(0),i=o(1);e.todoActionsPanelButtonsController=n},function(t,e,o){"use strict";function n(t,e){var o=r.templateClone("todoActionsPanelTemplate");return r.fillControllerElements(o,"todoTitleController",t.todoTitleController(t,e)),r.fillControllerElements(o,"todoActionsPanelButtonsController",t.todoActionsPanelButtonsController(t,e)),o}Object.defineProperty(e,"__esModule",{value:!0});var r=o(0);e.todoActionsPanelController=n},function(t,e,o){"use strict";function n(t,e){var o=e.isCompleted?r.templateClone("completedTodoTemplate"):r.templateClone("todoTemplate");return r.setAttrElements(o,i.todoIdDataAttrName,e.id),r.fillControllerElements(o,"todoTitlePanelController",t.todoTitlePanelController(t,e)),r.fillControllerElements(o,"todoActionsPanelController",t.todoActionsPanelController(t,e)),r.fillControllerElements(o,"todoRenamePanelController",t.todoRenamePanelController(t,e)),o}Object.defineProperty(e,"__esModule",{value:!0});var r=o(0),i=o(1);e.todoController=n},function(t,e,o){"use strict";function n(t,e){var o=r.templateClone("todoListTemplate");return r.fillControllerElements(o,"todoListGroupController",t.todoListGroupController(t,e)),o}Object.defineProperty(e,"__esModule",{value:!0});var r=o(0);e.todoListController=n},function(t,e,o){"use strict";function n(t,e){var o=new DocumentFragment,n=!0,r=!1,i=void 0;try{for(var l,a=e[Symbol.iterator]();!(n=(l=a.next()).done);n=!0){var s=l.value;o.appendChild(t.todoController(t,s))}}catch(t){r=!0,i=t}finally{try{!n&&a.return&&a.return()}finally{if(r)throw i}}return o}Object.defineProperty(e,"__esModule",{value:!0}),e.todoListGroupController=n},function(t,e,o){"use strict";function n(t,e){function o(e,o){if("keypress"!==e.type||13===e.which){var n=$(e.currentTarget).find(".todoActionsBtn")[0];n===e.target||$.contains(n,e.target)||r.domainEventsByAggregate(d).then(function(t){var n=new l.TodoList(t),s=i.getRequiredAttribute(e.currentTarget,a.todoIdDataAttrName);return o?n.complete(s,Date.now()):n.uncomplete(s),r.postDomainEvents(n.uncommittedEvents)}).then(function(){return t.refreshLists(t,d)})}}var n=i.templateClone("todoListPanelTemplate"),u=new l.TodoList(e),d=u.id,c=$(i.findElement(n,"#todolistDelegatedEventTarget"));return c.on("submit",".renameTodoForm",function(e){e.preventDefault(),r.domainEventsByAggregate(d).then(function(t){var o=new l.TodoList(t),n=$(e.currentTarget).find("input[name='name']").val(),s=i.getRequiredAttribute(e.currentTarget,a.todoIdDataAttrName);return o.rename(s,n),r.postDomainEvents(o.uncommittedEvents)}).then(function(){return t.refreshLists(t,d)})}),c.on("click keypress",".completeTodoBtn",function(t){o(t,!0)}),c.on("click keypress",".uncompleteTodoBtn",function(t){o(t,!1)}),c.on("click",".moveTodoUpBtn",function(e){r.domainEventsByAggregate(d).then(function(t){var o=new l.TodoList(t),n=i.getRequiredAttribute(e.currentTarget,a.todoIdDataAttrName);return o.changePosition(n,-1),r.postDomainEvents(o.uncommittedEvents)}).then(function(){return t.refreshLists(t,d)})}),c.on("click",".moveTodoDownBtn",function(e){r.domainEventsByAggregate(d).then(function(t){var o=new l.TodoList(t),n=i.getRequiredAttribute(e.currentTarget,a.todoIdDataAttrName);return o.changePosition(n,1),r.postDomainEvents(o.uncommittedEvents)}).then(function(){return t.refreshLists(t,d)})}),c.on("click",".deleteTodoBtn",function(e){r.domainEventsByAggregate(d).then(function(t){var o=new l.TodoList(t),n=i.getRequiredAttribute(e.currentTarget,a.todoIdDataAttrName);return o.remove(n),r.postDomainEvents(o.uncommittedEvents)}).then(function(){return t.refreshLists(t,d)})}),c.on("click",".todoActionsBtn",function(t){var e=$(t.currentTarget).closest(".todoPanelDefault"),o=e.next(),n=e.add(o),r=o.find(".todoActionsPanelBtnGroup")[0],i="click.todoActionsPanelClose:"+s.v4();n.toggle(),$(document).on(i,function(e){t.originalEvent!==e.originalEvent&&($.contains(r,e.target)||n.toggle(),$(document).off(i))})}),c.on("click",".renameTodoBtn",function(t){var e=$(t.currentTarget).closest(".todoActionsPanel"),o=e.next();e.add(o).toggle(),o.find(".renameTodoBtnClickFocusTarget").first().focus()}),c.on("blur",".renameTodoForm",function(t){if(!t.relatedTarget||!$.contains(t.currentTarget,t.relatedTarget)){var e=$(t.currentTarget).closest(".todoRenamePanel");e.prev().prev().add(e).toggle()}}),i.fillControllerElements(n,"addTodoFormController",t.addTodoFormController(t,d)),i.fillControllerElements(n,"incompleteTodoListController",t.incompleteTodoListController(t,u.todos)),i.fillControllerElements(n,"completedTodoListController",t.completedTodoListController(t,u.completedTodos)),n}Object.defineProperty(e,"__esModule",{value:!0});var r=o(2),i=o(0),l=o(4),a=o(1),s=o(3);e.todoListPanelController=n},function(t,e,o){"use strict";function n(t,e){var o=r.templateClone("todoRenamePanelTemplate"),n=r.findElement(o,"input[name='name']"),l=n.getAttribute("id"),a=l+"-"+e.id,s=r.findElement(o,"label[for='"+l+"']");return n.setAttribute("id",a),n.setAttribute("value",e.name),s.setAttribute("for",a),r.setAttrElements(o,i.todoIdDataAttrName,e.id),$(n).on("invalid",i.invalidNameInputHandler),o}Object.defineProperty(e,"__esModule",{value:!0});var r=o(0),i=o(1);e.todoRenamePanelController=n},function(t,e,o){"use strict";function n(t,e){var o=new DocumentFragment;if(o.textContent=e.name,e.isCompleted){var n=r.templateClone("todoCompletionDateTemplate"),i=new Date(e.completionTimestamp);r.fillContentElements(n,"completionDate",i.toLocaleDateString()),o.appendChild(n)}return o}Object.defineProperty(e,"__esModule",{value:!0});var r=o(0);e.todoTitleController=n},function(t,e,o){"use strict";function n(t,e){var o=r.templateClone("todoTitlePanelTemplate");return r.fillControllerElements(o,"todoTitleController",t.todoTitleController(t,e)),o}Object.defineProperty(e,"__esModule",{value:!0});var r=o(0);e.todoTitlePanelController=n},function(t,e){},function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),o(27);var n=o(0),r=o(6),i=o(10),l=o(17),a=o(11),s=o(21),u=o(22),d=o(20),c=o(26),f=o(25),p=o(19),m=o(18),v=o(24),h=o(12),y=o(13),C=o(14),T=o(9),g=o(23),b=o(15),_=o(5),E=o(16),P=o(1);window.indexedDB||window.alert("Your browser doesn't support IndexedDB (the browser feature this app uses to store your To-dos). Update your browser to its latest version.");var w={bodyController:i.bodyController,todoListPanelController:g.todoListPanelController,addTodoFormController:T.addTodoFormController,incompleteTodoListController:l.incompleteTodoListController,completedTodoListController:a.completedTodoListController,todoListController:s.todoListController,todoListGroupController:u.todoListGroupController,todoController:d.todoController,todoTitlePanelController:c.todoTitlePanelController,todoTitleController:f.todoTitleController,todoActionsPanelController:p.todoActionsPanelController,todoActionsPanelButtonsController:m.todoActionsPanelButtonsController,todoRenamePanelController:v.todoRenamePanelController,eventListController:h.eventListController,eventListGroupController:y.eventListGroupController,eventTextController:C.eventTextController,refreshLists:P.refreshLists,refreshBody:P.refreshBody,historyTodoListPanelController:b.historyTodoListPanelController,historyTodoController:_.historyTodoController,historyTodoTitlePanelController:E.historyTodoTitlePanelController};r.todoListEvents().then(function(t){n.fillControllerElements(document,"bodyController",w.bodyController(w,t))})},function(t,e,o){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var r=function(){function t(t,e){for(var o=0;o<e.length;o++){var n=e[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,o,n){return o&&t(e.prototype,o),n&&t(e,n),e}}();Object.defineProperty(e,"__esModule",{value:!0});var i=o(2),l=function(){function t(e){var o=this;n(this,t),this.init(),e.forEach(function(t){o[i.DomainEventType[t.type]](t)})}return r(t,[{key:"init",value:function(){this._uncommittedEvents=new Array}},{key:"uncommittedEvents",get:function(){return this._uncommittedEvents}},{key:"id",get:function(){return this._id}}]),r(t,[{key:"applyAndStage",value:function(t){this[i.DomainEventType[t.type]](t),this._uncommittedEvents.push(t)}}]),t}();e.AggregateRoot=l},function(t,e,o){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var r=o(2),i=function t(e,o,i){n(this,t),this.aggregateId=e,this.todoId=o,this.todoName=i,this.type=r.DomainEventType.TodoAdded};e.TodoAdded=i;var l=function t(e,o){n(this,t),this.aggregateId=e,this.todoId=o,this.type=r.DomainEventType.TodoRemoved};e.TodoRemoved=l;var a=function t(e,o,i){n(this,t),this.aggregateId=e,this.todoId=o,this.todoCompletionTimestamp=i,this.type=r.DomainEventType.TodoCompleted};e.TodoCompleted=a;var s=function t(e,o){n(this,t),this.aggregateId=e,this.todoId=o,this.type=r.DomainEventType.TodoUncompleted};e.TodoUncompleted=s;var u=function t(e,o,i){n(this,t),this.aggregateId=e,this.todoId=o,this.todoName=i,this.type=r.DomainEventType.TodoRenamed};e.TodoRenamed=u;var d=function t(e,o,i){n(this,t),this.aggregateId=e,this.todoId=o,this.todoOffset=i,this.type=r.DomainEventType.TodoPositionChanged};e.TodoPositionChanged=d},function(t,e,o){"use strict";function n(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function r(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var l=function t(e,o){i(this,t),this.id=e,this.name=o,this.isCompleted=!1};e.Todo=l;var a=function(t){function e(t,o,r){i(this,e);var l=n(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,o));return l.completionTimestamp=r,l.isCompleted=!0,l}return r(e,t),e}(l);e.CompletedTodo=a},function(t,e,o){"use strict";!function(){function e(t){return Array.prototype.slice.call(t)}function o(t){return new Promise(function(e,o){t.onsuccess=function(){e(t.result)},t.onerror=function(){o(t.error)}})}function n(t,e,n){var r,i=new Promise(function(i,l){r=t[e].apply(t,n),o(r).then(i,l)});return i.request=r,i}function r(t,e,o){var r=n(t,e,o);return r.then(function(t){if(t)return new d(t,r.request)})}function i(t,e,o){o.forEach(function(o){Object.defineProperty(t.prototype,o,{get:function(){return this[e][o]},set:function(t){this[e][o]=t}})})}function l(t,e,o,r){r.forEach(function(r){r in o.prototype&&(t.prototype[r]=function(){return n(this[e],r,arguments)})})}function a(t,e,o,n){n.forEach(function(n){n in o.prototype&&(t.prototype[n]=function(){return this[e][n].apply(this[e],arguments)})})}function s(t,e,o,n){n.forEach(function(n){n in o.prototype&&(t.prototype[n]=function(){return r(this[e],n,arguments)})})}function u(t){this._index=t}function d(t,e){this._cursor=t,this._request=e}function c(t){this._store=t}function f(t){this._tx=t,this.complete=new Promise(function(e,o){t.oncomplete=function(){e()},t.onerror=function(){o(t.error)},t.onabort=function(){o(t.error)}})}function p(t,e,o){this._db=t,this.oldVersion=e,this.transaction=new f(o)}function m(t){this._db=t}i(u,"_index",["name","keyPath","multiEntry","unique"]),l(u,"_index",IDBIndex,["get","getKey","getAll","getAllKeys","count"]),s(u,"_index",IDBIndex,["openCursor","openKeyCursor"]),i(d,"_cursor",["direction","key","primaryKey","value"]),l(d,"_cursor",IDBCursor,["update","delete"]),["advance","continue","continuePrimaryKey"].forEach(function(t){t in IDBCursor.prototype&&(d.prototype[t]=function(){var e=this,n=arguments;return Promise.resolve().then(function(){return e._cursor[t].apply(e._cursor,n),o(e._request).then(function(t){if(t)return new d(t,e._request)})})})}),c.prototype.createIndex=function(){return new u(this._store.createIndex.apply(this._store,arguments))},c.prototype.index=function(){return new u(this._store.index.apply(this._store,arguments))},i(c,"_store",["name","keyPath","indexNames","autoIncrement"]),l(c,"_store",IDBObjectStore,["put","add","delete","clear","get","getAll","getKey","getAllKeys","count"]),s(c,"_store",IDBObjectStore,["openCursor","openKeyCursor"]),a(c,"_store",IDBObjectStore,["deleteIndex"]),f.prototype.objectStore=function(){return new c(this._tx.objectStore.apply(this._tx,arguments))},i(f,"_tx",["objectStoreNames","mode"]),a(f,"_tx",IDBTransaction,["abort"]),p.prototype.createObjectStore=function(){return new c(this._db.createObjectStore.apply(this._db,arguments))},i(p,"_db",["name","version","objectStoreNames"]),a(p,"_db",IDBDatabase,["deleteObjectStore","close"]),m.prototype.transaction=function(){return new f(this._db.transaction.apply(this._db,arguments))},i(m,"_db",["name","version","objectStoreNames"]),a(m,"_db",IDBDatabase,["close"]),["openCursor","openKeyCursor"].forEach(function(t){[c,u].forEach(function(o){o.prototype[t.replace("open","iterate")]=function(){var o=e(arguments),n=o[o.length-1],r=this._store||this._index,i=r[t].apply(r,o.slice(0,-1));i.onsuccess=function(){n(i.result)}}})}),[u,c].forEach(function(t){t.prototype.getAll||(t.prototype.getAll=function(t,e){var o=this,n=[];return new Promise(function(r){o.iterateCursor(t,function(t){return t?(n.push(t.value),void 0!==e&&n.length==e?void r(n):void t.continue()):void r(n)})})})});var v={open:function(t,e,o){var r=n(indexedDB,"open",[t,e]),i=r.request;return i.onupgradeneeded=function(t){o&&o(new p(i.result,t.oldVersion,i.transaction))},r.then(function(t){return new m(t)})},delete:function(t){return n(indexedDB,"deleteDatabase",[t])}};t.exports=v,t.exports.default=t.exports}()},function(t,e,o){function n(t,e,o){var n=e&&o||0,r=e||[];t=t||{};var l=void 0!==t.clockseq?t.clockseq:s,c=void 0!==t.msecs?t.msecs:(new Date).getTime(),f=void 0!==t.nsecs?t.nsecs:d+1,p=c-u+(f-d)/1e4;if(p<0&&void 0===t.clockseq&&(l=l+1&16383),(p<0||c>u)&&void 0===t.nsecs&&(f=0),f>=1e4)throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");u=c,d=f,s=l,c+=122192928e5;var m=(1e4*(268435455&c)+f)%4294967296;r[n++]=m>>>24&255,r[n++]=m>>>16&255,r[n++]=m>>>8&255,r[n++]=255&m;var v=c/4294967296*1e4&268435455;r[n++]=v>>>8&255,r[n++]=255&v,r[n++]=v>>>24&15|16,r[n++]=v>>>16&255,r[n++]=l>>>8|128,r[n++]=255&l;for(var h=t.node||a,y=0;y<6;++y)r[n+y]=h[y];return e||i(r)}var r=o(8),i=o(7),l=r(),a=[1|l[0],l[1],l[2],l[3],l[4],l[5]],s=16383&(l[6]<<8|l[7]),u=0,d=0;t.exports=n},function(t,e,o){function n(t,e,o){var n=e&&o||0;"string"==typeof t&&(e="binary"==t?new Array(16):null,t=null),t=t||{};var l=t.random||(t.rng||r)();if(l[6]=15&l[6]|64,l[8]=63&l[8]|128,e)for(var a=0;a<16;++a)e[n+a]=l[a];return e||i(l)}var r=o(8),i=o(7);t.exports=n},function(t,e){var o;o=function(){return this}();try{o=o||Function("return this")()||(0,eval)("this")}catch(t){"object"==typeof window&&(o=window)}t.exports=o}]);
//# sourceMappingURL=bundle.b80c165404aa08d62b55.js.map
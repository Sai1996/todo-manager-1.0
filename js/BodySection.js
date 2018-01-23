function BodySection() {
  this.inputbox = new InputBox();
  this.todoItems = new TodoItem();
};
BodySection.prototype.render = function () {
return htmlToNode('\
<div class="outerBackground">\
  <div class="innerBackground">\
    <div class="forFirstBorder"></div>\
  <div>\
  <div class="todo-items"></div>\
</div>', [{
  selector: '.forFirstBorder',
  element: this.inputbox.render()
}, {
  selector: '.todo-items',
  element: this.todoItems.render()
}]);
};
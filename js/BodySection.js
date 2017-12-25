function BodySection() {
  this.inputbox = new InputBox();
  this.todoItem = new TodoItem();
};
BodySection.prototype.render = function () {
  var wrapper = document.createElement("div");
  wrapper.appendChild(document.createElement("div"));
  wrapper.appendChild(this.inputbox.render());
  wrapper.appendChild(this.todoItem.render());
};
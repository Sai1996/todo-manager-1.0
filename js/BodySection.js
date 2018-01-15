function BodySection() {
  this.inputbox = new InputBox();
  this.todoItems = new TodoItem();
};
BodySection.prototype.render = function () {
  var wrapper = document.createElement("div");
  wrapper.className = "outerBackground";
  wrapper.appendChild(document.createElement("div"));
  wrapper.children[0].className = "innerBackground";
  for(var i = 0; i < 2; i++){
    wrapper.children[0].appendChild(document.createElement("div"));
  }
  wrapper.children[0].children[0].appendChild(this.inputbox.render());
  wrapper.children[0].children[1].appendChild(this.todoItems.render());
  return wrapper;
};
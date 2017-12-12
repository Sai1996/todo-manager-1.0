function BodySection() {
  this.inputbox = new InputBox();
  this.todoItem = new TodoItem();
};
BodySection.prototype.render = function () {
  return "<div>\
   <div>" +
    this.inputbox.render() +
    "</div>\
    <div>" +
    this.todoItem.render() +
    "</div>\
   </div>";
};
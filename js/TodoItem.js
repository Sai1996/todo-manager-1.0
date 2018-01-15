function TodoItem(){
  this.textContent = "";
  this.isEditting = false;
  this.isCompleted = false;
  this.html = "";
}
TodoItem.prototype.render = function(){
  var wrapper = document.createElement("div");
  return wrapper;
};


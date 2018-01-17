function TodoItem(text,isEditting,isCompleted,isDelete){
  this.textContent = text;
  this.isEditting = isEditting;
  this.isCompleted = isCompleted;
  this.delete = isDelete;
}
TodoItem.prototype.render = function(){
  var wrapper = document.createElement("div");
  wrapper.appendChild(document.createElement("div"));
  wrapper.children[0].appendChild(document.createElement("div"));
  wrapper.children[0].children[0].className = "squaredFour";
  wrapper.children[0].children[0].appendChild(document.createElement("input"));
  wrapper.children[0].children[0].children[0].type = "checkbox";
  wrapper.children[0].children[0].children[0].value = "None";
  wrapper.children[0].children[0].children[0].id = "squaredFour";
  wrapper.children[0].children[0].children[0].name = "check";
  wrapper.children[0].children[0].appendChild(document.createElement("label"));
  wrapper.children[0].children[0].children[1].setAttribute('for', "squaredFour");
  return wrapper;
};


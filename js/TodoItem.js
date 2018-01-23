function TodoItem(text,isEditting,isCompleted,isDelete){
  this.textContent = text;
  this.isEditting = isEditting;
  this.isCompleted = isCompleted;
  this.delete = isDelete;
}
TodoItem.prototype.render = function(){
  return htmlToNode('\
  <div>\
  <div class="todoItemWrapper">\
    <div class="squaredFour">\
      <input type="checkbox" value="None" id="squaredFour" name="check">\
      <label for="squaredFour"></label>\
      </div>\
    <div class="forTodoItem">adhfjkdfksjadhuiopewiureiwopeirueuwoperithurjebdnmkloiuygfvbnkloiuyghbnmhgfdsadfghgfdsdfghjgfdsasdfghjhgfdsaadhfjkdfksjadhuiopewiureiwopeirueuwoperithurjebdnmkloiuygfvbnkloiuyghbnmhgfdsadfghgfdsdfghjgfdsasdfghjhgfdsa</div>\
    <div class="fa fa-pencil forEdit"></div>\
    <div class="fa fa-times forTimes"></div>\
  </div> \
  </div>');
};


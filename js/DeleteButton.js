function DeleteButton(){

}

DeleteButton.prototype.render = function(){
  return htmlToNode(
    '<div class="outer">\
    <div class="forTrashbinOuter">\
    <div class="fa fa-trash forTrashbinInner"></div>\
    <div class="forTextWithTrashbin">Delete Completed</div>\
  </div>\
  </div>'
  );
}
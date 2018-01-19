function htmlToNode(text){
  var div = document.createElement("div");
  div.innerHTML = text;
  return div.children[0];
}


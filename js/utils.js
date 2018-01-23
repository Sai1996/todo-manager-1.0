function htmlToNode(text, injections){
  var div = document.createElement("div");
  div.innerHTML = text;
  if(injections !== undefined){
    for(var i = 0; i < injections.length; i++){
      div.children[0].querySelector(injections[i].selector).appendChild(injections[i].element);
    }
  }
 
  return div.children[0];
}


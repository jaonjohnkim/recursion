// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  var nodesWithClassName = [];
  var nodes = document.childNodes;

  for (var i = 0; i < nodes.length; i++) {
      checkForClassName(nodes[i]);
  }
  return nodesWithClassName;

  function checkForClassName(node) {
    var classList = node.classList;
    if (classList !== undefined) {
      for (var i = 0; i < classList.length; i++) {
        if (classList[i] === className) {
          nodesWithClassName.push(node);
        }
      }
    }

    var childNodes = node.childNodes;
    if (childNodes !== undefined) {
      for (var j = 0; j < childNodes.length; j++) {
        checkForClassName(childNodes[j]);
      }
    }
  }
};

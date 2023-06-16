var middleNode = function (head) {
  let nodeArray = [];
  function recursiveWay(node) {
    if (!node) return nodeArray[Math.ceil((nodeArray.length - 1) / 2)];
    nodeArray.push(node);
    return recursiveWay(node.next);
  }
  return recursiveWay(head);
};

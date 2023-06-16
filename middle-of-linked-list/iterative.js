var middleNode = function (head) {
  let nodeArray = [];
  while (head) {
    nodeArray.push(head);
    head = head.next;
  }
  return nodeArray[Math.ceil((nodeArray.length - 1) / 2)];
};

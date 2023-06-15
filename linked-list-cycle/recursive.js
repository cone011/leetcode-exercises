var hasCycle = function (head) {
  let current = head;
  let existObject = {};
  function recursiveWay(node) {
    if (!node) return false;
    if (existObject[node.val]) return true;
    existObject[node.val] = true;
    return recursiveWay(node.next);
  }
  return recursiveWay(current);
};

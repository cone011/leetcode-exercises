var hasCycle = function (head) {
  let existObject = {};
  while (!head) {
    if (!existObject[head.val]) {
      existObject[head.val] = true;
    } else {
      return true;
    }
    head = head.next;
  }
  return false;
};

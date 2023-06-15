var binaryTreePaths = function (root) {
  const returnTree = [];
  function recursiveAway(node, arr) {
    if (!node) return;
    if (!node.left && !node.right) {
      returnTree.push([...arr, node.val]);
      return;
    }
    recursiveAway(node.left, [...arr, node.val]);
    recursiveAway(node.right, [...arr, node.val]);
  }
  recursiveAway(root, []);
  return returnTree.map((item) => item.join("->"));
};

class BinarySearchTree {
  constructor(key = null, value = null, parent = null) {
    this.key = key;
    this.value = value;
    this.parent = parent;
    this.left = null;
    this.right = null;
  }

  insert(key, value) {
    // if the tree is empty this will insert the root node of the tree
    if (this.key == null) {
      this.key = key;
      this.value = value;
    }
    // compare key you want to insert to the root key if a tree already exists
    else if (key < this.key) {
      // checking if left child is empty
      if (this.left == null) {
        //
        this.left = new BinarySearchTree(key, value, this);
      } //recursively call insert, if node has an existing left child, so the node is added further down the tree
      else {
        this.left.insert(key, value);
      }
    } else {
      if (this.right == null) {
        this.right = new BinarySearchTree(key, value, this);
      } else {
        this.right.insert(key, value);
      }
    }
  }

  find() {
    // your solution here
  }

  remove() {
    // your solution here
  }
}

module.exports = BinarySearchTree;

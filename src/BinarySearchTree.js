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

  find(key) {
    // your solution here
    if (this.key == key) {
      return this.value;
    }
    // it key is less than the root, follow the left child
    // if there is an existing left child, recursively check left and/or right until you find the item
    else if (key < this.key && this.left) {
      return this.left.find(key);
    }
    // if key is greater than the root, follow the right child
    else if (key > this.key && this.right) {
      return this.right.find(key);
    } // tree has been searched
    else {
      throw Error("Node(key) is not found in the BST");
    }
  }

  remove() {
    // your solution here
  }
}

module.exports = BinarySearchTree;

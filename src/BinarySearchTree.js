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

  remove(key) {
    // check if the root key matches key
    if (this.key == key) {
      // check if left and right exist
      if (this.left && this.right) {
        // _findMin() finds min value from the right subtree
        // when removing a node from the tree that has two children, replace the node with the smallest node from the right subtree
        const successor = this.right._findMin();
        this.key = successor.key;
        this.value = successor.value;
        successor.remove(successor.key);
      } //if node only has a left child, replace the node with its left child
      else if (this.left) {
        this._replaceWith(this.left);
      } //if node only has a right child, replace the node with its right child
      else if (this.right) {
        this._replaceWith(this.right);
        // if the node has no children remove all referrences to it
      } else {
        this._replaceWith(null);
      }
      // key is less than and left exists
    } else if (key < this.key && this.left) {
      this.left.remove(key);
      // key is more than and right exists
    } else if (key > this.key && this.right) {
      this.right.remove(key);
    } else {
      // if key/node not found throw an Error with a string
      throw Error("Node/key not found");
    }
  }

  _findMin() {
    if (!this.left) {
      return this;
    }
    return this.left._findMin();
  }

  // used to find the node you want to use to replace a ndoe that has children
  _replaceWith(node) {
    if (this.parent) {
      if (this == this.parent.left) {
        this.parent.left = node;
      } else if (this == this.parent.right) {
        this.parent.right = node;
      }
      if (node) {
        node.parent = this.parent;
      }
    } else {
      if (node) {
        this.key = node.key;
        this.value = node.value;
        this.left = node.left;
        this.right = node.right;
      } else {
        this.key = null;
        this.value = null;
        this.left = null;
        this.right = null;
      }
    }
  }
}

module.exports = BinarySearchTree;

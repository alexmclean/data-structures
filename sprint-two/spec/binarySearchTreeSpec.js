describe('binarySearchTree', function() {
  var binarySearchTree;

  beforeEach(function() {
    binarySearchTree = BinarySearchTree(5);
  });

  it('should have methods named "insert", "contains", and "depthFirstLog', function() {
    expect(binarySearchTree.insert).to.be.a("function");
    expect(binarySearchTree.contains).to.be.a("function");
    expect(binarySearchTree.depthFirstLog).to.be.a("function");
  });

  it('should insert values at the correct location in the tree', function(){
    binarySearchTree.insert(2);
    binarySearchTree.insert(3);
    binarySearchTree.insert(7);
    binarySearchTree.insert(6);
    expect(binarySearchTree.left.right.value).to.equal(3);
    expect(binarySearchTree.right.left.value).to.equal(6);
  });

  it('should have a working "contains" method', function(){
    binarySearchTree.insert(2);
    binarySearchTree.insert(3);
    binarySearchTree.insert(7);
    expect(binarySearchTree.contains(7)).to.equal(true);
    expect(binarySearchTree.contains(8)).to.equal(false);
  });

  it('should execute a callback on every value in a tree using "depthFirstLog"', function(){
    var array = [];
    var func = function(value){ array.push(value); };
    binarySearchTree.insert(2);
    binarySearchTree.insert(3);
    binarySearchTree.depthFirstLog(func);
    expect(array).to.eql([5,2,3]);
  });

  it('should complete a BFS log', function(){
    var arr = [];
    binarySearchTree.insert(1);
    binarySearchTree.insert(9);
    binarySearchTree.insert(3);
    binarySearchTree.insert(12);
    binarySearchTree.insert(7);
    binarySearchTree.breadthFirstLog(function(x){arr.push(x);});
    expect(arr).to.eql([5,1,9,3,7,12]);
  });

  it('should rebalance a basic tree', function(){
    var arr = [];
    binarySearchTree.insert(8);
    binarySearchTree.insert(12);
    binarySearchTree.rebalance(binarySearchTree);
    console.log(binarySearchTree);
    expect(arr).to.eql([5,1,9,3,7,12]);
  });
});

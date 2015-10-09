

// ------------------------
// Instantiate a new graph
var Graph = function() {
  this.nodes = {};
  //this.edges = {};
};

// ------------------------
// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.nodes[node] = {value : node, edges : []};
};

// ------------------------
// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  for(var each in this.nodes){
    if(this.nodes[each].value === node){
      return true;
    }
  }
  return false;
};

// ------------------------
// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  delete this.nodes[node];

};

// ------------------------
// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
    if(this.nodes[fromNode].edges.indexOf(toNode) > -1){
      return true;
    }
  return false;
};

// ------------------------
// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this.nodes[fromNode].edges.push(toNode);
  this.nodes[toNode].edges.push(fromNode);
};

// ------------------------
// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  if(this.hasEdge(fromNode, toNode)){
    this.nodes[fromNode].edges.splice((this.nodes[fromNode].edges.indexOf(toNode)), 1);
    this.nodes[toNode].edges.splice((this.nodes[toNode].edges.indexOf(fromNode)), 1);
  }
};

// ------------------------
// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for(var node in this.nodes){
    cb(this.nodes[node].value);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */



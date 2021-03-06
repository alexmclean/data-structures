var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var length = 0;

  // Implement the methods below
  someInstance.push = function(value) {
    storage[length] = value;
    length++;
  };

  someInstance.pop = function() {
    var result;
    if(length > 0){
      length--;
      result = storage[length];
      delete storage[length];
    }
    return result;
  };

  someInstance.size = function() {
    return length;
  };
  return someInstance;
};
var stack = new Stack();

stack.push('a');
        stack.push('b');
        console.log(stack.pop());




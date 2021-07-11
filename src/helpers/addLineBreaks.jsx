export const addLineBreaks = (str) => {
  function flatMap(array, fn) {
  let result = [];
  for (var i = 0; i < array.length; i++) {
    var mapping = fn(array[i]);
    result = result.concat(mapping);
  }
  return result;
  }
  
  const result = flatMap(str.split('\n'), function (part) {
      return [part, <br/>];
    });
  
  result.pop();
  return result
}
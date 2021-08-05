export const addLineBreaks = (str) => {
  const  flatMap = (array, fn) => {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    let mapping = fn(array[i]);
    result = result.concat(mapping);
  }
  return result;
  }

  const result = flatMap(str.split('\\n'), function (part) {
      return [part, <br/>];
    });
  
  result.pop();
  return result
}
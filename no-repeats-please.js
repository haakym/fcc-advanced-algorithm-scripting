const permutate = (inputArr) => {
  let result = [];

  const permute = (arr, m = []) => {
    if (arr.length === 0) {
      result.push(m);
    } else {
      for (let i = 0; i < arr.length; i++) {
        let curr = arr.slice();
        let next = curr.splice(i, 1);
        permute(curr.slice(), m.concat(next));
     }
   }
 };

 permute(inputArr);

 return result;
};

function permAlone(str) {
  let chars = str.split('');
  
  let allPerms = permutate(chars);
  
  allPerms = allPerms
      .map(arr => arr.join(''))
      .filter(str => /^(([a-z])(?!\2))+$/.exec(str));
  
  return allPerms.length;
}

permAlone('aab');

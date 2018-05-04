let copy = (obj, fn) => {
  let newObj = {};
  for(let attr in obj){
  let copy = fn;
    if(typeof obj[attr] == 'object' && obj[attr].length >= 0) newObj[attr] = copy(obj[attr], copy); 
    if(typeof obj[attr] == 'object' && !obj[attr].length) newObj[attr] = Object.assign(copy(obj[attr], copy)); 
    else newObj[attr] = obj[attr];
  }
  return newObj;
 };

 module.exports = copy;
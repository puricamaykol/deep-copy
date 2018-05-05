let copy = fn => obj => {
        let newObj = {};
        for(let attr in obj){
            let copy = fn;
            if(typeof obj[attr] == 'object' && obj[attr].length >= 0) newObj[attr] = copy(copy)(obj[attr]); 
            if(typeof obj[attr] == 'object' && !obj[attr].length) newObj[attr] = Object.assign(copy(copy)(obj[attr])); 
            else newObj[attr] = obj[attr];
        }
        return newObj;
    }, 
    run = copy(copy);

module.exports = run;
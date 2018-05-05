DeepCopy
--------

Deep Copy for nested objects and arrays in JavaScript.

Install
-------

```shell
npm install mpjsdeepcopy --save
```

How to use it
-------------

```javascript
const deepCopy = require('mpjsdeepcopy'),
    obj = {
        'name':'John',
        'age':30,
        'cars': {
            'car1':'Ford',
            'car2':'BMW',
            'car3':'Fiat',
        },
        'carsArr': [
            {'brand':'Ford'},
            {'brand':'BMW'},
            {'brand':'Fiat'},
        ],
    };
console.log(JSON.stringify(deepCopy(obj)));
```


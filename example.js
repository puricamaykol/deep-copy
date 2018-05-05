const deepCopy = require('./deepCopy'),
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
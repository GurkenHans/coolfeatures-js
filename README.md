# coolfeatures-js

Cool features missing in JavaScript

## Features

### `Coolfeatures.getRandomArrayValue()`

The `getRandomArrayValue()` method returns a random value from the given array.

```javascript
const array1 = [1, 2, 3, 4];

console.log(Coolfeatures.getRandomArrayValue(array1));
// expected output: 1, 2, 3, or 4
```

### `Coolfeatures.filterObject()`

The `Coolfeatures.filterObject()` method creates a new object with all elements that pass the test implemented by the provided function.

```javascript
const personAges = {
    hans: 45,
    peter: 33,
    jens: 68,
    mike: 21
};

console.log(Coolfeatures.filterObject(personAges, age => age < 40));
// expected output: {peter: 33, mike: 21}
```

### `Coolfeatures.getRandomIntBetween()`

The `getRandomIntBetween()` method returns a random number between two given numbers.

```javascript
console.log(Coolfeatures.getRandomIntBetween(5, 10));
// expected output: a number between 5 and 10
```
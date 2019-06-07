var Coolfeatures = {
    getRandomArrayValue: function(array) {
        array = array.filter((value, index) => index in array);

        return array[this.getRandomIntBetween(0, array.length - 1)];
    },
    filterObject: function(object, callback) {
        const newObject = {};

        for(let key in object) {
            if(callback(object[key], key, object)) {
                newObject[key] = object[key];
            }
        }

        return newObject;
    },
    isObjectEmpty: function(object) {
        return Object.keys(object).length === 0 && object.constructor === Object;
    },
    getRandomIntBetween: function(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    },
    htmlStringToElement: function(htmlString) {
        const template = document.createElement('template');

        template.innerHTML = htmlString.trim();

        return template.content.firstChild;
    }
}
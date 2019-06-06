var Coolfeatures = {
    getRandomArrayValue: function(array) {
        array = array.filter((value, index) => index in array);

        return array[this.getRandomIntBetween(0, array.length - 1)];
    },
    getRandomIntBetween: function(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
}
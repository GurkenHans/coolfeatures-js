function Coolfeatures() {
    return {
        getRandomArrayValue: function(array) {
            array = array.filter((value, index) => index in array);

            return array[this.getRandomIntBetween(0, array.length - 1)];
        },
        getRandomIntBetween: function(from, to) {
            return Math.floor(Math.random() * (to - from)) + from;
        }
    }
}
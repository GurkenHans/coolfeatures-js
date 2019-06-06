function Coolfeatures() {
    return {
        getRandomArrayValue(array) {
            array = array.filter((value, index) => index in array);

            return array[this.getRandomIntBetween(0, array.length - 1)];
        },
        getRandomIntBetween(from, to) {
            return Math.floor(Math.random() * (to - from)) + from;
        }
    }
}
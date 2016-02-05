 var binarySearch = function(arr, searchElement) {
    var min = 0;
    var max = arr.length - 1;
    var guess;

    while(min <= max) {
        guess = Math.floor((max + min) / 2);

        if (arr[guess] === searchElement) {
            return guess;
        }
        else if (arr[guess] < searchElement) {
            min = guess + 1;
        }
        else {
            max = guess - 1;
        }

    }

    return -1;
};

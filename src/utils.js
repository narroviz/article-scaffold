// device sniffing for mobile

export const isMobile = {
    android: () => navigator.userAgent.match(/Android/i),

    blackberry: () => navigator.userAgent.match(/BlackBerry/i),

    ios: () => navigator.userAgent.match(/iPhone|iPad|iPod/i),

    opera: () => navigator.userAgent.match(/Opera Mini/i),

    windows: () => navigator.userAgent.match(/IEMobile/i),

    any: () => (
        isMobile.android() ||
        isMobile.blackberry() ||
        isMobile.ios() ||
        isMobile.opera() ||
        isMobile.windows()
    )
}

export default isMobile


/**
 * Returns a random number between min (inclusive) and max (exclusive)
 */
export function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

// https://stackoverflow.com/questions/11935175/sampling-a-random-subset-from-an-array
export function getRandomSubarray(arr, size) {
    var shuffled = arr.slice(0), i = arr.length, temp, index;
    while (i--) {
        index = Math.floor((i + 1) * Math.random());
        temp = shuffled[index];
        shuffled[index] = shuffled[i];
        shuffled[i] = temp;
    }
    return shuffled.slice(0, size);
}

export function getIntervalArray(start, end, intervalLength) {
    const startInterval = Math.floor(start / intervalLength) * intervalLength
    const endInterval = Math.floor(end / intervalLength) * intervalLength
    const numIntervals = Math.ceil((endInterval - startInterval) / intervalLength)
    const intervals = [startInterval]
    for (var i = 0; i < numIntervals; i++) {
        const currentInterval = intervals[i] + intervalLength
        intervals.push(currentInterval)
    }
    return intervals
}

// https://stackoverflow.com/questions/1129216/sort-array-of-objects-by-string-property-value
export function dynamicSort(property) {
    var sortOrder = 1;
    if(property[0] === "-") {
        sortOrder = -1;
        property = property.substr(1);
    }
    return function (a,b) {
        /* next line works with strings and numbers, 
         * and you may want to customize it to your needs
         */
        var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
        return result * sortOrder;
    }
}

// https://stackoverflow.com/questions/2685911/is-there-a-way-to-round-numbers-into-a-reader-friendly-format-e-g-1-1k
export function abbrNum(number, decPlaces) {
    // 2 decimal places => 100, 3 => 1000, etc
    decPlaces = Math.pow(10,decPlaces);

    // Enumerate number abbreviations
    var abbrev = [ "k", "m", "b", "t" ];

    // Go through the array backwards, so we do the largest first
    for (var i=abbrev.length-1; i>=0; i--) {

        // Convert array index to "1000", "1000000", etc
        var size = Math.pow(10,(i+1)*3);

        // If the number is bigger or equal do the abbreviation
        if(size <= number) {
             // Here, we multiply by decPlaces, round, and then divide by decPlaces.
             // This gives us nice rounding to a particular decimal place.
             number = Math.round(number*decPlaces/size)/decPlaces;

             // Handle special case where we round up to the next abbreviation
             if((number == 1000) && (i < abbrev.length - 1)) {
                 number = 1;
                 i++;
             }

             // Add the letter for the abbreviation
             number += abbrev[i];

             // We are done... stop
             break;
        }
    }

    return number;
}

// https://stackoverflow.com/questions/2901102/how-to-print-a-number-with-commas-as-thousands-separators-in-javascript
export function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}


// https://stackoverflow.com/questions/44184794/what-is-the-javascript-equivalent-of-pythons-get-method-for-dictionaries
export function get(object, key, default_value) {
    var result = object[key];
    return (typeof result !== "undefined") ? result : default_value;
}

export function formatDecimalAsPercentage(decimal, numPlaces=0) {
    if (!decimal) {
        return ''
    } else if (decimal < .01) {
        return "<1%"
    } else {
        return parseFloat(decimal * 100).toFixed(numPlaces)+"%"
    }
}
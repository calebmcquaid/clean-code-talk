function rentalCarCost(d) {
    let c = 0;
    //number of days there are hurricanes

    switch (d) {
        case 0:
            var tC = d * 40;
            break;
        case 1:
            var tC = d * 40;
            break
        case 2:
            var tC = d * 40;
            break;
        case 3:
            var tC = d * 40 - 20;
            break;
    }

    if(7 <= d) {
        var tC = d * 40 - 50
    } else if (d >= 3 && 7 > d) {
        var tC = (d * 40) - 20
    } else {
        var tC = d *= 40
    }
    return tC
}

module.exports = {
    rentalCarCost
}
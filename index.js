function distanceFromHqInBlocks(pickup) {
    return Math.abs(42 - pickup);
}

function distanceFromHqInFeet(pickup) {
    return distanceFromHqInBlocks(pickup) * 264;
}

function distanceTravelledInFeet(pickup, dropoff) {
    return Math.abs(pickup - dropoff) * 264;
}

function calculatesFarePrice(pickup, dropoff) {
    const dist = distanceTravelledInFeet(pickup, dropoff);
    if (dist <= 400){
        return 0;
    }
    else if (dist > 400 && dist <= 2000) {
        return (dist - 400) * 0.02;
    }
    else if (dist > 2000 && dist <=2500) {
        return 25;
    }
    else return 'cannot travel that far';
}
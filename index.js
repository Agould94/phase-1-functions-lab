// Code your solution in this file!
function distanceFromHqInBlocks(block){
    if (block < 42){
        return 42 - block;
    }
    else if (block > 42){
        return block - 42;
    }
}

function distanceFromHqInFeet(block){
    return distanceFromHqInBlocks(block)*264
}

function distanceTravelledInBlocks(b1,b2){
    return Math.abs(b1-b2);
}

function distanceTravelledInFeet(b1, b2){
    return distanceTravelledInBlocks(b1, b2)*264;
}

function calculatesFarePrice(start, destination){
    if (distanceTravelledInFeet(start, destination) < 400){
        return 0;
    }
    else if (distanceTravelledInFeet(start, destination) > 400 && distanceTravelledInFeet(start, destination)< 2000){
        return (distanceTravelledInFeet(start, destination)-400) *.02;
    }
    else if (distanceTravelledInFeet(start, destination)>2000 && distanceTravelledInFeet(start,destination)<2500){
        return  25;
    }
    else {
        return "cannot travel that far";
    }
}
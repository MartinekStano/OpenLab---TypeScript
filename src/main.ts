function totalDistance(n1, n2, n3){
    return (n1/n2)*(n2+n3) 
}
const towerHeight = 100;
const heightOfStep = 0.2;
const lengthOfStep = 0.4;

console.log(totalDistance(towerHeight, heightOfStep, lengthOfStep));

function sliceOfPie(totalNumberOfSlices, numberOfRecipients, numberOfSlicesEachPersonGets){
    var helper = numberOfRecipients * numberOfSlicesEachPersonGets;

    if(helper <= totalNumberOfSlices)
        {
            return true;
        }else{
            return false;
        }
}
var totalNumberOfSlices = 11;
var numberOfRecipients = 5;
var numberOfSlicesEachPersonGets = 2;

var totalNumberOfSlices2 = 11;
var numberOfRecipients2 = 5;
var numberOfSlicesEachPersonGets2 = 3;

console.log(sliceOfPie(totalNumberOfSlices, numberOfRecipients, numberOfSlicesEachPersonGets));
console.log(sliceOfPie(totalNumberOfSlices2, numberOfRecipients2, numberOfSlicesEachPersonGets2));

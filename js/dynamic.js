let result = document.getElementById('result')
let hours = document.getElementById('hours')
let onee = document.getElementById('onee')
let onee1 = document.getElementById('onee1')
let twoo =document.getElementById('twoo')
let twoo1 =document.getElementById('twoo1')
let threee = document.getElementById('threee')
let threee1 = document.getElementById('threee1')
let fourr = document.getElementById('fourr')
let fourr1 = document.getElementById('fourr1')
let fivee = document.getElementById('fivee')
let fivee1 = document.getElementById('fivee1')
let sixx = document.getElementById('sixx')
let sixx1 = document.getElementById('sixx1')
let sivenn = document.getElementById('sivenn')
let sivenn1 = document.getElementById('sivenn1')
let eatee = document.getElementById('eatee')
let eatee1 = document.getElementById('eatee1')
let ninee = document.getElementById('ninee')
let ninee1 = document.getElementById('ninee1')
let tenn = document.getElementById('tenn')
let tenn1 = document.getElementById('tenn1')
// start total
// function getTotal() {
//     // Assuming hours is defined elsewhere
//     if (hours !== "") {
//         // Accessing DOM elements and converting their values to numbers
//         let final = (+onee.value * +onee1.value) +
//                     (+twoo.value * +twoo1.value) +
//                     (+three.value * +three1.value) +
//                     (+fourr.value * +fourr1.value) +
//                     (+fivee.value * +fivee1.value) +
//                     (+sixx.value * +sixx1.value) +
//                     (+sivenn.value * +sivenn1.value);

//         // Displaying the result in an element with the ID 'result'
//         result.innerHTML = final;
//     }
// }
 function getTotal(){
   if(hours.value != ""){
    let final = (+onee.value * +onee1.value)
    + (+twoo.value * +twoo1.value)
    + (+threee.value * +threee1.value)
    + (+fourr.value * +fourr1.value)
    + (+fivee.value * +fivee1.value)
    + (+sixx.value * +sixx1.value)
    + (+sivenn.value * +sivenn1.value)
    + (+eatee.value * +eatee1.value)
    + (+ninee.value * +ninee1.value)
    + (+eatee.value * +eatee1.value)
    result.innerHTML=final / +hours.value
    result.style.background="rgb(175, 114, 231)"
   }
   else{
    result.style.background="rgb(64, 21, 219)"
   }

}

//end total
// let plusBtn1 = document.getElementById("btnPlus1");
// let ans1 = document.getElementById("ans1");

// let plusBtn2 = document.getElementById("btnPlus2");
// let ans2 = document.getElementById("ans2");

// let plusBtn3 = document.getElementById("btnPlus3");
// let ans3 = document.getElementById("ans3");





// plusBtn1.addEventListener("click",function(){
//     ans1.classList.add("toggleAns");

// });

// plusBtn2.addEventListener("click",function(){
//     ans2.classList.add("toggleAns");
// });

// plusBtn3.addEventListener("click",function(){
//     ans3.classList.add("toggleAns");
// });

// // minus button

// let btnMinus1 = document.querySelector(".btnMinus1");
// let btnMinus2 = document.querySelector(".btnMinus2");
// let btnMinus3 = document.querySelector(".btnMinus3");



// btnMinus1.addEventListener("click",function(){
//     ans1.classList.remove("toggleAns");
// });

// btnMinus2.addEventListener("click",function(){
//     ans2.classList.remove("toggleAns");
// });

// btnMinus3.addEventListener("click",function(){
//     ans3.classList.remove("toggleAns");
// });

function daya(plusButtonId,minusButtonId , answer){
    document.getElementById(plusButtonId).hidden = true;
    document.getElementById(minusButtonId).hidden = false;
    document.getElementById(answer).style.display = "block"
    
    // setTimeout(()=>{
    //     pandit(minusButtonId,plusButtonId,answer);
    // },3000);
};
function pandit(minusButtonId , plusButtonId , answer){
    document.getElementById(plusButtonId).hidden = false;
    document.getElementById(minusButtonId).hidden = true;
    document.getElementById(answer).style.display = "none"
};


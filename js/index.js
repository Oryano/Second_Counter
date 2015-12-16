

var millisec = 0;
var seconds = 0;
var timer;
var counter;




function display(){
   if (millisec>=9){
     millisec=0
     seconds+=1
       $("#theCounter").toggleClass("backgroundRed");

  }
  else
     millisec+=1
     document.d.d2.value = seconds + "." + millisec;
     timer = setTimeout("display()",100);
     
  }

function starttimer() {
	//backgroundChange();
  if (timer > 0) {
	return;
  }
  display();	
}
function stoptimer() {
  clearTimeout(timer);
  timer = 0;
}

function startstoptimer() {
  if (timer > 0) {
     clearTimeout(timer);
     timer = 0;
  } else {
     display();
  }
}

function resettimer() {
	stoptimer();
	millisec = 0;
	seconds = 0;
}

// function backgroundChange() {
//   setInterval(function(){
//       $("#theCounter").toggleClass("backgroundRed");
//     },1000)
// }

// function backgroundChange() {
//     var theCounter = document.getElementById("theCounter").style.background;
//     document.getElementById("theCounter").style.background = theCounter === "white" ? "red" : "white";

// }

// function backgroundChange(){

//     document.getElementById('theCounter').setAttribute('background-color','red');
// }


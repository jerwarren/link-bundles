function openLinks(){
    links = document.querySelectorAll(".links a");
    for (i=0; i < links.length; i++){
        links[i].setAttribute("onclick","window.open('#','_blank');window.open(this.href,'_self');");
        //simulateClick(links[i]);
    }
}

function simulateClick(elem) {
	// Create our event (with options)
	var evt = new MouseEvent('click', {
		bubbles: true,
		cancelable: true,
		view: window
	});
	// If cancelled, don't dispatch our event
	var canceled = !elem.dispatchEvent(evt);
}

function detectPopupBlocker() {
  var myTest = window.open("about:blank","","directories=no,height=100,width=100,menubar=no,resizable=no,scrollbars=no,status=no,titlebar=no,top=0,location=no");
  var blocking;
    
  if (!myTest) {
    blocking = true;  
  } else {
    blocking = false;
    myTest.close();
  }
  return blocking;
}

document.addEventListener("DOMContentLoaded", function() {
    if (!detectPopupBlocker()){
        openLinks();
    } else {
        document.querySelector(".blocking").classList.add("show");
    }
});

function noIE() {
	/* NO Internet Explorer */

	const ver = navigator.userAgent;
	console.log(ver);

	const isIE = /trident/i.test(ver);
	console.log(isIE);

	if (isIE) {
		alert("이 웹 페이지는 익스플로러를 지원하지 않습니다. 다른 브라우저로 접속해주십시오.")
	}
}

function mobilePC() {
	// const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
	const isMobile = /Mobi/i.test(window.navigator.userAgent);

	if (isMobile) {
		
	}
	else {  // PC or Tablet etc.
		
	}
}

noIE();
// mobilePC();


/*
function gotoScroll(e, r) {
    var zoom = document.body.clientWidth / 1920;
    // console.log(e)
    // console.log(document.getElementById(e).offsetTop)
    $("html, body").animate({
        scrollTop: document.getElementById(e).offsetTop * zoom
    }, 1000)
    console.log(r)
}
*/
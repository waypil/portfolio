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



function toggleLanguageList() {
	$('#languageList')[0].classList.toggle('visible');
}

function selectLanguage(langCode) {
	if ($('html').attr('lang') !== langCode) {
		$.ajax({
			type: "GET",
			url: `/language?lang=${langCode}`,
			data: {},
			success: function (response) {
				let rows = response['all_rows'];

				for (let i = 0; i < rows.length; i++) {
					let tid = rows[i]['tid'];
					let text = rows[i][langCode];

					let htmlText = taggingSentences('p', text);
					overwriteNewLanguage(tid, htmlText);
				}

				toggleCurrentLanguage(langCode);
			}
		})
	}
	$('aside div#languageUI ul#languageList')[0].classList.remove('visible');
}

function taggingSentences(tag, text) {
	let openTag = `<${tag}>`;
	let closeTag = `</${tag}>`;
	let period = (text.includes('。') ? '。' : '. ');  // 마침표

	let newText = openTag;

	sentences = text.split(period);

	if (sentences[sentences.length - 1] === "") {
		sentences.pop();
	}

	if (sentences.length == 1) {
		return sentences[0];
	}

	for (let i = 0; i < sentences.length; i++) {
		if (i === sentences.length - 1) {  // 마지막 문장일 경우
			if (period === '。') {
				newText += `${sentences[i]}${period}${closeTag}`
			}
			else {
				newText += `${sentences[i]}${closeTag}`
			}
		}
		else {
			newText += `${sentences[i]}${period}${closeTag}${openTag}`
		}
	}

	return newText;
}

function overwriteNewLanguage(tid, text) {
	let codes = tid.split('_');
	let infoType = codes[0];
	let charName = codes[1];

	if (infoType == 'charName') {
		$(`#${charName}Info h1`)[0].innerText = text;
	}
	else if (infoType == 'charDescr') {
		$(`#${charName}Info .charDescr`).html(text);
	}
}

function toggleCurrentLanguage(langCode) {
	$('html').attr('lang', langCode);
	const langButtons = $('aside div#languageUI ul#languageList').children();

	for (let i = 0; i < langButtons.length; i++) {
		let langBtn = langButtons[i];

		if (langBtn.classList.contains(langCode)) {
			langBtn.classList.add('currentLanguage');
		}
		else {
			langBtn.classList.remove('currentLanguage');
		}
	}
}

/*
function radioCharInfoLanguage(langCode) {
	const charNames = $('#charName').children();

	for (let i = 0; i < charNames.length; i++) {
		let charName = charNames[i];

		if (charName.classList.contains(langCode)) {
			charName.classList.add('active');
		}
		else {
			charName.classList.remove('active');
		}
	}

	const charDescrs = $('#charDescr').children();

	for (let i = 0; i < charDescrs.length; i++) {
		let charDescr = charDescrs[i];
		
		if (charDescr.classList.contains(langCode)) {
			charDescr.classList.add('visible');
		}
		else {
			charDescr.classList.remove('visible');
		}
	}
}
*/


/*
const cursor = $('.cursor')[0];
		  
$('#gameScreen').mousedown((event) => {
	cursor.style.left = event.pageX + 'px';
	cursor.style.top = event.pageY + 'px';

	$(this).mousemove((event) => {
		cursor.style.left = event.pageX + 'px';
		cursor.style.top = event.pageY + 'px';
	});

	let screenRect = event.target.getBoundingClientRect();
	
	// console.log(screenRect.top, cursor.style.top, screenRect.left, cursor.style.left)
	// console.log(screenRect.top, event.clientY, screenRect.left, event.clientX)
	console.log(screenRect.left, screenRect.top, screenRect.right, screenRect.bottom)
	console.log(event.clientX, event.clientY)
	console.log("")

}).mouseup(() => {
	$(this).unbind('mousemove');
});
*/


/*
const circle = document.querySelector(".circle");

document.addEventListener("mousemove", (e) => { // mousemove이벤트를 이용해 움

	// 마우스의 좌표는 clientX와 clientY를 이용해 알수 있다. -> 브라우저 window의 좌표값 위치를 전달한다.

	// pageX, pageY와는 다름.

	const mouseX = e.clientX;

	const mouseY = e.clientY;

	circle.style.left = mouseX + 'px';

	circle.style.top = mouseY + 'px';

});
*/


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
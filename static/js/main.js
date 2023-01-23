/*
const boxEl = document.querySelector('.box');

boxEl.textContent = "마";

console.log(boxEl.innerHTML)  // 가나<span style="display:none">다라</span>
console.log(boxEl.innerText)  // 가나
console.log(boxEl.textContent)  // 가나다라
*/

/*
<div class="box">가나<span style='display:none'>다라</span></div>

const boxEl = document.querySelector('.box');

console.log(boxEl.innerHTML)  // 가나<span style="display:none">다라</span>
console.log(boxEl.innerText)  // 가나
console.log(boxEl.textContent)  // 가나다라

boxEl.innerHTML = "마"; || boxEl.innerText = "마"; || boxEl.textContent = "마";

console.log(boxEl.innerHTML)  // 마
console.log(boxEl.innerText)  // 마
console.log(boxEl.textContent)  // 마
*/


/*
const boxElements = document.querySelectorAll(".box");

console.log(boxElements.values);

boxElements.forEach(function (boxElement, index) {
    // console.log(`${boxElement.innerHTML} ${index}`);
    console.log(boxElement.innerHTML, index);
})
*/
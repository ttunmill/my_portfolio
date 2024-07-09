// 메인 첫화면 텍스트 애니메이션
const wave1 = document.querySelector(".wave1");
const wave2 = document.querySelector(".wave2");
wave1.innerHTML = wave1.textContent
.split("")
.map((letter, idx) => {
    if (letter === " ") return " ";
    return `<span style="animation-delay:${
      idx * 15
    }ms" class="letter">${letter}</span>`;
})
.join("");

wave2.innerHTML = wave2.textContent
.split("")
.map((letter, idx) => {
    if (letter === " ") return " ";
    return `<span style="animation-delay:${
      idx * 25
    }ms" class="letter">${letter}</span>`;
})
.join("");
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

// 스크롤 게이지 바
window.addEventListener('scroll', function() {
  // 게이지바 엘리먼트와 현재 스크롤 위치를 가져옴
  var gaugeBar = document.querySelector('.scroll_gauge');
  var scrollPosition = window.scrollY || window.pageYOffset;

  // 전체 페이지 높이와 브라우저 창 높이를 가져옴
  var pageHeight = document.documentElement.scrollHeight;
  var windowHeight = window.innerHeight;

  // 현재 스크롤 위치에서 게이지바가 차는 비율을 계산
  var fillRatio = scrollPosition / (pageHeight - windowHeight);
  
   // 계산된 비율로 게이지바 채우기
  gaugeBar.style.width = (fillRatio * 100) + '%';

});
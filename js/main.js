// SUB-MENU__SEARCH
const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');

searchEl.addEventListener('click', function () {  // .search = <input> 요소 + 돋보기 아이콘
  searchInputEl.focus();  // input 요소에 focus
});
// .search 요소를 클릭하면 input 요소에 focus

searchInputEl.addEventListener('focus', function () {
  searchEl.classList.add('focused'); // 클래스 내용 추가
  searchInputEl.setAttribute('placeholder', '통합검색'); // html 속성 지정 
});
/* input 요소가 focus되면 .search 클래스에 'focused' 추가
+ input 요소에 placeholder(힌트)로 통합검색 지정 */

searchInputEl.addEventListener('blur', function () {  // 포커스 해제
  searchEl.classList.remove('focused'); // 클래스 내용 제거
  searchInputEl.setAttribute('placeholder', ''); // html 속성 지정
});
/* input 요소가 blur되면 .search 클래스에 'focused' 제거
+ input 요소에 placeholder(힌트)로 ''(빈 문자) 지정 */



// BADGES
const badgeEl = document.querySelector('header .badges');
const toTopEl = document.querySelector('#to-top');

// window: 브라우저 창
window.addEventListener('scroll', _.throttle(function () {
  console.log(window.scrollY);
  if(window.scrollY > 500) {  // scrollY: 화면이 위에서부터 몇 px 지점에 위치해 있는지 파악 
    /* gsap: 애니메이션 효과.
    gsap.to(요소, 지속시간, 옵션); */
     gsap.to(badgeEl, .6, {
      opacity: 0,  // 시각적으로 배지 숨기기
      display: 'none'
     });
     gsap.to(toTopEl, .2, { // to-top 버튼 보이기
      x: 0 // 요소의 원래 위치로 이동
     });
  } else {
    gsap.to(badgeEl, .6, {
      opacity: 1,  // 시각적으로 배지 보이기
      display: 'block'
     });
     gsap.to(toTopEl, .2, { // to-top 버튼 숨기기
      x: 100 // x축으로 이동해 숨겨짐
     });
  }
}, 300));
/* js 라이브러리 lodash의 명령어 _.throttle() 사용.
._throttle(함수, 시간) : 함수 동작을 시간 단위로 부하 적용.
즉, function () 함수는 0.3초에 한 번씩만 실행되도록 함. */

toTopEl.addEventListener('click', function () {
  gsap.to(window, .7, {
    scrollTo: 0 // 화면의 위치를 0px로 옮김, 이를 사용하기 위해 ScrollToPlugin 추가적으로 가져와 연결함
  });
});



// VISUAL
const fadeEls = document.querySelectorAll('.visual .fade-in');

fadeEls.forEach(function (fadeEl, index) {
  gsap.to(fadeEl, 1, {
    delay: (index + 1) * .7,
    opacity: 1
/* fadeEl를 1초 동안 순차적으로 애니메이션 실핼할 것인데 실행 후 다음 fadeEl을 몇 초 뒤(delay)에 실행할 것인지 입력.
첫번째 fadeEl은 0.7s, 두번째 fadeEl은 1.4s, 세번째 fadeEl은 2.1s, 네번째 fadeEl은 2.7s에 실행. */
  });
});
// forEach(fuction (반복 중인 요소, 반복 중인 번호) {});



// SWIPER__NOTICE-LINE
// new Swiper(선택자, 옵션)
new Swiper('.notice-line .swiper', {
  direction: 'vertical',  // 수직 정렬
  autoplay: true, // 자동 재생 여부
  loop: true  // 반복 재생 여부
});
// SWIPER__PROMOTION
new Swiper('.promotion .swiper', {
  // direction: 'horiziontal' 수평 정렬 기본값
  slidesPerView: 3, // 한번에 보여줄 슬라이드 개수
  spaceBetween: 10, // 슬라이드 사이 여백
  centeredSlides: true, // 1번 슬라이드가 가운데 보이기
  loop: true,  // 반복 재생 여부
  autoplay: {
    delay: 5000 // 5초에 한번씩 자동 슬라이드
  },
  pagination: {
    el: '.promotion .swiper-pagination',  // 페이지 번호 요소 선택자
    clickable: true // 사용자의 페이지 번호 요소 제어 가능(클릭) 여부
  },
  navigation: {
    prevEl: '.promotion .swiper-prev', // 이전 슬라이드 보는 기능
    nextEl: '.promotion .swiper-next'  // 다음 슬라이드 보는 기능
  }
});
// SWIPER__AWARDS
new Swiper('.awards .swiper', {
  // direction: 'horiziontal' 수평 정렬 기본값
  slidesPerView: 5, // 한번에 보여줄 슬라이드 개수
  spaceBetween: 30, // 슬라이드 사이 여백
  loop: true,  // 반복 재생 여부
  autoplay: true,
  navigation: {
    prevEl: '.awards .swiper-prev', // 이전 슬라이드 보는 기능
    nextEl: '.awards .swiper-next'  // 다음 슬라이드 보는 기능
  }
});


// TOGGLE-PROMOTION
const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
let isHidePromotion = false;
/* promotion 영역이 숨겨져 있는가? false.
let이므로 false에서 true로 재할당 가능. */
promotionToggleBtn.addEventListener('click', function () {
  isHidePromotion = !isHidePromotion
  /* 토글 클릭 시, isHidePromotion의 값이 false이면 값을 true로 바꿈.
  즉, 숨겨져 있지 않은 promotion(false)을 토글 클릭 시 숨겨지는(true) 형태. */ 
  if(isHidePromotion) { // true
    promotionEl.classList.add('hide');  // 숨김 처리
  } else {  // false
    promotionEl.classList.remove('hide'); // 보임 처리
  }
});


// FLOATING
// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
  // `.toFixed()`를 통해 반환된 문자 데이터를 `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}
function floatingObject(selector, delay, size) { // 선택자, 지연시간, 움직이는 크기
  // 함수가 호출될 때, 인수로 어떤 요소를 선택할 것인지 selector(선택자)라는 매개변수 사용
  //gsap.to(요소, 지속시간, 옵션);
  gsap.to(selector, random(1.5, 2.5), 
    {
      y: size,  // y축으로 size만큼 이동
      repeat: -1, // 무한 반복
      yoyo: true, // 한번 재생된 애니메이션을 다시 뒤로 재생. 즉, 위 -> 아래 -> 위 -> 아래 반복
      ease: Power1.easeInOut, // 타이밍 함수(easing 함수) 표현 방식 중 하나 
      delay: random(0, delay)
    }
  );
}
floatingObject('.floating1', 1, 15);  // 매개변수 selector에 css 선택자인 .floating1 넣어 출력
floatingObject('.floating2', .5, 15);  // 매개변수 selector에 css 선택자인 .floating2 넣어 출력
floatingObject('.floating3', 1.2, 20);  // 매개변수 selector에 css 선택자인 .floating3 넣어 출력


// SCROLLMAGIC
const spyEls = document.querySelectorAll('section.scroll-spy');
spyEls.forEach(function (spyEl) {
  new ScrollMagic
    .Scene({
      // 특정 요소를 감시하는 옵션 지정해주는 메소드. 즉, 특정 section들이 화면에 보이는지, 보이지 않는지 감시.
      triggerElement: spyEl, // section.scroll-spy 중 하나인 spyEl(하나의 section) 보여짐 여부 감시
      triggerHook: .8  // 감시 중인 요소가 뷰포트 0.8 지점에 걸리면(hook) 실행
    })
    .setClassToggle(spyEl, 'show') // 클래스를 삽입/제거(toggle) 제어 역할
    // .setClassToggle(클래스를 토글할 요소, '토글할 클래스명')
    .addTo(new ScrollMagic.Controller()); // Controller 추가 위해 사용 (ScrollMagic 라이브러리 사용 시 필요)
});



// FOOTER
const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear();
/* 변수명.textContent = 'text 내용'을 사용해 값(글자 내용) 지정.
생성자 함수 Date()는 현재 날짜 정보를 의미.
.this-year 요소의 글자 내용(textContent)으로 현재 연도가 삽입됨. */
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



// FOOTER
const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear();
/* 변수명.textContent = 'text 내용'을 사용해 값(글자 내용) 지정.
생성자 함수 Date()는 현재 날짜 정보를 의미.
.this-year 요소의 글자 내용(textContent)으로 현재 연도가 삽입됨. */

// content.js

// 예시: container와 footer 숨기기
const container = document.getElementById('container');
const footer = document.getElementById('footer');
const topPayArea = document.getElementById('topPayArea');
const searchRightBanner = document.getElementById('search-right-banner');
const shortCutArea = document.getElementById('shortcutArea');

if (container) {
  container.style.display = 'none';
}

if (footer) {
  footer.style.display = 'none';
}

if (topPayArea) {
    topPayArea.style.display = 'none';
    }

if (searchRightBanner) {
    searchRightBanner.style.display = 'none';
}

// if (shortCutArea) {
//     shortCutArea.style.display = 'none';
// }

document.addEventListener('DOMContentLoaded', function() {
    // 1. header div에서 topSearchWrap을 none으로 바꿔줌
    var header = document.querySelector('header');
    var topSearchWrap = document.getElementById('topSearchWrap');
  
    if (header && topSearchWrap) {
      header.style.display = 'none';
    }
  
    // 2. div header 아래에 searchContainer div를 만들고, 그 안에 topSearchWrap을 그대로 복사
    var searchContainer = document.createElement('div');
    searchContainer.id = 'searchContainer';
  
    if (topSearchWrap) {
      var clonedTopSearchWrap = topSearchWrap.cloneNode(true);
      searchContainer.appendChild(clonedTopSearchWrap);
    }
  
    // 문서에 searchContainer를 추가
    document.body.appendChild(searchContainer);
  });
  
// targetHref = "https://comic.naver.com"
// const targetLi = document.querySelector(`li.shortcut_item a[href="${targetHref}"]`);

// if (targetLi) {
//   targetLi.closest('li.shortcut_item').style.display = 'none';
// }
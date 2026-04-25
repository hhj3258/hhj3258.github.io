'use strict';

// ===== FADE-IN ANIMATION =====
// 페이지 로드 시 모든 섹션 순차 fade-in
requestAnimationFrame(() => {
  requestAnimationFrame(() => {
    document.querySelectorAll('.fade-in').forEach((el, i) => {
      el.style.transitionDelay = i * 120 + 'ms';
      el.classList.add('visible');
    });
  });
});

// ===== PRINT FILENAME =====
// 인쇄 시 PDF 기본 파일명을 '이력서_홍현준'으로 설정
(() => {
  const originalTitle = document.title;
  const printTitle = '이력서_홍현준';
  window.addEventListener('beforeprint', () => { document.title = printTitle; });
  window.addEventListener('afterprint', () => { document.title = originalTitle; });
})();

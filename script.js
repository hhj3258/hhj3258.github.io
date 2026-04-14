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

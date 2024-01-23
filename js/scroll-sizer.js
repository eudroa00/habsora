document.addEventListener('DOMContentLoaded', () => {
  let content = document.getElementById('content');
  let contentRect = content.getBoundingClientRect();
  let contentSize = contentRect.height;

  let scrollBody = document.getElementById('scroll-body');
  scrollBody.style.maxHeight = contentSize - 40 + 'px';

  let container = document.getElementById('container');
  container.style.height = contentSize + 600 + 'px';
});

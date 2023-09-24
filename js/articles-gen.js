function createArticle(articleData, articlesContainer) {
  const article = document.createElement('article');
  article.className = 'textbox';
  const title = document.createElement('h3');
  const location = document.createElement('h4');
  const content = document.createElement('p');

  title.id = articleData.title
    .replace(/[^\w\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')
    .toLowerCase();
  title.textContent = articleData.title;
  location.textContent = articleData.location;
  content.innerHTML = articleData.content;

  article.appendChild(title);
  article.appendChild(location);
  article.appendChild(content);
  articlesContainer.appendChild(article);

  return title;
}

function createNavigationItem(articleData, navIndex, title) {
  const li = document.createElement('li');
  const anchor = document.createElement('a');
  anchor.href = '#' + title.id;
  anchor.className = 'menu-link';
  anchor.setAttribute('data-section', title.id);
  anchor.textContent = articleData.title;
  li.appendChild(anchor);
  navIndex.appendChild(li);
}

function setActiveLink() {
  let scrollY = window.scrollY;

  const menuLinks = document.querySelectorAll('.menu-link');

  menuLinks.forEach((link) => {
    let targetSection = document.querySelector(
      link.getAttribute('href')
    ).parentElement;
    if (targetSection) {
      let sectionTop = targetSection.offsetTop;
      let sectionHeight = targetSection.clientHeight;
      let sectionBottom = sectionTop + sectionHeight;

      if (scrollY >= sectionTop - 200 && scrollY <= sectionBottom) {
        menuLinks.forEach((link) => link.classList.remove('active'));
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    }
  });
}

// Yet to be developed: autoscroll of the index based on article being displayed
function scrollIndex() {
  const indexArea = document.getElementById('index');
}

document.addEventListener('DOMContentLoaded', function () {
  fetch('data.json')
    .then((response) => response.json())
    .then((data) => {
      const articlesContainer = document.getElementById('articles-container');
      const navIndex = document
        .getElementById('index')
        .getElementsByTagName('ul')[0];

      data.forEach((articleData) => {
        const title = createArticle(articleData, articlesContainer);
        createNavigationItem(articleData, navIndex, title);
      });
    });

  window.addEventListener('scroll', setActiveLink);
  window.addEventListener('scroll', scrollIndex);
  setActiveLink();
});

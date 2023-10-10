function createArticle(articleData, articlesContainer) {
  const article = document.createElement('article');
  article.className = 'textbox';
  const title = document.createElement('h3');
  const location = document.createElement('h4');
  const content = document.createElement('p');
  const button = document.createElement('button');
  button.textContent = 'Tabla';

  title.id = articleData.title
    .replace(/[^\w\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')
    .toLowerCase();
  title.textContent = articleData.title;
  location.textContent = articleData.location;
  content.innerHTML = articleData.content;

  const imgSource = `img/${title.id}.png`;
  button.addEventListener('click',()=>openModal(imgSource));

  article.appendChild(title);
  article.appendChild(button);
  article.appendChild(location);
  article.appendChild(content);
  articlesContainer.appendChild(article);

  return title;
}

var modal = document.getElementById("myModal");

function openModal(imageSource) {
  const modalImg = document.getElementById("img01");
  const captionText = document.getElementById("caption");

  modal.style.display = "block";
  modalImg.src = imageSource;
  captionText.innerHTML = '';
}

var span = document.getElementsByClassName("close")[0];

span.onclick = function() {
  modal.style.display = "none";
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

function autoScrollIndex() {
  const index = document.getElementById('index');
  const viewportHeight = window.innerHeight;

  let scrollYIndex = index.scrollTop; 
  const menuLinks = document.querySelectorAll('.menu-link');

  menuLinks.forEach((link) => {
    if (link.classList.contains('active')) {
      const linkRect = link.getBoundingClientRect();
      let distanceTop = linkRect.top;

      if (distanceTop >= 0.75 * viewportHeight) {
        index.scrollTop += 60;
      } else if (distanceTop <= 0.15 * viewportHeight && scrollYIndex > 0) {
        index.scrollTop -= 60;
      }
    }
  });
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
  window.addEventListener('scroll', autoScrollIndex);
  setActiveLink();
});

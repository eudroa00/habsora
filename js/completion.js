const matthewCompletion = document.getElementById('matthew');
const markCompletion = document.getElementById('mark');
const lukeCompletion = document.getElementById('luke');
const johnCompletion = document.getElementById('john');

const matPercentage = document.getElementById('matthew-t');
const marPercentage = document.getElementById('mark-t');
const lukPercentage = document.getElementById('luke-t');
const johPercentage = document.getElementById('john-t');

const matExplain = document.getElementById('explain-matthew');
const marExplain = document.getElementById('explain-mark');
const lukExplain = document.getElementById('explain-luke');
const johExplain = document.getElementById('explain-john');

function updateStatus(data) {

    matthewCompletion.style.width = data.completionMatthew;
    markCompletion.style.width = data.completionMark;
    lukeCompletion.style.width = data.completionLuke;
    johnCompletion.style.width = data.completionJohn;

    matPercentage.textContent = data.completionMatthew;
    marPercentage.textContent = data.completionMark;
    lukPercentage.textContent = data.completionLuke;
    johPercentage.textContent = data.completionJohn;

    matExplain.textContent = `Desde ${data.fromMatthew}`
    marExplain.textContent = `Desde ${data.fromMark}`
    lukExplain.textContent = `Desde ${data.fromLuke}`
    johExplain.textContent = `Desde ${data.fromJohn}`
}

document.addEventListener('DOMContentLoaded', () => {
  fetch('/json/completion.json')
    .then((res) => res.json())
    .then((data) => {
      updateStatus(data);
    });
});

const all = document.getElementsByClassName('completion');

function displayExplanation(i){
  return () => {
    let p = all[i].querySelector('.completion-explained');
    let distance = all[i].querySelector('.percentage').textContent;
    distance = parseInt(distance.slice(0, -1));
    console.log(distance);
    
    let width = window.innerWidth;
    p.style.left = width <= 769 ? 100 - distance - 30 + '%' : 100 - distance - 20 + '%';
    p.style.display = 'block';
  };
}
function hideExplanation(i){
  return ()=>{
    let p = all[i].querySelector('.completion-explained');
    p.style.display = 'none';
  }
}
for(let i=0; i<all.length;i++){
  all[i].addEventListener('mouseover', displayExplanation(i));
  all[i].addEventListener('touchstart', displayExplanation(i));
  all[i].addEventListener('mouseleave', hideExplanation(i));
  all[i].addEventListener('touchend', hideExplanation(i));
}

function updateStatus(data) {

    const matthewCompletion = document.getElementById('matthew');
    const markCompletion = document.getElementById('mark');
    const lukeCompletion = document.getElementById('luke');
    const johnCompletion = document.getElementById('john');

    const matPercentage = document.getElementById('matthew-t');
    const marPercentage = document.getElementById('mark-t');
    const lukPercentage = document.getElementById('luke-t');
    const johPercentage = document.getElementById('john-t');

    matthewCompletion.style.width = data.completionMatthew;
    markCompletion.style.width = data.completionMark;
    lukeCompletion.style.width = data.completionLuke;
    johnCompletion.style.width = data.completionJohn;

    matPercentage.textContent = data.completionMatthew;
    marPercentage.textContent = data.completionMark;
    lukPercentage.textContent = data.completionLuke;
    johPercentage.textContent = data.completionJohn;
}

document.addEventListener('DOMContentLoaded', () => {
  fetch('completion.json')
    .then((res) => res.json())
    .then((data) => {
      updateStatus(data);
    });
});

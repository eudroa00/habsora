document.addEventListener('DOMContentLoaded', function () {
  const sidebar = document.getElementById('index');
  //console.log(sidebar);
  const toggleButton = document.getElementById('toggleSidebarButton');
  const menuLinks = document.querySelectorAll('.menu-link'); // This line of code is not working ;(

  function closeSidebar() {
    sidebar.style.left = '-280px';
  }

  toggleButton.addEventListener('click', function () {
    if (sidebar.style.left === '0px' || sidebar.style.left === '') {
      closeSidebar();
      toggleButton.textContent = 'Índice';
    } else {
      sidebar.style.left = '0px';
      // Temporary fix to the bug in this code ;(
      toggleButton.textContent = 'Cerrar';
    }
  });

  // The previous bug prevents this functionality too ;(
  menuLinks.forEach(function (link) {
    link.addEventListener('click', closeSidebar);
  });
});

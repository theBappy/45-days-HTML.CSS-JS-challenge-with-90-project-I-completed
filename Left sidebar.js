const hamburger = document.getElementById('hamburger');
const lines = document.querySelectorAll('.line');
const lists = document.getElementById('lists');

hamburger.addEventListener('click', function () {
    lists.classList.toggle('active');
    hamburger.classList.toggle('active');
});
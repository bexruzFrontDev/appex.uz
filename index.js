let img = document.querySelectorAll('img');
let block = document.querySelector('.block');

img.forEach((el) => {
  el.onclick = () => {
    block.classList.toggle('active');
  };
});

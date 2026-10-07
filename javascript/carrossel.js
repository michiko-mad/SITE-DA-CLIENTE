let i = 0
setInterval(() => {
  i =(i + 1)%5
  document.getElementById("slides").style.transform = `translateX(-${i * 80}%)`;
}, 4000);

let index = 0;
function mover(dir) {
  const total = document.querySelectorAll('.slides img').length;
  index = (index + dir + total) % total;
  document.querySelector('.slides').style.transform = `translateX(-${index * 100}%)`;
}
// automático a cada 4 segundos
/*setInterval(() => mover(1), 4000);*/
 
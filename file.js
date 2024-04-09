const R = (min, max) => parseInt(Math.random() * (max - min) + min, 10);
const app = document.querySelector('.app');
const info = document.querySelector('code');
const total = 30;

document.body.style.backgroundColor = `hsl(${R(0,360)},${R(15,45)}%,${R(65,95)}%)`;
app.innerHTML = Array(total)
  .fill()
  .map(() => `
    <input type="checkbox" role="switch" style="--_bg:hsl(${R(0,360)},${R(35,95)}%,${R(35,65)}%);--_bg-c:hsl(${R(0,360)},${R(35,95)}%,${R(35,65)}%);--_fz:${R(1,10)}em;transform:rotate(${R(0,360)}deg);">
  `)
  .join('');

app.addEventListener('change', () => {
  const length = app.querySelectorAll('input:checked').length;
  info.textContent = length < total ? `${length} / ${total} checked` : 'All checked! You made it!';
});

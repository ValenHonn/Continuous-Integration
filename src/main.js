let clicks = 0;
const boton = document.getElementById('botonClick');
const contador = document.getElementById('contador');

boton.addEventListener('click', () => {
  clicks++;
  contador.textContent = 'Clicks: ' + clicks;
});

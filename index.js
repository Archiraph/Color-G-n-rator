function colorRandomizer() {
  let red = Math.floor(Math.random() * 256);
  let green = Math.floor(Math.random() * 256);
  let blue = Math.floor(Math.random() * 256);
  let contenu = document.getElementById("content");

  document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;

  contenu.innerHTML = `rgb(${red}, ${green}, ${blue})`;
}

setInterval(colorRandomizer, 1000);
colorRandomizer();

function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")
  
  const img = document.querySelector('#profile img')
  if (html.classList.contains('light')) {
    img.setAttribute('src', './assets/avatar-bg-light.png')
    img.setAttribute('alt', 'Foto de Gerson Silva, usando uma camisa social vinho, com gravata e um casaco preto, de óculos e cabelos escuros. ')
  } else{
    img.setAttribute('src', './assets/avatar-bg-dark.png')
    img.setAttribute('alt', 'Foto de Gerson Silva, usando uma camisa social vinho com cabelos escuros.')
  }
}

const latitude = -27.645;
const longitude = -48.667;
const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true&hourly=temperature_2m,relative_humidity_2m&timezone=auto`

fetch(url)
    .then(response => response.json())
    .then(data => {
      // coleta temperatura
      const temp = data.current_weather.temperature
      document.getElementById('texto').textContent = `Temperatura atual:`
      document.getElementById('temperatura').textContent = `${temp}°C`
      
      //muda a imagem do background com base na temperatura atual
      if (temp>=25) {
        document.getElementById('display_central').style.backgroundImage = "url('img/sol_escaldante.png')"// calor
      } else if (temp<=0) {
        document.getElementById('display_central').style.backgroundImage = "url('img/ceu_com_neve.png')"// frio
      } else {
        document.getElementById('display_central').style.backgroundImage = "url('img/ceu_com_nuvens.png')"// amena
      } 

      // coleta umidade
      const time = (data.current_weather.time).split(':')[0]
      const timeIndex = data.hourly.time.indexOf(`${time}:00`)
      const umidade = data.hourly.relative_humidity_2m[timeIndex]
      document.getElementById('umidade').textContent = `Umidade do ar em: ${umidade} %`
    })
    .catch(error => {
      console.error('Erro coletar dados',error)

      document.getElementById('temperatura').textContent = 'Não foi possível carregar os dados de temperatura.'
      document.getElementById('temperatura').style.fontSize = 'large'
      document.getElementById('umidade').textContent = `Erro ao coletar a umidade`
    })

setInterval(() => {
  window.location.reload()
},60*1000)
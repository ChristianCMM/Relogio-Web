const agora = new Date()

const horarioHoras = agora.getHours()
const horarioMinutos = agora.getMinutes()

document.getElementById('horas').textContent = horarioHoras
document.getElementById('minutos').textContent = horarioMinutos
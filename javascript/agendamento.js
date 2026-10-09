let selectedTime = '';
 
    function selectTime(btn, time) {
      document.querySelectorAll('.time-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      selectedTime = time;
    }
 
    function sendWhatsApp() {
      const service = document.getElementById('service').value;
      const date = document.getElementById('date').value;
      const name = document.getElementById('name').value;
      const clientPhone = document.getElementById('phoneInput').value;
      
      // Número do WhatsApp da profissional (substitua com o DDD correto)
      const studioPhone = "5511999999999";
 
      if (!service || !date || !selectedTime || !name || !clientPhone) {
        alert('Por favor, preencha todas as informações para continuar com o agendamento.');
        return;
      }
 
      const message = `Olá Nicolly! Meu nome é *${name}* (${clientPhone}).%0A%0AGostaria de agendar o seguinte serviço no *ZURI - Estúdio Travagli*:%0A- *Modelo:* ${service}%0A- *Data:* ${date}%0A- *Horário:* ${selectedTime}`;
      
      const url = `https://wa.me/${studioPhone}?text=${message}`;
      window.open(url, '_blank');
    }
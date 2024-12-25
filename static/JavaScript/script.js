function openModal() {
    document.getElementById("modal").style.display = "flex";
}

function closeModal() {
    document.getElementById("modal").style.display = "none";
}

function redirectToCall() {
    window.location.href = "tel:+123456789"; 
}

document.addEventListener("scroll", function () {
    const benefitsSection = document.querySelector('.benefits-container');
    const sectionPosition = benefitsSection.getBoundingClientRect().top;
  
    if (sectionPosition < window.innerHeight * 0.8) {
      benefitsSection.classList.add('animate');
    }
  });
  
document.getElementById('go-to-services').addEventListener('click', () => {
    document.getElementById('usl').scrollIntoView({ behavior: 'smooth' });
});

 // Открытие модального окна
 document.getElementById('open-contact-modal').addEventListener('click', function() {
    document.getElementById('contact-modal-overlay').style.display = 'flex';
});

// Закрытие модального окна
document.getElementById('close-contact-modal').addEventListener('click', function() {
    document.getElementById('contact-modal-overlay').style.display = 'none';
});

// Обработка отправки формы
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    // Здесь можно добавить логику для отправки данных (например, через AJAX)
    alert(`Заявка отправлена!\nEmail: ${email}\nТелефон: ${phone}`);
    document.getElementById('contact-modal-overlay').style.display = 'none'; // Закрываем окно
});
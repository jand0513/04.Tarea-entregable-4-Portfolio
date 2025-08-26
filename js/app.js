// === VALIDACIÓN DE FORMULARIO ===
class FormValidator {
  constructor(formSelector) {
    this.form = document.querySelector(formSelector);
    this.init();
  }
  
  init() {
    if (!this.form) return;
    
    this.form.addEventListener('submit', this.handleSubmit.bind(this));
    
    // Agregar validación en tiempo real
    const inputs = this.form.querySelectorAll('.form-input');
    inputs.forEach(input => {
      input.addEventListener('blur', () => this.validateField(input));
      input.addEventListener('input', () => this.clearError(input));
    });
  }
  
  handleSubmit(e) {
    e.preventDefault();
    
    const formData = new FormData(this.form);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      message: formData.get('message')
    };
    
    const isValid = this.validateForm(data);
    
    if (isValid) {
      this.showSuccess();
      this.form.reset();
    }
  }
  
  validateForm(data) {
    let isValid = true;
    
    // Validar nombre
    if (!this.validateName(data.name)) {
      this.showError('name', 'Lo siento, formato inválido aquí');
      isValid = false;
    }
    
    // Validar email
    if (!this.validateEmail(data.email)) {
      this.showError('email', 'Lo siento, formato inválido aquí');
      isValid = false;
    }
    
    // Validar mensaje
    if (!this.validateMessage(data.message)) {
      this.showError('message', 'Lo siento, formato inválido aquí');
      isValid = false;
    }
    
    return isValid;
  }
  
  validateField(input) {
    const { name, value } = input;
    let isValid = false;
    
    switch (name) {
      case 'name':
        isValid = this.validateName(value);
        break;
      case 'email':
        isValid = this.validateEmail(value);
        break;
      case 'message':
        isValid = this.validateMessage(value);
        break;
    }
    
    if (!isValid && value.trim() !== '') {
      this.showError(name, 'Lo siento, formato inválido aquí');
    } else {
      this.clearError(input);
    }
    
    return isValid;
  }
  
  validateName(name) {
    return name && name.trim().length >= 2;
  }
  
  validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return email && emailRegex.test(email.trim());
  }
  
  validateMessage(message) {
    return message && message.trim().length >= 10;
  }
  
  showError(fieldName, message) {
    const errorElement = document.querySelector(`#${fieldName}Error`);
    const inputElement = document.querySelector(`#${fieldName}`);
    
    if (errorElement && inputElement) {
      errorElement.textContent = message;
      errorElement.classList.add('visible');
      inputElement.classList.add('error');
    }
  }
  
  clearError(input) {
    const errorElement = document.querySelector(`#${input.name}Error`);
    
    if (errorElement) {
      errorElement.textContent = '';
      errorElement.classList.remove('visible');
      input.classList.remove('error');
    }
  }
  
  showSuccess() {
    // Aquí puedes implementar un mensaje de éxito
    alert('¡Mensaje enviado exitosamente!');
  }
}

// === DESPLAZAMIENTO SUAVE ===
function initSmoothScrolling() {
  const links = document.querySelectorAll('a[href^="#"]');
  
  links.forEach(link => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      
      if (href === '#') {
        e.preventDefault();
        return;
      }
      
      const target = document.querySelector(href);
      
      if (target) {
        e.preventDefault();
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
}

// === EFECTOS HOVER DE PROYECTOS ===
function initProjectHovers() {
  const projects = document.querySelectorAll('.project');
  
  projects.forEach(project => {
    const image = project.querySelector('.project__image');
    const overlay = project.querySelector('.project__overlay');
    
    if (image && overlay) {
      // Soporte para dispositivos táctiles
      image.addEventListener('touchstart', () => {
        overlay.style.opacity = '1';
      });
      
      document.addEventListener('touchstart', (e) => {
        if (!project.contains(e.target)) {
          overlay.style.opacity = '0';
        }
      });
    }
  });
}

// === MEJORAS DE ACCESIBILIDAD ===
function initAccessibility() {
  // Agregar navegación por teclado para overlays de proyectos
  const projects = document.querySelectorAll('.project');
  
  projects.forEach(project => {
    const image = project.querySelector('.project__image');
    const overlay = project.querySelector('.project__overlay');
    const buttons = overlay?.querySelectorAll('.btn--secondary');
    
    if (image && overlay && buttons.length > 0) {
      // Hacer la imagen enfocable
      image.setAttribute('tabindex', '0');
      image.setAttribute('role', 'button');
      image.setAttribute('aria-label', 'Ver detalles del proyecto');
      
      image.addEventListener('focus', () => {
        overlay.style.opacity = '1';
      });
      
      image.addEventListener('blur', (e) => {
        // No ocultar si el foco se movió a los botones del overlay
        setTimeout(() => {
          if (!overlay.contains(document.activeElement)) {
            overlay.style.opacity = '0';
          }
        }, 100);
      });
      
      // Manejar navegación por teclado
      image.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          buttons[0].focus();
        }
      });
    }
  });
}

// === INICIALIZACIÓN ===
document.addEventListener('DOMContentLoaded', () => {
  // Inicializar validación de formulario
  new FormValidator('#contactForm');
  
  // Inicializar desplazamiento suave
  initSmoothScrolling();
  
  // Inicializar efectos hover de proyectos
  initProjectHovers();
  
  // Inicializar características de accesibilidad
  initAccessibility();
  
  console.log('¡Portfolio inicializado exitosamente!');
});
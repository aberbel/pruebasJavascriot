/**
 * Crea un contador interactivo en el DOM
 */
export const createCounter = () => {
  const container = document.createElement('div');
  container.id = 'counter-container';
  
  const display = document.createElement('span');
  display.id = 'counter-display';
  display.textContent = '0';
  
  const incrementBtn = document.createElement('button');
  incrementBtn.id = 'increment-btn';
  incrementBtn.textContent = 'Incrementar';
  
  const decrementBtn = document.createElement('button');
  decrementBtn.id = 'decrement-btn';
  decrementBtn.textContent = 'Decrementar';
  
  const resetBtn = document.createElement('button');
  resetBtn.id = 'reset-btn';
  resetBtn.textContent = 'Reset';
  
  let count = 0;
  
  incrementBtn.addEventListener('click', () => {
    count++;
    display.textContent = count.toString();
  });
  
  decrementBtn.addEventListener('click', () => {
    count--;
    display.textContent = count.toString();
  });
  
  resetBtn.addEventListener('click', () => {
    count = 0;
    display.textContent = '0';
  });
  
  container.appendChild(display);
  container.appendChild(incrementBtn);
  container.appendChild(decrementBtn);
  container.appendChild(resetBtn);
  
  return container;
};

/**
 * Añade una clase a un elemento después de un delay
 */
export const addClassWithDelay = (element, className, delay = 100) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      element.classList.add(className);
      resolve();
    }, delay);
  });
};

/**
 * Obtiene el texto de un elemento por su ID
 */
export const getTextById = (id) => {
  const element = document.getElementById(id);
  return element ? element.textContent : null;
};

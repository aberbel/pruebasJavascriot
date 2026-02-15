import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { createCounter, addClassWithDelay, getTextById } from '../src/domExample.js';

describe('Counter Component con Happy DOM', () => {
  let counter;

  beforeEach(() => {
    // Limpiamos el DOM antes de cada test
    document.body.innerHTML = '';
    counter = createCounter();
    document.body.appendChild(counter);
  });

  afterEach(() => {
    // Limpieza después de cada test
    document.body.innerHTML = '';
  });

  it('debería renderizar el contador con valor inicial 0', () => {
    const display = document.getElementById('counter-display');
    expect(display).toBeTruthy();
    expect(display.textContent).toBe('0');
  });

  it('debería renderizar todos los botones', () => {
    const incrementBtn = document.getElementById('increment-btn');
    const decrementBtn = document.getElementById('decrement-btn');
    const resetBtn = document.getElementById('reset-btn');

    expect(incrementBtn).toBeTruthy();
    expect(decrementBtn).toBeTruthy();
    expect(resetBtn).toBeTruthy();
    expect(incrementBtn.textContent).toBe('Incrementar');
  });

  it('debería incrementar el contador al hacer clic', () => {
    const display = document.getElementById('counter-display');
    const incrementBtn = document.getElementById('increment-btn');

    incrementBtn.click();
    expect(display.textContent).toBe('1');

    incrementBtn.click();
    expect(display.textContent).toBe('2');
  });

  it('debería decrementar el contador al hacer clic', () => {
    const display = document.getElementById('counter-display');
    const decrementBtn = document.getElementById('decrement-btn');

    decrementBtn.click();
    expect(display.textContent).toBe('-1');

    decrementBtn.click();
    expect(display.textContent).toBe('-2');
  });

  it('debería resetear el contador a 0', () => {
    const display = document.getElementById('counter-display');
    const incrementBtn = document.getElementById('increment-btn');
    const resetBtn = document.getElementById('reset-btn');

    // Incrementamos varias veces
    incrementBtn.click();
    incrementBtn.click();
    incrementBtn.click();
    expect(display.textContent).toBe('3');

    // Reseteamos
    resetBtn.click();
    expect(display.textContent).toBe('0');
  });

  it('debería manejar múltiples operaciones', () => {
    const display = document.getElementById('counter-display');
    const incrementBtn = document.getElementById('increment-btn');
    const decrementBtn = document.getElementById('decrement-btn');

    incrementBtn.click(); // 1
    incrementBtn.click(); // 2
    decrementBtn.click(); // 1
    incrementBtn.click(); // 2

    expect(display.textContent).toBe('2');
  });
});

describe('DOM Utilities con Happy DOM', () => {
  beforeEach(() => {
    document.body.innerHTML = '';
  });

  it('debería añadir una clase a un elemento', async () => {
    const div = document.createElement('div');
    div.id = 'test-div';
    document.body.appendChild(div);

    await addClassWithDelay(div, 'active', 50);

    expect(div.classList.contains('active')).toBe(true);
  });

  it('debería obtener el texto de un elemento por ID', () => {
    const p = document.createElement('p');
    p.id = 'test-paragraph';
    p.textContent = 'Hola Mundo';
    document.body.appendChild(p);

    const text = getTextById('test-paragraph');
    expect(text).toBe('Hola Mundo');
  });

  it('debería devolver null si el elemento no existe', () => {
    const text = getTextById('elemento-inexistente');
    expect(text).toBeNull();
  });

  it('debería trabajar con querySelector', () => {
    document.body.innerHTML = `
      <div class="container">
        <h1>Título</h1>
        <p class="description">Descripción del test</p>
      </div>
    `;

    const title = document.querySelector('h1');
    const description = document.querySelector('.description');

    expect(title.textContent).toBe('Título');
    expect(description.textContent).toBe('Descripción del test');
  });

  it('debería manipular atributos del DOM', () => {
    const input = document.createElement('input');
    input.type = 'text';
    input.setAttribute('placeholder', 'Escribe algo...');
    document.body.appendChild(input);

    expect(input.getAttribute('placeholder')).toBe('Escribe algo...');
    expect(input.type).toBe('text');

    input.value = 'Nuevo valor';
    expect(input.value).toBe('Nuevo valor');
  });

  it('debería manejar eventos personalizados', () => {
    const button = document.createElement('button');
    let clickCount = 0;

    button.addEventListener('click', () => {
      clickCount++;
    });

    document.body.appendChild(button);

    button.click();
    button.click();
    button.click();

    expect(clickCount).toBe(3);
  });

  it('debería crear y modificar estilos CSS', () => {
    const div = document.createElement('div');
    div.style.color = 'red';
    div.style.fontSize = '16px';
    document.body.appendChild(div);

    expect(div.style.color).toBe('red');
    expect(div.style.fontSize).toBe('16px');
  });
});

describe('Happy DOM - Características avanzadas', () => {
  it('debería trabajar con localStorage', () => {
    localStorage.setItem('user', 'Juan');
    localStorage.setItem('token', 'abc123');

    expect(localStorage.getItem('user')).toBe('Juan');
    expect(localStorage.getItem('token')).toBe('abc123');

    localStorage.clear();
    expect(localStorage.getItem('user')).toBeNull();
  });

  it('debería trabajar con sessionStorage', () => {
    sessionStorage.setItem('sessionId', '12345');
    expect(sessionStorage.getItem('sessionId')).toBe('12345');

    sessionStorage.removeItem('sessionId');
    expect(sessionStorage.getItem('sessionId')).toBeNull();
  });

  it('debería simular el objeto window', () => {
    expect(window).toBeDefined();
    expect(window.document).toBe(document);
    expect(window.location).toBeDefined();
  });

  it('debería manejar timers con vi.useFakeTimers()', () => {
    vi.useFakeTimers();
    
    let executed = false;
    setTimeout(() => {
      executed = true;
    }, 1000);

    expect(executed).toBe(false);
    
    vi.advanceTimersByTime(1000);
    expect(executed).toBe(true);

    vi.useRealTimers();
  });
});

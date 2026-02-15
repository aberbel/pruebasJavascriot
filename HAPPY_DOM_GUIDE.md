# Tests con Vitest y Happy DOM

Este proyecto incluye ejemplos de tests usando **Vitest** y **Happy DOM** para simular el DOM del navegador.

## Instalación

Primero, instala Happy DOM:

```bash
npm install -D happy-dom
```

## Archivos Creados

### 1. `vitest.config.js`
Configuración de Vitest para usar Happy DOM como entorno de test.

### 2. `src/domExample.js`
Funciones de ejemplo que interactúan con el DOM:
- `createCounter()`: Crea un contador interactivo
- `addClassWithDelay()`: Añade clases con delay
- `getTextById()`: Obtiene texto de elementos

### 3. `test/domExample.test.js`
Suite completa de tests que demuestra:
- ✅ Manipulación del DOM
- ✅ Event listeners y clicks
- ✅ querySelector/getElementById
- ✅ LocalStorage y SessionStorage
- ✅ Timers con vi.useFakeTimers()
- ✅ Estilos CSS
- ✅ Atributos HTML

## Ejecutar los Tests

```bash
# Ejecutar todos los tests
npm test

# Ejecutar tests con coverage
npm run coverage

# Ejecutar solo los tests del DOM
npm test domExample
```

## Características de Happy DOM

**Happy DOM** es una implementación del DOM más rápida que jsdom:

- 🚀 Más rápido que jsdom
- 🎯 Mejor soporte de APIs modernas
- 💾 Soporte completo de localStorage/sessionStorage
- 🎨 Manipulación de estilos CSS
- ⚡ Bajo consumo de memoria

## Ejemplo de Test

```javascript
it('debería incrementar el contador al hacer clic', () => {
  const display = document.getElementById('counter-display');
  const incrementBtn = document.getElementById('increment-btn');

  incrementBtn.click();
  expect(display.textContent).toBe('1');

  incrementBtn.click();
  expect(display.textContent).toBe('2');
});
```

## Ventajas de usar Happy DOM

1. **Sin navegador real**: Los tests corren en Node.js
2. **Velocidad**: Mucho más rápido que Puppeteer o Playwright
3. **Simplicidad**: API del DOM estándar
4. **TDD friendly**: Perfecto para desarrollo guiado por tests

## Recursos

- [Vitest](https://vitest.dev/)
- [Happy DOM](https://github.com/capricorn86/happy-dom)

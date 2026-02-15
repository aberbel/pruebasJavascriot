import { describe, it, expect } from 'vitest';

/*
Escribe una función que al pasarle un número, devuelva:
- "fizz" si el número es múltiplo de 3
- "buzz" si el número es múltiplo de 5
- "fizzbuzz" si el número es múltiplo de 3 y de 5
- El número, en caso contrario
*/

const fizzbuzz = () => {
  if (typeof number !== 'number') throw new Error('El parametro debe ser un número');

};
describe('fizzbuzz', () => {
  it('debería ser una función', () => {
    expect(typeof fizzbuzz).toBe('function');
}),
it('debería throw si no tiene un número como parámetro', () => { 
  expect(()=>fizzbuzz()).toThrow();
}),
it('debería tener un mensaje de error específico si no tiene un número como parámetro', () => { 
  expect(()=>fizzbuzz()).toThrow(/número/);
})
});

import { describe, it, expect } from 'vitest';

/*
Escribe una función que al pasarle un número, devuelva:
- "fizz" si el número es múltiplo de 3
- "buzz" si el número es múltiplo de 5
- "fizzbuzz" si el número es múltiplo de 3 y de 5
- El número, en caso contrario
*/

const fizzbuzz = (number) => {
  if (typeof number !== 'number' || isNaN(number)) throw new Error('El parámetro debe ser un número');
  if (number % 3 === 0 && number % 5 === 0) return 'fizzbuzz';
  if (number % 3 === 0) return 'fizz';
  if (number % 5 === 0) return 'buzz';
  return number;
};
describe('fizzbuzz', () => {
  it('debería ser una función', () => {
    expect(typeof fizzbuzz).toBe('function');
  })
  it('debería throw si no tiene un número como parámetro', () => {
    expect(() => fizzbuzz()).toThrow();
  })
  it('debería tener un mensaje de error específico si no tiene un número como parámetro', () => {
    expect(() => fizzbuzz('prueba')).toThrow('El parámetro debe ser un número');
  })
  it('debería tener un mensaje de error específico si el parámetro es NaN', () => {
    expect(() => fizzbuzz(NaN)).toThrow('El parámetro debe ser un número');
  })
  it('debería devolver "fizz" si el número es múltiplo de 3', () => {
    expect(fizzbuzz(3)).toBe('fizz');
    expect(fizzbuzz(6)).toBe('fizz');
    expect(fizzbuzz(9)).toBe('fizz');
  })
  it('debería devolver "buzz" si el número es múltiplo de 5', () => {
    expect(fizzbuzz(5)).toBe('buzz');
    expect(fizzbuzz(10)).toBe('buzz');
    expect(fizzbuzz(20)).toBe('buzz');
  })
  it('debería devolver "fizzbuzz" si el número es múltiplo de 3 y 5', () => {
    expect(fizzbuzz(15)).toBe('fizzbuzz');
    expect(fizzbuzz(30)).toBe('fizzbuzz');
    expect(fizzbuzz(45)).toBe('fizzbuzz');
  })
  it('debería devolver el número si no es múltiplo de 3 ni de 5', () => {
    expect(fizzbuzz(1)).toBe(1);
    expect(fizzbuzz(2)).toBe(2);
    expect(fizzbuzz(4)).toBe(4);
  })
});

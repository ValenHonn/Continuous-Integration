import { incrementarClick } from "../../src/main.js";


test('Debería incrementar el numero de clicks', () => {
      
  expect(incrementarClick()).toBe(1);  
  expect(incrementarClick()).toBe(2); 
  expect(incrementarClick()).toBe(3);  

});

test('Debería lanzar un error si se pasa un parametro', () => {
  
  expect(incrementarClick(5)).toBe('incrementarClick no debe recibir parametros');

});
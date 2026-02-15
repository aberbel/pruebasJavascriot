# Prueba de Test con IA
## Hecho con Vitest
<pre>
npm install -D vitest
</pre>
<pre>
npm init -Y : Modifica el json
</pre>
<pre>
npm install standard -D: reglas de linter, malas prácticas
</pre>

To remove a folder and all files in the folder recursively:
<pre>
git rm -r --cached folder
</pre>
<pre>
{
  "scripts": {
    "test": "vitest"
  }
}
</pre>
- Crear carpeta test
- Crear primer test: fizzbuzz.test.js
<pre>
nmp run test
</pre>
<pre>
  expect(()=>fizzbuzz()).toThrow(/número/); Que contenga la palabra número
</pre>
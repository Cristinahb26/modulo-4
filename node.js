const fs = require('fs');
const readline = require('readline');

// RETO 1
console.log("Mensaje 1");

setTimeout(() => {
    console.log("Mensaje 2");
    console.log("Mensaje 3");
}, 3000);

// RETO 2
const persona = {
  name: 'Dariana',
  surname: 'Palencia',
  age: 40
};

const formaJSON = JSON.stringify(persona);

fs.writeFile('archivo.json', formaJSON, 'utf8', (error) => {
  if (error) {
    console.error('Error al guardar el archivo:', error);
    return;
  }
  
  console.log('La persona se ha guardado correctamente.');
});

fs.readFile('archivo.json', 'utf8', (error, data) => {
  if (error) {
    console.error('Error al leer el archivo:', error);
    return;
  }
 
  const personaDesdeArchivo = JSON.parse(data);
  console.log('Los datos de la persona son:', personaDesdeArchivo);
});



// RETO 3
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log("Ingrese el nombre:");

rl.question('', (name) => {
  console.log("Ingrese el apellido:");
  rl.question('', (surname) => {
    console.log("Ingrese la edad:");
    rl.question('', (age) => {
      const objeto = {
        name: name,
        surname: surname,
        age: parseInt(age),
      };

      const personGuardado = JSON.stringify(objeto);

      fs.writeFile('objeto.json', personGuardado, (err) => {
        if (err) {
          console.error('Error al guardar el archivo:', err);
        } else {
          console.log('El archivo se ha guardado correctamente.');
        }

        fs.readFile('objeto.json', 'utf8', (err, data) => {
          if (err) throw err;

          const objetoleido = JSON.parse(data);
          console.log(objetoleido);

          rl.close();
        });
      });
    });
  });
});


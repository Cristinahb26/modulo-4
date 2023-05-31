const { log } = require('console');
const fs = require('fs/promises');
const readline = require('readline');
const { json } = require('stream/consumers');

function question(prompt){
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

     return new Promise ((resolver) =>{
        rl.question(prompt, (answer) =>{
            rl.close();
            resolver(answer);
        });
     });
}

async function persona (){
    try{

        const name = await question ("Ingrese el nombre: ");
        const surname = await question (" Ingrese el apellido: ");
        const age =await question ("Ingrese la edad: ");

        const objeto = {

            name: name,
            surname: surname,
            age: parseInt(age),
        };

        const objetoJson = JSON.stringify(objeto);
        
       await fs.writeFile("informacion.json", objetoJson);
       console.log("Se ha guardado los datos correctamente.");

       const datos = await fs.readFile("informacion.json", "utf8");
       const datosLeidos = JSON.parse(datos);

       console.log(datosLeidos);

    } catch (err) {
        console.error("Ha ocurrido un error:", err);
    }
}

persona()
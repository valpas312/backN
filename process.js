// console.log(process.argv)

// function leeropcion(opcion){
//     const index = process.argv.indexOf(opcion)
//     console.log(index)
//     if(index === -1){
//         return false
//     }
//     return process.argv[index + 1]
// }

// const nombre = leeropcion('--nombre')
// console.log(`El nombre es: ${nombre}`)

process.stdout.write("Cual es tu nombre?");

process.stdin.on("data", function (data) {
  process.stdout.write(`Hola ${data.toString()}`);

  process.stdout.write("Cual es tu apellido?");

  process.stdin.on("data", function (data) {
    process.stdout.write(`Hola ${data.toString()}`);

    process.exit();
  });

});

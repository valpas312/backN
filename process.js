
function leeropcion(opcion){
    const index = process.argv.indexOf(opcion)
    console.log(index)
}

console.log(leeropcion('--base'))
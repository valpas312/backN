import { getFile, writeFile } from "./agregarGasto.js";
import { promptEjercicio } from "./promptEjercicio.js";

const run = async () => {
    const answers = await promptEjercicio();
    const file = await getFile("./gastos.json");
    const gasto = [...file, answers];
    await writeFile("./gastos.json", gasto);
};

run();
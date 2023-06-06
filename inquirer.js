import { getFile, writeFile } from './readWritePromises.js';
import { promtUser } from './promtUser.js';

promtUser()

const run = async () => {
    const answers = await promtUser();
    const file = await getFile("./users.json");
    const user = [...file, answers];
    await writeFile("./users.json", user);
};  

run();
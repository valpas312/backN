import { getFile, writeFile } from './readWritePromises.js';
import { promptUser } from './promptUser.js';

const run = async () => {
    const answers = await promptUser();
    const file = await getFile("./users.json");
    const user = [...file, answers];
    await writeFile("./users.json", user);
};  

run();
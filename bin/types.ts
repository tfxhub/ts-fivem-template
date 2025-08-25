import { exec as execCb } from 'child_process';
import { promisify } from 'util';

const exec = promisify(execCb);

await exec('cd src/server && tsc');
await exec('cd src/client && tsc');
await exec('cd src/common && tsc');

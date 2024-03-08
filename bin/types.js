import { exec } from 'child_process';

exec('cd src/server && tsc && cd ../client && tsc && cd ../common && tsc');

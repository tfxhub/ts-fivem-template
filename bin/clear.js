import { rmSync } from 'fs';

const temp = ['dist', 'types', 'fxmanifest.lua'];

for (let i = 0; i < temp.length; i++) {
	const dir = temp[i];
	rmSync(dir, { recursive: true, force: true });
}

console.log('All generated files cleared.');

import { exec as execCb } from 'child_process';
import esbuild, { type BuildOptions, type Plugin } from 'esbuild';
import { promisify } from 'util';

const exec = promisify(execCb);

/**
 * Builds the client and server files into production-ready JS files.
 */
async function build(): Promise<void> {
    return new Promise(async (resolve, reject) => {
        try {
            for (let i = 0; i < contexts.length; i++) {
                const context = contexts[i];
                const entryPath = `${srcPath}/${context.name}/index.ts`;
                const outputPath = `${distPath}/${context.name}.js`;

                const watchPlugin: Plugin = {
                    name: 'watch-plugin',
                    setup(buildApi) {
                        let count = 0;
                        buildApi.onEnd((result) => {
                            const status = count === 0 ? 'built' : 'rebuilt';
                            const message =
                                result.errors.length === 0 ? `files ${status} successfully.` : `${status} failed.`;
                            console.log(`${context.name.charAt(0).toUpperCase() + context.name.slice(1)} ${message}`);
                            count++;

                            if (i + 1 >= contexts.length) {
                                exec('bun ./bin/manifest.ts').catch(reject);
                                !production && console.log('\nWatching for file changes...');
                            }
                        });
                    },
                };

                const options: BuildOptions = {
                    bundle: true,
                    entryPoints: [entryPath],
                    outfile: outputPath,
                    keepNames: true,
                    dropLabels: production ? ['DEV'] : undefined,
                    legalComments: 'inline',
                    ...context.buildOptions,
                } as BuildOptions;

                const ctx = await esbuild.context({ ...options, plugins: [watchPlugin] });
                await ctx.watch();

                if (production) await ctx.dispose();
            }
            resolve();
        } catch (error) {
            reject(error);
        }
    });
}

const srcPath = 'src';
const distPath = 'dist';

const production: boolean = process.argv.findIndex((argItem) => argItem === '--mode=production') >= 0;

/**
 * Building options of each target build.
 */
type ContextItem = {
    name: 'server' | 'client';
    buildOptions: BuildOptions;
};

const contexts: ContextItem[] = [
    {
        name: 'server',
        buildOptions: {
            platform: 'node',
            target: ['node22'],
            format: 'cjs',
        },
    },
    {
        name: 'client',
        buildOptions: {
            platform: 'browser',
            target: ['es2023'],
            format: 'iife',
        },
    },
];

await exec('bun ./bin/clear.ts');

await build();

if (production) {
    console.log('\nGenerating types...\n');
    await exec('bun ./bin/types.ts');
}

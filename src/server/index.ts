import { helloWorld } from '@common/index';
import { log } from '@common/utils';

on('onResourceStart', async (name: string) => {
    if (name != GetCurrentResourceName()) return;

    log.info('Server script started.');

    log.debug(helloWorld());
});

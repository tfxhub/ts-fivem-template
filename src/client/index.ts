import { helloWorld } from '@common/index';
import { log } from '@common/utils';

on('onClientResourceStart', (name: string) => {
    if (name != GetCurrentResourceName()) return;

    log.info('Client script started.');

    log.debug(helloWorld());
});

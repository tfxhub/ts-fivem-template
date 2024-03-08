/**
 * @returns True if fxmanifest 'env' metadata is set to 'dev'.
 */
export const isDev = () => {
    return GetResourceMetadata(GetCurrentResourceName(), 'env', 0) == 'dev';
};

/**
 *
 * @returns True if fxmanifest 'env' metadata is set to 'prod'.
 */
export const isProd = () => {
    return GetResourceMetadata(GetCurrentResourceName(), 'env', 0) == 'prod';
};

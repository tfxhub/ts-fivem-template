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

/**
 *
 * @returns True if the function is running from a server-side script.
 */
export const isServer = () => {
    return IsDuplicityVersion();
};

/**
 *
 * @returns True if the function is running from a client-side script.
 */
export const isClient = () => {
    return !isServer();
};

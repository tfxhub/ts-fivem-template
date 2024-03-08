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

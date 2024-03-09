import { isDev } from './env';

export enum LogLevel {
    error = 0,
    warn = 1,
    info = 2,
    debug = 3,
    trace = 4,
}

const colors = {
    [LogLevel.error]: '^1^*', // Red
    [LogLevel.warn]: '^3', // Yellow
    [LogLevel.info]: '^2', // Green
    [LogLevel.debug]: '^4', // Blue
    [LogLevel.trace]: '^7', // White
};

class Logger {
    level: LogLevel;

    constructor(level: LogLevel = isDev() ? LogLevel.trace : LogLevel.warn) {
        this.level = level;
    }

    /**
     * Formats any input message into a readable object.
     * @param message
     * @returns
     */
    private formatMessage(message: any): string {
        if (typeof message === 'string' || typeof message === 'number') {
            return `${message}`;
        } else {
            return JSON.stringify(message, null, 2);
        }
    }

    /**
     * Private log method called from the exposed functions.
     * @param level
     * @param message
     */
    private log(level: LogLevel, ...message: any[]) {
        if (level <= this.level) {
            const formattedMessage = message.map((m) => this.formatMessage(m)).join(' ');
            console.log(colors[level], formattedMessage, colors[LogLevel.trace]);
        }
    }

    error(...message: any[]) {
        this.log(LogLevel.error, ...message);
    }

    warn(...message: any[]) {
        this.log(LogLevel.warn, ...message);
    }

    info(...message: any[]) {
        this.log(LogLevel.info, ...message);
    }

    debug(...message: any[]) {
        this.log(LogLevel.debug, ...message);
    }

    trace(...message: any[]) {
        this.log(LogLevel.trace, ...message);
    }
}

/**
 * Logger instance.
 */
export const log = new Logger();

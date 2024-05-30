export function logger(componentName: string) {
    const getCallerInfo = () => {
        const stackTrace = new Error().stack;
        const callerLine = stackTrace?.split('\n')[3]; // Adjust the index based on your stack structure

        if (callerLine) {
            const [, className, functionName] = /\s+at\s+(\w+)\.(.+)\s\(/.exec(callerLine) || [];
            return { className, functionName };
        }

        return {};
    };

    return {
        debug: (message: string, ...args: any[]) => {
            const callerInfo = getCallerInfo();
            console.debug(`[${componentName}].${callerInfo.functionName}() - DEBUG: ${message} - ${args}`);
        },
        info: (message: string, ...args: any[]) => {
            const callerInfo = getCallerInfo();
            console.info(`[${componentName}].${callerInfo.functionName}() - INFO: ${message} - ${args}`);
        },
        warn: (message: string, ...args: any[]) => {
            const callerInfo = getCallerInfo();
            console.warn(`[${componentName}].${callerInfo.functionName}() - WARN: ${message} - ${args}`);
        },
        error: (message: string, ...args: any[]) => {
            const callerInfo = getCallerInfo();
            console.error(`[${componentName}].${callerInfo.functionName}() - ERROR: ${message} - ${args}`);
        },
    }
}
import path from 'node:path';
export function getExpFilePath(fileName) {
    return path.resolve(import.meta.dirname, `../experience/${fileName}`);
}
export function toolOutput(text) {
    return {
        content: [
            {
                type: 'text',
                text
            }
        ]
    };
}

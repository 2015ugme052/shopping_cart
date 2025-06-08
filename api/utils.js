const { exec } = require('child_process');

const executeCommand = (command) => {
    return new Promise((resolve, reject) => {
        exec(command, (err, stdout) => {
            if (err) return reject(err);
            resolve(stdout.trim());
        });
    });
};

const generateInputArgs = (cart) => {
    return Object.entries(cart)
        .flatMap(([item, count]) => Array(count).fill(item))
        .join(' ');
};

module.exports = {
    executeCommand,
    generateInputArgs
};
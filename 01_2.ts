import * as fs from 'fs';

const main = () => {
    const data = fs.readFileSync('input/01.txt', 'utf8');
    const instructions = data.split('');
    let sum = 0;
    let idx = 0;
    for (const instruction of instructions) {
        idx += 1;
        if (instruction === '(') {
            sum++;
        } else {
            sum--;
        }
        if (sum == -1) {
            console.log(idx)
            return
        }
    }
};

main();

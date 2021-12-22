import * as fs from 'fs';

const main = () => {
    const data = fs.readFileSync('input/01.txt', 'utf8');
    const floor = data.split('').reduce((sum, cur) => {
        if (cur === '(') {
            sum++;
        } else {
            sum--;
        }
        return sum;
    }, 0);
    console.log(floor);

};

main();

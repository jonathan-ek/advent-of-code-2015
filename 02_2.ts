import * as fs from 'fs';

const main = () => {
    const data = fs.readFileSync('input/02.txt', 'utf8');
    const clean_data = data.split('\n').map((d) => d.split('x').map((x) => Number(x)));
    console.log(clean_data.reduce((sum, [l, w, h]) => {
        const length = 2 * (l + w + h - Math.max(l, w, h)) + l * h * w;
        return sum + length;
    }, 0));
};

main();

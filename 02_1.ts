import * as fs from 'fs';

const main = () => {
    const data = fs.readFileSync('input/02.txt', 'utf8');
    const clean_data = data.split('\n').map((d) => d.split('x').map((x) => Number(x)));
    console.log(clean_data.reduce((sum, [l, w, h]) => {
        const side_1 = l * w;
        const side_2 = w * h;
        const side_3 = h * l;
        const area = side_1 * 2 + side_2 * 2 + side_3 * 2 + Math.min(side_1, side_2, side_3);
        return sum + area;
    }, 0));
};

main();

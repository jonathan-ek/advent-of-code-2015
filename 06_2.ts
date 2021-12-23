import * as fs from 'fs';

const main = () => {
    const data = fs.readFileSync('input/06.txt', 'utf8');
    const tmp = Array.from('0'.repeat(1000), (x) => Number(x))
    const lights = Array.from({length: 1000}, () => ([...tmp]))
    data.split('\n').forEach((s) => {
        const [opt, start, _, end] = s.replace('turn ','').split(' ')
        const [xStart, yStart] = start.split(',');
        const [xEnd, yEnd] = end.split(',');
        for (let x = Number(xStart); x <= Number(xEnd); x += 1) {
            for (let y = Number(yStart); y <= Number(yEnd); y += 1) {
                if (opt == 'on') {
                    lights[y][x] += 1;
                } else if (opt == 'off') {
                    lights[y][x] -= 1;
                    lights[y][x] = lights[y][x] < 0 ? 0 : lights[y][x];
                } else {
                    lights[y][x] += 2;
                }
            }
        }
    });
    let lit = 0;
    lights.forEach((row) => {
        row.forEach((light) => {
            lit += light;
        })
    })
    console.log(lit)
};

main();

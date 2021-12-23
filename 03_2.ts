import * as fs from 'fs';

const main = () => {
    const data = fs.readFileSync('input/03.txt', 'utf8');
    const clean_data = data.split('');
    const santa_pos = [0, 0]
    const robo_pos = [0, 0]
    let turn = 0;
    let current_pos;
    const houses = new Set([[0,0].toString()]);
    clean_data.forEach((instruction) => {
        if (turn === 0) {
            current_pos = santa_pos;
            turn = 1;
        } else {
            current_pos = robo_pos;
            turn = 0;
        }
        if (instruction == '^') {
            current_pos[1] += 1;
        } else if (instruction == 'v') {
            current_pos[1] -= 1;
        } else if (instruction == '>') {
            current_pos[0] += 1;
        } else if (instruction == '<') {
            current_pos[0] -= 1;
        }
        houses.add(current_pos.toString())
    });
    console.log(houses.size)
};

main();

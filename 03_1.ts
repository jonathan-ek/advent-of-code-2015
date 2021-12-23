import * as fs from 'fs';

const main = () => {
    const data = fs.readFileSync('input/03.txt', 'utf8');
    const clean_data = data.split('');
    const current_pos = [0, 0]
    const houses = new Set([current_pos.toString()]);
    clean_data.forEach((instruction) => {
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

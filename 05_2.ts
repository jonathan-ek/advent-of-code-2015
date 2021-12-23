import * as fs from 'fs';

const main = () => {
    const data = fs.readFileSync('input/05.txt', 'utf8');
    const clean_data = data.split('\n');
    const nice = [];
    const re_one_letter_repeat = /([a-z]).\1+/;
    const re_double_pair = /(?:([a-z][a-z])).*\1+/;
    clean_data.forEach((text) => {
        if (re_one_letter_repeat.test(text) && re_double_pair.test(text)) {
            nice.push(text)
        }
    });
    console.log(nice.length)
};

main();

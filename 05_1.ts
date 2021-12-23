import * as fs from 'fs';

const main = () => {
    const data = fs.readFileSync('input/05.txt', 'utf8');
    const clean_data = data.split('\n');
    const nice = [];
    const re_vowels = /^[\s\S]*[aeiou][\s\S]*[aeiou][\s\S]*[aeiou][\s\S]*$/;
    const re_double = /([a-z])\1+/;
    const re_forbidden = /^((?!ab|cd|pq|xy).)*$/;
    clean_data.forEach((text) => {
        if (re_vowels.test(text) && re_double.test(text) && re_forbidden.test(text)) {
            nice.push(text)
        }
    });
    console.log(nice.length)
};

main();

import {Md5} from 'ts-md5/dist/md5';

const main = () => {
    const data = 'ckczppom'
    let i = 0;
    while (true) {
        i += 1
        const res = Md5.hashStr(data + i.toString());
        if (res.startsWith('000000')){
            console.log(i);
            return
        }
    }
};

main();

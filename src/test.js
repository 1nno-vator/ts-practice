
const arr = ['가', '나', '다', '라'];

const ga = arr[0];
const na = arr[1];
const da = arr[2];
const ra = arr[3];

console.log(ga);
console.log(na);
console.log(da);
console.log(ra);

console.log(' - - - - - - - - - - - - - ')
console.log('비구조 할당 - 배열');
console.log(' - - - - - - - - - - - - - ')

const [ da_ga, da_na, da_da, da_ra ] = ['가', '나', '다', '라'];

console.log(da_ga);
console.log(da_na);
console.log(da_da);
console.log(da_ra);



const form = {
    name: '난 이름',
    description: '난 설명',
    one: '하나요',
    two: '둘이요'
}

const { name: nickname, description, ...rest } = {
    name: 'aa',
    description: 'gg',
    one: 'Wor',
    two: 'dnj'
};

console.log(nickname);
console.log(description);
console.log(rest);
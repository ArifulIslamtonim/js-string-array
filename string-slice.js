const anthem = 'Amar Sonar Bangla Ami Tomai Valobashi';
const words = anthem.split(' ');
const withoutA = anthem.split('a');
// console.log(withoutA);

const slice1 = anthem.slice(5, 12);
console.log(slice1);

const sani = anthem.substr(28, 9);
// console.log(sani);

const another = anthem.substring(5, 12);
// console.log(another);

const first = 'hello';
const second = " World";
const full = first.concat(second). concat(' Joni Miya');
console.log(full);

const jonny = ['kocu','bal','cal' , 'lumba'];
const jai = jonny.join(',, ');
console.log(jai);
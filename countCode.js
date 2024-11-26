// Return the number of times that the string "code" appears anywhere in the given string, 
// except we'll accept any letter for the 'd', so "cope" and "cooe" count.


function countCode(str) {
    const match = str.match(/co.e/g);
    return match ? match.length : 0;
}

console.log('aaacodebbb -> ' + countCode('aaacodebbb'));
console.log('codexxcode -> ' + countCode('codexxcode'));
console.log('cozexxcope -> ' + countCode('cozexxcope'));
console.log('cozfxxcope -> ' + countCode('cozfxxcope'));
console.log('xxcozeyycop -> ' + countCode('xxcozeyycop'));
console.log('cozcop -> ' + countCode('cozcop'));
console.log('abcxyz -> ' + countCode('abcxyz'));
console.log('code -> ' + countCode('code'));
console.log('ode -> ' + countCode('ode'));
console.log('c -> ' + countCode('c'));
console.log(' -> ' + countCode(''));
console.log('AAcodeBBcoleCCccoreDD -> ' + countCode('AAcodeBBcoleCCccoreDD'));
console.log('AAcodeBBcoleCCccorfDD -> ' + countCode('AAcodeBBcoleCCccorfDD'));
console.log('coAcodeBcoleccoreDD -> ' + countCode('coAcodeBcoleccoreDD'));
function addNumbers(num1, num2){
  let result = 0;
  for(const num of arguments){
      result = result + num;
  }
  return result;
}
const sum = addNumbers(23, 777, 28, 22, 33);
console.log(sum);


function getFullName(firstName, lastName) {
    let fullName = '';
    for (const part of arguments) {
        fullName = fullName + part + ' ';
    }
    return fullName;
}
const name = getFullName('Omuk', 'Songket', 'bin', 'Hanif', 'Songket', 'bin', 'Tomuk', 'Songket', 'bin', 'Kumuk', 'Songket');
console.log(name);
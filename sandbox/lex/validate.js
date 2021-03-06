function validate(str) {
  const special = '`-=,!;@#$%^&*()_+{}|:"<>?';
  const numbers = '1234567890';
  const lowerCase = 'qwertyuiopasdfghjklzxcvbnm';
  const upperCase = 'QWERTYUIOPASDFGHJKLZXCVBNM';
  var result = {};
  result.hasSpecial = false;
  result.hasNumbers = false;
  result.hasLower = false;
  result.hasUpper = false;
  for(var i = 0; i < str.length; i++) {
    if(special.indexOf(str[i]) > -1) hasSpecial = true;
    if(numbers.indexOf(str[i]) > -1) hasNumbers = true;
    if(lowerCase.indexOf(str[i]) > -1) hasLower = true;
    if(upperCase.indexOf(str[i]) > -1) hasUpper = true;
  }
  result.passes = hasSpecial && hasNumbers && hasLower && hasUpper;
  return result;
}

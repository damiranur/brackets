module.exports = function check(str, bracketsConfig) {
  if (str.length % 2 > 0) return false;
  let strLength = str.length;
  let bracketsLength = bracketsConfig.length;

  for (let i = 0; i < strLength / 2; i++) {
    for (let j = 0; j < bracketsLength; j++) {
      str = str.replace(bracketsConfig[j].join(''), '');
    }
  }
  return str.length > 0 ? false : true;
};

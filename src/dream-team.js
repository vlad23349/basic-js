const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) return false;
  let str = '';
  let alph = {
    A: 0,
    B: 0,
    C: 0,
    D: 0,
    E: 0,
    F: 0,
    G: 0,
    H: 0,
    I: 0,
    J: 0,
    K: 0,
    L: 0,
    M: 0,
    N: 0,
    O: 0,
    P: 0,
    Q: 0,
    R: 0,
    S: 0,
    T: 0,
    U: 0,
    V: 0,
    W: 0,
    X: 0,
    Y: 0,
    Z: 0,
  }
  for (let i = 0; i < members.length; i++) {
    if (typeof (members[i]) == 'string')
      members[i] = members[i].replace(/ /g, '');
  }
  for (let i = 0; i < members.length; i++) {
    if (typeof (members[i]) == 'string')
      alph[members[i][0].toUpperCase()]++;
  }
  for (let el in alph) {
    if (alph[el] > 0) {
      for (let i = 0; i < alph[el]; i++) {
        str += el;

      }
    }
  }
  return (str);
};

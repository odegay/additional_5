const config1 = [['(', ')']];
const config2 = [['(', ')'], ['[', ']']];
const config3 = [['(', ')'], ['[', ']'], ['{', '}']];
const config4 = [['|', '|']];
const config5 = [['(', ')'], ['|', '|']];
const config6 = [['1', '2'], ['3', '4'], ['5', '6'], ['7', '7'], ['8', '8']];
const config7 = [['(', ')'], ['[', ']'], ['{', '}'], ['|', '|']];

module.exports = function check(str, bracketsConfig) {

  var confObj = {};
  var was1 = {};

  for (var i in bracketsConfig){
    confObj[bracketsConfig[i][0]] = bracketsConfig[i][1]; 
    if (bracketsConfig[i][0] == bracketsConfig[i][1]) was1[bracketsConfig[i][0]] = false;
  }

  //console.log(was1);
  

  if ((str.length % 2) != 0) {
    return false;
  }
  var open = 0, close = 0;
  var stack = [], stack2 = [];
  //var was = false;

  var op = 0;

  for(var i = 0; i < str.length; i++)
  {
    var c = str[i];
    if (c == confObj[c]) {
      isSimilar = true;
    }

    if (confObj[c]) 
    {
      if (confObj[c] != c) stack.push(c);

      if ((confObj[c] == c) && !was1[c]) {
        stack.push(c);
        was1[c] = true;
      } else if ((confObj[c] == c) && was1[c]) {
        if (c != confObj[stack.pop()]) {
          return false;
        }
        else {
          was1[c] = false;
        }
      }
    }    
    else if ((stack.length == 0) || (c != confObj[stack.pop()]))
    {
       return false
     }      

  }
  return true;
}
//stack: ( ( ( 
//console.log(check('|()|(||)||', config5));
//console.log(check('|(|)', config5));

//const config6 = [['1', '2'], ['3', '4'], ['5', '6'], ['7', '7'], ['8', '8']];
//console.log(check('111115611111111222288888822225577877778775555666677777777776622222', config6));
//console.log(check('111115611111111156111111112222888888222255778777787755556666777777777766222221111222288888822225577877778775555666677777777776622222', config6));


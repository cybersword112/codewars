/**
 * @param {string} s
 * @return {boolean}
 */
 var isValid = function(s) {
    const stack = [];
    const openParenthesis = ['(','[','{']
    const pairs = {
        ']':'[',
        '}':'{',
        ')':'('
    }
    
    for (let i = 0; i<s.length;i++){
        if(openParenthesis.includes(s[i])){
            stack.push(s[i])
        }else{
            let top = stack.pop()
            if(top !== pairs[s[i]] ){
                return false
            }
        }
    }
        return stack.length === 0 
    
    };
    
    // the input will be a string containing only various parenthesis
    // the output will be a boolean
    // the brackets must be closed in the correct order
    
    
    console.log(isValid('{[()]}'),true)
    console.log(isValid('({[}])'),false)
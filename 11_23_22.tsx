function titleToNumber(columnTitle: string): number {
    let vals = {
        'A':1,
        'B':2,
        'C':3,
        'D':4,
        'E':5,
        'F':6,
        'G':7,
        'H':8,
        'I':9,
        'J':10,
        'K':11,
        'L':12,
        'M':13,
        'N':14,
        'O':15,
        'P':16,
        'Q':17,
        'R':18,
        'S':19,
        'T':20,
        'U':21,
        'V':22,
        'W':23,
        'X':24,
        'Y':25,
        'Z':26,
    }
    let res:number = 0
    let array:string[] = columnTitle.split('')
    if(array.length == 1){
        return vals[array[0]]
    }else{
        for(let i = 0; i< array.length;i++){
           
            res += vals[array[i]] * Math.pow(26,array.length -1 -i)
            
        }
    }
    return res
    
    };
    
    // provided a string of leters representing excel columns
    // return the corresponding number
    
    console.log(titleToNumber('AB'),28)
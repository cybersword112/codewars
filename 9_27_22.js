function isValidWalk(walk) {
    let oppMap = new Map()
    oppMap.set('n',0)
    oppMap.set('s',0)
    oppMap.set('e',0)
    oppMap.set('w',0)
    //insert brilliant code here
    if(walk.length !== 10){
      return false
    }
    for(let i = 0; i< walk.length; i++){
      oppMap.set( walk[i] , oppMap.get( walk[i] ) + 1 )
    }
    if(oppMap.get('e') !== oppMap.get('w') || oppMap.get('n') !== oppMap.get('s') ){
      return false
    }
    return true
  }
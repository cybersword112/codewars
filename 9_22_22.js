function towerBuilder(nFloors) {
    //   start by determining how many characters the base will be
    //   for each level the characters of the base will be n * 2 -1
    //   construct the base with n *s
    //   each level up replace the first and last occurence of * with ' '
      let baseCount = (nFloors * 2) -1
      let tower = []
      let base = new Array(baseCount).fill('*').join('')
      console.log(baseCount)
      tower.push(base)
      let oldFloor = base
        for(let i = 0; i<nFloors-1;i++){
          let newFloor
          if (i ===0){
            newFloor = oldFloor.split('')
          }else{
            newFloor = tower[tower.length-1].split('')
          }
          let firstIndex = newFloor.indexOf('*')
          let lastIndex = newFloor.lastIndexOf('*')
          newFloor.splice(firstIndex,1,' ')
          newFloor.splice(lastIndex,1,' ')
          newFloor = newFloor.join('')
          tower.push(newFloor)
        }
      console.log(tower)
      return tower.reverse()
    }
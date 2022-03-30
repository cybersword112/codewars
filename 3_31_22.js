function checkExam(array1, array2) {
  // good luck
   let score = 0;
   for(let i = 0; i < array1.length; i++){
     if(array2[i] == ""){
       score = score
     }else if(array1[i]==array2[i]){
       score += 4
     }else{
       score -= 1
     }
   }
     if (score >= 0){
       return score
     }else{
       return 0
     }
 }
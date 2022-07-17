function pattern(n){
    var output="";
   //   loop from 1 to n
      for(i=1;i<n+1;i++){
   //      loop from i to n
        for(j=i;j<n+1;j++){
   //        add j to output 
          output += j;
        }
   //      if i is not n (ending num) then add a new line
        if(i!=n) output +="\n";
      }
    return output;
   }
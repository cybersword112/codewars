function dontGiveMeFive(start, end)
{
  let result = []
 for (let i = start; i<= end;i++){
   let check = String(i).split("").filter(item=>Number(item) != 5).join("")
   if(i == check){
     result.push(i)
   }
 }
  return result.length
}
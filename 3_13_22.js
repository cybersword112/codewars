function bmi(weight, height) {
  let height2 = height ** 2
  let bmi = weight/ height2
  
  if (bmi <= 18.5) {
    return "Underweight"
  }else if (bmi <= 25.0 && bmi > 18.5 ) {
    return "Normal"
  }else if (bmi <= 30.0 && bmi > 25) {
       return "Overweight" 
  }else if (bmi > 30){ 
    return "Obese"
    }
}
function balance(book) {
    // your code
    // Please use .toFixed(2) to format numbers
  //   first set up some variables:
  //   let balance,originalBalance,totalExpense,averageExpense,lineID,transactionDescription,transactionAmount
  //   split the book var by\n and assign it to sheetLines
  //   loop over the sheet lines, map over
  //    first check that the line is not empty, if so, sontinue to next iteration 
  //   then check if the line index is 0, if so, parse the number and set original balance equal to it.
  //   then lastly after those checks, use a regex statement to replace the appropriate chars in the string with ''
  //       then splice the first three chars of the string and set it equal to lineID
  //        then check for the first index after that numb where another num is found, use.find
  //        then set all data before that equal to the transactionDescription
  //        then lastly from our numb index above, parse this number and set it equal to transactionAmount
  //   after the above steps, set our iter var equal to a new string and combine the above elements and the new balance amount
  //   after all lines are done, join them with \n and append the total and average strings
    let balance,originalBalance,averageExpense,lineID,transactionDescription,transactionAmount;
    let totalExpense = 0.00;
    let lineCount = 0
    let sheet = book.split('\n')
    sheet = sheet.filter(line=> line != '').map((line,index)=>{
      line = line.replace(/[^a-zA-Z0-9.]/g, '');
      line = line.trim()
      if(index == 0){
        originalBalance = Number(line.match(/[\d\.]+/g)[0])
        balance = Number(originalBalance)
        line = `Original Balance: ${originalBalance.toFixed(2)}`
        return line
      }else{
        lineCount += 1
        lineID = line.slice(0,3)
        transactionAmount = Number(line.slice(3).match(/[\d\.]+/g)[0])
        totalExpense = Number(transactionAmount + totalExpense)
        balance = Number(balance - transactionAmount)
        transactionDescription = line.replace(/[^a-zA-Z]/g, '');
        line = String(lineID + ' ' + transactionDescription + ' ' + transactionAmount.toFixed(2) + ' Balance ' + balance.toFixed(2))
        return line
      }
      
    })
    sheet = sheet.join('\r\n')
    averageExpense = (totalExpense / lineCount)
    sheet += `\r\nTotal expense  ${totalExpense.toFixed(2)}\r\nAverage expense  ${averageExpense.toFixed(2)}`
    console.log(sheet)
    return sheet
  }
  
  // input will be a string of variably formatted costs
  // first line will be initial balance,
  // each line after will have two number sets, the first being the transaction ID
  // the second being the cost in dollars/cents
  
  // output should be the string, re-formatted to the following conditions:
  //  remove all other  chars besides: letters, digits, dots, and spaces.
  // then return a report with the transaction id, spaced and followed by the description, spaced and followed by the amount, spaced and followed by "Balance ${remaining balance}"
  // after all lines are parsed and formatted, attach at the end of the message: "Total expense ${total}" and on the next line: "Average expense ${averageExpense}"
  
  
  // console.log(balance("1000.00
  // 125 Market 125.45
  // 126 Hardware 34.95
  // 127 Video 7.45
  // 128 Book 14.32
  // 129 Gasoline 16.10"),"Original_Balance:_1000.00\n
  // 125_Market_125.45_Balance_874.55\n
  // 126_Hardware_34.95_Balance_839.60\n
  // 127_Video_7.45_Balance_832.15\n
  // 128_Book_14.32_Balance_817.83\n
  // 129_Gasoline_16.10_Balance_801.73\n
  // Total_expense__198.27\n
  // Average_expense__39.65")
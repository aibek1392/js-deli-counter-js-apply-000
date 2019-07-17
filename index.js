function takeANumber(katzDeliLine,name){
  katzDeliLine.push(name)
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}
var i = 0
function takeANumber(katzDeliLine){
   
  i++
  katzDeliLine.push(i)
  return `Welcome, you have ticket number ${i}`
}






function nowServing(katzDeliLine){
  if (katzDeliLine.length === 0){
    return 'There is nobody waiting to be served!'
    
  }
  
 var name = katzDeliLine.shift() 
 return `Currently serving ${name}.`
  
}

function currentLine(katzDeliLine){
  var text = []

  
  if (katzDeliLine.length === 0){
    return "The line is currently empty."
  }else{
  for (var i = 0; i < katzDeliLine.length; i++) {
    text.push(`${i+1}. ${katzDeliLine[i]}`)
    
  }
  return `The line is currently: ${text.join(", ")}`
}
}
 
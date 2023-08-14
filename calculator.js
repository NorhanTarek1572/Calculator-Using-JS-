const prompt = require("prompt-sync")();
const cal = require('./Operations')

function operations(op ,num){

  switch(op){
    case '+' :
        
        return "the result is : "+ cal.addition(num);
        break;

    case '-': 
        return "the result is : "+cal.subtraction(num);
        break ;
    
    case'*' : 
        return "the result is : "+cal.multiplication(num);
        break ;

    case '/'  :
        return "the result is : "+cal.dividtion(num);   
        break;
     default:
        return "Allowed operations are :\n"+"* for multiplication \n"+"/ to dividtion \n"+" - to subtraction \n "+"+ to addition \n"
     
    
}
  
}
function is_valid_input(input){
    if ( isNaN(input)) {
        return false
       }else {
         return true  // if it valid
       } 
}
function set_inputs(digits){
    let num =[]
        for(let i=0 ; i<digits ; i++){
           let input = parseInt ( prompt("enter number "+"("+ (i+1)+") :" ))        
           if (is_valid_input(input) === true){
            num[i] = input   // it must be valid number
           }
           else {
           throw new Error("this is not valid number")
            }      
            
        }
    return num
}
function calculator_body (digits){ 

    if(digits<=1 || isNaN(digits) ){ console.log("At least the number of digits must be 2") }
    else{
        try {
            let num =  set_inputs(digits) 
            console.log("=============================*_*==================================")
            let op =prompt("Enter the selected operation ('+' ,'-' ,'/' ,'*'): ")
            console.log(operations(op , num))
            console.log("=============================*_*==================================")     
        } catch (error) {
            console.log(error.message)
        }
        finally{
            if (prompt("Do you want to exit ? (If you want to exit,ENTER 1 ,to continue, press anything else )" ) == 1) {return exit=true}
        }
        }       
}
function main(){
    let exit = false ;
    while(exit != true){
        console.log("=============================*_*==================================")
        let digits =prompt("Enter the number of numbers you want to calculate (At least 2 ):  ")
        console.log("=============================*_*==================================")
        exit =calculator_body(digits)
    }

}

main()   



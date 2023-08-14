const calc = require('./Operations')
const prompt = require("prompt-sync")();

function evaluate(expression)
{
    let tokens = expression.split('');
    let values = [];
    let ops = [];

    for (let i = 0; i < tokens.length; i++)
    {
        if (tokens[i] == ' '){continue;}
        if (tokens[i] >= '0' && tokens[i] <= '9') // number 
        {
            // if it more than one digits in number
            let sbuf = ""; 
            while (i < tokens.length &&  tokens[i] >= '0' && tokens[i] <= '9')
            {sbuf = sbuf + tokens[i++];}
            values.push(parseInt(sbuf, 10));
            
           // Right now the i points to the character next to the digit, since the for loop also increases the i, we would skip one  token position; 
           //we need to decrease the value of i by 1 to correct the offset.
              i--;
        }
    
        else if (tokens[i] == '(')
        {
            ops.push(tokens[i]);
        }
        else if (tokens[i] == ')')
        {
            while (ops[ops.length - 1] != '(')
            {
              values.push( operations (ops.pop() ,values.pop() ,values.pop())  );
            }
            ops.pop(); // delete the ( becuse it is empty 
        }
        else if (tokens[i] == '+' ||  tokens[i] == '-' || tokens[i] == '*' || tokens[i] == '/')
        {
              
            // While top of 'ops' has same or greater precedence to current token, which is an operator.
            // Apply operator on top of 'ops' to top two elements in values stack
            while (ops.length > 0 && hasPrecedence(tokens[i], ops[ops.length - 1]))
            {
              values.push(operations (ops.pop(), values.pop(),values.pop()));
            }
            ops.push(tokens[i]);
        }
    }
    // Entire expression has been parsed at this point, apply remaining ops to remaining values
    while (ops.length > 0)
    {
        values.push(operations (ops.pop(), values.pop(),values.pop()));
    }
    // Top of 'values' containe return it
    return values.pop();
}
// Returns true if 'op2' has higher or same precedence as 'op1', otherwise returns false.
function hasPrecedence(operent1, operent2)
{
    if (operent2 == '(' || operent2 == ')')
    {
        return false;
    }
    if ((operent1 == '*' || operent1 == '/') &&
           (operent2 == '+' || operent2 == '-'))
    {
        return false;
    }
    else
    {
        return true;
    }
}

function operations (operent, number2, number1)
{
    switch (operent)
    {
    case '+':
        return calc.addition(number1 , number2); 
    case '-':
        return calc.subtraction(number1 , number2);  
    case '*':
        return calc.multiplication(number1 , number2); 
    case '/':
        if (number2 == 0)
        {
            console.log("Cannot divide by zero");
        }
        return calc.dividtion(number1 , number2); 
    }
    return 0;
}
function main(){
    let exit = false ;
    while(exit === false){
        console.log(evaluate(prompt("enter the values : ")))
        
        if(prompt("Do you Want to exit (if yes enter y , if no enter any thing eles)\n") === 'y') exit=true
    }

    
}
main()

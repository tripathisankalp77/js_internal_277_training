// sum of two number
let a=2;
let b=3;
let sum=a+b;
console.log(sum);

//console.log("enter value a ")
//a=parseInt(prompt("enter value a"));
console.log("enter value a "+ a)
//user input
//let aa=prompt()
console.log("hello Sankalp Tripathi")
//3. even odd check
{
    let n=5
    if(n%2==0)
        console.log("number is even")
    else 
        console.log("number is odd")
}

//celsius → Fahrenheit 
//F = °C × 9/5 + 32
{
    let c=32
    let f=c*9/5+32
    console.log( "celsius "+c+ " celsius → Fahrenheit "+ "Fahrenheit "+f)
}

//Max among 3 numbers 
{
    let max;
    let a=5
    let b=8
    let c=9
    if(a>b){
        max=(a>c) ? a:c;
    }
    else //a<b
        max=(b>c) ? b:c;
    //else if(b>c){
    //     max=(b>a)?b:a;
    // }
    // else{
    //     max=(a>b)?a:b;
    // }
    console.log("maximum value is "+ max);
}

//6>.Find string length
{
    let s="hello sankalp"
    let n=s.length
    console.log(s + " ==lenght of string== "+ n)
}

// Toggle boolean 
{
     let active=true
     console.log(active)
     active = !active
     console.log(active)
}

//Concatenate strings 
{
    let s1="sankalp is "
    let s2="tripathi"
    let concate=s1+s2
    console.log(concate)
    
}
//Positive/Negative/Zero
{
    let a=(+1);
    console.log("value "+a)
    a= (-1)
    console.log("value "+a)
    a=0
    console.log("value "+a)
} 
//var / let / const example
{
    //var is to declare globally
    var va=10;
    let le=11;
    const co=12;
    console.log("var local "+va)
    console.log("let local "+le)
    console.log("const local "+co)
}
console.log("var global "+va)
// not accessable out side the scope console.log("let global "+le)
//not accessable out side the scope console.log("const global "+co) 


//Multiplication table 
{
    //table of 2
    for(let i=1;i<=5;i++){
        console.log("2*"+i+"="+2*i)
    }
}

// Sum of first 10 natural numbers
{
    console.log("Sum of first 10 natural numbers")
    let i=1;
    let sum=0;
    while(10>=i){
        sum=sum+i//sum=sum+i
        i=i+1;
        //console.log("Sum of first 10 natural numbers is "+ sum)
    }
    console.log("Sum of first 10 natural numbers is "+ sum)
}
//Switch-case → day name 
{
    //switch case
    let sw=2
    switch(sw){
        case 1: {
            console.log("monday")
            break
        }
        case 2: {
            console.log("tuesday")
            break
        }
        case 3: {
            console.log("wednesday")
            break
        }
        default : 
            console.log("wrong option chooes from 1 to 7")
        
    }
}
//Function → Factorial 
{
   function factorial(a){
    let fact=1;
    for(let i=a;i>=1;i--){
        fact=fact*i
    }
    console.log("Factorial "+ fact)
   }
   factorial(5)
}
//Function → Voting eligibility
{
    function votingeligibality(age){
        if(age>=18){
            console.log("eligibil for voting")
        }
        else
            console.log("Not eligibil for voting")
    }
    votingeligibality(20)
}
//Write a function to check whether a number is prime or not. 
{
    console.log("Write a function to check whether a number is prime or not. ")
    {
        function isPrime(num){
            let ans=true
            for(let i=2;i<num;i++){
                if(num%i==0){
                    ans=false
                    break
                }
            } 
            console.log(((ans)?"prime number":"not prime number")) 
        }
        isPrime(2)
    }
}
//Write a program to print sum of digits of a number. (e.g., 123 → 6)
{
    let n=1234
    let temp=parseInt(n)
    let sum=0
    while(temp>0){
        sum=sum+(temp%10)
        temp=temp/10
    }
    console.log("sum of digit is "+ sum)
}

//Write a function to reverse a string without using reverse(). 
{
    let a="sankalp"
    let a1=""
    console.log(a)
    let n=a.length-1
    //let b=0;
    while(0<=n){
        a1=a1+a[n]
        n--;
        //b++;
    }
    console.log(a1)
}
//19. Take user marks & print Grade using conditions: 
// • ≥90 A 
// • ≥75 B 
// • ≥50 C 
// • else Fail

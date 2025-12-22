//let num=prompt("Enter a number:");
// for(let i=0;i<=100;i++){
//     if(i%2==0){
//         console.log(i);
//     }
// }
// const name=prompt("Enter your name:");
// let str="@"+name+ name.length;

// console.log(str);
// console.log(`${"@"+name+ name.length}`);//template literals

let h1=document.querySelector("h1");
//body.innerHTML="<button id='btn'>Click Me</button>";
h1.innerText=h1.innerText+" this is sankalp's practice session";
console.log(h1.innerText);

let box=document.querySelectorAll(".box");
// box.innerText="Re One";
idx=1;  
for(let div of box){
    div.innerText=`changet ${idx}`;
    idx++;
}
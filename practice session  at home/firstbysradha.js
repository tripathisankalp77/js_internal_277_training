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

let btn=document.createElement("button");
btn.innerText="Click Me";
btn.style.backgroundColor="red";
btn.style.color="white";
document.querySelector("body").prepend(btn);

let btnLightMode=document.createElement("button");
btnLightMode.setAttribute("id","bt1");
btnLightMode.innerText="Light Mode";
btnLightMode.style.backgroundColor="yellow";
btnLightMode.style.color="black";
document.querySelector("body").append(btnLightMode);
let mode="light";


document.addEventListener("click",function(){
    if(mode=="light"){
        mode="dark";
        document.querySelector("body").style.backgroundColor="black";
        
    }else{
        mode="light";
        document.querySelector("body").style.backgroundColor="white";   
    }
    console.log(mode);
});
// Create an array of marks → calculate average using reduce().
{
 let marks = [80, 90, 70, 85, 95];
 let totalmarks=marks.reduce((ass,val)=>(ass+val),0) 
 let avg=totalmarks/(marks.length)  
 console.log("average "+avg)
}
//filter
{
   let nums = [1,2,3,4,5,6,7,8,9]; 
   let result=nums.filter(n=>(n%2===0))
   console.log(result)
}
{
   let cart = { 
      item: "Laptop", 
      price: 45000, 
      quantity: 2 
   };
   console.log("Calculate total bill "+ cart.price*cart.quantity) 
}
// onvert object to JSON → Store in variable → Convert back to object.
{
   let user = {name:"Aman", age:21, course:"JS"}; 
   console.log(user)
   let jsonconv=JSON.stringify(user)
   console.log(jsonconv)
   let obj=JSON.parse(jsonconv)
   console.log(obj)
}
//
{
   let arr=["ram","shyam","mohan"] 
   console.log(arr)
   let re=arr.map(n=>n.toUpperCase())
   console.log(re)
}
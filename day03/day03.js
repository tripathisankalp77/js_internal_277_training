//ARRAY
{
    let fruits=["mango","banana","apple","avacado","grapes"]
        console.log(fruits)
        //Using for loop 
        for(let k=0 ;k<fruits.length;k++){
            console.log(fruits[k])
        }
        //Using for…of 
        // for(let value of fruits){
        //     console.log(value)
        // }

        //Array Practice 
        fruits.push("papaya")
        console.log(fruits)
        fruits.pop()
        console.log(fruits)
        fruits.unshift("Kiwi")
        console.log(fruits)
        fruits.shift()
        console.log(fruits)
        console.log(fruits.includes("mango"))
        console.log(fruits.indexOf("banana"))

        //Higher-Order Array Methods
        //map()-> opperate on each element
        {
            console.log("map")
            let nums=[10,20,30,40]
            console.log(nums)
            let doubled=nums.map(n=>n*2)//n is each element in the array
            console.log(doubled)
        }
        // //filter -> new array which satisfyed the condition
        {
            console.log("filter")
            let nums=[10,20,30,40]
            console.log(nums)
            let result=nums.filter(n=>n>20)
            console.log(result)
        }
        //reduce
        //reduce() method iterates through an array and reduces it to a single final value.

        {
            console.log("reduce")
            let nums=[1,2,3,4,5]
            console.log(nums)
            let resultreduce=nums.reduce((acc,val)=>(acc+val),0)
            console.log(resultreduce)
        }
        //Create an object student with name, age & course properties. Print them
        {
            const student={
                name:"sankalp",
                age:23,
                course:"Btech"
            }
            let test=student.name+" age is "+ student.age + " studey in "+student.course;
            console.log(test)
            //console.log(student["name","age","course"])
            //  Add a new property city in the object. 
            student.city="Allahabad"
            console.log(student.city)
            // Remove age property using delete. 
            delete student.age;
            //console.log(student.age)
            //  Loop the object using for…in and print key-value pairs.
            // for(let value in student){
                
            // }
            //console.log(student)
            // Iterates over all enumerable properties (keys) of the student object.
            for(let key in student){
                console.log(key+":"+student[key])
            }
            //  Create an object person with nested address {city, country}. Print city.
            student.address={
                court:"pratapghar",
                country:"India"
            };
            //console.log(student.address.city)
            for(let key in student.address){
                console.log(key+":"+student.address[key])
            }
            //  Change the city to "Mumbai" inside nested object
            student.address.court="allahapur"
            console.log(student.address.court)

        }
        // Convert Object → JSON String 
        {
            const student = { 
                name: "Rahul", 
                age: 22, 
                course: "JavaScript" 
                };
            console.log(student)
            let jsonString = JSON.stringify(student)
            console.log(jsonString)
                // Convert JSON String → Object 
                let obj = JSON.parse(jsonString); 
                console.log(obj)
        }

}
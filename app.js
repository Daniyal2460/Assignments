let obj= {
   
};
let obj1 = {};

function retrieve(){
    obj= {
        name : prompt("Enter your Name"),
        CNIC : prompt("Enter your CNIC"),
        address : prompt("Enter your Address"),
        number : prompt("Enter your number")
    };
    let stringify = JSON.stringify(obj)
    localStorage.setItem("student",stringify);
    let key1 = prompt("Enter a name/Key you want to get");
    obj1 =  JSON.parse(localStorage.getItem(key1));
    return obj1
}


 obj1 = retrieve();

console.log("previous Object ");
console.log(obj);
console.log("New Object ");
console.log(obj1);
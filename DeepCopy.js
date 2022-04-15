let employee = {
	id: "1",
	name: "abc", 
	salary: 1000
}

console.log("Employee===> ", employee);
let newEmployee = JSON.parse(JSON.stringify(employee));
console.log("New Employee==> ", newEmployee);

console.log("---------After modification----------");
newEmployee.name = "xyz";
console.log("Employee=> ", employee);
console.log("New Employee=> ", newEmployee); 

// ## **Employee Information**

// **Part 1:** Given a list of Employee data with department and salary, **create a list of key-value pairs from the input**

// **For Example :**

// - **Sample Input**

// ```
// employee = ["Sam", "John", "Mark", "Peter", "Simon"]
// department = ["Sales", "Marketting", "Operation", "Finance", "Tech"]
// salary  = [40000, 60000, 50000, 60000, 70000]

// ```

// - **Sample Output**

// ```
// data = [
//     {name: "Sam"  , salary: 40000, department: "Sales"},
//     {name: "John" , salary: 60000, department: "Marketing"},
//     {name: "Mark" , salary: 50000, department: "Operation"},
//     {name: "Peter", salary: 60000, department: "Finance"},
//     {name: "Simon", salary: 70000, department: "Tech"},
// ]

// ```

// **Part 2:** From the above data, Write a function i.e **getEmployeeNames(data)** that will take the above data as input and print all the Employee's names available in the data.

// - **Sample Output**

// ```
//     Sam
//     John
//     Mark
//     Peter
//     Simon

// ```

// **Part 3:** From the above data, Write a function i.e **getMaxSalaryEmployee(data)** that will take the above data as input and return an object of a employee having maximum salary.

// - **Sample Output**

// ```
// {name: "Simon", salary: 70000, department: "Tech"}

// ```

let data=[]
for(let i=0;i<employee.length;i++){
  let details={}
  details.employee=employee[i]
  details.department=department[i]
  details.salary=salary[i]
  data.push(details)
  
}
console.log(data)
for(let i=0;i<data.length;i++){
  console.log(data[i].employee)
}
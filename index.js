
let user = {
  name: "John",
  age: 30,
  hobby: "reading",
  premium: true
};

user.mood = 'happy';

user.hobby = 'skydiving';

user.premium = false;

for (const key of Object.keys(user)) {
  console.log(`${key}: ${user[key]}`);
}

function countProps(obj) {
  return Object.keys(obj).length;
}

console.log(countProps(user)); 

function findBestEmployee(employees) {
  let bestEmployee = "";
  let maxTasks = 0;

  for (const [name, tasks] of Object.entries(employees)) {
    if (tasks > maxTasks) {
      maxTasks = tasks;
      bestEmployee = name;
    }
  }

  return bestEmployee;
}


const employees = {
  John: 50,
  Sarah: 80,
  Mary: 35
};
console.log(findBestEmployee(employees)); 


function countTotalSalary(employees) {
  let totalSalary = 0;

  for (const salary of Object.values(employees)) {
    totalSalary += salary;
  }

  return totalSalary;
}


const salaries = {
  John: 3000,
  Sarah: 4000,
  Mary: 2500
};
console.log(countTotalSalary(salaries)); 

function getAllPropValues(arr, prop) {
  const values = [];

  for (const item of arr) {
    if (item.hasOwnProperty(prop)) {
      values.push(item[prop]);
    }
  }

  return values;
}


const products = [
  { name: "Apple", price: 30 },
  { name: "Banana", price: 20 },
  { name: "Orange", price: 25 }
];
console.log(getAllPropValues(products, "name")); 

function calculateTotalPrice(allProducts, productName) {
  let total = 0;

  for (const product of allProducts) {
    if (product.name === productName) {
      total = product.price * product.quantity;
      break;
    }
  }

  return total;
}

const store = [
  { name: "Laptop", price: 1000, quantity: 3 },
  { name: "Phone", price: 500, quantity: 5 },
  { name: "Tablet", price: 200, quantity: 10 }
];
console.log(calculateTotalPrice(store, "Phone")); 

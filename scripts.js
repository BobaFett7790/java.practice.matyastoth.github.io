let age = 30
age

console.log("JavaScript os working!")

let myArray = ['Judit', 'Matyi',];

console.log(myArray[0]);

let colors = ['Black', 'Red', 'Blue', 'White'];

console.log(colors[1])



let posts = [{
  title: "First post",
  likeCount: 12
}, {
  title: "Second post",
  likeCount: 222
}];



let bookCount = 10;
for (let i = 0; i < bookCount; i++) {
console.log(i++)
}



let add = (a, b) => {
    return a + b;
    console.log(add(1,4))
  }



let str = '';

for (let i = 0; i < 9; i++) {
  str = str + i;
}

console.log(str);



for (let i = 0; i < 10; i++) {
  console.log(i)
}


console.log(colors); 

let myFunction = x => {
  console.log(x);
} 

let greeter = name => {
  console.log(`Hello, ${name}`)
}

greeter("Judit")
greeter("Matyi")

colors.forEach(color => {
  console.log(color);
});
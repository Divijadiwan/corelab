let div = document.getElementById("myDiv")
div.innerHTML="my div"
document.body.appendChild(div)
console.log(div);
window.addEventListener('click', function() {
	console.log('click')
})
function sayHello() {
	console.log('click')
}
window.addEventListener('click', sayHello)

/*window.addEventListener('mousemove', (e) => {
	console.log(e)
	console.log(e.clientX, e.clientY)
})*/
const button = document.getElementById('myButton');
button.addEventListener('click', (event) => {
  console.log('Button clicked!', this); // `this` refers to the enclosing context
});
const fruits = ['Apple', 'Banana', 'Orange'];
fruits.forEach(fruit => console.log(fruit));
const students = [{name: 'enk', major: 'cd'}, {name: 'sydney', major: 'dt'}]
const myStudentsMajors = students.filter(student => student.major === 'cd')
console.log(myStudentsMajors)

fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json))
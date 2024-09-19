let name = "divija"
console.log(name.charAt(0))
let hello = "hello"
let sayHello = `${hello} ${name}!`
console.log(sayHello)
let isStudent = false
let hasGraduated = true
let studentStatus = isStudent ? "i am a student":"i have graduated"
let graduateStatus = !isStudent ? "i have graduated":"i am a student"
console.log(!isStudent)
let the_new_school = {
    name: "The New School",
    foundedIn: 1919,
    address: "5th Avenue, New York",
    schools: ["parsons","lang","NSSR","COPA"]
}
console.log(the_new_school.address)

let ms = Date.now()
console.log(ms)
let fav_places_in_nyc = ["central park", "koronets", "Benny's Cuban Cafe", "Levain Bakery", "Qahwah House"]
console.log(fav_places_in_nyc[fav_places_in_nyc.length-2])
for(let i=0;i<fav_places_in_nyc.length;i++)
{
    console.log(fav_places_in_nyc[i])
}
fav_places_in_nyc.forEach(item => {
    console.log(item)
    const myDiv = document.createElement('div')
    myDiv.innerText = item
    document.body.append(myDiv)
})
let Array = [[2,4,6],[1,2,3],[3,6,9]]
console.log(Array[0][2])

fetch('class.json')
    .then(response => response.json())
    .then(json => {
    console.log(json)
    const studentArray = json.students
    console.log(studentArray)
    const allStudentNames = studentArray.map(student => student.name)
    console.log(allStudentNames)
    allStudentNames.forEach(name =>{
        const nameTitle = document.createElement('div')
        nameTitle.innerText = name
        document.body.append(nameTitle)
    })

 })


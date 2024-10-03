const myCursor = document.getElementById("cursor")
console.log(myCursor)
window.addEventListener("mousemove", function(e){
    const x = e.pageX
    const y = e.pageY
    myCursor.style.width = '80px'
    myCursor.style.transform = `translate(${x - 80/2}px,${y-80/2}px)`
    console.log(e)
})
window.addEventListener("click", function(e){
    const x = e.clientX
    const y = e.clientY
    const img = document.createElement("img")
    img.src = myCursor.src
    this.document.body.appendChild(img)
    console.log(img)
})

// GO!

// TASK 1 -- Show/Hide Nav
const navMenu = document.querySelector(".nav-menu")
document.querySelector("#hide-nav button").addEventListener("click",function(){
	if(navMenu.classList.contains("nav-menu-hidden")){
		navMenu.classList.remove("nav-menu-hidden")
	} else {
		navMenu.classList.add("nav-menu-hidden")
	}
})


// TASK 2 -- Select an Icon
const changeBox = document.querySelectorAll(".wish-list .option")
const arrayColor = [...changeBox]
for(let i = 0; i < arrayColor.length; i++){
	arrayColor[i].addEventListener ("click", changeColor)
}

	function changeColor(e){
	const item = e.currentTarget
	item.classList.toggle("selected")		
}

// TASK 3 -- Move Item From List to List
const itemPlus = document.querySelectorAll(".point")
const arrayPoints = [...itemPlus]
for (let i = 0; i < arrayPoints.length; i++){
	arrayPoints[i].addEventListener("click", plus)
}
function plus(event){
	let number = parseInt(event.target.textContent)
	result.textContent = resultNum += number
}
const result = document.querySelector(".total-points")
var resultNum = parseInt(result.textContent)



// TASK 4 -- Add Guest to List
const guestList = document.querySelectorAll(".good-standing-list li, .probation-list li")
const guestListArray = [...guestList]
for(let i = 0; i < guestListArray.length; i++){
	guestListArray[i].addEventListener("click", changeGuest)
}
function changeGuest(event){
	if(event.target.parentNode.className === "good-standing-list"){
		document.querySelector(".probation-list").appendChild(event.target)
	} else {
		document.querySelector(".good-standing-list").appendChild(event.target)
	}
}

// TASK 5 -- (Adventure Mode)-- Add + Remove Item From List
const colorList = document.querySelectorAll(".palette span")
const colorListArray = [...colorList]
for(let i = 0; i < colorListArray.length; i++){
	colorListArray[i].addEventListener("click", changeBackground)
}
function changeBackground(event){
	let classColor = event.target.className	
	let paragraph = document.querySelector("#change-colors .answer-box p")
	paragraph.classList.remove(paragraph.classList[1])
	paragraph.classList.add(classColor)
}
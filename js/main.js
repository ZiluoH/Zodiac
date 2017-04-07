// var name = prompt("What's your name?")
// document.write("hello " + name + ", nice to meet you!")



// var name = prompt("What's your name?")

// if (name == "Alice" || name == "Bob") {
// 	document.write("Hello, " + name)
// }  else {
// 	document.write("Bye")
// }



// var content = "this is the element with something"
// document.getElementById('test').innerHTML = content

// login system!!!
// var data = [
//     {
//      username:"abc",
//      password:123
//     },
//     {
//      username:"asd",
//      password:234
//     }
// ]



// function getInfo(){
// 	var username = document.getElementById("username").value
// 	var password = document.getElementById("password").value
// 	for (var i = 0; i < data.length; i++) {
// 		if (username == data[i].username && password == data[i].password){
// 		console.log("loged in")
// 	} else (
// 		console.log("nooooo"))
// 	}
	 
// }

// document.getElementById("test").innerHTML = "this is something"

// var x = "this is a string"
// document.getElementById("test2").innerHTML = x


// #3
// function info(){
// 	var info = document.getElementById("test3").value
// 	console.log(info)
// }

// #4
// var array5 = ["qwe", "rty", "uio", "pas", "dfg"]
// for (var i = 0; i < array5.length; i++) {
// 	console.log(array5[i])
// }


// #6
// var object = [ 
//    {
// 	name: "abc",
// 	age:12,
//     color:"white"
//    },
//    {
//    	name:"def",
//    	age:34,
//    	color:"black"
//    },
//    {
//    	name:"tre",
//    	age:3,
//    	color:"red"
//    },
//    {
//    	name:"cod",
//    	age:95,
//    	color:"none"
//    },
//    {
//    	name:"yyy",
//    	age:46,
//    	color:"pink"
//    }


// ]

// for (var i = 0; i < object.length; i++) {
// 	console.log(object[i].name)
// }


// var cars = ["fiat", "benz", "honda", "toyota"]


// for (var i = 0; i < cars.length; i++) {
// 	console.log(i)
// }

// var arr = [10, 15, 35, 75, 58, 34]
// var big = 0
// for (var i = 0; i < arr.length; i++) {
// 	if (big<arr[i]) {big = arr[i]}
// }

// console.log(big)

// var honda = {
// 	model:"civic",
// 	year:2014,
// 	color:"blue"
// }

// console.log(honda.year)




var stars = [
   {
   	name:"leo",
   	desc:"you are leo"
   },
   {
   	name:"aries",
   	desc:"you are aries"
   },
   {
   	name:"cancer",
   	desc:"you are cancer"
   }
]


function zo(){
	var zodiac = document.getElementById("zodiac").value
	var no = "noooooooooo"

	for (var i = 0; i < stars.length; i++) {
		if (zodiac == stars[i].name) {
			
			document.getElementById("desc").innerHTML = stars[i].desc

		} 
		else {
			document.getElementById("desc").innerHTML = no
		}
}
}
// function getInfo(){
// 	var username = document.getElementById("username").value
// 	var password = document.getElementById("password").value
// 	for (var i = 0; i < data.length; i++) {
// 		if (username == data[i].username && password == data[i].password){
// 		console.log("loged in")
// 	} else (
// 		console.log("nooooo"))
// 	}
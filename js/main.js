function Shoe(name, size, color, stock, image) {
	this.name = name;
	this.size = size;
	this.color = color;
	this.stock = stock;
	this.image = image;
}

var shoeArray = []

var whiteshoe = new Shoe('White Shoe', "10", "white", 90, "img/whiteshoe.png")
var redshoe = new Shoe('Red Shoe', "5", "red", 10, "img/redshoe.png")
var greenshoe = new Shoe('Green Shoe', "10", "green", 100, "img/greenshoe.png")
var pinkshoe = new Shoe('Pink Shoe', "10", "pink", 25, "img/pinkshoe.png")
var purpleshoe = new Shoe('Purple Shoe', "10", "purple", 37, "img/purpleshoe.png")
var yellowshoe = new Shoe('Yellow Shoe', "10", "yellow", 45, "img/yellowshoe.png")

shoeArray.push(whiteshoe)
shoeArray.push(redshoe)
shoeArray.push(greenshoe)
shoeArray.push(pinkshoe)
shoeArray.push(purpleshoe)
shoeArray.push(yellowshoe)

for(i = 0; i < shoeArray.length; i++) {
	var sName = document.createTextNode(shoeArray[i].name)
	var sSize = document.createTextNode("Available size:" + shoeArray[i].size)
	var sColor = document.createTextNode("Color:" + shoeArray[i].color)
	var sStock = document.createTextNode("In stock: " + shoeArray[i].stock)
	var sButton = document.createTextNode("Buy Now!")
	var sImage = shoeArray[i].image

	var newCol = document.createElement("DIV")
	var newDiv = document.createElement("DIV")
	var nameH1 = document.createElement("H1")
	var sizeH4 = document.createElement("H4")
	var colorH4 = document.createElement("H4")
	var stockH4 = document.createElement("H4")
	var buyNow = document.createElement("BUTTON")
	var image = document.createElement("IMG")

	nameH1.appendChild(sName)
	sizeH4.appendChild(sSize)
	colorH4.appendChild(sColor)
	stockH4.appendChild(sStock)
	buyNow.appendChild(sButton)
	buyNow.className = "btn btn-success btn-lg"
	image.src = sImage
	image.className = "img-responsive"

	newCol.className = "col-sm-4"
	newDiv.className = "shoe shoeName" + i + "thumbnail"
	newDiv.appendChild(nameH1)
	newDiv.appendChild(image)
	newDiv.appendChild(sizeH4)
	newDiv.appendChild(colorH4)
	newDiv.appendChild(stockH4)
	newDiv.appendChild(buyNow)
	newCol.appendChild(newDiv)

	document.getElementById("shoes").appendChild(newCol)

}




// function Shoe(name, size, color, stock, image) {
// 	this.name  = name
// 	this.size  = size
// 	this.color = color
// 	this.stock = stock
// 	this.image = image
// };

// var whitetee  = new Shoe("White Shoe", "10", "white", 30, "img/whiteshoe.png")
// var blacktee  = new Shoe("Red Shoe", "7", "red", 100, "img/redshoe.png")
// var redtee    = new Shoe("Green Shoe", "5", "green", 70, "img/greenshoe.png")
// var bluetee   = new Shoe("Yellow Shoe", "9", "yellow", 90, "img/yellowshoe.png")
// var greentee  = new Shoe("Pink Shoe", "6", "pink", 25, "img/pinkshoe.png")
// var yellowtee = new Shoe("Purple Shoe", "11", "purple", 130, "img/purpleshoe.png")

// var shoeArray = new Array


// shirtArray.push(whiteshow, redshoe, greenshoe, yellowshoe, pinkshoe, purpleshoe)

// // loop through products array
// for(var i = 0; i < shoeArray.length; i++) {
// 	// create new elements for each product
// 	var newItem  = document.createElement("div")
// 	var newDiv   = document.createElement("div")
// 	var nameH1   = document.createElement("h1")
// 	var sizeH4   = document.createElement("h4")
// 	var colorH4  = document.createElement("h4")
// 	var stockH4  = document.createElement("h4")
// 	var btn      = document.createElement("button")
// 	var image    = document.createElement("img")

// 	// create text for new elements
// 	var tName   = document.createTextNode(shoeArray[i].name)
// 	var tSize   = document.createTextNode("Available size: " + shoeArray[i].size)
// 	var tColor  = document.createTextNode("Color: " + shoeArray[i].color)
// 	var tStock  = document.createTextNode("In stock: " + shoeArray[i].stock)
// 	var tButton = document.createTextNode("Buy Now!")

// 	// update source attribute
// 	image.src = shoeArray[i].image

// 	// update class attributes
// 	image.className = "img-responsive"
// 	btn.className = "btn btn-primary btn-lg"
// 	newItem.className = "col-sm-4"
// 	newDiv.className = "shoe shoeName" + [i] + " thumbnail"
	
// 	// add text to elements
// 	nameH1.appendChild(sName)
// 	sizeH4.appendChild(sSize)
// 	colorH4.appendChild(sColor)
// 	stockH4.appendChild(sStock)
// 	btn.appendChild(sButton)

// 	// add elements to new div
// 	newDiv.appendChild(nameH1)
// 	newDiv.appendChild(image)
// 	newDiv.appendChild(sizeH4)
// 	newDiv.appendChild(colorH4)
// 	newDiv.appendChild(stockH4)
// 	newDiv.appendChild(btn)

// 	// add new div to new item div
// 	newItem.appendChild(newDiv)

// 	// add new item to the element with id="shirts"
// 	document.getElementById("products").appendChild(newItem)
// }
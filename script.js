var Shape = function(corners, sides, Color) {//pass in parameters of Object Shape's properties into an anonymous function
  this.corners = corners;//set the passed parameters (white) equal to specific instantiations of a Shape
  this.sides = sides;
  this.Color = Color;//this has to be capitalized because if not, color triggers some global variable messing thing up :/
}

Shape.prototype.displayShape = function(){
  document.getElementById("shapeSpace").write("Number of Corners: " + this.corners + ". Number of Sides: " + this.sides + ". Color: " + this.Color + "." + "<br />")
}

////THIS IS ALL IT'S OWN THANG NOW!
function Circle(corners, sides, Color, src, id){//has extra parameters. Circle object
  Shape.call(this, corners, sides, Color);
  this.src = src;
  this.id = id;
}

Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;

Circle.prototype.displayShape = function(){//overriding shape function
  var elem = document.createElement("img");
  elem.src = this.src;
  elem.id = this.id;
  document.write("<h2>" + elem.id + "</h2>");
  document.body.appendChild(elem);
  var info = document.write("<p> Number of Corners: " + this.corners + ". Number of Sides: " + this.sides + ". Color: " + this.Color + "." + "</p>" + "<br /> <br />");
};
////THIS IS ALL IT'S OWN THANG NOW!

function Square(corners, sides, Color, src, id){//has extra parameters. Circle object
  Shape.call(this, corners, sides, Color);
  this.src = src;
  this.id = id;
};

Square.prototype = Object.create(Shape.prototype);
Square.prototype.constructor = Circle;

Square.prototype.displayShape = function(){//overriding shape function
  var elem = document.createElement("img");
  elem.src = this.src;
  elem.id = this.id;
  document.write("<h2>" + elem.id + "</h2>");
  document.body.appendChild(elem);
  var info = document.write("<p> Number of Corners: " + this.corners + ". Number of Sides: " + this.sides + ". Color: " + this.Color + "." + "</p>" + "<br /> <br />");
};
///////////

function Triangle(corners, sides, Color, src, id){//has extra parameters. Circle object
  Shape.call(this, corners, sides, Color);
  this.src = src;
  this.id = id;
};

Triangle.prototype = Object.create(Shape.prototype);
Triangle.prototype.constructor = Circle;

Triangle.prototype.displayShape = function(){//overriding shape function
  var elem = document.createElement("img");
  elem.src = this.src;
  elem.id = this.id;
  document.write("<h2>" + elem.id + "</h2>");
  document.body.appendChild(elem);
  var info = document.write("<p> Number of Corners: " + this.corners + ". Number of Sides: " + this.sides + ". Color: " + this.Color + "." + "</p>" + "<br /> <br />");
};
/////

function Pentagon(corners, sides, Color, src, id){//has extra parameters. Circle object
  Shape.call(this, corners, sides, Color);
  this.src = src;
  this.id = id;
};

Pentagon.prototype = Object.create(Shape.prototype);
Pentagon.prototype.constructor = Circle;

Pentagon.prototype.displayShape = function(){//overriding shape function
  var elem = document.createElement("img");
  elem.src = this.src;
  elem.id = this.id;
  document.write("<h2>" + elem.id + "</h2>");
  document.body.appendChild(elem);
  var info = document.write("<p> Number of Corners: " + this.corners + ". Number of Sides: " + this.sides + ". Color: " + this.Color + "." + "</p>" + "<br /> <br />");
};



function main(){

var ShapeArray = [];
ShapeArray[0] = new Circle("Infinite", "Infinite", "Purple", "images/circle-xxl.png", "Circle");
ShapeArray[1] = new Square(4, 4, "Red", "images/square.gif", "Square");
ShapeArray[2] = new Triangle(3, 3, "Green", "images/triangle.png", "Triangle");
ShapeArray[3] = new Pentagon(5, 5, "Orange", "images/pentagon.jpg", "Pentagon");


for (var i = 0; i < ShapeArray.length; i++){
  ShapeArray[i].displayShape();
  }
};

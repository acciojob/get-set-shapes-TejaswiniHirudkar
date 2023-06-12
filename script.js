//complete this code
class Rectangle {
	constructor(width, height){
		this.width=width;
		this.height=height;
	}
	get width(){
		return this.width;
	}
	set width(value){
		this.width=value;
	}
	get height(){
		return this.height;
	}
	getArea(){
		return this.width * this.height;
	}
}

class Square extends Rectangle {
	constructor(side){
		this.side=side;
	}
	get side(){
		return this.side;
	}

  getPerimeter() {
    return 4*this.side;
  }
}

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;

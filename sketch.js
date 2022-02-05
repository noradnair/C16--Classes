
var box1,box2,box3,box4;



function setup() {
  createCanvas(600, 400);
  box1=new Box(10,67,50)
  box2=new Box(34,97,46)
  box3=new Box(87,95,84)
  box4=new Box(52,77,99)

 

  
}

function draw() {
  background(220);
  box1.show()
  box2.show()
  box3.show()
  box4.show()
  box1.set_Width(80)
  box1.set_Width(50)
  box1.set_Width(45)
  box1.set_Width(100)

}


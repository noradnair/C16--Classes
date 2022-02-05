class Box
  {
    constructor(x,y,w)
    {
      this.x =x;
      this.y = y;
      this.w = w;
      this.h = 50;
    }
    
    show()
    {
      rect(this.x,this.y,this.w,this.h)
    }
    
    //write function to set the width of the box
    set_Width(w){
      this.w=w
    }
  }

  

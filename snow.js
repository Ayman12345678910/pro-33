class Snow {
constructor(){
this.body= Bodies.circle(200,20,20)
World.add(world, this.body)
this.image = loadImage("snow4.webp")    
}    
display(){
image(this.image, this.body.position.x,this.body.position.y, 100,100)    
}
}
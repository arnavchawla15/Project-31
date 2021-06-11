class Mango{
	constructor(x,y,Diametre){
		var options={
			isStatic:true,
			'restitution' :0.5,
            'friction' :1,
			}
			this.diametre = diametre;
			this.body=Bodies.circle(x, y, diametre, options);
			this.image=loadImage("mango.png");
		    World.add(world, this.body);
	}

	display()
	{
		var mangoPos=this.body.position;	
		push()
		translate(mangoPos.x, mangoPos.y);
		rotate(this.body.angle)
		fill(255,0,255)
		imageMode(CENTER);
		ellipseMode(CENTER);
		image(this.image, 0,0,this.r*2, this.r*2)
		pop()
 }
}
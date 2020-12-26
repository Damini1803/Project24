class Paper
{
	constructor(x,y,r)
	{
		var options={
			isStatic:false,
			restitution:0.3,
			friction:0,
			density:1.2

			
			}
		
		
		this.x=x;
		this.y=y;
		this.r=r;
		
		this.image=loadImage("paper.png");
		this.body=Bodies.circle(x,y,r, options)
		World.add(myworld, this.body);

	}
	display()
	{
			
			var pos=this.body.position;		

			
			push()
			translate(pos.x, pos.y);
			//noStroke()
			//strokeWeight(3)
			//stroke("black")
			fill("yellow")
			rectMode(CENTER);
			
			ellipseMode(RADIUS)
			imageMode(CENTER)
			image(this.image,0,0,this.r,this.r)
			//ellipse(0,0,this.r, this.r);
			pop()
			
	}

}
class Dustbin
{
	constructor(x,y,w,h)
	{
		var options={
			isStatic:true			
			}
		

		
		this.width=w;
		this.height=h;
		
		this.body=Bodies.rectangle(x, y, w, h,options);
 		World.add(myworld, this.body);

	}
	display()
	{
			
			var pos=this.body.position;		

			//push()
			//translate(Pos.x, Pos.y);
			rectMode(CENTER)
			noStroke()
			//strokeWeight(4);
			fill("darkorange")
			
			rect(pos.x,pos.y,this.width,this.height);
			//image(this.image,);
			//pop()
			
	}

}
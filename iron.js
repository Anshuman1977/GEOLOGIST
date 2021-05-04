class Iron{
	constructor(x,y,w,h)
	{
	// assign options to the rubber ball
    var options = {
restitution:0.1,density:100,friction:0.2

    }
		
		this.w=w;
        this.h=h;
		this.body=Bodies.rectangle(x,y,w,h, options)
		World.add(world, this.body);

	}
	display()
	{
			var rubberpos=this.body.position;		
			push()
			translate(rubberpos.x, rubberpos.y);
			rectMode(CENTER)
			strokeWeight(4);
			stroke("yellow");
			fill("red");
			//draw the ellipse here to display the rubber ball
			rect(0,0,this.w,this.h)
			pop()
	}

}
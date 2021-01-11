class dustbin
{
	constructor(x,y)
	{
		this.x=x;
		this.y=y;
		this.dustbinWidth=200;
		this.dustbinHeight=213;
		this.wallThickness=20;
		
		this.image=loadImage("dustbingreen.png")
		
		this.downBody=Bodies.rectangle(this.x, this.y, this.dustbinWidth, this.wallThickness, {isStatic:true})
		this.leftWallBody=Bodies.rectangle(this.x-this.dustbinWidth/2, this.y-this.dustbinHeight/2, this.wallThickness, this.dustbinHeight, {isStatic:true})
		this.rightWallBody=Bodies.rectangle(this.x+this.dustbinWidth/2, this.y-this.dustbinHeight/2, this.wallThickness, this.dustbinHeight, {isStatic:true})
		
		World.add(world, this.downBody)
		World.add(world, this.leftWallBody)
		World.add(world, this.rightWallBody);

	}
	display()
	{
			var posBottom=this.downBody.position;
			var posLeft=this.leftWallBody.position;
			var posRight=this.rightWallBody.position;

			
            //positions for left body
			push()
			translate(posLeft.x, posLeft.y);
			rectMode(CENTER)
			angleMode(RADIANS)
			fill("white")
			rotate(this.angle)
			pop()


            //positions for right body
			push()
			translate(posRight.x, posRight.y);
			rectMode(CENTER)
			angleMode(RADIANS)
			fill("white")
			rotate(-1*this.angle)
			pop()
			
			//positions for bottom body
			push()
			translate(posBottom.x, posBottom.y+10);
			rectMode(CENTER)
			//strokeWeight(4);
			angleMode(RADIANS)
			fill("white")
			imageMode(CENTER);
			image(this.image, 0,-this.dustbinHeight/2,this.dustbinWidth, this.dustbinHeight)
			pop()
			
	}

}
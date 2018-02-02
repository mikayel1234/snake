function randomCoord()
{
	var a=Math.floor(Math.random()*2);
	if(a==0)
	{
		if(randX<=width/2)
		{
			randX++;
		}
		else 
		{
			randX--;
		}
	}
	else 
	{
		if(randY<=height/2)
		{
			randY++;
		}
		else 
		{
			randY--;
		}	
	}
}
function paint()
{
	
	for(var y=0;y<matrix.length;y++)
	{
		for(var x=0;x<matrix[y].length;x++)
		{
			if(matrix[y][x]==0)
			{
				fill("#acacac");
				rect(x*20,y*20,20,20);
			}
			else if(matrix[y][x]==2)
			{
				fill("red");
				rect(x*20,y*20,20,20);
			}
			else if(matrix[y][x]==1)
			{
			
				fill("blue");
				rect(x*20,y*20,20,20);
			}
			
		}
	}
}
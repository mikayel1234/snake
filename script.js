var reload1=0;
var utel=0;
var key=0;
var matrix=[];
var height=30;
var width=30;
var direction=0;
var snakeCoord=[];
var randX=Math.floor(Math.random()*width);
var randY=Math.floor(Math.random()*height);
for(var y=0;y<height;y++)
{
	matrix.push([]);
	for(var x=0;x<width;x++)
	{
		matrix[y][x]=0;
	}
}
if(randX>=matrix[0].length-4)
{
	randX-=5;
	matrix[randY][randX]=1;
	matrix[randY][randX+1]=1;
	matrix[randY][randX+2]=1;
}
else
{
	matrix[randY][randX]=1;
	matrix[randY][randX+1]=1;
	matrix[randY][randX+2]=1;
}


for(var y=0;y<matrix.length;y++)
{
	for(var x=0;x<matrix[y].length;x++)
	{
		 if(matrix[y][x]==1)
		{
			snakeCoord.push(new Snake(x,y));
			
		}
		
	}
}
function setup()
{
	
	createCanvas(matrix[0].length*20,matrix.length*20);
	background("#acacac");
	noStroke();
	frameRate(10)

	
}
function rightSnake()
{
	snakeCoord[0].right(snakeCoord[snakeCoord.length-1].x,snakeCoord[snakeCoord.length-1].y)
}
function leftSnake()
{
	snakeCoord[0].left(snakeCoord[snakeCoord.length-1].x,snakeCoord[snakeCoord.length-1].y)
}
function downSnake()
{
	snakeCoord[0].down(snakeCoord[snakeCoord.length-1].x,snakeCoord[snakeCoord.length-1].y)
}
function upSnake()
{
	snakeCoord[0].up(snakeCoord[snakeCoord.length-1].x,snakeCoord[snakeCoord.length-1].y)
}
var a1;
var a2;
var a3;
var a4;
var presskey=39;
var move=200;
rightSnake()
a1=setInterval(rightSnake,move);
$('html').keyup(function(e){
	key=1;
	if(e.which==40||e.which==39||e.which==37||e.which==38)
	{
		clearInterval(a1);
		clearInterval(a2);
		clearInterval(a3);
		clearInterval(a4);
	}
	if(e.which==39)
	{	
		if(presskey==37)
		{
			upSnake()
			a3=setInterval(upSnake,move);
			presskey=38;
		}
		else if(presskey==39)
		{
			downSnake()
			a2=setInterval(downSnake,move);
			presskey=40;
		}
		else
		{	
			rightSnake()
			 a1=setInterval(rightSnake,move);
		 presskey=e.which;
		}
		
	}
	else if(e.which==40)
	{
		if(presskey!=38)
		{
			downSnake()
			a2=setInterval(downSnake,move);
			presskey=e.which;
		}
		else if(presskey==38)
		{
			upSnake()
			a3=setInterval(upSnake,move);
			presskey=38;
		}
	}
	else if(e.which==38)
	{
		if(presskey!=40)
		{
			upSnake()
			a3=setInterval(upSnake,move);
			presskey=e.which;
		}
		else
		{
			downSnake()
			a2=setInterval(downSnake,move);
			presskey=40;
		}
		 

	}
	else if(e.which==37)
	{
		if(presskey==39)
		{
			upSnake()
			a3=setInterval(upSnake,move);
			presskey=38;
			console.log(2)
		}
		else if(presskey==37)
		{
			downSnake()
			a2=setInterval(downSnake,move);
			presskey=40;
		}
		
		else
		{
			leftSnake()
			a4=setInterval(leftSnake,move);
			presskey=e.which;
		}
	}
}).keydown(function(e){
	key=0;
	
});
function sn()
{
	for(var i=0;i<snakeCoord.length-1;i++)
	{
		if(snakeCoord[snakeCoord.length-1].x==snakeCoord[i].x&&snakeCoord[snakeCoord.length-1].y==snakeCoord[i].y)
		{
			if(reload1==0)
			{
				location.reload();
				reaload1++;
			}
		}
	}
}
count=-1;
function draw() {

	if(snakeCoord[snakeCoord.length-1].x<0||snakeCoord[snakeCoord.length-1].x>matrix[0].length||snakeCoord[snakeCoord.length-1].y<0||snakeCoord[snakeCoord.length-1].y>matrix.length)
	{
		if(reload1==0)
			{
				location.reload();
				reaload1++;
			}
	}
	else
	
	utel=0;
	for(var i=0;i<matrix.length;i++)
	{
		for(var j=0;j<matrix[i].length;j++)
		{
			if(matrix[i][j]==2)
			{
				
				utel=1
			}
		}
	}
	
	if(utel==0)
	{
		var randX1;
		var randY1;
		var enter=true;
		while(true)
		{
			randX1=Math.floor(Math.random()*30);
			randY1=Math.floor(Math.random()*30);
			for(var i=0;i<snakeCoord.length;i++)
			{
				if(snakeCoord[i].x==randX1&&snakeCoord[i].y==randY1)
				{
					enter=false;
					break;
				}
				
			}
			if(enter)
			{
				break;
			}
		}
		matrix[randY1][randX1]=2
		utel=1
		var x=snakeCoord[0].x;
		var y=snakeCoord[0].y;
		snakeCoord.unshift(new Snake(x,y));
		matrix[y][x]=1;
		count++;
		$("p").remove()
		$("<p/>").text(count).css({"color":"red","font-size":"30px"}).appendTo("body");
	}
	sn();
	paint();

}


class Snake
{
    constructor(x,y)
    {
        this.x=x;
        this.y=y;
    }
    right(x,y)
    {   
       
        matrix[this.y][this.x]=0;
        snakeCoord.push(snakeCoord[0])
        snakeCoord.splice(0,1);
        direction=1;
        this.x=x+1;
        this.y=y;
        matrix[this.y][this.x]=1;
    }
    left(x,y)
    {   
       
        matrix[this.y][this.x]=0;
        snakeCoord.push(snakeCoord[0])
        snakeCoord.splice(0,1);
        this.x=x-1;
        direction=2;
        this.y=y;
        matrix[this.y][this.x]=1;
    }
    up(x,y)
    {
        matrix[this.y][this.x]=0;
        snakeCoord.push(snakeCoord[0])
        snakeCoord.splice(0,1);
        this.x=x;
        this.y=y-1;
        direction=3;
        matrix[this.y][this.x]=1;
    }
    down(x,y)
    {
        matrix[this.y][this.x]=0;
        snakeCoord.push(snakeCoord[0])
        snakeCoord.splice(0,1);
        this.x=x;
        this.y=y+1;
        direction=4;
        matrix[this.y][this.x]=1;
    }
};
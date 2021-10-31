let i = 0;
let j = 0;

const rows = 30;
const cols = 30;
const resFactor = 20;
const neighbourhood = 1; ///<go one cell far 
/*
Having a canvas of 600x600 = rows^2
results in a grid of 30 by 30 squares
if the dimensions of a square is 20px
 */

//declare an array as grid 
let grid = Array(rows).fill()
.map(entry => Array(cols).fill(0));
function setup() {
  createCanvas(600, 600);
  grid[10][10]=1;
  grid[13][13]=1;
  grid[12][11]=1;

}


function draw() {
  background(100);

  //gird = next;
  for(let i = 0; i<rows; i++){
    for(let j = 0; j<cols; j++){
      if(grid[i][j]==0){
        fill(200);
        stroke(1);
        rect(i*resFactor,j*resFactor,resFactor,resFactor);
      } else{
        fill(50);
        stroke(1);
        rect(i*resFactor,j*resFactor,resFactor,resFactor);
      }
    }
  }


function getNeighboursAlive(){
  let count = 0;
  for(let i = 0; i<rows; i++){
    for(let j = 0; j<cols; j++){
      count += grid[i][j];///< state is either 0 or 1
      
    }
  }

  return count;
}

// if(j==600){
//   j=0;
//   if(i==600){i=0;}
// }
// fill(200, 200, 150);
// noStroke();
// rect(i,j,20,20);
// i+=2;
// j+=2;

}
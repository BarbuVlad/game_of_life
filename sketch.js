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

 // getNeighboursAlive(grid,13,13);

}


function draw() {
  background(100);

  //Step 1: draw the grid
  
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
  //Step2: compute the new grid 
  /*Rules:
  State is 1:
    ==3 alive cells => stay alive
    less thatn 2 cells alive => die underpopulation
    more than 3 cells alive => die overpupulation*/
    let next_grid = Array(rows).fill()
      .map(entry => Array(cols).fill(0));
    for(let i = 0; i<rows; i++){
      for(let j = 0; j<cols; j++){
        //for this cell get alive neighbours 
        let count = getNeighboursAlive(grid, i, j);
        if(grid[i][j] == 1){
          if(count<=2 || count>3){
            next_grid[i][j] == 0;
          }
        } else{
          if(count==3){
            next_grid[i][j] == 1;
        }
      
      }//is 0 
        //put new cell state in next_grid as same i j 
      }
    }


  //Step3: make curr grid = next grid and redraw
  gird = next_grid;



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

function getNeighboursAlive(grid, x, y){
  /* TODO: adapt fucntion for variabile neighbourhood
    neighbourhood is 1 (see global var)
    => for i,j  look for cells: 
      -1-1 |  0-1 | 1-1
      -1 0 |  i j | 1 0
      -1 1 |  0 1 | 1 1 

  */
  let count = 0;
  for(let i = -1; i<2; i++){
    for(let j = -1; j<2; j++){
      if(x+i==-1 || x+i==cols || y+j==-1 || y+j==rows){
        count+=0;
      }else{
        count += grid[x+i][y+j];///< state is either 0 or 1
      }
    }
  }
  count -= grid[x][y]; //don't count self
  return count;
}
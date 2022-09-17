// Result or Tie - Tic Tac Toe Ended
// Description

// You are given a 3 * 3matrix(2d-array) that represents the final situation of a Tic Tac Toe.

// Your task is to write a program that finds out the winner in case the match ended in a win. If the winner is 'x', printx.

// If the winner is 'o', printo.

// In case the match ended in a tie, printTie.


// Input
// InputFormat

// The input contains 3 lines where each line has 3 space separated characters which represent the final status of tic tac toe

// Constraints

// The input contains either of the 2 alphabets: 'x' and 'o'


// Output
// Print Tie/x/o depending on the end result of the game.


// Sample Input 1 

// x o x
// o x x
// o o o
// Sample Output 1

// o
// Hint

// owins as per tic tac toe.

function ticTacToe(matrix){
    let win="tie";
    for(i in matrix){
        if((matrix[i][0]==matrix[i][1]) && (matrix[i][0]==matrix[i][2])){
            win=matrix[i][0];
            break;
        }
         if((matrix[0][i]==matrix[1][i]) && (matrix[1][i]==matrix[2][i])){
            win=matrix[0][i];
            break;
         }
    }
    
     if((matrix[0][0]==matrix[1][1]) && (matrix[2][2]==matrix[1][1])){
            win=matrix[0][0];
            
     
   }
    if((matrix[0][2]==matrix[1][1]) && (matrix[0][2]==matrix[2][0])){
            win=matrix[0][2];
   
   
   }
   console.log(win);
   
   }
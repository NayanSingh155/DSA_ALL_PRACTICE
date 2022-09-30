// World Cup Final Ended
// Description

// You are given three values, stored in variable with the following names

// NzScore, NzSuperOver, NzFours

// On the next line, you are given three more values stored in the variable with the following names

// EngScore, EngSuperOver, EngFours

// If the value of NzScore > EngScore, print "New Zealand"

// Else if the value of NzScore < EngScore, print "England"

// Else If the value of NzSuperOver > EngSuperOver, print "New Zealand"

// Else if the value of NzSuperOver < EngSuperOver, print "England"

// Else if the value of NzFours > EngFours, print "New Zealand"

// Else if the value of Nzfours < EngFours, print "England"

// All the names, should be printed without quotes


// Input
// Input Format

// First line contains the three discussed parameter for New Zealand

// Second line contains three discussed parameters for England

// Constraints

// All parameters < 10000


// Output
// Output Format

// Output "England" (without quotes) if England wins the game, else print "New Zealand" if New Zealand wins the game.


// Sample Input 1 

// 241 15 21
// 241 15 26
// Sample Output 1

// England
// Hint

// In the sample test case, the value ofNzFours = 21and that ofEngFours = 26. Therefore, the output is England

function worldCupFinal(NzScore, NzSuperOver, NzFours, EngScore, EngSuperOver, EngFours) {
    //Write code here
    if(NzScore > EngScore)
    {
        console.log("New Zealand")
    }
    else if(NzScore < EngScore)
    {
        console.log("England");
    }
    else if( NzSuperOver > EngSuperOver)
    {
        console.log( "New Zealand");
    }
    else if(NzSuperOver < EngSuperOver)
    {
        console.log("England");
    }
    else if( NzFours > EngFours)
    {
        console.log("New Zealand");
    }
    else if(NzFours < EngFours)
    {
        console.log("England");
    }
    
}
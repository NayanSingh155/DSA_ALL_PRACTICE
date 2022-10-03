// Medicine of Life Ended
// Description

// The vaccine for corona virus is in short supply, therefore, the Scientists at the University of Masai, came up with certain number of chemical compounds which on combining can make an alternative medicine for Corona Virus

// But, all these chemical compounds have different reactive power, and for the vaccine to be effective, two chemical compounds need to be mixed such that the sum of total reactivity of the two compounds is equal toK.

// The compounds are kept strictly increasing order of their reactivity. You have to find out if there are two compounds whose combine reactivity is equal toKor not.


// Input
// The first line of the input containsT, the number of test cases.

// The first line of each test case, containsN, the number of compounds, andKis the required reactivity

// The next line containsNspace separated integers, indicating the reactivity of individual compounds

// 1 <= T <= 10

// 2 <= N <= 1000, 2 <= B <= 3*10^5

// 1 <= Ai <= 10^5


// Output
// For each test case, printPossible, if there are two compounds for whom the sum of individual reactivity isK, else printImpossible, on a new line.


// Sample Input 1 

// 2
// 5 7
// 1 2 3 4 5
// 5 12
// 1 2 3 4 5
// Sample Output 1

// Possible
// Impossible
// Hint

// In the first test case, the sum of compounds with reactivity 2 and that with reactivity 5 is equal to K = 7, therefore, the answer isYes

// In the second test case, no two compounds have the sum equal toK = 12. Therefore, the answer isNo.
function runProgram(input) {
    input = input.trim().split("\n");
    let tc = +input[0];
    let line=1;
    for (let i = 0; i <tc; i++) {
        let[N,K] = input[line].split(" ").map(Number);
        line++;
        let arr = input[line].split(" ").map(Number);
        line++;
        // console.log(N, K, arr)
        MedicineOfLife(N, K, arr);
    }
}
function MedicineOfLife(N, K, arr) {
    let flag = false;
    let i = 0;
    let j = N - 1;

    while (i < j) {
        if (arr[i] + arr[j] == K) {
            flag = true;
            break;
        }
        else if (arr[i] + arr[j] > K) {
            j--;
        }
        else {
            i++;
        }
    }
    if (flag) {
        console.log("Possible");
    }
    else {
        console.log("Impossible");
    }
}

if (process.env.USER === "") {
    runProgram(``);
} else {
    process.stdin.resume();
    process.stdin.setEncoding("ascii");
    let read = "";
    process.stdin.on("data", function (input) {
        read += input;
    });
    process.stdin.on("end", function () {
        read = read.replace(/\n$/, "");
        read = read.replace(/\n$/, "");
        runProgram(read);
    });
    process.on("SIGINT", function () {
        read = read.replace(/\n$/, "");
        runProgram(read);
        process.exit(0);
    });
}
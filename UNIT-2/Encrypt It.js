// Encrypt It Ended
// Description

// Encryption is the process of converting a plaintext message into ciphertext which can be decoded back into the original message. An encryption algorithm along with a key is used in the encryption and decryption of data. There are several types of data encryptions which form the basis of network security. Encryption schemes are based on block or stream ciphers.

// Today, your task is to encrypt and print the encrypted string. You will be given a single line which contains alphabets, numbers and symbols, followed by a number K. You need to encrypt it in a way such that every character in the string is rotated by the given fixed number K.

// Only encrypt Alphabets and Numbers. (A-Z, a-z, and 0-9) . All Symbols, such as - , ; %, should remain unencrypted.

// Look at the sample test case for better understanding.


// Input
// Input Format

// First line of input contains a single line of string 'S'

// Second line contains the number, encrypt key  K

// Constraints

// S contains alpha, numeric and symbols

// 0<=N<=1000




// Output
// Print the encrypted string.


// Sample Input 1 

// All-convoYs-9-be:Alert1.
// 4
// Sample Output 1

// Epp-gsrzsCw-3-fi:Epivx5.
// Hint

// Sample 1 Explanation

// A becomes E, Y becomes C, 9 becomes 3,

// -, . unchanged.

function runProgram(input){
    input = input.trim().split("\n");
    let N = Number(input[1]);
    let str = input[0].split("");
    let capital= "abcdefghijklmnopqrstuvwxyz";
    let small = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let digit = "01234567890";
    for(let i=0; i<str.length; i++)
    {
        for(let j=0; j<small.length; j++)
        {
            if(str[i]==small[j])
            {
                if(j+N>=26)
                {
                    str[i]=small[(j+N)%26];
                }
                else
                {
                    str[i]=small[j+N];
                }
                break;
            }
            else if(str[i]==capital[j])
            {
                if(j+N>=26)
                {
                    str[i]=capital[(j+N)%26];
                }
                else
                {
                    str[i]=capital[j+N];
                }
                break;
            }
        }
        for(let k = 0; k < digit.length; k++)
        {
            if(str[i] == Number(digit[k]))
            {
                if(k+N> 9)
                {
                    str[i]=digit[(Number(digit[k])+N)%10];
                }
                else
                {
                    str[i]=digit[Number(digit[k])+N];
                }
                break;
            }
        }
    }
    str = str.join("")
    console.log(str)
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
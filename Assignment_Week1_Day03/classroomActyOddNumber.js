
//Classroom Activity

//Print odd numbers till 25

function printOddNumbers() {
    for (let i = 0; i <= 25; i++) {
        // i & 1 returns 1 if the number is odd, and 0 if it is even
        if (i & 1) {
            console.log(i);
        }
    }
}

printOddNumbers();
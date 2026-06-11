const readline = require('readline');

function checkValue() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.question('Enter your Value: ', (inputValue) => {
        
        // Convert string input to a number for comparison
        const num = Number(inputValue);

        if (num > 0) {
            console.log("Your Value is Positive");
        } 
        else if (num < 0) { 
            console.log("Your Value is Negative");
        } 
        else {
            console.log("Your Value is Zero");
        }

        rl.close(); 
    }); 
}

checkValue();
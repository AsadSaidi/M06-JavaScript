function printPrimos(){
    let min = prompt("Introduce un mínim:");
    let max = prompt("Introduce un màxim:");

    for (let i = min; i <= max; i++) {
        let j = i - 1;
        let primer = true;

        do {
            if (i % j === 0) {
                primer = false;
            }
            j--;
        } while (primer && j > 1);

        if (primer) {
            console.log(i);
        }
    }
}




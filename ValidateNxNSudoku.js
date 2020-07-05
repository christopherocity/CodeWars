var Sudoku = function(data) {

    let valid = true;
    let expectedDigitTotal = (data.length * (data.length+1)) / 2;
    let cellSize = Math.sqrt(data.length);
    let cellTotal = 0;

    for (let x = 0; x < cellSize; x++) {
        for (let y = 0; y < cellSize; y++) {
            cellTotal += data[x][y];
        }
    }

    if(cellTotal !== expectedDigitTotal) {
        valid = false;
    }

    for (let n = 0; n < data.length; n++) {

        let rowSum = 0;
        let columnSum = data
            .map(list => list[n])
            .reduce((a, b) => a + b, 0);
        if (columnSum !== expectedDigitTotal) {
            valid = false;
        }

        for (let i = 0; i < data[n].length; i++) {

            if (!Number.isInteger(data[n][i])) {
                valid = false;
            }

            rowSum += data[n][i];
            if(i === data[n].length -1) {
                if (rowSum !== expectedDigitTotal) {
                    valid = false;
                }
            }
        }
    }


    return {
        isValid: function() {
            return valid;
        }
    };
};

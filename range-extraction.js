function solution(list){

    let ranges = [];

    for (let i = 0; i < list.length; i++) {

        let currentDigit = list[i];

        let sequence = [currentDigit];

        for (let j = i+1; j < list.length; j++) {

            if (currentDigit + 1 === list[j]) { // if there is a increment sequence
                sequence.push(list[j]);
                currentDigit = list[j];
            } else {
                break;
            }

        }

        const rangeStart = sequence[0];
        const rangeEnd = sequence[sequence.length - 1];

        if (sequence.length < 3) {
            ranges.push(`${rangeStart}`);
        } else {
            ranges.push(`${rangeStart}-${rangeEnd}`);
            i = list.indexOf(rangeEnd);
        }

    }

    return ranges.join(',');
}

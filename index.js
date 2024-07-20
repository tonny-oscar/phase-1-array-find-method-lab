function superbowlWin(record) {
    const winningRecord = record.find(entry => entry.result === 'W');
    return winningRecord ? winningRecord.year : undefined;
}

const superBowlRecords = [
    { year: "2016", team: "Denver Broncos", result: "W" },
    { year: "2015", team: "Denver Broncos", result: "W" },
    { year: "2013", team: "Denver Broncos", result: "L" },
];

console.log(superbowlWin(superBowlRecords)); 
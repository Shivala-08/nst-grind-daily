if (input !== '') {
    const score = parseInt(input, 10);
    
    if (score >= 90) {
        console.log('A');
    } else if (score >= 75) {
        console.log('B');
    } else if (score >= 60) {
        console.log('C');
    } else {
        console.log('D');
    }
}
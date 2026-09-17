function runNTimes(fn, n) {
    for (let i = 0; i < n; i++) {
        console.log(JSON.stringify(fn()));
    }
}
function test_divisors(low, high) {
    for (let i = low; i <= high; i++) {
        process.stdout.write(i + " ");

        if (i % 3 == 0) {
            process.stdout.write("div3 ");
        }
    }
}
async function solve(userName, ms) {
    // 1. Implement delay(ms) using setTimeout and resolving with userName
    function delay(ms) {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(userName);
            }, ms);
        });
    }

    // 2. Implement async function getNameAfterDelay() using closure to access userName and ms
    async function getNameAfterDelay() {
        const name = await delay(ms);
        return name;
    }

    // 3 & 4. Call getNameAfterDelay() using await and print the returned value
    const result = await getNameAfterDelay();
    console.log(result);
}
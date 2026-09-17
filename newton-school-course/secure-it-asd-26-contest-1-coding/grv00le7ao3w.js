async function callAsyncOperation() {
    try {
        while (true) {
            const message = await asyncOperation();
            console.log(message);
        }
    } catch (error) {
        console.log(error);
    }
}

callAsyncOperation();
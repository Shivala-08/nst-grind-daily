function calculateBill(amount, callback) {
    return callback(amount);
}

function applyGST(amount) {
    const gst = amount * 0.18;
    return amount + gst;
}
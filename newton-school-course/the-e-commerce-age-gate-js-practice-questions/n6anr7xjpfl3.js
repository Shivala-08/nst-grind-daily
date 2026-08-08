function findAdultCustomers(ages) {
    // 1. Create a new, empty array
    let adultList = [];
    
    // 2. Loop through each value in the input array
    for (let i = 0; i < ages.length; i++) {
        // 3. If an age is 18 or older, add it to the adultList array
        if (ages[i] >= 18) {
            adultList.push(ages[i]);
        }
    }
    
    // 4. After the loop finishes, return the adultList array
    return adultList;
}
function arrayProperties(arr1, arr2) {
    // 1. Concatenate Arrays: arr2 followed by arr1
    let arr3 = arr2.concat(arr1);
    
    // 2. Push and Print: push the entire arr2 array as a single element
    arr3.push(arr2);
    console.log(arr3);
    
    // 3. Pop and Reverse: remove the last item and reverse the array
    arr3.pop();
    arr3.reverse();
    console.log(arr3);
    
    // 4. Find and Print Index: last index of "orange"
    console.log(arr3.lastIndexOf("orange"));
    
    // 5. Slice and Print Length: first item up to the third item
    let slicedArr = arr3.slice(0, 3);
    console.log(slicedArr.length);
    
    // 6. Join and Print: join elements separated by commas
    console.log(slicedArr.join(","));
}
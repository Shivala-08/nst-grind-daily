function extract(arr) {
    return arr
        .map(innerArray=>innerArray.filter(num =>num%2==0))
        
}
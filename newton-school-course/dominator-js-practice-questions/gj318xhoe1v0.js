function extract(arr) {
    return arr
        .map(innerArray=>innerArray.filter(num =>num%2==0))
        .filter(innerArray => innerArray.length > 0 && innerArray.length % 2 === 0)
}
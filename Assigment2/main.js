const testArray = [1, 5, 7, 9, 8, 6, 3, 2, 7]
function merge(a, b){
    let c = []
    let i = j = k = 0
    while(i < a.length && j < b.length){
        if(a[i] < b[j])
            c[k++] = a[i++]
        else 
            c[k++] = b[j++]
    }
    while(i < a.length)
        c[k++] = a[i++]
    while(j < b.length)
        c[k++] = b[j++]
    return c
}

function mergeSort(arr){
    if(arr.length === 1)
        return arr
        let mid = Math.floor(arr.length/2)
        return merge(mergeSort(arr.slice(0, mid)), mergeSort(arr.slice(mid)))
}
console.log(mergeSort(testArray))

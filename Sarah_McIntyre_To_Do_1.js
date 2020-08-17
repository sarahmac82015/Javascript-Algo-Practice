//1.  Given an array and an additional value, insert this value at the beginning of the array. Do this without using any built-in array methods.
function pushFront(arr,val){
    for(var i=arr.length-1; i>=0; i--){
        console.log(arr[i]);
        arr[i+1] = arr[i]
    }
    arr[0] = val;
}
var testArr =[2,4,6,8];
pushFront(testArr, 10);
console.log(testArr)

//2. Given an array, remove and return the value at the beginning of the array. Do this without using any built-in array methods except pop().
function popFront(arr){
    for(let i=1; i<arr.length; i ++){
        arr[i-1] = arr[i];
    }
    arr.pop();
}
let arr= [1,2,3,4]
popFront(arr);
console.log(arr);

//3. Given an array, index, and additional value, insert the value into array at given index. Do this without using built-in array methods. You can think of pushFront(arr,val) as equivalent to insertAt(arr,0,val).
function insertAt(arr, index, val){
    let temp=arr[arr.length-1];
    for(let i= arr.length-1; i>index; i --){
        arr[i] = arr[i-1];
    }
    arr[index]= val;
    arr[arr.length]= temp;
}
let array =[1,2,3,4,5];
insertAt(array);
console.log(array);

//4. Given an array and an index into array, remove and return the array value at that index. Do this without using built-in array methods except pop(). Think of popFront(arr) as equivalent to removeAt(arr,0).
function removeAt(arr, idx){
    toRemove = arr[idx];
    for(let i=1; i<arr.length; i ++){
        arr[i] = arr[i+1];
    }
    arr.length = arr.length-1;
    return toRemove;
    console.log(toRemove);
}
removeAt([1,2,3,4,5], 2);

// 5. Swap positions of successive pairs of values of given array. If length is odd, do not change the final element. For [1,2,3,4], return [2,1,4,3]. For example, change input ["Brendan",true,42] to [true,"Brendan",42]. 
// As with all array challenges, do this without using any built-in array methods.
function swapPairs(arr) {
	for(let i = 0; i < arr.length - 1; i = i + 2) {
		let temp = arr[i];
		arr[i] = arr[i + 1];
		arr[i + 1] = temp;
	}
}
let arr = [1,2,3,4];
swapPairs(arr);
console.log(arr);

// 6. Given a sorted array, remove duplicate values. Because array elements are already in order, all duplicate values will be grouped together. 
function removeDuplicates(arr) {
	let newArr = [];
	for(let i = 0; i < arr.length - 1; i++) {
		if(arr[i] !== arr[i+1]) 
			newArr.push(arr[i])
	}
	return newArr;
    console.log(newArr);
}
removeDuplicates([1,1,2,3,4,4]);
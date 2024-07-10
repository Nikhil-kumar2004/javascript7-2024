# %DebugPrint(Myarr)
- - it a way allowed in v8-debug version of js only and permission is also required that tells us about the internal details of array
and there we know that arrays are of 2 types
- packed and holey.
(internal representations)
- There are two types of arrays: holey arrays and continuous arrays. These arrays can contain three types of elements: SMI (Small Integer), Packed Element, and Double.

1. **Holey Array**: A holey array is an array that contains missing or empty elements. For example, [1, 2, , 4] is a holey array because it has a missing element. Holey arrays are less optimized for performance.

2. **Continuous Array**(PACKED): A continuous array is an array that does not contain missing or empty elements. For example, [1, 2, 3, 4] is a continuous array because it has no missing elements. Continuous arrays are more optimized for performance.

- In terms of optimization, continuous arrays are more efficient and optimized for various operations compared to holey arrays.

##
- const arr=[1,2,3,4,5]
- packed_smi_elements is the best type and the most optimized.(only no. can be taken inside not even decimal)

- - arr.push(6.0)
- - packed_double_elements

- arr.push('7')
- packed_elements (mix types)

# once i pushed 6.0 into the array it's downgraded into packed_double and even if i delete 6.0, still now upgradation is not possible and will remain packed_double_elements.
- upgradation is not possible, downgrade is possible.

- - arr[10]=15
- - holey_elements. (multiple types with holes)

- - console.log(arr[9])
-bound check
-hasOwnProperty(arr,9)
-hasOwnProperty(arr.prototype,9)
-hasOwnProperty(Object.prototype,9)  - prototypal nature ,or andar jata rehta hai

- hasownproperty is the most expensive check. so, holey arrays are least optimized.
SMI > DOUBLE > PACKED
H_SMI > H_DOUBLE > H_PACKED

- const arr=new Array(3)  //holey_smi  -->best optimization-->3 holes
- arr[0]='1'  -->holey_elements.
- arr[1]='2'

- - const arr=[]   //packed_smi
- - arr.push('1')  -->packed_elements

- arr.push(NaN)  /packed_double  ->if no holes
- arr.push(Infinity)   /packed_double  ->if no holes

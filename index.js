// SORU 1 => [8,4,6,2,3] => output => [4,2,4,2,3] --> birbirinden cıkararak ilerleme metodları
// const solution = (arr) => {
// return arr.map((_,i) => {
//     for(let j = i+1; j<arr.length; j++){
//         if(arr[i] > arr[j]){
//             arr[i] = arr[i] - arr[j];
//             break;
//         }
//     }
//     return arr[i]
// })
// }
// console.log(solution([8,4,6,2,3]));

// SORU 2 => [[4,3,2,-1],[3,-2,-1,6],[5,-4,0,-1]] kaç    tane -li eleman var bunu veren algoritmayı bul.

// const solution = (arr) => {
//     return arr.map(row=>row.filter(r=>r < 0).length).reduce((a,b) => a + b , 0)
// }
// console.log(solution([[4,3,2,-1],[3,-2,-1,6],[5,-4,0,-1]]));

// SORU 3 => [555,901,899,1276,12] => çift basamaklı kaç sayı oldugunun sonucunu dönen algoritma

// const solution = (arr) => {
//     return arr.filter(num => num.toString().length % 2 == 0).length
// }
// console.log(solution([555,2333,901,899,1276,12]));

//SORU 4 => inputdan n = 5 => 5 elemanlı dizi yap ama toplamları 0 olsun mesela [1,2,0,-2,-1]

// const solution = (num) => {
//     let newArr = []
//     newArr.push(0)
//     for (let i = 1; i <= num/2; i++) {
//         newArr.push(i)
//         newArr.unshift(-i)       
//     }
//     return newArr
// }
// console.log(solution(5));

// SORU 5 => n = 434 => 4*3*4 => 48 , 4+3+4 = 11 result => 48-11 = 37 cıktısını veren fonksiyon

// const solution = (num) => {
//     let carpim = 1;
//     let toplam = 0;
//     let arrayNumber = num.toString().split('')   
//     for(let i = 0; i <arrayNumber.length; i++){
//         carpim *= parseInt(arrayNumber[i])
//         toplam += parseInt(arrayNumber[i])
//     }
//     return carpim - toplam
// }
// console.log(solution(434));

// SORU 5 ALTERNATIF YAPIM

// const solution = (num) => {
//     let arrayNumber = num.toString().split('').map(Number).reduce((a,b) => a*b,1) -
//     num.toString().split('').map(Number).reduce((a,b) => a+b,0)
//     return arrayNumber
// }
// console.log(solution(434));

// SORU 6 nums = [1,2,3,4,4,3,2,1] , n = 4 output => [1,4,2,3,3,2,4,1] => numsın 4 birim ardındaki degerini koy

// const solution = (arr,num) => {
//     let newArr = []
//     for (let i = 0; i < num; i++) {
//         newArr.push(arr[i])
//         newArr.push(arr[i + num])      
//     }
//     return newArr
// }
// console.log(solution([1,2,3,4,4,3,2,1],4));

// SORU 7 => input [-2,1,-3,4,-1,2,1,-5,4] => output => -4 [-2,1,-3,4,-1,2,-5] tekrar eden degerleri sil ve topla sonuc -4 olsun

// const solution = (arr) => {
//     let newArr = [... new Set(arr)] // Set methodu tekrarlayan degerleri cıkartıp bize hazır şekilde sonucu verdi.
//     return newArr.reduce((a,b) => a+b ,0)
// }
// console.log(solution([-2,1,-3,4,-1,2,1,-5,4]));

// SORU 8 => input x=123 output x = 321 input x = -123 output x = -321 input x = 120 output x = 21

// const solution = (num) => {
//     return num < 0 ?  Number(-(num.toString().split('').filter(a=>a != "-").reverse().join(''))) : Number(num.toString().split('').filter(a=>a != "0").reverse()
//     .join(''))
// }
// console.log(solution(12020));

// SORU 9 => [2,7,11,15] , 9 => herhangi iki elemanın toplamı 9 a eşitse [0,1] şeklinde return etsin

// const solution = (arr,num) => {
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = 0; j < arr.length; j++) {
//            if(arr[i] + arr[j] == num && i != j){
//             return [i,j]
//            }            
//         }    
//     }
// }
// console.log(solution([2,7,11,15],22));

// SORU 10 => num1 = [1,3] nums2 = [2] output => 2 => [1,2,3] => medianını veren fonksiyon

// const solution = (arr,arr2) => {
// let sortingArr = arr.concat(arr2).sort((a,b) => a-b)
// let median;
// let half = Math.floor(sortingArr.length / 2)
// sortingArr.length % 2 == 0 
// ? median = (sortingArr[half] + sortingArr[half -1])/2
// : median = sortingArr[half] 

// return median
// }
// console.log(solution([1,2],[3,4,5,6,11,12]));
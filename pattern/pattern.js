//half pyramid

// for(let i=1;i<=5;i++){
//     let star = ''
//     for(let j=1;j<=i;j++){
//         star += '*'+' '
//     }

//     console.log(star)
// }

//hollow rectangle

// let start = 1
// let end = 10

// for(let i=start;i<=end;i++){
//     let star = ''
//     for(let j=start;j<=end;j++){
//         if(i==start||i==end||j==start||j==end){
//             star += '*' + ' '
//         }else{
//             star +=' ' + ' '
//         }
//     }
//     console.log(star)
// }

//opposite half pyramid

// for(let line=start;line<=end;line++){
//     let starPrint = ''
//     for(let space=1;space<=end-line;space++){
//         starPrint += '_'
//     }

//     for(let star=1;star<=line;star++){
//         starPrint += "*" 
//     }

//     console.log(starPrint)
// }

//inverted half pyramid

// let start = 1
// let end = 5

// for(let i=end;i>=start;i--){
//     let star = ''
//     for(let j=start;j<=i;j++){
//         star += j +' '
//     }
//     console.log(star)
// }

//floyds trianlge

// let start = 1
// let end = 5

// let count = 1
// for(let i=start;i<=end;i++){
//     let star = ' '
//     for(let j=start;j<=i;j++){
//         star += count+' '
//         count++
//     }

//     console.log(star)
// }

//zero - one 

// let start = 1
// let end = 5

// let one = 1
// let zero = 0

// for(let i=start;i<=end;i++){
//     let star = ''
//     if(i % 2 != 0){
//         for(let j=start;j<=i;j++){
//             if(j%2 != 0){
//                 star+= one+' '
//             }
//             if(j%2 == 0){
//                 star +=zero+' '
//             }
//         }
//     }else{
//         for(let k=start;k<=i;k++){
//             if(k%2 != 0){
//                 star+=zero+' '
//             }

//             if(k%2 == 0){
//                 star += one+' '
//             }
//         }
//     }

//     console.log(star)
// }

//another approach of zero - one

let start = 1
let end = 5

for(let i=start;i<=end;i++){
    let star = ''
    for(let j=start;j<=i;j++){
        if(((i+j) % 2) == 0){
            star += 1 + ' '
        }
        else{
            star += 0 + ' '
        }
    }
    console.log(star)
}
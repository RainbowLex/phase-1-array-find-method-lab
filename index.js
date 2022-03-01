// code your solution here
// function superbowlWin(record){
//     //const arr = {year,result}
//     if(result === "w"){
//         return year;
//     }
//     else{
//         return 'undefined';
//     }
// }
// array.find(superbowlWin);
//will have 3 years logged
// function superbowlWin(year,result){
//     for(const record of year){
//         if(record.someWin === result){
//             console.log(record.year);
//         }
//     }
// }
// superbowlWin(record, "w")

// function superbowlWin(record){
//     for(const result of record){
//         if(result.isWin === "W"){
//             return(result.year)
//         }
//     }
// }
// superbowlWin(result);

let foundWin = record.find(superbowlWin)
console.log(foundWin);

function superbowlWin(record){
    if(result === 'W'){
    return record.year;
    }
}
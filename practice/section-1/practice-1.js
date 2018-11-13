'use strict';
// function collectSameElements(collectionA, collectionB) {
//   var c = new Array();
// for(var i = 0; i< collectionA.length ; i++)
// {
//   for(var j = 0; j< collectionB.lenth ; j++)
//   {
//     if (collectionA[i] == collectionB[j])
//     {
//       c.push(collectionA[i]);
//         break;
//     }
//   }
// }
//   return c;
// }

// O(mn)
// var collectSameElements = (listA, listB) => {
//   var result = []
//   listA.forEach(item => {
//     var index = listB.indexOf(item)
//     if(index !== -1){
//       result.push(item)
//     }
//   })

//   return result
// }

// O(m+n)
var collectSameElements = (listA, listB) => {
  var result = {}
  var list = []
  listA.forEach(item => result[item] = 0)
  listB.forEach(item => result[item] = result[item]===0? 1 : 0)
  for(let i in result){
    if(result[i]>0)
      list.push(i)
  }
  return list
}
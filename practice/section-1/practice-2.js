'use strict';

// function collectSameElements(collectionA, collectionB) {
//   return 'Implement the practice require, and begin changing code in this row';
// }

/*var collectSameElements = (listA, listB) => {
  var result = {}
  var list = []
  listA = flatten(listA)
    listB = flatten(listB)
  listA.forEach(item => result[item] = 0)
  listB.forEach(item => result[item] = result[item]===0? 1 : 0)
  for(let i in result){
    if(result[i]>0)
      list.push(i)
  }
  return list
}

var flatten = element => {
	var result = []
	if(element instanceof Array){
		result = result.concat(flatten(element))
	}
	else{
		result.push(element)
	}
	return result
}
*/

function collectSameElements(collectionA, collectionB) {
	var c = new Array();
	collectionB=collectionB[0];
	for(var i=0; i<collectionA.length ; i++)
	{
		for(var j=0; j<collectionB.length ; j++)
		{
			if(collectionA[i]==collectionB[j])
			{
				c.push(collectionA[i]);
				break;
			}
		}
	}
	return c;
}
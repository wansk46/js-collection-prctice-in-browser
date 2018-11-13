'use strict';

function createUpdatedCollection(collectionA, objectB) {
	var a = 1;

	for(var i in collectionA){
		for(var j in objectB.value){
			if(collectionA[i].key===objectB.value[j]){
				collectionA[i].count-=a;
				a++;
				if(a>3){
					a=1;
				}
			}
		}
	}
	return collectionA;
}

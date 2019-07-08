'use strict';

function createUpdatedCollection(collectionA, objectB) {
 
  for(var i = 0,l = collectionA.length;i < l;i++){
    if(objectB['value'].indexOf(collectionA[i].key) != -1){
      collectionA[i].count--;
    }
  }
  return collectionA;

}

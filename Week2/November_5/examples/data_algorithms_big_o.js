'use strict';

let operations;

function hasDuplicate( array ) {
 	for( var i = 0; i < array.length; i++ ) {
 		for( var j = i + 1; j < array.length; j++ ) {
 			operations++;
 			if ( array[i] === array[j] ) { return true; }
 		}
 	}
 	return false;
}

function hasDuplicate1( array ) {
  var has = {};
  for ( var i = 0; i < array.length; i ++) {
    var value = array[i];
    if (has[value]) {
      return true;
    }
    has[value] = true;
  }
  return false;
}

const count = 1000;
const arr = new Array( count );

for( var k = 0; k < count; k++ ) {
	arr[k] = k;
}

operations = 0;
console.time( 'duplicate' );
console.log( 'hasDuplicate', hasDuplicate1( arr ) );
console.timeEnd( 'duplicate' );
console.log( count, '-->', operations );

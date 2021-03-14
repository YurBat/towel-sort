
// You should implement your task here.

module.exports = function towelSort (matrix) {
	if (!matrix){
		return [];
}
	let matrixLenght = matrix.length
	for (i = 0; i < matrixLenght; i++) {
		if (i % 2 != 0) matrix[i].reverse();
		}
	
	return matrix.flat(Infinity);

}


/*
let a = [matrix]; 
let b = a.flat(Infinity);
return b;
console.log(b)
*/

1. /*определяем кол. подмассивов
matrix.length;
*/
2. /*каждый второй переворачиваем
even.reverse();
*/
3. /*сводим всё в один массив
concat() flat
*/

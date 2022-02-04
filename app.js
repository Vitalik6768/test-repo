// const word1 =[1, 3, 5, 7, 7, 8];
// const word2 =[1, 6, 7, 7, 8, 8];
// const wordA =['go', 'banana', 'no'];
// const wordB =['go', 'melom', 'no'];


// for(let i = 0; i<wordA.length; i++){
// 	if(wordA[i] === wordB[i]){
// 		console.log(wordA[i]);
// 	}
//
// }

// let students = [
// 	{
// 	name:'gorge',
// 	grade:5
// 	},
// 	{
// 	name:'vital',
// 	grade:56
// 	},
// 	{
// 	name:'vital',
// 	grade:32
// 	},
// 	{
// 	name:'vital',
// 	grade:55
// 	},
// 	];
//
// let total = 0;
// for(i = 0; i < students.length; i++){
// 	let student = students[i];
// 	total += student.grade;
// 	//console.log(`${student.name} scored ${student.grade}`);
// 	//console.log(students[i].name + ' ' + 'scored' + ' ' + students[i].grade);
// }
// console.log(total/ students.length);

//let name = 'hello';
//let reverseWord = '';
//for(let i = name.length -1; i >=0; i--){
	//reverseWord += name[i];
//	console.log(reverseWord);
//}


const movies = {
	alian:8,
	jungle:10,
	dark:34
}

// for(let movie of Object.keys(movies)){
// 	console.log(movie, movies[movie])
// }

// const rating = Object.values(movies);
// let total = 0;
// for(let r of rating){
// 	total += r
// 	//console.log(r)
// }
// total /= rating.length;
// console.log(Math.floor(total));

for(let prop in movies){
	//console.log(prop);
	console.log(`${prop} : ${movies[prop]}`)
}

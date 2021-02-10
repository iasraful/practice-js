// const amarAge = [12, 43, 32, 11];
// const tomar = [32, 23 , 21, 12];

// // const total = amarAge + tomar;
// // console.log(typeof total);

// // const total = amarAge.concat(tomar) 
// const total = [...amarAge,5, 14, ...tomar]
// console.log(total);


// const num1 = [ 13, 32 , 45 , 54];
// const num2 = [ 43, 23, 64, 69, 17];
// const num3 = [ 54, 56, 23, 64, 99];

// const total = [...num1, ...num2, ...num3];
// const largest = Math.min (...total);
// console.log(largest);

    // This is Ues of Class 

    
class Student{
constructor(sId, sName){
    this.id = sId;
    this.name = sName;
    this.schoolName = 'A.k High School'

}

}

const student1 = new Student(23, 'Sujon');
const student2 = new Student(54, 'Rafsan');
console.log(student1, student2);
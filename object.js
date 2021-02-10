const amarNam  = {firstName :'Asraful'
, lastName : 'Islam',
salary:4500,
fullName: function (){
    console.log(this.firstName, this.lastName);
}
,remaining: function (amount) {
    this.salary = this.salary - amount;
    return this.salary;
}
}
amarNam.remaining(500)-
console.log(amarNam.salary);


function add(items1, items2) {
    return items1 + items2;
}

const total = add(40);
console.log(total)



const firstName = "Jhankar vai";
const lastName = "Mahamud";
const fullName = `${firstName} ${lastName} she amar 4500 taka nea gace`
console.log(fullName);
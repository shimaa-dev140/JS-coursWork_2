

const library = {
  name: "Frontend Library",
  books: [],

  addBook(title) {
    if (!title || title.trim() === "") {
      return "Invalid book title";
    }

    this.books.push(title);

    return this.books.length;
  },

  removeLastBook() {
    if (this.books.length === 0) {
      return "Library is empty";
    }

    return this.books.pop();
  },

  getLastBook() {
    if (this.books.length === 0) {
      return "Library is empty";
    }

    return this.books[this.books.length - 1];
  },

  getSummary() {
    const count = this.books.length;

    const word = count === 1 ? "book" : "books";

    return `${this.name} has ${count} ${word}.`;
  },
};

library.addBook("HTML");
library.addBook("CSS");

console.log(library.getLastBook());
console.log(library.removeLastBook());
console.log(library.getSummary());
// ----------------------------------

const employee = {
  name: "Mona",
  baseSalary: 10000,
  bonusPercentage: 10,
  deduction: 500,
};

function calculateBonus( baseSalary ,percentage ){

    return baseSalary*percentage/100

}
console.log(calculateBonus( 10000 ,10 ));


let calculateNetsalary=function( employee){

let bonus = calculateBonus(
  employee.baseSalary,
  employee.bonusPercentage
);
  return employee.baseSalary + bonus - employee.deduction;

}
console.log(calculateNetsalary({
    baseSalary: 10000,
    bonusPercentage: 10,
    deduction: 500
}));
// ------------------------------------------

    const getSalaryStatus = ( netSalary) => {
    if (netSalary>=15000) {
        return "High"
    }

    else if( netSalary<=8000){
        return "Medium"
    }

    else{
        return "LOW"
    }
};
console.log( getSalaryStatus (10500));
// ----------------------------

employee.getReport = function() {
  let bonus = calculateBonus(
    this.baseSalary,
    this.bonusPercentage
  );
  let netSalary =calculateNetsalary(this);
  let status = getSalaryStatus(netSalary);

  return`Employee:${this.name}
  Base Salary:${this.baseSalary}
  BONUS:${ bonus}
  Deduction: ${this.deduction} EGP
Net Salary: ${netSalary} EGP
Salary Status: ${status}`;

};
console.log(employee.getReport());

// -----------------------



    







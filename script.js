const companies = [
    {name: "Company One", category: "Finance", start: 1981, end: 2003},
    {name: "Company Two", category: "Retail", start: 1992, end: 2008},
    {name: "Company Three", category: "Auto", start: 1999, end: 2007},
    {name: "Company Four", category: "Technology", start: 1989, end: 2010},
    {name: "Company Five", category: "Wholesale", start: 2009, end: 2015},
    {name: "Company Six", category: "Stock Market", start: 1987, end: 2005},
    {name: "Company Seven", category: "Groceries", start: 1986, end: 2004},
    {name: "Company Eight", category: "Retail", start: 2011, end: 2013},
    {name: "Company Nine", category: "Category 2", start: 2010, end: 2016},
    {name: "Company Ten", category: "Finance", start: 1966, end: 2020},
    {name: "Company Eleven", category: "IT", start: 1981, end: 2007},
]

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32]

// 1st Exercise: Print Odd/Even Numbers Between 0-15
// Even:
// for (let i = 0; i <= 15; i++) {
//     if (i % 2 === 0) {
//       console.log(i);
//     }
//   }
// Odd:
// for (let i = 0; i <= 15; i++) {
//     if (i % 2 === 1) {
//       console.log(i);
//     }
//   }



// 2nd Exercise: Print Numbers Between 0-15 in Ascending/Descending Order
// Ascending Order:
// for (let i = 0; i <= 15; i++) {
//     console.log(i);
//   }
// // Descending Order:
// for (let i = 15; i >= 0; i--) {
//     console.log(i);
//   }



// 3rd Exercise: Define Whether the Numbers from 0 to 15 Are Odd or Even
// for (let i = 0; i <= 15; i++) {
//     if (i % 2 === 0) {
//     console.log(i + ' is even.');
//     } else {
//     console.log(i + ' is odd.');
//     }
//   } 



// // 4th Exercise: Eligible to Drive (Age=20)
// const isEligibleToDrive = ages.filter(function(age) {
//     if(age >= 20) {
//         return true;
//     }
// })
// console.log(isEligibleToDrive)



// 5th Exercise: Filter "Groceries" Companies
// const groceriesCompanies = companies.filter(company => company.category === 'Groceries')
// console.log(groceriesCompanies)


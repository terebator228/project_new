
function unique(arr) {
   let sort = new Set();
   for (let user of values) {
      sort.add(user);
   }
   console.log(sort);
 }


 let values = ["Hare", "Krishna", "Hare", "Krishna",
   "Krishna", "Krishna", "Hare", "Hare", ":-O"
 ];

 alert(unique(values));
 
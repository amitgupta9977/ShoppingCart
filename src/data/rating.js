const emp = [
  {
    name: "A",
    role: "Dev",
    rating: 5,
  },
  {
    name: "B",
    role: "Dev",
    rating: 4,
  },
  {
    name: "C",
    role: "Tester",
    rating: 3,
  },
  {
    name: "D",
    role: "Tester",
    rating: 3,
  },
];

const devs = emp.filter((employee) => employee.role === "Dev");
const ratings = devs.map((dev) => dev.rating);
const totalRating = ratings.reduce((acc, curr) => acc + curr, 0);
console.log("Total Rating of the Devs:", totalRating);

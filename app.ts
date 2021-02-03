const person: {
  name: string;
  age: number;
  hobbies: string[];
  role: (string | number)[];
} = {
  name: "Omar",
  age: 22,
  hobbies: ["Videogames", "Travel"],
  role: [2, "author"],
};

let favoriteActivities: string[] = ["Videogames", "Travel"];
// Check how in can return number
for (const hobby in favoriteActivities) {
  console.log(hobby);
}

for (const hobby of favoriteActivities) {
  console.log(hobby.toUpperCase());
}

favoriteActivities.forEach((hobby) => console.log(hobby));

person.role.push("admin");

person.role[1] = 10;

console.log(person.role);

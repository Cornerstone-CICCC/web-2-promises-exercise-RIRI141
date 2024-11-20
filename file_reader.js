const fs = require("fs").promises;

// THEN-CATCH SOLUTION BELOW THIS LINE
let firstname, lastname, age, hobbies;
fs.readFile("./firstname.txt", "utf-8")
  .then((data) => {
    firstname = data;
    return fs.readFile("./lastname.txt", "utf-8");
  })
  .then((data2) => {
    lastname = data2;
    return fs.readFile("./age.txt", "utf-8");
  })
  .then((data3) => {
    age = data3;
    return fs.readFile("./hobbies.txt", "utf-8");
  })
  .then((data4) => {
    hobbies = data4;
    const hobbiesArray = JSON.parse(hobbies);
    console.log(
      `${firstname} ${lastname} is ${age} years old and his hobbies are ${hobbiesArray[0]} and ${hobbiesArray[1]}`
    );
  })
  .catch((err) => {
    console.error(err);
  });

// ASYNC/AWAIT SOLUTION BELOW THIS LINE
async function readFiles() {
  try {
    const firstname = await fs.readFile("./firstname.txt", "utf-8");
    const lastname = await fs.readFile("./lastname.txt", "utf-8");
    const age = await fs.readFile("./age.txt", "utf-8");
    const hobbies = await fs.readFile("./hobbies.txt", "utf-8");
    const hobbiesArray = JSON.parse(hobbies);

    console.log(
      `${firstname} ${lastname} is ${age} years old and his hobbies are ${hobbiesArray[0]} and ${hobbiesArray[1]}`
    );
  } catch (err) {
    console.error("Error reading files:", err);
  }
}

readFiles();

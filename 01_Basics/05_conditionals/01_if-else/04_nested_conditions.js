// Nested conditions : mean conditions in condition

let user = "sam";
let role1 = "admin";
let role2 = "manager";
let pin = 102030;

if (user == "sam") {
  if (role1 == "admin") {
    console.log(`Welcome  ${role1}`);
  } else {
    console.log(`should be ${role1}`);
  }
} else {
  console.log(`only for ${user}`);
}




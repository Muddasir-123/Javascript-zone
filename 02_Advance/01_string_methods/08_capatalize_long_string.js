let capitalizedString = title.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
console.log(capitalizedString); // Output: "The Jungle Book"
var arr10, arr9, arr_names, str, user;

arr10 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

arr9 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(arr10);

console.log(arr9);

arr_names = ["Ahmed", "Abd", "Elhamid"];

user = {
  name: "Ahmed",
  age: 30,
  hobbies: ["Football", "Chess"],
  links: {
    fb: "fb",
    tw: "tw"
  }
};

console.log(arr_names);

console.log(user);

str = `<i>${user.name}</i>`;

$(function() {
  return $('h2').append(`Hello World from coffee --${str}`);
});

(function() {
  return $('#content').append('Don\'t miss it!');
})();

var append, arr10, arr9, arr_names, author, fillOut, hi, i, info, info_arr, j, k, key, len, len1, myFunction, name, names, ref, str, user, value,
  splice = [].splice;

arr10 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

arr9 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(arr10);

console.log(arr9);

arr_names = ["Ahmed", "Abd", "Elhamid", "Ali", "Osman"];

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

console.log(arr_names.slice(0, 3));

splice.apply(arr_names, [0, 3].concat(ref = ["Alaa", "Walaa", "Wafaa"])), ref;

console.log(arr_names.slice(0, 3));

console.log(user);

str = `<i>${user.name}</i>`;

$(function() {
  return $('h2').append(`Hello World from coffee --${str}`);
});

(function() {
  return $('#content').append('Don\'t miss it!');
})();

name = "Ahmed";

if (name === "Ahmed") {
  console.log(name);
}

if (name === "Ahmed") {
  console.log(`is ${name}`);
}

if (name === "Ahmed") {
  console.log(name);
} else {
  console.log(name);
}

if (name !== "Ahmed") {
  console.log(name);
} else {
  console.log(`isnt ${name}`);
}

// dance = ->
//     alert "He"

// happy = true

// dance() if happy is true
// dance() if unnull_varable?
names = ["name1", "name2", "name3", "name4", "name5", "name6", "name7", "name8", "name9"];

for (j = 0, len = names.length; j < len; j++) {
  name = names[j];
  console.log(name);
}

for (i = k = 0, len1 = names.length; k < len1; i = ++k) {
  name = names[i];
  console.log(`${i}. ${name}`);
}

info = {
  name: "Ahmed",
  contact: "012123",
  age: 23
};

for (key in info) {
  value = info[key];
  console.log(`${key}: ${value}`);
}

myFunction = function() {
  return "my Function";
};

console.log(myFunction());

hi = function(name) {
  return `Hi ${name}`;
};

console.log(hi("ahmed"));

info_arr = ["ahmed", "http://www....com", "http://www....com", "http://www....com"];

fillOut = function(name, ...links) {
  var l, len2, link, results;
  console.log(`name ${name}`);
  results = [];
  for (i = l = 0, len2 = links.length; l < len2; i = ++l) {
    link = links[i];
    results.push(console.log(`Link: ${i}. ${link}`));
  }
  return results;
};

fillOut(...info_arr);

append = function(item) {
  return $('#content').append(item);
};

author = "Ahmed";

switch (author) {
  case 'Alaa':
    append(' Alaa');
    break;
  case 'James':
  case 'Ahmed':
    append(" James and Ahmed");
    break;
  default:
    append(" Null");
}

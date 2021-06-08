arr10 = [1..10]
arr9 = [1...10]
console.log arr10
console.log arr9

arr_names = [
    "Ahmed"
    "Abd"
    "Elhamid"
    "Ali"
    "Osman"
]
user = 
    name: "Ahmed"
    age: 30
    hobbies: [
        "Football"
        "Chess"
    ]
    links: 
        fb: "fb"
        tw: "tw"

console.log arr_names
console.log arr_names[0..2]

arr_names[0..2] = ["Alaa", "Walaa", "Wafaa"]

console.log arr_names[0..2]

console.log user

str = "<i>#{user.name}</i>"

$ ->
  $('h2').append "Hello World from coffee --#{str}"

do ->
    $('#content').append 'Don\'t miss it!'
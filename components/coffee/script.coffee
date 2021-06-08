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


name = "Ahmed"

if name == "Ahmed" then console.log name

console.log "is #{name}" if name is "Ahmed"

if name == "Ahmed"
    console.log name
else
    console.log name

if name isnt "Ahmed"
    console.log name
else
    console.log "isnt #{name}"

# dance = ->
#     alert "He"

# happy = true

# dance() if happy is true
# dance() if unnull_varable?

names = [
    "name1"
    "name2"
    "name3"
    "name4"
    "name5"
    "name6"
    "name7"
    "name8"
    "name9"
]

for name in names
    console.log name

for name, i in names
    console.log "#{i}. #{name}"

info = 
    name: "Ahmed"
    contact: "012123"
    age: 23

for key, value of info
    console.log "#{key}: #{value}"

myFunction = ->
    "my Function"

console.log myFunction()

hi = (name) ->
    "Hi #{name}"

console.log hi("ahmed")

info_arr = [
    "ahmed"
    "http://www....com"
    "http://www....com"
    "http://www....com"
]

fillOut = (name, links...) ->
    console.log "name #{name}"
    for link, i in links
        console.log "Link: #{i}. #{link}"

fillOut info_arr...

append = (item) ->
    $('#content').append item

author = "Ahmed"

switch author
    when 'Alaa' then append " Alaa"
    when 'James', 'Ahmed' then append " James and Ahmed"
    else append " Null"
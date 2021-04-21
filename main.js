// const isim = "ahmet";
// const age = 22;
// altgr + , (backtick)
// welcome = `My name is ${isim}. I am ${age}`;
// console.log(welcome);


// burası kaç harf olduğunu yazar
// const uzunluk = "hello my name is ahmet";
// console.log(uzunluk.length);

// yazıyı verilen değerlerden böler
// const strbol = "javascript, c#, java, python, ruby";
// console.log(strbol.split(", "));


// arrays (2 şekilde yapılabilir)
// const sayilar = new Array(1,2,3,4,5,6,7,8,9);
// const sayilar1 = [1,2,3,4,5,6,7,8,9]
// indexle ekleme
// sayilar[9] = 10
// console.log(sayilar);
// console.log(sayilar1);
// sonuna ekleme (push) başa ekleme (unshift) sondakini atma (pop)
// sayilar1.push(10);
// sayilar.unshift(0);
// sayilar.pop();
// console.log(sayilar);
// console.log(sayilar1 + " pushtan sonraki değer");
// indexlere erişme
// console.log(sayilar[1] + "= sayılar'ın 1. indexi");
// console.log(sayilar1[2] + "= sayılar1'ın 2. indexi");


// dizimi kontrolü
// console.log(Array.isArray(sayilar))
// dizinin içindeki elemanın indexi
// console.log(sayilar1.indexOf(1))


// object
// const person = {
//     firstName:"ahmet",
//     lastName:"tutsak",
//     yas:22,
//     hobbies:["music", "code", "learning", "searching"],
//     adress : {
//         street : "595 sokak",
//         city : "izmir",
//         no : 8
//     }
// }
// console.log(person);
// console.log(person.firstName);
// console.log(person.firstName,person.lastName);
// console.log(person.hobbies);
// console.log(person.hobbies[1]);
// console.log(person.adress.city);
// değişkenlere objeden değer tanımlama
// const {firstName, lastName , adress:{city}} = person;
// console.log(firstName);
// console.log(city);
// objeye yeni değer ekleme
// person.email = "ahmettutsak@hotmail.com";
// console.log(person);

// array içinde objeler | python dict
// json format
// const todos=[
//     {
//         id:1,
//         text:"yapılacak iş 1",
//         isCompleted: true
//     },
//     {
//         id:2,
//         text:"yapılacak iş 2",
//         isCompleted: true
//     },
//     {
//         id:3,
//         text:"yapılacak iş 3",
//         isCompleted: false
//     },
// ];
// console.log(todos[1].text);
// const todoJSON = JSON.stringify(todos);
// console.log(todoJSON);


// for loop | similar c#
// for(let i = 0;i<=3;i++) {
//     console.log(`For loop number: ${i}`)
// }
// while loop
// let i = 0;
// while(i<=3){
//     console.log(`While loop number ${i}`);
//     i++;
// }


// with for loop print todo list texts
// for(let x = 0; x<todos.length;x++){
//     console.log(`ToDo list Text index:${x} , text= ${todos[x].text}`);
// }
// simple version
// for(t of todos){
//     console.log(t.text);
// }

// foreach
// todos.forEach(function(todo){
//     console.log(todo.text);
// });

// map (array olarak geriye döndürür)
// const tdmap = todos.map(function(todo){
//     return todo.text
// });
// console.log(tdmap)

// filter (sadece filtreden geçenleri yazar)
// const tdflt = todos.filter(function(todo){
//     return todo.isCompleted === true;
// });
// console.log(tdflt)


// if condition
// eğer == kullanılıyorsa int veya str olmasına bakmaksızın değeri karşılaştırır
// eğer === kullanılıyorsa veriyi ve verinin türünü karşılaştırır
// const x = 11;
// if(x==10){
//     console.log("true")
// }
// else{
//     console.log("false")
// }
// if(x=="10"){
//     console.log("true")
// }
// else{
//     console.log("false")
// }
// if(x===10){
//     console.log("true")
// }
// else{
//     console.log("false")
// }
// if(x==="10"){
//     console.log("true")
// }
// else{
//     console.log("false")
// }
// if(x === 10){
//     console.log("x 10 a eşit");
// }
// else if(x>10){
//     console.log("x 10 dan büyük");
// }
// else{
//     console.log("x 10 dan küçük")
// }
// kısa şekilde if tanımlaması
// const x = 9;
// const color = x < 10 ? "blue":"red";
// console.log(color)

// const color = "asd";
// switch
// switch(color){
//     case "red":
//         console.log(`color is ${color}`);
//         break;
//     case "blue":
//         console.log(`color is ${color}`);
//         break;
//     default:
//         console.log("color is not red or blue");
//         break;
// }


// functions
// function topla(a,b){
//     return a + b;
// }
// const toplam = topla(10,20);
// console.log(toplam)
// arrow function =>
// const topla = (a,b) => {
//     return a+b;
// }
// const toplam = topla(5,10);
// console.log(toplam);
// different arrow function
// const topla = (a,b) => a+b
// console.log(topla(5,20))


// OOB
// function Person(ad,soyad,dob){
//     this.ad = ad;
//     this.soyad = soyad;
//     this.dob = new Date(dob);
//     this.dogumYili = function(){
//         return this.dob.getFullYear();
//     }
//     this.getFullName = function() {
//         return `${this.ad} ${this.soyad}`
//     }
// }
// const asdd = new Person("ahmet","tutsak","11-03-1999");
// console.log(asdd);
// console.log(asdd.dogumYili());
// console.log(asdd.getFullName())

// class
// class Person {
//     constructor(ad,soyad,dob){
//         this.ad = ad;
//         this.soyad = soyad;
//         this.dob = new Date(dob);
//     }

//     getFullName(){
//         return `${this.ad} ${this.soyad}`;
//     }
//     dogumYili(){
//         return this.dob.getFullYear();
//     }
// }

// const yee = new Person("ahmet", "tutsak" , "11-03-1999");
// console.log(yee);
// console.log(yee.dogumYili());
// console.log(yee.getFullName());



// DOM 
//  Single Element
// ıd ye göre seçer
// console.log(document.getElementById("my-form"));
// istediğin herhangi bir şeyi seçer
// console.log(document.querySelector(".container"));
//  Multiple Element
// console.log(document.querySelectorAll(".item"));
// console.log(document.getElementsByClassName("item"));

// const btn = document.querySelector(".btn");
// btn.style.background = "red";

// const btn = document.querySelector(".btn");
// btn.addEventListener("click" ,(e) => {
//     btn.style.background = "green";
// })

// class User {
//     constructor(ad,email){
//         this.ad = ad;
//         this.email = email;
//     }
// }

// const u1 = new User("denene","asdsdaasddas");
// const u2 = new User("hehehe","sfdnjksdnjksdv");
// const listemm = [u1,u2];
// const my_form = document.querySelector("#my-form");
// const msg = document.querySelector(".msg");
// const names = document.querySelector("#name");
// const email = document.querySelector("#email");
// const userList = document.querySelector("#users");

// window.onload = function() {
//     listemm.forEach(function(kullanici){
//         const li = document.createElement("li");
//         li.textContent = `İsim: ${kullanici.ad} Email: ${kullanici.email}`;
//         const listt = document.getElementsByTagName("li");
//         userList.appendChild(li);
//    }); 
//   };

// my_form.addEventListener("submit",submited);
// function submited(e){
//     e.preventDefault();

//     if(names.value === "" || email.value === ""){
//         msg.textContent = "Kutuları lütfen doldurunuz!"
//         msg.classList.add("error");
//         setTimeout(() => msg.remove(), 2000);
//     }
//     else
//     {
//         const li = document.createElement("li");
//         li.textContent = `İsim: ${names.value} Email: ${email.value}`;
//         const listt = document.getElementsByTagName("li");
//         userList.appendChild(li);
//         names.value = "";
//         email.value = "";
//     }

// }
// my_form.addEventListener("reset",reseted);
// function reseted(e){
//     const listt = document.querySelectorAll("li")
//     listt.forEach(function(liitems){
//              liitems.remove();
//         });   
// }

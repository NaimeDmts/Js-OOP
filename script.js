// let soru = {

//     soruMetni: "Hangisi javascript paket yönetim uygulamasıdır",
//     cevapSecenekleri:{
//         a:  "Node.js",
//         b:  "Typescript",
//         c:  "Npm"
//     },
//     dogruCevap: "c",
//     cevabiKontrolEt: function(cevap){
//         return cevap === this.dogruCevap
//     }
// }
// let soru2 = {

//     soruMetni: "Hangisi .net paket yönetim uygulamasıdır",
//     cevapSecenekleri:{
//         a:  "Node.js",
//         b:  "nuget",
//         c:  "Npm"
//     },
//     dogruCevap: "b",
//     cevabiKontrolEt: function(cevap){
//         return cevap === this.dogruCevap
//     }
// }

//Sınıf, constructor => nesne * 30
//ES5, ES6, ES7

function Soru(soruMetni, cevapSecenekleri, dogruCevap,cevabiKontrolEt){
    this.soruMetni = soruMetni;
    this.cevapSecenekleri = cevapSecenekleri;
    this.dogruCevap = dogruCevap;
    this.cevabiKontrolEt = function(cevap){
        return cevap === this.dogruCevap
    }
}
let soru1 = new Soru("Hangisi javascript paket yönetim uygulamasıdır",{ a:"Node.js", b:"Typescript", c:"Npm" },"c");
let soru2 = new Soru("Hangisi .net paket yönetim uygulamasıdır",{ a:"Node.js", b:"Nuget", c:"Npm" },"b");

let sorular = [
    new Soru("Hangisi javascript paket yönetim uygulamasıdır",{ a:"Node.js", b:"Typescript", c:"Npm" },"c"),
    new Soru("Hangisi .net paket yönetim uygulamasıdır",{ a:"Node.js", b:"Nuget", c:"Npm" },"b"),
    new Soru("Hangisi javascript paket yönetim uygulamasıdır",{ a:"Node.js", b:"Typescript", c:"Npm" },"c"),
    new Soru("Hangisi .net paket yönetim uygulamasıdır",{ a:"Node.js", b:"Nuget", c:"Npm" },"b"),
]
for(let s of sorular){
    console.log(s.soruMetni); 
    console.log(s.cevapSecenekleri);
    console.log(s.dogruCevap);
    console.log(s.cevabiKontrolEt("c"));
}

"use strict";
// // Como podemos melhorar o esse código usando TS?
// let pessoa1 = {};
// pessoa1.nome = "maria";
// pessoa1.idade = 29;
// pessoa1.profissao = "atriz"
// let pessoa2 = {}
// pessoa2.nome = "roberto";
// pessoa2.idade = 19;
// pessoa2.profissao = "Padeiro";
// let pessoa3 = {
//     nome: "laura",
//     idade: "32",
//     profissao: "Atriz"
// };
// let pessoa4 = {
//     nome = "carlos",
//     idade = 19,
//     profissao = "padeiro"
// }
var Profission;
(function (Profission) {
    Profission[Profission["Atriz"] = 0] = "Atriz";
    Profission[Profission["Padreiro"] = 1] = "Padreiro";
})(Profission || (Profission = {}));
let pessoa1 = {
    name: "Maria",
    age: 29,
    profession: Profission.Atriz,
};
let pessoa2 = {
    name: "Roberto",
    age: 19,
    profession: Profission.Padreiro,
};
let pessoa3 = {
    name: "Laura",
    age: 32,
    profession: Profission.Atriz,
};
let pessoa4 = {
    name: "Carlos",
    age: 19,
    profession: Profission.Padreiro,
};

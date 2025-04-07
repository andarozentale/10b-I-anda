//1.uzd

let vards = "Anna";
let vecums = 20;
let irPilsonis = true;

console.log("Vārds:, vards");
console.log("Vecums:", vecums);
console.log("Vai ir pilsonis:", irPilsonis);

console.log("\nBalsošanas pārbaude:");

if (vecums >= 18 && irPilsonis) {

    console.log("Drīkst balsot.");
    
    } else if (vecums >= 18 && !irPilsonis) {
    
    console.log(`Personai ir ${vecums} gadi, bet viņa nav pilsonis.`);
    
    } else if (vecums < 18 && irPilsonis) {
    
    console.log(`Personai ir tikai ${vecums} gadi, lai gan viņa ir pilsonis.`);
    
    } else {
    
    console.log(`Personai ir tikai ${vecums} gadi un viņa nav pilsonis.`);
    
    }

// 2. Uzdevums 

let atzime = parseInt(prompt("Lūdzu, ievadiet atzīmi (0-100):"));



if (atzime >= 90 && atzime <= 100) {

console.log("Vērtējums: Izcili");

} else if (atzime >= 70 && atzime <= 89) {

console.log("Vērtējums: Labi");

} else if (atzime >= 50 && atzime <= 69) {

console.log("Vērtējums: Vidēji");

} else if (atzime >= 0 && atzime <= 49) {

console.log("Vērtējums: Slikti");

} else {

console.log("Nepareiza atzīme! Lūdzu, ievadiet skaitli no 0 līdz 100.");

}

//3.uzdevums
let saraksts = []; 

saraksts.push("Pirmais elements");

saraksts.push("Otrais elements");

saraksts.push("Trešais elements");

saraksts.push("Ceturtais elements");

saraksts.push("Piektais elements");



console.log("Masīva elementi:");

for (let i = 0; i < saraksts.length; i++) {

console.log(saraksts[i]);

}

//4.uzdevums
console.log("\nMasīva elementi apgrieztā secībā:");

for (let i = saraksts.length - 1; i >= 0; i--) {

console.log(saraksts[i]);

}

//5.uzdevums


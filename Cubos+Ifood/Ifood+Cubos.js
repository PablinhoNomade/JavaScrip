const entregadores = ["Jhow", "Robert", "voce"]

let compromisso = "Ifood";
let sabedoria = "Cubos Academy";
let responsavel = "programador";
let qualquerUm = 0;
for (let item of entregadores) {
    if (item === "voce") {
        qualquerUm = item;
        console.log(`O ${compromisso} e a ${sabedoria} transforma ${qualquerUm} em um ${responsavel}`);
    }
}
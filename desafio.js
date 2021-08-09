let olympicsMedalTable = [
    { id: 1, country: "BRASIL", gold: 7, silver: 6, bronze: 6, continent: "AMERICA DO SUL" },
    { id: 2, country: "USA", gold: 46, silver: 37, bronze: 17, continent: "AMERICA DO NORTE" },
    { id: 3, country: "CHINA", gold: 26, silver: 18, bronze: 26, continent: "ASIA" },
    { id: 4, country: "RUSSIA", gold: 19, silver: 18, bronze: 19, continent: "EUROPA" },
    { id: 5, country: "REINO UNIDO", gold: 27, silver: 23, bronze: 17, continent: "EUROPA" },
    { id: 6, country: "ALEMANHA", gold: 17, silver: 10, bronze: 15, continent: "EUROPA" },
    { id: 7, country: "JAPÃO", gold: 12, silver: 8, bronze: 21, continent: "ASIA" },
    { id: 8, country: "ARGENTINA", gold: 3, silver: 1, bronze: 0, continent: "AMERICA DO SUL" },
    { id: 9, country: "ITALIA", gold: 8, silver: 12, bronze: 8, continent: "EUROPA" },
    { id: 10, country: "QUÊNIA", gold: 6, silver: 6, bronze: 1, continent: "AFRICA" },
];

Array.prototype.customFind = function (predicate) {
    const arr = this;
    for (let i = 0; i < arr.length; i++) {
        if(arr[i].continent == "AFRICA") return arr[i].country;
    }
    return false;
}

Array.prototype.customSome = function (predicate) {
    const arr = this;
    
    const countries = [{country: '', medals: 0}];

    for(let i = 0; i < arr.length; i++) {
        const medals = arr[i].gold + arr[i].silver + arr[i].bronze;
        countries.push({country: arr[i].country, medals: medals});
    }

    if (countries){
        countries.shift();
        return countries
    } 

    return false;
}

Array.prototype.customFilter = function (predicate) {
    const arr = this;
    const country = [];
    for(let i = 0; i < arr.length; i++) {
        const medals = arr[i].gold + arr[i].silver + arr[i].bronze;
        
    }
    if (country) return country;
    return [];
}

Array.prototype.customMap = function (callback) {
    const arr = this;
    const country = [];
    for(let i = 0; i < arr.length; i++) {
        const medals = arr[i].gold + arr[i].silver + arr[i].bronze;
        if(medals > 30) country.push(arr[i].country);
    }
    if (country) return country;
    return [];
}

Array.prototype.customReduce = function (callback, initialValue) {
    const arr = this;
    let medalAmericadoSul = 0;
    for(let i = 0; i < arr.length; i++) {
        let medals = arr[i].gold;
        if(arr[i].continent == "AMERICA DO SUL") medalAmericadoSul += medals;
    }
    if (medalAmericadoSul > 20) return true;

    return false;
}

// Código modelo utilizando filter, map e reduce

const resultFilterMapReduce = olympicsMedalTable.filter(i => i.continent === "ASIA") // JAPÃO e CHINA 
    .map(i => i.gold) // 26 e 12
    .reduce((total, quantity) => total + quantity); // 38

// console.log(`Medalhas de Ouro no continente Asiático: ${resultFilterMapReduce}`);


// Implemente as funções customizadas - customFilter, customMap e customReduce e verique se o retorno é igual ao do código modelo

const resultByCustomFilterMapReduce = olympicsMedalTable.customFilter(i => i.continent === "ASIA")
    .customMap(i => i.gold)
    .customReduce((total, quantity) => total + quantity);

// console.log(`Resultado custom - Medalhas de Ouro no continente Asiático: ${resultByCustomFilterMapReduce}`);

const paisAfricano = olympicsMedalTable.customFind("AFRICA");

console.log(`O único país do continente africano é o ${paisAfricano}`);

const medalhasPorPais = olympicsMedalTable.customSome();

console.log(medalhasPorPais);

const paisesCom10MedalhasOuroNoMinimo = olympicsMedalTable.customFilter(10);

console.log(`Os países que possuem mais de 10 medalhas de ouro: ${paisesCom10MedalhasOuroNoMinimo}`);

const paisesCom30MedalhasNoMinimo = olympicsMedalTable.customMap(30);

console.log(`Os países que possuem mais de 30 medalhas: ${paisesCom30MedalhasNoMinimo}`);

const paisesComPeloMenos20MedalhasDeOUro = olympicsMedalTable.customReduce();

if (paisesComPeloMenos20MedalhasDeOUro) {
    console.log('Os países sulamericanos conseguiram mais de 20 medalhas de ouro');
} else {
    console.log('Os países sulamericanos não conseguiram mais de 20 medalhas de ouro');
}


// const medalhasPorPais = olympicsMedalTable.customSome()
/* DESAFIOS - CONCLUA AS FUNÇÕES customSome, customFind E UTILIZANDO TODAS AS FUNÇÕES 'CUSTOM' CONCLUA OS DESAFIOS ABAIXO: */

// 1 - Crie um algoritmo que encontre o único pais do continente Africano
// const paisAfricano =  <seu código aqui>;
// console.log(paisAfricano);

// 2 - Crie um algoritmo que retorne o total de medalhas por país
// const medalhasPorPais =  <seu código aqui>;
// console.log(medalhasPorPais);

// 3 - Crie um algoritmo para encontrar os países que conquistaram mais que 10 medalhas de ouro
// const paisesCom10MedalhasOuroNoMinimo =  <seu código aqui>;
// console.log(paisesCom10MedalhasOuroNoMinimo);

// 4 - Crie um algoritmo para encontrar os países que conquistaram no minímo 30 medalhas (Ouro, Prata e Bronze)
// const paisesCom30MedalhasNoMinimo =  <seu código aqui>;
// console.log(paisesCom30MedalhasNoMinimo);

// 5 - Crie um algoritmo para verificar se o continente América do Sul conquistou pelo menos 20 medalhas de ouro
// const paisesComPeloMenos20MedalhasDeOUro =  <seu código aqui>;
// console.log(paisesComPeloMenos20MedalhasDeOUro);
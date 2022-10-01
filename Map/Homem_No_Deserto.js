const localizar = {
    latELong: [
        {
            latitude: -29.526056,
            longitude: 137.463883,
        }],
    endereco: [
        {
            pais: "Estados Unidos",
            estado: "NV",
            cidade: "Metropolis-Ghost-Town",
            rua: "Wells",
            numero: "89835"
        }],

    BuscarALatELong: function () {
        for (item of this.latELong) {
            return `https://www.google.com/maps/search/${item.latitude},${item.longitude}`;// link do google maps 
        }
    },
    BuscarEndereco: function () {
        for (item of this.endereco) {
            return `https://www.google.com/maps/search/R.+${item.rua},+${item.numero}+-+${item.cidade}+-+${item.estado}`;// link do google maps 
        }
    }
};

console.log(localizar.BuscarALatELong());

console.log(localizar.BuscarEndereco());
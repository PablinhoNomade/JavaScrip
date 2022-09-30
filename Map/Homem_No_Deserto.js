const localizar = {
    latELong: [
        {
            Latitude: -29.526056,
            longitude: 137.463883,
        }],

    BuscarALatELong: function () {
        for (item of this.latELong) {
            return `https://www.google.com/maps/search/${item.Latitude},${item.longitude}`// link do google maps 
        }
    }
}

console.log(localizar.BuscarALatELong())
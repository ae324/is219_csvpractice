
class Crimes {
    constructor(datetime,address,district,beat,grid,crimedescr,ucr_ncic_code,latitude,longitude) {
        this.datetime = datetime;
        this.address = address;
        this.district = district;
        this.lat = latitude;
        this.lng = longitude;
        this.beat = beat;
        this.grid = grid;
        this.crimedescr = crimedescr;
        this.ucr_ncic_code = ucr_ncic_code;

    }
}
module.exports = Crimes;
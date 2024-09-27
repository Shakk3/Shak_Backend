const { v4: uuidv4 } = require('uuid');

class img {
    constructor(data, name, view, date, reference) {
        this.img_id = uuidv4;
        this.data = data;
        this.name = name;
        this.view = view;
        this.date = date;
        this.reference = reference;
    }
}

module.exports = img;
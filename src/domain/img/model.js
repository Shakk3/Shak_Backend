const { EntitySchema } = require('typeorm');
const { v4: uuidv4 } = require('uuid');

module.exports = new EntitySchema({
    name: 'Img',
    tableName: 'img_tbl',
    columns: {
        img_id: {
            type: 'uuid',
            primary: true,
            generated: 'uuid', 
            default: uuidv4
        },
        data: {
            type: 'longblob',
            nullable: false,
        },
        name: {
            type: 'varchar',
            length: 50,
            nullable: false,
        },
        view: {
            type: 'int',
            nullable: false,
        },
        date: {
            type: 'date',
            length: 20,
            nullable: false,
        },
        reference: {
            type: 'varchar',
            length: 100,
            nullable: false,
        },
    },
});

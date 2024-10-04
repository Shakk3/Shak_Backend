const { Entity, PrimaryGeneratedColumn, Column, OneToOne, OneToMany } = require('typeorm');
const Emotion = require('./emotion');
const Comment = require('./comment');

@Entity('img_tbl')
class Img {
    @PrimaryGeneratedColumn('uuid')
    img_id;

    @Column('longblob')
    img_data;

    @Column('varchar', { length: 50 })
    img_name;

    @Column('int', { default: 0 })
    img_view;

    @Column('vachar', { length: 30 }) 
    img_date;

    @Column('varchar', { length: 300 })
    img_reference;

    @OneToOne(() => Emotion, emotion => emotion.img, { cascade: true })
    emotion;

    @OneToMany(() => Comment, comment => comment.img, { cascade: true })
    comments;
}

module.exports = Img;

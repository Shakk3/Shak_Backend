const { Entity, PrimaryColumn, Column, OneToOne, JoinColumn } = require('typeorm');
const Img = require('./img');

@Entity('img_emotion_tbl')
class Emotion {

    @PrimaryColumn('uuid')
    img_id;

    @Column('int', { default: 0 })
    emotion_angry;

    @Column('int', { default: 0 })
    emotion_new;

    @Column('int', { default: 0 })
    emotion_love;

    @Column('int', { default: 0 })
    emotion_crazy;

    @OneToOne(() => Img, img => img.emotion)
    @JoinColumn({ name: 'img_id' })  
    img;
}

module.exports = Emotion;

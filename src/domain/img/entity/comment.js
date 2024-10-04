const { Entity, PrimaryGeneratedColumn, Column, ManyToOne } = require('typeorm');
const Img = require('./img');

@Entity('img_comment_tbl')
class Comment {
    @PrimaryGeneratedColumn('uuid')
    img_comment_id;

    @Column('varchar', { length: 50 })
    comment_name;

    @Column('varchar', { length: 2500 })
    comment_content;

    @ManyToOne(() => Img, img => img.comments)
    img;
}

module.exports = Comment;

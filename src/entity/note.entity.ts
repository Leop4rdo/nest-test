import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('notes')
export default class NoteEntity {
    @PrimaryGeneratedColumn('uuid')
    id : string

    @Column()
    name : string;

    @Column()
    desc : string;
}
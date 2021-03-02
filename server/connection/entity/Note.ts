import {Entity, PrimaryColumn, Column} from "typeorm";

@Entity()
export default class Note {

    @PrimaryColumn({ type: "bigint"})
    id: number;

    @Column("text")
    Text: string;

    @Column({type: "datetime"})
    Date: Date;
}

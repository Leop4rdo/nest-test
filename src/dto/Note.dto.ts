import { classToPlain } from "class-transformer";
import { IsNotEmpty } from "class-validator";
import INote from "src/interface/INote";

export default class NoteDTO {
    @IsNotEmpty({ message : "Note id must not be empty" })
    id : string

    @IsNotEmpty({ message : "Note title must not be empty" })
    name : string;

    desc : string;

    constructor(props : INote ) {
        this.id = props.id;
        this.name = props.name;
        this.desc = props.desc;
    }
}
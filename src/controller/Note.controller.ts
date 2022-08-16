import { Controller, Get } from "@nestjs/common";
import NoteDTO from "src/dto/note.dto";
import NoteService from "src/service/note.service";

@Controller('notes')
export class NoteController {
    constructor(
        private readonly noteService : NoteService;
    ) {}

    @Get()
    getAll = async () : Promise<NoteDTO[]> => await this.noteService.list()
}
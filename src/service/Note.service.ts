import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { classToPlainFromExist } from "class-transformer";
import NoteDTO from "src/dto/Note.dto";
import NoteEntity from "src/entity/Note.entity";
import NoteRepository from "src/repository/Note.repository";
import { Repository } from "typeorm";

@Injectable()
export default class NoteService {

    constructor(
        @InjectRepository(NoteEntity)
        private readonly noteRepo : NoteRepository
    ) {}

    list = async () : Promise<NoteEntity[]> => await this.noteRepo.find()

}
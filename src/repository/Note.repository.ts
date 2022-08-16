import NoteDTO from "src/dto/Note.dto";
import NoteEntity from "src/entity/Note.entity";
import { EntityRepository, Repository } from "typeorm";

@EntityRepository(NoteEntity)
export default class NoteRepository extends Repository<NoteEntity> {}
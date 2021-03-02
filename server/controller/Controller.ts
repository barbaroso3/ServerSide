import {Request, Response} from 'express';
import {connection} from "../connection/Connection";
import Note from "../connection/entity/Note";

export default class Controller {    
    constructor() {}

    public getAllNotes(req: Request, res: Response){
        connection.then(async connection => {
            let notesRepository = await connection.manager.getRepository(Note);
            let allNotes = await notesRepository.find();
            res.json(allNotes);
        }).catch(error => {
            console.error("Error ", error);
            res.json(error);
        });
    }          

    public addNote(req: Request, res: Response){
        connection.then(async connection => {
            let newNote = new Note();
            newNote.Text = req.body.text;
            newNote.Date = new Date(req.body.date);
            newNote.id = req.body.id;

            await connection.manager.save(newNote);
            res.json({message: "Note successfully saved"})
        }).catch(error => {
            console.error("Error ", error);
            res.json(error);
        });
    }

    public deleteNote(req: Request, res: Response){
        connection.then(async connection => {
            let notesRepository = await connection.manager.getRepository(Note);
            let noteToRemove = await notesRepository.findOne(parseInt(req.params.noteId, 10));
            await notesRepository.remove(noteToRemove);
            res.json({message: "Note successfully deleted"})
        }).catch(error => {
            console.error("Error ", error);
            res.json(error);
        });
    }
}
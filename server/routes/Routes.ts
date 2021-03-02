import Controller from "../controller/Controller";

class Routes {    
    constructor() {
        this.controller = new Controller();
    }  

    private controller: Controller;    
    
    public routes(app): void {
        app.route('/').get(this.controller.getAllNotes);
        app.route('/').post(this.controller.addNote);
        app.route('/:noteId').delete(this.controller.deleteNote)
    }
}

export {Routes};
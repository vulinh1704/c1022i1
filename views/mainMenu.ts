import DocumentManager from "../controller/DocumentManager";
import Document from "../model/Document";
import BookView from "./BookView";
import bookView from "./BookView";

const readlineSync = require('readline-sync');
class MainMenu{
    private documentManager: DocumentManager = new DocumentManager();
    private bookView: BookView = new BookView()
    private menu = `
    1. Them moi
    2. Xoa theo ma
    3. Hien thi thong tin
    4. Hien thi Sach
    5. Hien thi Tap chi
    6. Hien thi Bao
    7. Thoat
    `;
    public selection(): void{
        let isLoop = true;
        while(isLoop){
            console.log(this.menu);
            let choice;
            do{
                choice = +readlineSync.question("Enter your choice: ");
                if(choice < 1 || choice > 7){
                    console.log("Wrong choice. Please try again");
                }
            }while (choice < 1 || choice > 7);
            switch (choice){
                case 1: {
                    let document = this.bookView.selection();
                    this.documentManager.add(document);
                    break;
                }
                case 2: {
                    let id = +readlineSync.question("Enter student id you to delete: ");
                    console.log(this.documentManager.deleteById(id));
                    break;
                }
                case 3: {
                    this.documentManager.displayAll();
                    break;
                }
                case 4: {
                    this.documentManager.showBook();
                    break;
                }
                case 5: {
                    this.documentManager.showMagazine();

                    break;
                }
                case 6: {
                    this.documentManager.showNewspaper();

                    break;
                }
                case 7: {
                    isLoop = false;
                    break;
                }
            }
        }
    }
    private inputDocument(id: number | null): Document{
        if(id === null){
            let index = -1;
            do{
                id = +readlineSync.question("Enter document id: ");
                index = this.documentManager.findById(id);
                if(index !== -1){
                    console.log("Id exists. Please try again!");
                }
            }while (index !== -1);

        }
        let name = readlineSync.question("Nhap NXB: ");
        let number = readlineSync.question("Nhap so ban phat hanh: ");
        return new Document(id, name, number);
    }
}

export default MainMenu;
import Document from "../model/Document";
import Book from "../model/Book";
import Magazine from "../model/Magazine";
import Newspaper from "../model/Newspaper";

class BookView{
    private menu: string=`
    1. Them Sach
    2. Them tap chi
    3.Them Bao
    `
    public selection(): Document{
        let isLoop = true;
        while(isLoop){
            console.log(this.menu);
            let choice;
            do{
                choice = +readlineSync.question("Enter your choice: ");
                if(choice < 1 || choice > 4){
                    console.log("Wrong choice. Please try again");
                }
            }while (choice < 1 || choice > 4);
            switch (choice){
                case 1: {
                    let document = this.inputDocument(null);
                    let name = readlineSync.question("Nhap NXB: ");
                    let number = readlineSync.question("Nhap so ban phat hanh: ");
                    return new Book(this.checkId(null), name, number, '1', 10);
                    break;
                }
                case 2: {
                    let id = +readlineSync.question("Enter student id you to delete: ");
                    return new Magazine();
                    break;
                }
                case 3: {
                    return new Newspaper();
                    break;
                }

                case 4: {
                    isLoop = false;
                    break;
                }
            }
        }
    }
    private checkId(id: number | null): number{
            let index = -1;
            do{
                id = +readlineSync.question("Enter document id: ");
                index = this.documentManager.findById(id);
                if(index !== -1){
                    console.log("Id exists. Please try again!");
                }
            }while (index !== -1);

        return id;
    }
}
export default BookView;
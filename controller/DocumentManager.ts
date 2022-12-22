import Document from "../model/Document";
import Book from "../model/Book";
import Magazine from "../model/Magazine";
import Newspaper from "../model/Newspaper";

class DocumentManager{
    private documentList: Document[];
    constructor() {
        this.documentList = []
    }
    add(document: Document){
        this.documentList.push(document);
    }
    findById(id: number){
        this.documentList.forEach((item, index)=>{
            if(item.getId() == id){
                return index;
            }
        })
        return -1;
    }
    deleteById(id:number){
        let index = this.findById(id);
        if(index == -1){
            return 'Khong ton tai id nay';
        }
        this.documentList.splice(index,1);
        return 'Xoa thanh cong';
    }
    displayAll(){
        console.table(this.documentList);
    }
    showBook(){
        this.documentList.forEach((item)=>{
            if(item instanceof Book){
                console.log(item.getName());
            }
        })
    }
    showMagazine(){
        this.documentList.forEach((item)=>{
            if(item instanceof Magazine){
                console.log(item.getName());
            }
        })
    }
    showNewspaper(){
        this.documentList.forEach((item)=>{
            if(item instanceof Newspaper){
                console.log(item.getName());
            }
        })
    }
}
export  default DocumentManager;
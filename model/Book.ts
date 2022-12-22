import Document from "./Document";
class Book extends Document{
    private _author: string;
    private _pages: number;
    constructor(id: number, name: string, publishNumber: string, author: string, pages:number) {
        super(id, name, publishNumber);
        this._author = author;
        this._pages = pages;
    }

    getAuthor(): string {
        return this._author;
    }

    setAuthor(value: string) {
        this._author = value;
    }

    getPages(): number {
        return this._pages;
    }

    setPages(value: number) {
        this._pages = value;
    }
}
export default Book;
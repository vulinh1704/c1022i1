import Document from "./Document";

class Newspaper extends Document{
    private _date:string;

    constructor(id: number, name: string, publishNumber: string, date: string) {
        super(id, name, publishNumber);
        this._date = date;
    }

    getDate(): string {
        return this._date;
    }

    setDate(value: string) {
        this._date = value;
    }
}
export default Newspaper;
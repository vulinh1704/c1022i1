import Document from "./Document";

class Magazine extends Document{
    private _number: string
    private _month: number;

    constructor(id: number, name: string, publishNumber: string, number: string, month: number) {
        super(id, name, publishNumber);
        this._number = number;
        this._month = month;
    }

    getNumber(): string {
        return this._number;
    }

    setNumber(value: string) {
        this._number = value;
    }

    getMonth(): number {
        return this._month;
    }

    setMonth(value: number) {
        this._month = value;
    }
}
export default Magazine;
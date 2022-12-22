class Document{
    private id: number;
    private name: string;
    private publishNumber: string;


    constructor(id: number, name: string, publishNumber: string) {
        this.id = id;
        this.name = name;
        this.publishNumber = publishNumber;
    }

    getId(): number{
        return this.id;
    }
    setId(id: number): void{
        this.id = id;
    }
    getName(): string{
        return this.name;
    }
    setName(name: string):void{
        this.name = name;
    }
    getPublishName(): string{
        return this.publishNumber;
    }
    setPublishName(publishNumber: string): void{
        this.publishNumber = publishNumber;
    }
}

export default Document;
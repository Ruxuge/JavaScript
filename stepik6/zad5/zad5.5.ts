class Colors {
    tab: { id: number, name: string }[] = [
        {"id": 0, "name": "Black"},
        {"id": 1, "name": "Brown"},
        {"id": 2, "name": "Red"},
        {"id": 3, "name": "Orange"}
    ]

    constructor(tab: any) {
        this.tab = tab;

    }

    showColor(){
        return "your color is " + this.tab;
    }

}

let colors = new Colors(0)
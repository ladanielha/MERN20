class Car {
    constructor(name){
        this.name = name;
    }

    tampil(){
        return this.name
    }
}

class Sport extends Car {
    tujuan() {
        return `Mobil ${this.name} untuk pribadi`
    }
}

const Ford = new Sport("Ford");
document.querySelector("h1").innerText = Ford.tampil()
console.log(Ford.tampil())
console.log(Ford.tujuan())
console.log("----------------------------------------------")
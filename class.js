const BLOK_GROOTTE = 50;
const RONDJE_RADIUS = 50;

//blokje van Spel
class Blok {
    constructor(x, snelheid, letter) {
        this.x = x;
        this.y = -50;
        this.snelheid = snelheid;
        this.letter = letter;
    }

    verschuif() { //verschuift het blok
        this.y += this.snelheid;
    }

    display() { //laat het blok zien op het scherm
        noStroke();
        fill(255, 255, 255);
        if (this.snelheid === 5) { fill(255, 255, 0); } //geel 
        if (this.snelheid === 10) { fill(255, 128, 0); } //oranje
        if (this.snelheid === 15) { fill(255, 0, 0); } //rood
        if (this.letter !== 6) {
            rect(this.x, this.y, BLOK_GROOTTE, BLOK_GROOTTE);
            fill(0, 0, 0);
            textSize(45);
            text(this.letter, this.x + 10, this.y + 42); //letter
        } else {
            rect(this.x, this.y, BLOK_GROOTTE * 3, BLOK_GROOTTE);
            fill(0, 0, 0);
            textSize(45);
            text("Enter", this.x + 10, this.y + 42);
        }
    }
}

//cirkel (powerup cirkel) 
class Rondje {
    constructor(x, richting, powerup) {
        this.x = x;
        this.y = -50;
        this.richting = richting;
        this.powerup = powerup;
    }

    verschuif() {
        this.y += 10;
    }

    display() {
        noStroke();
        fill(7, 110, 166);
        ellipse(this.x, this.y, RONDJE_RADIUS, RONDJE_RADIUS); //cirkel
        stroke(0, 0, 0);
        strokeWeight(5);

        //pijl links 
        if (this.richting === 1) {
            line(this.x + 20, this.y, this.x - 15, this.y);
            line(this.x - 17, this.y, this.x, this.y - 18);
            line(this.x - 17, this.y, this.x, this.y + 18);
        }

        //pijl boven 
        if (this.richting === 2) {
            line(this.x, this.y + 20, this.x, this.y - 15);
            line(this.x, this.y - 17, this.x - 18, this.y);
            line(this.x, this.y - 17, this.x + 18, this.y);
        }

        //pijl rechts 
        if (this.richting === 3) {
            line(this.x - 20, this.y, this.x + 15, this.y);
            line(this.x + 17, this.y, this.x, this.y - 18);
            line(this.x + 17, this.y, this.x, this.y + 18);
        }

        //pijl onder
        if (this.richting === 4) {
            line(this.x, this.y - 20, this.x, this.y + 15);
            line(this.x, this.y + 17, this.x - 18, this.y);
            line(this.x, this.y + 17, this.x + 18, this.y);
        }
    }
}
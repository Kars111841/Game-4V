/* =========================================
                    SET UP
========================================= */

//verschillende schermen
var GAMESTATE = 0;
const GAMESTATE_START = 0;
const GAMESTATE_TUTORIAL = 1;
const GAMESTATE_MENU = 2;
const GAMESTATE_SPEL = 3;
const GAMESTATE_SCORES = 4;

//framerate
const FRAMERATE = 30;

/* ==========================================
        Andere variabelen / constanten
========================================== */

//timers
var elkeKnop = 0;
var nieuwBlokTijd = 60;
var nieuwBlokTimer = 0;

var nieuwRondjeTijd = 300;
var nieuwRondjeTimer = 0;

var levenVerlorenTijd = 5;
var levenVerlorenTimer = 0;
var veranderendeAchtergrond = 0;

var startTimer = 0;

//credits
var creditsTimer = 0;
var letterCredits = 0;
var blokjes = [];

//------------------modus / begin spel------------------
var MODUS_ACTIEF = 1;
var MODUS = 0;
const MODUS_KLASSIEK = 0;
const MODUS_STANDAARD = 1; //unlock op 5
const MODUS_GEENPOWERUP = 2; //unlock op 10
const MODUS_EINDELOOS = 3; //unlock op 15
const MODUS_SANDBOX = 4; //unlock op 20
const MODUS_INSANE = 5; //klassiek uitspelen

var unlocked_standaard = false;
var unlocked_geenpowerup = false;
var unlocked_eindeloos = false;
var unlocked_sandbox = false;
var unlocked_insane = false;

var cheatcodeActiveert = false;
//keyboard
var currentKey = 0;
var currentKnop = 0;
var typeTimer = 10;
var typeTimerReset = 5;

//spel
var levens = 3;
var AantalBlokjesMetLetter = 0;
var MeerLetterBonus = [10, 50, 100, 250, 500, 1000, 5000, 10000, 25000, 50000, 100000, 2500000, 500000, 1000000];
var score = 0;

//-------------------------Powerups--------------------
//powerups
const POWERUP_TIJD = 1;
const POWERUP_SCHILD = 2;
const POWERUP_LEVEN = 3;

var cirkels = [];

//constanten over powerups
var powerupActief = 0;
var powerupKans = [false, false, false, true, true, true];
var powerupRandom = [1, 2, 3, 3, 2];
var powerupRichtingRandom = [1, 2, 3, 4, 2];
var powerupScore = 25;

//nieuwe powerup
var powerupKansNieuw = 0;
var powerupRandomNieuw = 0;
var powerupRandomXNieuw = 0;
var powerupRichtingRandomNieuw = 0;
var randomPowerupNieuw = 0;
//powerup specificaties
var powerupHartjeEffectiviteit = 1;

var powerupTijdTimer = 0;
var powerupTijdTijd = 90;

var powerupSchildTimer = 0;
var powerupSchildTijd = 0;

//-------------------------Blokjes------------------
//blokes
var blokjes = [];
var randomNieuwBlokje = 0;

//nieuw blokje
var procentBlokjes = [100, 0, 0];
var blokjesRandomSnelheid = [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 15]
var blokjesRandomSnelheidNieuw = 0;
var blokjesRandomLetters = ["A", "B", "C", "D", "E", "F"
    , "G", "H", "i", "J", "K", "L", "M", "N", "o"
    , "P", "Q", "R", "S", "T", "U", "V", "w", "X", "Y", "Z"
    , "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A"];
var blokjesRandomLettersNieuw = 0;
var blokjesRandomX = [0, 50, 100, 150, 200, 250, 300, 350, 400, 200];
var blokjesRandomXNieuw = 0;

//---------------------------Score en moeilijkheid----------------
//moeilijkheidsgraad
var niveauMijlpalen = [-1, 1, 5, 10, 20, 40, 60, 80, 100, 130, 165, 270, 300, 330, 365, 430, 475
    , 525, 585, 695, 810, 880, 955, 1036, 1125, 1430, 1585, 1765, 1980, 2205
    , 2640, 3000, 3850, 4365, 5085, 5535, 6000];
var moeilijkheidsgraad = 0;
var voortgangsPunten = 0;
var aantalBlokjesPerKeer = 1;

var mogelijkBeginNiveauAlgemeen = -1;
var beginNiveauAlgemeen = 0;

var mogelijkBeginNiveauInsane = -1;
var beginNiveauInsane = 0;

var blokTijdCompensatie = 0;

var aantalBlokjesFactor = 1;
var powerupsMogelijk = true;
var niveauStijgingMogelijk = true;
var typeFoutPenalty = true;
var maxAantalLevens = 3;
var blokjesPositie = 1;

//scores
var afgelopenScoreKlassiek = ["-", "-", "-", "-", "-", "-"];
var highscoreKlassiek = 0;

var afgelopenScoreStandaard = ["-", "-", "-", "-", "-", "-"];
var highscoreStandaard = 0;

var afgelopenScoreGeenPowerup = ["-", "-", "-", "-", "-", "-"];
var highscoreGeenPowerup = 0;

var afgelopenScoreEindeloos = ["-", "-", "-", "-", "-", "-"];
var highscoreEindeloos = 0;

var afgelopenScoreSandbox = ["-", "-", "-", "-", "-", "-"];
var highscoreSandbox = 0;

var afgelopenScoreInsane = ["-", "-", "-", "-", "-", "-"];
var highscoreInsane = 0;

//score text
var scoresPosX = 140;
var scoresPosY = 225;

//---------------------menu's-------------------
var achtergrondBlokjes = [];
var achtergrondRondjeX = 250;
var achtergrondRondjeY = -500;
var achtergrondNieuwObject = 0;
var achtergrondNieuwSnelheid = [5, 5, 5, 10, 10, 10, 15, 15, 15, 10];
var achtergrondNieuwX = [0, 50, 100, 150, 200, 250, 300, 350, 400, 450, 250];

var menuScherm = 0;
const MENU_MAIN = 0;
const MENU_MODUS = 1;
const MENU_NIVEAU = 2;
const MENU_HIGHSCORE = 3;

//----------------------tutorial---------------
var tutorialScherm = 0;
var tutorialSubScherm = 0;
var eersteKeerTutorial = true;
const TUTORIAL_MENU = 0;
const TUTORIAL_BASIS = 1;
const TUTORIAL_POWERUP = 2;
const TUTORIAL_NAVIGATIE = 3;
const TUTORIAL_SANDBOX = 4;
const TUTORIAL_START = -1;

var tutorialAnimatie = 0;

//-------------------------Sandbox
var sandboxPagina = 1;
const PAGINA_ALGEMEEN = 1;
const PAGINA_POWERUPS = 2;
const PAGINA_GESELECTEERD = 3;

//data
var sandboxGeselecteerdModus = 1;
var sandboxGeselecteerdSoortBlokken = 1;
var sandboxGeselecteerdMaxLevens = 3;
var sandboxBlokjesfactor = 1;
var sandboxStartLevel = 0;
var sandboxAantalBlokjes = 1;
var sandboxPowerupSchildTijd = 5;
var sandboxPowerupTijdTijd = 3;
var sandboxPowerupHartjeEffectiviteit = 1;

//booleans
var sandboxBoolean = [true, false];
var sandboxBooleanPowerups = 0;
var sandboxBooleanTypefout = 0;

//array
var sandboxArrayPowerupKans = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
var sandboxGeselecteerdPowerupKans = 3;
var sandboxArrayBlokjesTijd = [20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90];
var sandboxGeselecteerdBlokjesTijd = 6;
var sandboxArrayKans = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
var sandboxGeselecteerdKansGeel = 3;
var sandboxGeselecteerdKansOranje = 4;
var sandboxGeselecteerdKansRood = 3;
var sandboxBlokjesRandomSnelheid = [5, 5, 5, 10, 10, 10, 10, 15, 15, 15, 15];
var sandboxBlokjesPositie = 1;

/* ==========================================
            FUNCTIES
=========================================== */

//wiskunde
var FloRa = function (getal1, getal2) {
    return floor(random(getal1, getal2));
};

var RoRa = function (getal1, getal2) {
    return round(random(getal1, getal2));
};

//scores
var fixScorePos = function (getal, x, y, grootte) {
    textSize(grootte);
    if (grootte === 23 || 25) { var verzetting = 7; }
    if (grootte === 30) { var verzetting = 8; }
    if (getal === "-") {
        text(getal, x, y);
    } else {
        var i = 10;
        var j = 0;
        while (i < getal) {
            i = i * 10;
            j++;
        }
        text(getal, x - verzetting * j, y);
    }
};

//Logo (start scherm en score scherm)
var logo = function (x, y) {
    noStroke();
    fill(0, 0, 0);
    rect(x - 15, y - 30, 120, 50);

    textSize(30);
    fill(255, 255, 255);
    strokeWeight(1);
    text("Key", x - 5, y);
    textSize(20);
    text("Dash", x + 50, y + 15);
    stroke(255, 255, 255);
    strokeWeight(5);
    line(x, y + 10, x + 40, y + 10);
};

//hartje (levens tekentje / powerup)
var hartje = function (x, y, grootte) {
    fill(255, 0, 0);
    noStroke();
    triangle(x - 10 * grootte, y, x + 10 * grootte, y, x, y + 15 * grootte);
    arc(x - 5 * grootte, y, 10 * grootte, 15 * grootte, 9.42, 0);
    arc(x + 5 * grootte, y, 10 * grootte, 15 * grootte, 9.42, 0);
};

//Powerups
var zandloper = function (x, y) {
    strokeWeight(3);
    stroke(115, 71, 6);
    fill(255, 255, 255);
    quad(x, y - 2, x - 16, y + 16, x + 16, y + 16, x + 1, y - 2);
    quad(x, y + 2, x - 16, y - 16, x + 16, y - 16, x + 1, y + 2);
};

var bubble = function (x, y) {
    strokeWeight(3);
    stroke(46, 119, 179);
    fill(209, 238, 240);
    ellipse(x, y, 30, 30);
};

//menu's
var afgerondVierkant = function (kleurR, kleurG, kleurB, vierkantX, vierkantY, breedte, hoogte) {
    noStroke();
    fill(kleurR, kleurG, kleurB);
    rect(vierkantX, vierkantY, breedte, hoogte);
    rect(vierkantX - 19, vierkantY + 20, 50, hoogte - 45);
    rect(vierkantX + breedte - 25, vierkantY + 20, 50, hoogte - 45);
    ellipse(vierkantX + 6, vierkantY + 25, 50, 50);
    ellipse(vierkantX + 6, vierkantY + hoogte - 25, 50, 50);
    ellipse(vierkantX + breedte, vierkantY + 25, 50, 50);
    ellipse(vierkantX + breedte, vierkantY + hoogte - 25, 50, 50);
}

var achtergrondActiviteit = function () {
    noStroke(); //rondjes op achtergrond
    if (cheatcodeActiveert) {
        fill(0, 255, 0);
    } else {
        fill(7, 110, 166);
    }
    ellipse(achtergrondRondjeX, achtergrondRondjeY, 50, 50);
    if (achtergrondRondjeY > 950) {
        achtergrondRondjeY = -200;
        achtergrondRondjeX = round(random(51, 449));
        cheatcodeActiveert = false;
    }
    achtergrondRondjeY += 10;
    for (var i = 0; i < achtergrondBlokjes.length; i++) { //blokjes op achtergrond
        achtergrondBlokjes[i].verschuif();
        achtergrondBlokjes[i].display();
        if (achtergrondBlokjes[i].y > 950) {
            achtergrondBlokjes.splice(i, 1, new Blok(achtergrondNieuwX[FloRa(0, 10)], achtergrondNieuwSnelheid[FloRa(0, 8)], ""))
        }
    }
};

var geselecteerd = function (x, y) {
    noStroke();
    if (unlocked_standaard) {
        fill(0, 0, 0);
        textSize(33);
        text("Mode:", x, y - 30);
        if (MODUS_ACTIEF !== MODUS_SANDBOX) {
            text("Level:", x, y + 35);
        }
        textSize(27);
        if (MODUS_ACTIEF === MODUS_STANDAARD) { text("Standard", x - 15, y); }
        if (MODUS_ACTIEF === MODUS_GEENPOWERUP) { text("Powerupless", x - 30, y); }
        if (MODUS_ACTIEF === MODUS_EINDELOOS) { text("Endless", x - 5, y); }
        if (MODUS_ACTIEF === MODUS_SANDBOX) { text("Sandbox", x - 10, y); }
        if (MODUS_ACTIEF === MODUS_INSANE) { text("Insane", x, y); }

        if (MODUS_ACTIEF <= 3) {
            if (beginNiveauAlgemeen < 10) { text(beginNiveauAlgemeen, x + 29, y + 65); }
            if (beginNiveauAlgemeen >= 10) { text(beginNiveauAlgemeen, x + 23, y + 65); }
        }

        if (MODUS_ACTIEF === MODUS_INSANE) {
            if (beginNiveauInsane < 10) { text(beginNiveauInsane, x + 29, y + 65); }
            if (beginNiveauInsane >= 10) { text(beginNiveauInsane, x + 23, y + 65); }
        }
    }
};

var NiveauRij = function (x, beginNummer, soort, correctie) {
    for (var i = 0; i < 15; i++) {
        //knoppen
        fill(64, 64, 64);
        stroke(64, 64, 64);
        if (currentKnop === i + beginNummer + 1) { stroke(255, 0, 0); }
        rect(x, 195 + i * 30, 100, 25);

        //text knoppen
        if (i + correctie + beginNummer <= soort) {
            fill(255, 255, 255);
            noStroke();
            textSize(16);
            if (i + beginNummer < 10) {
                text("Level " + (i + beginNummer), x + 25, 215 + i * 30);
            } else {
                text("Level " + (i + beginNummer), x + 22, 215 + i * 30);
            }
        } else {
            strokeWeight(3);
            stroke(255, 0, 0);
            line(x, 195 + i * 30, x + 100, 220 + i * 30);
            line(x, 220 + i * 30, x + 100, 195 + i * 30);
        }
    }
};

var tutorialSubNavigatie = function (y, subSchermMax) {
    fill(64, 64, 64);
    strokeWeight(3);
    //basics
    stroke(64, 64, 64);
    if (currentKnop === 1) { stroke(255, 0, 0); }
    rect(150, y, 150, 30);

    //linker
    if (tutorialSubScherm !== 0) {
        stroke(64, 64, 64);
        if (currentKnop === 2) { stroke(255, 0, 0); }
        rect(110, y, 30, 30);
    }

    //rechter
    if (tutorialSubScherm !== subSchermMax) {
        stroke(64, 64, 64);
        if (currentKnop === 3) { stroke(255, 0, 0); }
        rect(310, y, 30, 30);
    }

    textSize(30);
    noStroke();
    fill(255, 255, 255);
    if (tutorialSubScherm !== 0) {
        text("<", 115, y + 25);
    }
    if (tutorialSubScherm !== subSchermMax) {
        text(">", 315, y + 25);
    }
    textSize(18);
    text("Tutorial Menu", 170, y + 22);
};

var NiveauSchermSelectie = function (modusGeselecteerd) {
    strokeWeight(3);
    if (modusGeselecteerd < 16) {
        //knop niveau 0
        fill(64, 64, 64);
        stroke(64, 64, 64);
        if (currentKnop === 1) { stroke(255, 0, 0); }
        rect(200, 165, 100, 25);

        //text
        fill(255, 255, 255);
        noStroke();
        textSize(16);
        text("Level 0", 225, 185);

        //rij
        NiveauRij(200, 1, modusGeselecteerd, 0);
    } else {
        fill(64, 64, 64);
        stroke(64, 64, 64);
        if (currentKnop === 1) { stroke(255, 0, 0); }
        rect(140, 165, 210, 25);

        fill(255, 255, 255);
        noStroke();
        textSize(16);
        text("Level 0", 225, 185);

        //rij
        NiveauRij(140, 1, modusGeselecteerd, 0);
        NiveauRij(250, 16, modusGeselecteerd, 0);
    }
};

//schermverandering
var menuSchermVerandering = function () {
    currentKnop = 0;
    typeTimer = typeTimerReset;
};

//replay icoon
var replay = function (x, y) {
    noFill();
    stroke(255, 255, 255);
    strokeWeight(3);
    arc(x, y, 40, 40, 0.3, 5.3);
    fill(255, 255, 255);
    translate(x, y);
    rotate(0.7);
    triangle(0, -15, 0, -25, 10, -20);
    rotate(0.7);
    translate(-x, -y);
};

//start van game
var startGame = function (modusParameter, niveauParameter) {
    MODUS = modusParameter;
    if (modusParameter <= 3) {
        aantalBlokjesFactor = 1;
    } else {
        aantalBlokjesFactor = 2;
    }
    voortgangsPunten = niveauMijlpalen[niveauParameter] * aantalBlokjesFactor + 1;

    levens = 3;
    score = 0;
    powerupActief = 0;
    powerupSchildTimer = 0;
    powerupTijdTimer = 0;
    nieuwBlokTimer = -30;
    blokjes.splice(0, blokjes.length);
    cirkels.splice(0, cirkels.length);
    GAMESTATE = GAMESTATE_SPEL;
};

/* ===============================================================================================================
                                SPEL
=============================================================================================================   */
function setup() {
    //scherm
    createCanvas(500, 900);
    background("blue");
    console.log("Set up: Scherm ingesteld");

    //framerate
    frameRate(FRAMERATE);
    console.log("Set up: framerate staat op: " + FRAMERATE);

    //achtergrond voor de menu's 
    for (var i = 0; i < 15; i++) {
        achtergrondNieuwObject = new Blok(blokjesRandomX[FloRa(0, 9)], achtergrondNieuwSnelheid[FloRa(0, 8)], "");
        achtergrondBlokjes.push(achtergrondNieuwObject);
    }

    //gamestate 
    GAMESTATE = GAMESTATE_START;
    console.log("Set up: Compleet");
}

function draw() {
    //basis layout scherm
    background(veranderendeAchtergrond, 0, 0);

    //lijnen
    strokeWeight(1);
    stroke(255, 0, 0);
    line(0, height - 450, 500, height - 450);
    stroke(255, 128, 0);
    line(0, height - 300, 500, height - 300);
    stroke(255, 255, 0);
    line(0, height - 150, 500, height - 150);

    /* ===========================================================
                            Keyboard inputs 
    =========================================================== */
    keyReleased = function () {
        //----------------------START----------------------
        if (GAMESTATE === GAMESTATE_START) { //startscherm 
            GAMESTATE = GAMESTATE_TUTORIAL;
            tutorialScherm = TUTORIAL_START;
            menuSchermVerandering();
            console.log("GAMESTATE: START -> TUTORIAL")
            console.log("Tutorial: Start");
        }

        //-----------------------------TUTORIAL------------
        if (GAMESTATE === GAMESTATE_TUTORIAL) {
            if (tutorialScherm === TUTORIAL_START) { //startscherm tutorial navigatie
                //naar rechts
                if (keyCode === 39 || keyCode === 68) {
                    if (currentKnop === 1 || currentKnop === 3) { currentKnop++; }
                }

                //naar links
                if (keyCode === 37 || keyCode === 65) {
                    if (currentKnop === 2 || currentKnop === 4) { currentKnop--; }
                }

                //naar boven
                if (keyCode === 38 || keyCode === 87) {
                    if (currentKnop >= 3) {
                        currentKnop -= 2;
                    }
                }

                //naar beneden
                if (keyCode === 40 || keyCode === 83) {
                    if (currentKnop <= 3) {
                        currentKnop += 2;
                    } else if (currentKnop === 4) {
                        currentKnop++;
                    }
                }

                //selecteer start tutorial
                if (currentKnop === 5) {
                    if (keyCode === 13 || keyCode === 32) {
                        menuSchermVerandering();
                        tutorialScherm = TUTORIAL_MENU;
                        console.log("Tutorial: Menu");
                    }
                }
            }

            //---------------tutorial menu--------------
            if (tutorialScherm === TUTORIAL_MENU) { //tutorial menu navigatie
                //naar boven
                if (keyCode === 38 || keyCode === 87) {
                    if (currentKnop >= 2) {
                        currentKnop--;
                    }
                }

                //naar beneden
                if (keyCode === 40 || keyCode === 83) {
                    if (currentKnop <= 4) {
                        currentKnop++;
                    }
                }

                //selecteer
                if (keyCode === 13 || keyCode === 32) {
                    if (currentKnop === 1) { //basis knop
                        tutorialScherm = TUTORIAL_BASIS;
                        tutorialSubScherm = 0;
                        menuSchermVerandering();
                        console.log("Tutorial: Basis");
                    }

                    if (currentKnop === 2) { //powerups knop
                        tutorialScherm = TUTORIAL_POWERUP;
                        tutorialSubScherm = 0;
                        menuSchermVerandering();
                        console.log("Tutorial: Powerup");
                    }

                    if (currentKnop === 3) { //menu navigatie knop
                        tutorialScherm = TUTORIAL_NAVIGATIE;
                        tutorialSubScherm = 0;
                        menuSchermVerandering();
                        console.log("Tutorial: Menu Navigatie");
                    }

                    if (currentKnop === 4 && unlocked_sandbox) {
                        tutorialScherm = TUTORIAL_SANDBOX;
                        tutorialSubScherm = 0;
                        menuSchermVerandering();
                        console.log("Tutorial: Sandbox");
                    }

                    if (currentKnop === 5 && eersteKeerTutorial) {
                        startGame(MODUS_KLASSIEK, 0);
                        eersteKeerTutorial = false;
                        console.log("GAMESTATE: TUTORIAL -> SPEL");
                    } else if (currentKnop === 5) {
                        GAMESTATE = GAMESTATE_MENU;
                        menuScherm = MENU_MAIN;
                        menuSchermVerandering();
                        console.log("GAMESTATE: TUTORIAL -> MENU");
                        console.log("Menu: Main");
                    }
                }
            }

            //-------------------ANDERE TUTORIALS-------------
            if (tutorialScherm >= 1) { //navigatie
                //naar links
                if (keyCode === 37 || keyCode === 65) {
                    if (currentKnop === 1 && tutorialSubScherm !== 0) { currentKnop = 2; }
                    if (currentKnop === 3) { currentKnop = 1; }
                }

                //naar rechts
                if (keyCode === 39 || keyCode === 68) {
                    if (tutorialScherm === TUTORIAL_BASIS) {
                        if (currentKnop === 1 && tutorialSubScherm !== 4) { currentKnop = 3; }
                    }
                    if (tutorialScherm === TUTORIAL_POWERUP) {
                        if (currentKnop === 1 && tutorialSubScherm !== 2) { currentKnop = 3; }
                    }
                    if (tutorialScherm === TUTORIAL_NAVIGATIE) {
                        if (currentKnop === 1 && tutorialSubScherm !== 3) { currentKnop = 3; }
                    }
                    if (tutorialScherm === TUTORIAL_SANDBOX) {
                        if (currentKnop === 1 && tutorialSubScherm !== 4) { currentKnop = 3; }
                    }
                    if (currentKnop === 2) { currentKnop = 1; }
                }

                //selecteer
                if (keyCode === 13 || keyCode === 32) {
                    if (currentKnop === 1) {
                        tutorialScherm = TUTORIAL_MENU;
                        menuSchermVerandering();
                        console.log("Tutorial: Menu");
                    }

                    if (currentKnop === 2) {
                        menuSchermVerandering();
                        tutorialSubScherm--;
                    }

                    if (currentKnop === 3) {
                        menuSchermVerandering();
                        tutorialSubScherm++;
                    }
                }
            }
        }

        //--------------------------------SPEL-------------------------------
        //tijdens spel
        if (GAMESTATE === GAMESTATE_SPEL) { //Checkt of er een van de mogelijk knoppen wordt ingedrukt
            // a t/m z
            if (keyCode === 65) { currentKey = "A"; }
            if (keyCode === 66) { currentKey = "B"; }
            if (keyCode === 67) { currentKey = "C"; }
            if (keyCode === 68) { currentKey = "D"; }
            if (keyCode === 69) { currentKey = "E"; }
            if (keyCode === 70) { currentKey = "F"; }
            if (keyCode === 71) { currentKey = "G"; }
            if (keyCode === 72) { currentKey = "H"; }
            if (keyCode === 73) { currentKey = "i"; }
            if (keyCode === 74) { currentKey = "J"; }
            if (keyCode === 75) { currentKey = "K"; }
            if (keyCode === 76) { currentKey = "L"; }
            if (keyCode === 77) { currentKey = "M"; }
            if (keyCode === 78) { currentKey = "N"; }
            if (keyCode === 79) { currentKey = "o"; }
            if (keyCode === 80) { currentKey = "P"; }
            if (keyCode === 81) { currentKey = "Q"; }
            if (keyCode === 82) { currentKey = "R"; }
            if (keyCode === 83) { currentKey = "S"; }
            if (keyCode === 84) { currentKey = "T"; }
            if (keyCode === 85) { currentKey = "U"; }
            if (keyCode === 86) { currentKey = "V"; }
            if (keyCode === 87) { currentKey = "w"; }
            if (keyCode === 88) { currentKey = "X"; }
            if (keyCode === 89) { currentKey = "Y"; }
            if (keyCode === 90) { currentKey = "Z"; }


            //cijfer 0 t/m 9 
            if (keyCode === 48) { currentKey = "0"; }
            if (keyCode === 49) { currentKey = "1"; }
            if (keyCode === 50) { currentKey = "2"; }
            if (keyCode === 51) { currentKey = "3"; }
            if (keyCode === 52) { currentKey = "4"; }
            if (keyCode === 53) { currentKey = "5"; }
            if (keyCode === 54) { currentKey = "6"; }
            if (keyCode === 55) { currentKey = "7"; }
            if (keyCode === 56) { currentKey = "8"; }
            if (keyCode === 57) { currentKey = "9"; }

            //Pijltjes (links, boven, rechts, onder)
            if (keyCode === 37) { currentKey = 1; }
            if (keyCode === 38) { currentKey = 2; }
            if (keyCode === 39) { currentKey = 3; }
            if (keyCode === 40) { currentKey = 4; }

            //spatiebalk
            if (keyCode === 32) { currentKey = 5; }

            //enter
            if (moeilijkheidsgraad === 36) {
                if (keyCode === 13) { currentKey = 6; }
            }
        }

        //------------------------------SCORES---------------------------
        //tijdens resultaaat scores
        if (GAMESTATE === GAMESTATE_SCORES) {
            /*1: replay
            ==2: Menu
            ==3: Modus
            ==4: Tutorial
            ==5: Niveau
            Layout
            =======2><1><3
            =======V==1==V
            =======^==1==^
            =======4>>1<<5 
            */

            //scores navigatie
            //vanuit replay button
            if (currentKnop === 1) {
                if (keyCode === 37 || keyCode === 65) { currentKnop = 2; }
                if (keyCode === 39 || keyCode === 68) { currentKnop = 3; }
            }

            //vanuit boven blokjes
            if (currentKnop === 2 || currentKnop === 3) {
                if (keyCode === 40 || keyCode === 83) { currentKnop += 2; }
            }

            //vanuit onder blokjes
            if (currentKnop === 4 || currentKnop === 5) {
                if (keyCode === 38 || keyCode === 87) { currentKnop -= 2; }
            }

            //vanuit linker blokjes
            if (currentKnop === 2 || currentKnop === 4) {
                if (keyCode === 39 || keyCode === 68) { currentKnop = 1; }
            }

            //vanuit rechter blokjes
            if (currentKnop === 3 || currentKnop === 5) {
                if (keyCode === 37 || keyCode === 65) { currentKnop = 1; }
            }

            //selecteer
            //replay knop
            if (currentKnop === 1) {
                if (keyCode === 13 || keyCode === 32) {
                    if (MODUS === MODUS_KLASSIEK) {
                        startGame(MODUS, 0);
                    } else if (MODUS === MODUS_SANDBOX) {
                        aantalBlokjesFactor = sandboxBlokjesfactor;
                        voortgangsPunten = niveauMijlpalen[sandboxStartLevel] * aantalBlokjesFactor + 1;
                        levens = sandboxGeselecteerdMaxLevens;
                        score = 0;
                        powerupActief = 0;
                        powerupSchildTimer = 0;
                        powerupTijdTimer = 0;
                        nieuwBlokTimer = -30;
                        blokjes.splice(0, blokjes.length);
                        cirkels.splice(0, cirkels.length);

                        GAMESTATE = GAMESTATE_SPEL;
                        console.log("GAMESTATE: SCORES -> SPEL");
                    } else if (MODUS === MODUS_INSANE) {
                        startGame(MODUS, beginNiveauInsane);
                    } else {
                        startGame(MODUS, beginNiveauAlgemeen);
                    }
                    console.log("GAMESTATE: SCORES -> SPEL");
                }
            }
            //menu knop
            if (currentKnop === 2) {
                if (keyCode === 13 || keyCode === 32) {
                    GAMESTATE = GAMESTATE_MENU;
                    menuScherm = MENU_MAIN;
                    menuSchermVerandering();
                    console.log("GAMESTATE: SCORES -> MENU");
                    console.log("Menu: Main");
                }
            }
            //Modus knop
            if (currentKnop === 3) {
                if (keyCode === 13 || keyCode === 32) {
                    GAMESTATE = GAMESTATE_MENU;
                    menuScherm = MENU_MODUS;
                    menuSchermVerandering();
                    console.log("GAMESTATE: SCORES -> MENU");
                    console.log("Menu: Modus");
                }
            }

            //tutorial knop
            if (currentKnop === 4) {
                if (keyCode === 13 || keyCode === 32) {
                    GAMESTATE = GAMESTATE_TUTORIAL;
                    tutorialScherm = TUTORIAL_MENU;
                    menuSchermVerandering();
                    console.log("GAMESTATE: SCORES -> TUTORIAL");
                    console.log("Tutorial: Menu");
                }
            }

            //niveaus knop
            if (currentKnop === 5) {
                if (keyCode === 13 || keyCode === 32) {
                    GAMESTATE = GAMESTATE_MENU;
                    menuScherm = MENU_NIVEAU;
                    menuSchermVerandering();
                    console.log("GAMESTATE: SCORES -> MENU");
                    console.log("Menu: Niveau");
                }
            }
        }

        //-----------------------MENU---------------------
        //tijdens de menu's
        if (GAMESTATE === GAMESTATE_MENU) {
            if (menuScherm === MENU_MAIN) { //main menu navigatie
                //naar boven
                if (keyCode === 38 || keyCode === 87) {
                    if (currentKnop >= 2) { currentKnop--; }
                }

                //naar benden
                if (keyCode === 40 || keyCode === 83) {
                    if (currentKnop <= 4) { currentKnop++; }
                }

                //selecteer
                //klassiek knop
                if (currentKnop === 1) {
                    if (keyCode === 13 || keyCode === 32) {
                        startGame(MODUS_KLASSIEK, 0);
                        console.log("GAMESTATE: MENU -> SPEL");
                    }
                }

                //Modus knop
                if (currentKnop === 2) {
                    if (keyCode === 13 || keyCode === 32) {
                        menuScherm = MENU_MODUS;
                        menuSchermVerandering();
                        console.log("Menu: Modus");
                    }
                }

                //niveau's
                if (currentKnop === 3) {
                    if (keyCode === 13 || keyCode === 32) {
                        menuScherm = MENU_NIVEAU;
                        menuSchermVerandering();
                        console.log("Menu: Niveau");
                    }
                }

                //highscore's
                if (currentKnop === 4) {
                    if (keyCode === 13 || keyCode === 32) {
                        menuScherm = MENU_HIGHSCORE;
                        menuSchermVerandering();
                        console.log("Menu: Highscore");
                    }
                }

                //tutorial
                if (currentKnop === 5) {
                    if (keyCode === 13 || keyCode === 32) {
                        GAMESTATE = GAMESTATE_TUTORIAL;
                        tutorialScherm = TUTORIAL_MENU;
                        menuSchermVerandering();
                        console.log("GAMESTATE: SCORES -> TUTORIAL");
                        console.log("Tutorial: Menu");
                    }
                }
            }

            //---------------------MODUS---------------------
            //menu modus navigatie
            if (menuScherm === MENU_MODUS) {
                if (currentKnop >= 1 && currentKnop <= 6) {
                    if (keyCode === 38 || keyCode === 87) {
                        if (currentKnop !== 1) {
                            currentKnop--;
                        }
                    }
                    if (keyCode === 40 || keyCode === 83) {
                        if (currentKnop !== 6) {
                            currentKnop++;
                        }
                    }
                }

                //links (onderaan)
                if (keyCode === 37 || keyCode === 65) {
                    if (currentKnop === 6) { currentKnop++; }
                    if (currentKnop === 8) { currentKnop -= 2; }
                }

                //naar boven
                if (currentKnop === 7 || currentKnop === 8) {
                    if (keyCode === 38 || keyCode === 87) { currentKnop = 5; }
                }

                //naar rechts
                if (keyCode === 39 || keyCode === 68) {
                    if (currentKnop === 6) { currentKnop += 2; }
                    if (currentKnop === 7) { currentKnop--; }
                }

                //selecteer
                //standaard knop, play knop
                if (unlocked_standaard) {
                    if (keyCode === 13 || keyCode === 32) {
                        if (currentKnop === 1) {
                            MODUS_ACTIEF = MODUS_STANDAARD;
                            console.log("Modus: Standaard");
                        }
                        if (currentKnop === 6) {
                            if (MODUS_ACTIEF === MODUS_SANDBOX) {
                                MODUS = MODUS_SANDBOX;
                                aantalBlokjesFactor = sandboxBlokjesfactor;
                                voortgangsPunten = niveauMijlpalen[sandboxStartLevel] * aantalBlokjesFactor + 1;
                                levens = sandboxGeselecteerdMaxLevens;
                                score = 0;
                                powerupActief = 0;
                                powerupSchildTimer = 0;
                                powerupTijdTimer = 0;
                                nieuwBlokTimer = -30;
                                blokjes.splice(0, blokjes.length);
                                cirkels.splice(0, cirkels.length);

                                //alles custom fixen
                                while (sandboxGeselecteerdKansGeel + sandboxGeselecteerdKansOranje + sandboxGeselecteerdKansRood < 10) {
                                    sandboxGeselecteerdKansGeel++;
                                    if (sandboxGeselecteerdKansGeel + sandboxGeselecteerdKansOranje + sandboxGeselecteerdKansRood < 10) {
                                        sandboxGeselecteerdKansOranje++;
                                    }
                                    if (sandboxGeselecteerdKansGeel + sandboxGeselecteerdKansOranje + sandboxGeselecteerdKansRood < 10) {
                                        sandboxGeselecteerdKansRood++;
                                    }
                                }

                                sandboxBlokjesRandomSnelheid.splice(0, sandboxBlokjesRandomSnelheid.length);
                                for (var i = sandboxGeselecteerdKansGeel; i > 0; i--) {
                                    sandboxBlokjesRandomSnelheid.push(5);
                                }
                                for (var i = sandboxGeselecteerdKansOranje; i > 0; i--) {
                                    sandboxBlokjesRandomSnelheid.push(10);
                                }
                                for (var i = sandboxGeselecteerdKansRood; i > 0; i--) {
                                    sandboxBlokjesRandomSnelheid.push(15);
                                }
                                sandboxBlokjesRandomSnelheid.push(15);
                                GAMESTATE = GAMESTATE_SPEL;
                                console.log("GAMESTATE: MENU -. SPEL");
                            } else if (MODUS_ACTIEF === MODUS_INSANE) {
                                startGame(MODUS_ACTIEF, beginNiveauInsane);
                                console.log("GAMESTATE: MENU -> SPEL");
                            } else {
                                startGame(MODUS_ACTIEF, beginNiveauAlgemeen);
                                console.log("GAMESTATE: MENU -> SPEL");
                            }
                        }
                    }
                }

                //(geen powerup, eindeloos, sandbox, insane) knop
                if (unlocked_geenpowerup && currentKnop === 2) {
                    if (keyCode === 13 || keyCode === 32) {
                        MODUS_ACTIEF = MODUS_GEENPOWERUP;
                        console.log("Modus: Geen Powerup");
                    }
                }

                if (unlocked_eindeloos && currentKnop === 3) {
                    if (keyCode === 13 || keyCode === 32) {
                        MODUS_ACTIEF = MODUS_EINDELOOS;
                        console.log("Modus: Eindeloos");
                    }
                }

                if (unlocked_sandbox && currentKnop === 4) {
                    if (keyCode === 13 || keyCode === 32) {
                        MODUS_ACTIEF = MODUS_SANDBOX;
                        console.log("Modus: Sandbox");
                    }
                }

                if (unlocked_insane && currentKnop === 5) {
                    if (keyCode === 13 || keyCode === 32) {
                        MODUS_ACTIEF = MODUS_INSANE;
                        console.log("Modus: Insane");
                    }
                }

                if (currentKnop === 7) {
                    if (keyCode === 13 || keyCode === 32) {
                        menuSchermVerandering();
                        menuScherm = MENU_MAIN;
                        console.log("Menu: Main");
                    }
                }

                if (currentKnop === 8) {
                    if (keyCode === 13 || keyCode === 32) {
                        menuSchermVerandering();
                        menuScherm = MENU_NIVEAU;
                        console.log("Menu: Niveau")
                    }
                }
            }

            //----------------------NIVEAU MENU---------------
            //menu niveau navigatie
            if (menuScherm === MENU_NIVEAU) {
                if (MODUS_ACTIEF === MODUS_SANDBOX) {
                    //navigatie sandbox algemeen niveau menu
                    //naar beneden
                    if (keyCode === 40 || keyCode === 83) {
                        if (currentKnop >= 29 && currentKnop <= 31) {
                            currentKnop += 3;
                        }
                    }

                    //naar boven
                    if (keyCode === 38 || keyCode === 87) {
                        if (currentKnop >= 4 && currentKnop <= 6) {
                            currentKnop = 1;
                        }
                    }

                    //links
                    if (keyCode === 37 || keyCode === 65) {
                        if (currentKnop === 32) {
                            currentKnop++;
                        }
                        if (sandboxPagina !== PAGINA_ALGEMEEN) {
                            if (currentKnop === 1 || currentKnop === 29) {
                                currentKnop++;
                            }
                        }

                        if (currentKnop === 3 || currentKnop === 31 || currentKnop === 34) {
                            currentKnop -= 2;
                        }
                    }

                    //rechts
                    if (keyCode === 39 || keyCode === 68) {
                        if (currentKnop === 32) {
                            currentKnop += 2;
                        }
                        if (sandboxPagina !== PAGINA_GESELECTEERD) {
                            if (currentKnop === 1 || currentKnop === 29) {
                                currentKnop += 2;
                            }
                        }

                        if (currentKnop === 2 || currentKnop === 30 || currentKnop === 33) {
                            currentKnop--;
                        }
                    }

                    //selecteer sandbox algemeen niveau menu
                    if (keyCode === 13 || keyCode === 32) {
                        if (currentKnop === 1) {
                            //booleans
                            sandboxBooleanTypefout = RoRa(0, 1);
                            sandboxBooleanPowerups = RoRa(0, 1);

                            //geselecteerd
                            //pagina 1 random
                            sandboxGeselecteerdModus = RoRa(1, 3);
                            sandboxGeselecteerdSoortBlokken = RoRa(1, 3);
                            sandboxGeselecteerdMaxLevens = RoRa(1, 999);
                            sandboxBlokjesPositie = RoRa(1, 2);

                            //pagina 2 random
                            sandboxGeselecteerdPowerupKans = RoRa(0, 9);
                            sandboxPowerupTijdTijd = RoRa(1, 10);
                            sandboxPowerupSchildTijd = RoRa(1, 15);
                            sandboxPowerupHartjeEffectiviteit = RoRa(1, 10);

                            //pagina 3
                            sandboxBlokjesfactor = RoRa(1, 10);
                            sandboxStartLevel = RoRa(1, 30);
                            sandboxGeselecteerdBlokjesTijd = RoRa(0, 14);
                            sandboxAantalBlokjes = RoRa(1, 15);

                            sandboxGeselecteerdKansGeel = RoRa(0, 10);
                            sandboxGeselecteerdKansOranje = RoRa(0, 10 - sandboxGeselecteerdKansGeel);
                            sandboxGeselecteerdKansRood = RoRa(0, 10 - sandboxGeselecteerdKansGeel - sandboxGeselecteerdKansOranje);

                            //zorgt ervoor dat het altijd 100 % is
                            while (sandboxGeselecteerdKansGeel + sandboxGeselecteerdKansOranje + sandboxGeselecteerdKansRood < 10) {
                                sandboxGeselecteerdKansGeel++;
                                if (sandboxGeselecteerdKansGeel + sandboxGeselecteerdKansOranje + sandboxGeselecteerdKansRood < 10) {
                                    sandboxGeselecteerdKansOranje++;
                                }
                                if (sandboxGeselecteerdKansGeel + sandboxGeselecteerdKansOranje + sandboxGeselecteerdKansRood < 10) {
                                    sandboxGeselecteerdKansRood++;
                                }
                            }
                        }

                        if (currentKnop === 2 || currentKnop === 30) {
                            if (sandboxPagina !== PAGINA_ALGEMEEN) {
                                menuSchermVerandering();
                                sandboxPagina--;
                            }
                        }

                        if (currentKnop === 3 || currentKnop === 31) {
                            if (sandboxPagina !== PAGINA_GESELECTEERD) {
                                menuSchermVerandering();
                                sandboxPagina++;
                            }
                        }

                        if (currentKnop === 29) {
                            GAMESTATE = GAMESTATE_TUTORIAL;
                            tutorialScherm = TUTORIAL_MENU;
                            menuSchermVerandering();
                            console.log("GAMESTATE: MENU -> TUTORIAl")
                            console.log("Tutorial: Menu");
                        }

                        if (currentKnop === 32) {
                            MODUS = MODUS_SANDBOX;
                            aantalBlokjesFactor = sandboxBlokjesfactor;
                            voortgangsPunten = niveauMijlpalen[sandboxStartLevel] * aantalBlokjesFactor + 1;
                            levens = sandboxGeselecteerdMaxLevens;
                            score = 0;
                            powerupActief = 0;
                            powerupSchildTimer = 0;
                            powerupTijdTimer = 0;
                            nieuwBlokTimer = -30;
                            blokjes.splice(0, blokjes.length);
                            cirkels.splice(0, cirkels.length);

                            //alles custom fixen
                            while (sandboxGeselecteerdKansGeel + sandboxGeselecteerdKansOranje + sandboxGeselecteerdKansRood < 10) {
                                sandboxGeselecteerdKansGeel++;
                                if (sandboxGeselecteerdKansGeel + sandboxGeselecteerdKansOranje + sandboxGeselecteerdKansRood < 10) {
                                    sandboxGeselecteerdKansOranje++;
                                }
                                if (sandboxGeselecteerdKansGeel + sandboxGeselecteerdKansOranje + sandboxGeselecteerdKansRood < 10) {
                                    sandboxGeselecteerdKansRood++;
                                }
                            }

                            sandboxBlokjesRandomSnelheid.splice(0, sandboxBlokjesRandomSnelheid.length);
                            for (var i = sandboxGeselecteerdKansGeel; i > 0; i--) {
                                sandboxBlokjesRandomSnelheid.push(5);
                            }
                            for (var i = sandboxGeselecteerdKansOranje; i > 0; i--) {
                                sandboxBlokjesRandomSnelheid.push(10);
                            }
                            for (var i = sandboxGeselecteerdKansRood; i > 0; i--) {
                                sandboxBlokjesRandomSnelheid.push(15);
                            }
                            sandboxBlokjesRandomSnelheid.push(15);
                            GAMESTATE = GAMESTATE_SPEL;
                            console.log("GAMESTATE: MENU -. SPEL");
                        }

                        if (currentKnop === 33) {
                            menuScherm = MENU_MAIN;
                            menuSchermVerandering();
                            console.log("Menu: Main");
                        }

                        if (currentKnop === 34) {
                            menuScherm = MENU_MODUS;
                            menuSchermVerandering();
                            console.log("Menu: Modus");
                        }
                    }

                    //pagina 1 
                    if (sandboxPagina === sandboxPagina) {
                        //navigatie
                        //naar beneden
                        if (keyCode === 40 || keyCode === 83) {
                            if (currentKnop >= 20 && currentKnop <= 22) {
                                currentKnop = 29;
                            }

                            if (currentKnop >= 13 && currentKnop <= 19) {
                                currentKnop = 20;
                            }

                            if (currentKnop >= 10 && currentKnop <= 12) {
                                currentKnop = 13;
                            }

                            if (currentKnop >= 7 && currentKnop <= 9) {
                                currentKnop = 10;
                            }

                            if (currentKnop >= 4 && currentKnop <= 6) {
                                currentKnop = 7;
                            }
                        }

                        //naar boven
                        if (keyCode === 38 || keyCode === 87) {
                            if (currentKnop >= 7 && currentKnop <= 9) {
                                currentKnop = 4;
                            }

                            if (currentKnop >= 10 && currentKnop <= 12) {
                                currentKnop = 7;
                            }

                            if (currentKnop >= 13 && currentKnop <= 19) {
                                currentKnop = 10;
                            }

                            if (currentKnop >= 20 && currentKnop <= 22) {
                                currentKnop = 13;
                            }

                            if (currentKnop >= 29 && currentKnop <= 31) {
                                currentKnop = 20;
                            }
                        }

                        //links
                        if (keyCode === 37 || keyCode === 65) {
                            if (currentKnop === 4 && sandboxGeselecteerdModus !== 1) {
                                currentKnop++;
                            }

                            if (currentKnop === 7 && sandboxBooleanTypefout !== 0) {
                                currentKnop++;
                            }

                            if (currentKnop === 10 && sandboxGeselecteerdSoortBlokken !== 1) {
                                currentKnop++;
                            }

                            if (currentKnop === 15 && sandboxGeselecteerdMaxLevens > 100) {
                                currentKnop++;
                            }

                            if (currentKnop === 14 && sandboxGeselecteerdMaxLevens > 10) {
                                currentKnop++;
                            }

                            if (currentKnop === 13 && sandboxGeselecteerdMaxLevens > 1) {
                                currentKnop++;
                            }

                            if (currentKnop === 20 && sandboxBlokjesPositie !== 1) {
                                currentKnop++;
                            }

                            if (currentKnop === 6 || currentKnop === 9 || currentKnop === 12 || currentKnop === 22) {
                                currentKnop -= 2;
                            }

                            if (currentKnop === 17) {
                                currentKnop = 13;
                            }

                            if (currentKnop === 18 || currentKnop === 19) {
                                currentKnop--;
                            }
                        }

                        //rechts
                        if (keyCode === 39 || keyCode === 68) {
                            if (currentKnop === 4 && sandboxGeselecteerdModus !== 3) {
                                currentKnop += 2;
                            }

                            if (currentKnop === 7 && sandboxBooleanTypefout !== 1) {
                                currentKnop += 2;
                            }

                            if (currentKnop === 10 && sandboxGeselecteerdSoortBlokken !== 3) {
                                currentKnop += 2;
                            }

                            if (currentKnop === 18 && sandboxGeselecteerdMaxLevens < 899) {
                                currentKnop++;
                            }

                            if (currentKnop === 17 && sandboxGeselecteerdMaxLevens < 989) {
                                currentKnop++;
                            }

                            if (currentKnop === 13 && sandboxGeselecteerdMaxLevens < 999) {
                                currentKnop = 17;
                            }

                            if (currentKnop === 20 && sandboxBlokjesPositie !== 2) {
                                currentKnop += 2;
                            }

                            if (currentKnop === 5 || currentKnop === 8 || currentKnop === 11 || currentKnop === 21) {
                                currentKnop--;
                            }

                            if (currentKnop >= 14 && currentKnop <= 16) {
                                currentKnop--;
                            }
                        }

                        //selecteer
                        if (keyCode === 13 || keyCode === 32) {
                            //modus knoppen
                            if (currentKnop === 5) {
                                sandboxGeselecteerdModus--;
                                if (sandboxGeselecteerdModus === 1) {
                                    currentKnop = 4;
                                }
                            }

                            if (currentKnop === 6) {
                                sandboxGeselecteerdModus++;
                                if (sandboxGeselecteerdModus === 3) {
                                    currentKnop = 4;
                                }
                            }

                            //typefout
                            if (currentKnop === 8) {
                                sandboxBooleanTypefout--;
                                currentKnop = 7;
                            }

                            if (currentKnop === 9) {
                                sandboxBooleanTypefout++;
                                currentKnop = 7;
                            }

                            //toetsenbord
                            if (currentKnop === 11) {
                                sandboxGeselecteerdSoortBlokken--;
                                if (sandboxGeselecteerdSoortBlokken === 1) {
                                    currentKnop = 10;
                                }
                            }

                            if (currentKnop === 12) {
                                sandboxGeselecteerdSoortBlokken++;
                                if (sandboxGeselecteerdSoortBlokken === 3) {
                                    currentKnop = 10;
                                }
                            }

                            //levens
                            if (currentKnop === 14) {
                                sandboxGeselecteerdMaxLevens--;
                                if (sandboxGeselecteerdMaxLevens === 1) {
                                    currentKnop = 13;
                                }
                            }

                            if (currentKnop === 15) {
                                sandboxGeselecteerdMaxLevens -= 10;
                                if (sandboxGeselecteerdMaxLevens < 11) {
                                    currentKnop = 13;
                                }
                            }

                            if (currentKnop === 16) {
                                sandboxGeselecteerdMaxLevens -= 100;
                                if (sandboxGeselecteerdMaxLevens < 101) {
                                    currentKnop = 13;
                                }
                            }

                            if (currentKnop === 17) {
                                sandboxGeselecteerdMaxLevens++;
                                if (sandboxGeselecteerdMaxLevens === 999) {
                                    currentKnop = 13;
                                }
                            }

                            if (currentKnop === 18) {
                                sandboxGeselecteerdMaxLevens += 10;
                                if (sandboxGeselecteerdMaxLevens > 989) {
                                    currentKnop = 13;
                                }
                            }

                            if (currentKnop === 19) {
                                sandboxGeselecteerdMaxLevens += 100;
                                if (sandboxGeselecteerdMaxLevens > 899) {
                                    currentKnop = 13;
                                }
                            }

                            //blokjes positie
                            if (currentKnop === 21) {
                                sandboxBlokjesPositie--;
                                currentKnop = 20;
                            }

                            if (currentKnop === 22) {
                                sandboxBlokjesPositie++;
                                currentKnop = 20;
                            }
                        }
                    }

                    if (sandboxPagina === PAGINA_POWERUPS) {
                        //navigatie
                        //naar beneden
                        if (keyCode === 40 || keyCode === 83) {
                            if (currentKnop >= 20 && currentKnop <= 22) {
                                currentKnop = 29;
                            }

                            if (currentKnop >= 13 && currentKnop <= 17) {
                                currentKnop = 20;
                            }

                            if (currentKnop >= 10 && currentKnop <= 12) {
                                currentKnop = 13;
                            }

                            if (currentKnop >= 7 && currentKnop <= 9) {
                                currentKnop = 10;
                            }

                            if (currentKnop >= 4 && currentKnop <= 6) {
                                if (sandboxBooleanPowerups === 1) {
                                    currentKnop = 29;
                                } else {
                                    currentKnop = 7;
                                }
                            }
                        }

                        //naar boven
                        if (keyCode === 38 || keyCode === 87) {
                            if (currentKnop >= 7 && currentKnop <= 9) {
                                currentKnop = 4;
                            }

                            if (currentKnop >= 10 && currentKnop <= 12) {
                                currentKnop = 7;
                            }

                            if (currentKnop >= 13 && currentKnop <= 17) {
                                currentKnop = 10;
                            }

                            if (currentKnop >= 20 && currentKnop <= 22) {
                                currentKnop = 13;
                            }

                            if (currentKnop >= 29 && currentKnop <= 31) {
                                if (sandboxBooleanPowerups === 1) {
                                    currentKnop = 4;
                                } else {
                                    currentKnop = 20;
                                }
                            }
                        }

                        //links
                        if (keyCode === 37 || keyCode === 65) {
                            if (currentKnop === 4 && sandboxBooleanPowerups !== 0) {
                                currentKnop++;
                            }

                            if (currentKnop === 7 && sandboxGeselecteerdPowerupKans !== 0) {
                                currentKnop++;
                            }

                            if (currentKnop === 10 && sandboxPowerupTijdTijd !== 1) {
                                currentKnop++;
                            }

                            if (currentKnop === 14 && sandboxPowerupSchildTijd > 10) {
                                currentKnop++;
                            }

                            if (currentKnop === 13 && sandboxPowerupSchildTijd > 1) {
                                currentKnop++;
                            }

                            if (currentKnop === 20 && sandboxPowerupHartjeEffectiviteit !== 1) {
                                currentKnop++;
                            }

                            if (currentKnop === 6 || currentKnop === 9 || currentKnop === 12 || currentKnop === 22) {
                                currentKnop -= 2;
                            }

                            if (currentKnop === 16) {
                                currentKnop = 13;
                            }

                            if (currentKnop === 17) {
                                currentKnop--;
                            }
                        }

                        //rechts
                        if (keyCode === 39 || keyCode === 68) {
                            if (currentKnop === 4 && sandboxBooleanPowerups !== 1) {
                                currentKnop += 2;
                            }

                            if (currentKnop === 7 && sandboxGeselecteerdPowerupKans !== 9) {
                                currentKnop += 2;
                            }

                            if (currentKnop === 10 && sandboxPowerupTijdTijd !== 10) {
                                currentKnop += 2;
                            }

                            if (currentKnop === 16 && sandboxPowerupSchildTijd < 5) {
                                currentKnop++;
                            }

                            if (currentKnop === 13 && sandboxPowerupSchildTijd < 15) {
                                currentKnop = 16;
                            }

                            if (currentKnop === 20 && sandboxPowerupHartjeEffectiviteit !== 10) {
                                currentKnop += 2;
                            }

                            if (currentKnop === 5 || currentKnop === 8 || currentKnop === 11 || currentKnop === 21) {
                                currentKnop--;
                            }

                            if (currentKnop === 14 || currentKnop === 15) {
                                currentKnop--;
                            }
                        }

                        //selecteer
                        if (keyCode === 13 || keyCode === 32) {
                            //powerups knoppen
                            if (currentKnop === 5) {
                                sandboxBooleanPowerups--;
                                currentKnop = 4;
                            }

                            if (currentKnop === 6) {
                                sandboxBooleanPowerups++;
                                currentKnop = 4;

                            }

                            //powerup kans
                            if (currentKnop === 8) {
                                sandboxGeselecteerdPowerupKans--;
                                if (sandboxGeselecteerdPowerupKans === 0) {
                                    currentKnop = 7;
                                }
                            }

                            if (currentKnop === 9) {
                                sandboxGeselecteerdPowerupKans++;
                                if (sandboxGeselecteerdPowerupKans === 9) {
                                    currentKnop = 7;
                                }
                            }

                            //powerup tijd tijd
                            if (currentKnop === 11) {
                                sandboxPowerupTijdTijd--;
                                if (sandboxPowerupTijdTijd === 1) {
                                    currentKnop = 10;
                                }
                            }

                            if (currentKnop === 12) {
                                sandboxPowerupTijdTijd++;
                                if (sandboxPowerupTijdTijd === 10) {
                                    currentKnop = 10;
                                }
                            }

                            //powerup schild tijd
                            if (currentKnop === 14) {
                                sandboxPowerupSchildTijd--;
                                if (sandboxPowerupSchildTijd === 1) {
                                    currentKnop = 13;
                                }
                            }

                            if (currentKnop === 15) {
                                sandboxPowerupSchildTijd -= 10;
                                currentKnop = 13;
                            }

                            if (currentKnop === 16) {
                                sandboxPowerupSchildTijd++;
                                if (sandboxPowerupSchildTijd === 15) {
                                    currentKnop = 13;
                                }
                            }

                            if (currentKnop === 17) {
                                sandboxPowerupSchildTijd += 10;
                                currentKnop = 13;
                            }

                            //powerup hartje
                            if (currentKnop === 21) {
                                sandboxPowerupHartjeEffectiviteit--;
                                if (sandboxPowerupHartjeEffectiviteit === 1) {
                                    currentKnop = 20;
                                }
                            }

                            if (currentKnop === 22) {
                                sandboxPowerupHartjeEffectiviteit++;
                                if (sandboxPowerupHartjeEffectiviteit === 1) {
                                    currentKnop = 20;
                                }
                            }
                        }
                    }

                    //anders slaat hij knoppen over
                    if (keyCode === 40 || keyCode === 83) {
                        if (currentKnop >= 1 && currentKnop <= 3) {
                            currentKnop = 4;
                        }
                    }

                    if (keyCode === 38 || keyCode === 87) {
                        if (currentKnop >= 32 && currentKnop <= 34) {
                            currentKnop -= 3;
                        }
                    }


                } else { //navigatie overig niveau menu
                    //naar benden
                    if (keyCode === 40 || keyCode === 83) {
                        if (currentKnop === 16) { currentKnop = 32; }
                        if (currentKnop <= 15 || currentKnop >= 17 && currentKnop <= 31) { currentKnop++; }
                    }

                    //naar boven
                    if (keyCode === 38 || keyCode === 87) {
                        if (currentKnop === 17) { currentKnop = 1; }
                        if (currentKnop <= 16 && currentKnop >= 2 || currentKnop >= 18 && currentKnop <= 31) { currentKnop--; }
                        if (unlocked_standaard) {
                            if (currentKnop === 32) { currentKnop = 16; }
                        }
                    }

                    //naar rechts 
                    if (keyCode === 39 || keyCode === 68) {
                        if (currentKnop >= 2 && currentKnop <= 16) { currentKnop += 15; }
                    }

                    //naar links
                    if (keyCode === 37 || keyCode === 65) {
                        if (currentKnop >= 17 && currentKnop <= 31) { currentKnop -= 15; }
                    }

                    //onderaan naar links
                    if (keyCode === 37 || keyCode === 65) {
                        if (currentKnop === 32) { currentKnop++; }
                        if (currentKnop === 34) { currentKnop -= 2; }
                    }

                    //onderaan naar rechts
                    if (keyCode === 39 || keyCode === 68) {
                        if (currentKnop === 32) { currentKnop += 2; }
                        if (currentKnop === 33) { currentKnop--; }
                    }

                    //onderaan omhoog
                    if (currentKnop === 33 || currentKnop === 34) {
                        if (unlocked_standaard) {
                            if (keyCode === 38 || keyCode === 87) { currentKnop = 16; }
                        }
                    }

                    //niveau menu selecteer
                    if (keyCode === 13 || keyCode === 32) {
                        //speel knop
                        if (unlocked_standaard) {
                            if (currentKnop === 32) {
                                if (MODUS_ACTIEF <= 3) {
                                    startGame(MODUS_ACTIEF, beginNiveauAlgemeen);
                                    console.log("GAMESTATE: MENU -> SPEL");
                                } else {
                                    startGame(MODUS_ACTIEF, beginNiveauInsane);
                                    console.log("GAMESTATE: MENU -> SPEL");
                                }
                            }
                        }

                        //menu knop
                        if (currentKnop === 33) {
                            menuSchermVerandering();
                            menuScherm = MENU_MAIN;
                            console.log("Menu: Main");
                        }

                        //overige knoppen
                        if (currentKnop === 34) {
                            menuSchermVerandering();
                            menuScherm = MENU_MODUS;
                            console.log("Menu: Modus")
                        }

                        if (currentKnop >= 1 && currentKnop <= 31) {
                            if (MODUS_ACTIEF === MODUS_INSANE) {
                                if (currentKnop - 1 <= mogelijkBeginNiveauAlgemeen) {
                                    beginNiveauInsane = currentKnop - 1;
                                }
                            } else {
                                if (currentKnop - 1 <= mogelijkBeginNiveauAlgemeen) {
                                    beginNiveauAlgemeen = currentKnop - 1;
                                }
                            }
                        }
                    }
                }
            }

            //------------------------Highscore---------------------------
            //menu highscore's navigatie
            if (menuScherm === MENU_HIGHSCORE) {
                //naar links
                if (keyCode === 37 || keyCode === 65) {
                    if (currentKnop === 1) { currentKnop++; }
                    if (currentKnop === 3) { currentKnop -= 2; }
                }

                //naar rechts
                if (keyCode === 39 || keyCode === 68) {
                    if (currentKnop === 1) { currentKnop += 2; }
                    if (currentKnop === 2) { currentKnop--; }
                }


                //menu highscore's selecteer
                //menu knop
                if (currentKnop === 1) {
                    if (keyCode === 13 || keyCode === 32) {
                        menuScherm = MENU_MAIN;
                        menuSchermVerandering();
                        console.log("Menu: Main");
                    }
                }

                //modus knop
                if (currentKnop === 2) {
                    if (keyCode === 13 || keyCode === 32) {
                        menuScherm = MENU_MODUS;
                        menuSchermVerandering();
                        console.log("Menu: Modus");
                    }
                }

                //niveau knop
                if (currentKnop === 3) {
                    if (keyCode === 13 || keyCode === 32) {
                        menuScherm = MENU_NIVEAU;
                        menuSchermVerandering();
                        console.log("Menu: Niveau");
                    }
                }
            }

        }
    };

    if (currentKnop === 0) {
        typeTimer--;
        if (menuScherm === MENU_NIVEAU) {
            if (typeTimer === 0 && unlocked_standaard) {
                currentKnop = 1;
            } else if (typeTimer === 0) {
                currentKnop = 32;
            }
        } else {
            if (typeTimer === 0) { currentKnop = 1; }
        }
    }

    mouseClicked = function () {
        if (GAMESTATE === GAMESTATE_START) {
            if (mouseX >= achtergrondRondjeX - 75 && mouseX <= achtergrondRondjeX + 75 && mouseY >= achtergrondRondjeX - 75 && mouseY <= achtergrondRondjeX + 75) {
                cheatcodeActiveert = true;
                mogelijkBeginNiveauAlgemeen = 32;
                mogelijkBeginNiveauInsane = 32;
            }
        }
    }
    /* ============================================================
                                START
    ============================================================ */
    if (GAMESTATE === GAMESTATE_START) {
        //blokjes achtergrond
        achtergrondActiviteit();
        logo(200, 100);

        //animatie
        strokeWeight(1);
        if (elkeKnop < 30) {
            fill(200, 200, 200)
            noStroke();
            rect(125, 510, 235, 40);
            ellipse(125, 530, 40, 40);
            ellipse(360, 530, 40, 40);
            ellipse(1)
            fill(0, 0, 0);
            textSize(23);
            text("press any button to start", 120, 540);
        }

        if (elkeKnop > 60) {
            elkeKnop = startTimer;
        }
        elkeKnop++;
    }

    /* ============================================================
                                TUTORIAL
    ============================================================ */
    if (GAMESTATE === GAMESTATE_TUTORIAL) {
        //---------------------START TUTORIAL---------------------
        if (tutorialScherm === TUTORIAL_START) {
            logo(175, 250);
            afgerondVierkant(210, 210, 210, 100, 275, 250, 400);

            //text
            fill(0, 0, 0);
            textSize(30);
            text("Navigation", 150, 310);
            textSize(20);
            text("Use WASD or the arrow keys", 100, 340);
            text("to move your selected button", 100, 370);
            text("Press enter or the spacebar", 100, 410);
            text("to select your current button", 100, 440);

            textSize(25);
            text("Practice", 175, 525);

            //voor oefenen
            fill(64, 64, 64);
            stroke(64, 64, 64);
            strokeWeight(3);
            if (currentKnop === 1) { stroke(255, 0, 0); }
            rect(120, 535, 100, 30);

            stroke(64, 64, 64);
            if (currentKnop === 2) { stroke(255, 0, 0); }
            rect(230, 535, 100, 30);

            stroke(64, 64, 64);
            if (currentKnop === 3) { stroke(255, 0, 0); }
            rect(120, 575, 100, 30);

            stroke(64, 64, 64);
            if (currentKnop === 4) { stroke(255, 0, 0); }
            rect(230, 575, 100, 30);

            //menu tutorial
            stroke(64, 64, 64);
            if (currentKnop === 5) { stroke(255, 0, 0); }
            rect(120, 615, 210, 40);

            noStroke();
            fill(255, 255, 255);
            text("Tutorial Menu", 150, 645);
        }

        //---------------TUTORIAL MENU---------------
        if (tutorialScherm === TUTORIAL_MENU) {
            logo(175, 250);
            afgerondVierkant(210, 210, 210, 100, 275, 250, 400);

            //text
            fill(0, 0, 0);
            textSize(30);
            text("Tutorial", 175, 310);
            textSize(20);
            text("Select the option you want to", 100, 340);
            text("know more about, once you", 105, 370);
            if (eersteKeerTutorial) {
                text("are done, select: play", 120, 400);
            } else {
                text("are done, select: Main Menu", 100, 400);
            }


            fill(64, 64, 64);
            //basics
            stroke(64, 64, 64);
            if (currentKnop === 1) { stroke(255, 0, 0); }
            rect(120, 415, 210, 40);

            //powerups
            stroke(64, 64, 64);
            if (currentKnop === 2) { stroke(255, 0, 0); }
            rect(120, 465, 210, 40);

            //menu navigatie
            stroke(64, 64, 64);
            if (currentKnop === 3) { stroke(255, 0, 0); }
            rect(120, 515, 210, 40);

            //sandbox
            stroke(64, 64, 64);
            if (currentKnop === 4) { stroke(255, 0, 0); }
            rect(120, 565, 210, 40);

            //main menu / menu
            stroke(64, 64, 64);
            if (currentKnop === 5) { stroke(255, 0, 0); }
            rect(120, 615, 210, 40);

            textSize(20);
            noStroke();
            fill(255, 255, 255);
            text("Basics", 190, 443);
            text("Powerups", 175, 493);
            text("Menu Navigation", 150, 543);

            //zorgt ervoor dat ze niet teveel informatie krijgen
            if (eersteKeerTutorial) {
                text("Play", 200, 643);
            } else {
                text("Main Menu", 175, 643);
            }

            if (unlocked_sandbox) {
                text("Sandbox", 180, 593);
            } else {
                textSize(17);
                text("Reach level 21 to unlock", 135, 593);
            }
        }

        //--------------TUTORIAL BASIS-------------------
        if (tutorialScherm === TUTORIAL_BASIS) {
            //subscherm 0 -------------------------------------------
            if (tutorialSubScherm === 0) {
                logo(175, 250);
                afgerondVierkant(210, 210, 210, 100, 275, 250, 250);

                //text
                fill(0, 0, 0);
                textSize(30);
                text("Basics", 175, 310);

                textSize(20);
                text("In this tutorial you will Learn:", 100, 340);
                text("-How to play", 160, 370);
                text("-How to get points", 135, 400);
                text("-The U.I.", 170, 430);
                text("-How to get a game over", 115, 460);
                tutorialSubNavigatie(475, 4);
            }

            //subscherm 1 ----------------------------------------
            if (tutorialSubScherm === 1) {
                logo(175, 450);
                afgerondVierkant(210, 210, 210, 100, 475, 250, 400);
                tutorialSubNavigatie(825, 4);

                //animatie
                if (tutorialAnimatie > 120) {
                    tutorialAnimatie = 0;
                }

                noStroke();
                if (tutorialAnimatie <= 60) {
                    fill(255, 255, 0);
                    rect(320, tutorialAnimatie * 5, 50, 50);
                    textSize(45);
                    fill(0, 0, 0);
                    text("T", 330, tutorialAnimatie * 5 + 42);
                }

                if (tutorialAnimatie > 30 && tutorialAnimatie < 90) {
                    if (tutorialAnimatie >= 45 && tutorialAnimatie <= 60) {
                        fill(96, 96, 96);
                    } else {
                        fill(255, 255, 255);
                    }
                    rect(400, 200, 50, 50);
                    textSize(45);
                    fill(0, 0, 0);
                    text("T", 410, 242);
                }

                tutorialAnimatie++;

                fill(255, 255, 0);
                rect(70, 175, 50, 50);
                textSize(45);
                fill(0, 0, 0);
                text("0", 80, 217);

                fill(255, 255, 0);
                rect(130, 175, 50, 50);
                textSize(45);
                fill(0, 0, 0);
                text("o", 140, 217);


                //text
                noStroke();
                fill(0, 0, 0);
                textSize(30);
                text("How to Play", 135, 510);
                textSize(20);
                text("Once you start your game, ", 105, 540);
                text("there will be blocks falling from ", 95, 570);
                text("the ceiling. These blocks have ", 95, 600);
                text("letters or numbers in them, ", 100, 630);
                text("push the corresponding key ", 105, 660);
                text("on your keyboard to destroy ", 105, 690);
                text("them, capitals don't matter", 105, 720);
                text("Be Warned:", 165, 750);
                text("Zero( 0 ) and letter O ( o )", 115, 780);
                text("look like eachother.", 145, 810);
            }


            //subscherm 2 --------------------------------------------
            if (tutorialSubScherm === 2) {
                logo(175, 500);
                afgerondVierkant(210, 210, 210, 100, 525, 250, 275);
                tutorialSubNavigatie(760, 4);

                //animatie
                if (tutorialAnimatie > 120) {
                    tutorialAnimatie = 0;
                }

                noStroke();
                if (tutorialAnimatie <= 60) {
                    fill(255, 255, 0);
                    rect(70, tutorialAnimatie * 5, 50, 50);
                    rect(280, tutorialAnimatie * 5, 50, 50);
                    rect(230, tutorialAnimatie * 5, 50, 50);
                    textSize(45);
                    fill(0, 0, 0);
                    text("1", 80, tutorialAnimatie * 5 + 42);
                    text("2", 290, tutorialAnimatie * 5 + 42);
                    text("2", 240, tutorialAnimatie * 5 + 42);
                }

                if (tutorialAnimatie > 30 && tutorialAnimatie < 90) {
                    if (tutorialAnimatie >= 45 && tutorialAnimatie <= 60) {
                        fill(96, 96, 96);
                    } else {
                        fill(255, 255, 255);
                    }
                    rect(150, 200, 50, 50);
                    rect(350, 200, 50, 50);
                    textSize(45);
                    fill(0, 0, 0);
                    text("1", 160, 242);
                    text("2", 360, 242);

                    if (tutorialAnimatie > 60) {
                        textSize(50);
                        fill(255, 255, 255);
                        text("+10", 55, 320);
                        text("+50", 235, 320);
                    }
                }

                tutorialAnimatie++;

                //text
                noStroke();
                fill(0, 0, 0);
                textSize(30);
                text("How to get points", 110, 560);
                textSize(20);
                text("If you destroy a block, you get ", 95, 590);
                text("points, the amount of points", 105, 620);
                text("gained results in the amount", 100, 650);
                text("of blocks that got destroyed", 100, 680);
                text(" in one go. The more you,", 115, 710);
                text("the more points you get! ", 125, 740);
            }

            if (tutorialSubScherm === 3) {
                afgerondVierkant(210, 210, 210, 100, 770, 250, 100);
                tutorialSubNavigatie(820, 4);

                //text
                noStroke();
                fill(0, 0, 0);
                textSize(30);
                text("U.I.", 190, 810);

                noStroke();
                fill(128, 128, 128);
                rect(0, 0, 500, 50);
                rect(450, 0, 50, 900);

                //moeilijkheidsgraad
                fill(40, 40, 150);
                fixScorePos(7, width - 35, 400, 30);

                //score
                fill(0, 0, 0);
                fixScorePos(1370, 200, 40, 30);

                //levens
                for (var i = 0; i < 3; i++) {
                    hartje(width - 25, 100 + 50 * i, 2);
                }

                //procent kans op blokjes
                textSize(15);
                fill(255, 255, 0);
                text("60%", 455, 500);
                fill(255, 128, 0);
                text("30%", 455, 520);
                fill(255, 0, 0);
                text("20%", 455, 540);

                //powerups
                noStroke();
                fill(64, 64, 64);
                rect(455, 300, 40, 40);

                //highlights van U.I.
                stroke(210, 210, 210);
                strokeWeight(3);
                noFill();

                //score
                rect(170, 10, 80, 35);
                line(180, 45, 180, 75);
                afgerondVierkant(210, 210, 210, 100, 75, 200, 55);
                noStroke();
                fill(0, 0, 0);
                textSize(20);
                text("Your points", 150, 110);

                //levens
                stroke(210, 210, 210);
                noFill();
                rect(450, 80, 60, 160);
                line(120, 180, 450, 180);
                afgerondVierkant(210, 210, 210, 100, 150, 200, 55);
                noStroke();
                fill(0, 0, 0);
                textSize(20);
                text("Amount of lives", 135, 185);

                //powerup vakje
                stroke(210, 210, 210);
                noFill();
                rect(450, 290, 50, 60);
                line(120, 320, 450, 320);
                afgerondVierkant(210, 210, 210, 100, 250, 220, 80);
                noStroke();
                fill(0, 0, 0);
                textSize(20);
                text("This will show your powerup", 90, 285);
                text(", if you have one", 145, 310);

                //moeilijkheids graad
                stroke(210, 210, 210);
                noFill();
                rect(460, 365, 30, 40);
                line(120, 375, 460, 375);
                afgerondVierkant(210, 210, 210, 100, 350, 200, 55);
                noStroke();
                fill(0, 0, 0);
                textSize(20);
                text("Your level", 150, 385);

                //percentage snelheid blokjes
                stroke(210, 210, 210);
                noFill();
                rect(450, 480, 50, 65);
                line(120, 500, 450, 500);
                afgerondVierkant(210, 210, 210, 100, 430, 250, 150);
                noStroke();
                fill(0, 0, 0);
                textSize(20);
                text("Blocks come in three different", 95, 465);
                text("speeds, fast (red), medium", 105, 490);
                text("(orange) and slow (yellow)", 105, 515);
                text("This shows the chance of one", 95, 540);
                text("spawning", 180, 565);

                //lijnen
                stroke(210, 210, 210);
                line(20, 750, 30, 750);
                line(20, 600, 30, 600);
                line(20, 450, 30, 450);
                line(30, 450, 30, 750);
                line(30, 650, 120, 650);
                afgerondVierkant(210, 210, 210, 100, 620, 240, 105);
                noStroke();
                fill(0, 0, 0);
                textSize(20);
                text("Blocks with the corresponding", 95, 655);
                text("color of these line will go", 105, 680);
                text("offscreen in one second", 105, 705);
            }

            if (tutorialSubScherm === 4) {
                logo(175, 150);
                afgerondVierkant(210, 210, 210, 100, 75, 250, 200);
                tutorialSubNavigatie(230, 4);

                //text
                noStroke();
                fill(0, 0, 0);
                textSize(25);
                text("How to get a game over", 100, 105);
                textSize(20);
                text("you lose your lives with", 120, 135);
                text("typo's or blocks going", 120, 160);
                text("offscreen, once your lives", 115, 185);
                text("reach zero, you lose", 125, 210)

                //animatie
                if (tutorialAnimatie > 150) {
                    tutorialAnimatie = 0;
                }

                noStroke();
                if (tutorialAnimatie <= 120) {
                    fill(255, 255, 0);
                    rect(225, tutorialAnimatie * 5 + 450, 50, 50);
                    textSize(45);
                    fill(0, 0, 0);
                    text("G", 235, tutorialAnimatie * 5 + 492);
                }

                if (tutorialAnimatie > 30 && tutorialAnimatie < 90) {
                    if (tutorialAnimatie >= 45 && tutorialAnimatie <= 60) {
                        fill(96, 96, 96);
                    } else {
                        fill(255, 255, 255);
                    }
                    rect(295, 600, 50, 50);
                    textSize(45);
                    fill(0, 0, 0);
                    text("F", 300, 642);
                    textSize(25);
                    if (tutorialAnimatie > 60) {
                        fill(255, 0, 0);
                        text("-1 life", 285, 680);
                    }
                }

                if (tutorialAnimatie > 90 && tutorialAnimatie <= 120) {
                    textSize(25);
                    fill(255, 0, 0);
                    text("-1 life", 205, height - 30);
                }

                tutorialAnimatie++;

            }
        }

        //--------------TUTORIAL POWERUPS-----------------
        if (tutorialScherm === TUTORIAL_POWERUP) {
            if (tutorialSubScherm === 0) {
                logo(175, 250);
                afgerondVierkant(210, 210, 210, 100, 225, 250, 200);
                tutorialSubNavigatie(375, 3);

                //text
                fill(0, 0, 0);
                textSize(30);
                text("Powerups", 155, 270);

                textSize(20);
                text("In this tutorial you will Learn:", 100, 300);
                text("-Basic powerups", 150, 325);
                text("-Kinds of powerups", 145, 350);
            }

            if (tutorialSubScherm === 1) {
                logo(175, 200);
                afgerondVierkant(210, 210, 210, 100, 225, 250, 335);
                tutorialSubNavigatie(510, 2);

                //text
                fill(0, 0, 0);
                textSize(30);
                text("Basic Powerups", 125, 270);

                textSize(20);
                text("Powerups are blue circles with", 95, 300);
                text("arrows in them, press on the", 100, 325);
                text("corresponding arrow key, to ", 103, 350);
                text("get a random powerup", 130, 375);

                text("Getting a powerup gives you", 100, 410);
                text("25 Points", 170, 435);

                text("press the spacebar to activate", 100, 470);
                text("the powerup you have", 130, 495);
            }

            if (tutorialSubScherm === 2) {
                logo(175, 250);
                afgerondVierkant(210, 210, 210, 100, 275, 250, 530);
                tutorialSubNavigatie(760, 2);

                //Onderwerpen
                fill(0, 0, 0);
                textSize(30);
                text("Hourglass", 155, 310);
                text("Heart", 185, 470);
                text("Barrier", 177, 580)

                //blokjes met powerups erin
                fill(64, 64, 64);
                rect(200, 320, 40, 40);
                rect(200, 480, 40, 40);
                rect(200, 590, 40, 40);
                zandloper(220, 340);
                hartje(220, 500, 1);
                bubble(220, 610);

                //text
                textSize(20);
                fill(0, 0, 0);
                noStroke();
                //tijd powerup
                text("Stops time for a few seconds.", 95, 380);
                text("The brown bar above shows ", 105, 405);
                text("amount of time you still have", 95, 430);

                //hartje powerup
                text("Adds a life", 170, 540);

                //schild powerup
                text("Creates a barrier for a few", 105, 650);
                text("seconds. This stop all blocks", 100, 675);
                text("This turns more white if it's", 115, 700);
                text("is duration is smaller then", 110, 725);
                text("one second", 170, 750);

                //zorgt voor betere animatie
                noStroke();
                fill(128, 128, 128);
                rect(0, 0, 500, 50);
                rect(450, 0, 50, 900);

                //animatie
                noStroke();
                if (tutorialAnimatie > 180) {
                    tutorialAnimatie = 0;
                }

                if (tutorialAnimatie < 150) {
                    //kleur
                    if (tutorialAnimatie < 120) { //normale kleur
                        fill(46, 119, 179)
                    } else { //korte tijd dan een seconde
                        fill(209, 238, 240);
                    }
                    //tijdbalk
                    rect(0, height - 20, 450, 20);

                    if (tutorialAnimatie >= 30 && tutorialAnimatie < 120) {
                        fill(204, 163, 81);
                        rect(0, 50, 450 - (5 * (tutorialAnimatie - 30)), 30);
                    }
                }

                tutorialAnimatie++;
            }
        }


        //--------------TUTOIRAL MENU NAVIGATIE------------
        if (tutorialScherm === TUTORIAL_NAVIGATIE) {
            if (tutorialSubScherm === 0) {
                logo(175, 150);
                afgerondVierkant(210, 210, 210, 100, 175, 250, 250);
                tutorialSubNavigatie(375, 3);

                //text
                fill(0, 0, 0);
                textSize(30);
                text("Menu Navigation", 125, 220);

                textSize(20);
                text("In this tutorial you will Learn:", 100, 250);
                text("-Difference between classic ", 100, 275);
                text("and other modes", 155, 300);
                text("-levels", 195, 325);
                text("-Highscores", 170, 350);
            }

            if (tutorialSubScherm === 1) {
                logo(175, 150);
                afgerondVierkant(210, 210, 210, 100, 175, 250, 400);
                tutorialSubNavigatie(525, 3);

                //text
                fill(0, 0, 0);
                textSize(30);
                text("Difference between ", 100, 220);
                text("clasic and other ", 120, 255);
                text("modes", 170, 290);

                textSize(20);
                text("Classic is the only mode", 120, 325);
                text("which you can play to", 130, 350);
                text("unlock new modes and", 120, 375);
                text("new levels. With", 150, 400);
                text("classic you always start", 120, 425);
                text("at level 0, with the other", 120, 450);
                text("modes you can choose your", 105, 475);
                text("starting level", 170, 500);
            }

            if (tutorialSubScherm === 2) {
                logo(175, 360);
                afgerondVierkant(210, 210, 210, 100, 385, 250, 200);
                tutorialSubNavigatie(525, 3);

                //text
                fill(0, 0, 0);
                textSize(30);
                text("Levels", 180, 420);

                textSize(20);
                text("You can unlock new levels", 110, 450);
                text("by reaching 5 levels above", 105, 475);
                text("the unlocked level.", 140, 500);
            }

            if (tutorialSubScherm === 3) {
                logo(175, 360);
                afgerondVierkant(210, 210, 210, 100, 385, 250, 250);
                tutorialSubNavigatie(575, 3);

                //text
                fill(0, 0, 0);
                textSize(30);
                text("Highscores", 155, 420);

                textSize(20);
                text("You can always look at", 120, 450);
                text("your highscores for your", 115, 475);
                text("unlocked modes at the", 130, 500);
                text("highscores section of the", 120, 525);
                text("main menu", 170, 550);
            }
        }

        //--------------TUTORIAL SANDBOX-------------------
        if (tutorialScherm === TUTORIAL_SANDBOX) {
            if (tutorialSubScherm === 0) {
                logo(175, 150);
                afgerondVierkant(210, 210, 210, 100, 175, 250, 190);
                tutorialSubNavigatie(315, 4);

                //text
                fill(0, 0, 0);
                textSize(30);
                text("Sandbox", 150, 220);

                textSize(20);
                text("In this tutorial you will Learn:", 100, 250);
                text("-What is sandbox? ", 150, 275);
                text("-What can I edit?", 155, 300);
            }

            if (tutorialSubScherm === 1) {
                logo(175, 150);
                afgerondVierkant(210, 210, 210, 100, 175, 250, 265);
                tutorialSubNavigatie(390, 4);

                //text
                fill(0, 0, 0);
                textSize(30);
                text("What is sandbox? ", 110, 220);

                textSize(20);
                text("Sandbox is the only mode", 120, 250);
                text("in which you can change", 120, 275);
                text("the basic settings. ", 135, 300);
                text("Are you irritated with", 135, 325);
                text("normal settings? ", 145, 350);
                text("Change it!", 180, 375);
            }

            if (tutorialSubScherm === 2) {
                logo(175, 40);
                afgerondVierkant(210, 210, 210, 100, 85, 250, 610);
                tutorialSubNavigatie(650, 4);

                //text
                fill(0, 0, 0);
                textSize(30);
                text("What can I edit?", 115, 120);

                textSize(20);
                text("Random: At the top of every", 100, 150);
                text("page, is the random button.", 100, 175);
                text("This changes all possible ", 130, 200);
                text("options to something random", 100, 225);

                text("Game: let's you select what", 110, 260);
                text("kind of mode you want, the", 105, 285);
                text("mode standard, and endless", 100, 310);
                text("are based on the real modes.", 100, 335);
                text("Custom is endless but with", 100, 360);
                text("your settings", 160, 385);

                text("Possible keys: This changes", 100, 420);
                text("what kind of buttons you ", 115, 445);
                text("will have to press, keyboard", 100, 470);
                text("Has both numbers and letters", 100, 495);
                text("and the rest is pretty self ", 100, 520);
                text("explanatory.", 160, 545);

                text("Blocks positions: Lines are", 100, 580);
                text("pre-set locations, while", 120, 605);
                text("random is completely random", 100, 630);
            }

            if (tutorialSubScherm === 3) {
                logo(175, 60);
                afgerondVierkant(210, 210, 210, 100, 85, 250, 355);
                tutorialSubNavigatie(390, 4);

                //text
                fill(0, 0, 0);
                textSize(30);
                text("What can I edit?", 115, 120);

                textSize(20);
                text("Time: How long is a powerup", 100, 150);
                text("in effect.", 180, 175);

                text("Heart effectivity: how many ", 110, 210);
                text("lives does the heart powerup", 105, 235);
                text("add", 215, 260);


                text("If you haven't noticed it", 125, 305);
                text("yet, this tutorial only", 140, 330);
                text("explains the not self", 140, 355);
                text("explanatory settings", 130, 380);
            }

            if (tutorialSubScherm === 4) {
                logo(175, 60);
                afgerondVierkant(210, 210, 210, 100, 85, 250, 370);
                tutorialSubNavigatie(405, 4);

                //text
                fill(0, 0, 0);
                textSize(30);
                text("What can I edit?", 115, 120);

                textSize(20);
                text("This page depends on the", 115, 150);
                text("selected sandbox mode.", 120, 175);

                text("Blocks Time: how many ", 120, 210);
                text("ticks does it take to", 135, 235);
                text("spawn a new block", 135, 260);
                text("(30 ticks per second)", 120, 285);

                text("Blocks multiplier: This", 125, 320);
                text("multiplies the blocks", 140, 345);
                text("that normally spawn in", 120, 370);
                text("the normal modes", 135, 395);
            }
        }

    }

    /* =============================================================
                                MENU
    ============================================================= */
    if (GAMESTATE === GAMESTATE_MENU) {
        achtergrondActiviteit();

        /* ===================MAIN MENU=========================== 
        ======================================================= */
        if (menuScherm === MENU_MAIN) {
            logo(200, 200);
            afgerondVierkant(210, 210, 210, 190, 245, 100, 320);

            //basis voor knoppen
            fill(64, 64, 64);
            strokeWeight(3);

            //klassiek knop
            stroke(64, 64, 64);
            if (currentKnop === 1) { stroke(255, 0, 0); }
            rect(180, 270, 125, 45);

            //Modus knop
            stroke(64, 64, 64);
            if (currentKnop === 2) { stroke(255, 0, 0); }
            rect(180, 325, 125, 45);

            //niveaus knop
            stroke(64, 64, 64);
            if (currentKnop === 3) { stroke(255, 0, 0); }
            rect(180, 380, 125, 45);

            //highscores knop
            stroke(64, 64, 64);
            if (currentKnop === 4) { stroke(255, 0, 0); }
            rect(180, 435, 125, 45);

            //tutorial knop
            stroke(64, 64, 64);
            if (currentKnop === 5) { stroke(255, 0, 0); }
            rect(180, 490, 125, 45);

            //text van knoppen
            textSize(28);
            fill(255, 255, 255);
            noStroke();
            text("Classic", 195, 302);
            text("Modes", 200, 357);
            text("Levels", 200, 412);
            text("Tutorial", 195, 522);
            textSize(22);
            text("Highscores", 186, 467);
        }

        /* =================MODUS MENU============================ 
        ======================================================= */
        if (menuScherm === MENU_MODUS) {
            logo(200, 50);
            afgerondVierkant(210, 210, 210, 75, 75, 350, 730);

            fill(0, 0, 0);
            textSize(60);
            text("Modes", 160, 145);
            textSize(35);

            //geselecteerde modus met omschrijving
            if (currentKnop === 1 && unlocked_standaard) {
                text("Standard", 173, 175);
                textSize(27);
                text("Effect:", 200, 205);
                textSize(23);
                text("Classic: but you can choose", 110, 235);
                text("your starting level", 160, 260);
                textSize(20);
                text("'Not as boring as classic'", 135, 290);
            }

            if (currentKnop === 2 && unlocked_geenpowerup) {
                text("Powerupless", 145, 175);
                textSize(27);
                text("Effect:", 200, 205);
                textSize(23);
                text("No powerups", 175, 235);
                textSize(20);
                text(" '100% Skill'", 180, 265);
            }

            if (currentKnop === 3 && unlocked_eindeloos) {
                text("Endless", 180, 175);
                textSize(27);
                text("Effect:", 200, 205);
                text("Same level, endlessly", 120, 235)
                textSize(23);
                textSize(20);
                text("'For if you are depressed", 140, 265);
                text("because of your low scores'", 130, 290);
            }

            if (currentKnop === 4 && unlocked_sandbox) {
                text("Sandbox", 170, 175);
                textSize(27);
                text("Effect:", 200, 205);
                textSize(23);
                text("Your own settings", 150, 235)
                textSize(20);
                text("'If you aren't satisfied yet'", 135, 265);
            }

            if (currentKnop === 5 && unlocked_insane) {
                text("Insane", 190, 175);
                textSize(27);
                text("Effect:", 200, 205);
                textSize(23);
                text("Standard on steroids", 140, 235);
                textSize(20);
                text("The more, the merrier. Right..?", 120, 270);
            }

            fill(64, 64, 64);
            strokeWeight(3);

            //standaard knop
            stroke(64, 64, 64);
            if (currentKnop === 1) { stroke(255, 0, 0); }
            rect(140, 305, 220, 50);

            //powerupless kop
            stroke(64, 64, 64);
            if (currentKnop === 2) { stroke(255, 0, 0); }
            rect(140, 365, 220, 50);

            //eindeloos knop
            stroke(64, 64, 64);
            if (currentKnop === 3) { stroke(255, 0, 0); }
            rect(140, 425, 220, 50);

            //sandbox knop
            stroke(64, 64, 64);
            if (currentKnop === 4) { stroke(255, 0, 0); }
            rect(140, 485, 220, 50);

            //insane knop
            stroke(64, 64, 64);
            if (currentKnop === 5) { stroke(255, 0, 0); }
            rect(140, 545, 220, 50);

            //speel knop
            stroke(64, 64, 64);
            if (currentKnop === 6) { stroke(255, 0, 0); }
            rect(200, 750, 100, 30);

            //menu knop
            stroke(64, 64, 64);
            if (currentKnop === 7) { stroke(255, 0, 0); }
            rect(90, 750, 100, 30);

            //niveau knop
            stroke(64, 64, 64);
            if (currentKnop === 8) { stroke(255, 0, 0); }
            rect(310, 750, 100, 30);


            fill(255, 255, 255);
            noStroke();
            textSize(23)
            text("Menu", 110, 775);
            text("Levels", 325, 775);

            if (unlocked_standaard) {
                text("Play", 225, 775);
            } else {
                strokeWeight(3);
                stroke(255, 0, 0);
                line(200, 750, 300, 780);
                line(200, 780, 300, 750);
            }

            geselecteerd(200, 665);

            //text knoppen
            //unlocked standaard knop
            fill(255, 255, 255);
            if (unlocked_standaard) {
                textSize(29);
                text("Standard", 185, 340);
            } else {
                textSize(19);
                text("Reach level 6 to unlock", 150, 335);
            }

            //unlocked geen powerup knop
            if (unlocked_geenpowerup) {
                textSize(29);
                text("Powerupless", 170, 400);
            } else {
                textSize(18);
                text("Reach level 11 to unlock", 150, 400)
            }

            //unlocked eindeloos knop
            if (unlocked_eindeloos) {
                textSize(29);
                text("Endless", 195, 460);
            } else {
                textSize(18);
                text("Reach level 16 to unlock", 150, 460)
            }

            //unlocked sandbox knop
            if (unlocked_sandbox) {
                textSize(29);
                text("Sandbox", 195, 520);
            } else {
                textSize(18);
                text("Reach level 21 to unlock", 150, 520)
            }

            //unlocked insane knop
            if (unlocked_insane) {
                textSize(29);
                text("Insane", 200, 580);
            } else {
                textSize(17);
                text("Complete classic to unlock", 150, 577)
            }
        }

        /*=================NIVEAU MENU===========================
        ======================================================= */
        if (menuScherm === MENU_NIVEAU) {
            logo(200, 50);
            afgerondVierkant(210, 210, 210, 75, 75, 350, 775);

            fill(0, 0, 0);
            textSize(60);
            text("Levels", 160, 145);
            textSize(35);
            if (unlocked_standaard) { //normale modus
                if (MODUS_ACTIEF <= 3) { NiveauSchermSelectie(mogelijkBeginNiveauAlgemeen); }
                if (MODUS_ACTIEF === MODUS_INSANE) { NiveauSchermSelectie(mogelijkBeginNiveauInsane); }
                if (MODUS_ACTIEF === MODUS_SANDBOX) { //sandbox modus

                    strokeWeight(3);
                    fill(64, 64, 64);
                    //random knop
                    stroke(64, 64, 64);
                    if (currentKnop === 1) { stroke(255, 0, 0); }
                    rect(180, 155, 140, 30);

                    //tutorial knop
                    stroke(64, 64, 64);
                    if (currentKnop === 29) { stroke(255, 0, 0); }
                    rect(180, 760, 140, 30);

                    if (sandboxPagina !== 1) {//terug pagina knoppen
                        stroke(64, 64, 64);
                        if (currentKnop === 2) { stroke(255, 0, 0); }
                        rect(130, 155, 40, 30);

                        stroke(64, 64, 64);
                        if (currentKnop === 30) { stroke(255, 0, 0); }
                        rect(130, 760, 40, 30);
                    }

                    if (sandboxPagina !== 3) {//volgende pagina knoppen
                        stroke(64, 64, 64);
                        if (currentKnop === 3) { stroke(255, 0, 0); }
                        rect(330, 155, 40, 30);

                        stroke(64, 64, 64);
                        if (currentKnop === 31) { stroke(255, 0, 0); }
                        rect(330, 760, 40, 30);
                    }

                    //text
                    fill(255, 255, 255);
                    noStroke();
                    textSize(23)
                    text("Random", 205, 180);
                    text("Tutorial", 210, 785);

                    if (sandboxPagina !== 1) {//terug pagina knoppen text
                        textSize(40);
                        text("<", 135, 183);
                        text("<", 135, 788);
                    }

                    if (sandboxPagina !== 3) {//volgende pagina knoppen text
                        textSize(40);
                        text(">", 340, 183);
                        text(">", 340, 788);
                    }

                    //-----------------------pagina 1---------------------------
                    if (sandboxPagina === PAGINA_ALGEMEEN) {//pagina 1 sandbox selectie
                        textSize(30);
                        fill(0, 0, 0);
                        text("Game", 205, 220);
                        text("Typo's", 200, 300);
                        text("Possible keys", 160, 380);
                        text("Maximum amount of lives", 85, 460);
                        text("Blocks positions", 140, 540);

                        strokeWeight(3);
                        fill(64, 64, 64);
                        //soort game knoppen
                        stroke(64, 64, 64);
                        if (currentKnop === 4) { stroke(255, 0, 0); }
                        rect(180, 235, 140, 30);

                        if (sandboxGeselecteerdModus !== 1) {
                            stroke(64, 64, 64);
                            if (currentKnop === 5) { stroke(255, 0, 0); }
                            rect(130, 235, 40, 30);
                        }

                        if (sandboxGeselecteerdModus !== 3) {
                            stroke(64, 64, 64);
                            if (currentKnop === 6) { stroke(255, 0, 0); }
                            rect(330, 235, 40, 30);
                        }

                        //typefout knoppen
                        stroke(64, 64, 64);
                        if (currentKnop === 7) { stroke(255, 0, 0); }
                        rect(180, 315, 140, 30);

                        if (sandboxBooleanTypefout !== 0) {
                            stroke(64, 64, 64);
                            if (currentKnop === 8) { stroke(255, 0, 0); }
                            rect(130, 315, 40, 30);
                        }

                        if (sandboxBooleanTypefout !== 1) {
                            stroke(64, 64, 64);
                            if (currentKnop === 9) { stroke(255, 0, 0); }
                            rect(330, 315, 40, 30);
                        }

                        //keyboard knoppen
                        stroke(64, 64, 64);
                        if (currentKnop === 10) { stroke(255, 0, 0); }
                        rect(180, 395, 140, 30);

                        if (sandboxGeselecteerdSoortBlokken !== 1) {
                            stroke(64, 64, 64);
                            if (currentKnop === 11) { stroke(255, 0, 0); }
                            rect(130, 395, 40, 30);
                        }

                        if (sandboxGeselecteerdSoortBlokken !== 3) {
                            stroke(64, 64, 64);
                            if (currentKnop === 12) { stroke(255, 0, 0); }
                            rect(330, 395, 40, 30);
                        }

                        //levens knoppen
                        stroke(64, 64, 64);
                        if (currentKnop === 13) { stroke(255, 0, 0); }
                        rect(200, 475, 100, 30);

                        if (sandboxGeselecteerdMaxLevens > 1) {
                            stroke(64, 64, 64);
                            if (currentKnop === 14) { stroke(255, 0, 0); }
                            rect(160, 475, 30, 30);
                        }

                        if (sandboxGeselecteerdMaxLevens > 10) {
                            stroke(64, 64, 64);
                            if (currentKnop === 15) { stroke(255, 0, 0); }
                            rect(120, 475, 30, 30);
                        }

                        if (sandboxGeselecteerdMaxLevens > 100) {
                            stroke(64, 64, 64);
                            if (currentKnop === 16) { stroke(255, 0, 0); }
                            rect(80, 475, 30, 30);
                        }

                        if (sandboxGeselecteerdMaxLevens < 999) {
                            stroke(64, 64, 64);
                            if (currentKnop === 17) { stroke(255, 0, 0); }
                            rect(310, 475, 30, 30);
                        }

                        if (sandboxGeselecteerdMaxLevens < 989) {
                            stroke(64, 64, 64);
                            if (currentKnop === 18) { stroke(255, 0, 0); }
                            rect(350, 475, 30, 30);
                        }

                        if (sandboxGeselecteerdMaxLevens < 899) {
                            stroke(64, 64, 64);
                            if (currentKnop === 19) { stroke(255, 0, 0); }
                            rect(390, 475, 30, 30);
                        }

                        //blokjes posities knoppen
                        stroke(64, 64, 64);
                        if (currentKnop === 20) { stroke(255, 0, 0); }
                        rect(180, 555, 140, 30);

                        if (sandboxBlokjesPositie !== 1) {
                            stroke(64, 64, 64);
                            if (currentKnop === 21) { stroke(255, 0, 0); }
                            rect(130, 555, 40, 30);
                        }

                        if (sandboxBlokjesPositie !== 2) {
                            stroke(64, 64, 64);
                            if (currentKnop === 22) { stroke(255, 0, 0); }
                            rect(330, 555, 40, 30);
                        }

                        //texten van knoppen
                        textSize(40);
                        fill(255, 255, 255);
                        noStroke();
                        if (sandboxGeselecteerdModus !== 1) { text("<", 135, 263); }
                        if (sandboxGeselecteerdModus !== 3) { text(">", 340, 263); }

                        if (sandboxBooleanTypefout !== 0) { text("<", 135, 343); }
                        if (sandboxBooleanTypefout !== 1) { text(">", 340, 343); }

                        if (sandboxGeselecteerdSoortBlokken !== 1) { text("<", 135, 423); }
                        if (sandboxGeselecteerdSoortBlokken !== 3) { text(">", 340, 423); }

                        if (sandboxBlokjesPositie !== 1) { text("<", 135, 583); }
                        if (sandboxBlokjesPositie !== 2) { text(">", 340, 583); }

                        textSize(30);
                        if (sandboxGeselecteerdMaxLevens > 1) { text("<", 165, 500); }
                        if (sandboxGeselecteerdMaxLevens < 899) { text(">", 315, 500); }
                        textSize(22);
                        if (sandboxGeselecteerdMaxLevens > 10) { text("<<", 122, 497); }
                        if (sandboxGeselecteerdMaxLevens < 989) { text(">>", 353, 497); }
                        textSize(14);
                        if (sandboxGeselecteerdMaxLevens > 100) { text("<<<", 84, 493); }
                        if (sandboxGeselecteerdMaxLevens < 999) { text(">>>", 391, 493); }

                        textSize(23)
                        if (sandboxGeselecteerdModus === 1) { text("Standard", 205, 260); }
                        if (sandboxGeselecteerdModus === 2) { text("Endless", 205, 260); }
                        if (sandboxGeselecteerdModus === 3) { text("Custom", 205, 260); }

                        if (sandboxBooleanTypefout === 0) { text("On", 225, 340); }
                        if (sandboxBooleanTypefout === 1) { text("Off", 225, 340); }

                        if (sandboxGeselecteerdSoortBlokken === 1) { text("Keyboard", 205, 420); }
                        if (sandboxGeselecteerdSoortBlokken === 2) { text("Letters", 205, 420); }
                        if (sandboxGeselecteerdSoortBlokken === 3) { text("Numbers", 205, 420); }

                        text(sandboxGeselecteerdMaxLevens, 235, 500);

                        if (sandboxBlokjesPositie === 1) { text("Lines", 225, 580); }
                        if (sandboxBlokjesPositie === 2) { text("Random", 205, 580); }
                    }

                    //---------------------------PAGINA 2-------------------------
                    if (sandboxPagina === PAGINA_POWERUPS) {//pagina 2 sandbox selectie
                        textSize(30);
                        fill(0, 0, 0);
                        text("Powerups", 185, 220);
                        if (sandboxBooleanPowerups === 0) {
                            text("Chance of powerups", 120, 300);
                            text("Hourglass time", 140, 380);
                            text("Barrier time", 165, 460);
                            text("Heart effectivity", 140, 540);
                        }

                        strokeWeight(3);
                        fill(64, 64, 64);
                        //powerups knoppen
                        stroke(64, 64, 64);
                        if (currentKnop === 4) { stroke(255, 0, 0); }
                        rect(180, 235, 140, 30);

                        if (sandboxBooleanPowerups !== 0) {
                            stroke(64, 64, 64);
                            if (currentKnop === 5) { stroke(255, 0, 0); }
                            rect(130, 235, 40, 30);
                        }

                        if (sandboxBooleanPowerups !== 1) {
                            stroke(64, 64, 64);
                            if (currentKnop === 6) { stroke(255, 0, 0); }
                            rect(330, 235, 40, 30);
                        }

                        if (sandboxBooleanPowerups === 0) {
                            fill(64, 64, 64);
                            //kans powerup knoppen
                            stroke(64, 64, 64);
                            if (currentKnop === 7) { stroke(255, 0, 0); }
                            rect(180, 315, 140, 30);

                            if (sandboxGeselecteerdPowerupKans !== 0) {
                                stroke(64, 64, 64);
                                if (currentKnop === 8) { stroke(255, 0, 0); }
                                rect(130, 315, 40, 30);
                            }

                            if (sandboxGeselecteerdPowerupKans !== 9) {
                                stroke(64, 64, 64);
                                if (currentKnop === 9) { stroke(255, 0, 0); }
                                rect(330, 315, 40, 30);
                            }

                            //powerup tijd tijd knoppen
                            stroke(64, 64, 64);
                            if (currentKnop === 10) { stroke(255, 0, 0); }
                            rect(180, 395, 140, 30);

                            if (sandboxPowerupTijdTijd !== 1) {
                                stroke(64, 64, 64);
                                if (currentKnop === 11) { stroke(255, 0, 0); }
                                rect(130, 395, 40, 30);
                            }

                            if (sandboxPowerupTijdTijd !== 10) {
                                stroke(64, 64, 64);
                                if (currentKnop === 12) { stroke(255, 0, 0); }
                                rect(330, 395, 40, 30);
                            }

                            //schild tijd knoppen
                            stroke(64, 64, 64);
                            if (currentKnop === 13) { stroke(255, 0, 0); }
                            rect(200, 475, 100, 30);

                            if (sandboxPowerupSchildTijd > 1) {
                                stroke(64, 64, 64);
                                if (currentKnop === 14) { stroke(255, 0, 0); }
                                rect(160, 475, 30, 30);
                            }

                            if (sandboxPowerupSchildTijd > 10) {
                                stroke(64, 64, 64);
                                if (currentKnop === 15) { stroke(255, 0, 0); }
                                rect(120, 475, 30, 30);
                            }

                            if (sandboxPowerupSchildTijd < 15) {
                                stroke(64, 64, 64);
                                if (currentKnop === 16) { stroke(255, 0, 0); }
                                rect(310, 475, 30, 30);
                            }

                            if (sandboxPowerupSchildTijd < 6) {
                                stroke(64, 64, 64);
                                if (currentKnop === 17) { stroke(255, 0, 0); }
                                rect(350, 475, 30, 30);
                            }

                            //hartje powerup knoppen
                            stroke(64, 64, 64);
                            if (currentKnop === 20) { stroke(255, 0, 0); }
                            rect(180, 555, 140, 30);

                            if (sandboxPowerupHartjeEffectiviteit !== 1) {
                                stroke(64, 64, 64);
                                if (currentKnop === 21) { stroke(255, 0, 0); }
                                rect(130, 555, 40, 30);
                            }

                            if (sandboxPowerupHartjeEffectiviteit !== 10) {
                                stroke(64, 64, 64);
                                if (currentKnop === 22) { stroke(255, 0, 0); }
                                rect(330, 555, 40, 30);
                            }


                        }

                        //texten van knoppen
                        textSize(40);
                        fill(255, 255, 255);
                        noStroke();
                        if (sandboxBooleanPowerups !== 0) { text("<", 135, 263); }
                        if (sandboxBooleanPowerups !== 1) { text(">", 340, 263); }

                        if (sandboxBooleanPowerups === 0) {
                            if (sandboxGeselecteerdPowerupKans !== 0) { text("<", 135, 343); }
                            if (sandboxGeselecteerdPowerupKans !== 9) { text(">", 340, 343); }

                            if (sandboxPowerupTijdTijd !== 1) { text("<", 135, 423); }
                            if (sandboxPowerupTijdTijd !== 10) { text(">", 340, 423); }

                            if (sandboxPowerupHartjeEffectiviteit !== 1) { text("<", 135, 583); }
                            if (sandboxPowerupHartjeEffectiviteit !== 10) { text(">", 340, 583); }

                            textSize(30);
                            if (sandboxPowerupSchildTijd > 1) { text("<", 165, 500); }
                            if (sandboxPowerupSchildTijd < 15) { text(">", 315, 500); }
                            textSize(22);
                            if (sandboxPowerupSchildTijd > 10) { text("<<", 122, 497); }
                            if (sandboxPowerupSchildTijd < 6) { text(">>", 353, 497); }
                        }

                        textSize(23)
                        if (sandboxBooleanPowerups === 0) { text("On", 225, 260); }
                        if (sandboxBooleanPowerups === 1) { text("Off", 225, 260); }

                        if (sandboxBooleanPowerups === 0) {
                            text(sandboxArrayPowerupKans[sandboxGeselecteerdPowerupKans] + "%", 220, 340);
                            text(sandboxPowerupTijdTijd + " sec", 225, 420);
                            text(sandboxPowerupSchildTijd + " sec", 215, 500);
                            text("+" + sandboxPowerupHartjeEffectiviteit, 225, 580)
                        }
                    }

                    //---------------------------PAGINA 3-------------------------
                    if (sandboxPagina === PAGINA_GESELECTEERD) {
                        if (sandboxGeselecteerdModus === 3) {
                            textSize(30);
                            fill(0, 0, 0);
                            //text
                            text("Blocks Time", 175, 220);
                            text("Amount of blocks", 150, 300);
                            text("Yellow Chance", 140, 380);
                            text("Orange Chance", 140, 460);
                            text("Red Chance", 150, 540);


                            strokeWeight(3);
                            fill(64, 64, 64);
                            //blokjes tijd knoppen
                            stroke(64, 64, 64);
                            if (currentKnop === 4) { stroke(255, 0, 0); }
                            rect(180, 235, 140, 30);

                            if (sandboxGeselecteerdBlokjesTijd !== 0) {
                                stroke(64, 64, 64);
                                if (currentKnop === 5) { stroke(255, 0, 0); }
                                rect(130, 235, 40, 30);
                            }

                            if (sandboxGeselecteerdBlokjesTijd !== 14) {
                                stroke(64, 64, 64);
                                if (currentKnop === 6) { stroke(255, 0, 0); }
                                rect(330, 235, 40, 30);
                            }

                            //aantal blokjes knoppen
                            stroke(64, 64, 64);
                            if (currentKnop === 7) { stroke(255, 0, 0); }
                            rect(180, 315, 140, 30);

                            if (sandboxAantalBlokjes !== 1) {
                                stroke(64, 64, 64);
                                if (currentKnop === 8) { stroke(255, 0, 0); }
                                rect(130, 315, 40, 30);
                            }

                            if (sandboxAantalBlokjes !== 15) {
                                stroke(64, 64, 64);
                                if (currentKnop === 9) { stroke(255, 0, 0); }
                                rect(330, 315, 40, 30);
                            }

                            //kans knoppen
                            //geel kans knoppen
                            stroke(64, 64, 64);
                            if (currentKnop === 10) { stroke(255, 0, 0); }
                            rect(180, 395, 140, 30);

                            if (sandboxGeselecteerdKansGeel !== 0) {
                                stroke(64, 64, 64);
                                if (currentKnop === 11) { stroke(255, 0, 0); }
                                rect(130, 395, 40, 30);
                            }

                            if (sandboxGeselecteerdKansGeel !== 10 && sandboxGeselecteerdKansGeel + sandboxGeselecteerdKansOranje + sandboxGeselecteerdKansRood !== 10) {
                                stroke(64, 64, 64);
                                if (currentKnop === 12) { stroke(255, 0, 0); }
                                rect(330, 395, 40, 30);
                            }

                            //oranje kans knoppen
                            stroke(64, 64, 64);
                            if (currentKnop === 13) { stroke(255, 0, 0); }
                            rect(180, 475, 140, 30);

                            if (sandboxGeselecteerdKansOranje !== 0) {
                                stroke(64, 64, 64);
                                if (currentKnop === 14) { stroke(255, 0, 0); }
                                rect(130, 475, 40, 30);
                            }

                            if (sandboxGeselecteerdKansOranje !== 10 && sandboxGeselecteerdKansGeel + sandboxGeselecteerdKansOranje + sandboxGeselecteerdKansRood !== 10) {
                                stroke(64, 64, 64);
                                if (currentKnop === 15) { stroke(255, 0, 0); }
                                rect(330, 475, 40, 30);
                            }

                            //rood kans knoppen
                            //oranje kans knoppen
                            stroke(64, 64, 64);
                            if (currentKnop === 16) { stroke(255, 0, 0); }
                            rect(180, 555, 140, 30);

                            if (sandboxGeselecteerdKansRood !== 0) {
                                stroke(64, 64, 64);
                                if (currentKnop === 17) { stroke(255, 0, 0); }
                                rect(130, 555, 40, 30);
                            }

                            if (sandboxGeselecteerdKansRood !== 10 && sandboxGeselecteerdKansGeel + sandboxGeselecteerdKansOranje + sandboxGeselecteerdKansRood !== 10) {
                                stroke(64, 64, 64);
                                if (currentKnop === 18) { stroke(255, 0, 0); }
                                rect(330, 555, 40, 30);
                            }

                            //texten van knoppen
                            textSize(40);
                            fill(255, 255, 255);
                            noStroke();
                            if (sandboxGeselecteerdBlokjesTijd !== 0) { text("<", 135, 263); }
                            if (sandboxGeselecteerdBlokjesTijd !== 14) { text(">", 340, 263); }

                            if (sandboxAantalBlokjes !== 1) { text("<", 135, 343); }
                            if (sandboxAantalBlokjes !== 15) { text(">", 340, 343); }

                            if (sandboxGeselecteerdKansGeel !== 0) { text("<", 135, 423); }
                            if (sandboxGeselecteerdKansGeel !== 10 && sandboxGeselecteerdKansGeel + sandboxGeselecteerdKansOranje + sandboxGeselecteerdKansRood !== 10) { text(">", 340, 423); }

                            if (sandboxGeselecteerdKansOranje !== 0) { text("<", 135, 503); }
                            if (sandboxGeselecteerdKansOranje !== 10 && sandboxGeselecteerdKansGeel + sandboxGeselecteerdKansOranje + sandboxGeselecteerdKansRood !== 10) { text(">", 340, 503); }

                            if (sandboxGeselecteerdKansRood !== 0) { text("<", 135, 583); }
                            if (sandboxGeselecteerdKansRood !== 10 && sandboxGeselecteerdKansGeel + sandboxGeselecteerdKansOranje + sandboxGeselecteerdKansRood !== 10) { text(">", 340, 583); }

                            textSize(23)
                            text(sandboxArrayBlokjesTijd[sandboxGeselecteerdBlokjesTijd] + " ticks", 205, 260);
                            text(sandboxAantalBlokjes, 225, 340);
                            text(sandboxArrayKans[sandboxGeselecteerdKansGeel] + "%", 215, 420);
                            text(sandboxArrayKans[sandboxGeselecteerdKansOranje] + "%", 215, 500);
                            text(sandboxArrayKans[sandboxGeselecteerdKansRood] + "%", 215, 580);
                            fill(0, 0, 0);
                            if (sandboxGeselecteerdKansGeel + sandboxGeselecteerdKansOranje + sandboxGeselecteerdKansRood !== 10) {
                                text("Warning: Not 100% in total", 110, 620);
                            }
                        } else {
                            textSize(30);
                            fill(0, 0, 0);
                            //text
                            text("Blocks multiplier", 140, 220);
                            text("Starting level", 150, 300);

                            strokeWeight(3);
                            fill(64, 64, 64);
                            //blokjes factor knoppen
                            stroke(64, 64, 64);
                            if (currentKnop === 4) { stroke(255, 0, 0); }
                            rect(180, 235, 140, 30);

                            if (sandboxBlokjesfactor !== 1) {
                                stroke(64, 64, 64);
                                if (currentKnop === 5) { stroke(255, 0, 0); }
                                rect(130, 235, 40, 30);
                            }

                            if (sandboxBlokjesfactor !== 10) {
                                stroke(64, 64, 64);
                                if (currentKnop === 6) { stroke(255, 0, 0); }
                                rect(330, 235, 40, 30);
                            }

                            //start level knoppen
                            stroke(64, 64, 64);
                            if (currentKnop === 7) { stroke(255, 0, 0); }
                            rect(200, 315, 100, 30);

                            if (sandboxStartLevel !== 0) {
                                stroke(64, 64, 64);
                                if (currentKnop === 8) { stroke(255, 0, 0); }
                                rect(160, 315, 30, 30);
                            }

                            if (sandboxStartLevel > 10) {
                                stroke(64, 64, 64);
                                if (currentKnop === 9) { stroke(255, 0, 0); }
                                rect(120, 315, 30, 30);
                            }

                            if (sandboxStartLevel !== 30) {
                                stroke(64, 64, 64);
                                if (currentKnop === 10) { stroke(255, 0, 0); }
                                rect(310, 315, 30, 30);
                            }

                            if (sandboxStartLevel < 21) {
                                stroke(64, 64, 64);
                                if (currentKnop === 11) { stroke(255, 0, 0); }
                                rect(350, 315, 30, 30);
                            }

                            //texten van knoppen
                            textSize(40);
                            fill(255, 255, 255);
                            noStroke();
                            if (sandboxBlokjesfactor !== 1) { text("<", 135, 263); }
                            if (sandboxBlokjesfactor !== 10) { text(">", 340, 263); }

                            textSize(30);
                            if (sandboxStartLevel !== 0) { text("<", 165, 340); }
                            if (sandboxStartLevel !== 30) { text(">", 315, 340); }
                            textSize(22);
                            if (sandboxStartLevel > 10) { text("<<", 122, 337); }
                            if (sandboxStartLevel < 21) { text(">>", 353, 337); }

                            textSize(23)
                            text("x " + sandboxBlokjesfactor, 225, 260);
                            text("level " + sandboxStartLevel, 210, 340);
                        }
                    }

                }
            }

            strokeWeight(3);
            fill(64, 64, 64);
            //speel knop
            stroke(64, 64, 64);
            if (currentKnop === 32) { stroke(255, 0, 0); }
            rect(200, 800, 100, 30);

            //menu knop
            stroke(64, 64, 64);
            if (currentKnop === 33) { stroke(255, 0, 0); }
            rect(90, 800, 100, 30);

            //niveau knop
            stroke(64, 64, 64);
            if (currentKnop === 34) { stroke(255, 0, 0); }
            rect(310, 800, 100, 30);

            //text van knoppen onderaan
            fill(255, 255, 255);
            noStroke();
            textSize(23)
            text("Menu", 110, 825);
            text("Modes", 325, 825);

            if (unlocked_standaard) {
                text("Play", 225, 825);
            } else {
                strokeWeight(3);
                stroke(255, 0, 0);
                line(200, 800, 300, 830);
                line(200, 830, 300, 800);
            }

            if (MODUS_ACTIEF !== MODUS_SANDBOX) {
                geselecteerd(200, 715);
            }
        }

        /* ================HIGHSCORE MENU========================= 
        ======================================================= */
        if (menuScherm === MENU_HIGHSCORE) {
            logo(200, 125);
            afgerondVierkant(210, 210, 210, 100, 150, 300, 610);

            fill(64, 64, 64);
            //menu knop
            stroke(64, 64, 64);
            if (currentKnop === 1) { stroke(255, 0, 0); }
            rect(200, 700, 100, 30);

            //modus knop
            stroke(64, 64, 64);
            if (currentKnop === 2) { stroke(255, 0, 0); }
            rect(90, 700, 100, 30);

            //niveau knop
            stroke(64, 64, 64);
            if (currentKnop === 3) { stroke(255, 0, 0); }
            rect(310, 700, 100, 30);

            noStroke();
            fill(0, 0, 0);
            textSize(55);
            text("Highscores", 115, 215);

            //highscore klassiek
            textSize(30);
            text("Classic", 195, 255);
            textSize(25);
            fixScorePos(highscoreKlassiek, 235, 290, 25);

            //highscore standaard
            if (unlocked_standaard) {
                textSize(30);
                text("Standard", 180, 330);
                textSize(25);
                fixScorePos(highscoreStandaard, 235, 365, 25);
            }
            //higscore geen powerup 
            if (unlocked_geenpowerup) {
                textSize(30);
                text("Powerupless", 165, 405);
                textSize(25);
                fixScorePos(highscoreGeenPowerup, 235, 440, 25);
            }

            //highscore eindeloos
            if (unlocked_eindeloos) {
                textSize(30);
                text("Endless", 190, 480);
                textSize(25);
                fixScorePos(highscoreEindeloos, 235, 515, 25);
            }

            //highscore sandbox
            if (unlocked_sandbox) {
                textSize(30);
                text("Sandbox", 185, 555);
                textSize(25);
                fixScorePos(highscoreSandbox, 235, 590, 25);
            }

            //highscore insane
            if (unlocked_insane) {
                textSize(30);
                text("Insane", 198, 630);
                textSize(25);
                fixScorePos(highscoreInsane, 235, 665, 25);
            }

            //knoppen text
            fill(255, 255, 255);
            noStroke();
            textSize(23)
            text("Modes", 105, 725);
            text("Levels", 328, 725);
            text("Menu", 220, 725);
        }
    }

    /* ============================================================
                                SPEL
    ============================================================ */
    if (GAMESTATE === GAMESTATE_SPEL) {
        /*==================== INTERACTIE ====================
        ================================================== */
        noStroke();
        if (powerupSchildTimer !== 0) { /*locatie code zorgt dat je nog
            steeds de letter kan zien maar nog steeds ziet dat de powerup actief is */
            //kleur
            if (powerupSchildTimer > 30) { //normale kleur
                fill(46, 119, 179)
            } else { //korte tijd dan een seconde
                fill(209, 238, 240);
            }

            //laten zien dat die er is
            rect(0, height - 20, 450, 20);
        }

        if (powerupTijdTimer !== 0) {
            fill(204, 163, 81);
            rect(0, 50, 450 - ((450 / powerupTijdTijd) * (powerupTijdTijd - powerupTijdTimer)), 30);
        }

        //-------------------------------POWERUPS---------------------------\\
        /* om de tien seconde heb je 2/5 kans op een powerup verschijnen */
        if (nieuwRondjeTimer === nieuwRondjeTijd && cirkels.length === 0 && powerupActief === 0 && powerupTijdTimer === 0 && powerupSchildTimer === 0 && moeilijkheidsgraad >= 7 && powerupsMogelijk) {
            powerupKansNieuw = powerupKans[FloRa(0, powerupKans.length - 1)]; // 2/5 kans op slagen
            if (powerupKansNieuw) { //geslaagd
                powerupRandomNieuw = powerupRandom[FloRa(0, powerupRandom.length - 1)]; //welke powerup?
                powerupRandomXNieuw = FloRa(51, 399); //Waar op het scherm
                powerupRichtingRandomNieuw = powerupRichtingRandom[FloRa(0, 3)]; //welke richting staat de pijl?
                randomPowerupNieuw = new Rondje(powerupRandomXNieuw, powerupRichtingRandomNieuw, powerupRandomNieuw);
                cirkels.push(randomPowerupNieuw);
                console.log("Powerup: Nieuwe Powerup op scherm")
            } else {
                nieuwRondjeTimer = startTimer;
                console.log("Powerup: Niet gespawned");
            } //mislukt
        }

        /* zorgt ervoor dat niet op tijd ingedrukte powerups verdwijnen, 
        en dat de powerup beweegt en verschijnt  */
        for (var i = 0; i < cirkels.length; i++) {
            if (cirkels[i].y > height + 50) {
                cirkels.splice(i, 1);
                nieuwRondjeTimer = startTimer;
            }

            if (cirkels.length > 0) {
                cirkels[i].verschuif();
                cirkels[i].display();
            }
        }

        //--------------------------BLOKJES-------------------------\\
        /* Om de zoveel tijd (start bij 2 seconden) verschijnt er een nieuw blok, 
        op een willkeurige kolom met een willekeurige letter. */
        if (nieuwBlokTimer === nieuwBlokTijd) {
            for (var i = 0; i < aantalBlokjesPerKeer; i++) {
                blokjesRandomSnelheidNieuw = blokjesRandomSnelheid[FloRa(0, 9)];
                blokjesRandomLettersNieuw = blokjesRandomLetters[FloRa(0, blokjesRandomLetters.length - 1)];
                if (blokjesPositie === 1) {
                    blokjesRandomXNieuw = blokjesRandomX[FloRa(0, 9)];
                } else {
                    blokjesRandomXNieuw = round(random(1, 399))
                }

                randomNieuwBlokje = new Blok(blokjesRandomXNieuw, blokjesRandomSnelheidNieuw, blokjesRandomLettersNieuw);
                blokjes.push(randomNieuwBlokje);
                nieuwBlokTimer = startTimer;
            }
        }

        if (nieuwBlokTimer > nieuwBlokTijd) {
            nieuwBlokTimer = nieuwBlokTijd - 1;
        }

        //-----------------------------Toetsenbord interactie----------------\\
        //Checkt of er een knop wordt ingedrukt
        if (currentKey !== 0) {
            if (currentKey !== 1 && currentKey !== 2 && currentKey !== 3 && currentKey !== 4 && currentKey !== 5) {
                //gaat over alle blokjes (heeft powerups indicatoren eruit gehaald)
                for (var i = 0; i < blokjes.length; i++) {
                    //blokjes die dezelfde letter hebben worden weggehaald
                    if (blokjes[i].letter === currentKey) {
                        blokjes.splice(i, 1);
                        if (currentKey !== 6) {
                            AantalBlokjesMetLetter++;
                            if (niveauStijgingMogelijk) {
                                voortgangsPunten++; //vast bij eindeloos
                            }
                            i--; //zorgt ervoor dat niks wordt overgeslagen
                        } else {
                            score += 1000000; //+1 miljoen
                            levens = 0; //eindigd spel
                        }
                    }
                }
                //zijn er blokjes weggehaald? 
                if (AantalBlokjesMetLetter === 0) { //nee, -1 leven
                    if (typeFoutPenalty) {
                        levens -= 1;
                        levenVerlorenTimer = levenVerlorenTijd;
                        console.log("Levens: -1 (Type fout)");
                    }
                } else { //ja, score + aantal punten
                    score += MeerLetterBonus[AantalBlokjesMetLetter - 1];
                }
                AantalBlokjesMetLetter = 0; //reset voor de volgende frame
            } else { /*POWERUPS CHECKEN */
                if (currentKey >= 1 && currentKey <= 4) { //collecteren powerup
                    for (var i = 0; i < cirkels.length; i++) {
                        if (currentKey === 1) { //links
                            if (cirkels[i].richting === 1) {
                                score += powerupScore;
                                nieuwRondjeTimer = startTimer;
                                powerupActief = cirkels[i].powerup;
                                cirkels.splice(i, 1);
                            } else if (typeFoutPenalty) {
                                levens--; //type fouten blijven strafbaar, tenzij er geen powerup op het scherm is
                                levenVerlorenTimer = levenVerlorenTijd;
                                console.log("Levens -1 (Type Fout")
                            }
                        }

                        //boven
                        if (currentKey === 2) {
                            if (cirkels[i].richting === 2) {
                                score += powerupScore;
                                nieuwRondjeTimer = startTimer;
                                powerupActief = cirkels[i].powerup;
                                cirkels.splice(i, 1);
                            } else if (typeFoutPenalty) {
                                levens--;
                                levenVerlorenTimer = levenVerlorenTijd;
                                console.log("Levens -1 (Type Fout")
                            }
                        }

                        //rechts
                        if (currentKey === 3) {
                            if (cirkels[i].richting === 3) {
                                score += powerupScore;
                                nieuwRondjeTimer = startTimer;
                                powerupActief = cirkels[i].powerup;
                                cirkels.splice(i, 1);
                            } else if (typeFoutPenalty) {
                                levens--;
                                levenVerlorenTimer = levenVerlorenTijd;
                                console.log("Levens -1 (Type Fout")
                            }
                        }

                        //onder
                        if (currentKey === 4) {
                            if (cirkels[i].richting === 4) {
                                score += powerupScore;
                                nieuwRondjeTimer = startTimer;
                                powerupActief = cirkels[i].powerup;
                                cirkels.splice(i, 1);
                            } else if (typeFoutPenalty) {
                                levens--;
                                levenVerlorenTimer = levenVerlorenTijd;
                                console.log("Levens -1 (Type Fout")
                            }
                        }
                    }
                }

                //spatiebalk
                if (currentKey === 5 && powerupActief !== 0) {
                    console.log("Powerup: Ingezet")
                    if (powerupActief === POWERUP_TIJD) { //tijd stilstaan
                        powerupTijdTimer = powerupTijdTijd;
                        console.log("Powerup Tijd: Timer gestart")
                    }
                    if (powerupActief === POWERUP_SCHILD) { //immuniteit schild
                        powerupSchildTimer = powerupSchildTijd;
                        console.log("Powerup Schild: Timer gestart");
                    }
                    if (powerupActief === POWERUP_LEVEN) { //hartje powerup
                        for (var i = powerupHartjeEffectiviteit; i > 0; i--) {
                            if (levens !== maxAantalLevens) { //levens + 1
                                levens++;
                                console.log("Powerup Hartje: " + powerupHartjeEffectiviteit + " levens")
                                console.log("Levens: +" + powerupHartjeEffectiviteit + " (Powerup)")
                            } else {  //tenzij je nog alle drie je levens hebt
                                console.log("Powerup Hartje: Maximaal aantal levens al gehaald")
                            }
                        }
                    }
                    powerupActief = 0; //reset powerup naar niks
                }
            }
        }

        /* verplaatst de blokjes en laat de locatie zien op het scherm */
        if (blokjes.length > 0) {
            for (var i = 0; i < blokjes.length; i++) {
                if (powerupTijdTimer === 0) { //verplaats alleen als de tijd powerup niet actief is
                    blokjes[i].verschuif();
                }
                blokjes[i].display();

                if (powerupSchildTimer !== 0) {
                    if (blokjes[i].y > 825) {
                        blokjes.splice(i, 1);
                        i--;
                    }
                } else if (blokjes[i].y >= 900) { /* als een blokje uit het beeld is, zal er een leven vanaf worden getrokken*/
                    if (powerupSchildTimer === 0) { //als schild powerup bezig is zullen er geen leven worden afgetrokken
                        levens--;
                        levenVerlorenTimer = levenVerlorenTijd;
                        console.log("Levens: -1 (Te Laat)")
                    }
                    blokjes.splice(i, 1);
                    i--; //zorgt ervoor dat niks wordt overgeslagen
                }
            }
        }

        /* Dit stuk heeft veel timers, tijd van powerups, 
        of wanneer er een nieuw object komt, dingen veranderen */
        if (levenVerlorenTimer !== 0) {
            levenVerlorenTimer--;
            veranderendeAchtergrond = 100;
        } else {
            veranderendeAchtergrond = 0;
        }

        if (powerupSchildTimer !== 0) { //start de timer (5 seconden)
            powerupSchildTimer--;
            //console logs
            if (powerupSchildTimer === 30) {
                console.log("Powerup Schild: 1 seconde over");
            } else if (powerupSchildTimer === 1) {
                console.log("Powerup Schild: Powerup gestopt");
            }
        }

        if (powerupTijdTimer !== 0) { //start de timer (3 seconden)
            powerupTijdTimer--;
            if (powerupTijdTimer === 1) {
                console.log("Powerup Tijd: Powerup gestopt")
            }
        } else {
            nieuwBlokTimer++; //geen nieuwe blokken want tijd staat stil
            if (powerupActief === 0 && powerupSchildTimer === 0 && nieuwRondjeTimer !== 300) {
                nieuwRondjeTimer++;
            }
        }

        /* =============== U.I =======================
        ============================================*/
        noStroke();
        fill(128, 128, 128);
        rect(0, 0, 500, 50);
        rect(450, 0, 50, 900);

        //moeilijkheidsgraad
        fill(40, 40, 150);
        fixScorePos(moeilijkheidsgraad, width - 40, 400, 30);

        //score
        fill(0, 0, 0);
        fixScorePos(score, 200, 40, 30);

        //levens
        if (levens <= 3) {
            for (var i = 0; i < levens; i++) {
                hartje(width - 25, 100 + 50 * i, 2);
            }
        } else {
            for (var i = 0; i < 3; i++) {
                hartje(width - 25, 100 + 50 * i, 2)
            }
            fill(255, 0, 0);
            textSize(16);
            text("(+" + (levens - 3) + ")", width - 45, 250)
        }

        //procent kans op blokjes
        textSize(15);
        fill(255, 255, 0);
        text(procentBlokjes[0] + "%", 455, 500);
        fill(255, 128, 0);
        text(procentBlokjes[1] + "%", 455, 520);
        fill(255, 0, 0);
        text(procentBlokjes[2] + "%", 455, 540);

        //powerups
        noStroke();
        if (powerupsMogelijk) {
            fill(64, 64, 64);
            rect(455, 300, 40, 40);
        }

        //Dit laat zien welke powerup je hebt doormiddel van een icoontje
        if (powerupActief === POWERUP_TIJD) {
            zandloper(475, 320);
        }

        if (powerupActief === POWERUP_SCHILD) {
            bubble(475, 320);
        }

        if (powerupActief === POWERUP_LEVEN) {
            hartje(475, 315, 1);
        }

        //---------------------GAME OVER--------------------
        if (levens <= 0) {
            //scores updaten klassiek
            if (MODUS === MODUS_KLASSIEK) {
                afgelopenScoreKlassiek.push(score)
                if (score > highscoreKlassiek) { highscoreKlassiek = score; }
                if (moeilijkheidsgraad - 4 > mogelijkBeginNiveauAlgemeen) { mogelijkBeginNiveauAlgemeen = moeilijkheidsgraad - 4; }
            }

            //scores updaten standaard
            if (MODUS === MODUS_STANDAARD) {
                afgelopenScoreStandaard.push(score)
                if (score > highscoreStandaard) { highscoreStandaard = score; }
            }

            //scores updaten powerupless
            if (MODUS === MODUS_GEENPOWERUP) {
                afgelopenScoreGeenPowerup.push(score)
                if (score > highscoreGeenPowerup) { highscoreGeenPowerup = score; }
            }

            //scores updaten eindeloos
            if (MODUS === MODUS_EINDELOOS) {
                afgelopenScoreEindeloos.push(score)
                if (score > highscoreEindeloos) { highscoreEindeloos = score; }
            }

            //scores updaten sandbox
            if (MODUS === MODUS_SANDBOX) {
                afgelopenScoreSandbox.push(score)
                if (score > highscoreSandbox) { highscoreSandbox = score; }
            }

            //scores updaten insane
            if (MODUS === MODUS_INSANE) {
                afgelopenScoreInsane.push(score)
                if (score > highscoreInsane) { highscoreInsane = score; }
                if (moeilijkheidsgraad - 4 > mogelijkBeginNiveauInsane) { mogelijkBeginNiveauInsane = moeilijkheidsgraad - 4; }
            }

            creditsTimer = 0;
            powerupSchildTimer = 0;
            veranderendeAchtergrond = 0;
            levenVerlorenTimer = 0;
            menuSchermVerandering();
            GAMESTATE = GAMESTATE_SCORES;
            console.log("GAMESTATE: SPEL -> SCORES ")
        }

        /*============================================================
                                            Niveau
        =========================================================== */

        /* Voor elk blok dat je vernietigd, krijg je voortgangspunten.
        Hoe meer voortgangspunten je hebt hoe moeilijker het wordt */
        for (var i = 0; i < 37; i++) {
            if (voortgangsPunten > niveauMijlpalen[i] * aantalBlokjesFactor) {
                moeilijkheidsgraad = i;
            } else {
                i = 38;
            }

        }

        //aantal blokjes per (zoveel tijd0
        if (moeilijkheidsgraad === 35) { aantalBlokjesPerKeer = 5 * aantalBlokjesFactor; }
        if (moeilijkheidsgraad < 35) { aantalBlokjesPerKeer = 4 * aantalBlokjesFactor; }
        if (moeilijkheidsgraad < 30) { aantalBlokjesPerKeer = 3 * aantalBlokjesFactor; }
        if (moeilijkheidsgraad < 20) { aantalBlokjesPerKeer = 2 * aantalBlokjesFactor; }
        if (moeilijkheidsgraad < 10) { aantalBlokjesPerKeer = 1 * aantalBlokjesFactor; }

        //blok tijd
        if (moeilijkheidsgraad === 30) { blokTijdCompensatie = 30; }
        if (moeilijkheidsgraad < 30) { blokTijdCompensatie = 20; }
        if (moeilijkheidsgraad < 20) { blokTijdCompensatie = 10; }
        if (moeilijkheidsgraad < 10) { blokTijdCompensatie = 0; }
        if (moeilijkheidsgraad - blokTijdCompensatie === 0) { nieuwBlokTijd = 60; }
        if (moeilijkheidsgraad - blokTijdCompensatie === 1) { nieuwBlokTijd = 55; }
        if (moeilijkheidsgraad - blokTijdCompensatie === 2) { nieuwBlokTijd = 50; }
        if (moeilijkheidsgraad - blokTijdCompensatie === 3) { nieuwBlokTijd = 45; }
        if (moeilijkheidsgraad - blokTijdCompensatie === 4) { nieuwBlokTijd = 40; }
        if (moeilijkheidsgraad - blokTijdCompensatie === 5) { nieuwBlokTijd = 40; }
        if (moeilijkheidsgraad - blokTijdCompensatie === 6) { nieuwBlokTijd = 35; }
        if (moeilijkheidsgraad - blokTijdCompensatie === 7) { nieuwBlokTijd = 30; }
        if (moeilijkheidsgraad - blokTijdCompensatie === 8) { nieuwBlokTijd = 25; }
        if (moeilijkheidsgraad - blokTijdCompensatie === 9) { nieuwBlokTijd = 25; }

        if (moeilijkheidsgraad === 31) { nieuwBlokTijd = 50; }
        if (moeilijkheidsgraad === 32) { nieuwBlokTijd = 40; }
        if (moeilijkheidsgraad === 33) { nieuwBlokTijd = 35; }
        if (moeilijkheidsgraad === 34) { nieuwBlokTijd = 25; }
        if (moeilijkheidsgraad === 35) { nieuwBlokTijd = 60; }

        //snelheid
        if (moeilijkheidsgraad < 36) {
            blokjesRandomSnelheid = [10, 10, 10, 10, 5, 5, 5, 15, 15, 15, 15];
            procentBlokjes = [30, 40, 30];
        }

        if (moeilijkheidsgraad < 33) {
            blokjesRandomSnelheid = [10, 10, 10, 10, 5, 5, 5, 5, 15, 15, 15];
            procentBlokjes = [40, 40, 20];
        }

        if (moeilijkheidsgraad < 29) {
            blokjesRandomSnelheid = [10, 10, 10, 10, 5, 5, 5, 5, 5, 15, 15];
            procentBlokjes = [50, 40, 10];
        }

        if (moeilijkheidsgraad < 25) {
            blokjesRandomSnelheid = [10, 10, 10, 10, 5, 5, 5, 5, 5, 5, 15];
            procentBlokjes = [60, 40, 0];
        }

        if (moeilijkheidsgraad < 19) {
            blokjesRandomSnelheid = [10, 10, 10, 5, 5, 5, 5, 5, 5, 5, 15];
            procentBlokjes = [70, 30, 0];
        }

        if (moeilijkheidsgraad < 15) {
            blokjesRandomSnelheid = [10, 10, 5, 5, 5, 5, 5, 5, 5, 5, 15];
            procentBlokjes = [80, 20, 0];
        }

        if (moeilijkheidsgraad < 9) {
            blokjesRandomSnelheid = [10, 5, 5, 5, 5, 5, 5, 5, 5, 5, 15];
            procentBlokjes = [90, 10, 0];
        }

        if (moeilijkheidsgraad < 5) {
            blokjesRandomSnelheid = [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 15];
            procentBlokjes = [100, 0, 0];
        }

        //credits
        if (moeilijkheidsgraad === 36) {
            if (creditsTimer === 30 && MODUS === MODUS_GEENPOWERUP) {
                letterCredits = new Blok(175, 5, "N");
                blokjes.push(letterCredits);
                letterCredits = new Blok(225, 5, "o");
                blokjes.push(letterCredits);
            }

            if (creditsTimer === 60) {
                if (MODUS === MODUS_KLASSIEK) {
                    letterCredits = new Blok(50, 5, "C");
                    blokjes.push(letterCredits);
                    letterCredits = new Blok(100, 5, "L");
                    blokjes.push(letterCredits);
                    letterCredits = new Blok(150, 5, "A");
                    blokjes.push(letterCredits);
                    letterCredits = new Blok(200, 5, "S");
                    blokjes.push(letterCredits);
                    letterCredits = new Blok(250, 5, "S");
                    blokjes.push(letterCredits);
                    letterCredits = new Blok(300, 5, "i");
                    blokjes.push(letterCredits);
                    letterCredits = new Blok(350, 5, "C");
                    blokjes.push(letterCredits);
                }

                //gespeld standaard
                if (MODUS === MODUS_STANDAARD) {
                    letterCredits = new Blok(25, 5, "S");
                    blokjes.push(letterCredits);
                    letterCredits = new Blok(75, 5, "T");
                    blokjes.push(letterCredits);
                    letterCredits = new Blok(125, 5, "A");
                    blokjes.push(letterCredits);
                    letterCredits = new Blok(175, 5, "N");
                    blokjes.push(letterCredits);
                    letterCredits = new Blok(225, 5, "D");
                    blokjes.push(letterCredits);
                    letterCredits = new Blok(275, 5, "A");
                    blokjes.push(letterCredits);
                    letterCredits = new Blok(325, 5, "R");
                    blokjes.push(letterCredits);
                    letterCredits = new Blok(375, 5, "D");
                    blokjes.push(letterCredits);
                }

                //gespeld powerup
                if (MODUS === MODUS_GEENPOWERUP) {
                    letterCredits = new Blok(25, 5, "P");
                    blokjes.push(letterCredits);
                    letterCredits = new Blok(75, 5, "o");
                    blokjes.push(letterCredits);
                    letterCredits = new Blok(125, 5, "W");
                    blokjes.push(letterCredits);
                    letterCredits = new Blok(175, 5, "E");
                    blokjes.push(letterCredits);
                    letterCredits = new Blok(225, 5, "R");
                    blokjes.push(letterCredits);
                    letterCredits = new Blok(275, 5, "U");
                    blokjes.push(letterCredits);
                    letterCredits = new Blok(325, 5, "P");
                    blokjes.push(letterCredits);
                    letterCredits = new Blok(375, 5, "S");
                    blokjes.push(letterCredits);
                }

                //gespeld powerup
                if (MODUS === MODUS_INSANE) {
                    letterCredits = new Blok(75, 5, "i");
                    blokjes.push(letterCredits);
                    letterCredits = new Blok(125, 5, "N");
                    blokjes.push(letterCredits);
                    letterCredits = new Blok(175, 5, "S");
                    blokjes.push(letterCredits);
                    letterCredits = new Blok(225, 5, "A");
                    blokjes.push(letterCredits);
                    letterCredits = new Blok(275, 5, "N");
                    blokjes.push(letterCredits);
                    letterCredits = new Blok(325, 5, "E");
                    blokjes.push(letterCredits);
                }
            }

            //complete gespeld
            if (creditsTimer === 120) {
                letterCredits = new Blok(25, 5, "C");
                blokjes.push(letterCredits);
                letterCredits = new Blok(75, 5, "o");
                blokjes.push(letterCredits);
                letterCredits = new Blok(125, 5, "M");
                blokjes.push(letterCredits);
                letterCredits = new Blok(175, 5, "P");
                blokjes.push(letterCredits);
                letterCredits = new Blok(225, 5, "L");
                blokjes.push(letterCredits);
                letterCredits = new Blok(275, 5, "E");
                blokjes.push(letterCredits);
                letterCredits = new Blok(325, 5, "T");
                blokjes.push(letterCredits);
                letterCredits = new Blok(375, 5, "E");
                blokjes.push(letterCredits);
            }

            //thanks gespeld
            if (creditsTimer === 180) {
                letterCredits = new Blok(75, 5, "T");
                blokjes.push(letterCredits);
                letterCredits = new Blok(125, 5, "H");
                blokjes.push(letterCredits);
                letterCredits = new Blok(175, 5, "A");
                blokjes.push(letterCredits);
                letterCredits = new Blok(225, 5, "N");
                blokjes.push(letterCredits);
                letterCredits = new Blok(275, 5, "K");
                blokjes.push(letterCredits);
                letterCredits = new Blok(325, 5, "S");
                blokjes.push(letterCredits);
            }

            //for gespeld
            if (creditsTimer === 240) {
                letterCredits = new Blok(150, 5, "F");
                blokjes.push(letterCredits);
                letterCredits = new Blok(200, 5, "o");
                blokjes.push(letterCredits);
                letterCredits = new Blok(250, 5, "R");
                blokjes.push(letterCredits);
            }

            //playing gespeld
            if (creditsTimer === 300) {
                letterCredits = new Blok(50, 5, "P");
                blokjes.push(letterCredits);
                letterCredits = new Blok(100, 5, "L");
                blokjes.push(letterCredits);
                letterCredits = new Blok(150, 5, "A");
                blokjes.push(letterCredits);
                letterCredits = new Blok(200, 5, "Y");
                blokjes.push(letterCredits);
                letterCredits = new Blok(250, 5, "i");
                blokjes.push(letterCredits);
                letterCredits = new Blok(300, 5, "N");
                blokjes.push(letterCredits);
                letterCredits = new Blok(350, 5, "G");
                blokjes.push(letterCredits);
            }

            //enter knop
            if (creditsTimer === 420) {
                letterCredits = new Blok(150, 5, 6);
                blokjes.push(letterCredits);
            }

            if (creditsTimer === 900) {
                levens = 0; //te laat op enter gedrukt
                creditsTimer = -2;
            }

            creditsTimer++;

            procentBlokjes = [100, 0, 0];
            nieuwBlokTimer = 0;
            powerupSchildTimer = 120;
            creditsTimer++;
        }

        /*==================MODUS==========================
        ================================================ */

        //insane mode
        if (MODUS === MODUS_INSANE) {
            aantalBlokjesFactor = 2;
        } else {
            aantalBlokjesFactor = 1;
        }

        //geen powerups
        if (MODUS === MODUS_GEENPOWERUP) {
            powerupsMogelijk = false;
        } else {
            powerupsMogelijk = true;
        }

        //eindeloos
        if (MODUS === MODUS_EINDELOOS) {
            niveauStijgingMogelijk = false;
        } else {
            niveauStijgingMogelijk = true;
        }

        if (MODUS === MODUS_SANDBOX) {
            //pagina 1
            typeFoutPenalty = sandboxBoolean[sandboxBooleanTypefout];
            if (sandboxGeselecteerdSoortBlokken === 1) {
                blokjesRandomLetters = ["A", "B", "C", "D", "E", "F"
                    , "G", "H", "i", "J", "K", "L", "M", "N", "o"
                    , "P", "Q", "R", "S", "T", "U", "V", "w", "X", "Y", "Z"
                    , "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A"];
            } else if (sandboxGeselecteerdSoortBlokken === 2) {
                blokjesRandomLetters = ["A", "B", "C", "D", "E", "F"
                    , "G", "H", "i", "J", "K", "L", "M", "N", "o"
                    , "P", "Q", "R", "S", "T", "U", "V", "w", "X", "Y", "Z", "A"];
            } else {
                blokjesRandomLetters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "5"];
            }
            maxAantalLevens = sandboxGeselecteerdMaxLevens;
            blokjesPositie = sandboxBlokjesPositie;

            //pagina 2
            powerupsMogelijk = sandboxBoolean[sandboxBooleanPowerups];
            if (sandboxGeselecteerdPowerupKans === 0) {
                powerupKans[false, false, false, false, false, false, false, false, false, true, true];
            } else if (sandboxGeselecteerdPowerupKans === 1) {
                powerupKans[false, false, false, false, true, true];
            } else if (sandboxGeselecteerdPowerupKans === 2) {
                powerupKans[false, false, false, false, false, false, false, true, true, true, true];
            } else if (sandboxGeselecteerdPowerupKans === 3) {
                powerupKans[false, false, false, true, true, true];
            } else if (sandboxGeselecteerdPowerupKans === 4) {
                powerupKans[false, true, true];
            } else if (sandboxGeselecteerdPowerupKans === 5) {
                powerupKans[false, false, true, true, true, true];
            } else if (sandboxGeselecteerdPowerupKans === 6) {
                powerupKans[false, false, false, true, true, true, true, true, true, true, true];
            } else if (sandboxGeselecteerdPowerupKans === 7) {
                powerupKans[false, true, true, true, true, true];
            } else if (sandboxGeselecteerdPowerupKans === 8) {
                powerupKans[false, true, true, true, true, true, true, true, true, true, true];
            } else if (sandboxGeselecteerdPowerupKans === 9) {
                powerupKans[true, true];
            }
            powerupTijdTijd = sandboxPowerupTijdTijd * 30;
            powerupSchildTijd = sandboxPowerupSchildTijd * 30;
            powerupHartjeEffectiviteit = sandboxPowerupHartjeEffectiviteit;

            //sandbox 3
            if (sandboxGeselecteerdModus === 3) {
                niveauStijgingMogelijk = false;
                nieuwBlokTijd = sandboxArrayBlokjesTijd[sandboxGeselecteerdBlokjesTijd];
                aantalBlokjesPerKeer = sandboxAantalBlokjes;
                procentBlokjes = [sandboxGeselecteerdKansGeel, sandboxGeselecteerdKansOranje, sandboxGeselecteerdKansRood];
                blokjesRandomSnelheid = sandboxBlokjesRandomSnelheid;
            } else if (sandboxGeselecteerdModus === 2) {
                niveauStijgingMogelijk = false;
                aantalBlokjesFactor = sandboxBlokjesfactor;
            } else {
                niveauStijgingMogelijk = true;
                aantalBlokjesFactor = sandboxBlokjesfactor;
            }
        } else {
            blokjesPositie = 1;
            maxAantalLevens = 3;
            powerupHartjeEffectiviteit = 1;
            powerupTijdTijd = 90;
            powerupSchildTijd = 150;
            typeFoutPenalty = true;
            blokjesRandomLetters = ["A", "B", "C", "D", "E", "F"
                , "G", "H", "i", "J", "K", "L", "M", "N", "o"
                , "P", "Q", "R", "S", "T", "U", "V", "w", "X", "Y", "Z"
                , "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A"];
            powerupKans = [false, false, false, true, true, true];
        }
    }


    /* ============================================================
                                SCORES
    ============================================================ */
    if (GAMESTATE === GAMESTATE_SCORES) {
        achtergrondActiviteit();

        //logo
        logo(200, 75);

        //afgerond vierkant
        afgerondVierkant(210, 210, 210, 100, 125, 300, 575);
        fill(0, 0, 0);
        textSize(50);

        //scores klassiek
        if (MODUS === MODUS_KLASSIEK) {
            text("Classic", scoresPosX + 25, scoresPosY - 45);
            textSize(25);
            fixScorePos(afgelopenScoreKlassiek[afgelopenScoreKlassiek.length - 1], 235, 250, 25);
            fixScorePos(highscoreKlassiek, 235, 360, 25);
            for (var i = 0; i < 5; i++) {
                fixScorePos(afgelopenScoreKlassiek[afgelopenScoreKlassiek.length - 2 - i], 235, scoresPosY + 240 + 25 * i, 23);
            }

            //minder lag
            if (afgelopenScoreKlassiek.length > 6) {
                afgelopenScoreKlassiek.splice(0, 1);
            }
        }

        //score standaard
        if (MODUS === MODUS_STANDAARD) {
            text("Standard", scoresPosX + 5, scoresPosY - 45);
            textSize(25);
            fixScorePos(afgelopenScoreStandaard[afgelopenScoreStandaard.length - 1], 235, 250, 25);
            fixScorePos(highscoreStandaard, 235, 360, 25);
            for (var i = 0; i < 5; i++) {
                fixScorePos(afgelopenScoreStandaard[afgelopenScoreStandaard.length - 2 - i], 235, scoresPosY + 240 + 25 * i, 23);
            }

            //minder lag
            if (afgelopenScoreStandaard.length > 6) {
                afgelopenScoreStandaard.splice(0, 1);
            }
        }

        //scores geen powerup
        if (MODUS === MODUS_GEENPOWERUP) {
            text("Powerupless", scoresPosX - 25, scoresPosY - 45);
            textSize(25);
            fixScorePos(afgelopenScoreGeenPowerup[afgelopenScoreGeenPowerup.length - 1], 235, 250, 25);
            fixScorePos(highscoreGeenPowerup, 235, 360, 25);
            for (var i = 0; i < 5; i++) {
                fixScorePos(afgelopenScoreGeenPowerup[afgelopenScoreGeenPowerup.length - 2 - i], 235, scoresPosY + 240 + 25 * i, 23);
            }

            //minder lag
            if (afgelopenScoreGeenPowerup.length > 6) {
                afgelopenScoreGeenPowerup.splice(0, 1);
            }
        }

        //scores eindeloos
        if (MODUS === MODUS_EINDELOOS) {
            text("Endless", scoresPosX + 20, scoresPosY - 45);
            textSize(25);
            fixScorePos(afgelopenScoreEindeloos[afgelopenScoreEindeloos.length - 1], 235, 250, 25);
            fixScorePos(highscoreEindeloos, 235, 360, 25);
            for (var i = 0; i < 5; i++) {
                fixScorePos(afgelopenScoreEindeloos[afgelopenScoreEindeloos.length - 2 - i], 235, scoresPosY + 240 + 25 * i, 23);
            }

            //minder lag
            if (afgelopenScoreEindeloos.length > 6) {
                afgelopenScoreEindeloos.splice(0, 1);
            }
        }

        //scores sandbox
        if (MODUS === MODUS_SANDBOX) {
            text("Sandbox", scoresPosX + 8, scoresPosY - 45);
            textSize(25);
            fixScorePos(afgelopenScoreSandbox[afgelopenScoreSandbox.length - 1], 235, 250, 25);
            fixScorePos(highscoreSandbox, 235, 360, 25);
            for (var i = 0; i < 5; i++) {
                fixScorePos(afgelopenScoreSandbox[afgelopenScoreSandbox.length - 2 - i], 235, scoresPosY + 240 + 25 * i, 23);
            }

            //minder lag
            if (afgelopenScoreSandbox.length > 6) {
                afgelopenScoreSandbox.splice(0, 1);
            }
        }

        //scores insane
        if (MODUS === MODUS_INSANE) {
            text("Insane", scoresPosX + 30, scoresPosY - 45);
            textSize(25);
            fixScorePos(afgelopenScoreInsane[afgelopenScoreInsane.length - 1], 235, 250, 25);
            fixScorePos(highscoreInsane, 235, 360, 25);
            for (var i = 0; i < 5; i++) {
                fixScorePos(afgelopenScoreInsane[afgelopenScoreInsane.length - 2 - i], 235, scoresPosY + 240 + 25 * i, 23);
            }

            //minder lag
            if (afgelopenScoreInsane.length > 6) {
                afgelopenScoreInsane.splice(0, 1);
            }
        }
        textSize(30);
        text("New Score:", scoresPosX + 32, scoresPosY);
        text("Highscore:", scoresPosX + 32, scoresPosY + 105)
        textSize(27);
        text("Recent Scores:", scoresPosX + 20, scoresPosY + 210);


        /* Knoppen (Dit is een reminder om te laten zien hoe deze werken)
        1: replay
        2: Menu
        3: Modus
        4: Tutorial
        5: Niveau
        Layout
        2><1><3
        V==1==V
        ^==1==^
        4>>1<<5 */

        //basis
        fill(64, 64, 64);
        strokeWeight(3);
        textSize(23);

        //replay knop
        stroke(64, 64, 64);
        if (currentKnop === 1) { stroke(255, 0, 0); }
        rect(scoresPosX + 80, scoresPosY + 375, 70, 70);

        //menu knop
        stroke(64, 64, 64);
        if (currentKnop === 2) { stroke(255, 0, 0); }
        rect(scoresPosX - 30, scoresPosY + 375, 100, 30);

        //Modus knop
        stroke(64, 64, 64);
        if (currentKnop === 3) { stroke(255, 0, 0); }
        rect(scoresPosX + 160, scoresPosY + 375, 100, 30);

        //tutorial knop
        stroke(64, 64, 64);
        if (currentKnop === 4) { stroke(255, 0, 0); }
        rect(scoresPosX - 30, scoresPosY + 415, 100, 30);

        //niveau knop
        stroke(64, 64, 64);
        if (currentKnop === 5) { stroke(255, 0, 0); }
        rect(scoresPosX + 160, scoresPosY + 415, 100, 30);

        //invulling van knoppen
        fill(255, 255, 255);
        noStroke();
        text("Tutorial", scoresPosX - 20, scoresPosY + 440);
        text("Levels", scoresPosX + 175, scoresPosY + 440);
        text("Menu", scoresPosX - 10, scoresPosY + 400);
        text("Modes", scoresPosX + 175, scoresPosY + 400);
        replay(scoresPosX + 115, scoresPosY + 410);
    }

    //modus unlocken
    if (mogelijkBeginNiveauAlgemeen >= 2) { unlocked_standaard = true; }
    if (mogelijkBeginNiveauAlgemeen >= 7) { unlocked_geenpowerup = true; }
    if (mogelijkBeginNiveauAlgemeen >= 12) { unlocked_eindeloos = true; }
    if (mogelijkBeginNiveauAlgemeen >= 17) { unlocked_sandbox = true; }
    if (mogelijkBeginNiveauAlgemeen >= 32) { unlocked_insane = true; }

    //reset voor de volgende frame : keyboard input
    currentKey = 0;
};
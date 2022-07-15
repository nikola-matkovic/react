let pitanja = [
    {
        pitanje: "Da li pijete?",
        odgovori: [
            {
                tekst: "Samo za slavu da bi očuvali stare običaje",
                zvuk : "alkohol_je_stetan.mp3",
            },
            {
                tekst: "Pomalo, rakija je dobra za imunitet",
                zvuk : "rakija.mp3",
            },
            {
                tekst:  "Ništa jače od vode",
                zvuk :  "",
                correct: true
            },
        ],
    },
    {
        pitanje: "Da li pušite?",
        odgovori: [
            {
                tekst: "Ponekad zapalim, uz kaficu",
                zvuk : "", // pusi_cigare.mp3
            }, 
            {
                tekst:  "Ne, užasano smrdi",
                zvuk : "", //kad se ljubiš s kamenajrkom
                correct: true
            }, 
            {
                tekst:  "Ovo pitanje mi je nejasno",
                zvuk : "pod_mac.mp3", //ideš pod mač bato
            }, 
        ],
    },
    {
        pitanje: "Škola je ...",
        odgovori: [
            {
                tekst: "Obrazovno-vaspitna ustanova",
                zvuk : "",
            }, 
            {
                tekst: "Ateistička debilana",
                zvuk : "debilana.mp3",
                correct: true
            }, 
            {
                tekst:  "Mesto za  druženje i igru",
                zvuk : "",
            }, 
        ],
    },
    {
        pitanje: "Gde ćeš tražiti devojku?",
        odgovori: [
            {
                tekst: "Na sistematkom pregledu(nije ovo, ne pitaj kako znam)",
                zvuk : "",
            }, 
            {
                tekst: "U diskoteci",
                zvuk : "",
            }, 
            {
                tekst: "Pitaću nekog pametnijeg da mi preporuči",
                zvuk : "",
                correct: true
            }, 
        ],
    },
    {
        pitanje: "Koja je najpametnija knjiga ikada?",
        odgovori: [
            {
                tekst: "Biblija",
                zvuk : "",
                correct: true
            }, 
            {
                tekst: "Gorski Vijenac",
                zvuk : "",
            }, 
            {
                tekst: "Ana Karenjina",
                zvuk : "",
            }, 
        ],
    },
    {
        pitanje: "Koja je najbolji auto?",
        odgovori: [
            {
                tekst: "Golf 2",
                zvuk : "crna_dvojka.mp3",
            }, 
            {
                tekst: "Konj",
                zvuk : "konj.mp3",
                correct: true
            }, 
            {
                tekst: "Bmw, to devojke vole",
                zvuk : "",//brm.mp3
            }, 
        ],
    },
    {
        pitanje: "Šta radiš ukoliko ti kamenjarka piše poruke i poziva na sex?",
        odgovori: [
            {
                tekst: "Ugovoriš sastanak, družite se i oženiš je",
                zvuk : "",
            }, 
            {
                tekst: "Blokiraš broj",
                zvuk : "",
                correct: true
            }, 
            {
                tekst: "Objasniš joj da niste jedno za drugo",
                zvuk : "",
                correct: true
            }, 
        ],
    },
    {
        pitanje: "Koje ti je omiljeno piće?",
        odgovori: [
            {
                tekst: "Voda",
                zvuk : "",
                correct: true
            }, 
            {
                tekst: "Kokakola",
                zvuk : "kokakola.mp3",
            }, 
            {
                tekst: "Ceđena pomorandža",
                zvuk : "",
                correct: true
            }, 
        ],
    },
    {
        pitanje: "Vegani su...",
        odgovori: [
            {
                tekst: "Ekstremno libearalna grupa koja preti da uništi ovo društvo",
                zvuk : "dnevnjak.mp3",
            }, 
            {
                tekst: "Sekta",
                zvuk : "",
            }, 
            {
                tekst: "Ljudi koji se hrane zdravo",
                zvuk : "",
                correct: true
            }, 
        ],
    },
    {
        pitanje: "Kada bi te devojka pozvala kući, šta bi uradio?",
        odgovori: [
            {
                tekst: "Otišao da zajendo čitamo Bibliju",
                zvuk : "da_citate_bibliju.mp3",
            }, 
            {
                tekst: "Odbio bih",
                zvuk : "",
                correct: true
            }, 
            {
                tekst: "Znao bih šta hoće, otišao bih",
                zvuk : "",
            }, 
        ],
    },
    {
        pitanje: "Da li znate šta je na slici?", //Marihuana
        odgovori: [
            {
                tekst: "Mora da je nešto zdravo čim je biljno",
                zvuk : "",
            }, 
            {
                tekst: "Meni baka pitu pravila, jeo kao mali",
                zvuk : "",
            }, 
            {
                tekst: "Prvi put vidim  u životu i definitivno  ne znam šta je",
                zvuk : "",
                correct: true
            }, 
        ],
    },
    {
        pitanje: "Japanci i kinezi su:",
        odgovori: [
            {
                tekst: "Srbi",
                zvuk : "",
                correct: true
            }, 
            {
                tekst: "Albanci(dakle Iliri, dakle Srbi)",
                zvuk : "",
                correct: true
            }, 
            {
                tekst: "Potomci skenderbega (dakle Albanci, dakle Iliri, dakle Srbi)",
                zvuk : "",
                correct: true
            }, 
        ],
    },
    {
        pitanje: "Koji instrument bi voleli da svirate?",
        odgovori: [
            {
                tekst: "Gitaru, to devojke vole",
                zvuk : "",
            }, 
            {
                tekst: "Gusle, da budem vitez",
                zvuk : "gusle.mp3",
                correct: true
            }, 
            {
                tekst: "Klavir",
                zvuk : "",
            }, 
        ],
    },
    {
        pitanje: "Ko je najpametniji političar?",
        odgovori: [
            {
                tekst: "Dritan Abazović",
                zvuk : "",
                correct: true
            }, 
            {
                tekst: "Abazović Dritan",
                zvuk : "",
                correct: true
            }, 
            {
                tekst: "Sveti velikomučenik AV",
                zvuk : "",
            }, 
        ],
    },
    {
        pitanje: "Da li ste za obaveznu va**inaciju?",
        odgovori: [
            {
                tekst: "Ne, neka svako ima izbor",
                zvuk : "",
                correct: true
            }, 
            {
                tekst: "Da, va**ine su nam mnogo pomogle",
                zvuk : "",
            }, 
            {
                tekst: "Ne",
                zvuk : "",
                correct: true
            }, 
        ],
    },
    {
        pitanje: "Dolazi nova godina i drugari te zovu kod njih na gajbu na proslavu i kažu biće i nekih riba, ti ćeš:",
        odgovori: [
            {
                tekst: "Otići kod njih da proslavimo novu godinu",
                zvuk : "",
            }, 
            {
                tekst: "Otići ću ako je srpska nova godina u pitanju",
                zvuk : "dnevnjak2.mp3",
            }, 
            {
                tekst: "Otići ću pod jorgan planinu i drugarima ću reći da nisam zainteresovan",
                zvuk : "",
                correct: true
            }, 
        ],
    },
    {
        pitanje: "Žena ti puni 9 meseci trudnoće i približava se porođaj, ti ćeš:",
        odgovori: [
            {
                tekst: "Odvešćeš je  u državno porodilište",
                zvuk : "",
            }, 
            {
                tekst: "Odvešćeš je u  neko privatno porodilište",
                zvuk : "",
            }, 
            {
                tekst: "Pozvaćeš pouzdanu babicu i ostati kući",
                zvuk : "",
                correct: true
            }, 
        ],
    },
    {
        pitanje: "Dete ti je napunilo 3 godine, šta ćeš da uradiš?",
        odgovori: [
            {
                tekst: "Poslaću ga u vrtić da se socijalizuje",
                zvuk : "",
            }, 
            {
                tekst: "Na  selu će se igrati sa životinjama  u prirodi",
                zvuk : "",
                correct: true
            }, 
            {
                tekst: "Upisaću ga na tenis, da bude novi Novak Đoković",
                zvuk : "",
            }, 
        ],
    },
    {
        pitanje: "Čuo si da se blizu tebe održava kobasicijada ili nešto slično, šta ćeš da uradiš",
        odgovori: [
            {
                tekst: "Otići ću da probam domaće specijalitete",
                zvuk : "",
            }, 
            {
                tekst: "Ne jedem leševe mrtvih bolesnih životinja",
                zvuk : "",
                correct: true
            }, 
            {
                tekst: "Ne bih otišao jer je aktuelna pandemija",
                zvuk : "",
            }, 
        ],
    },
    {
        pitanje: "Najbolji srpski pevač je ...?",
        odgovori: [
            {
                tekst: "Baja mali knindža",
                zvuk : "",
            }, 
            {
                tekst: "Milomir Miljanić",
                zvuk : "",
                correct: true
            }, 
            {
                tekst: "MC stojan",
                zvuk : "stojan.mp3",
            }, 
        ],
    },
]

export default pitanja;
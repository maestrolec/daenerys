function highlightKey(choice) {
    $("#piano .black-key").animate({
                    "background-color": "#000000"
                },
                100);
    $("#piano .white-key").animate({
            "background-color": "#FFFFFF"
        },
        100);
    var pianoArray = [25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36];
    
    switch (choice) {
        //C Major
        case '1':
            transpose = 0; 
            $("#piano div:nth-child("+pianoArray[0]+")").animate({
                "background-color": "#FF9933"
            },
            300);
            break;
        //G Major
        case '2':
            $("#piano div:nth-child("+pianoArray[1]+")").animate({
                "background-color": "#FF9933"
            },
            300);
            break;
        //D Major
        case '3':
            $("#piano div:nth-child("+pianoArray[2]+")").animate({
                "background-color": "#FF9933"
            },
            300);
            break;
        //A Major
        case '4':
            $("#piano div:nth-child("+pianoArray[3]+")").animate({
                "background-color": "#FF9933"
            },
            300);
            break;
        //E Major
        case '5':
            $("#piano div:nth-child("+pianoArray[4]+")").animate({
                "background-color": "#FF9933"
            },
            300);
            break;
        //B Major
        case '6':
            $("#piano div:nth-child("+pianoArray[5]+")").animate({
                "background-color": "#FF9933"
            },
            300);
            break;
        //F Major
        case '7':
            $("#piano div:nth-child("+pianoArray[6]+")").animate({
                "background-color": "#FF9933"
            },
            300);
            break;
        //Bb Major
        case '8':
            $("#piano div:nth-child("+pianoArray[7]+")").animate({
                "background-color": "#FF9933"
            },
            300);
            break;
        //Eb Major
        case '9':
            $("#piano div:nth-child("+pianoArray[8]+")").animate({
                "background-color": "#FF9933"
            },
            300);
            break;
        //Ab Major
        case '10':
            $("#piano div:nth-child("+pianoArray[9]+")").animate({
                "background-color": "#FF9933"
            },
            300);
            break;
        //Db Major
        case '11':
            $("#piano div:nth-child("+pianoArray[10]+")").animate({
                "background-color": "#FF9933"
            },
            300);
            break;
        //Gb Major
        case '12':
            $("#piano div:nth-child("+pianoArray[11]+")").animate({
                "background-color": "#FF9933"
            },
            300);
            break;
        default:
            $("#piano .black-key").animate({
                            "background-color": "#000000"
                        },
                        100);
            $("#piano .white-key").animate({
                    "background-color": "#FFFFFF"
                },
                100);
            break;
    }
}

function highlightKeyChord(choice, choice2) {
    $("#piano .black-key").animate({
                    "background-color": "#000000"
                },
                100);
    $("#piano .white-key").animate({
            "background-color": "#FFFFFF"
        },
        100);
    
    if (choice != 0) {
        var pianoArray = [12,    13, 15, 17, 18, 20, 22, 24, 25,   27, 29, 30, 32, 34, 36];
        var transpose = 0;
            
        //Key
        switch (choice) {
            //C
            case '1':
                transpose = 0; 
                break;
            //C#/Db
            case '2':
                transpose = 1;
                break;
            //D
            case '3':
                transpose = 2;
                break;
            //D#/Eb 
            case '4':
                transpose = 3;
                break;
            //E 
            case '5':
                transpose = 4;
                break;
            //F 
            case '6':
                transpose = 5;
                break;
            //F#/Gb 
            case '7':
                transpose = 6;
                break;
            //G 
            case '8':
                transpose = -5;
                break;
            //G#/Ab
            case '9':
                transpose = -4;
                break;
            //A
            case '10':
                transpose = -3;
                break;
            //A#/Bb
            case '11':
                transpose = -2;
                break;
            //B
            case '12':
                transpose = -1;
                break;
        }
        
        for (var i = 0 ; i < pianoArray.length ; i++) {
            pianoArray[i] += transpose;
        }
        
        //Chords
        switch (choice2) {
            //major
            case '1':
                $("#piano div:nth-child("+pianoArray[1]+")").animate({
                    "background-color": "#FF9933"
                },
                300);
                $("#piano div:nth-child("+pianoArray[3]+")").animate({
                    "background-color": "#FF9933"
                },
                300);
                $("#piano div:nth-child("+pianoArray[5]+")").animate({
                    "background-color": "#FF9933"
                },
                300);
                break;
            //minor
            case '2':
                $("#piano div:nth-child("+pianoArray[1]+")").animate({
                    "background-color": "#FF9933"
                },
                300);
                $("#piano div:nth-child("+(pianoArray[3]-1)+")").animate({
                    "background-color": "#FF9933"
                },
                300);
                $("#piano div:nth-child("+pianoArray[5]+")").animate({
                    "background-color": "#FF9933"
                },
                300);
                break;
            //7th
            case '3':
                $("#piano div:nth-child("+pianoArray[1]+")").animate({
                    "background-color": "#FF9933"
                },
                300);
                $("#piano div:nth-child("+pianoArray[3]+")").animate({
                    "background-color": "#FF9933"
                },
                300);
                $("#piano div:nth-child("+pianoArray[5]+")").animate({
                    "background-color": "#FF9933"
                },
                300);
                $("#piano div:nth-child("+(pianoArray[7]-1)+")").animate({
                    "background-color": "#FF9933"
                },
                300);
                break;
            //minor 7th
            case '4':
                $("#piano div:nth-child("+pianoArray[1]+")").animate({
                    "background-color": "#FF9933"
                },
                300);
                $("#piano div:nth-child("+(pianoArray[3]-1)+")").animate({
                    "background-color": "#FF9933"
                },
                300);
                $("#piano div:nth-child("+pianoArray[5]+")").animate({
                    "background-color": "#FF9933"
                },
                300);
                $("#piano div:nth-child("+(pianoArray[7]-1)+")").animate({
                    "background-color": "#FF9933"
                },
                300);
                break;
            //major 7th
            case '5':
                $("#piano div:nth-child("+pianoArray[1]+")").animate({
                    "background-color": "#FF9933"
                },
                300);
                $("#piano div:nth-child("+pianoArray[3]+")").animate({
                    "background-color": "#FF9933"
                },
                300);
                $("#piano div:nth-child("+pianoArray[5]+")").animate({
                    "background-color": "#FF9933"
                },
                300);
                $("#piano div:nth-child("+pianoArray[7]+")").animate({
                    "background-color": "#FF9933"
                },
                300);
                break;
            //6th
            case '6':
                $("#piano div:nth-child("+pianoArray[1]+")").animate({
                    "background-color": "#FF9933"
                },
                300);
                $("#piano div:nth-child("+pianoArray[3]+")").animate({
                    "background-color": "#FF9933"
                },
                300);
                $("#piano div:nth-child("+pianoArray[5]+")").animate({
                    "background-color": "#FF9933"
                },
                300);
                $("#piano div:nth-child("+pianoArray[6]+")").animate({
                    "background-color": "#FF9933"
                },
                300);
                break;
            //minor 6th
            case '7':
                $("#piano div:nth-child("+pianoArray[1]+")").animate({
                    "background-color": "#FF9933"
                },
                300);
                $("#piano div:nth-child("+(pianoArray[3]-1)+")").animate({
                    "background-color": "#FF9933"
                },
                300);
                $("#piano div:nth-child("+pianoArray[5]+")").animate({
                    "background-color": "#FF9933"
                },
                300);
                $("#piano div:nth-child("+pianoArray[6]+")").animate({
                    "background-color": "#FF9933"
                },
                300);
                break;
            //9th
            case '8':
                $("#piano div:nth-child("+pianoArray[1]+")").animate({
                    "background-color": "#FF9933"
                },
                300);
                $("#piano div:nth-child("+pianoArray[3]+")").animate({
                    "background-color": "#FF9933"
                },
                300);
                $("#piano div:nth-child("+pianoArray[5]+")").animate({
                    "background-color": "#FF9933"
                },
                300);
                $("#piano div:nth-child("+(pianoArray[7]-1)+")").animate({
                    "background-color": "#FF9933"
                },
                300);
                $("#piano div:nth-child("+pianoArray[9]+")").animate({
                    "background-color": "#FF9933"
                },
                300);
                break;
            //minor 9th
            case '9':
                $("#piano div:nth-child("+pianoArray[1]+")").animate({
                    "background-color": "#FF9933"
                },
                300);
                $("#piano div:nth-child("+(pianoArray[3]-1)+")").animate({
                    "background-color": "#FF9933"
                },
                300);
                $("#piano div:nth-child("+pianoArray[5]+")").animate({
                    "background-color": "#FF9933"
                },
                300);
                $("#piano div:nth-child("+(pianoArray[7]-1)+")").animate({
                    "background-color": "#FF9933"
                },
                300);
                $("#piano div:nth-child("+pianoArray[9]+")").animate({
                    "background-color": "#FF9933"
                },
                300);
                break;
            //11th
            case '10':
                $("#piano div:nth-child("+pianoArray[1]+")").animate({
                    "background-color": "#FF9933"
                },
                300);
                $("#piano div:nth-child("+pianoArray[3]+")").animate({
                    "background-color": "#FF9933"
                },
                300);
                $("#piano div:nth-child("+pianoArray[5]+")").animate({
                    "background-color": "#FF9933"
                },
                300);
                $("#piano div:nth-child("+(pianoArray[7]-1)+")").animate({
                    "background-color": "#FF9933"
                },
                300);
                $("#piano div:nth-child("+pianoArray[9]+")").animate({
                    "background-color": "#FF9933"
                },
                300);
                $("#piano div:nth-child("+pianoArray[11]+")").animate({
                    "background-color": "#FF9933"
                },
                300);
                break;
            //minor 11th
            case '11':
                $("#piano div:nth-child("+pianoArray[1]+")").animate({
                    "background-color": "#FF9933"
                },
                300);
                $("#piano div:nth-child("+(pianoArray[3]-1)+")").animate({
                    "background-color": "#FF9933"
                },
                300);
                $("#piano div:nth-child("+pianoArray[5]+")").animate({
                    "background-color": "#FF9933"
                },
                300);
                $("#piano div:nth-child("+(pianoArray[7]-1)+")").animate({
                    "background-color": "#FF9933"
                },
                300);
                $("#piano div:nth-child("+pianoArray[9]+")").animate({
                    "background-color": "#FF9933"
                },
                300);
                $("#piano div:nth-child("+pianoArray[11]+")").animate({
                    "background-color": "#FF9933"
                },
                300);
                break;
            //13th
            case '12':
                $("#piano div:nth-child("+pianoArray[1]+")").animate({
                    "background-color": "#FF9933"
                },
                300);
                $("#piano div:nth-child("+pianoArray[3]+")").animate({
                    "background-color": "#FF9933"
                },
                300);
                $("#piano div:nth-child("+pianoArray[5]+")").animate({
                    "background-color": "#FF9933"
                },
                300);
                $("#piano div:nth-child("+(pianoArray[7]-1)+")").animate({
                    "background-color": "#FF9933"
                },
                300);
                $("#piano div:nth-child("+pianoArray[9]+")").animate({
                    "background-color": "#FF9933"
                },
                300);
                $("#piano div:nth-child("+pianoArray[11]+")").animate({
                    "background-color": "#FF9933"
                },
                300);
                $("#piano div:nth-child("+pianoArray[13]+")").animate({
                    "background-color": "#FF9933"
                },
                300);
                break;
            //sus2
            case '13':
                $("#piano div:nth-child("+pianoArray[1]+")").animate({
                    "background-color": "#FF9933"
                },
                300);
                $("#piano div:nth-child("+pianoArray[2]+")").animate({
                    "background-color": "#FF9933"
                },
                300);
                $("#piano div:nth-child("+pianoArray[5]+")").animate({
                    "background-color": "#FF9933"
                },
                300);
                break;
            //sus4
            case '14':
                $("#piano div:nth-child("+pianoArray[1]+")").animate({
                    "background-color": "#FF9933"
                },
                300);
                $("#piano div:nth-child("+pianoArray[4]+")").animate({
                    "background-color": "#FF9933"
                },
                300);
                $("#piano div:nth-child("+pianoArray[5]+")").animate({
                    "background-color": "#FF9933"
                },
                300);
                break;
            //dim
            case '15':
                $("#piano div:nth-child("+pianoArray[1]+")").animate({
                    "background-color": "#FF9933"
                },
                300);
                $("#piano div:nth-child("+(pianoArray[3]-1)+")").animate({
                    "background-color": "#FF9933"
                },
                300);
                $("#piano div:nth-child("+(pianoArray[5]-1)+")").animate({
                    "background-color": "#FF9933"
                },
                300);
                break;
            //dim7
            case '16':
                $("#piano div:nth-child("+pianoArray[1]+")").animate({
                    "background-color": "#FF9933"
                },
                300);
                $("#piano div:nth-child("+(pianoArray[3]-1)+")").animate({
                    "background-color": "#FF9933"
                },
                300);
                $("#piano div:nth-child("+(pianoArray[5]-1)+")").animate({
                    "background-color": "#FF9933"
                },
                300);
                $("#piano div:nth-child("+pianoArray[6]+")").animate({
                    "background-color": "#FF9933"
                },
                300);
                break;
            //m7b5
            case '17':
                $("#piano div:nth-child("+pianoArray[1]+")").animate({
                    "background-color": "#FF9933"
                },
                300);
                $("#piano div:nth-child("+(pianoArray[3]-1)+")").animate({
                    "background-color": "#FF9933"
                },
                300);
                $("#piano div:nth-child("+(pianoArray[5]-1)+")").animate({
                    "background-color": "#FF9933"
                },
                300);
                $("#piano div:nth-child("+(pianoArray[7]-1)+")").animate({
                    "background-color": "#FF9933"
                },
                300);
                break;
            //aug
            case '18':
                $("#piano div:nth-child("+pianoArray[1]+")").animate({
                    "background-color": "#FF9933"
                },
                300);
                $("#piano div:nth-child("+pianoArray[3]+")").animate({
                    "background-color": "#FF9933"
                },
                300);
                $("#piano div:nth-child("+(pianoArray[5]+1)+")").animate({
                    "background-color": "#FF9933"
                },
                300);
                break;
            //aug7
            case '19':
                $("#piano div:nth-child("+pianoArray[1]+")").animate({
                    "background-color": "#FF9933"
                },
                300);
                $("#piano div:nth-child("+pianoArray[3]+")").animate({
                    "background-color": "#FF9933"
                },
                300);
                $("#piano div:nth-child("+(pianoArray[5]+1)+")").animate({
                    "background-color": "#FF9933"
                },
                300);
                $("#piano div:nth-child("+(pianoArray[7]-1)+")").animate({
                    "background-color": "#FF9933"
                },
                300);
                break;
            
        }
    }
}
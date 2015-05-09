
function setScaleChordList(choice) {
    var chordList = 0;
    switch (choice) {
        case '1':
            chordList = ["C","CM7","Dm","Dm7","Em","Em7","F","FM7","G","G7","Am","Am7","Bdim","Bm7b5"];
            break;
        case '2':
            chordList = ["G","GM7","Am","Am7","Bm","Bm7","C","CM7","D","D7","Em","Em7","F#dim","F#m7b5"];
            break;
        case '3':
            chordList = ["D","DM7","Em","Em7","F#m","F#m7","G","GM7","A","A7","Bm","Bm7","C#dim","C#m7b5"];
            break;
        case '4':
            chordList = ["A","AM7","Bm","Bm7","C#m","C#m7","D","DM7","E","E7","F#m","F#m7","G#dim","G#m7b5"];
            break;
        case '5':
            chordList = ["E","EM7","F#m","F#m7","G#m","G#m7","A","AM7","B","B7","C#m","C#m7","D#dim","D#m7b5"];
            break;
        case '6':
            chordList = ["B","BM7","C#m","C#m7","Ebm","Ebm7","E","EM7","F#","F#7","G#m","G#m7","Bbdim","Bbm7b5"];
            break;
        case '7':
            chordList = ["F","FM7","Gm","Gm7","Am","Am7","Bb","BbM7","C","C7","Dm","Dm7","Edim","Em7b5"];
            break;
        case '8':
            chordList = ["Bb","BbM7","Cm","Cm7","Dm","Dm7","Eb","EbM7","F","F7","Gm","Gm7","Adim","Am7b5"];
            break;
        case '9':
            chordList = ["Eb","EbM7","Fm","Fm7","Gm","Gm7","Ab","AbM7","Bb","Bb7","Cm","Cm7","Ddim","Dm7b5"];
            break;
        case '10':
            chordList = ["Ab","AbM7","Bbm","Bbm7","Cm","Cm7","C#","C#M7","Eb","Eb7","Fm","Fm7","Gdim","Gm7b5"];
            break;
        case '11':
            chordList = ["Db/C#","Db/C#M7","Ebm","Ebm7","Fm","Fm7","Gb/F#","Gb/F#M7","Ab","Ab7","Bbm","Bbm7","Cdim","Cm7b5"];
            break;
        case '12':
            chordList = ["Gb/F#","Gb/F#M7","Ab/G#m","Ab/G#m7","Bbm","Bbm7","B","BM7","C#","C#7","Ebm","Ebm7","Fdim","Fm7b5"];
            break;
    }
    
    $("#scales-chord-list").append('<option value = 0>--Choose One--</option>');
    for (var i = 0 ; i < chordList.length ; i++) {
        $("#scales-chord-list").append('<option value = "'+(i+1)+'">'+chordList[i]+'</option>');
    }
    
}

function highlightScales(choice) {
    $("#piano .black-key").animate({
                    "background-color": "#000000"
                },
                100);
    $("#piano .white-key").animate({
            "background-color": "#FFFFFF"
        },
        100);
    
    if (choice != '0') {
        var pianoArray = [25, 27, 29, 30, 32, 34, 36, 37];
        var transpose = 0;
        
        switch (choice) {
            //C Major
            case '1':
                transpose = 0; 
                break;
            //G Major
            case '2':
                transpose = -5;
                break;
            //D Major
            case '3':
                transpose = 2;
                break;
            //A Major
            case '4':
                transpose = -3;
                break;
            //E Major
            case '5':
                transpose = 4;
                break;
            //B Major
            case '6':
                transpose = -1;
                break;
            //F Major
            case '7':
                transpose = 5;
                break;
            //Bb Major
            case '8':
                transpose = -2;
                break;
            //Eb Major
            case '9':
                transpose = 3;
                break;
            //Ab Major
            case '10':
                transpose = -4;
                break;
            //Db Major
            case '11':
                transpose = 1;
                break;
            //Gb Major
            case '12':
                transpose = 6;
                break;
        }
        
        var key = 0;
        for (var i = 0 ; i < pianoArray.length ; i++) {
            key = pianoArray[i]+transpose;
            $("#piano div:nth-child("+key+")").animate({
                    "background-color": "#FF9933"
                },
                300);
        }
    }
}

function highlightScaleChords(choice, choice2) {
    
    $("#piano .black-key").animate({
                    "background-color": "#000000"
                },
                300);
    $("#piano .white-key").animate({
            "background-color": "#FFFFFF"
        },
        300);
    
    //Major
    if (choice != 0) {
        var pianoArray = [12,    13, 15, 17, 18, 20, 22, 24, 25,   27, 29, 30, 32, 34, 36];
        var transpose = 0;
        
        switch (choice) {
            //C Major
            case '1':
                transpose = 0; 
                break;
            //G Major
            case '2':
                transpose = -5;
                break;
            //D Major
            case '3':
                transpose = 2;
                break;
            //A Major
            case '4':
                transpose = -3;
                break;
            //E Major
            case '5':
                transpose = 4;
                break;
            //B Major
            case '6':
                transpose = -1;
                break;
            //F Major
            case '7':
                transpose = 5;
                break;
            //Bb Major
            case '8':
                transpose = -2;
                break;
            //Eb Major
            case '9':
                transpose = 3;
                break;
            //Ab Major
            case '10':
                transpose = -4;
                break;
            //Db Major
            case '11':
                transpose = 1;
                break;
            //Gb Major
            case '12':
                transpose = 6;
                break;
        }
        
        for (var i = 0 ; i < pianoArray.length ; i++) {
            pianoArray[i] += transpose;
        }
        
        //Scale
        switch (choice2) {
            //1M
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
            //1M7
            case '2':
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
            //2m
            case '3':
                $("#piano div:nth-child("+pianoArray[2]+")").animate({
                    "background-color": "#FF9933"
                },
                300);
                $("#piano div:nth-child("+pianoArray[4]+")").animate({
                    "background-color": "#FF9933"
                },
                300);
                $("#piano div:nth-child("+pianoArray[6]+")").animate({
                    "background-color": "#FF9933"
                },
                300);
                break;
            //2m7
            case '4':
                $("#piano div:nth-child("+pianoArray[2]+")").animate({
                    "background-color": "#FF9933"
                },
                300);
                $("#piano div:nth-child("+pianoArray[4]+")").animate({
                    "background-color": "#FF9933"
                },
                300);
                $("#piano div:nth-child("+pianoArray[6]+")").animate({
                    "background-color": "#FF9933"
                },
                300);
                $("#piano div:nth-child("+pianoArray[8]+")").animate({
                    "background-color": "#FF9933"
                },
                300);
                break;
            //3m
            case '5':
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
            //3m7
            case '6':
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
                $("#piano div:nth-child("+pianoArray[9]+")").animate({
                    "background-color": "#FF9933"
                },
                300);
                break;
            //4M
            case '7':
                $("#piano div:nth-child("+pianoArray[4]+")").animate({
                    "background-color": "#FF9933"
                },
                300);
                $("#piano div:nth-child("+pianoArray[6]+")").animate({
                    "background-color": "#FF9933"
                },
                300);
                $("#piano div:nth-child("+pianoArray[8]+")").animate({
                    "background-color": "#FF9933"
                },
                300);
                break;
            //4M7
            case '8':
                $("#piano div:nth-child("+pianoArray[4]+")").animate({
                    "background-color": "#FF9933"
                },
                300);
                $("#piano div:nth-child("+pianoArray[6]+")").animate({
                    "background-color": "#FF9933"
                },
                300);
                $("#piano div:nth-child("+pianoArray[8]+")").animate({
                    "background-color": "#FF9933"
                },
                300);
                $("#piano div:nth-child("+pianoArray[10]+")").animate({
                    "background-color": "#FF9933"
                },
                300);
                break;
            //5M
            case '9':
                $("#piano div:nth-child("+pianoArray[5]+")").animate({
                    "background-color": "#FF9933"
                },
                300);
                $("#piano div:nth-child("+pianoArray[7]+")").animate({
                    "background-color": "#FF9933"
                },
                300);
                $("#piano div:nth-child("+pianoArray[9]+")").animate({
                    "background-color": "#FF9933"
                },
                300);
                break;
            //57
            case '10':
                $("#piano div:nth-child("+pianoArray[5]+")").animate({
                    "background-color": "#FF9933"
                },
                300);
                $("#piano div:nth-child("+pianoArray[7]+")").animate({
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
            //6m
            case '11':
                $("#piano div:nth-child("+pianoArray[6]+")").animate({
                    "background-color": "#FF9933"
                },
                300);
                $("#piano div:nth-child("+pianoArray[8]+")").animate({
                    "background-color": "#FF9933"
                },
                300);
                $("#piano div:nth-child("+pianoArray[10]+")").animate({
                    "background-color": "#FF9933"
                },
                300);
                break;
            //6m7
            case '12':
                $("#piano div:nth-child("+pianoArray[6]+")").animate({
                    "background-color": "#FF9933"
                },
                300);
                $("#piano div:nth-child("+pianoArray[8]+")").animate({
                    "background-color": "#FF9933"
                },
                300);
                $("#piano div:nth-child("+pianoArray[10]+")").animate({
                    "background-color": "#FF9933"
                },
                300);
                $("#piano div:nth-child("+pianoArray[12]+")").animate({
                    "background-color": "#FF9933"
                },
                300);
                break;
            //7dim
            case '13':
                $("#piano div:nth-child("+pianoArray[0]+")").animate({
                    "background-color": "#FF9933"
                },
                300);
                $("#piano div:nth-child("+pianoArray[2]+")").animate({
                    "background-color": "#FF9933"
                },
                300);
                $("#piano div:nth-child("+pianoArray[4]+")").animate({
                    "background-color": "#FF9933"
                },
                300);
                break;
            //7m7b5
            case '14':
                $("#piano div:nth-child("+pianoArray[0]+")").animate({
                    "background-color": "#FF9933"
                },
                300);
                $("#piano div:nth-child("+pianoArray[2]+")").animate({
                    "background-color": "#FF9933"
                },
                300);
                $("#piano div:nth-child("+pianoArray[4]+")").animate({
                    "background-color": "#FF9933"
                },
                300);
                $("#piano div:nth-child("+pianoArray[6]+")").animate({
                    "background-color": "#FF9933"
                },
                300);
                break;
        }
    }
    
    
    
}
$(document).ready(function(){
    
    /*
    $('#chords').hide();
    $('#scales').hide();
    $('#scale-chord-field').hide();
    $('#chord-field').hide();
    */
    
    checkSubURL();
    setScaleMenuFunctions();
    setChordMenuFunctions();
    
    /*
    $(document).on({
        mouseenter: function() {
            console.log("mouseenter");
            $(this).addClass('highlighted');
        },
        mouseleave: function() {
            console.log("mouseleave");
            $(this).removeClass('highlighted');
        }
    }, '#piano div');
    */
    
});

function checkSubURL() {
    var urlPath = ($(location).attr('href'));
    var subPath = urlPath.substring(urlPath.indexOf('#'));
    
    if (subPath != 0) {
        if (subPath === "#scales") {
            console.log("scales");
            $('.sidebar-nav li:nth-child(1) a').addClass('menu-selected');
            $('#chords').hide();
            $('#key-list').val(0);
            
            $('#chord-field').hide();
            $('#chord-list').val(0);
            /*
            $('#chords').fadeOut('fast',
                function(){
                    $(this).hide();
                });
            */
            $('#scales').fadeIn('slow',
                function(){
                    $(this).show();
                });
        } else if (subPath === "#chords") {
            console.log("chords");
            $('.sidebar-nav li:nth-child(2) a').addClass('menu-selected');
            $('#chords').fadeIn('slow',
                function(){
                    $(this).show();
                });   
        }
    }
}

function setScaleMenuFunctions() {
    $('.sidebar-nav li:nth-child(1)').click(function() {
        $("#piano .black-key").animate({
                "background-color": "#000000"
            },
            300);
        $("#piano .white-key").animate({
            "background-color": "#FFFFFF"
        },
        300);
        $('#chords').hide();
        $('#key-list').val(0);
        
        $('#chord-field').hide();
        $('#chord-list').val(0);
        /*
        $('#chords').fadeOut('fast',
            function(){
                $(this).hide();
            });
        */
        $('#scales').fadeIn('slow',
            function(){
                $(this).show();
            });
        $('.sidebar-nav li:nth-child(2) a').removeClass('menu-selected');
        $('.sidebar-nav li:nth-child(1) a').addClass('menu-selected');
    });
    
    $('#scales-list').change(function(){
        var selectedScale = $('#scales-list option:selected').val();
        
        if (!($("#scales-chord-list").is(':empty')) && (selectedScale != 0)) {
            $("#scales-chord-list").empty();
        }
        
        if (selectedScale != 0) {
            setScaleChordList(selectedScale);
            $('#scale-chord-field').fadeIn('slow',
                function(){
                    $(this).show();
                });
        } else {
            $('#scale-chord-field').fadeOut('slow',
                function(){
                    $(this).hide();
                    if (!($("#scales-chord-list").is(':empty')) && !($("#scales-chord-list").is(":visible"))) {
                        $("#scales-chord-list").empty();
                    }
                });
        }
        highlightScales(selectedScale);    
    });
    
    $('#scales-chord-list').change(function(){
        var selectedScale = $('#scales-list option:selected').val();
        var selectedScaleChord = $('#scales-chord-list option:selected').val();
        if (selectedScale != 0) {
            highlightScaleChords(selectedScale, selectedScaleChord);
        }
    });
}

function setChordMenuFunctions() {
    $('.sidebar-nav li:nth-child(2)').click(function() {
        $("#piano .black-key").animate({
                "background-color": "#000000"
            },
            300);
        $("#piano .white-key").animate({
            "background-color": "#FFFFFF"
        },
        300);
        $('#scales').hide();
        $('#scales-list').val(0);
        $('#scales-chord-list').val(0);
        $('#scale-chord-field').hide();
        /*
        $('#scales').fadeOut('fast',
            function(){
                $(this).hide();
            });
        */
        $('#chords').fadeIn('slow',
            function(){
                $(this).show();
            });   
        $('.sidebar-nav li:nth-child(1) a').removeClass('menu-selected');
        $('.sidebar-nav li:nth-child(2) a').addClass('menu-selected');
    });
    
    $('#key-list').change(function() {
        var selectedKey = $('#key-list option:selected').val();
        var selectedChord = $('#chord-list option:selected').val();
        if (selectedChord != '0') {
            highlightKeyChord(selectedKey, selectedChord);
        } else {
            highlightKey(selectedKey);
        }
        if (selectedKey != '0') {
            $('#chord-field').fadeIn('slow',
                function(){
                    $(this).show();
                });
        } else {
            $('#chord-field').fadeOut('slow',
                function(){
                    $(this).hide();
                });
            $('#chord-list').val(0);
        }
    });
    
    $('#chord-list').change(function(){
        var selectedKey = $('#key-list option:selected').val();
        var selectedChord = $('#chord-list option:selected').val();
        if (selectedChord != '0') {
            highlightKeyChord(selectedKey, selectedChord);
        } else {
            highlightKey(selectedKey);
        }
    });   
}


function setAboutFunction() {
    //code
}
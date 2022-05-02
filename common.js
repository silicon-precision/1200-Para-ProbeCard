const xmlns = 'http://www.w3.org/2000/svg';

const EnableTable = [
    0, 1, 4, 5, 8, 9, 12, 13, 16, 17,
    20, 21, 24, 25, 28, 29, 32, 33, 36, 37,
    40, 41, 44, 45, 48, 49, 52, 53, 56, 57,
    60, 61, 64, 65, 68, 69, 72, 73, 76, 77,
    80, 81, 84, 85, 88, 89, 92, 93, 96, 97,
    100, 101, 104, 105, 108, 109, 112, 113, 116, 117,
    2, 3, 6, 7, 10, 11, 14, 15, 18, 19,
    22, 23, 26, 27, 30, 31, 34, 35, 38, 39,
    42, 43, 46, 47, 50, 51, 54, 55, 58, 59,
    62, 63, 66, 67, 70, 71, 74, 75, 78, 79,
    82, 83, 86, 87, 90, 91, 94, 95, 98, 99,
    102, 103, 106, 107, 110, 111, 114, 115, 118, 119
];

const ChannelTable = [
    0, 12, 24, 36, 48, 60, 72, 84, 0, 1,
    1, 13, 25, 37, 49, 61, 73, 85, 2, 3,
    2, 14, 26, 38, 50, 62, 74, 86, 4, 5,
    3, 15, 27, 39, 51, 63, 75, 87, 6, 7,
    4, 16, 28, 40, 52, 64, 76, 88, 8, 9,
    5, 17, 29, 41, 53, 65, 77, 89, 10, 11,
    6, 18, 30, 42, 54, 66, 78, 90, 12, 13,
    7, 19, 31, 43, 55, 67, 79, 91, 14, 15,
    8, 20, 32, 44, 56, 68, 80, 92, 16, 17,
    9, 21, 33, 45, 57, 69, 81, 93, 18, 19,
    10, 22, 34, 46, 58, 70, 82, 94, 20, 21,
    11, 23, 35, 47, 59, 71, 83, 95, 22, 23
];

const drawCell = [
//  1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4

    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,     // 1
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,     // 2
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,     // 3
    0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0,     // 4
    0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0,     // 5
    0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0,     // 6
    0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0,     // 7
    0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0,     // 8
    0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0,     // 9
    0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0,     // 10
    0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0,     // 11
    0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0,     // 12
    0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0,     // 13
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,     // 14
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,     // 15
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,     // 16
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,     // 17
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,     // 18
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,     // 19
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,     // 20
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,     // 21
    0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0,     // 22
    0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0,     // 23
    0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0,     // 24
    0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0,     // 25
    0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0,     // 26
    0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0,     // 27
    0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0,     // 28
    0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0,     // 29
    0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0,     // 30
    0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0,     // 31
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,     // 32
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,     // 33
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0      // 34
];

function getUrlParams() {
    var params = {};
    window.location.search.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(str, key, value) {
        params[key] = value;
    });
    return params;
}

function drawInputLine(direct, x, y, len, lineName, padName, w, color) {
    if( direct == 1 ) {
        if( padName != '' ) {
            $(document.createElementNS(xmlns, "path")).attr({
                d:`M ${x} ${y} v 8 h 8 l 4 -4 l -4 -4 h -8`, stroke:'black', fill:(color == undefined)?'green':color
            }).appendTo(svgTag);
            $(document.createElementNS(xmlns, "text")).attr({
                x:x+15, y:y+5, 'font-size':8, class:'rightAlign'
            }).text(padName).appendTo(svgTag);
        }
        $(document.createElementNS(xmlns, "line")).attr({
            x1:x, y1:y+4, x2:x-len, y2:y+4, fill:"transparent", stroke:(w==1)?'darkred':'blue', "stroke-width":w
        }).appendTo(svgTag);
        if( lineName != '' ) {
            $(document.createElementNS(xmlns, "text")).attr({
                x:x-50, y:y, 'font-size':8, 'fill':'red', class:'rightAlign'
            }).text(lineName).appendTo(svgTag);
        }
    } else {
        if( padName != '' ) {
            $(document.createElementNS(xmlns, "path")).attr({
                d:`M ${x} ${y} m 0 4 l 4 4 h 8 v -8 h -8 l -4 4`, stroke:'black', fill:(color == undefined)?'green':color
            }).appendTo(svgTag);
//            console.log(`text length = ${padName.length}`);
            $(document.createElementNS(xmlns, "text")).attr({
                x:x-(padName.length*3)-10, y:y+5, 'font-size':8, class:'rightAlign'
            }).text(padName).appendTo(svgTag);
        }
        $(document.createElementNS(xmlns, "line")).attr({
            x1:x+12, y1:y+4, x2:x+12+len, y2:y+4, fill:"transparent", stroke:(w==1)?'darkred':'blue', "stroke-width":w
        }).appendTo(svgTag);
        if( lineName != '' ) {
            $(document.createElementNS(xmlns, "text")).attr({
                x:x+22, y:y, 'font-size':8, 'fill':'red', class:'rightAlign'
            }).text(lineName).appendTo(svgTag);
        }
    }
}

function drawOutputLine(direct, x, y, len, lineName, padName, w, color) {
    if( direct == 1 ) {
        if( padName != '' ) {
            $(document.createElementNS(xmlns, "path")).attr({
                d:`M ${x} ${y} m 0 4 l 4 4 h 8 v -8 h -8 l -4 4`, stroke:'black', fill:(color == undefined) ? 'green' : color
            }).appendTo(svgTag);
        }
        $(document.createElementNS(xmlns, "text")).attr({
            x:x+15, y:y+5, 'font-size':8, class:'rightAlign'
        }).text(padName).appendTo(svgTag);
        $(document.createElementNS(xmlns, "line")).attr({
            x1:x, y1:y+4, x2:x-len, y2:y+4, fill:"transparent", stroke:(w==1)?'darkred':'blue', "stroke-width":w
        }).appendTo(svgTag);
        if( lineName != '' ) {
            $(document.createElementNS(xmlns, "text")).attr({
                x:x-50, y:y, 'font-size':8, 'fill':'red', class:'rightAlign'
            }).text(lineName).appendTo(svgTag);
        }
    } else {
        if( padName != '' ) {
            $(document.createElementNS(xmlns, "path")).attr({
                d:`M ${x} ${y} v 8 h 8 l 4 -4 l -4 -4 h -8`, stroke:'black', fill:(color == undefined) ? 'green' : color
            }).appendTo(svgTag);
            $(document.createElementNS(xmlns, "text")).attr({
                x:x-38, y:y+5, 'font-size':8, class:'rightAlign'
            }).text(padName).appendTo(svgTag);
        }
        if( len == 0 ) {
            $(document.createElementNS(xmlns, "path")).attr({
                d:`M ${x+10} ${y+2} l 4 4 m 0 -4 l -4 4`, stroke:'black', fill:'darkred'
            }).appendTo(svgTag);
        } else {
            $(document.createElementNS(xmlns, "line")).attr({
                x1:x+12, y1:y+4, x2:x+12+len, y2:y+4, fill:"transparent", stroke:(w==1)?'darkred':'blue', "stroke-width":w
            }).appendTo(svgTag);
        }
        if( lineName != '' ) {
            $(document.createElementNS(xmlns, "text")).attr({
                x:x+len-30, y:y, 'font-size':8, 'fill':'red', class:'rightAlign'
            }).text(lineName).appendTo(svgTag);
        }
    }
}

function drawSwitch(sw, sx, sy, len, iLineName, iPadName, oPadName, oLineName) {
//    console.log(`sx = ${sx}, sy = ${sy}`);
    var idx = sw % 10;
    if( (idx == 3) || (idx == 5) || (idx == 7) || (idx == 8) || (idx == 9) ) {
        $(document.createElementNS(xmlns, "path")).attr({
            d:`M ${sx+10} ${sy-10} v 10 h 30`, class:'normalsvg'
        }).appendTo(svgTag);
    } else {
        $(document.createElementNS(xmlns, "path")).attr({
            d:`M ${sx-len} ${sy} h ${len*2}`, class:'normalsvg'
        }).appendTo(svgTag);
        if( (sw != 26) && (sw != 56) && (sw != 86) && (sw != 116) ) {
            $(document.createElementNS(xmlns, "circle")).attr({
                cx:sx-len, cy:sy, r:2, fill:"black", stroke:'black', "stroke-width":1
            }).appendTo(svgTag);
        }
        if( iPadName != '' ) {
            $(document.createElementNS(xmlns, "text")).attr({
                x:sx+3, y:sy-5, 'font-size':8, class:'rightAlign'
            }).text(iPadName).appendTo(svgTag);
        }
    }

    $(document.createElementNS(xmlns, "circle")).attr({
        cx:sx+len, cy:sy, r:2, class:'normalsvg'
    }).appendTo(svgTag);

    $(document.createElementNS(xmlns, "path")).attr({
    d:`M ${sx+len} ${sy} l ${len} ${-6}`, class:'normalsvg'
    }).appendTo(svgTag);

    $(document.createElementNS(xmlns, "circle")).attr({
        cx:sx+(len*2), cy:sy, r:2, class:'normalsvg'
    }).appendTo(svgTag);

    if( oPadName != '' ) {
        $(document.createElementNS(xmlns, "text")).attr({
            x:sx+(len*2)+3, y:sy-5, 'font-size':8, class:'rightAlign'
        }).text(oPadName).appendTo(svgTag);
    }
    $(document.createElementNS(xmlns, "path")).attr({
        d:`M ${sx+(len*2)} ${sy} h ${len*2}`, class:'normalsvg'
    }).appendTo(svgTag);
    if( oLineName != '' ) {
        $(document.createElementNS(xmlns, "text")).attr({
            x:sx+(len*3)+10, y:sy-5, 'font-size':8, class:'rightAlign'
        }).text(oLineName).appendTo(svgTag);
    }
}


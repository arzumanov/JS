var week = ["ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ", "ВС"];
week[5] = '<b>' + week[5] + '</b>';
week[6] = '<b>' + week[6] + '</b>';
week[0] = '<em>' + week[0] + '</em>';
document.write(week.join('<br>'));

var arr = ["345777", "987654", "7654", "987543", "098234", "765851", "3456789"];

for (var a = 0 ; a < arr.length; a++) {
    if (arr[a].charAt(0) === "3" || arr[a].charAt(0) === "7") {
        console.log(arr[a]);
    }
    else{
        console.log('Ошибка');
    }
};



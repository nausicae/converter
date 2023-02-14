const cyr = {'\u0482з': 7000,'\u0482\uA645': 6000,'\u0482е': 5000,'\u0482д': 4000, '\u0482г': 3000,'\u0482в': 2000, '\u0482а': 1000,
             'ц': 900, '\u0461': 800, '\u0471': 700, 'х': 600, 'ф': 500, '\uA64B': 400, 'т': 300, 'c': 200,
             'р': 100, 'ч': 90, 'п': 80, 'о': 70, 'ѯ': 60, '\u043D': 50, 'м': 40, 'л': 30, 'к': 20,
            'ѳ\u04CF': 19, 'и\u04CF': 18, 'з\u04CF': 17,'\uA645\u04CF': 16,
            'e\u04CF': 15, 'д\u04CF': 14, 'г\u04CF': 13,'в\u04CF': 12,'а\u04CF': 11,
             '\u04CF': 10,'ѳ': 9, 'и': 8, 'з': 7, '\uA645': 6, 'е': 5, 'д': 4, 'г': 3, 'в': '2', 'а': '1'}

function cyrConverter(a) {
    let result = '';

    for (let key in cyr) {
        if (a >= 8000) {
            result = 'Это фиаско, братанъ';
            break;
        }

        if (cyr[key] <= a) {
            result += key;
            a = a - cyr[key];
        }
      
    }
    return result;
}


document.querySelector('button').onclick = () => {
    let num = +document.querySelector('input').value;
    document.querySelector('.out').innerHTML = cyrConverter(num);

}

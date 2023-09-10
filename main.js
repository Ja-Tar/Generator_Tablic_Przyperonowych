function generujStrone() {
    // Pobieramy wszystkie dane wprowadzone do formularza
    var godz = document.getElementById('godz').value;
    var numer_pociagu = document.getElementById('numer_pociagu').value;
    var stacja_koncowa = document.getElementById('stacja_koncowa').value;
    var stacje_posrednie = document.getElementById('stacje_posrednie').value;
    var przewoznik = document.getElementById('przewoznik').value;

    // Pobierz treść szablonu z pliku template.html za pomocą AJAX
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'ekran_tamplate.html', true);

    xhr.onload = function() {
        if (xhr.status === 200) {
            // Treść szablonu
            var template = xhr.responseText;
            
            // Sprawdzamy czy wszystkie pola są wypełnione
            if (godz === '' || numer_pociagu === '' || stacja_koncowa === '' || stacje_posrednie === '' || przewoznik === '') {
                alert('Proszę wypełnić wszystkie pola!');
                return;
            }

            // Wypełnij szablon danymi
            var wypelnionySzablon = template.replace(/{godz}/g, godz).replace(/{numer_pociagu}/g, numer_pociagu).replace(/{stacja_koncowa}/g, stacja_koncowa).replace(/{stacje_posrednie}/g, stacje_posrednie).replace(/{przewoznik}/g, przewoznik);

            // Wstaw wypełniony szablon do dokumentu
            var noweOkno = window.open('', '_blank');
            noweOkno.document.write(wypelnionySzablon);
            noweOkno.document.close();
        }
    };

    xhr.send();
}
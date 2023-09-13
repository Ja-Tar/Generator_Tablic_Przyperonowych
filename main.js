function generujStrone() {
    // Pobieramy wszystkie dane wprowadzone do formularza
    var godz = document.getElementById('godz').value;
    var numer_pociagu = document.getElementById('numer_pociagu').value;
    var stacja_koncowa = document.getElementById('stacja_koncowa').value;
    var stacje_posrednie = document.getElementById('stacje_posrednie').value;
    var przewoznik = document.getElementById('przewoznik').value;

    // Pobierz treść szablonu z pliku ekran_tamplate.html za pomocą fetch
    fetch('ekran_template.html')
        .then(response => response.text())
        .then(template => {
            // Sprawdzamy czy wszystkie pola są wypełnione
            if (godz === '' || numer_pociagu === '' || stacja_koncowa === '' || stacje_posrednie === '' || przewoznik === '') {
                alert('Proszę wypełnić wszystkie pola!');
                return;
            }

            // Wypełnij szablon danymi
            var wypelnionySzablon = template.replace(/{godz}/g, godz).replace(/{numer_pociagu}/g, numer_pociagu).replace(/{stacja_koncowa}/g, stacja_koncowa).replace(/{stacje_posrednie}/g, stacje_posrednie).replace(/{przewoznik}/g, przewoznik);

            // Wstaw wypełniony szablon do dokumentu
            var miejsceNaStrone = document.getElementById('wygenerowanaStrona');
            miejsceNaStrone.innerHTML = wypelnionySzablon;
            var miejsceNaZdjecie = document.getElementById('wygenerowaneZdjecie');
            html2canvas(document.getElementById('wygenerowanaStrona'), {width: 900}).then(function(canvas) {
                miejsceNaZdjecie.innerHTML = "";
                var img = new Image();
                img.src = canvas.toDataURL("image/png");
                miejsceNaZdjecie.append(img);
            });
            var classa = document.getElementById('boxtekst');
            classa.classList.add("animacja-migmig")
        })
        .catch(error => {
            console.error('Błąd pobierania szablonu:', error);
        });
}
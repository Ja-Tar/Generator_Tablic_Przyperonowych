function generujStrone() {
    // Pobieramy wszystkie dane wprowadzone do formularza
    var godz = document.getElementById('godz').value;
    var numer_pociagu = document.getElementById('numer_pociagu').value;
    var stacja_koncowa = document.getElementById('stacja_koncowa').value;
    var stacje_posrednie = document.getElementById('stacje_posrednie').value;
    var przewoznik = document.getElementById('przewoznik').value;
    var nazwa = document.getElementById('nazwapociagu').value;

    // Pobierz treść szablonu z pliku ekran_tamplate.html za pomocą fetch
    fetch('ekran_template.html')
        .then(response => response.text())
        .then(template => {
            // Sprawdzamy czy wszystkie pola są wypełnione
            if (godz === '' || numer_pociagu === '' || stacja_koncowa === '' || przewoznik === '') {
                alert('Proszę wypełnić wszystkie wymagane pola!');
                return;
            }

            // Wypełnij szablon danymi
            var wypelnionySzablon = template.replace(/{godz}/g, godz)
                .replace(/{numer_pociagu}/g, numer_pociagu)
                .replace(/{stacja_koncowa}/g, stacja_koncowa)
                .replace(/{stacje_posrednie}/g, stacje_posrednie)
                .replace(/{przewoznik}/g, przewoznik)
                .replace(/{nazwa}/g, nazwa);

            // Wstaw wypełniony szablon do dokumentu
            var miejsceNaStrone = document.getElementById('wygenerowanaStrona');
            miejsceNaStrone.innerHTML = wypelnionySzablon;
            
            // Hide the elements with IDs 'nazwapociagutext' and 'nazwapociagu' if 'nazwa' is empty
            if (nazwa === '') {
                var nazwaText = document.getElementById('tp_nazwapociagutext');
                var nazwaDiv = document.getElementById('tp_nazwapociagu');
                nazwaText.style.display = 'none';
                nazwaDiv.style.display = 'none';
                var przewoznikDiv = document.querySelector('.przewoznik');
                przewoznikDiv.classList.add('move-right');
            }
            
            var miejsceNaZdjecie = document.getElementById('wygenerowaneZdjecie');
            html2canvas(document.getElementById('wygenerowanaStrona'), { width: 900 }).then(function (canvas) {
                miejsceNaZdjecie.innerHTML = "";
                var img = new Image();
                img.src = canvas.toDataURL("image/png");
                img.width = 900;
                img.height = 440;
                miejsceNaZdjecie.append(img);
            });
            var classa = document.getElementById('boxtekst');
            classa.classList.add("animacja-migmig");
        })
        .catch(error => {
            console.error('Błąd pobierania szablonu:', error);
        });
}

let Prezzino = document.getElementById('PriceCalcButton');
let testoprezzo = document.getElementById('testoprezzo');
let totale = document.getElementById('totale');

let url = new URL(window.location.href);
let prezzo = parseFloat(url.searchParams.get('prezzo'));

Prezzino.addEventListener('click', function () {
  let text = 'Costo Totale: ';
  let FormCon = document.getElementById('FormCon');

  let Cognome = document.getElementById('Cognome');

  let Nome = document.getElementById('Nome');

  let Mail = document.getElementById('Mail');

  let Provincia = document.getElementById('Provincia');
  let Provinciac = document.getElementById('Provincia').value;
  let Provinciai = parseFloat(
    Provincia.options[Provincia.selectedIndex].getAttribute('price')
  );

  let somma = Provinciai + prezzo;
  somma = somma.toFixed(2);
  console.log(somma);
  totale.value = somma;
  if (Provinciac != '' && Cognome != '' && Nome != '') {
    testoprezzo.innerHTML = 'Costo totale: ' + somma + '€';
    document.getElementById(
      'SendButton'
    ).innerHTML = `<input class="hover PayButton" id="Paghino" type="submit" value="Prosegui con l'acquisto"/>`;
  } else {
    alert('Seleziona tutti i campi! >⁔<');
  }
});

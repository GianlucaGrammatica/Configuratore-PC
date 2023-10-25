let Prezzino = document.getElementById('PriceCalcButton');
let Pasghishi = document.getElementById('PriceCalcButton');
let prezzo = document.getElementById('prezzo');
let somma = 0;

Prezzino.addEventListener('click', function () {
  let text = 'Costo Totale: ';
  let FormCon = document.getElementById('FormCon');

  let cpu = document.getElementById('CPU');
  let cpuc = document.getElementById('CPU').value;
  let cpui = parseFloat(cpu.options[cpu.selectedIndex].getAttribute('price'));

  let mother = document.getElementById('SchedaMadre');
  let motherc = document.getElementById('SchedaMadre').value;
  let motheri = parseFloat(
    mother.options[mother.selectedIndex].getAttribute('price')
  );

  let memory = document.getElementById('Memoria');
  let memoryc = document.getElementById('Memoria').value;
  let memoryi = parseFloat(
    memory.options[memory.selectedIndex].getAttribute('price')
  );

  let quan = document.getElementById('Quantity');
  let quanc = document.getElementById('Quantity').value;
  let quani = parseInt(quan.value);

  let memetot = parseFloat(memoryi * quani);

  let graph = document.getElementById('SchedaGrafica');
  let graphc = document.getElementById('SchedaGrafica').value;
  let graphi = parseFloat(
    graph.options[graph.selectedIndex].getAttribute('price')
  );

  FormCon.classList.add('NoBorder');

  let somma = cpui + motheri + memetot + graphi;
  somma = somma.toFixed(2);
  console.log(somma);
  text += somma + '€';

  let invio = `<input class="hover PayButton" type="submit" value="Prosegui con l'acquisto" id="Pasghishi"/>`;

  if (
    cpuc == '' ||
    motherc == '' ||
    memoryc == '' ||
    quanc == '' ||
    graphc == ''
  ) {
    alert('Seleziona tutti i campi! >⁔<');
  } else {
    document.getElementById('prezzotext').innerHTML = text;
    FormCon.classList.add('NoBorder');
    prezzo.value = somma;
    if (somma <= 800) {
      FormCon.classList.add('GreenBorder');
      FormCon.classList.remove('YellowBorder');
      FormCon.classList.remove('RedBorder');
      document.getElementById(
        'SendButton'
      ).innerHTML = `<input class="hover PayButton" id="Paghino" type="submit" value="Prosegui con l'acquisto"/>`;
    } else {
      if (somma > 800 && somma <= 1000) {
        FormCon.classList.add('YellowBorder');
        FormCon.classList.remove('GreenBorder');
        FormCon.classList.remove('RedBorder');
        document.getElementById(
          'SendButton'
        ).innerHTML = `<input class="hover PayButton" id="Paghino" type="submit" value="Prosegui con l'acquisto"/>`;
      } else {
        FormCon.classList.add('RedBorder');
        FormCon.classList.remove('YellowBorder');
        FormCon.classList.remove('GreenBorder');
        document.getElementById(
          'SendButton'
        ).innerHTML = `<input class="hover PayButton" id="Paghino" type="submit" value="Prosegui con l'acquisto" disabled/>`;
        alert('Il prezzo totale supera i 1000€ >⁔<');
      }
    }
  }
});

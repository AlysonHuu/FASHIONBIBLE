// Filtre de recherche des défilés
var champ = document.getElementById('filtre');
if (champ) {
  champ.addEventListener('input', function () {
    var q = champ.value.toLowerCase().trim();
    document.querySelectorAll('.defile-col').forEach(function (c) {
      c.hidden = !c.dataset.recherche.includes(q);
    });
    document.querySelectorAll('.maison').forEach(function (m) {
      m.hidden = !m.querySelector('.defile-col:not([hidden])');
    });
    document.getElementById('aucun').hidden = !!document.querySelector('.defile-col:not([hidden])');
  });
}

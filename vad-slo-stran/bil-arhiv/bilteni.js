/* Skupne nastavitve – spremeni samo tukaj */
const CONFIG = {
  naslov: 'Bilteni - VAD',
  od: 6, do: 25,                       // bilten6 ... bilten25
  datoteka: n => `bilten${n}.xlsx`,    // pot do xlsx (relativno glede na viewer.html)
  viewer: 'viewer.html'
};

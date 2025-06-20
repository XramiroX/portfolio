export function fileNumber_To_Text(num, lang) {
  let language = lang == 1 ? "spanish" : "english";
  let text = language + " nnumber maximun";

  //limite actual 999,999 x 10^243

  let escalasCero = [
    "millon",
    ,"billon"
    ,"trillon"
    ,"cuatrillon"
    ,"quintillon"
    ,"sextillon"
    ,"septillon"
    ,"octillon"
    ,"nonillon"
    ,"decillon"
    ,"undecillon"
    ,"duodecillon"
    ,"tredecillon"
    ,"cuatordecillon"
    ,"quindecillon"
    ,"sexdecillon"
    ,"septencillon"
    ,"octodecillon"
    ,"novendecillon"
    ,"vigintillon"
    ,"unvigintillon"
    ,"duovinginillon"
    ,"trevinginillon"
    ,"cuatorvinginillon"
    ,"quinvinginillon"
    ,"sexvinginillon"
    ,"septenvinginillon"
    ,"octovinginillon"
    ,"novenvinginillon"
    ,"trigintillon"
    ,"untrigintillon"
    ,"duotrigintillon"
    ,"tretrigintillon"
    ,"cuatortrigintillon"
    ,"quintrigintillon"
    ,"sextrigintillon"
    ,"septentrigintillon"
    ,"octotrigintillon"
    ,"noventrigintillon"
    ,"cuadragintillon"
  ]

  /**
   * Flujo de trabajo - Work flow
   * 
   * separados en miles
   * cada 2 secciones de miles se agrega un MIL
   * Arriba hacia abajo, restando
   *    Centenas
   *    Decimas
   *    Unidades
   *    Especiales (once, doce, trece, catorce, quince)
   * 
   * seis 6
   * ses-enta 60
   * seis-cientos 600
   * seis-mil 6000
   * seis-millones 6000000
   * seis-mil-millones 6000000000
   * seis-billones 6000000000000
   * seis-trillones 6000000000000000000
   * cuatrillones 6000000000000000000000000
   * quintillones
   * sextillones
   * septillones
   * octillones
   * nonillones
   * decillones
   * undecillones
   * duodecillones
   * 
   */

  return text;
}

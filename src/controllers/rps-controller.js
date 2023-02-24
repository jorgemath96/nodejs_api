class Rps {

  /**
   * De momento no es necesario contruir variables
   */
  constructor() { }

  /** Estas variables son necesarias para la función jugar */
  i = 0
  im = ["r", "p", "s"];
  imName = ["Piedra", "Papel", "Tijeras"];

  /**
   * 
   * @param {int} min Entero mínimo a considerar...
   * @param {int} max Entero máximo a considerar...
   * @returns Regresa un entero aleatorio en en rango[min,max]...
   */
  nran(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

  /**
   * 
   * @param {string} pu Inicial de la elección del usuario (inglés)...
   * @param {string} pw Inicial de la elección aleatoria de la App (inglés)...usando "nran" se obtiene usualmente
   * @returns El resultado del juego entre el usuario y la App...
   */
  jugar(pu, pw, ima) {
    if (pu === pw) {
      return "d";
    } else if ((pu == ima[0] && pw == ima[2]) || (pu == ima[1] && pw == ima[0]) || (pu == ima[2] && pw == ima[1])) {
      return "w"
    } else {
      return "l";
    }
  }
}

// Exportando la class (controlador) Rps...
module.exports = Rps;
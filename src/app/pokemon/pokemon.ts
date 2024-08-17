/* Chapitre 2 : Les Composants */

// je créer mon typage
export class Pokemon {
  id: number | undefined;
  hp: number | undefined;
  cp: number | undefined;
  name: string | undefined;
  picture: string | undefined;
  types: Array<string> | undefined;
  created: Date | undefined;
}

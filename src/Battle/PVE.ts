/* eslint-disable complexity */
import Character from '../Character';
import Fighter, { SimpleFighter } from '../Fighter';
import Monster from '../Monster';
import Battle from './Battle';

class PVE extends Battle {
  private _player: Character | Fighter;
  private _monsters : (Monster | Fighter | SimpleFighter)[];

  constructor(player: Character | Fighter, monsters:
  (Monster | Fighter | SimpleFighter)[]) {
    super(player);
    this._player = player;
    this._monsters = monsters;
  }

  fight(): number {
    let hasWinner = false;

    while (!hasWinner) {
      for (let i = 0; i < this._monsters.length; i += 1) {
        const deadMonsters: (Monster | Fighter | SimpleFighter)[] = [];
        hasWinner = this.turnResult(
          deadMonsters,
          this._player,
          this._monsters[i],
        );
      }
    }
    return super.fight();
  }

  turnResult(
    arr:(Monster | Fighter | SimpleFighter)[],
    player: Character | Fighter,
    monster: Monster | Fighter | SimpleFighter,
  ):boolean {
    player.attack(monster);
  
    if (monster.lifePoints === -1) arr.push(monster);
  
    monster.attack(player);
  
    if (player.lifePoints === -1) return true;
    if (arr.length === this._monsters.length) return true;
    return false;
  }
}

export default PVE;
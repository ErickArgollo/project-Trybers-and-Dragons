import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Mage extends Archetype {
  private _energyType: EnergyType;
  static instances = 0;

  constructor(name:string) {
    super(name);
    this._energyType = 'mana';
    Mage.instances += 1;
  }

  static createdArchetypeInstances():number {
    return Mage.instances;
  }

  get energyType() {
    return this._energyType;
  }
}

export default Mage;
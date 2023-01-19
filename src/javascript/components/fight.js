import { controls } from '../../constants/controls';

export async function fight(firstFighter, secondFighter) {
  return new Promise((resolve) => {
    return firstFighter.health > 0 ? secondFighter : firstFighter;
  });
}

export function getDamage(attacker, defender) {
  return getHitPower(attacker) - getBlockPower(defender);
}

export function getHitPower(fighter) {
  const criticalHitChance = getRandomFloat(1, 2);
  return fighter.attack * criticalHitChance
}

export function getBlockPower(fighter) {
  const dodgeChance = getRandomFloat(1, 2);
  return fighter.defense * dodgeChance
}


function getRandomFloat(min, max) {
  return Math.random() * (max - min) + min;
}
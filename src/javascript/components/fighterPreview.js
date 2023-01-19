import { createElement } from '../helpers/domHelper';

export function createFighterPreview(fighter, position) {
  const positionClassName = position === 'right' ? 'fighter-preview___right' : 'fighter-preview___left';
  const fighterElement = createElement({
    tagName: 'div',
    className: `fighter-preview___root ${positionClassName}`,
  });

  // todo: show fighter info (image, name, health, etc.)
  console.log(fighter)
  if(fighter) {
    const imageElement = createFighterImage(fighter,position);

    const nameElement = createElement({ tagName: 'h2', className: 'fighter-preview___name' });
    nameElement.innerText = `${fighter.name}`;

    const healthElement = createElement({ tagName: 'span', className: 'fighter-preview___span' });
    healthElement.innerText = `Health: ${fighter.health}`;

    const attackElement = createElement({ tagName: 'span', className: 'fighter-preview___span'});
    attackElement.innerText = `Attack: ${fighter.attack}`;

    const defenseElement = createElement({ tagName: 'span', className: 'fighter-preview___span'});
    defenseElement.innerText = `Defense: ${fighter.defense}`;

  
    fighterElement.append(imageElement);
    fighterElement.append(nameElement);
    fighterElement.append(healthElement);
    fighterElement.append(attackElement);
    fighterElement.append(defenseElement);
  }

  return fighterElement;
}

export function createFighterImage(fighter, position) {
  const { source, name } = fighter;
  const attributes = { 
    src: source, 
    title: name,
    alt: name 
  };
  const positionClassName = position === 'right' ? 'fighter-preview___img_right' : 'fighter-preview___img_left';
  const imgElement = createElement({
    tagName: 'img',
    className: `fighter-preview___img ${positionClassName}`,
    attributes,
  });

  return imgElement;
}

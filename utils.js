export function renderPlant(plant) {
    const div = document.createElement('div');
    div.classList.add('plant');

    const h1 = document.createElement('h1');
    h1.textContent = plant.name;

    const img = document.createElement('img');
    img.src = plant.image;


    const p = document.createElement('p');
    p.textContent = `${plant.name} is a cereal ${plant.classification} first domesticated in ${plant.origin} about ${plant.domesticated} years ago  `;

    const h2 = document.createElement('h2');
    h2.textContent = 'Types';

    const ul = document.createElement('ul');
    for (let species of plant.subspecies) {
        const li = document.createElement('li');
        li.textContent = species;
        ul.append(li);
    }
    div.append(h1, img, p, h2, ul);
    return div;
}
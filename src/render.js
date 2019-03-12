const root = document.getElementById('root');

export default function render(world) {
  root.innerHTML = '';
  const stageEntities = world.entities.map((entity) => {
    const elem = document.createElement('div');
    elem.classList.add('entity');
    switch (entity.type) {
      case 'drone': {
        elem.setAttribute('style', `
          width: 10px; 
          height: 10px; 
          top: ${entity.position.y}px; 
          left: ${entity.position.x}px;
          background-color: green;
          border: ${entity.selected ? 2 : 0}px solid blue;
          transform: rotate(${Math.atan2(entity.direction.y, entity.direction.x)}rad);
        `);
        break;
      }
      case 'cretin': {
        elem.setAttribute('style', `
          width: 10px; 
          height: 10px; 
          top: ${entity.position.y}px; 
          left: ${entity.position.x}px;
          background-color: red;
          transform: rotate(${Math.atan2(entity.direction.y, entity.direction.x)}rad);
        `);
        break;
      }
      case 'mine': {
        elem.setAttribute('style', `
          width: 10px; 
          height: 10px; 
          top: ${entity.position.y}px; 
          left: ${entity.position.x}px;
          background-color: #666;
        `);
        break;
      }
      case 'base': {
        elem.setAttribute('style', `
          width: 10px; 
          height: 10px; 
          top: ${entity.position.y}px; 
          left: ${entity.position.x}px;
          background-color: #33F;
        `);
        break;
      }
    }
   return elem;
  });
  const selectedMob = world.entities.find(({selected}) => selected);
  if (selectedMob) {
    const mobDisplay = document.createElement('div');

    mobDisplay.textContent = JSON.stringify(selectedMob.inventory);
    mobDisplay.classList.add('mob-display');

    const harvesting = Object.keys(selectedMob.harvest);
    const timerElems = harvesting.map((resource) => {

      const state = selectedMob.harvest[resource];

      const timerWrapper = document.createElement('div');
      timerWrapper.classList.add('timer-wrapper');

      const timerText = document.createElement('div');
      timerText.textContent = resource;
      
      const timerBarOuter = document.createElement('div');
      timerBarOuter.classList.add('timer-bar-outer');

      const timerBarInner = document.createElement('div');
      timerBarInner.classList.add('timer-bar-inner');
      timerBarInner.setAttribute('style', `
        width: ${(state.timer / state.period) * 100}px;
      `);

      timerWrapper.appendChild(timerText);
      timerBarOuter.appendChild(timerBarInner);
      timerWrapper.appendChild(timerBarOuter);

      return timerWrapper;
    });
    timerElems.forEach((timerElem) => mobDisplay.appendChild(timerElem));
    
    root.appendChild(mobDisplay);
  }
  stageEntities.forEach((stageEntity) => root.appendChild(stageEntity));
}
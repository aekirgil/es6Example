const positions = ['First', 'Second', 'Fifth', 'Sixth', 'Seventh'];
const morePositions = [
  ...positions.slice(0, 2),
  'Third',
  'Fourth',
  ...positions.slice(2)
];

console.log(morePositions);
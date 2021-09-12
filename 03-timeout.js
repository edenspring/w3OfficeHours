/**************************************************************
Write a function called navigator that takes in an array of
directions, prints the direction, then waits a specified amount
of time before moving to the next one. Your function should use
string interpolation to log something to the effect of

Moving <direction>, waiting <delay>ms

North = 250ms
South = 125ms
East = 300ms
West = 175ms

const directions = ['North', 'East', 'East', 'West', 'North', 'South', 'South','West']

* ***********************************************************/

const navigator = (directions) => {
  if (!directions.length) return
  const first = directions.shift()
  // const first = directions[0]
  let delay;
  if (first === 'North') delay = 250
  if (first === 'South') delay = 125
  if (first === 'East') delay = 300
  if (first === 'West') delay = 175

  console.log(`Moving ${first} and waiting ${delay}ms`)

  setTimeout(navigator, delay, directions);
}

const directions = ['North', 'East', 'East', 'West', 'North', 'South', 'South','West']
navigator(directions)

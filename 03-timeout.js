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

const directions = ['North', 'East', 'East', 'West', 'North', 'South, 'South','West']

* ***********************************************************/
const directions = ['North', 'East', 'East', 'West', 'North', 'South', 'South','West']

const navigator = (directions) => {
    if (!directions.length) return
    const current = directions.shift()
    let delay
    switch (current) {
        case 'North':
            delay = 250
            break
        case 'South':
            delay = 125
            break
        case 'East':
            delay = 300
            break
        case 'West':
            delay = 175
            break
    }
    console.log(`Moving ${current} and waiting ${delay}ms`)
    setTimeout(navigator, delay, directions)
}

navigator(directions)
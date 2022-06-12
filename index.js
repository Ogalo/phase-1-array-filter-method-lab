// Code your solution here
function findMatching(drivers, name) {
    const driversArray = drivers.filter(
        (match) => match.toLowerCase() === name.toLowerCase());
    return driversArray;
}

function fuzzyMatch(drivers, name) {
  const driversArray = drivers.filter(
      (match) => match.toLowerCase().indexOf(name.toLowerCase()) === 0
  )
  return driversArray;
}

function matchName(driver, name) {
  const driverArray = driver.filter(
      (match) => match.name === name
  )
  return driverArray;
}

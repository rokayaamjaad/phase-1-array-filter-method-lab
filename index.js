// Code your solution here
const driver = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'bobby'];
const drivers = [
    {
      name: 'Bobby',
      hometown: 'Pittsburgh' },
    {
      name: 'Sammy',
      hometown: 'New York' } ,
    {
      name: 'Sally',
      hometown: 'Cleveland' },
    {
      name: 'Annette',
      hometown: 'Los Angeles' },
    {
      name: 'Bobby',
      hometown: 'Tampa Bay' }
  ]

function findMatching(driver, entered) {
  return driver.filter(
    (Match) => Match.toLowerCase() === entered.toLowerCase()
  );
}

function fuzzyMatch(driver, entered) {
  return driver.filter(
    (Match) =>
      Match.toLowerCase().indexOf(entered.toLowerCase()) === 0
  );
}

function matchName(drivers, entered) {
  return drivers.filter((record) => record.name === entered);
}

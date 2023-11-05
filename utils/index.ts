export function getExperience () {
  const startDate = new Date('2016-08-26')
  const currentDate = new Date()
  const diffTime = currentDate.valueOf() - startDate.valueOf()
  const diffYears = Math.floor(diffTime / (1000 * 60 * 60 * 24 * 365))

  return diffYears
}

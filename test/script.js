const googleDatabase = [
  'dogs.com',
  'soup.com',
  'flowers.com',
  'animals.com',
  'dogspics.com',
  'moredogs.com',
  'anotherdogssite.com'
]

const googleSearch = (searchInput) => {
  const matches = googleDatabase.filter(website => {
    return website.includes(searchInput)
  })
  return matches.length > 3 ? matches.slice(0,3) : matches;
}

console.log(googleSearch('dogs'))

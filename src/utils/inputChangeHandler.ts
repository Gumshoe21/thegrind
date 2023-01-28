export default function inputChangeHandler(e) {
  // console.log(e.target.value)
  let { name, value } = e.target
  let splitName = name.split('-')

  let camelCaseString = splitName[0]
  if (splitName.length > 1) {
    for (let i = 1; i < splitName.length; i++) {
      splitName[i] = splitName[i].charAt(0).toUpperCase() + splitName[i].slice(1)
      camelCaseString += splitName[i]
    }
  }
  return {
    camelCaseString,
    value,
  }
}


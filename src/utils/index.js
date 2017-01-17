export default {
  chunkify: (array, chunkSize) => {
    const chunkifiedArray = []
    const length = array.length

    if (length <= chunkSize) {
      return array;
    }

    for (let i = 0; i < length; i = i + chunkSize) {
      chunkifiedArray.push(array.slice(i, i + chunkSize))
    }
    return chunkifiedArray;
  }
}

module.exports = function towelSort (matrix) {
  if (matrix === undefined) {return [] };
  return matrix.reduce((prevEl, currEl, index) => prevEl.concat(index % 2 === 0 ? currEl : currEl.reverse()), [])
}

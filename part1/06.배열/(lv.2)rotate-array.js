/**
 * [(lv.2)rotate-array.js]
 *
 * 배열 arr의 마지막 요소를 맨 앞으로 이동하여, 오른쪽으로 한 칸씩 이동된 새 배열을 반환하세요.
 * 예) [1, 2, 3] -> [3, 1, 2]
 *
 * @param {any[]} arr
 * @returns {any[]} 요소가 오른쪽으로 한 칸씩 이동된 새 배열
 */
function rotateArray(arr) {
  if (arr.length === 0) return []; 
  const lastElement = arr[arr.length - 1]; 
  const newArray = [lastElement, ...arr.slice(0, -1)]; 
  return newArray; 
}

// export를 수정하지 마세요.
export { rotateArray };

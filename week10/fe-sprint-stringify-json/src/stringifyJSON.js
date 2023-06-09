/**
 * 1. Browser에 존재하는 JSON.stringfy 함수를 직접 구현해 봅니다.
 * JSON.stringfy 함수는 input 값을 JSON 형식으로 변환합니다.
 * 단, undefined와 function은 JSON으로 생략되거나 null로 변환됩니다.
 *
 * 2. stringfyJSON은 아래와 같이 작동합니다.
 * - Boolean이 input으로 주어졌을 경우
 * stringifyJSON(true);                // 'true'
 * - String이 input으로 주어졌을 경우
 * stringifyJSON('foo');               // '"foo"'
 * - Array가 input으로 주어졌을 경우
 * stringifyJSON([1, 'false', false]); // '[1,"false",false]'
 * - Object가 input으로 주어졌을 경우
 * stringifyJSON({ x: 5 });            // '{"x":5}'
 * - undefined, function이 주어졌을 경우
 * stringifyJSON(undefined)            // undefined
 * stringifyJSON(function(){})         // undefined
 * stringifyJSON({ x: undefined, y: function(){} })   // '{}'
 *
 * 3. spec/stringifyJSONSpec.js의 stringifiableObjects 배열을 참고해서 테스트에서 어떤 input 값들이
 * 주어지고, 어떻게 stringify해 주어야 할지 생각해 보세요.
 *
 * 4. 그냥 테스트 통과를 하고 싶으시다면, 다음과 같이 구현하면 될 거예요.
 *  const stringifyJSON = JSON.stringify;
 *
 * 하지만 이 과제의 목적은 재귀를 공부하는 것이니, 처음부터 구현해봐야겠지요?:
 */
function stringifyJSON(obj) {
  if(typeof obj === 'number') {
    return `${obj}`;
  }else if (obj === null) {
    return 'null';
  }else if (typeof obj === 'boolean') {
    return `${obj}`;
  }else if (typeof obj === 'string') {
    return `"${obj}"`;
  }

  if(Array.isArray(obj)) {
    let newAr = [];
    for (let el of obj) {
      let arrEl = stringifyJSON(el)
      newAr.push(arrEl);
    }
    return `[${newAr}]`;
  }

  if(typeof obj === 'object') {
    let newObj = '';
    for(let i in obj) {
      let obji = stringifyJSON(i)
      let objoi = stringifyJSON(obj[i])
      if(obji === undefined || objoi === undefined){
        newObj = ''
        
      }else{
        newObj += `${obji}:${objoi},`
        
      }
    }
    return `{${newObj.slice(0, -1)}}`
  }
  // 문자열 마지막에 포함된 , 를 제거 후 반환 
};

// 다음 코드는 결과 제출을 위한 코드입니다. 신경 쓰지 않아도 좋습니다.
if (typeof window === "undefined") {
  module.exports = stringifyJSON;
}

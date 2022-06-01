//문자열 길이, 문자열 접근
let helloWorld = "Hello World!";
console.log(helloWorld.length); //12
console.log(helloWorld.charAt(1)); // e
console.log(helloWorld.charCodeAt(1)); //101; - 주어진 인덱스에 대한 UTF-16 코드를 나타내는 0~65535 정수를 반환함
console.log(helloWorld[1]); // e

//문자열 검색
console.log(helloWorld.indexOf("o")); // 4 - 첫 index를 반환하고 존재하지 않으면 -1을 반환
console.log(helloWorld.indexOf("o", 5)); // 7 - 5번째 위치부터 index를 찾음
console.log(helloWorld.lastIndexOf("o")); // 7 - 맨 뒤부터 역순으로 탐색하여 최초로 마주치는 인덱스 반환, 일치하는 부분을 찾을 수 없으면 -1 반환
console.log(helloWorld.includes("Hello")); // true - 배열이 "hello"를 포함하는지 판별 - true, false로 반환

//문자열 변환, 문자열 치환
console.log(helloWorld.toUpperCase()); // HELLO WORLD!
console.log(helloWorld.toLowerCase()); // hello world!
console.log(helloWorld.replace("o", "u")); // Hellu world! - 첫 번째만 o로 바꾼다
console.log(helloWorld.replace("World", "HJ")); // Hello HJ!
console.log("helloWorld", helloWorld); // Hello World!

//문자열 추출, 문자열 분할
const stringSlice = helloWorld.slice(0, 6);
console.log("stringSlice", stringSlice); // "Hello "
console.log(stringSlice.length); // 6 (띄어쓰기 포함)
console.log(helloWorld.slice(0)); // Hello World! - 문자열의 0번째부터 마지막까지 요소를 반환
console.log(helloWorld.slice(-1)); // !
console.log(helloWorld.slice(-5, -3)); // or
console.log(helloWorld.slice(-6)); // World; - 문자열의 index -6번째부터 마지막까지 요소 반환

console.log(helloWorld.substring(1, 3)); // el - 시작 인덱스로 부터 종료 인덱스 전까지 문자열의 부분 문자열을 반환
console.log(helloWorld.substring(7)); // orld! -  index 시작 지점부터 마지막까지 반환한다

//substr - 곧 사라짐

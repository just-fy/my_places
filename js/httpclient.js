//const mydata = import('./markers');
const obj = JSON.parse('{ "name":"John", "age":30, "city":"New York"}');
console.log(obj);
console.log(1);

// var xhr = new XMLHttpRequest();
// xhr.open("POST", '../markers.json', true);
//
// //Send the proper header information along with the request
// xhr.setRequestHeader("Content-Type", "application/");
//
// xhr.onreadystatechange = function() { // Call a function when the state changes.
//     if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
//         // Request finished. Do processing here.
//     }
// };
// xhr.send("foo=bar&lorem=ipsum");
// xhr.send(new Int8Array());
// xhr.send(document);

// function readJSON(path) {
//     var xhr = new XMLHttpRequest();
//     xhr.open('GET', path, true);
//     xhr.responseType = 'blob';
//     xhr.onload = function(e) {
//         if (this.status == 200) {
//             var file = new File([this.response], 'temp');
//             var fileReader = new FileReader();
//             fileReader.addEventListener('load', function(){
//                 //do stuff with fileReader.result
//             });
//             fileReader.readAsText(file);
//         }
//     }
//     xhr.send();
// }

// To run this assignment, right click on index.html in the Visual Studio Code file explorer to the left
// and select "Open with Live Server"

// Your Code Here.
function snapCrackle (maxValue) {
    let result = '';

    for (let i = 1; i <= maxValue; i++) {
        if (i % 2 !== 0 && i % 5 === 0) {
         
          result += 'SnapCrackle, ';
        } else if (i % 2 !== 0) {
         
          result += 'Snap, ';
        } else if (i % 5 === 0) {
         
          result += 'Crackle, ';
        } else {
         
          result += i + ', ';
        }
      }
    
      
      return result;
    }
    //console.log(snapCrackle(12));

    function render(text, maxValue) {
        
        document.write("<h1>Snap Crackle!</h1>");
        document.write(`<h3>Max Value: ${maxValue}</h3>`);
        document.write(`<p>${text}</p>`);
      }
      
      const highestNumber = prompt("What is the highest number?");

const result = snapCrackle(highestNumber);
render(result, highestNumber);
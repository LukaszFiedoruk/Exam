// Scale riddle. With 8 balls  get position of the “heavy” ball. Indexes are to be chosen at random. 
// Use weights comparison only two times.
const examArray = [1,1,1,1,1,2,1,1];
const balls =  [1,1,1,1,1,2,1,1];

function whatIsBigestWeight(Array) {
        let firstScale =[];
        let secondScale= [];

        function createdFirstScale(Array) {    
                for (i = 0; i < 3; i++) {
                    let index = Math.floor(Math.random() * Array.length);
                    firstScale.unshift(Array[index]);
                    Array.splice(index, 1); 
                } return firstScale;
                } 

        function createfSecondScale(Array) {
                for (i = 0; i < 3; i++) {
                let index = Math.floor(Math.random() * Array.length); 
                secondScale.unshift(Array[index]);
                Array.splice(index, 1); 
                } return secondScale;
                } 

        function sumNumbersScale(Array) {
                let sum = 0;
                for (let i = 0; i < Array.length ; i++) { 
                    sum += Array[i];
                    } return sum;
                }

        function comparison(){
                if (sumNumbersScale(firstScale) > sumNumbersScale(secondScale) && sumNumbersScale(firstScale) !== sumNumbersScale(balls)) {
                    firstScale.sort(((a,b) => b -a));
                    return firstScale[0];
                } else if (sumNumbersScale(secondScale)>sumNumbersScale(firstScale) && sumNumbersScale(secondScale) !== sumNumbersScale(balls)) {
                    secondScale.sort(((a,b) => b -a));
                    return secondScale[0];
                }  else {
                    sumNumbersScale(balls);
                    balls.sort(((a,b) => b -a));
                    return balls[0];
                }
            }  return comparison();
}   

let finalIndex = whatIsBigestWeight(balls);
console.log("The position of heaviest ball is " + (examArray.indexOf(finalIndex)+1));
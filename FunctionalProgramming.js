
var inputtable=[1,2,3,4,5,6,7,8,9,10]; // array of numbers from 1 to 10, as specified.
var fiveTable=[]; //array for storing multiples of 5

//QUESTION 2a

//using a function to create multiples of 5 from inputtable array
function fiveMultiple(arr,start,end)
{
   if (start > end)
   {
        return arr; // if the array is done looping from 1 to 10, return the array
   }
    if((inputtable[start]*5)<=51) // set of multiples between 1 and 51
   {
    arr.push(inputtable[start]*5); // add the multiple of 5 into the array
    return fiveMultiple(arr,start+1,end);   // recursion to loop again
   }
   else
   {
     return arr;  // redundant check
   }  
}
  
console.log(fiveMultiple(fiveTable,0,inputtable.length-1));
// printing the array fiveTable containing multiples of 5


//QUESTION 2b
var thirteenTable=[]; //array for storing multiples of 13

function thirteenMultiple(arr,start,end) // creating a function for multiples of 13
{
  if(start>end)
  {
    return arr;
  }
   
   if(inputtable[start]*13<=131) // loop goes from 1 to 10, creating multiples of 13
   {
    arr.push(inputtable[start]*13); 
    return thirteenMultiple(arr,start+1); // recusive loop
   }
   else
   {
     return arr;
   }
     
}

console.log(thirteenMultiple(thirteenTable,0,inputtable.length-1));
//printing multiples of 13 storied in thirteenTable

//QUESTION 2c
var squaresTable=[];  //array for storing squared values of the inputtable array elements
function squares(arr,start,end) // creating squares of inputtable array elements
{
   if (start > end)
   {
        return arr;
   }
   
    arr.push(inputtable[start]*inputtable[start]); // inserting squared values into the array 
    return squares(arr,start+1,end); // recursive loop
     
}

console.log(squares(squaresTable,0,inputtable.length-1));
//printing values of squaresTable.




// QUESTION 3
var fiveTable1=[]; // array to hold multiples of 5 from 1 to 100
var oddArr=[]; // array to hold odd multiples of 5 from 1 to 100

function fiveMultiples(arr,start)
{
   
   if((start*5)<=100) // creating multiples of 5 till '100'
   {
  
    arr.push(start*5);
   
   return fiveMultiples(arr,start+1); //recursive loop to keep creating multiples of 5 
   }

   else
   {
     return arr;
   }
     
}

 fiveMultiples(fiveTable1,1); // calling the function to create the multiples of 5 as desired

function oddFive(arr,arr1,start,end) //filters odd values from the newly filled array of multiples of 5
{
  if(start>end)
  {
   
    return arr;
  }

  if(arr1[start]%2!=0) // if a value is odd
  {

  
     arr.push(arr1[start]); // insert value into the odd array
   
    return oddFive(arr,arr1,start+1,end); // recursive loop
  }
  else
  {
    
     return oddFive(arr,arr1,start+1,end); // if even, simply do another iteration of the recursive loop
  }
}
console.log(oddFive(oddArr,fiveTable1,0,fiveTable1.length-1));
//prints the odd multiples of 5 between 1 and 100.
//takes in an empty array for odd values, an array of multiples of 5, 0 as array index,
// and the number of elements in the array of multiples of 5 to act as a loop limit.


//QUESTION 4

var sevenTable=[]; // array for holding multiples of 7 between 1 and 100
var evenArr=[]; //array for holding filtered even values
var sum1=0; // sum1 to increment the sum of even multiples of 7

function sevenMultiple(arr,start) // function to create multiples of 7
{
   

  if((start*7)<=100) //  creating multiples of 7 that are less than 100
  {
    arr.push(start*7);  //insert multiple into array
   return sevenMultiple(arr,start+1); // recursive loop
  }
  else
  {
    return arr;
  }
     
}

sevenMultiple(sevenTable,1); 
// calling function to create multiples of 7 between 1 and 100

function evenSeven(arr,arr1,start,end) // filtering even multiples of 7
{
  if(start>end)
  {
  
    return arr;
  }

  if(arr1[start]%2==0) //if a value is even
  {
   
   arr.push(arr1[start]); //insert even value into array
   return evenSeven(arr,arr1,start+1,end); //recursive loop
  }
  else
  {
     return evenSeven(arr,arr1,start+1,end); // if odd, simply do another recursion
  }
}

evenSeven(evenArr,sevenTable,0,sevenTable.length-1); // call the function to filter even multiples
//takes in an empty array for even values, an array of multiples of 7, 0 as array index,
// and the number of elements in the array of multiples of 7 to act as a loop limit.
function evenSum(arr,sum,start,end) //sums up all the even values of multiples of  7
{
  if(start>end) // if all values have been looped through, return the total sum
  {
    return sum;
  }
    sum=sum+arr[start]; // sums up all values of array
    return evenSum(arr,sum,start+1,end); // recursive loop
}

console.log(evenSum(evenArr,sum1,0,evenArr.length-1)); 
//prints the function to calculate the sum of even values.
// takes in the filled array of even multiples of 7, intialized sum to increment the sum,
// 0 as the array index starter, and amount of elements in even array of multiples of 7

//Question 5
function cylinder_volume(r)  // curried function first takes r as a parameter and then takes h as a parameter one at a time
{
  return function (h)  // now the function takes h as a parameter
  {
     return 3.14*r*r*h; 
  }
}
var volume = cylinder_volume(5)(10) // first 5 is passed into the function as the radius and then 10 is passed into the function as height

console.log(volume); //prints volume caluclated in the function


//Question 6
makeTag = function(beginTag, endTag){
return function(textcontent){
	return beginTag +textcontent +endTag;
}
    }
    
    //HTML tags wrap around a table that contains rows and columns, within which an element(string in this case) exists
var outputstring2 = makeTag("<HTML>", "</HTML>")(makeTag("<table>", "</table>")(makeTag("<tr>", "</tr>")(makeTag("<td>", "</td>")("Some cell"))))
console.log(outputstring2);
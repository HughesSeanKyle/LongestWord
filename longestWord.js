// Basic Algorithm Scripting: Find the Longest Word in a String
// Return the length of the longest word in the provided sentence.

// Your response should be a number.

// Solution 1

function findLongestWordLength(str) {        //1
    var words = str.split(' ');              //2
    var maxLength = 0;                       //3
  
    for (var i = 0; i < words.length; i++) { //4
      if (words[i].length > maxLength) {     //5
        //console.log(words[i].length)       //5.1
        maxLength = words[i].length;         //6
      }
    }
  
    return maxLength;                        //7
  }

console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"))


/*/

/ Notes

    //1 Initializes function that takes in a string as an argument

    //2 The split() method splits a String object into an array of strings by separating the string into substrings, using a specified separator string to determine where to    make each split. source - [https://devdocs.io/javascript/global_objects/string/split]

    In this case the split method is instructed to split the entire string by word as it uses a space in between the quotes. If no space is used the sting will be split by letter. It is also worth noting that the split method will split the contents of the string into an  array as mentioned on Devdocs

    //3 Initializing maxLength variable and setting it to 0 as a starting point

    //4

        The for loop will initialize the loop starting at index zero. This will be the "The" word in the words array below. 

        The condition will be that the loop runs only the length of the words array (below). 
        The reason it has a less than (<) operator is because the .length method will output 9 items and the aim is to use an index based approach to iterate through the array.
        The reason an index based approach  is used is to pluck the highest word value out by its index

        The final expression is what makes the iteration through the array possible, Without it this would be an infinite loop. 
        This will iterate from index 0 till 8 (which is actually 9 items in the array) in this case.

    //5 && 6
        These two lines are saying:
          if the word at the current iteration/index ([i]) is greater that the maxlength (currently at 0 when loop starts) then set the maxLength equal to the greater word count.
          Because this loop has 9 iterations the loop will keep comparingvthe next word to the previous one and if it finds that the next word is GREATER that the previous one then maxLength will be updated accordingly. Below, 5.1 shows how the loop has selected the longest word.
    
    //5.1         -3 The     (1st Word) - Index 0
                  -5 quick   (2nd Word) - Index 1
                  -6 jumped  (5th Word) - Index 4


    //7 The return keyword will end the function and return maxLength once the loop has completed.

        





words =    [
              'The',    'quick',
              'brown',  'fox',
              'jumped', 'over',
              'the',    'lazy',
             'dog'
                                ] 
                                
Extra Notes

The for statement creates a loop that consists of three optional expressions, enclosed in parentheses and separated by semicolons, followed by a statement (usually a block statement) to be executed in the loop.

for ([initialization]; [condition]; [final-expression])
   statement
initialization
An expression (including assignment expressions) or variable declaration. Typically used to initialize a counter variable. This expression may optionally declare new variables with var or let keywords. Variables declared with var are not local to the loop, i.e. they are in the same scope the for loop is in. Variables declared with let are local to the statement.
The result of this expression is discarded.
condition
An expression to be evaluated before each loop iteration. If this expression evaluates to true, statement is executed. This conditional test is optional. If omitted, the condition always evaluates to true. If the expression evaluates to false, execution skips to the first expression following the for construct.
final-expression
An expression to be evaluated at the end of each loop iteration. This occurs before the next evaluation of condition. Generally used to update or increment the counter variable.
statement
A statement that is executed as long as the condition evaluates to true. To execute multiple statements within the loop, use a block statement ({ ... }) to group those statements. To execute no statement within the loop, use an empty statement (;)

source - [https://devdocs.io/javascript/statements/for]
                                
                                
                                
                                */
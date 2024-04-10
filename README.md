The answers should be first Logically correct, then syntactically correct. More weightage is given to how you device your algorithm to solve the questions. In case this is an open book test then both should be correct. 


1. The robot night vision camera is programmed to capture black & white images via Infra 1st Red heat mapping technology. The picture taken is of pixels: 12x12. These pixels as in 
black & white will be either black in color or white in color. The pixel map reader reads the photograph raw pixel data and converts it to a matrix of 'chars' of size 12x12. Each char is either 'w' for white or 'b' for black. Example matrix is as follows:

b b b b b b b b b b b b 
b b b b b b b b b b b b 
b b b b b b b b b b b b 
b b b b b b b b b b b b 
b b b b w w w w w b b b 
b b b b w w w w w b b b 
b b b b W W W W w b b b 
b b b b W W w w w b b b 
b b b b w w w w w b b b 
b b b b b b b b b b b b 
b b b b b b b b b b b b 
b b b b b b b b b b b b

Now the robot is in a cold environment and there is a hot cube placed in front of it. Hence all robot sees is pure black background and a white square in it(from the box). This is demonstrated in example matrix above where all pixels are black but there is a white box in middle. 

Now this box can move in image. Its position is calculated by its top-left corner index in matrix. Example for above sample the box is placed at (4,4), and its height is '5' and width is '5'. 
Write a program which takes the above Matrix as input(2d array, or an array with 144 chars, whatever is easy for you) and returns the object with properties (top, left, height, width). Top, left is the position on x axis and y axis respectively. Height, width is self 
explanatory. Function should return a Map or object of your custom class with above properties in it. 


2. For the given array [9,33,0,7,2,82,77], WAP to divide each number of the array by the 
next number. Divide the last number by first number of array. Provide proper exceptional handling for 0.


3. Find the sum of all the numbers in a string which is divisible by 3 and also find the last 
such number. Example "The best 6 of 8 will get 9 points", sum = 12, last=9.


4. There are 100 man making a circle each man is wearing a T-shit with a number 1 to 100 
in series. Person with Number 1 on his/her T-Shirt got a gun now 1 kill 2 and give that gun to 3 and then 3 kill 4 and give that gun to 5.. then so on 99 killed 100 and give that gun again to 1.WAP to find which man is left with a gun on his hand at the end ??


5. Write the name of tables and their columns that need to be created in the DB to store 
following relationship(DO NOT draw ER diagrams, Only basic columns and relationship need to be shown) 
There are many hotels, each hotel can have multiple menus, each menu can have multiple food items, food items can belong to multiple menus. 

# Mr. Rogers Number Swapper

#### This application uses for-loops and if-statements in JavaScript to evaluate the content of a number that is entered by the user. 

#### By Joseph Nero 

### Description

This application will take a number that is entered by the user and return a certain response depending on the content of that number. In particular, this code will take a number from a user and return a range of numbers from 0 to the user inputted number with the following exceptions written from least to most important:

1. Numbers that contain a 1: all digits are replaced (all digits) with "Beep!"
2. Numbers that contain a 2: all digits are replaced (all digits) with "Boop!"
3. Numbers that contain a 3: all digits are replaced (all digits) with "Won't you be my neighbor?"

Test Specs are listed in the table below : 

| Test | Input | Output |
| :--------------------------- | :------------------------| :---------------- | 
| number Swapper |||
| should take a number entered by the user and return the range of numbers from 0 to the inputted number, with the exception of replacing all digits of any numbers containing a 1 with "Beep!" | 10 | 0, Beep!, 2, 3, 4, 5, 6, 7, 8, 9, Beep! |
| should take a number entered by the user and return the range of numbers from 0 to the inputted number, with the exception of replacing all digits of any numbers containing a 2 with "Boop!" | 12 | 0, Beep!, Boop!, 3, 4, 5, 6, 7, 8, 9, Beep!, Beep!, Boop! |
| should take a number entered by the user and return the range of numbers from 0 to the inputted number, with the exception of replacing all digits of any numbers containing a 3 with "Won't you be my neighbor?" | 32 |  0, Beep!, Boop!, Won't you be  my neighbor?, 4, 5, 6, 7, 8, 9, Beep!, Beep!, Boop!, Won't you be  my neighbor?, Beep!, Beep!, Beep!, Beep!, Beep!, Beep!, Boop!, Boop!, Boop!, Won't you be  my neighbor?, Boop!, Boop!, Boop!, Boop!, Boop!, Boop!, Won't you be  my neighbor?, Won't you be  my neighbor?, Won't you be  my neighbor? |


## Setup/Installation Requirements
#### If you have difficulty following any of the steps/instructions listed below, please contact me at josephnero111@gmail.com 

#### Software requirements 

1. A web browser to view the website. I recommend Google Chrome.
2. Git Bash (or another terminal program) & Git.  
    - To clone the repository from Github using git commands in the terminal, you need a terminal program & Git. For Windows OS, I recommend the Git Bash terminal program. Installing Git Bash will also install Git. 
3. VSCode (or another code editor)
    - To view/edit this code, you need a code editor. I recommend VSCode. 
4. Detailed instructions to install Git Bash & VSCode can be found in the Setup/Installation Requirements section of the README for [this repo.](https://github.com/joey3001/first-friday-project)

#### To view this website online please use the following GH-Pages link: 

[Another Day in the Neighborhood](https://joey3001.github.io/3rd-Friday-Project/)

#### To view this website locally, please follow these instructions to clone and open this project using git commands in the terminal. 

1. Open your terminal program and use the CD command to navigate to the directory in which you wish to clone this project. 
2. Use [this link](https://github.com/joey3001/3rd-Friday-Project) go to this project's repository on github. Click on the green button labeled "code" towards the right side of the page's center. Click on the HTTPS option and copy the presented URL. 
3. Use the following command in your terminal program to clone the repo :

            git clone https://github.com/joey3001/3rd-Friday-Project.git

7. Use the CD command to enter the cloned directory. Once you are within the cloned directory, enter the following command into your terminal to open the page in your default browser : 

            start index.html 

#### Follow these instructions to view the code in the VSCode editor using commands in the terminal. 

1. Navigate to the project directory with the CD command if needed. If you're following this guide step-by-step, you should already be there. 
2. Once you are within the project directory, enter the following command into your terminal program to view all of the project's code in VSCode : 

            code . 

#### To download a file containing the contents of this repository to a location of your choice, please follow these instructions. 

1. Use a web browser to go to the repository webpage at [this link.](https://github.com/joey3001/3rd-Friday-Project)
2. Click on the green button labeled "code" towards the right side of the page's center. In the drop-down menu that opens, click on the button labeled "Download Zip."
3. Once your download is complete, open the zipped file. Click on the button labeled "Extract All" at the top of your file explorer. 
4. Choose the location in which you want to extract the files, and navigate to that location once this process is complete. 
5. Enter the directory and click on the index.html file to launch the project in your default web browser. 

## Known Bugs

1. Website does not function optimally with input numbers > 35,000. for numbers > 35,000, the resulting message is not contained in the text box. 
2. Website has an extremely hard time loading for input numbers greater than 550,000. 

## Support and contact details

If you have an issue, reach out to me at josephnero111@gmail.com

## Technologies Used

  * HTML 
  * CSS
    - Bootstrap
  * Javascript
    - Jquery 
  * VSCode 
  * Git
  * Github 
  * Git Bash

### License

[MIT License](https://choosealicense.com/licenses/mit/)

Copyright (c) 2020 Joseph Nero 

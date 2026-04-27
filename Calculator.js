/*
  =============================================
  PROJECT: Simple Calculator - JavaScript
  AUTHOR: dhruba2601
  =============================================
  WHAT THIS FILE DOES:
  JavaScript is the BRAIN of our calculator.
  HTML gives structure. CSS gives looks.
  JavaScript gives BEHAVIOUR — what happens
  when you click a button.

  WITHOUT JavaScript:
  Buttons look nice but do nothing when clicked.

  WITH JavaScript:
  Click 7 → display shows 7
  Click + → display shows 7+
  Click 3 → display shows 7+3
  Click = → display shows 10
  Click C → display resets to 0
  =============================================
*/


/* =============================================
   STEP 1: FIND HTML ELEMENTS
   Before JavaScript can control anything,
   it needs to FIND the elements on the page.

   document.querySelector() = find ONE element
   document.querySelectorAll() = find ALL matching elements

   We find:
   1. The display div (to update numbers on screen)
   2. All buttons (to listen for clicks)
   ============================================= */

const display = document.querySelector('.display');
// display now points to our <div class="display">0</div>
// We will read from and write to this element

const buttons = document.querySelectorAll('button');
// buttons is now a list of ALL button elements on the page
// Like an array: [C, +/-, %, /, 7, 8, 9 ... ]


/* =============================================
   STEP 2: LISTEN FOR BUTTON CLICKS
   forEach loops through EVERY button one by one.
   For each button, we attach a "click listener."
   A click listener waits silently until that
   button is clicked, then runs our code.
   ============================================= */

buttons.forEach(function(button) {
    // This function runs once for EACH button
    // button = the current button in the loop

    button.addEventListener('click', function() {
        // This inner function runs ONLY when button is clicked

        // Find out WHICH button was clicked
        // textContent = the text written on the button
        // Example: if user clicked "7", value = "7"
        const value = button.textContent;


        /* =============================================
           STEP 3: DECIDE WHAT TO DO BASED ON BUTTON

           We check which button was clicked
           and do different things for each case.
           ============================================= */


        // CASE 1: C Button (Clear)
        // Reset the display back to "0"
        if (value === 'C') {
            display.textContent = '0';
        }


        // CASE 2: = Button (Equals)
        // Calculate the math expression shown on display
        // Example: display shows "7+3" → eval() calculates → shows "10"
        //
        // eval() is a built-in JavaScript function.
        // It reads a string like "7+3" and calculates the answer.
        //
        // try/catch = if calculation fails (like dividing by zero),
        // show "Error" instead of crashing.
        else if (value === '=') {
            try {
                display.textContent = eval(display.textContent); // Calculate result
            } catch(e) {
                display.textContent = 'Error'; // Show error if calculation fails
            }
        }


        // CASE 3: +/- Button (Toggle positive/negative)
        // Multiplies current number by -1
        // Example: 5 becomes -5. -5 becomes 5.
        // parseFloat() converts text "5" into number 5 so math works
        else if (value === '+/-') {
            display.textContent = parseFloat(display.textContent) * -1;
        }


        // CASE 4: % Button (Percentage)
        // Divides current number by 100
        // Example: 50 becomes 0.5 (which is 50%)
        // parseFloat() converts text "50" into number 50 so math works
        else if (value === '%') {
            display.textContent = parseFloat(display.textContent) / 100;
        }


        // CASE 5: All other buttons (numbers and operators)
        // Add the button value to what's already on display
        // Example: display shows "7", user clicks "+", display becomes "7+"
        else {
            if (display.textContent === '0') {
                // If display shows "0", REPLACE it with the new value
                // We don't want "07" — we want just "7"
                display.textContent = value;
            } else {
                // Otherwise, ADD the new value to existing display
                // "+=" means "add to the end"
                // Example: "7" += "+" becomes "7+"
                display.textContent += value;
            }
        }

    }); // end addEventListener

}); // end forEach


/*
  =============================================
  SUMMARY OF HOW IT ALL WORKS TOGETHER:

  1. User clicks a button
  2. addEventListener detects the click
  3. We read which button was clicked (value)
  4. We check: is it C? = ? +/-? %? or a number?
  5. We update the display accordingly

  That's it. A calculator in ~60 lines of code.
  =============================================
*/
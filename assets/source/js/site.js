//
// PLEDGE PROGRESS RELOADER
//
const progrs_win = document.getElementById("flightfreeuk-progress");
window.addEventListener(
	"message",
	(event) => {
		if (event.origin !== "https://www.jakemcmurchie.net" && event.origin !== "https://flightfree.exigo.se") {
			return false;
		}
		if ("reload" !== event.data) {
			return false;
		} else {
			progrs_win.src = progrs_win.src;
			return true;
		}
	},
	false
);

//
// MYTHBUSTER
//

// Our DOM objects
var mythbusters, mb_question, mb_answer_options, mb_button_true, mb_button_false, mb_true, mb_false, mb_reason, mb_nav, mb_button_next;

// Which question are we on?
var current_myth = 0;

// Initialise the system
if ( 'undefined' != typeof ( myths ) && 0 < myths.length ) {
	mbInit();
}
function mbInit() {	
    // Assign our objects
	mythbusters = document.getElementById("mythbusters");
	mb_question = document.getElementById("mb-question");
	mb_answer_options = document.getElementById("mb-answer-options");
	mb_button_true = document.getElementById("mb-true");
	mb_button_false = document.getElementById("mb-false");
	mb_true = document.getElementById("mb-answer-true");
	mb_false = document.getElementById("mb-answer-false");
	mb_reason = document.getElementById("mb-reason");
	mb_nav = document.getElementById("mb-nav");
	mb_button_next = document.getElementById("mb-next");

	// Get our buttons ready for action
	mb_button_true.addEventListener("click", function (e) {
		e.preventDefault();
		// start the answering process
		mbAnswer();
	});
	mb_button_false.addEventListener("click", function (e) {
		e.preventDefault();
		// start the answering process
		mbAnswer();
	});
	mb_button_next.addEventListener("click", function (e) {
		e.preventDefault();
        // Move to the next question
		mbNext();
	});

	// Load the first question
	mbMove();

	// All ready so show the Myth busters section
	mythbusters.classList.remove("hidden");
}
// Manage answers
function mbAnswer() {

	// Hide our answer buttons
	hide(mb_answer_options);

	// Show the answer
	if ("true" == myths[current_myth].answer) {
		show(mb_true);
	} else if ("false" == myths[current_myth].answer) {
		show(mb_false);
	}

	// Show the reason
	mb_reason.innerHTML = myths[current_myth].reason;
	show(mb_reason);

	// Show our navigation buttons
	show(mb_nav);
}
// Move to the next question
function mbNext() {
	// Move to the next myth
	if (current_myth + 1 < myths.length) {
		current_myth++;
	} else {
		current_myth = 0;
	}
	mbMove();
}
// When we remove perform some resetting
function mbMove() {
	// Hide the answer bits
	hide(mb_true);
	hide(mb_false);
	hide(mb_reason);
	hide(mb_nav);

	// Change the wording on the 'next' button if this is the last question
	if (current_myth + 1 == myths.length) {
		mb_button_next.innerHTML = "Start again";
	} else {
		mb_button_next.innerHTML = "Next question";
	}

	// Show the new question and the answer options
	mb_question.innerHTML = myths[current_myth].question;
	show(mb_answer_options);
}
// Utility functions to show/hide elements
function show(element) {
	if (hasClass(element, "hidden")) {
		element.classList.remove("hidden");
	}
}
function hide(element) {
	if (!hasClass(element, "hidden")) {
		element.classList.add("hidden");
	}
}
// Utility functions to enable/disable elements
function enable(button) {
	if (button.disabled) {
		button.disabled = false;
	}
}
function disable(button) {
	if (!button.disabled) {
		button.disabled = true;
	}
}
// Utility function to check if an element has a class
function hasClass(element, className) {
	return (" " + element.className + " ").indexOf(" " + className + " ") > -1;
}

// Task 18: Exam system with callbacks
function startExam(callback) {
  setTimeout(() => {
    console.log("Exam started");
    callback();
  }, 1000);
}

function evaluateExam(callback) {
  setTimeout(() => {
    console.log("Evaluating answers");
    callback();
  }, 2000);
}

function declareResult() {
  setTimeout(() => {
    console.log("Result declared");
  }, 1500);
}

// Chain the callbacks
startExam(() => {
  evaluateExam(() => {
    declareResult();
  });
});

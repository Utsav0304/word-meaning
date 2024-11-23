
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="quiz.css" />
    <title>Quiz App</title>
  </head>
  <body>
    <div class="quiz-container" id="quiz">
      <div class="quiz-header">
        <h2 id="question">Question is loading...</h2>
        <ul>
          <li>
            <input type="radio" name="answer" id="a" class="answer" />
            <label for="a" id="a_text">Answer...</label>
          </li>
          <li>
            <input type="radio" name="answer" id="b" class="answer" />
            <label for="b" id="b_text">Answer...</label>
          </li>
          <li>
            <input type="radio" name="answer" id="c" class="answer" />
            <label for="c" id="c_text">Answer...</label>
          </li>
          <li>
            <input type="radio" name="answer" id="d" class="answer" />
            <label for="d" id="d_text">Answer...</label>
          </li>
        </ul>
      </div>
      <button id="submit">Submit</button>
    </div>
    <script src="quiz.js"></script>
  </body>
</html>

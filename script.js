const submissions = [
  {
    name: "Jane",
    score: 95,
    date: "test",
    passed: true,
  },
  {
    name: "Joe",
    score: 77,
    date: "test",
    passed: true,
  },
  {
    name: "Jack",
    score: 59,
    date: "test",
    passed: false,
  },
  {
    name: "Jill",
    score: 88,
    date: "test",
    passed: true,
  },
];

const addSubmission = (array, newName, newScore, newDate) => {
  const newObject = {
    name: newName,
    score: newScore,
    date: newDate,
    passed: score >= 60,
  };
  array.push(newObject);
};

const deleteSubmissionByIndex = (array, index) => {
  array.splice(index, 1);
};

// deleteSubmissionByIndex(submissions, 1);
// console.log(submissions);

const deleteSubmissionByName = (array, name) => {
  const index = array.findIndex((student) => {
    return student.name === name;
  });
  return array.splice(index, 1);
};

// deleteSubmissionByName(submissions, "Jane");
// console.log(submissions);

const editSubmission = (array, index, score) => {
  array[index].score = score;
  array[index].passed = score >= 60;
};
// editSubmission(submissions, 1, 80);
// console.log(submissions);

const findSubmissionByName = (array, name) => {
  return array.find((student) => {
    return student.name === name;
  });
};
console.log(findSubmissionByName(submissions, "Jill"));

const findLowestScore = (array) => {
  let lowestScore = array[0];
  array.forEach((score) => {
    if (score.score < lowestScore.score) {
      lowestScore = score;
    }
  });
  return lowestScore;
};
console.log(findLowestScore(submissions));

const findAverageScore = (array) => {
  let totalScores = 0;
  for (const score of array) {
    totalScores += score.score;
  }
  return totalScores / submissions.length;
};
console.log(findAverageScore(submissions));

const filterPassing = (array) => {
  const passing = array.filter((submission) => submission.passed === true);
  return passing;
};

console.log(filterPassing(submissions));

const filter90AndAbove = (array) => {
  const passing = array.filter((submission) => submission.score >= 90);
  return passing;
};
console.log(filter90AndAbove(submissions));

// Problem-01 : Train TT's Fine Calculator

function totalFine(fare) {
  if (fare > 0 && typeof fare === "number") {
    const serviceCharge = 30;
    const fineCharge = (fare * 20) / 100;
    const fine = fare + serviceCharge + fineCharge;
    return fine;
  } else {
    return "Invalid";
  }
}

// Problem-02 : Clean & Capitalize Characters

function onlyCharacter(str) {
  if (typeof str !== "string") {
    return "Invalid";
  }
  const removeSpace = str.replace(/\s/g, "");
  return removeSpace.toUpperCase();
}

// 3Problem-03 : FIFA Best Team Award

function bestTeam(player1, player2) {
  if (typeof player1 && typeof player2 !== "object") {
    return "Invalid";
  }
  const teamA = player1.foul + player1.cardY + player1.cardR;
  const teamB = player2.foul + player2.cardY + player2.cardR;
  if (teamA < teamB) {
    return player1.name;
  } else if (teamA > teamB) {
    return player2.name;
  } else if (teamA === teamB) {
    return "Tie";
  } else {
    return "Invalid";
  }
}

// Problem-04: Same Same But Different  😕

function isSame(arr1, arr2) {
  if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
    return "Invalid";
  }
  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }

  return true;
}

// Problem-05: Exam Result Report Generator

function resultReport(marks) {
  if (!Array.isArray(marks)) {
    return "Invalid";
  }
  if (marks.length == 0) {
    return {
      finalScore: 0,
      pass: 0,
      fail: 0,
    };
  }
  let totalScore = 0;
  let passNumber = 0;
  let failNumber = 0;
  for (let i = 0; i < marks.length; i++) {
    if (typeof marks[i] !== "number" || marks[i] < 0) {
      return "Invalid";
    }
    totalScore += marks[i];
    if (marks[i] >= 40) {
      passNumber++;
    } else {
      failNumber++;
    }
  }
  const averageScore = totalScore / marks.length;
  return {
    finalScore: Math.round(averageScore),
    pass: passNumber,
    fail: failNumber,
  };
}

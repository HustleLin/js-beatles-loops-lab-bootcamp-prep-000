function theBeatlesPlay(musicians, instruments) {
  var array = [];
  for (var i = 0; i < musicians.length; i++) {
    array.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return array
}

function johnLennonFacts(facts) {
  var facts_array = []
<<<<<<< HEAD
  var i = 0
=======
>>>>>>> 6ccd9d26b95fc4306d423824f0c624ed1a05379d
  while (i < facts.length) {
    facts_array.push(facts[i] + "!!!");
    i++
  }
  return facts_array
}
<<<<<<< HEAD

function iLoveTheBeatles(number) {
  var times = [];
  do {
    times.push("I love the Beatles!");
    number++;
  }
  while (number < 15);
  return times
}
=======
>>>>>>> 6ccd9d26b95fc4306d423824f0c624ed1a05379d

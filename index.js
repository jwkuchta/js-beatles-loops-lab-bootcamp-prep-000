var musicians = ["John Lennon", "Ringo Star", "Paul McCartney"];
var instruments = ["piano", "drums", "guitar"];

function theBeatlesPlay(musicians, instruments) {
  var whoPlaysWhat = [];
  for(var i = 0; i < musicians.length; i++) {
    whoPlaysWhat.push(musicians[i] + " plays " + instruments[i])
  }
  return whoPlaysWhat;
}

function johnLennonFacts(facts) {
  var i = 0;
  function incrementVariable() {
    i = i + 1;
    return i;
  } while(incrementVariable() < facts.length) {
    facts = facts[i] + " !!!"
  }
  return facts;
}

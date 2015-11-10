function Cow (name){
  this.name = name || "anonymous Cow";
}

this.Moo = function(){
  return "Moo";
}

module.exports = Cow;

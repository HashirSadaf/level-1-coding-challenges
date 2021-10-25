let array = ["I", "am", "the", "greatest", "human", "ever", "if", "you", "think", "differently", "you", "are", "incredinly", "wrong"];

let sorted = array.sort(function (a, b){
     return b.length - a.length;
});

console.log(sorted[0]);
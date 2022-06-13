const findTheOldest = function(a) {
    const sorted = a.sort(function(a,b){
        if (!b.yearOfDeath){
            b.yearOfDeath = 2022;
        }
        if (!a.yearOfDeath){
            a.yearOfDeath = 2022;
        }
        if ((a.yearOfDeath - a.yearOfBirth) < (b.yearOfDeath - b.yearOfBirth)){
          return 1;
        }
        if ((a.yearOfDeath - a.yearOfBirth) > (b.yearOfDeath - b.yearOfBirth)){
          return -1;
        }
        return 0;
      });

      return sorted[0];
};

// Do not edit below this line
module.exports = findTheOldest;

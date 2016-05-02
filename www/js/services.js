angular.module('starter.services', [])

.factory('algorithms', function() {

  var primes = [
    373585643, 373585651, 373585673,
    373585679, 373585687, 373585787,
    373585789, 373585799, 373585813,
    373585819, 373585843, 373585853,
    373585873, 373585889, 373585913,
    373585967, 373585981, 373585997,
    373586009, 373586039, 373586051,
    373586069, 373586089, 373586093,
    373586111, 373586153, 373586159,
    373586197, 373586209, 373586233,
    373586267, 373586287, 373586293,
    373586321, 373586357, 373586371,
    373586399, 373586413, 373586419,
    373586429, 373586443, 373586449,
    373586467, 373586501, 373586527,
    373586557, 373586561, 373586567,
    373586579, 373586581, 373586599,
    373586617, 373586621, 373586627,
    373586639, 373586827, 373586869,
    373586887, 373586897, 373586909,
    373586923, 373586929, 373586933,
    373586977, 373587031, 373587037,
    373587041, 373587043, 373587059,
    373587073, 373587127, 373587133,
    373587143, 373587157, 373587191,
    373587199, 373587211, 373587259,
    373587289, 373587299, 373587317,
    373587323, 373587341, 373587343,
    373587433, 373587437, 373587463,
    373587509, 373587521, 373587589,
    373587593, 373587653, 373587667,
    373587673, 373587679, 373587691,
    373587701, 373587707, 373587743,
    373587803, 373587821, 373587833
  ];
  var morePrimes = [
    982449109, 982449113, 982449121, 982449133, 982449137, 982449229, 982449239, 982449277,
    982449313, 982449343, 982449361, 982449371, 982449379, 982449401, 982449409, 982449437,
    982449449, 982449463, 982449487, 982449491, 982449539, 982449553, 982449557, 982449563,
    982449569, 982449571, 982449581, 982449607, 982449619, 982449631, 982449647, 982449653,
    982449673, 982449679, 982449683, 982449691, 982449707, 982449731, 982449751, 982449757,
    982449763, 982449773, 982449847, 982449851, 982449869, 982449889, 982449901, 982449943,
    982449961, 982449983, 982449989, 982449997, 982450003, 982450031, 982450039, 982450057,
    982450069, 982450087, 982450093, 982450097, 982450121, 982450151, 982450177, 982450187,
    982450199, 982450207, 982450223, 982450253, 982450289, 982450291, 982450303, 982450319,
    982450321, 982450327, 982450373, 982450411, 982450457, 982450459, 982450507, 982450523,
    982450531, 982450577, 982450583, 982450591, 982450633, 982450639, 982450649, 982450657,
    982450673, 982450687, 982450697, 982450741, 982450753, 982450769, 982450787, 982450801,
    982450829, 982450849, 982450871, 982450913, 982450921, 982450943, 982450967, 982450981,
    982450999, 982451023, 982451081, 982451087, 982451111, 982451123, 982451159, 982451161,
    982451179, 982451191, 982451219, 982451227, 982451231, 982451243, 982451321, 982451333,
    982451359, 982451383, 982451419, 982451429, 982451443, 982451467, 982451479, 982451497,
    982451501, 982451549, 982451567, 982451579, 982451581, 982451609, 982451629, 982451653
  ];

  var characters = '`1234567890-=qwertyuiopasdfghjkl;zxcvbnm,!@#$%^&*()_+QWERTYUIOP{}|ASDFGHJKL:"ZXCVBNM<>?';

  return {

    extend: function(str, newLen) {
      if(str === '') return str;
      if(!newLen) newLen = 16;
      var newString = '';
      for(i = 0; i < newLen; i++) {
        newString += str[i % str.length];
      }
      return newString;
    },

    mixup: function(str) {
      console.log(str);
      var newString = '';
      var i = str.length;
        while (i > 0) {
          if (i == 1) newString += str;
          var mod = (morePrimes[i]) % i;
          newString += str.slice(mod - 1, mod);
          str = str.slice(0, mod - 1) + str.slice(mod, i);
          i--;
      };
      return newString;
    },

    changer: function(str) {
      //var newCharList = mixup(characters);
      var newstring = ""
      for (var i = 0; i < str.length; i++) {
        var charIdx = characters.indexOf(str[i]);
        if (charIdx !== -1) {
          newstring += characters[(primes[i] * morePrimes[i] * charIdx) % characters.length] ;
        }
      }
      return newstring;
    }

  };
})

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Ben Sparrow',
    lastText: 'You on your way?',
    face: 'img/ben.png'
  }, {
    id: 1,
    name: 'Max Lynx',
    lastText: 'Hey, it\'s me',
    face: 'img/max.png'
  }, {
    id: 2,
    name: 'Adam Bradleyson',
    lastText: 'I should buy a boat',
    face: 'img/adam.jpg'
  }, {
    id: 3,
    name: 'Perry Governor',
    lastText: 'Look at my mukluks!',
    face: 'img/perry.png'
  }, {
    id: 4,
    name: 'Mike Harrington',
    lastText: 'This is wicked good ice cream.',
    face: 'img/mike.png'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
});

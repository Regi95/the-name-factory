
document.getElementById("nameGen").addEventListener("click", function() {
  // Array holding the alphabet in uppercase
  var alfa = [32];
  for (let i = 65; i < 91; i++) {
    alfa.push(i);
  }

  // To decide on the structure of the name.
  var kar1 = Math.ceil(Math.random() * 4);

  // The name being built
  var nom = "";

  //To generate a random letter
  var j;

  // To get the charcode of the letter generated from alfa
  var k;

  // To get a random length for the name, from 2 to 12 characters long.
  var l = Math.ceil(Math.random() * 11 + 1);

  //To control the actual character
  var m;


  if (l < 9) { // Short and mid length names
    switch (kar1) {
      case 1: { //Even positioned characters are vowels
        for (m = l; m > 0; m--) {
          j = Math.floor(Math.random() * alfa.length);
          if (m % 2 == 0) {
            while (j != 1 && j != 5 && j != 9 && j != 15 && j != 21 && j != 25) {
              j = Math.floor(Math.random() * alfa.length);
            }
          } else {
            if (m == l || m == l - 1 || m == 1) {
              while (j == 0 || j == 1 || j == 5 || j == 9 || j == 15 || j == 21 || j == 25) {
                j = Math.floor(Math.random() * alfa.length);
              }
            } else {
              while (j == 1 || j == 5 || j == 9 || j == 15 || j == 21 || j == 25) {
                j = Math.floor(Math.random() * alfa.length);
              }
            }
          }
          k = alfa[j];
          nom = nom.concat(String.fromCharCode(k));
        }
      }
      break;
    case 2: { //Even positioned characters are consonants
      for (m = l; m > 0; m--) {
        j = Math.floor(Math.random() * alfa.length);
        if (m % 2 != 0) {
          while (j != 1 && j != 5 && j != 9 && j != 15 && j != 21 && j != 25) {
            j = Math.floor(Math.random() * alfa.length);
          }
        } else {
          if (m == l || m == l - 1 || m == 2) {
            while (j == 0 || j == 1 || j == 5 || j == 9 || j == 15 || j == 21 || j == 25) {
              j = Math.floor(Math.random() * alfa.length);
            }
          } else {
            while (j == 1 || j == 5 || j == 9 || j == 15 || j == 21 || j == 25) {
              j = Math.floor(Math.random() * alfa.length);
            }
          }
        }
        k = alfa[j];
        nom = nom.concat(String.fromCharCode(k));
      }
    }
    break;
    case 3: { // Vowels on positions multiple of 3 and on 8
      for (m = l; m > 0; m--) {
        j = Math.floor(Math.random() * alfa.length);
        if (m == 8 || m % 3 == 0 || m == 1) {
          while (j != 1 && j != 5 && j != 9 && j != 15 && j != 21 && j != 25) {
            j = Math.floor(Math.random() * alfa.length);
          }
        } else {
          if (m == l || m == l - 1 || m == 2) {
            while (j == 0 || j == 1 || j == 5 || j == 9 || j == 15 || j == 21 || j == 25) {
              j = Math.floor(Math.random() * alfa.length);
            }
          } else {
            while (j == 1 || j == 5 || j == 9 || j == 15 || j == 21 || j == 25) {
              j = Math.floor(Math.random() * alfa.length);
            }
          }
        }
        k = alfa[j];
        nom = nom.concat(String.fromCharCode(k));
      }
    }
    break;
    case 4: { // Consonants on positions multiple of 3, 5 and on 1
      for (m = l; m > 0; m--) {
        j = Math.floor(Math.random() * alfa.length);
          if (m % 3 == 0 || m % 5 == 0 || m == 1) {
            if(m == l || m == l-1 || m == 1) {
              while (j == 0 || j == 1 || j == 5 || j == 9 || j == 15 || j == 21 || j == 25) {
                j = Math.floor(Math.random() * alfa.length);
              }
            } else {
              while (j == 1 || j == 5 || j == 9 || j == 15 || j == 21 || j == 25) {
                j = Math.floor(Math.random() * alfa.length);
              }
            }

          } else {
            while (j != 1 && j != 5 && j != 9 && j != 15 && j != 21 && j != 25) {
              j = Math.floor(Math.random() * alfa.length);
            }
          }
        k = alfa[j];
        nom = nom.concat(String.fromCharCode(k));
      }
    }
    break;

    }
  } else { //Long names, structures are really specifics.
    switch (kar1) {
      case 1: { // Elements positioned at multiples of 3 and the last one are vowels.
        for (m = l; m > 0; m--) {
          j = Math.floor(Math.random() * alfa.length);
          if (m % 3 == 0 || m == 1) {
            while (j != 1 && j != 5 && j != 9 && j != 15 && j != 21 && j != 25) {
              j = Math.floor(Math.random() * alfa.length);
            }
          } else {
            while (j == 1 || j == 5 || j == 9 || j == 15 || j == 21 || j == 25) {
              j = Math.floor(Math.random() * alfa.length);
            }
          }
          k = alfa[j];
          nom = nom.concat(String.fromCharCode(k));
        }
      }
      break;
    case 2: { //Elements multiples of 2 or 5 are consonants.
      for (m = l; m > 0; m--) {
        j = Math.floor(Math.random() * alfa.length);
        if (m % 2 == 0 || m % 5 == 0) {
          if(m == l || m == l-1 || m == 2) {
            while (j == 0 || j == 1 || j == 5 || j == 9 || j == 15 || j == 21 || j == 25) {
              j = Math.floor(Math.random() * alfa.length);
            }
          } else {
            if(m == 5) {
            while(j != 0) {
              j = Math.floor(Math.random() * alfa.length);
            }
          } else {
            while (j == 1 || j == 5 || j == 9 || j == 15 || j == 21 || j == 25) {
              j = Math.floor(Math.random() * alfa.length);
            }
          }

          }
        } else {
            while (j != 1 && j != 5 && j != 9 && j != 15 && j != 21 && j != 25) {
              j = Math.floor(Math.random() * alfa.length);
            }
        }
        k = alfa[j];
        nom = nom.concat(String.fromCharCode(k));
      }
    }
    break;
    case 3: { // Elements multiples of 3, 5, and position 1 are vowels.
      for (m = l; m > 0; m--) {
        j = Math.floor(Math.random() * alfa.length);
        if (m % 3 == 0 || m % 5 == 0 || m == 1) {
          while (j != 1 && j != 5 && j != 9 && j != 15 && j != 21 && j != 25) {
            j = Math.floor(Math.random() * alfa.length);
          }
          if(m == 5) {
            while (j != 0) {
              j = Math.floor(Math.random() * alfa.length);
            }
          }
        } else {
          if (m == l || m == l-1) {
            while (j == 0 || j == 1 || j == 5 || j == 9 || j == 15 || j == 21 || j == 25) {
              j = Math.floor(Math.random() * alfa.length);
            }
          } else {
            while (j == 1 || j == 5 || j == 9 || j == 15 || j == 21 || j == 25) {
              j = Math.floor(Math.random() * alfa.length);
            }
          }
        }
        k = alfa[j];
        nom = nom.concat(String.fromCharCode(k));
      }
    }
    break;
    case 4: { // Multiples of 2 are consonants, position 7 is space
      for (m = l; m > 0; m--) {
        j = Math.floor(Math.random() * alfa.length);
        if(m % 2 == 0) {
          if(m == l || m == l-1 || m == 2) {
            while (j == 0 || j == 1 || j == 5 || j == 9 || j == 15 || j == 21 || j == 25) {
              j = Math.floor(Math.random() * alfa.length);
            }
          } else {
            while (j == 1 || j == 5 || j == 9 || j == 15 || j == 21 || j == 25) {
              j = Math.floor(Math.random() * alfa.length);
            }
          }
        } else {
          if(m == 7) {
            while(j != 0) {
              j = Math.floor(Math.random() * alfa.length);
            }
          }
          while (j != 1 && j != 5 && j != 9 && j != 15 && j != 21 && j != 25) {
            j = Math.floor(Math.random() * alfa.length);
          }
        }
        k = alfa[j];
        nom = nom.concat(String.fromCharCode(k));
      }
    }
    break;
    }
  }

  document.getElementById("nom").innerHTML = nom;
});

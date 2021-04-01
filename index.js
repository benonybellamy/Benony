// Exercise 6: Output prime numbers



let n = 10;

label:
for (let i = 2; i < 10; i++) { 

  for (let j = 2; j < i; j++) {
    if (i % j == 0) continue label; 
  }

  alert( i ); 
}
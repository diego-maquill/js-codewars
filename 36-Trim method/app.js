String.prototype.trim = function(c = ' '){ // If no argument provided, default to space
  return String(this).replace(new RegExp(`^[${c}]+|[${c}]+$`,'ig'), '');
}


console.log("LLLHello Worldlll".trim("l"));//, "Hello World");
console.log("   Hello World                 ".trim());//, "Hello World");
console.log("XVisca ElbarcaXX".trim("X"));//, "Visca Elbarca");
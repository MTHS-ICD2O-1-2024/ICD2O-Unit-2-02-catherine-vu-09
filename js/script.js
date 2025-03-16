// Copyright (c) 2025 Catherine Vu All rights reserved
//
// Created by: Catherine
// Created on: March 17 2025
// This file contains the JS functions for index.html

/**
* Do basic math.
 */
function doMathClicked() {
  document.getElementById("add-math").innerHTML = "<p>6 + 5 = " + (6 + 5) + "</p>"
  document.getElementById("subtract-math").innerHTML = "<p>7 - 3 =  " + (7 - 3) + "</p>"  
  document.getElementById("multiply-math").innerHTML = "<p>3 + 4 × 2 = " + (3 + 4 * 2) + "</p>" 
  document.getElementById("divide-math").innerHTML = "<p>(4 ÷ 2) + 3 = " + (4 / 2 + 3) + "</p>"
  document.getElementById("exponent-math").innerHTML = "<p>5 + 2³ = " + (5 + 2 ** 3) + "</p>"
}


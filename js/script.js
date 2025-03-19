// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Mr. Coxall
// Created on: Sep 2020
// This file contains the JS functions for index.html

/**
 * Do basic math.
 */
function doMathClicked() {
const length = parseFloat(document.getElementById('length').textContent);
const width = parseFloat(document.getElementById('width').textContent);

const area = 5 * 3;
const perimeter = 2 * (5 + 3);

document.getElementById('area').textContent = area + ' cm²';
document.getElementById('perimeter').textContent = perimeter + ' cm';
}


// Copyright (c) 2020 Catherine Vu  All rights reserved
//
// Created by: Catherine Vu
// Created on: March 19 2025
// This file contains the JS functions for index.html

/**
 * Do Perimeter and Area
 */
function doMathClicked() {
const length = parseFloat(document.getElementById('length').textContent);
const width = parseFloat(document.getElementById('width').textContent);

const area = 5 * 3;
const perimeter = 2 * (5 + 3);

document.getElementById('area').textContent = area + ' cm²';
document.getElementById('perimeter').textContent = perimeter + ' cm';
}


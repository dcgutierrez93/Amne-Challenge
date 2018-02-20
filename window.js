// =============================================================================

// Require Dependencies

// =============================================================================
var fs      = require("fs");
// var express = require("express");

// Readfile from input.txt
fs.readFile("input.txt", "utf8", function functionName(err, data) {

    // Check for errors.
    if (err) {
        return console.log(err);
    }

    // Print data
    console.log(data);
});

#!/usr/bin/env node

var
  most = require("most"),
  mostByline = require("..")

var
  lines = mostByline(process.stdin),
  periodic = most.periodic(1000),
  zip = most.zip(line => line, lines, periodic)

zip.forEach(x => console.log(x))

const express = require("express");

const config = require("./server/config");

const app = config(express());

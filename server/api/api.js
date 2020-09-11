/*
rest api for returning mongo data
 */
require('dotenv').config();
const mongodb = require('mongodb');
const express = require('express');
const router = express.Router();
const FIZZY_URL = 'mongodb://' + process.env.MONGOHOST + '/' + process.env.MONGOPORT + '/';

// Middleware

// Get
// This will be where mongo data is gathered after local VPN is finished being setup
// TODO: set up mongo api for users
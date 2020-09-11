/*
api for returning mongo data
 */

const mongodb = require('mongodb');
const express = require('express');
const router = express.Router();
const FIZZY_URL = 'mongodb://localhost/27017/';

// Middleware

// Get
// This will be where mongo data is gathered after local VPN is finished being setup
// TODO: set up mongo api for users
const express = require('express');
const db = require('./config/connection');
const routes = require ('./routes');

const cwd = process.cwd();

const PORT = process.env.PORT || 3001;
const app = express();

const activity = cwd.includes('social-network')
? cwd.split('/social-network/')[1] : cwd;


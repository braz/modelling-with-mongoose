#!/usr/bin/env node

const Workshopper = require('workshopper')
    , path        = require('path')

Workshopper({
    name     : 'modelling-with-mongoose'
  , title    : 'MODELLING WITH MONGOOSE!'
  , subtitle : 'Object Modelling for MongoDB'
  , appDir   : __dirname
  , helpFile : path.join(__dirname, 'help.txt')
  , prerequisitesFile : path.join(__dirname, 'prerequisites.txt')
  , creditsFile : path.join(__dirname, 'credits.txt')
  , menu: {
    	bg: 'red',
    	fg: 'white'
	}
}).init()
# Etch-a-sketch
A simple website that lets you 'draw' by hovering your mouse over a grid of cells, imitating the real-life toy Etch-a-sketch.

This project was developed as part of The Odin Project's Foundations course, in order to practice the basics of DOM manipulation through JavaScript and CSS styling ([Source](https://www.theodinproject.com/lessons/foundations-etch-a-sketch)).

## Functionalities
Apart from its most basic function, which is painting the black cells, two extra modes were implemented: one that applies a random RGB color to a cell ('Rainbow mode'), and one that increasingly darkens a cell every time it's hovered on ('Darken mode').

## Code highlights
I'm specially proud of my implementation of a function that takes another function as parameter, and then sets it to an eventListener to every existing cell. This is how the Rainbow and Darken buttons work.

I think I also did a decent job at organizing the page with flexbox, making the board have 100vh/100vw size.
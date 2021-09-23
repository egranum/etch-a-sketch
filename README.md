# etch-a-sketch
TOP etch-a-sketch project

In this project I am doing this https://www.theodinproject.com/paths/foundations/courses/foundations/lessons/etch-a-sketch-project assignment at The Odin Project.

The task is building a browser version of something between a sketchpad and an Etch-A-Sketch using CSS and JavaScript


First I set up a container div in html. I then used a for loop in js to create and append new divs to the container, and set up a grid in css. 
After trying out several ways to add an event listener to all the new divs, I decided to add the listener to the container div instead, using event.target to affect only the targeted child div.
To make the grid have an equal amount of squares on each side every time the game resets and a new number is added, I decided to use CSS variables and connecting the var with the input number of the player,
making the grid have a dynamic, but still set number of rows and columns. The amount of total divs created in container is the input multiplied by itself.
To prevent the game from crashing I set up an alert if the player tries to insert more than 100 squares per side, followed by a site refresh.
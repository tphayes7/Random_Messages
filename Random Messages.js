/*
This program creates a random silly sentence.
Copyright (C) 2024  Travis Hayes

This program is free software; you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation; either version 2 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License along
with this program; if not, write to the Free Software Foundation, Inc.,
51 Franklin Street, Fifth Floor, Boston, MA 02110-1301 USA.
*/

const begin = ["The moon", "Your mom", "That guy over there", "Elvis", "JFK", "Uranus", "The dog's party hat", "The Cat in the Hat"];
const middle = [" smells like", " looks like", " wrote a song about", " wants to go out with", " absolutely despises", " is turning into", " yodeled like", " went to karaoke with", " rode Harleys with"];
const end = [" goat cheese.", " Colonel Sanders.", " the Bermuda Triangle.", " Ronald McDonald.", " The Artist Formerly Known As Prince.", " a 70's game show.", " Weird Al."];
const options = [begin, middle, end];

let sentence = "";
for (let i = 0; i < 3; i++) {
    let randIdx = Math.floor(Math.random() * options[i].length);
    sentence = sentence + options[i][randIdx];
}
console.log(sentence);
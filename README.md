# Doggerel-Aid #
this is a personal repo holding utility scripts, cheat sheets, and hacks to make life easier for me while raging on code

## Warnings ##
The Author does not guarantee, in any way, shape, combination or permutation that you won't
* shoot yourself in the hand/foot/face
* fuck yourself in the ass
* [any other unpleasantness] 

use with the caution appropriate to a thinking ape


## Contents ##
* .gitignore files
various templates I find useful for gitignore files
* gitsync.py
python script used to sync two directories. Every time it's run, both directory contents are synced. For files present in both directories, the most recently modified version is used. I use this for keeping an ide's grubby hands off of my version controlled project working directory (looking at you Eclipse! Fool me 1+n!)
Usage: edit in your favourite text editor (emacs/vi/vim/textmate/whatever) and run sync, keeping an ide's version of the source synced with the project, without endagering your codes with topheavy ide bullshit
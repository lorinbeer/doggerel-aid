#batch replace

simple script to scan a directory recursively, matching block content in all files, and replace with another block

##usage
run in root directory you wish to scan
    ./br target source
where:
target - file containing the block of text to replace
source - file containing the replacement text

##useful patterns
- recurse down a directory tree, act on each file found
- call an internally defined function with awk

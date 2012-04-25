# Git-Fu
various git commands


## git-reset
### Soft Reset 
leaves the index file and the working tree untouched, moves HEAD to <commit>
$ git-reset --soft <commit>
### Hard Reset
double-dangerous
resets working tree and index file. Discards any changes to tracked files since <commit>.
$ git-reset --hard

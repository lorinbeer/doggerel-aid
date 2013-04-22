# Git-Fu
various git command templates

## remotes and branches

### create local branch from remote; no tracking

    $ git branch --no-track <local-branch> <remote>/<remote-branch>

### create local branch from remote; tracking

    $ git branch --track <local-branch> <remote>/<remote-branch>

## git-reset
### Soft Reset 
leaves the index file and the working tree untouched, moves HEAD to <commit>

    $ git-reset --soft <commit>

### Hard Reset
double-dangerous
resets working tree and index file. Discards any changes to tracked files since <commit>.

    $ git-reset --hard

## git filter-branch
### --rev-list
list branches you wish to rewrite
### env-filter
rewrite environment variable values for the branch on which it is applied

    git filter-branch --env-filter 

### commit-filter

### rewrite git author of commits
    git filter-branch --env-filter
        'if[ "$GIT_COMMITER_NAME" = "Lorin Beer" ]
        then
            GIT_COMMITER_NAME="lorinbeer";
            GIT_AUTHOR_NAME="lorinbeer";
            GIT_COMMITER_EMAIL="lorin.beer@gmail.com";
            GIT_AUTHOR_EMAIL="lorin.beer@gmail.com";
            git commit-tree "$@";
        else
            git commit-tree "$@";
        fi' HEAD

### --force
this will bypass several possible errors, which mostly indicate you may be discarding valuable backups. Use with caution.
* temp directory exists already
* if another filter-branch has been run previously, then the original branch refs will be backed up in refs/original

### HEAD
filters revisions on the current branch

    git filter-branch --env-filter '[script to be run]' HEAD

### -- --all
filter-branch on all revisions on all refs, including all branches

    git filter-branch --env-filter '[script to be run]' -- --all

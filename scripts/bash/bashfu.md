# bashfu

## general
* using + rather than - will turn a flag off

## set

### errexit
    set -e
exit immediately if a simple command exits with non-zero status, unless if failed command is part of a loop, if statement, && || list, return status is !'ed, etc
supper handy
disable with
    set +e


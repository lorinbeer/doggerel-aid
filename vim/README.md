# Vim Incantations

## Syntax Highlighting

## Indent
### indent multiple lines
    :n>>
where n is the number of lines following the cursor to indent
### mark a block to indent
    :V*j>
where *j number of lines to navigate down
### indent curly-braces block
put cursor on curly braces
    :>%
### save highlighted source to html
    :runtime! syntax/2html.vim
## Tab
### tabstop
how many columns a tab counts for
    :set tabstop=4
### expandtab
insert spaces instead of tab
    :set expandtab
### noexpandtab
turns expandtab setting off
    :set noexpandtab
### shiftwidth
how many columns are indented with reindent operation
    :set shiftwidth=4
### softtabstop
how many columns to insert with Tab in insert mode.
    :set softtabstop=4
note: if softtab < tabstop && noexpandtab, then a combination of spaces and tabs are used
### retab
change all existing tab characters to match the current settings
    :retab
only current line
    :.retab

### Tab Visualizations

syntax match Tab /\t/

hi Tab gui=underline guifg=blue ctermbg=blue


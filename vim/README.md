# Vim Incantations

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


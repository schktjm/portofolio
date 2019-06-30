#!/bin/bash

css="css"
IFS='.'
# for file in `ls *.css`; do
    #arr=(`echo $file | sed -e "s/\.css//"`)
#    echo $file
# done

files=`ls *.css | sed -e "s/\.css//g" | awk -F'\n' '{ print "-o "$1".min.css", $1".css" }'` 

for file in $files; do
    echo $file
done


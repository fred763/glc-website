#!/bin/bash

# Define the output file
OUTPUT_FILE="code_dump.txt"

# Clear the output file if it exists
> "$OUTPUT_FILE"

# Find all .js and .css files in current directory and subfolders
find . -type f \( -name "*.js" -o -name "*.css" \) | sort | while read -r file; do
    # Add file header with filename and path
    echo "===============================================" >> "$OUTPUT_FILE"
    echo "FILE: $file" >> "$OUTPUT_FILE"
    echo "===============================================" >> "$OUTPUT_FILE"
    echo "" >> "$OUTPUT_FILE"
    
    # Add the file content
    cat "$file" >> "$OUTPUT_FILE"
    
    # Add newlines for separation
    echo "" >> "$OUTPUT_FILE"
    echo "" >> "$OUTPUT_FILE"
done

echo "All JavaScript and CSS files have been dumped to $OUTPUT_FILE"

if [ $# -eq 0 ]; then
    echo "No arguments supplied."
    exit 1
fi

for folder in "$@"; do
    # Create folder with 'ex' prefix
    mkdir "ex$folder"
    echo "Folder 'ex$folder' created."
done

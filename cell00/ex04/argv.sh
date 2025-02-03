if [ $# -eq 0 ]; then
    echo "No argument supplied"
    exit 1
fi

if [ $# -eq 1 ]; then 
    echo "${1:-}"
    exit 1
fi

if [ $# -eq 2 ]; then
    echo "${1:-}"
    echo "${2:-}"
    exit 1
fi

if [ $# -gt 3 ]; then
    echo "${1:-}"
    echo "${2:-}"
    echo "${3:-}"
    exit 1
fi

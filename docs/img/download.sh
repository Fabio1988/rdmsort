#!/bin/bash

# Base URL for the images
base_url="https://raw.githubusercontent.com/nileplumb/PkmnHomeIcons/refs/heads/master/UICONS_OS_128/pokemon/"

# Loop through the numbers 899 to 1025
for i in {899..1025}
do
    # Construct the URL for each image
    url="${base_url}${i}.png"
    # Download the image using wget
    wget -q "$url" -O "${i}.png"
done

#!/bin/bash

# Create images directory if it doesn't exist
mkdir -p public/images

echo "Downloading images from Unsplash..."

# Hero images
curl -sL "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80" -o public/images/hero-main.jpg
curl -sL "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1920&q=80" -o public/images/hero-eu-taxonomy.jpg
curl -sL "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80" -o public/images/hero-contact.jpg

# Service images
curl -sL "https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=800&q=80" -o public/images/service-eu-taxonomy.jpg
curl -sL "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80" -o public/images/service-ber.jpg
curl -sL "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&q=80" -o public/images/service-ventilation.jpg
curl -sL "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80" -o public/images/service-air-leakage.jpg
curl -sL "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80" -o public/images/service-acoustic.jpg

# About images
curl -sL "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&q=80" -o public/images/about-team.jpg
curl -sL "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&q=80" -o public/images/about-office.jpg

# Location images
curl -sL "https://images.unsplash.com/photo-1590089415225-401ed6f9db8e?w=800&q=80" -o public/images/location-ennis.jpg
curl -sL "https://images.unsplash.com/photo-1549918864-48ac978761a4?w=800&q=80" -o public/images/location-ireland.jpg
curl -sL "https://images.unsplash.com/photo-1564959130747-897fb406b9af?w=800&q=80" -o public/images/location-dublin.jpg

# Property images
curl -sL "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80" -o public/images/property-commercial.jpg
curl -sL "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80" -o public/images/property-residential.jpg
curl -sL "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?w=800&q=80" -o public/images/property-industrial.jpg
curl -sL "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80" -o public/images/property-apartment.jpg

# Sustainability images
curl -sL "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&q=80" -o public/images/sustainability-green.jpg
curl -sL "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&q=80" -o public/images/sustainability-solar.jpg
curl -sL "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&q=80" -o public/images/sustainability-nature.jpg

# Blog images
curl -sL "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&q=80" -o public/images/blog-eu-taxonomy.jpg
curl -sL "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80" -o public/images/blog-comparison.jpg
curl -sL "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&q=80" -o public/images/blog-air-test.jpg

echo "Done! Images downloaded to public/images/"

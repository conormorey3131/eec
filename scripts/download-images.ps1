# PowerShell script to download images
# Run: .\scripts\download-images.ps1

$imagesDir = "public\images"

# Create directory if it doesn't exist
if (-not (Test-Path $imagesDir)) {
    New-Item -ItemType Directory -Path $imagesDir -Force
}

Write-Host "Downloading images from Unsplash..." -ForegroundColor Cyan

$images = @{
    # Hero images
    "hero-main.jpg" = "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80"
    "hero-eu-taxonomy.jpg" = "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1920&q=80"
    "hero-contact.jpg" = "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80"

    # Service images
    "service-eu-taxonomy.jpg" = "https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=800&q=80"
    "service-ber.jpg" = "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80"
    "service-ventilation.jpg" = "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&q=80"
    "service-air-leakage.jpg" = "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80"
    "service-acoustic.jpg" = "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80"

    # About images
    "about-team.jpg" = "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&q=80"
    "about-office.jpg" = "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&q=80"

    # Location images
    "location-ennis.jpg" = "https://images.unsplash.com/photo-1590089415225-401ed6f9db8e?w=800&q=80"
    "location-ireland.jpg" = "https://images.unsplash.com/photo-1549918864-48ac978761a4?w=800&q=80"
    "location-dublin.jpg" = "https://images.unsplash.com/photo-1564959130747-897fb406b9af?w=800&q=80"

    # Property images
    "property-commercial.jpg" = "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80"
    "property-residential.jpg" = "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80"
    "property-industrial.jpg" = "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?w=800&q=80"
    "property-apartment.jpg" = "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80"

    # Sustainability images
    "sustainability-green.jpg" = "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&q=80"
    "sustainability-solar.jpg" = "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&q=80"
    "sustainability-nature.jpg" = "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&q=80"

    # Blog images
    "blog-eu-taxonomy.jpg" = "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&q=80"
    "blog-comparison.jpg" = "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80"
    "blog-air-test.jpg" = "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&q=80"
}

$total = $images.Count
$current = 0

foreach ($image in $images.GetEnumerator()) {
    $current++
    $outputPath = Join-Path $imagesDir $image.Key
    Write-Host "[$current/$total] Downloading $($image.Key)..." -ForegroundColor Gray

    try {
        Invoke-WebRequest -Uri $image.Value -OutFile $outputPath -UseBasicParsing
    } catch {
        Write-Host "  Failed to download $($image.Key)" -ForegroundColor Red
    }
}

Write-Host "`nDone! Images saved to $imagesDir" -ForegroundColor Green

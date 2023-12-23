$body = @{
    username = "napadac"
    password = "123"
} | ConvertTo-Json

$response = Invoke-WebRequest -Uri "http://localhost:5000/login" -Method Post -ContentType "application/json" -Body $body

$token = ($response.Content | ConvertFrom-Json).token

$token
$uri = "http://localhost:5000/dashboard"

$modifiedToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYWRtaW4iLCJpYXQiOjE3MDMzMzYyMDd9.mi3FVRtgiTd9ys9_yZuhyscolLLqMdm9jVs1_tMnI44"

$headers = @{
    Authorization = $modifiedToken
}

$response = Invoke-WebRequest -Uri $uri -Method Get -Headers $headers

$response.Content
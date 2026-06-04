Write-Host "Verificando o Docker..." -ForegroundColor Cyan

# Verifica se o processo do Docker Desktop está rodando
$dockerProcess = Get-Process "Docker Desktop" -ErrorAction SilentlyContinue

if (!$dockerProcess) {
    Write-Host "Docker não está aberto. Iniciando Docker Desktop..." -ForegroundColor Yellow
    # Tenta iniciar o Docker Desktop. Se o caminho for diferente, ajuste aqui.
    Start-Process "C:\Program Files\Docker\Docker\Docker Desktop.exe" -WindowStyle Hidden
}

# Aguarda o Engine do Docker ficar pronto
Write-Host "Aguardando o motor do Docker inicializar (isso pode levar alguns segundos)..." -ForegroundColor Gray
$maxAttempts = 30
$attempt = 0
while ($attempt -lt $maxAttempts) {
    docker info > $null 2>&1
    if ($LASTEXITCODE -eq 0) {
        break
    }
    Start-Sleep -Seconds 2
    $attempt++
}

if ($attempt -eq $maxAttempts) {
    Write-Host "Erro: O Docker demorou muito para iniciar ou o caminho do executável está incorreto." -ForegroundColor Red
    exit
}

Write-Host "Docker pronto! Subindo containers..." -ForegroundColor Green
docker compose up -d

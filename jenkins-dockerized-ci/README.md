# Dockerized Jenkins CI/CD (Windows-ready)

This starter packs a Jenkins container that talks to a sidecar Docker-in-Docker engine. It builds, tests, and deploys a sample Node.js app container.

## Prereqs
- Windows 10/11 with Docker Desktop (WSL2 backend on).
- PowerShell terminal.

## Quick start
```powershell
cd <extract-this-folder>
docker compose up -d --build
docker exec -it jenkins cat /var/jenkins_home/secrets/initialAdminPassword
```
Open http://localhost:8080, finish the Jenkins setup, create a Pipeline item and paste the Jenkinsfile, then **Build Now**. Your app will run on http://localhost:5000.
```

## Files
- docker-compose.yml — spins up DinD + Jenkins
- jenkins.Dockerfile — Jenkins with Docker CLI + git
- app/Dockerfile, app/server.js — sample app
- Jenkinsfile — pipeline (build, test, deploy)

## Stop/Start
```powershell
docker compose down    # stop
docker compose up -d   # start
```

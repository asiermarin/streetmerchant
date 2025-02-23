docker compose down
Remove-Item -Path ".\node_modules" -Recurse -Force
Remove-Item -Path ".\build" -Recurse -Force
npm install
npm run compile
docker container prune --force
docker image prune -a --force
docker build -t streetmerchant-dev .
docker compose up
# node build/src/index.jsde
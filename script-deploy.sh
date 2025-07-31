#!/bin/bash
# script-deploy.sh

# Abort on errors
set -e

# Função para obter o timestamp formatado
get_timestamp() {
    date +'%H:%M'
}

echo "🧹 Excluindo a pasta dist local..."
rm -rf dist

echo "🔄 Atualizando a branch 'main' local e limpando o diretório de trabalho..."
# Garante que estamos na branch 'main'
git checkout main
git pull origin main --rebase
git clean -fd

echo "⚙️  Criando nova build na pasta dist com Vite..."
npm run build

echo "💾 Commitando alterações no branch main..."
# Verifica se há alterações para comitar antes de tentar o commit
if ! git diff --quiet --exit-code; then
    git add .
    TIMESTAMP=$(get_timestamp)
    git commit -m "Build: Nova pasta dist $TIMESTAMP"
    echo "✅ Alterações commitadas no branch main."
else
    echo "ℹ️ Nenhuma alteração para comitar no branch main."
fi
# Envia as alterações da main para o remoto
git push origin main

echo "⏳ Aguardando 15 segundos para garantir atualização do GitHub..."
sleep 15

echo "🚀 Enviando conteúdo da pasta dist para a branch gh-pages (forçado)..."

git push origin $(git subtree split --prefix dist main):refs/heads/gh-pages --force

echo "⏳ Aguardando 20 segundos para publicação no GitHub Pages..."
sleep 20

echo "✅ Deploy finalizado com sucesso!"
echo "🌐 Acesse em: https://drivanreis.github.io/amberglass/"
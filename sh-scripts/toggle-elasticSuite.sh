# shellcheck shell=bash
: || source lib.sh # trick shellcheck into finding certain referenced vars

echo "Switching to ElasticSuite..."

tmp_git_dir="$(mktemp -d)"

echo "Getting env..."
git clone --branch "$environment" "$project@git.demo.magento.cloud:$project.git" "$tmp_git_dir"
echo "Installing required PHP dependencies"
sudo apt -y install php8.1-bcmath php8.1-common php8.1-curl php8.1-fpm php8.1-gd php8.1-intl php8.1-mbstring php8.1-mysql php8.1-soap php8.1-xml php8.1-xsl php8.1-zip php8.1-cli

cd "$tmp_git_dir"
config_file="$tmp_git_dir"/app/etc/config.php
env_file="$tmp_git_dir"/.magento.env.yaml
app_file="$tmp_git_dir"/.magento.app.yaml
service_file="$tmp_git_dir"/.magento/services.yaml

if grep -q "'engine: elasticsearch7/engine: elasticsuite" "$env_file"; then
echo "Already with ElasticSuite"
else
echo "Installing  & Configuring ElasticSuite"
echo "Configuration..."
perl -i -pe "s/engine: elasticsearch7/engine: elasticsuite/" "$env_file"
perl -i -pe "s/type: opensearch:1.2/type: opensearch:1.2\r\n    configuration:\r\n        plugins:\r\n            - analysis-icu\r\n            - analysis-phonetic/g" "$service_file"
echo "Install temp composer..."
php -r "copy('https://getcomposer.org/installer', 'composer-setup.php');"
php -r "if (hash_file('sha384', 'composer-setup.php') === '55ce33d7678c5a611085589f1f3ddf8b3c52d662cd01d4ba75c0ee0459970c2200a51f492d557530c71c15d8dba01eae') { echo 'Installer verified'; } else { echo 'Installer corrupt'; unlink('composer-setup.php'); } echo PHP_EOL;"
php composer-setup.php
php -r "unlink('composer-setup.php');"

msg "Enter youtr github token, you can get it at https://github.com/settings/tokens/new?scopes=repo&description=Composer+on+AC+Chrome+Extension"
read -r -p "Enter token: " < "$read_input_src" 2>/dev/tty

php composer.phar config -g github-oauth.github.com $REPLY
#php composer.phar config -g --json repo.magento.com '{"username": "b17aa908c13768cef2a5a3a043bb3c54","password": "93f1f71fd779eb46af01fd7587e5fdba"}'
touch auth.json
cat > auth.json <<- EOM
{
"http-basic": {
"repo.magento.com": {
"username": "b17aa908c13768cef2a5a3a043bb3c54",
"password": "93f1f71fd779eb46af01fd7587e5fdba"
}
}
}
EOM
echo "Composer require elasticsuite..."
php composer.phar require smile/elasticsuite ~2.10.12

echo "        CONFIG__DEFAULT__SMILE_ELASTICSUITE_CORE_BASE_SETTINGS__ES_CLIENT__SERVERS: 'opensearch.internal'" >> $app_file



echo "Switched to ElasticSuite, just need to commit"

git config user.email "chrome-extension@email.com"
git config user.name "chrome-extension"

# commit changes and push
git add -A
git commit -m "Switch to ElasticSuite"
git push
rm -rf "$tmp_git_dir" # clean up
echo "Commited and all done..."
fi
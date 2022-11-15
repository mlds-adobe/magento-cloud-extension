# shellcheck shell=bash
: || source lib.sh # trick shellcheck into finding certain referenced vars

echo "Switching to ElasticSuite..."

tmp_git_dir="$(mktemp -d)"

git clone --branch "$environment" "$project@git.demo.magento.cloud:$project.git" "$tmp_git_dir"

cd "$tmp_git_dir"
config_file="$tmp_git_dir"/app/etc/config.php
env_file="$tmp_git_dir"/.magento.env.yaml
app_file="$tmp_git_dir"/.magento.app.yaml
service_file="$tmp_git_dir"/.magento/services.yaml

perl -i -pe "s/elasticsearch7/elasticsuite/" "$env_file"
perl -i -pe "s/opensearch:\r\n    type: opensearch:1.2\r\ndisk: 1024/opensearch:\r\n    type: opensearch:1.2\r\n    disk: 1024\r\n        plugins:\r\n            - analysis-icu\r\n            - analysis-phonetic/" "$service_file"
perl -i -pe "s/\"paradoxlabs\/tokenbase\": \"4.5.1.x-dev\"/\"paradoxlabs\/tokenbase\": \"4.5.1.x-dev\", \r\n\"smile\/elasticsuite\": \"\^2.10\"/" "$service_file"
echo "CONFIG__DEFAULT__SMILE_ELASTICSUITE_CORE_BASE_SETTINGS__ES_CLIENT__SERVERS: 'opensearch.internal'" >> $app_file



echo "Switched to ElasticSuite"

git config user.email "chrome-extension@email.com"
git config user.name "chrome-extension"

# commit changes and push
git add -A
git commit -m "Switch to ElasticSuite"
git push
rm -rf "$tmp_git_dir" # clean up

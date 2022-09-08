BASE_URL='https://dudushy.github.io/CRUD.ng/'
PROJECT_NAME='CRUD'
COMMIT_MESSAGE='`build.sh`'

ng build --base-href $BASE_URL
npx angular-cli-ghpages --dir=dist/$PROJECT_NAME --message=$COMMIT_MESSAGE

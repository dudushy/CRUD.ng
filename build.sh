BASE_URL='https://dudushy.github.io/CRUD.ng/'
PROJECT_NAME='CRUD'

ng build --base-href $BASE_URL
npx angular-cli-ghpages --dir=dist/$PROJECT_NAME

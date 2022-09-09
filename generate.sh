#! title preset
TITLE='[generate.sh]'
echo $TITLE 'start'

#* main
echo $TITLE 'run'
ng generate component test
ng generate component login
ng generate component create
ng generate component read
ng generate component update
ng generate component delete
ng generate service services/global-variables

echo $TITLE 'finished.'

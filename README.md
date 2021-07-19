# 80th FOOD Store (old vintage Candies)

## Resumen
- Es un proyecto creado en React para mi Portfolio , el mismo esta hecha en React.
- De motor de base de dato esta hechor en firebase
  - En el archivo de "./src/firebase/index.js" recuerde cambiar sus credenciales. Les mias estaran vencidas o pronto a vencer
  - Dentro de la carpeta firebase tiene 2 archivos para importar datas a la base de datos:
    - uno desde la api de mercado libre.
    - el otro desde un objtos
- Tiene configurado una api para mandar mail , esta API es SendGrid by twlio.
  - Para usar la misma luego de clonarla hay que crear un archivo en la raiz del proyecto "sendgrid.env"
    - Recuerde crear su cuenta y validar su email para que pueda usar esta funcionalidad
    -ej en la raiz ejecutar --> echo export SENDGRID_API_KEY='YOUR_API_KEY ' >> endgrid env

##Nota deje desactivada sendgrid en './src/sendgrid/index.js' para que pueda correr si no hacen los pasos del mail

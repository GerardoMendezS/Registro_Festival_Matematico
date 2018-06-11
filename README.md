# Registro_Festival_Matematico
Códigos utilizados para realizar el registro de los voluntarios en el Festival Matemático

Este sistema de registro se desarrolló en la Sección de Comunicación de la Ciencia del Instituto de Matemáticas, UNAM por Gerardo Rubén Méndez Sánchez (gerardmen04@gmail.com), para automatizar el registro y envío de constancias de los voluntarios del Festival Matemático. 

La siguiente es una referencia de los pasos a seguir para realizar un sistema de registro para eventos masivos. Solo se explica a grandes rasgos el proceso y se incluye el código desarrollado como referencia.

1.- Se crea un formulario en Google Forms para recabar los datos de los participantes. En nuestro caso se pide a los voluntarios los datos que son relevantes para nuestro evento como nombre, edad, escolaridad y el horario en el que quieren participar en el evento.

2.- Se crea una hoja de cálculo con los datos recabados en Google Sheets. Este proceso lo hace en automático el software de Google, desde la sección de respuestas del formulario.

3.- Se crean nuevas hojas en la hoja de cálculo, una donde se recaban los datos que se necesitan para el registro de cada voluntario y mediante un script se genera y envía un código QR para confirmar la inscripción en el evento. En otra de las hojas se hace un resumen de para contar el número de voluntarios inscritos por día y horario, el número de voluntarios capacitados, el número y talla de las playeras que se necesitan, entre otros detalles importantes para la gestión del evento. También se crean hojas para registrar la capacitación, la asistencia al Festival y para recabar los datos que se necesitan para elaborar la constancia de cada voluntario. Todas estas hojas se crean a partir de las necesidades de cada evento, pero se llenan mediante scripts creados en el editor de secuencias de comandos que incluye las Google Sheets. 

4.- Se exportan los datos  necesarios para el registro al servicio de  Firebase para que se tener una base de datos que se actualiza en todos los dispositivos en tiempo real, sin tener que desarrollar una propia en en algún otro servicio. Se optó por esta opción porque el servicio gratutito de datos que brindan es más que suficiente para las necesidades del Festival. La exportación de los datos se vuelve a hacer mediante Google App Script.

5.- Se desarrolló una app para Android y iOS, mediante Apache Cordova la cual lee el código QR enviado a los voluntarios y registra el día y la hora de entrada o salida en la base de Firebase. Este proceso se realiza durante las capacitaciones y el evento para tener un registro completo de las horas de participación de cada voluntario, lo cual es muy relevante en el Festival.

6.- Ya que se cuenta con el registro, se pueden importar los datos de entrada y salida de cada participante a la hoja de datos original, para concentrar la información completa de cada voluntario y así generar las constancias. También se escribió un script para este proceso.

7.- Después de que se realiza el evento, y ya se tienen concentradas los datos de los voluntarios, se empieza el envío de las constancias de participación de forma automática. 

Este sistema ha reducido el tiempo en que se realiza el proceso de registro de voluntarios, debido a que anteriormente se registraba en listas la asistencia y después se capturaban los datos. 

En el envío de constancias se logra la entrega a todos los participantes y un ahorro en papel, porque antes gran parte de los voluntarios no pasaba a recogerlas.

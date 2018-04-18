<h1>Gestion de las sesiones a nuestra web, y creando nuestro BackOffice.</h1>
<p>se crea una backOffice donde un administrador pueda acceder y añadir nuevos viajes en tiempo de ejecución.
<h3>Condiciones.</h3>
<ul>
<li>Crearemos una nueva vista que se llame Admin donde crearemos la funcionalidad suficiente para añadir los nuevos viajes
y recuperar el listado de los existentes.
<li>La Tabla se denominara travels y dispondrá de los siguientes campos:
<ul>
  <li>ID
  <li>TRAVEL
  <li>DESCRIPTION
  <li>ACTIVE(true, false)
  <li>PRICE
  <li>TYPE (FAMILY, SINGLE, ADVENTURE, ETC)..
 </ul>
<li>Debemos gestinar las sesiones de nuestros usuarios diferenciando tres tipos de usuarios: 
<ul>
<li>*ANONIMO -> Tiene accesso: front, vista descripción viaje, error404, login, register. 
<li>*USER -> Tiene accesso: front, vista descripción viaje, error404, login, register. 
<li>*ADMIN ->Tiene accesso: front, vista descripción viaje, error404, login, register y además a la nueva vista que se
denomine admin
</ul>
</ul>

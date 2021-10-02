<HTML>

<HEAD>


</HEAD> 
<BODY>
<?php
include 'api.php';

$MSISDN_p = $_POST['MSISDN_p'];
$_SESSION['a'] = $MSISDN_p;

$password = $_POST['password'];
$_SESSION['b'] = $password;
//$password = $_SESSION['b'];


$encrypted_password = sha1($password);
echo "clave sha-1 ";
echo $encrypted_password;
echo nl2br(" \n ");

// llamado a las  funciones
SendPassword();
GetDetail();

$result = GetDetail();
//echo $result[0];
//echo $result[1];
//echo $result[3];
if ($result[0]== NULL)
{
    echo 'ALGO A SALIDO MAL POR FAVOR CONTACTA CON EL SOPORTE ';

}

// IF para validar suscripcion
if ($result[0] == 100)
{
    echo 'debes activar tu cuenta para ver la obra      no suscrito ';

}
if ($result[0] == 50 && $result[1] == 0 && $result[2] == 0)
{
    echo 'RECARGA TU CUENTA PARA PODER DISFRUTAR  TU OBRA              suscrito , sin cobro   ';

}

if ($result[0] == 50 && $result[1] == 0 && $result[2] == 1)
{
    $alert = 0;
    echo 'PERMITIR ACCESO             suscrito , con cobro   ';

}

if ($result[0] == 50 && $result[1] == 1 && $result[2] == 1)
{
    $alert = 0;
    echo 'PERMITIR ACCESO           suscrito , en T&B ';

}
?>

<form action="index.php" >
 
  <input type="submit" value="INGRESE NUEVAMENTE  SU NUMERO ">
</form> 
</BODY> 
</HTML>

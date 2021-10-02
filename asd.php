<?php // FUNCION PARA ENVIAR CONTRASE;A
function SendPassword()
{

    try
    {
        // Este bloque contien el código que pretendemos ejecutar, pero que,
        // llegado el
        

        $MSISDN_p = $_SESSION['a'];
        // try catch inicializador
        // declaramos variables  de configuracion (siempre las mismas) msisdn =  valor introducido por cliente numero telefono
        $ZedPartner = "ce2b8ef4-c958-406e-abe0-d923badb74c1";
        $AccessKey = "Usian3qb2a";
        $MSISDN = $MSISDN_p;
        $CountryCode = "A38";
        $CarrierCode = "73002";
        $ProductCode = "25";
        //  introducimos nuestras variables en un arreglo para poder hacer el request
        $params = array();
        $params["ZedPartner"] = $ZedPartner;
        $params["AccessKey"] = $AccessKey;
        $params["MSISDN"] = $MSISDN;
        $params["CountryCode"] = $CountryCode;
        $params["CarrierCode"] = $CarrierCode;
        $params["ProductCode"] = $ProductCode;
        //creamos un nuevo soapclient con el url raiz del service agregandole (?wsdl) al final para poder hacer parcel
        $soapclient = new SoapClient('http://pro.wsam.zed.com/WsGenericBilling/WsGenericBilling.asmx?wsdl');
        $response = $soapclient->SendPassword($params);

        // json decode convertir objeto a string
        $convert_stri = json_decode(json_encode($response) , true);

        // usamos para obtener GetDetailResult (el objeto resultado de reponde) var_dump($convert_stri);
        

        // convertir formato utf16 a utf 8 y entramos a GetDetailResult
        $convert_utfe = mb_convert_encoding($convert_stri['SendPasswordResult'], "UTF-16", "UTF-8");

        // usamos el simplexml_load_string para comvertir el sfting utf8  a un objeto xml simple
        $xml = simplexml_load_string($convert_utfe);

        //entramos a los tags  dentro delos objetos
        $Codes = $xml->Code;
        $Description = $xml->Description;

        //usar un for echa para entra dentro del obejto status luego atributo code
        //foreach($xml->Status[0]->attributes() as $a => $b) {
        // echo $a,'="',$b;
        //  $Code = $b;
        //}
        // imprimir variables
        echo $Codes;

        echo $Description;
        echo nl2br(" \n ");

        return array(
            $Codes,
            $Description
        );

    }
    catch(Exception $e)
    {
        $Codes = 9;
        $Description = 9;
        return array(
            $Codes,
            $Description
        );
    }

}

// VERIFICAR PAGOS
function GetDetail()
{

    try
    {
        // Este bloque contien el código que pretendemos ejecutar, pero que,
        // llegado el caso, podría fallar, lanzando una exxcepción.
        

        $MSISDN_p = $_SESSION['a'];
        $ZedPartner = "ce2b8ef4-c958-406e-abe0-d923badb74c1";
        $AccessKey = "Usian3qb2a";
        $MSISDN = $MSISDN_p;
        $CountryCode = "A38";
        $CarrierCode = "73002";
        $ProductCode = "25";

        $params = array();
        $params["ZedPartner"] = $ZedPartner;
        $params["AccessKey"] = $AccessKey;
        $params["MSISDN"] = $MSISDN;
        $params["CountryCode"] = $CountryCode;
        $params["CarrierCode"] = $CarrierCode;
        $params["ProductCode"] = $ProductCode;
        $soapclient = new SoapClient('http://pro.wsam.zed.com/WsGenericBilling/WsGenericBilling.asmx?wsdl');
        $response = $soapclient->GetDetail($params);

        // json decode convertir objeto a string
        $convert_strin = json_decode(json_encode($response) , true);

        // convertir formato utf16 a utf 8 y entramos a GetDetailResult
        $convert_utf = mb_convert_encoding($convert_strin['GetDetailResult'], "UTF-16", "UTF-8");

        // usamos el simplexml_load_string para comvertir el sfting utf8  a un objeto xml simple
        $xml = simplexml_load_string($convert_utf);

        //entramos a los tags  dentro delos objetos
        $billedi = $xml->Billed;
        $TryAndBuyi = $xml->TryAndBuy;

        $Code = $xml->Status[0]
            ->attributes();

        $LastPasswordi = $xml->LastPassword;
        //echo $Code;
        //echo $billedi;
        //echo $TryAndBuyi;
        return array(
            $Code,
            $TryAndBuyi,
            $billedi,
            $LastPasswordi
        );

    }
    catch(Exception $e)
    {

        // Este bloque de código sólo se ejecuta si se ha producido una
        // excepción al intentar ejecutar el bloque previo.
        $billedi = 9;
        $TryAndBuyi = 9;
        $Code = 9;

        return array(
            $Code,
            $billedi,
            $TryAndBuyi
        );

    }

}
?>

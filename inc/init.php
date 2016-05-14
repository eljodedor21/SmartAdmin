<?php
/*
 *  Inicialização da página (inc/init.php)
 * 
 */
ini_set("display_startup_errors","1");

// server should keep session data for AT LEAST 1 hour
#ini_set('session.gc_maxlifetime', 3600);

// each client should remember their session id for EXACTLY 1 hour
#session_set_cookie_params(3600);

date_default_timezone_set('Europe/Lisbon');


if (session_id() == '')
    session_start();


// setting language variable
if (!isset($_SESSION['lang'])) {
    $_SESSION['lang'] = 'pt';
}
require_once("lang/lang_".$_SESSION['lang'].".php");

require_once("lib/config.php");
?>
<?php 

if(isset($_GET['page'])) {

    $id = $_GET['page'];


    switch($id)
    {
        
        case 'contact' :
            include('Application/Content/contact.html');
        break;

        case 'mywork' :
            include('Application/Content/mywork.html');
        break;

        
        }
}else {
    include('Application/Content/home.html');
}
/*
Login Beispielurl:

    Request URL: http://localhost:8080/connection/login?username=admin&password=iswi223<<&backendSid=gnuhealth1
    Login successfull (Rückgabe als Json): "E9Wk5ENyde7Z8B5YpjraCbDo4qyklB8xRXfywG5uf1Y\\u003d"
Login unsuccessfull due to wron username or password (Rückgabe als Json): "false"


Logout Beispielurl:
    Request URL: http://localhost:8080/connection/logout?username=admin&session=SESSION_VARIABLE
    Logout successfull (Json): "true"
Logout uncussefull (Json): "false"
*/


Ext.define('NeqMobile.model.UserLoginData', {
    extend: 'Ext.data.Model',
    fields: [ 'username', 'password', 'backendSid' ],

    proxy: {
        type: 'rest',
        url: 'http://192.168.178.24:8080/connection/login?username=admin&password=iswi223%3C%3C&backendSid=gnuhealth1',
        reader: {
            type: 'json',
            root: 'results'
        }
    }
});
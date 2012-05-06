
Ext.define('NeqMobile.model.VitalData', {
    extend:'Ext.data.Model',
    config:{
        fields:[
            'user_id',
            'bmi',
            'temprature',
            'blood_pressure',
            'fluid_balace',
            {name:'date', type:'date', dateFormat:'d-m-Y'}

        ],
        proxy:{
            type:'neqproxy',
            customUrl:'/vitaldata'
        }

    }
});
Ext.define('NeqMobile.model.Patient', {
        extend:'Ext.data.Model',
        config:{
            fields:['id', 'rec_name', {name:'dob', type:'date', dateFormat:'time'},
                'diseases', 'latestDiagnoseRecName', 'primary_care_doctor_name', 'primary_care_doctor_rec_name','photo',
                {
                    name:'sex',
                    convert:function (value, record) {
                        var sex = value;
                        if (sex == 'f') {
                            sex = 'female';
                        } else {
                            sex = 'male';
                        }

                        return sex;
                    }
                }
            ],
            proxy:{
                type:'neqproxy',
                customUrl:'/patient',
                extraParams:{ownonly:true}
            },
            associations:[
                {
                    type:'hasMany',
                    model:'NeqMobile.model.DiagnoseOverview',
                    primaryKey:'id',
                    foreignKey:'primary_care_doctor',
                    filterProperty:'primary_care_doctor_name',
                    autoLoad:true
                    // associationKey:'diseases'
                }//,
                //{
                //    type:'hasOne',
                //    model:'NeqMobile.model.PatientPicture'//,
                    //primaryKey:'id',
                    //foreignKey:'id',
                    //filterProperty:'',
                    //autoLoad: true
                    // associationKey:''
                //}

            ]
        }
    }
);




Ext.define('NeqMobile.controller.PatientLab', {
    extend:'Ext.app.Controller',
    models:['LabDetail'],
    requires:['NeqMobile.model.LabDetail'],
    config:{
        refs:{
            labTestRequestOverlay:'createlabtestrequestoverlay',
            labTestTypesList:'createlabtestrequestoverlay selectfield',
            patientlab:'patientlab'
        },
        control:{
            'patientlab #x-createNewLabRequestButton':{
                tap:'onCreateNewLabRequestTap'
            },
            'createlabtestrequestoverlay #x-submitLabTestRequestButton':{
                tap:'onSubmitLabTestRequestTap'
            },

            'patientview patientlab #labresult':{beforeitemexpand:'showLabResultDetail'}
        }
    },
    showLabResultDetail:function (expandfeature, dw, index, item, labrecordoverview, e, eOpts) {

        console.log('showlabresultdetail called');
        var me = this;
        //Hinweis an Joohee!
        // Du musst die zeile expandfeature.expand aufrufen, aber vorher musst du
        // die variable itemrecord durch eine model instanz der resultdetails ersetzen
        // also z.b. itemrecorddetail = richtigeritemrecord;
        // das ganze musst du im callback der load function machen
       // labrecordoverview = Ext.create('NeqMobile.store.LabDetail');

        var labtestresultid = labrecordoverview.get('test');

        var labdetailmodel = Ext.ModelMgr.getModel('NeqMobile.model.LabDetail');

        labdetailmodel.load(undefined, {
            success:function (labdetailrecord) {

                console.log('lets show the lab detail criteria store');
               var mystore = labdetailrecord.labtestcriteria();

                var detailinstance = Ext.create('NeqMobile.view.patient.detail.LabDetail',
                    {
                        record:labdetailrecord
                    });

                detailinstance.down('#labdetailtable').setStore(mystore);



//                var labdetailstore = Ext.data.StoreManager.lookup('labdetails');
//                if (!labdetailstore) {
//                    labdetailstore = Ext.create('NeqMobile.store.LabDetail');
//                }
//
//                labdetailstore.getProxy().setExtraParam('test',labtestresultid);
//                labdetailstore.load({
//                    callback:function (records, operation, success) {
//                        var response = operation.getResponse();
//                        var responseObject = Ext.decode(response.responseText);
//                        me.patientview.down('patientlab').loadLabDetails(responseObject);
//                    },
//                    scope:this
//                })
                expandfeature.expand(dw, detailinstance, item);
            },
            params:
            {
                // hier kannst du noch parameter an die url übergeben
                // das ist so ähnlich wie dieses setExtraParams() was wir sonst genutzt haben.
                // z.B; labtest_id: 1    o.ä. ,

                labTestId:labtestresultid
            }   ,
            scope:me
        });

    },

    onSubmitLabTestRequestTap:function (button, e, eOpts) {
        var me = this;

        var labTestRequestOverlay = this.getLabTestRequestOverlay();
        var fieldSet = labTestRequestOverlay.getComponent('createLabtestRequestFieldSet');
        var selectField = fieldSet.getComponent(0);
        var datePickerField = fieldSet.getComponent(1);
        var userinfo = NeqMobile.manager.Session.getSession().get('userinfo');
        var patient_id = NeqMobile.manager.Session.getCurrentPatient();
        var state = 'draft';
        var rec_name = selectField.getValue();
        var request_type_id = selectField.getRecord().get('id');
        var doctor_rec_name = userinfo.get('name');
        var doctor_id = 1;
        var date = datePickerField.getValue().getTime();
        var newRequest = Ext.create('NeqMobile.model.LabTestRequest', {
            patient_id:patient_id,
            state:state,
            rec_name:rec_name,
            doctor_rec_name:doctor_rec_name,
            date:date
        });
        newRequest.getProxy().setExtraParam('patient_id', patient_id);
        newRequest.getProxy().setExtraParam('request_type_id', request_type_id);
        newRequest.getProxy().setExtraParam('doctor_id', doctor_id);
        newRequest.getProxy().setExtraParam('date', date);
        newRequest.save({
            success:function (newRequest) {
                console.log("request successfully saved");
                var labtestrequeststore = Ext.data.StoreManager.lookup('labtestrequests');
                if (!labtestrequeststore) {
                    labtestrequeststore = Ext.create('NeqMobile.store.LabTestRequests');
                }

                labtestrequeststore.getProxy().setExtraParam('patientId', patient_id);
                labtestrequeststore.load({
                    callback:function (records, operation, success) {
                        var response = operation.getResponse();
                        var responseObject = Ext.decode(response.responseText);
                        me.getPatientlab().loadLabTestRequests(responseObject);
                    },
                    scope:this
                });
            },
            failure:function (response, opts) {
                console.log('server-side failure with status code ' + response.status);
                console.log('login failed - server not reachable')
                Ext.Msg.alert('Server not responding', 'status code: ' + response.status + '<br>' +
                    'It occured a technical connection problem. Possible causes are:<br><br>' +
                    '1. The server ist not responding - check your network connection or the connection settings of the app (ask the administrator.)', Ext.emptyFn);

                failureCallback.apply(scope);
            }

        });
        labTestRequestOverlay.setHidden(true);
    },
    onCreateNewLabRequestTap:function (button, e, eOpts) {
        var labTestRequestOverlay;
        if (this.getLabTestRequestOverlay()) {
            labTestRequestOverlay = this.getLabTestRequestOverlay();
        } else {
            labTestRequestOverlay = Ext.create('NeqMobile.view.patient.create.CreateLabTestRequest');
        }
        var doctorTextField = (labTestRequestOverlay.getComponent('createLabtestRequestFieldSet')).getComponent('doctorNameField');
        doctorTextField.setValue(((NeqMobile.manager.Session.getSession()).get('userinfo')).get('name'));
        this.getPatientlab().setMasked({ xtype:'loadmask', message:'loading parameters'});

        var labtesttypestore = Ext.data.StoreManager.lookup('labtesttypes');
        if (!labtesttypestore) {
            labtesttypestore = Ext.create('NeqMobile.store.LabTestTypes');
        }
        labtesttypestore.load({
            callback:function (records, operation, success) {
                this.getLabTestTypesList().setStore(labtesttypestore);
                this.getPatientlab().setMasked(false);
                this.overlay = Ext.Viewport.add(labTestRequestOverlay);
                this.overlay.show();
            },
            scope:this
        });
    }
});
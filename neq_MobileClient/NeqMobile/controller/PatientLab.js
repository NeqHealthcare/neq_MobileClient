Ext.define('NeqMobile.controller.PatientLab', {
    extend:'Ext.app.Controller',
    config:{
        models:['LabDetail'],
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

            'patientview patientlab #labresult':{beforeitemexpand:'onLabResultTap'}
        }
    },
    onLabResultTap:function (expandfeature, dw, index, item, labrecordoverview, e, eOpts) {

        this.showLabResultDetail(dw, labrecordoverview.get('id'),item);
    },
    showLabResultDetail:function (dw, labresultid,item) {

       console.log(dw);
        // console.log(dw.myFeatures().getCount());
      //  console.log(dw.expandfeature);
        var me = this;
        var labdetailmodel = Ext.ModelMgr.getModel('NeqMobile.model.LabDetail');

        labdetailmodel.load(undefined, {
            params:{
                labTestId:labresultid
            },
            scope:me,
            success:function (labdetailrecord) {
                var criteriastore = labdetailrecord.labtestcriteria();
                var detailinstance = Ext.create('NeqMobile.view.patient.detail.LabDetail',
                    {
                        record:labdetailrecord
                    });
                detailinstance.down('#labdetailtable').setStore(criteriastore);
                dw.expand(dw, detailinstance, item);
            }
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
        var doctor_id = userinfo.get('physician_id');
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
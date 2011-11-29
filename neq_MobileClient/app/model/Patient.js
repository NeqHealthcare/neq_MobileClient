Ext.define('NeqMobile.model.Patient', {
			extend : 'Ext.data.Model',
			fields : ['id','doctor', 'firstName','lastName','age','sex','other','disease','station','maritalstatus'],

			proxy : {
				type : 'ajax',
				url : 'data/Patients.json',
				reader : {
					type : 'json',
					root : 'results'
				}
			}
		});
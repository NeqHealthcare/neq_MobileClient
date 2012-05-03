/*
{"success":"true", "data":[
    {"title":"Tough Home Life for Toddlers Tied to Obesity (CME/CE)", "link":"http://www.medpagetoday.com/Pediatrics/Obesity/32192", "description":"(MedPage Today) -- Girls who face multiple social stressors at home as toddlers are more likely to be obese by age 5, researchers found.", "pubDate":1334588625000},
    {"title":"Choking for Fun Tied to Other Dicey Teen Acts (CME/CE)", "link":"http://www.medpagetoday.com/Pediatrics/GeneralPediatrics/32188", "description":"(MedPage Today) -- Youth participation in the \"choking game\" as a means of getting high is often accompanied by other risky behaviors, a survey of eighth graders revealed.", "pubDate":1334548860000}
]}
*/
Ext.define('NeqMobile.model.DoctorNews', {
    extend:'Ext.data.Model',
    config:{
        fields:[
            'title',
            'link',
            'description',
            {name:'pubDate', type:'date', dateFormat:'time'}
        ],
        proxy:{
            type:'neqproxy',
            customUrl:'/news/feed'
        }

    }
});
/*{"success":"true", "data":[
 {"topic":"Latest Medical News", "url":"http://www.medpagetoday.com/rss/Headlines.xml", "id":1},
 {"topic":"Allergy \u0026 Immunology", "url":"http://www.medpagetoday.com/rss/AllergyImmunology.xml", "id":2},
 {"topic":"Infectious Disease", "url":"http://www.medpagetoday.com/rss/InfectiousDisease.xml", "id":3},
 {"topic":"Surgery", "url":"http://www.medpagetoday.com/rss/Surgery.xml", "id":4},
 {"topic":"Medical News Blogs", "url":"http://www.medpagetoday.com/rss/Blogs.xml", "id":5}
 ]}
 */
Ext.define('NeqMobile.model.DoctorNewsTopic', {
    extend:'Ext.data.Model',
    config: {
        fields: [
            'topic',
            'url',
            'id'
        ],
        proxy: {
            type:'neqproxy',
            customUrl:'/news/topics'
        }
    }
});
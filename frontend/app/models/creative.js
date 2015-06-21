import DS from 'ember-data';

export default DS.Model.extend({
  name:                   DS.attr('string'),
  mime_type:              DS.attr('string'),
  meta_data:              DS.attr('string'),
  ad_tag_code:            DS.attr('string'), 
  dimensions:             DS.attr('string'),
  url:                    DS.attr('string'),
  etag:                   DS.attr('string'),
  extension:              DS.attr('string'),
  creative_landing_page:  DS.attr('string'),
  creative_type:          DS.attr('string'),
  width:                  DS.attr('string'),
  height:                 DS.attr('string'),
  main_creative_id:       DS.attr('number'),
  created_at:             DS.attr('date'),
  updated_at:             DS.attr('date'),

  flight:                 DS.belongsTo('flight')
});
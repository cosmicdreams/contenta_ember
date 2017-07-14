import DS from 'ember-data';

export default DS.Model.extend({
    reviews: DS.hasMany('reviews'),
    title: DS.attr('string'),
    numberOfServices: DS.attr('string'),
    createdAt: DS.attr('string'),
    updatedAt: DS.attr('string'),
    isPromoted: DS.attr('boolean'),
    isPublished: DS.attr('boolean'),
    path: DS.attr('string'),
    difficulty: DS.attr('string'),
    ingredients: DS.attr('string'),
    instructions: DS.attr('string'),
    internalId: DS.attr(),
    preparationTime: DS.attr('string'),
    totalTime: DS.attr(),
    //category: DS.belongsTo('category'),
    //image: DS.belongsTo('file'),
    tag: DS.hasMany('tag')
});


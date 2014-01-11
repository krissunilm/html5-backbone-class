

$(".navbar-brand").addClass("red");

var Person = Backbone.Model.extend({
    defaults: {
        name: 'Guest User',
        age: 23,
        occupation: 'worker'
    }
});


var PeopleCollection = Backbone.Collection.extend({
    model: Person
});

var peopleCollection = new PeopleCollection([
    {
        name: 'Mohit Jain',
        age: 26
    },
    {
        name: 'Taroon Tyagi',
        age: 25,
        occupation: 'web designer'
    },
    {
        name: 'Rahul Narang',
        age: 26,
        occupation: 'Java Developer'
    }
]);

var JumbotronView = Backbone.View.extend({
    el: ".jumbotron",
    initialize: function(){
        person = new Person();
//        this.loggedInView = new LoggedInView({ model: person });
     //   this.loggedInView = new LoggedInView({ collection: peopleCollection });
     //   this.render();
    },
    events:{
        "click #learnMore": "learnMore"
    },
    learnMore: function(){
        alert("learnMore clicked!");
//        this.loggedInView.render();
    }
});

jumboTronView = new JumbotronView();

//The View for a Person
var PersonView = Backbone.View.extend({
    tagName: 'li',

    template: Handlebars.compile($('#personTemplate').html()),

    initialize: function(){
        this.render();
    },

    render: function(){
        this.$el.html( this.template(this.model.toJSON()));
    }
});


var Router = Backbone.Router.extend({
    routes: {
        '': 'index',
        'newpage/:id': 'newpage'
    },
    index: function(){
        alert("index!")
    },
    newpage: function(id){
        alert("newpage: "+id);
    }
});



var LoggedInView = Backbone.View.extend({
    el: ".loggedIn",
    initialize: function(){
//        this.render();
    },
    render: function(){
        this.collection.each(function(person){
            var personView = new PersonView({ model: person });
            this.$el.append(personView.el);
        }, this);
//        this.$el.html( this.model.get('name') + this.model.get('age') + this.model.get('occupation'));
    }
});

new Router();
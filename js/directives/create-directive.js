angular.module('mdmUI.directives',[])
.directive('createEntity', function($compile) {

    var directive = {};
    directive.restrict = 'E';
    directive.templateUrl = "views/create-entity.html";
    directive.link = function(scope, element, attrs) {


    };
    return directive;
})

.directive("field",function($compile) {

    var directive = {};
    directive.restrict = 'E';
    directive.templateUrl = "views/field.html";
    directive.link = function(scope, element, attrs) {

	    scope.addField = function () {
	        var el = $compile( "<field></field>" )( scope );
	        element.parent().append( el );
	    };
    };

    return directive;
})

.directive("foreignKey",function($compile) {
    var directive = {};
    directive.restrict = 'E';
    directive.templateUrl = "views/foreign-key.html";
    directive.link = function(scope, element, attrs) {

	    scope.addForeignKey = function () {
	        var el = $compile( "<foreign-key></foreign-key>" )( scope );
	        element.parent().append( el );
	    };
    };

    return directive;
})

.directive("entityIndex",function($compile) {
    var directive = {};
    directive.restrict = 'E';
    directive.templateUrl = "views/entity-index.html";
    directive.link = function(scope, element, attrs) {

	    scope.addEntityIndex = function () {
	        var el = $compile( "<entity-index><entity-index>" )( scope );
	        element.parent().append( el );
	    };
    };

    return directive;
})
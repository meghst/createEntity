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
        console.log("here")
        names=$("select[name=table-name]")
        for(var i in scope.tableNames)
        {
                value=scope.tableNames[i]
                names.append("<option value="+value+">"+value+"</option>");
                console.log(value)
        }    
	    scope.addForeignKey = function () {
	        var el = $compile( "<foreign-key></foreign-key>" )( scope );
            $.each(scope.tableNames,function(key,value){
                    el.append("<option value="+value+">"+value+"</option>");
                 })
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
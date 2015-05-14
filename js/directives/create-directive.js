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
            el.attr("id","col"+scope.columnId)
            console.log(el.find("[name=colName]").bind("change",function()
            {   
                $("[name=colName]").each(function(){
                    scope.colNames.push($(this).value())
                })
                console.log(scope.colNames)
            }));
	        element.parent().append( el );
            scope.columnId++;
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
            el.attr("id","fk"+scope.fkId)
            element.parent().append( el );
            scope.fkId++;
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
            el.attr("id","index"+scope.indexId)
	        element.parent().append( el );
            scope.indexId++;
	    };
    };

    return directive;
})
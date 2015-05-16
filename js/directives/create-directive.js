angular.module('mdmUI.directives',[])
.directive('createEntity', function($compile) {

    var directive = {};
    directive.restrict = 'E';
    directive.templateUrl = "views/create-entity.html";
    directive.link = function(scope, element, attrs) {

        scope.addField = function () {
            var el = $compile( "<field></field>" )( scope );
            el.attr("id","col"+scope.columnId)
            element.find("field").last().append( el );
            scope.columnId++;
        };

        scope.addForeignKey = function () {

            var el = $compile( "<foreign-key></foreign-key>" )( scope );
            var temp=el.attr("id","fk"+scope.fkId)
            element.find("foreign-key").last().append( el );
            scope.fkId++;
        };

        scope.addEntityIndex = function () {
            var el = $compile( "<entity-index><entity-index>" )( scope );
            el.attr("id","index"+scope.indexId)
            element.find("entity-index").last().append( el );
            scope.indexId++;
        };


    };
    return directive;
})

.directive("field",function($compile) {

    var directive = {};
    directive.restrict = 'E';
    directive.templateUrl = "views/field.html";
    directive.link = function(scope, element, attrs) {  
    };

    return directive;

})

.directive("foreignKey",function($compile) {
    var directive = {};
    directive.restrict = 'E';
    directive.templateUrl = "views/foreign-key.html";
    directive.link = function(scope, element, attrs) {
        
        element.find("[name=ftable]").change(function(){
            var table=$(this).val()
            console.log(table)
            if(table=="")
            {
                console.log("heres")
                element.find("[name=fkey]").val("").attr("disabled","disabled")
                return;
            }
            var fkey=element.find("[name=fkey]").attr("disabled",false)
            fkey.empty()
            $.each(scope.colNames[table],function(key,value){
                fkey.append("<option value="+value+">"+value+"</option>")
            })
        })    
    };

    return directive;
})

.directive("entityIndex",function($compile) {
    var directive = {};
    directive.restrict = 'E';
    directive.templateUrl = "views/entity-index.html";
    directive.link = function(scope, element, attrs) {
    };

    return directive;
})
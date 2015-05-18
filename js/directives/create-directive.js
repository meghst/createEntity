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

        scope.generateModel = function () {

            scope.model={};
            //get name
            var name=$("[name=name]").val()

            //get columns
            var columns=[]
            $("field").each(function(){
                var column=$(this)
                var primary_key=column.find("[name=primary_key]").is(":checked")
                var required=column.find("[name=required]").is(":checked")
                var name=column.find("[name=colName]").val()
                var type=column.find("[name=colType]").val()
                console.log("pk: ",primary_key," required : ",required," name : ",name," type: ",type)
                var col={
                    "primary_key":primary_key,
                    "required":required,
                    "name":name,
                    "type":type
                }
                columns.push(col)
            })

            //get foreign_keys
            var foreign_keys=[]
            $("foreign-key").each(function(){
                var foreign_key=$(this)
                var foreign_table=foreign_key.find("[name=ftable]").val();
                var foreign_key_name=foreign_key.find("[name=fname]").val();
                var local_ref=foreign_key.find("[name=lkey]").val();
                var foreign_ref=foreign_key.find("[name=fkey]").val();
                if(foreign_table && foreign_ref && local_ref)
                {
                    var fkey={
                        "foreign_table":foreign_table,
                        "foreign_key_name":foreign_key_name,
                        "local_ref":local_ref,
                        "foreign_ref":foreign_ref
                    }
                    foreign_keys.push(fkey)
                }
                
            })

            scope.model={"tables":[{
                "columns":columns,
                "foreign_keys":foreign_keys,
                "entity_indexes":[],
                "name":name
            }]}
            console.log(scope.model)

        }


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

        element.find("[name=lkey]").click(function(){

            var localKey=$(this)
            localKey.empty();
            localKey.append("<option value=''></option>");

            $("[name=colName]").each(function(el){
                value=$(this).val()
                localKey.append("<option value="+value+">"+value+"</option>")
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

        element.find("[name=col]").click(function(){

            var column=$(this)
            column.empty()
            column.append("<option value=''></option>")
            $("[name=colName]").each(function(el){
                value=$(this).val()
                column.append("<option value="+value+">"+value+"</option>")
            })

        })
    };

    return directive;
})
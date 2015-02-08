/**
 * provokeInheritance()
 * This procedure provokes inheritance between the specified objects
 * @author Sergio Baena Lopez
 * @version 17
 * @param {String} nameSuperClass the superclass' name
 * @param {String} nameSubClass the subclass' name
 */
$.provokeInheritance = function(nameSuperClass, nameSubClass) {
    eval(nameSubClass + ".prototype = new " + nameSuperClass + ";"); 
    var forStatement = "for( var staticAttrOrMethod in " + nameSuperClass + ") {";
    forStatement += nameSubClass + "[staticAttrOrMethod] = " + nameSuperClass + "[staticAttrOrMethod];";
    forStatement += "}";
    eval(forStatement);
}
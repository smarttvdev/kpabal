tecdocToCatPort = {
    url : "https://webservice.tecalliance.services/pegasus-3-0/services/TecdocToCatDLB.jsonEndpoint",

    createXmlHttpRequest : function () {
        if (window.XMLHttpRequest) {
            return new XMLHttpRequest();
        } else if (window.ActiveXObject) {
            return new ActiveXObject("Microsoft.XMLHTTP");
        } else {
            throw "XMLHttpRequest not available";
        }
    },

    /*  Prototype JavaScript framework, version 1.5.1_rc2
     *  (c) 2005-2007 Sam Stephenson
     *
     *  Prototype is freely distributable under the terms of an MIT-style license.
     *  For details, see the Prototype web site: http://www.prototypejs.org/
     *
     /*--------------------------------------------------------------------------*/
    toJSON: function(object) {
        var type = typeof object;
        switch (type) {
            case 'undefined':
            case 'function':
            case 'unknown': return;
            case 'object': break;
            default: return object.toString();
        }
        if (object === null) return 'null';
        if (object.ownerDocument === document) return;
        var results = [];
        for (var property in object) {
            var value = this.toJSON(object[property]);
            if (value !== undefined)
                results.push(property + ':' + value);
        }
        return '{' + results.join(',') + '}';
    },


    post : function(obj, func) {
        var req = this.createXmlHttpRequest();
        req.onreadystatechange = function() {
            if (req.readyState == 4) {
                if (req.status == 200) {
                    func(eval('('+req.responseText+')'));
                } else {
                    throw "Error:"+req.status+":"+req.statusText;
                }
            }
        };
        req.open("POST", this.url, true);
        req.setRequestHeader("Content-Type", "application/json");
        req.send(this.toJSON(obj));
    },

    getArticles : function(obj, callback) {
        this.post({getArticles:obj},callback);
    },

    getAutoCompleteSuggestions : function(obj, callback) {
        this.post({getAutoCompleteSuggestions:obj},callback);
    },

    getVehiclesByVIN : function(obj, callback) {
        this.post({getVehiclesByVIN:obj},callback);
    },

    getAmBrandAddress : function(obj, callback) {
        this.post({getAmBrandAddress:obj},callback);
    },

    getPegasusVersionInfo2 : function(obj, callback) {
        this.post({getPegasusVersionInfo2:obj},callback);
    },

    getLanguages : function(obj, callback) {
        this.post({getLanguages:obj},callback);
    },

    getLinkedArticles : function(obj, callback) {
        this.post({getLinkedArticles:obj},callback);
    },

    getLinkedBrands : function(obj, callback) {
        this.post({getLinkedBrands:obj},callback);
    },

    getCountries : function(obj, callback) {
        this.post({getCountries:obj},callback);
    },

    getCountryGroups : function(obj, callback) {
        this.post({getCountryGroups:obj},callback);
    },

    getCriteria2 : function(obj, callback) {
        this.post({getCriteria2:obj},callback);
    },

    getGenericArticles : function(obj, callback) {
        this.post({getGenericArticles:obj},callback);
    },

    getVehicleIdsByKTypeNumber : function(obj, callback) {
        this.post({getVehicleIdsByKTypeNumber:obj},callback);
    },

    getVehicleIdsByMotor2 : function(obj, callback) {
        this.post({getVehicleIdsByMotor2:obj},callback);
    },

    getVehicleIdsByMark : function(obj, callback) {
        this.post({getVehicleIdsByMark:obj},callback);
    },

    getVehicleIdsByVendorId2 : function(obj, callback) {
        this.post({getVehicleIdsByVendorId2:obj},callback);
    },

    getVehicleIdsByKeyNumberPlates3 : function(obj, callback) {
        this.post({getVehicleIdsByKeyNumberPlates3:obj},callback);
    },

    getAxleBrakeSizes : function(obj, callback) {
        this.post({getAxleBrakeSizes:obj},callback);
    },

    getAxleIdByTypeManCriteria3 : function(obj, callback) {
        this.post({getAxleIdByTypeManCriteria3:obj},callback);
    },

    getAxleKeyNumbers : function(obj, callback) {
        this.post({getAxleKeyNumbers:obj},callback);
    },

    getAxleIdByKeyNumber : function(obj, callback) {
        this.post({getAxleIdByKeyNumber:obj},callback);
    },

    getAxleByIds2 : function(obj, callback) {
        this.post({getAxleByIds2:obj},callback);
    },

    getAxleByIds3 : function(obj, callback) {
        this.post({getAxleByIds3:obj},callback);
    },

    getMotorIdsByManuIdCriteria2 : function(obj, callback) {
        this.post({getMotorIdsByManuIdCriteria2:obj},callback);
    },

    getMotorsByCarTypeManuIdTerm2 : function(obj, callback) {
        this.post({getMotorsByCarTypeManuIdTerm2:obj},callback);
    },

    getMotorByIds2 : function(obj, callback) {
        this.post({getMotorByIds2:obj},callback);
    },

    getMotorByIds3 : function(obj, callback) {
        this.post({getMotorByIds3:obj},callback);
    },

    getVendorIds2 : function(obj, callback) {
        this.post({getVendorIds2:obj},callback);
    },

    getMarkById : function(obj, callback) {
        this.post({getMarkById:obj},callback);
    },

    getShortCuts2 : function(obj, callback) {
        this.post({getShortCuts2:obj},callback);
    },

    getChildNodesAllLinkingTarget2 : function(obj, callback) {
        this.post({getChildNodesAllLinkingTarget2:obj},callback);
    },

    getChildNodesPattern : function(obj, callback) {
        this.post({getChildNodesPattern:obj},callback);
    },

    getChildNodesPattern2 : function(obj, callback) {
        this.post({getChildNodesPattern2:obj},callback);
    },

    getGenericArticlesByManufacturer6 : function(obj, callback) {
        this.post({getGenericArticlesByManufacturer6:obj},callback);
    },

    getGenericArticlesByManufacturer7 : function(obj, callback) {
        this.post({getGenericArticlesByManufacturer7:obj},callback);
    },

    getArticleAccessoryList4 : function(obj, callback) {
        this.post({getArticleAccessoryList4:obj},callback);
    },

    getArticleLinkedAllLinkingTargetManufacturer : function(obj, callback) {
        this.post({getArticleLinkedAllLinkingTargetManufacturer:obj},callback);
    },

    getArticleLinkedAllLinkingTargetManufacturer2 : function(obj, callback) {
        this.post({getArticleLinkedAllLinkingTargetManufacturer2:obj},callback);
    },

    getPegasusVersionInfo : function(obj, callback) {
        this.post({getPegasusVersionInfo:obj},callback);
    },

    addDynamicAddress : function(obj, callback) {
        this.post({addDynamicAddress:obj},callback);
    },

    getAmBrands : function(obj, callback) {
        this.post({getAmBrands:obj},callback);
    },

    getVehicleByIds3 : function(obj, callback) {
        this.post({getVehicleByIds3:obj},callback);
    },

    getVehicleByIds4 : function(obj, callback) {
        this.post({getVehicleByIds4:obj},callback);
    },

    getVehiclesByKeyNumberPlates : function(obj, callback) {
        this.post({getVehiclesByKeyNumberPlates:obj},callback);
    },

    getArticleIdsWithState : function(obj, callback) {
        this.post({getArticleIdsWithState:obj},callback);
    },

    getAssignedArticlesByIds4 : function(obj, callback) {
        this.post({getAssignedArticlesByIds4:obj},callback);
    },

    getArticleDirectSearchAllNumbersWithState : function(obj, callback) {
        this.post({getArticleDirectSearchAllNumbersWithState:obj},callback);
    },

    getDirectArticlesByIds4 : function(obj, callback) {
        this.post({getDirectArticlesByIds4:obj},callback);
    },

    getCriteriaDialogAttributs : function(obj, callback) {
        this.post({getCriteriaDialogAttributs:obj},callback);
    },

    getArticleLinkedAllLinkingTarget3 : function(obj, callback) {
        this.post({getArticleLinkedAllLinkingTarget3:obj},callback);
    },

    getArticleLinkedAllLinkingTarget4 : function(obj, callback) {
        this.post({getArticleLinkedAllLinkingTarget4:obj},callback);
    },

    getArticleLinkedAllLinkingTargetsByIds3 : function(obj, callback) {
        this.post({getArticleLinkedAllLinkingTargetsByIds3:obj},callback);
    },

    getNewArticleBrands : function(obj, callback) {
        this.post({getNewArticleBrands:obj},callback);
    },

    getNewArticleIds : function(obj, callback) {
        this.post({getNewArticleIds:obj},callback);
    },

    getModelSeries : function(obj, callback) {
        this.post({getModelSeries:obj},callback);
    },

    getModelSeries2 : function(obj, callback) {
        this.post({getModelSeries2:obj},callback);
    },

    getVehicleIdsByCriteria : function(obj, callback) {
        this.post({getVehicleIdsByCriteria:obj},callback);
    },

    getArticlePartList : function(obj, callback) {
        this.post({getArticlePartList:obj},callback);
    },

    getNewArticleManufacturers : function(obj, callback) {
        this.post({getNewArticleManufacturers:obj},callback);
    },

    getAssignedArticlesByIds6 : function(obj, callback) {
        this.post({getAssignedArticlesByIds6:obj},callback);
    },

    getAssignedArticlesByIds7 : function(obj, callback) {
        this.post({getAssignedArticlesByIds7:obj},callback);
    },

    getDirectArticlesByIds6 : function(obj, callback) {
        this.post({getDirectArticlesByIds6:obj},callback);
    },

    getDirectArticlesByIds7 : function(obj, callback) {
        this.post({getDirectArticlesByIds7:obj},callback);
    },

    getKeyValues : function(obj, callback) {
        this.post({getKeyValues:obj},callback);
    },

    getManufacturers : function(obj, callback) {
        this.post({getManufacturers:obj},callback);
    },

    getManufacturers2 : function(obj, callback) {
        this.post({getManufacturers2:obj},callback);
    }

};
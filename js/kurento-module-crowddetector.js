!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var o;"undefined"!=typeof window?o=window:"undefined"!=typeof global?o=global:"undefined"!=typeof self&&(o=self),o.kurentoModuleCrowddetector=e()}}(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/* Autogenerated with Kurento Idl */

/*
 * (C) Copyright 2013-2014 Kurento (http://kurento.org/)
 *
 * All rights reserved. This program and the accompanying materials
 * are made available under the terms of the GNU Lesser General Public License
 * (LGPL) version 2.1 which accompanies this distribution, and is available at
 * http://www.gnu.org/licenses/lgpl-2.1.html
 *
 * This library is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU
 * Lesser General Public License for more details.
 *
 */

var inherits = require('inherits');

var kurentoClient = require('kurento-client');

var ChecktypeError = kurentoClient.checkType.ChecktypeError;

var Filter = kurentoClient.register.abstracts.Filter;

/**
 * Create a {@link module:crowddetector.CrowdDetectorFilter CrowdDetectorFilter}
 *
 * @classdesc
 *  Filter that detects people agglomeration in video streams
 *
 * @extends module:corecore/abstracts.Filter
 *
 * @constructor module:crowddetector.CrowdDetectorFilter
 *
 * @fires {@link module:crowddetector#event:CrowdDetectorDirection CrowdDetectorDirection}
 * @fires {@link module:crowddetector#event:CrowdDetectorFluidity CrowdDetectorFluidity}
 * @fires {@link module:crowddetector#event:CrowdDetectorOccupancy CrowdDetectorOccupancy}
 */
function CrowdDetectorFilter(){
  CrowdDetectorFilter.super_.call(this);
};
inherits(CrowdDetectorFilter, Filter);

/**
 * The processing image will be resized to this width (in pixels)
 *
 * @alias module:crowddetector.CrowdDetectorFilter#getProcessingWidth
 *
 * @param {module:crowddetector.CrowdDetectorFilter~getProcessingWidthCallback} [callback]
 *
 * @return {external:Promise}
 */
CrowdDetectorFilter.prototype.getProcessingWidth = function(callback){
  var transaction = (arguments[0] instanceof Transaction)
                  ? Array.prototype.shift.apply(arguments)
                  : undefined;

  if(!arguments.length) callback = undefined;

  return this._invoke(transaction, 'getProcessingWidth', callback);
};
/**
 * @callback module:crowddetector.CrowdDetectorFilter~getProcessingWidthCallback
 * @param {external:Error} error
 * @param {external:Integer} result
 */

/**
 * @alias module:crowddetector.CrowdDetectorFilter.constructorParams
 *
 * @property {module:core.MediaPipeline} mediaPipeline
 *  the {@link module:core.MediaPipeline MediaPipeline} to which the filter belongs
 *
 * @property {module:crowddetector/complexTypes.RegionOfInterest} rois
 *  Regions of interest for the filter
 */
CrowdDetectorFilter.constructorParams = {
  mediaPipeline: {
    type: 'MediaPipeline',
    required: true
  },

  rois: {
    type: 'RegionOfInterest',
    isList: true,
    required: true
  },
};

/**
 * @alias module:crowddetector.CrowdDetectorFilter.events
 *
 * @extend module:corecore/abstracts.Filter.events
 */
CrowdDetectorFilter.events = Filter.events.concat(['CrowdDetectorDirection', 'CrowdDetectorFluidity', 'CrowdDetectorOccupancy']);

module.exports = CrowdDetectorFilter;

CrowdDetectorFilter.check = function(key, value)
{
  if(!(value instanceof CrowdDetectorFilter))
    throw ChecktypeError(key, CrowdDetectorFilter, value);
};

},{"inherits":7,"kurento-client":"kurento-client"}],2:[function(require,module,exports){
/* Autogenerated with Kurento Idl */

/*
 * (C) Copyright 2013-2014 Kurento (http://kurento.org/)
 *
 * All rights reserved. This program and the accompanying materials
 * are made available under the terms of the GNU Lesser General Public License
 * (LGPL) version 2.1 which accompanies this distribution, and is available at
 * http://www.gnu.org/licenses/lgpl-2.1.html
 *
 * This library is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU
 * Lesser General Public License for more details.
 *
 */

var checkType = require('kurento-client').checkType;

/**
 * Checker for {@link crowddetector/complexTypes.RegionOfInterest}
 *
 * @memberof module:crowddetector/complexTypes
 *
 * @param {external:String} key
 * @param {module:crowddetector/complexTypes.RegionOfInterest} value
 */
function checkRegionOfInterest(key, value)
{
  checkType('RelativePoint', key+'.points', value.points, true);
  checkType('RegionOfInterestConfig', key+'.regionOfInterestConfig', value.regionOfInterestConfig, true);
  checkType('String', key+'.id', value.id, true);
};


/**
 * Region of interest for some events in a video processing filter
 *
 * @memberof module:crowddetector/complexTypes
 *
 * @typedef crowddetector/complexTypes.RegionOfInterest
 *
 * @type {Object}
 * @property {module:crowddetector/complexTypes.RelativePoint} points
 *  list of points delimiting the region of interest
 * @property {module:crowddetector/complexTypes.RegionOfInterestConfig} regionOfInterestConfig
 *  data structure for configuration of CrowdDetector regions of interest
 * @property {external:String} id
 *  identifier of the region of interest. The string used for the id must begin 
 *   with a letter followed by an alphanumeric character included (/-_.:+)
 */


module.exports = checkRegionOfInterest;

},{"kurento-client":"kurento-client"}],3:[function(require,module,exports){
/* Autogenerated with Kurento Idl */

/*
 * (C) Copyright 2013-2014 Kurento (http://kurento.org/)
 *
 * All rights reserved. This program and the accompanying materials
 * are made available under the terms of the GNU Lesser General Public License
 * (LGPL) version 2.1 which accompanies this distribution, and is available at
 * http://www.gnu.org/licenses/lgpl-2.1.html
 *
 * This library is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU
 * Lesser General Public License for more details.
 *
 */

var checkType = require('kurento-client').checkType;

/**
 * Checker for {@link crowddetector/complexTypes.RegionOfInterestConfig}
 *
 * @memberof module:crowddetector/complexTypes
 *
 * @param {external:String} key
 * @param {module:crowddetector/complexTypes.RegionOfInterestConfig} value
 */
function checkRegionOfInterestConfig(key, value)
{
  checkType('int', key+'.occupancyLevelMin', value.occupancyLevelMin);
  checkType('int', key+'.occupancyLevelMed', value.occupancyLevelMed);
  checkType('int', key+'.occupancyLevelMax', value.occupancyLevelMax);
  checkType('int', key+'.occupancyNumFramesToEvent', value.occupancyNumFramesToEvent);
  checkType('int', key+'.fluidityLevelMin', value.fluidityLevelMin);
  checkType('int', key+'.fluidityLevelMed', value.fluidityLevelMed);
  checkType('int', key+'.fluidityLevelMax', value.fluidityLevelMax);
  checkType('int', key+'.fluidityNumFramesToEvent', value.fluidityNumFramesToEvent);
  checkType('boolean', key+'.sendOpticalFlowEvent', value.sendOpticalFlowEvent);
  checkType('int', key+'.opticalFlowNumFramesToEvent', value.opticalFlowNumFramesToEvent);
  checkType('int', key+'.opticalFlowNumFramesToReset', value.opticalFlowNumFramesToReset);
  checkType('int', key+'.opticalFlowAngleOffset', value.opticalFlowAngleOffset);
};


/**
 * data structure for configuration of CrowdDetector regions of interest
 *
 * @memberof module:crowddetector/complexTypes
 *
 * @typedef crowddetector/complexTypes.RegionOfInterestConfig
 *
 * @type {Object}
 * @property {external:Integer} occupancyLevelMin
 *  minimun occupancy percentage in the ROI to send occupancy events
 * @property {external:Integer} occupancyLevelMed
 *  send occupancy level = 1 if the occupancy percentage is between occupancy_level_min and this level
 * @property {external:Integer} occupancyLevelMax
 *  send occupancy level = 2 if the occupancy percentage is between occupancy_level_med and this level,
 *  and send occupancy level = 3 if the occupancy percentage is between this level and 100
 * @property {external:Integer} occupancyNumFramesToEvent
 *  number of consecutive frames that a new occupancy level has to be detected to recognize it as a occupancy level change.
 *  A new occupancy event will be send
 * @property {external:Integer} fluidityLevelMin
 *  minimun fluidity percentage in the ROI to send fluidity events
 * @property {external:Integer} fluidityLevelMed
 *  send fluidity level = 1 if the fluidity percentage is between fluidity_level_min and this level
 * @property {external:Integer} fluidityLevelMax
 *  send fluidity level = 2 if the fluidity percentage is between fluidity_level_med and this level,
 *   and send fluidity level = 3 if the fluidity percentage is between this level and 100
 * @property {external:Integer} fluidityNumFramesToEvent
 *  number of consecutive frames that a new fluidity level has to be detected to recognize it as a fluidity level change.
 *   A new fluidity event will be send
 * @property {external:Boolean} sendOpticalFlowEvent
 *  Enable/disable the movement direction detection into the ROI
 * @property {external:Integer} opticalFlowNumFramesToEvent
 *  number of consecutive frames that a new direction of movement has to be detected to recognize a new movement direction. 
 *   A new direction event will be send
 * @property {external:Integer} opticalFlowNumFramesToReset
 *  number of consecutive frames in order to reset the counter of repeated directions
 * @property {external:Integer} opticalFlowAngleOffset
 *  Direction of the movement. The angle could have four different values: 
 *   left (0), up (90), right (180) and down (270). This cartesian axis could be rotated adding an angle offset
 */


module.exports = checkRegionOfInterestConfig;

},{"kurento-client":"kurento-client"}],4:[function(require,module,exports){
/* Autogenerated with Kurento Idl */

/*
 * (C) Copyright 2013-2014 Kurento (http://kurento.org/)
 *
 * All rights reserved. This program and the accompanying materials
 * are made available under the terms of the GNU Lesser General Public License
 * (LGPL) version 2.1 which accompanies this distribution, and is available at
 * http://www.gnu.org/licenses/lgpl-2.1.html
 *
 * This library is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU
 * Lesser General Public License for more details.
 *
 */

var checkType = require('kurento-client').checkType;

/**
 * Checker for {@link crowddetector/complexTypes.RelativePoint}
 *
 * @memberof module:crowddetector/complexTypes
 *
 * @param {external:String} key
 * @param {module:crowddetector/complexTypes.RelativePoint} value
 */
function checkRelativePoint(key, value)
{
  checkType('float', key+'.x', value.x, true);
  checkType('float', key+'.y', value.y, true);
};


/**
 * Relative points in a physical screen, values are a percentage relative to the image dimensions. X left to right and Y top to down.
 *
 * @memberof module:crowddetector/complexTypes
 *
 * @typedef crowddetector/complexTypes.RelativePoint
 *
 * @type {Object}
 * @property {external:Number} x
 *  Percentage relative to the image width to calculate the X coordinate of the point [0..1]
 * @property {external:Number} y
 *  Percentage relative to the image height to calculate the Y coordinate of the point [0..1]
 */


module.exports = checkRelativePoint;

},{"kurento-client":"kurento-client"}],5:[function(require,module,exports){
/* Autogenerated with Kurento Idl */

/*
 * (C) Copyright 2013-2014 Kurento (http://kurento.org/)
 *
 * All rights reserved. This program and the accompanying materials
 * are made available under the terms of the GNU Lesser General Public License
 * (LGPL) version 2.1 which accompanies this distribution, and is available at
 * http://www.gnu.org/licenses/lgpl-2.1.html
 *
 * This library is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU
 * Lesser General Public License for more details.
 *
 */

/**
 * Media API for the Kurento Web SDK
 *
 * @module crowddetector/complexTypes
 *
 * @copyright 2013-2014 Kurento (http://kurento.org/)
 * @license LGPL
 */

var RegionOfInterest = require('./RegionOfInterest');
var RegionOfInterestConfig = require('./RegionOfInterestConfig');
var RelativePoint = require('./RelativePoint');


exports.RegionOfInterest = RegionOfInterest;
exports.RegionOfInterestConfig = RegionOfInterestConfig;
exports.RelativePoint = RelativePoint;

},{"./RegionOfInterest":2,"./RegionOfInterestConfig":3,"./RelativePoint":4}],6:[function(require,module,exports){
/* Autogenerated with Kurento Idl */

/*
 * (C) Copyright 2013-2014 Kurento (http://kurento.org/)
 *
 * All rights reserved. This program and the accompanying materials
 * are made available under the terms of the GNU Lesser General Public License
 * (LGPL) version 2.1 which accompanies this distribution, and is available at
 * http://www.gnu.org/licenses/lgpl-2.1.html
 *
 * This library is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU
 * Lesser General Public License for more details.
 *
 */

/**
 * Media API for the Kurento Web SDK
 *
 * @module crowddetector
 *
 * @copyright 2013-2014 Kurento (http://kurento.org/)
 * @license LGPL
 */

var CrowdDetectorFilter = require('./CrowdDetectorFilter');


exports.CrowdDetectorFilter = CrowdDetectorFilter;

exports.complexTypes = require('./complexTypes');

},{"./CrowdDetectorFilter":1,"./complexTypes":5}],7:[function(require,module,exports){
if (typeof Object.create === 'function') {
  // implementation from standard node.js 'util' module
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    ctor.prototype = Object.create(superCtor.prototype, {
      constructor: {
        value: ctor,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
  };
} else {
  // old school shim for old browsers
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    var TempCtor = function () {}
    TempCtor.prototype = superCtor.prototype
    ctor.prototype = new TempCtor()
    ctor.prototype.constructor = ctor
  }
}

},{}]},{},[6])(6)
});
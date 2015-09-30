var util = require('util'),
    Classifier = require('./classifier');

var CustomClassifier = function(classifier, smoothing, stemmer) {
    var c = new classifier(smoothing);
    Classifier.call(this, c, stemmer);
};
util.inherits(CustomClassifier, Classifier);

module.exports = CustomClassifier;

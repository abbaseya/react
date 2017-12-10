import jd from 'jsdom';
import jq from 'jquery';
import chai, {expect} from 'chai';
import chaiJquery from 'chai-jquery';
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import TestUtils from 'react-addons-test-utils';

import reducers from '../src/reducers';

// Setup testing environment to run in a browser in the command line
global.document = jd.jsdom('<!doctype html><html><body></body></html>');
global.window = global.document.defaultView;
global.navigator = {
  userAgent: 'node.js'
};

const $ = jq(global.window);

// Build helper that should render a given React class
function render(ComponentClass, props, state) {
	return $(ReactDOM.findDOMNode(TestUtils.renderIntoDocument(
		<Provider store={createStore(reducers, state)}>
			<ComponentClass {...props} />
		</Provider>
	)));
}

// Build helper for simulating events
$.fn.simulate = function(eventName, value) {
	if (value) {
		this.val(value);
	}
	TestUtils.Simulate[eventName](this[0]);
};

// Setup chai-jquery
chaiJquery(chai, chai.util, $);

export {render, expect};
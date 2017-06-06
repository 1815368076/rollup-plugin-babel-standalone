import {availablePlugins, availablePresets, registerPreset} from 'babel-standalone-rollup';

let baseLocation = availablePresets['es2015'];
let plugins = baseLocation.plugins.slice();
let commonjsPlugin = availablePlugins['transform-es2015-modules-commonjs'];

var i = plugins.length;
while ( i-- ) {
	var plugin = plugins[i];
	if ( plugin === commonjsPlugin || plugin[0] === commonjsPlugin ) {
		plugins.splice( i, 1 );
	}
}

plugins.push(availablePlugins['external-helpers']);

registerPreset('es2015-rollup', {plugins});

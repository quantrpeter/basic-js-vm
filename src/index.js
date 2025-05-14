import { Basic } from './Basic.js'

import jvmBasicLexer from './antlr/jvmBasicLexer.js';
import jvmBasicParser from './antlr/jvmBasicListener.js';
import jvmBasicListener from './antlr/jvmBasicListener.js';

document.addEventListener("DOMContentLoaded", () => {
	document.getElementById("main").innerHTML = "started";
	console.log('jvmBasicLexer', jvmBasicLexer);
});

let basic = new Basic()

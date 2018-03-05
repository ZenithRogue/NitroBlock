var data;
(function(ext) {
    // Cleanup function when the extension is unloaded
    ext._shutdown = function() {};

    // Status reporting code
    // Use this to report missing hardware, plugin or unsupported browser
    ext._getStatus = function() {
        return {status: 2, msg: 'Ready'};
    };

    ext.ncheck = function(check) {
        return true
    };

    ext.color = function(color) {
        return Math.pow(color, 1);
    };

    ext.rgb = function(r, g, b) {
        return ((((r * 256) + g) * 256) + b);
    };

    ext.power = function(num, power) {
        return Math.pow(num, power);
    };

    ext.textif = function(bool, text1, text2) {
    	if (bool) {
    		return text1
    	} else {
    		return text2
    	}

    };

    ext.alertbox = function(string) {
    	window.alert(string);
    }

    ext.whenThis = function(bool) {
        return bool;
    }

    ext.mathy = function(num1, oper, num2) {
        if (oper === '+') {
            return (num1 + num2)
        }
        if (oper === '-') {
            return (num1 - num2)
        }
        if (oper === '*') {
            return (num1 * num2)
        }
        if (oper === '/') {
            return (num1 / num2)
        }
        if (oper === '^') {
            return Math.pow(num1, num2)
        }
        if (oper === 'sqrt') {
            return (num1 * (Math.sqrt(num2)))
        }
    }

    ext.substringy = function(num1, num2, string) {
        return string.substring(num1 -1, num2);
    }
    // START NEW BLOCK
    ext.jQuGet = function(myURL) {

        $.ajaxSetup({async: false});
        $.get('https://cors-anywhere.herokuapp.com/' + myURL, function(data) {
            window.httpdata = data;
        });
        return window.httpdata;
    }    // END NEW BLOCK

    ext.javablock = function(string) {
    	return eval(string);
    }

    ext.blank = function(string) {
    }
    
    ext.exclu = function(bool1, bool2) {
      if (bool1 && bool2) {
        return false;
      }
      else{
        if (bool1){
          return true;
        }
        if (bool2){
          return true;
        }
      }
    }
    
    ext.strCont = function(string1, string2) {
    	return string1.includes(string2);
    }

    ext.dPrompt = function(prompty) {
    	return prompt(prompty);
    }

    ext.repAll = function(finder, string, replacer) {
    	return string.replace(new RegExp(finder, 'gi'), replacer);
    }

    ext.greaterOrEqual = function(string1, string2) {
    	return (string1 >= string2);
    }

    ext.lessOrEqual = function(string1, string2) {
    	return (string1 <= string2);
    }


    ext.itOfStr = function(num, string, seper) {
    	var str = string;
    	var res = str.split(seper);
    	return (res[num - 1]);
	};
    // Block and block menu descriptions
    var descriptor = {
        blocks: [
            // Block type, block name, function name, param1 default value, param2 default value
            ['b', 'nitroblock?', 'ncheck', true],
            ['r', 'color %c', 'color', 0],
            ['r', 'red %n green %n blue %n', 'rgb', 255, 0, 0],
            ['r', '%n ^ %n', 'power', 5, 2],
            ['r', 'if %b then %s else %s', 'textif', '', 'hello', 'world'],
            [' ', 'alert %s', 'alertbox', 'hello world'],
            ['h', 'when %b', 'whenThis', ''],
            ['r', '%n %m.supermath %n', 'mathy', '', ''],
            ['r', 'letters %n through %n of %s', 'substringy', '2', '5', 'hello world'],
            ['r', 'javascript %s', 'javablock', 'window.alert("yay")'],
            [' ', '%s', 'blank', ''],
            ['r', 'word %n of %s separated by %s', 'itOfStr', '2', 'hello world', ' '],
            ['b', '%b xor %b', 'exclu', false],
            ['b', '%s contains %s', 'strCont', 'hello world', 'hello'],
            ['r', 'prompt user with %s', 'dPrompt', 'how are you?'],
            ['r', 'replace all of %s in %s with %s', 'repAll', '', '', ''],
            ['b', '%s ≥ %s', 'greaterOrEqual', '', ''],
            ['b', '%s ≤ %s', 'lessOrEqual', '', ''],
            ['r', 'get data from url: %s', 'jQuGet', 'http://google.com', '',],


        ],
        menus: {
            supermath: ['+', '-', '/', '*', '^', 'sqrt'],
        },
    };

    // Register the extension
    ScratchExtensions.register('NitroBlock', descriptor, ext);
})({});
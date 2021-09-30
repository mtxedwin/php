"use strict";
let
  cp = require('child_process'),
  path = require('path');


class PHP{
  constructor(){
    this.bin = '/usr/bin/php';
    this.views = '';
    this.extname = 'php'
  };
  render(filename, callback){
    let
      file = path.join(this.views, `${filename}.${this.extname}`),
      exec = cp.exec,
      cmd = `${this.bin} ${file}`;
    exec(cmd, function(err, stdout, stderr){
      if       (err)	{callback(err)}
      else if  (stderr)	{callback(stderr)}
      else 		{callback(stdout)};
    });
  };

};

module.exports = PHP;

import p5 from 'p5';
import * as Blockly from 'blockly';
import "./block_definitions/index";
import './css/global.css';

document.addEventListener("DOMContentLoaded", function() {
  const clearButton = document.getElementById('clearButton');
  clearButton.addEventListener('click', function() {
    background("#fff");
  });

  const saveButton = document.getElementById('saveButton');
  saveButton.addEventListener('click', function() {
    saveCanvas('myCanvas');
  });

  const workspace = Blockly.inject('blocklyDiv',
    {
      toolbox: document.getElementById('toolbox'),
      media: 'media/'
    });

  const lang = 'JavaScript';
  const button = document.getElementById('blocklyButton');

  button.addEventListener('click', function () {
    const code = Blockly[lang].workspaceToCode(workspace);
    const geval = eval;
    try {
      geval(code);
    } catch (e) {
      alert(e);
    }
  })
});

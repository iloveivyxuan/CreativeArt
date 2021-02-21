import p5 from 'p5';
import Blockly from 'blockly';
import './blocks/index';
import './css/global.css';

document.addEventListener("DOMContentLoaded", function() {
  const saveButton = document.getElementById('saveButton');
  saveButton.addEventListener('click', function() {
    saveCanvas('myCanvas');
  });

  const workspace = Blockly.inject('blocklyDiv',
    {
      toolbox: document.getElementById('toolbox'),
      media: 'media/',
      zoom:
      	{
      		controls: true,
      		startScale: 1.0,
      		maxScale: 3,
      		minScale: 0.3,
      		scaleSpeed: 1.2,
      		pinch: true
      	},
      trashcan: true
    });

  const lang = 'JavaScript';
  const button = document.getElementById('blocklyButton');

  button.addEventListener('click', () => {
    var isPlay = document.getElementById('blocklyButton').classList.contains('stop');
    if (isPlay) {
      button.classList.remove('stop');
      button.classList.add('play');
      document.querySelector('#main').firstElementChild.remove();
    } else {
      button.classList.remove('play');
      button.classList.add('stop');
      const code = Blockly[lang].workspaceToCode(workspace);
      const geval = eval;
      console.log(code);
      try {
        geval(code);
        new p5();
      } catch (e) {
        alert(e);
      }
    }
  });

  // Set Category Bar Style
  const categories = document.querySelectorAll('.blocklyTreeRowContentContainer');
  for (let category of categories) {
    if (category.children[1].innerText == 'Functions') {
      category.style.borderLeft = '4px solid #EA4F1E'
    }
    else if (category.children[1].innerText == 'Basic Graphic') {
      category.style.borderLeft = '4px solid #5935BC'
    }
    else if (category.children[1].innerText == 'Style') {
      category.style.borderLeft = '4px solid #777CFB'
    }
    else if (category.children[1].innerText == 'Math') {
      category.style.borderLeft = '4px solid #E4CCF6'
    }
    else if (category.children[1].innerText == 'Color') {
      category.style.borderLeft = '4px solid #FFEDED'
    }
    else if (category.children[1].innerText == 'Utils') {
      category.style.borderLeft = '4px solid #F5AE24'
    }
  }
});
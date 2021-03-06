import p5 from 'p5';
import Blockly from 'blockly';
import './blocks/index';
import './css/tutorial.css';
import './css/global.css';
import './css/modal.css';
import { modal, toggleModal, modalContinueButton } from './js/modal.js';
import './js/canvas';

document.addEventListener("DOMContentLoaded", function() {
  const lang = 'JavaScript';
  const button = document.getElementById('blocklyButton');

  button.addEventListener('click', () => {
    const code = Blockly[lang].workspaceToCode(workspace);
    var isPlay = document.getElementById('blocklyButton').classList.contains('stop');
    if (isPlay) {
      try {
        eval(code)
        checkCode(code);
      } catch (e) {

      }
    }
  });

  // Add default blocks
  const blocks = `
    <xml xmlns="https://developers.google.com/blockly/xml">
      <block type="setup" id="qIq?1KNe%8;P~qytfWxt" x="104" y="83">
        <statement name="setup">
          <block type="create_canvas" id="=kP3owXA?-]!~4(220T[">
            <field name="width">350</field>
            <field name="height">350</field>
            <next>
              <block type="background" id="8]qPru8KfW!W/QD@jP)_">
                <value name="color">
                  <block type="color" id="(gK~IXv*|}^(IBC_$A$">
                    <field name="color">#ffffff</field>
                  </block>
                </value>
              </block>
            </next>
          </block>
        </statement>
      </block>
    </xml>
  `;
  const xml = Blockly.Xml.textToDom(blocks);
  Blockly.Xml.domToWorkspace(xml, window.workspace);

  // Check Code
  const checkCode = (code) => {
    const isSuccess = true;
    const sucCodes = successCode[currentChallenge];
    console.log()
    if (code.includes(failedCode[currentChallenge])) {
      isSuccess = false;
    }
    for (const sucCode of sucCodes) {
      if (!code.includes(sucCode)) {
        isSuccess = false;
      }
    }
    if (isSuccess) {
      setTimeout(toggleModal, 300);
    }
  }

  modalContinueButton.addEventListener('click', () => {
    toggleModal();
    document.querySelector(`li[data-challenge='${currentChallenge}']`).classList.add('done');
    document.querySelector(`li[data-challenge='${currentChallenge}']`).classList.remove('current', 'active');
    currentChallenge += 1;
    document.querySelector(`li[data-challenge='${currentChallenge}']`).classList.add('current', 'active');
    toolbox = challengeBlocks[currentChallenge];
    workspace.updateToolbox(toolbox);
    workspace.clear();
    Blockly.Xml.domToWorkspace(xml, window.workspace);
    document.querySelector('.des').innerHTML = challengeDes[currentChallenge];
    button.click();
  });

  // Progress Bar
  const challengeNum = 6;
  let currentChallenge = 0;

  const generateProgressBar = (num) => {
    let list = ``;
    for (let i = 0; i < num; i++) {
      if (i < currentChallenge) {
        list += `<li class="challenge done" data-challenge='${i}'></li>`
      }
      else if (i == currentChallenge) {
        list += `<li class="challenge active current" data-challenge='${i}'></li>`
      } else {
        list += `<li class="challenge" data-challenge='${i}'></li>`;
      }
    }
    return list
  }

  document.getElementById('progressBar').innerHTML = generateProgressBar(challengeNum);

  const lists = document.getElementsByClassName('challenge');

  const removeActive = () => {
    for (const list of lists) {
      list.classList.remove('active');
    }
  };

  for (const list of lists) {
    list.addEventListener('click', () => {
      const backToChallenge = list.dataset.challenge;
      if (backToChallenge > currentChallenge) {
        return
      }
      removeActive();
      list.classList.add('active');
      toolbox = challengeBlocks[backToChallenge];
      workspace.updateToolbox(toolbox);
      workspace.clear();
      Blockly.Xml.domToWorkspace(xml, window.workspace);
      document.querySelector('.des').innerHTML = challengeDes[currentChallenge];
    });
  }

  // Success Conditions
  const successCode = [
    [`ellipse`],
    [`ellipse`, `fill`],
    [`ellipse`, `fill`, `stroke`, `strokeWeight`],
    [`// Show Coordinate`, `ellipse`],
    [`rect`],
    null
  ];

  const failedCode = [
    null,
    null,
    null,
    `ellipse(200, 200, 100, 100)`,
    null,
  ];

  // Challenge Blocks XML
  const challenge1 = `
    <xml xmlns="https://developers.google.com/blockly/xml" id="toolbox" style="display: none">
      <block type="simpleEllipse">
        <field name="position">center</field>
        <field name="width">100</field>
        <field name="height">100</field>
      </block>
    </xml>
  `;

  const challenge2 = `
    <xml xmlns="https://developers.google.com/blockly/xml" id="toolbox" style="display: none">
      <block type="basicEllipse">
         <field name="position">center</field>
         <field name="width">100</field>
         <field name="height">100</field>
      </block>
      <block type="fill">
        <value name="color">
          <shadow type="color">
            <field name="color">#ffccff</field>
          </shadow>
        </value>
      </block>
    </xml>
  `;

  const challenge3 = `
    <xml xmlns="https://developers.google.com/blockly/xml" id="toolbox" style="display: none">
      <block type="basicEllipse">
         <field name="position">center</field>
         <field name="width">100</field>
         <field name="height">100</field>
      </block>
      <block type="fill">
        <value name="color">
          <shadow type="color">
            <field name="color">#ffccff</field>
          </shadow>
        </value>
      </block>
      <block type="stroke">
        <value name="color">
          <shadow type="color">
            <field name="color">#993399</field>
          </shadow>
        </value>
      </block>
      <block type="stroke_weight">
        <value name="weight">
          <shadow type="math_number">
            <field name="NUM">3</field>
          </shadow>
        </value>
      </block>
    </xml>
  `;

  const challenge4 = `
    <xml xmlns="https://developers.google.com/blockly/xml" id="toolbox" style="display: none">
      <block type="customized_ellipse">
        <value name="width">
          <shadow type="math_number">
            <field name="NUM">100</field>
          </shadow>
        </value>
        <value name="height">
          <shadow type="math_number">
            <field name="NUM">100</field>
          </shadow>
        </value>
        <value name="x-coordinate">
          <shadow type="math_number">
            <field name="NUM">200</field>
          </shadow>
        </value>
        <value name="y-coordinate">
          <shadow type="math_number">
            <field name="NUM">200</field>
          </shadow>
        </value>
        <statement name="styles">
          <block type="fill">
            <value name="color">
              <block type="color">
                <field name="color">#ffccff</field>
              </block>
            </value>
            <next>
              <block type="stroke">
                <value name="color">
                  <block type="color">
                    <field name="color">#993399</field>
                  </block>
                </value>
                <next>
                  <block type="stroke_weight">
                    <value name="weight">
                      <block type="math_number">
                        <field name="NUM">3</field>
                      </block>
                    </value>
                  </block>
                </next>
              </block>
            </next>
          </block>
        </statement>
      </block>
      <block type="axis"></block>
    </xml>
  `;

  const challenge5 = `
    <xml xmlns="https://developers.google.com/blockly/xml" id="toolbox" style="display: none">
      <block type="rectangle">
        <value name="width">
          <shadow type="math_number">
            <field name="NUM">100</field>
          </shadow>
        </value>
        <value name="height">
          <shadow type="math_number">
            <field name="NUM">100</field>
          </shadow>
        </value>
        <value name="x-coordinate">
          <shadow type="math_number">
            <field name="NUM">200</field>
          </shadow>
        </value>
        <value name="y-coordinate">
          <shadow type="math_number">
            <field name="NUM">200</field>
          </shadow>
        </value>
        <statement name="styles">
          <block type="fill">
            <value name="color">
              <block type="color">
                <field name="color">#ffccff</field>
              </block>
            </value>
            <next>
              <block type="stroke">
                <value name="color">
                  <block type="color">
                    <field name="color">#993399</field>
                  </block>
                </value>
                <next>
                  <block type="stroke_weight">
                    <value name="weight">
                      <block type="math_number">
                        <field name="NUM">3</field>
                      </block>
                    </value>
                  </block>
                </next>
              </block>
            </next>
          </block>
        </statement>
      </block>
    </xml>
  `;

  const challenge6 = `
    <xml xmlns="https://developers.google.com/blockly/xml" id="toolbox" style="display: none">
      <block type="customized_ellipse">
        <value name="width">
          <shadow type="math_number">
            <field name="NUM">100</field>
          </shadow>
        </value>
        <value name="height">
          <shadow type="math_number">
            <field name="NUM">100</field>
          </shadow>
        </value>
        <value name="x-coordinate">
          <shadow type="math_number">
            <field name="NUM">200</field>
          </shadow>
        </value>
        <value name="y-coordinate">
          <shadow type="math_number">
            <field name="NUM">200</field>
          </shadow>
        </value>
        <statement name="styles">
          <shadow type="fill">
            <value name="color">
              <shadow type="color">
                <field name="color">#ffccff</field>
              </shadow>
            </value>
            <next>
              <shadow type="stroke">
                <value name="color">
                  <shadow type="color">
                    <field name="color">#993399</field>
                  </shadow>
                </value>
                <next>
                  <shadow type="stroke_weight">
                    <value name="weight">
                      <shadow type="math_number">
                        <field name="NUM">3</field>
                      </shadow>
                    </value>
                  </shadow>
                </next>
              </shadow>
            </next>
          </shadow>
        </statement>
      </block>
      <block type="rectangle">
        <value name="width">
          <shadow type="math_number">
            <field name="NUM">100</field>
          </shadow>
        </value>
        <value name="height">
          <shadow type="math_number">
            <field name="NUM">100</field>
          </shadow>
        </value>
        <value name="x-coordinate">
          <shadow type="math_number">
            <field name="NUM">200</field>
          </shadow>
        </value>
        <value name="y-coordinate">
          <shadow type="math_number">
            <field name="NUM">200</field>
          </shadow>
        </value>
        <statement name="styles">
          <shadow type="fill">
            <value name="color">
              <shadow type="color">
                <field name="color">#ffccff</field>
              </shadow>
            </value>
            <next>
              <shadow type="stroke">
                <value name="color">
                  <shadow type="color">
                    <field name="color">#993399</field>
                  </shadow>
                </value>
                <next>
                  <shadow type="stroke_weight">
                    <value name="weight">
                      <shadow type="math_number">
                        <field name="NUM">3</field>
                      </shadow>
                    </value>
                  </shadow>
                </next>
              </shadow>
            </next>
          </shadow>
        </statement>
      </block>
      <block type="fill">
        <value name="color">
          <shadow type="color">
            <field name="color">#ffccff</field>
          </shadow>
        </value>
      </block>
      <block type="no_stroke"></block>
      <block type="stroke">
        <value name="color">
          <shadow type="color">
            <field name="color">#993399</field>
          </shadow>
        </value>
      </block>
      <block type="stroke_weight">
        <value name="weight">
          <shadow type="math_number">
            <field name="NUM">3</field>
          </shadow>
        </value>
      </block>
      <block type="axis"></block>
    </xml>
  `;

  const challengeBlocks = [challenge1, challenge2, challenge3, challenge4, challenge5, challenge6];

  // Initialize toolbox
  let toolbox = challengeBlocks[currentChallenge];
  workspace.updateToolbox(toolbox);

  // Challenge Descriptions
  const challengeDes = [
    `
    <p>⭐Welcome⭐</p>
    <p> First let's talk about <em>workspace</em>.</p>
    <p>Your workspace is the area below the promt where you'll connect blocks to build your program.</p>
    <p>Drag the <em>Draw an ellipse</em> into the workspace, and connect it at the end of <em>setup</em>.</p>
    <p><Tip>Tips: You can change <bold>width</bold> and <bold>height</bold> of the ellipse if you want.</p>
    `,
    `
      <p>⭐Congradualations, you understand basic operation of blocks⭐</p>
      <p>Blocks can be dragged out from the toolbox, connected, duplicated, and deleted.</p>
      <p>Let's fill the ellipse with your favorite color.</p>
      <p><tip>Tips: Drag <em>ellipse</em> block into <em>setup</em> block and under <em>background</em> block.</tip></p>
      <p><tip>Then drag <em>fill</em> block inside <em>ellipse</em> block..</tip></p>
    `,
    `
      <p>⭐More styles to choose⭐</p>
      <p>There're more options for you to choose to style your ellipse, explore them</p>
      <p>Let mouse stay on block for 1s, a short description will show up</p>
      <p>Right click on the block, there's a <bold>help</bold> option where you can get more details</p>
    `,
    `
      <p>⭐What is Canvas?⭐</p>
      <p>Canvas is like a screen where present the outcome of your block program. Canvas has width and height, can also has coordinates</p>
      <p>Drag the <em>show coordinate</em> into the workspace, and connect it at the end of <em>setup</em>.</p>
      <p>Can you draw an ellipse at position (100, 200)</p>
    `,
    `
      <p>⭐More shapes⭐</p>
      <p>Besides ellipse, we can also draw rectangle.</p>
      <p>Drag <em>rectangle</em> into the workspace, and connect it at the end of <em>setup</em>.</p>
    `,
    `
      <p>⭐Congradualations, you are at final challenge!⭐</p>
      <p>Using blocks that we've seen, draw anything you want.</p>
      <p>Find more examples <a href="/browse.html">here</a></p>
    `
  ];

  // Initialize ChallengeDes
  document.querySelector('.des').innerHTML = challengeDes[currentChallenge];
});

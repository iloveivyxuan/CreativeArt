const path = require('path');
const express = require('express');

const app = express()

app.use(express.static(path.join(__dirname, "build")))

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/build/index.html'))
})

app.get('/tutorial', (req, res) => {
	res.sendFile(path.join(__dirname, '/build/tutorial.html'))
})

app.get('/sandbox', (req, res) => {
	res.sendFile(path.join(__dirname, '/build/sandbox.html'))
})

app.get('/art', (req, res) => {
	res.sendFile(path.join(__dirname, '/build/artwork.html'))
})

// APIs: Resources artworks
app.get('/artworks', (req, res) => {
	return res.send(Object.values(artworks));
});

app.get('/artworks/:artworkId', (req, res) => {
	return res.send(artworks[req.params.artworkId])
});

app.post('/artworks', (req, res) => {
	return res.send('POST HTTP method on artwork Resources');
});

app.put('/artworks/:artworkId', (req, res) => {
	return res.send(`PUT HTTP method on artwork/${req.params.artworkId} resource`);
});

app.delete('/artwork/:artworkId', (req, res) => {
	return res.send(`DELETE HTTP method on artwork/${req.params.artworkId} resource`);
});

// express listen at port 8080
const PORT = process.env.PORT || 8080
app.listen(PORT, () => {
  console.log(`App listening to ${PORT}....`)
  console.log('Press Ctrl+C to quit.')
})

// const MongoClient = require('mongodb').MongoClient;

// // Connection URL
// const url = 'mongodb://localhost:27017';

// // Database Name
// const dbName = 'creativeArtDB';
// const client = new MongoClient(url);
// // Use connect method to connect to the server
// client.connect(function(err) {
//   console.log('Connected successfully to server');

//   const db = client.db(dbName);

//   client.close();
// });

// Database Sample
const artworks = {
	1: {
		id: '1',
		blockXML: `
		<xml xmlns="https://developers.google.com/blockly/xml">
      <variables>
        <variable id="wRohD_B.:U)95xx?_s=">circleResolution</variable>
        <variable id="}i/:8Z^{ir4N@-j/hWF">radius</variable>
      </variables>
      <block type="setup" id=";kFImFHeHRLs_2GdTJMJ" x="9" y="28">
        <statement name="setup">
          <block type="create_canvas" id="U,A-59[(?s-9(?l#QkbD">
            <field name="width">350</field>
            <field name="height">350</field>
            <next>
              <block type="background" id="$Ugp?+t.2KL=S=:+E1TS">
                <value name="color">
                  <block type="color" id="IAG3h:NiyKJ/svQq,Ep*">
                    <field name="color">#ffffff</field>
                  </block>
                </value>
                <next>
                  <block type="no_fill" id="O%je$D[UcSe~FGzJkRm-">
                    <next>
                      <block type="stroke_weight" id="=?CH_!|nyc%|B,j%)r]*">
                        <value name="weight">
                          <block type="number" id=";j7[9?f%N_5NL@P-W?9_">
                            <field name="num">1</field>
                          </block>
                        </value>
                        <next>
                          <block type="stroke" id="%,=TSpi+U*;A@]c,?ZrY">
                            <value name="color">
                              <block type="rgba" id="!WDx%~sA=Glli3Jm7~X}">
                                <field name="r">50</field>
                                <field name="g">50</field>
                                <field name="b">50</field>
                                <field name="a">0.1</field>
                              </block>
                            </value>
                          </block>
                        </next>
                      </block>
                    </next>
                  </block>
                </next>
              </block>
            </next>
          </block>
        </statement>
      </block>
      <block type="draw" id="pDbpuaM8$K,*5!4JOWsE" x="22" y="264">
        <statement name="draw">
          <block type="controls_if" id="mup3)QXk7r3Ces5Z!pbl">
            <value name="IF0">
              <block type="mouse_is_pressed" id="uc-h5,oWedaDOd^69Gwj"></block>
            </value>
            <statement name="DO0">
              <block type="translate" id="H7Lx+KOHG7sYh+}6[o$8">
                <field name="x">175</field>
                <field name="y">175</field>
                <next>
                  <block type="variables_set" id=",]0fLZi@$;p8N;)U?Li">
                    <field name="VAR" id="wRohD_B.:U)95xx?_s=">circleResolution</field>
                    <value name="VALUE">
                      <block type="get_integer" id="(cX*mU4Y4AWrz8:h:oM=">
                        <field name="options">round</field>
                        <value name="num">
                          <block type="map" id="lN#d5$|z{.8uU?X$.,(">
                            <value name="value">
                              <block type="mouse_y" id="A2gPt0FSUv-UsEm!Fb%."></block>
                            </value>
                            <value name="from_low">
                              <block type="number" id="?7nb[-ghC0zY|7-fMZ8+">
                                <field name="num">0</field>
                              </block>
                            </value>
                            <value name="from_high">
                              <block type="height" id="BLp!CRt?gmGdiE0$wI{U"></block>
                            </value>
                            <value name="to_low">
                              <block type="number" id="aH$z*)|k=FmRJX_Qq?.g">
                                <field name="num">3</field>
                              </block>
                            </value>
                            <value name="to_high">
                              <block type="number" id="eKFoPPt:/%i/E$|}9WQ%">
                                <field name="num">15</field>
                              </block>
                            </value>
                          </block>
                        </value>
                      </block>
                    </value>
                    <next>
                      <block type="variables_set" id="GBUav}UZD;pKp%hp%(8*">
                        <field name="VAR" id="}i/:8Z^{ir4N@-j/hWF">radius</field>
                        <value name="VALUE">
                          <block type="distance" id="K+}ml.a==#Qjo)l-}es">
                            <value name="from_x">
                              <block type="mouse_x" id="ncPh_/-]*+2~s6[y29lk"></block>
                            </value>
                            <value name="from_y">
                              <block type="mouse_y" id="}dit4r(gi:b?6N4x1KuV"></block>
                            </value>
                            <value name="to_x">
                              <block type="number" id="mV9fY#Bq!AkS*(-;+#EY">
                                <field name="num">175</field>
                              </block>
                            </value>
                            <value name="to_y">
                              <block type="number" id="CyJMAO!,QzJ2:BogdrE">
                                <field name="num">175</field>
                              </block>
                            </value>
                          </block>
                        </value>
                        <next>
                          <block type="polygon" id="7A?;9{)8W{~p$fr}4L0">
                            <value name="sides">
                              <block type="variables_get" id="[xpo)ff^V/P84ZC*Lu--">
                                <field name="VAR" id="wRohD_B.:U)95xx?_s=">circleResolution</field>
                              </block>
                            </value>
                            <value name="radius">
                              <block type="variables_get" id="z{KE][@/s]2k){,/,dn%">
                                <field name="VAR" id="}i/:8Z^{ir4N@-j/hWF">radius</field>
                              </block>
                            </value>
                          </block>
                        </next>
                      </block>
                    </next>
                  </block>
                </next>
              </block>
            </statement>
          </block>
        </statement>
      </block>
    </xml>
		`
	}
};

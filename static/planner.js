// ─── FURNITURE DATA ───────────────────────────────────────────────
const FURNITURE_LIBRARY=[
  {cat:'Seating',items:[
    {id:'sofa-3',name:'3-Seat Sofa',icon:'🛋️',w:2.1,h:0.9,color:'#8B7355',label:'Sofa 3-seat'},
    {id:'sofa-2',name:'2-Seat Sofa',icon:'🛋️',w:1.5,h:0.85,color:'#8B7355',label:'Sofa 2-seat'},
    {id:'sofa-l',name:'L-Shape Sofa',icon:'🛋️',w:2.4,h:1.6,color:'#7A6648',label:'L-Shape Sofa'},
    {id:'armchair',name:'Armchair',icon:'🪑',w:0.8,h:0.8,color:'#7A6248',label:'Armchair'},
    {id:'chair',name:'Dining Chair',icon:'🪑',w:0.45,h:0.5,color:'#A08060',label:'Chair'},
    {id:'stool',name:'Bar Stool',icon:'🪑',w:0.4,h:0.4,color:'#9A7850',label:'Stool'},
    {id:'ottoman',name:'Ottoman',icon:'🟫',w:0.8,h:0.6,color:'#9A8060',label:'Ottoman'},
  ]},
  {cat:'Beds',items:[
    {id:'bed-king',name:'King Bed',icon:'🛏️',w:1.8,h:2.1,color:'#8AAEC0',label:'King Bed'},
    {id:'bed-queen',name:'Queen Bed',icon:'🛏️',w:1.6,h:2.0,color:'#8AAEC0',label:'Queen Bed'},
    {id:'bed-double',name:'Double Bed',icon:'🛏️',w:1.35,h:1.9,color:'#96B8C8',label:'Double Bed'},
    {id:'bed-single',name:'Single Bed',icon:'🛏️',w:0.9,h:2.0,color:'#A2C0CE',label:'Single Bed'},
    {id:'bed-bunk',name:'Bunk Bed',icon:'🛏️',w:1.0,h:2.0,color:'#A0B8C0',label:'Bunk Bed'},
    {id:'bedside',name:'Bedside Table',icon:'🔲',w:0.5,h:0.45,color:'#B89870',label:'Bedside Table'},
    {id:'bedside-r',name:'Bedside Table R',icon:'🔲',w:0.5,h:0.45,color:'#B89870',label:'Bedside R'},
  ]},
  {cat:'Tables',items:[
    {id:'dining-6',name:'Dining Table 6p',icon:'🍽️',w:1.8,h:0.9,color:'#A07850',label:'Dining 6p'},
    {id:'dining-4',name:'Dining Table 4p',icon:'🍽️',w:1.2,h:0.8,color:'#A07850',label:'Dining 4p'},
    {id:'dining-round',name:'Round Table 4p',icon:'🍽️',w:1.0,h:1.0,color:'#A07850',label:'Round Table'},
    {id:'coffee',name:'Coffee Table',icon:'☕',w:1.2,h:0.6,color:'#8B6840',label:'Coffee Table'},
    {id:'coffee-round',name:'Round Coffee Table',icon:'☕',w:0.8,h:0.8,color:'#8B6840',label:'Coffee Round'},
    {id:'side-table',name:'Side Table',icon:'🔲',w:0.5,h:0.5,color:'#B89870',label:'Side Table'},
    {id:'console',name:'Console Table',icon:'🔲',w:1.2,h:0.35,color:'#9A7850',label:'Console Table'},
    {id:'desk',name:'Desk',icon:'💻',w:1.2,h:0.6,color:'#6080A0',label:'Desk'},
    {id:'desk-corner',name:'Corner Desk',icon:'💻',w:1.6,h:1.0,color:'#6080A0',label:'Corner Desk'},
  ]},
  {cat:'Storage',items:[
    {id:'wardrobe-2',name:'Wardrobe 2-door',icon:'👕',w:1.0,h:0.6,color:'#6A8A6A',label:'Wardrobe 2d'},
    {id:'wardrobe-3',name:'Wardrobe 3-door',icon:'👕',w:1.5,h:0.6,color:'#6A8A6A',label:'Wardrobe 3d'},
    {id:'wardrobe-walk',name:'Walk-in Wardrobe',icon:'👗',w:2.0,h:1.5,color:'#5A7A5A',label:'Walk-in'},
    {id:'bookshelf',name:'Bookshelf',icon:'📚',w:0.8,h:0.3,color:'#A06040',label:'Bookshelf'},
    {id:'dresser',name:'Dresser',icon:'🗄️',w:0.9,h:0.45,color:'#908060',label:'Dresser'},
    {id:'cabinet',name:'Cabinet',icon:'🗄️',w:0.8,h:0.4,color:'#808060',label:'Cabinet'},
    {id:'shoe-rack',name:'Shoe Rack',icon:'👟',w:0.8,h:0.3,color:'#7A6850',label:'Shoe Rack'},
  ]},
  {cat:'TV & Media',items:[
    {id:'tv',name:'TV (55")',icon:'📺',w:1.35,h:0.08,color:'#202028',label:'TV 55"'},
    {id:'tv-65',name:'TV (65")',icon:'📺',w:1.55,h:0.08,color:'#202028',label:'TV 65"'},
    {id:'tv-cabinet',name:'TV Cabinet',icon:'📺',w:1.6,h:0.45,color:'#505060',label:'TV Cabinet'},
    {id:'tv-stand',name:'TV Stand',icon:'📺',w:1.2,h:0.35,color:'#404050',label:'TV Stand'},
    {id:'media-unit',name:'Media Unit',icon:'🎵',w:2.0,h:0.4,color:'#484858',label:'Media Unit'},
  ]},
  {cat:'Appliances',items:[
    {id:'fridge',name:'Fridge',icon:'🧊',w:0.7,h:0.7,color:'#A0B8C8',label:'Fridge'},
    {id:'fridge-2d',name:'Fridge 2-door',icon:'🧊',w:0.9,h:0.7,color:'#A0B8C8',label:'Fridge 2d'},
    {id:'washing',name:'Washing Machine',icon:'🌀',w:0.6,h:0.6,color:'#A0B8C8',label:'Washer'},
    {id:'dryer',name:'Dryer',icon:'🌀',w:0.6,h:0.6,color:'#B0B8C0',label:'Dryer'},
    {id:'dishwasher',name:'Dishwasher',icon:'🍽️',w:0.6,h:0.6,color:'#A8B8C8',label:'Dishwasher'},
    {id:'microwave',name:'Microwave',icon:'📦',w:0.55,h:0.4,color:'#808090',label:'Microwave'},
  ]},
  {cat:'Extras',items:[
    {id:'plant-l',name:'Large Plant',icon:'🌿',w:0.5,h:0.5,color:'#4A8A4A',label:'Plant L'},
    {id:'plant-s',name:'Small Plant',icon:'🌱',w:0.3,h:0.3,color:'#5A9A5A',label:'Plant S'},
    {id:'rug',name:'Area Rug',icon:'🟫',w:2.0,h:1.5,color:'rgba(160,130,90,0.35)',label:'Rug'},
    {id:'rug-round',name:'Round Rug',icon:'🟫',w:1.5,h:1.5,color:'rgba(160,130,90,0.35)',label:'Round Rug'},
    {id:'lamp',name:'Floor Lamp',icon:'💡',w:0.3,h:0.3,color:'#C8A830',label:'Lamp'},
    {id:'lamp-table',name:'Table Lamp',icon:'💡',w:0.25,h:0.25,color:'#C8A830',label:'Table Lamp'},
    {id:'mirror',name:'Full Mirror',icon:'🪞',w:0.5,h:1.5,color:'#C0C8D0',label:'Mirror'},
    {id:'exercise',name:'Exercise Mat',icon:'🧘',w:0.6,h:1.8,color:'#607860',label:'Exercise Mat'},
    {id:'bathtub',name:'Bathtub',icon:'🛁',w:0.75,h:1.7,color:'#B0C8D8',label:'Bathtub'},
    {id:'toilet',name:'Toilet',icon:'🚽',w:0.4,h:0.65,color:'#D0D8DC',label:'Toilet'},
    {id:'sink',name:'Sink',icon:'🚰',w:0.5,h:0.45,color:'#C0C8D0',label:'Sink'},
    {id:'shower',name:'Shower',icon:'🚿',w:0.9,h:0.9,color:'#B8D0DC',label:'Shower'},
  ]},
];

// ─── TEMPLATES (W, L in metres → array of [x,y] points) ──────────
const TEMPLATES={
  rect:   (W,L)=>[[0,0],[W,0],[W,L],[0,L]],
  lshape: (W,L)=>[[0,0],[W*0.58,0],[W*0.58,L*0.46],[W,L*0.46],[W,L],[0,L]],
  lshape2:(W,L)=>[[0,0],[W,0],[W,L*0.46],[W*0.42,L*0.46],[W*0.42,L],[0,L]],
  tshape: (W,L)=>[[0,0],[W,0],[W,L*0.46],[W*0.64,L*0.46],[W*0.64,L],[W*0.36,L],[W*0.36,L*0.46],[0,L*0.46]],
  ushape: (W,L)=>[[0,0],[W*0.32,0],[W*0.32,L*0.58],[W*0.68,L*0.58],[W*0.68,0],[W,0],[W,L],[0,L]],
  studio: (W,L)=>[[0,0],[W,0],[W,L*0.68],[W*0.62,L],[0,L]],
  bay:    (W,L)=>[[0,0],[W,0],[W,L],[W*0.64,L],[W*0.64,L*0.72],[W*0.36,L*0.72],[W*0.36,L],[0,L]],
  custom: (W,L)=>[[0,0],[W,0],[W,L],[0,L]],
};

// ─── STATE ───────────────────────────────────────────────────────
function esc(s){const d=document.createElement('div');d.textContent=String(s??'');return d.innerHTML;}

let SCALE=60;
let currentUnit='m'; // 'm' | 'ft' | 'cm'
let roomPoints=TEMPLATES.rect(3.5,3.5);
let items=[];
let walls=[];
let selected=null;
let history=[],future=[];
let isDragging=false,dragTarget=null,dragOffX=0,dragOffY=0;
let idCounter=0;
let currentTab='ai';
let drawMode=false;
let drawPoints=[];
let mousePt=null;
let activeTpl='rect';
let originalTpl='rect';

// ─── BOUNDING BOX ────────────────────────────────────────────────
function getBounds(){
  const xs=roomPoints.map(p=>p[0]),ys=roomPoints.map(p=>p[1]);
  return{minX:Math.min(...xs),minY:Math.min(...ys),maxX:Math.max(...xs),maxY:Math.max(...ys)};
}
function getCW(){const b=getBounds();return{W:(b.maxX-b.minX)*SCALE,H:(b.maxY-b.minY)*SCALE,ox:b.minX,oy:b.minY};}

// ─── RENDER CANVAS ────────────────────────────────────────────────
function renderCanvas(){
  const{W,H,ox,oy}=getCW();
  const canvas=document.getElementById('roomCanvas');
  canvas.style.width=W+'px';canvas.style.height=H+'px';canvas.style.background='transparent';canvas.style.position='relative';

  let svg=canvas.querySelector('.room-svg');
  if(!svg){svg=document.createElementNS('http://www.w3.org/2000/svg','svg');svg.classList.add('room-svg');svg.style.pointerEvents='none';canvas.appendChild(svg);}
  svg.setAttribute('width',W);svg.setAttribute('height',H);svg.style.width=W+'px';svg.style.height=H+'px';

  // Room polygon path
  const path=roomPoints.map((p,i)=>`${i===0?'M':'L'}${(p[0]-ox)*SCALE},${(p[1]-oy)*SCALE}`).join(' ')+'Z';
  const cid='rc'+Math.floor(Math.random()*99999);

  // Grid
  let grid='';
  const step=SCALE/2;
  for(let x=0;x<=W;x+=step) grid+=`<line x1="${x}" y1="0" x2="${x}" y2="${H}" stroke="${Math.abs(x%SCALE)<0.5?'#C8D4E0':'#E0E8F0'}" stroke-width="${Math.abs(x%SCALE)<0.5?1:0.5}"/>`;
  for(let y=0;y<=H;y+=step) grid+=`<line x1="0" y1="${y}" x2="${W}" y2="${y}" stroke="${Math.abs(y%SCALE)<0.5?'#C8D4E0':'#E0E8F0'}" stroke-width="${Math.abs(y%SCALE)<0.5?1:0.5}"/>`;

  // ── Rulers on all 4 sides + wall segment labels ────────────────
  const b=getBounds();
  const roomW=b.maxX-b.minX, roomH=b.maxY-b.minY;
  window._RULER=28;
  const RULER=28;
  const tickLen=6;
  const labelColor='#1A2840';
  const rulerBg='rgba(224,232,242,0.98)';
  const tickColor='#5878A8';
  const majorColor='#1A2840';

  // Smart tick interval
  let tickStep=1;
  if(currentUnit==='cm'){
    tickStep = SCALE>=100?0.25:SCALE>=60?0.5:1;
  } else if(currentUnit==='ft'){
    tickStep = SCALE>=100?0.3048:0.6096;
  } else {
    tickStep = SCALE>=100?0.5:1;
  }

  // Helper: ruler strip with ticks and labels
  function makeHRuler(x0,y0,len,metreLen,isTop){
    // x0,y0 = top-left of strip; len=px width; metreLen=metres
    // isTop: ticks point down from top edge, else up from bottom
    let g=`<rect x="${x0}" y="${y0}" width="${len}" height="${RULER}" fill="${rulerBg}" stroke="#D0C8C0" stroke-width="0.5"/>`;
    let tt=0;
    while(tt<=metreLen+0.001){
      const px=x0+tt*SCALE;
      const isMaj=Math.abs(tt%1)<0.001;
      const ty=isTop?y0+RULER-tickLen:y0;
      const ty2=isTop?y0+RULER:y0+tickLen;
      g+=`<line x1="${px}" y1="${ty}" x2="${px}" y2="${ty2}" stroke="${isMaj?majorColor:tickColor}" stroke-width="${isMaj?1.5:0.7}"/>`;
      if(isMaj&&tt>0&&tt<metreLen-0.01){
        const labY=isTop?y0+RULER-tickLen-2:y0+tickLen+9;
        g+=`<text x="${px}" y="${labY}" text-anchor="middle" font-size="11" fill="${tickColor}" font-family="DM Sans,sans-serif" font-weight="500">${fmtM(b.minX+tt)}</text>`;
      }
      tt=Math.round((tt+tickStep)*1000)/1000;
    }
    // Total label centred
    g+=`<text x="${x0+len/2}" y="${isTop?y0+RULER-2:y0+tickLen+9}" text-anchor="middle" font-size="13" font-weight="700" fill="${labelColor}" font-family="DM Sans,sans-serif">${fmtM(roomW)}</text>`;
    return g;
  }

  function makeVRuler(x0,y0,len,metreLen,isLeft){
    // isLeft: ticks point right; else ticks point left
    let g=`<rect x="${x0}" y="${y0}" width="${RULER}" height="${len}" fill="${rulerBg}" stroke="#D0C8C0" stroke-width="0.5"/>`;
    let ss=0;
    while(ss<=metreLen+0.001){
      const py=y0+ss*SCALE;
      const isMaj=Math.abs(ss%1)<0.001;
      const tx=isLeft?x0+RULER-tickLen:x0;
      const tx2=isLeft?x0+RULER:x0+tickLen;
      g+=`<line x1="${tx}" y1="${py}" x2="${tx2}" y2="${py}" stroke="${isMaj?majorColor:tickColor}" stroke-width="${isMaj?1.5:0.7}"/>`;
      if(isMaj&&ss>0&&ss<metreLen-0.01){
        const labX=isLeft?x0+RULER-tickLen-2:x0+tickLen+2;
        const anchor=isLeft?'end':'start';
        g+=`<text x="${labX}" y="${py+4}" text-anchor="${anchor}" font-size="11" fill="${tickColor}" font-family="DM Sans,sans-serif" font-weight="500">${fmtM(b.minY+ss)}</text>`;
      }
      ss=Math.round((ss+tickStep)*1000)/1000;
    }
    // Total label rotated at centre
    const cx=x0+RULER/2, cy=y0+len/2;
    g+=`<text x="${cx}" y="${cy}" text-anchor="middle" font-size="13" font-weight="700" fill="${labelColor}" font-family="DM Sans,sans-serif" transform="rotate(-90,${cx},${cy})">${fmtM(roomH)}</text>`;
    return g;
  }

  // ── 4 rulers: left, right, top, bottom ──────────────────────────
  // Layout:  RULER | canvas(W) | RULER
  //          with RULER strips top and bottom too
  // Total SVG: W + RULER*2 wide, H + RULER*2 tall
  // Room canvas is offset by (RULER, RULER)

  const totalW = W + RULER*2;
  const totalH = H + RULER*2;

  // Top ruler (horizontal, ticks down)
  const topRuler = `<g>${makeHRuler(RULER, 0, W, roomW, true)}</g>`;
  // Bottom ruler (horizontal, ticks up)
  const botRuler = `<g>${makeHRuler(RULER, H+RULER, W, roomW, false)}</g>`;
  // Left ruler (vertical, ticks right)
  const leftRuler = `<g>${makeVRuler(0, RULER, H, roomH, true)}</g>`;
  // Right ruler (vertical, ticks left)
  const rightRuler = `<g>${makeVRuler(W+RULER, RULER, H, roomH, false)}</g>`;

  // Corner boxes
  const corners = `
    <rect x="0"        y="0"        width="${RULER}" height="${RULER}" fill="#D0DCF0" stroke="#B8C8E0" stroke-width="0.5"/>
    <rect x="${W+RULER}" y="0"      width="${RULER}" height="${RULER}" fill="#D0DCF0" stroke="#B8C8E0" stroke-width="0.5"/>
    <rect x="0"        y="${H+RULER}" width="${RULER}" height="${RULER}" fill="#D0DCF0" stroke="#B8C8E0" stroke-width="0.5"/>
    <rect x="${W+RULER}" y="${H+RULER}" width="${RULER}" height="${RULER}" fill="#D0DCF0" stroke="#B8C8E0" stroke-width="0.5"/>
  `;

  // ── Wall segment dimension labels (for non-rectangular shapes) ───
  // Draw a small label on each wall segment showing its length
  let wallSegLabels='';
  if(roomPoints.length>4){ // only for non-rectangular rooms
    for(let i=0;i<roomPoints.length;i++){
      const a=roomPoints[i], bPt=roomPoints[(i+1)%roomPoints.length];
      const ax=RULER+(a[0]-b.minX)*SCALE, ay=RULER+(a[1]-b.minY)*SCALE;
      const bx=RULER+(bPt[0]-b.minX)*SCALE, by=RULER+(bPt[1]-b.minY)*SCALE;
      const segLen=Math.sqrt((bPt[0]-a[0])**2+(bPt[1]-a[1])**2);
      if(segLen<0.05) continue;
      const midX=(ax+bx)/2, midY=(ay+by)/2;
      const angle=Math.atan2(by-ay,bx-ax)*180/Math.PI;
      const labelAngle=Math.abs(angle)>90?angle+180:angle;
      const lbl=fmtM(segLen);
      const lw=lbl.length*6+10;
      // Offset label slightly outward from wall
      const nx=Math.sin(angle*Math.PI/180)*14, ny=-Math.cos(angle*Math.PI/180)*14;
      wallSegLabels+=`<g transform="translate(${midX+nx},${midY+ny}) rotate(${labelAngle})">
        <rect x="${-lw/2}" y="-9" width="${lw}" height="14" fill="rgba(30,50,100,0.85)" rx="3"/>
        <text x="0" y="1" text-anchor="middle" font-size="11" fill="#fff" font-family="DM Sans,sans-serif" font-weight="600">${lbl}</text>
      </g>`;
    }
  }

  svg.setAttribute('width', totalW);
  svg.setAttribute('height', totalH);
  svg.style.width=totalW+'px';
  svg.style.height=totalH+'px';

  // Update global RULER offset — room is now offset by RULER on BOTH axes
  window._RULER=RULER;
  window._RULER_TOP=RULER;

  const labels=topRuler+botRuler+leftRuler+rightRuler+corners+wallSegLabels;

  let wallSvg=""; // walls rendered as DOM elements in renderWalls()

  // Draw mode preview
  let drawSvg='';

  // ── draw mode with NO points yet — just show cursor position ──────
  if(drawMode && drawPoints.length===0 && mousePt){
    const mx=(mousePt[0]-ox)*SCALE, my=(mousePt[1]-oy)*SCALE;
    // Crosshair
    drawSvg+=`<line x1="${mx-12}" y1="${my}" x2="${mx+12}" y2="${my}" stroke="#C4663A" stroke-width="1" opacity="0.7"/>`;
    drawSvg+=`<line x1="${mx}" y1="${my-12}" x2="${mx}" y2="${my+12}" stroke="#C4663A" stroke-width="1" opacity="0.7"/>`;
    drawSvg+=`<circle cx="${mx}" cy="${my}" r="3.5" fill="#C4663A"/>`;
    // Coordinate tooltip
    const coordLabel=fmtM(mousePt[0]-ox)+', '+fmtM(mousePt[1]-oy);
    const tipX=mx+14, tipY=my-10;
    drawSvg+=`<rect x="${tipX-3}" y="${tipY-11}" width="${coordLabel.length*6.5+6}" height="16" fill="rgba(30,25,20,0.82)" rx="3"/>`;
    drawSvg+=`<text x="${tipX}" y="${tipY}" font-size="10" fill="#fff" font-family="DM Sans,sans-serif" font-weight="500">${coordLabel}</text>`;
  }

  // ── draw mode WITH points placed ──────────────────────────────────
  if(drawMode&&drawPoints.length>0){
    // Placed wall segments
    const pts=drawPoints.map(p=>`${(p[0]-ox)*SCALE},${(p[1]-oy)*SCALE}`).join(' ');
    drawSvg+=`<polyline points="${pts}" fill="none" stroke="#C4663A" stroke-width="2.5" stroke-dasharray="6,3"/>`;

    // Segment length labels on placed walls
    for(let i=1;i<drawPoints.length;i++){
      const a=drawPoints[i-1], b=drawPoints[i];
      const ax=(a[0]-ox)*SCALE, ay=(a[1]-oy)*SCALE;
      const bx=(b[0]-ox)*SCALE, by=(b[1]-oy)*SCALE;
      const midX=(ax+bx)/2, midY=(ay+by)/2;
      const dist=Math.sqrt((b[0]-a[0])**2+(b[1]-a[1])**2);
      const segLabel=fmtM(dist);
      const angle=Math.atan2(by-ay,bx-ax)*180/Math.PI;
      const labelAngle=Math.abs(angle)>90?angle+180:angle;
      const lw=segLabel.length*6.5+8;
      drawSvg+=`<g transform="translate(${midX},${midY}) rotate(${labelAngle})">
        <rect x="${-lw/2}" y="-11" width="${lw}" height="14" fill="rgba(196,102,58,0.9)" rx="3"/>
        <text x="0" y="0" text-anchor="middle" font-size="10" fill="#fff" font-family="DM Sans,sans-serif" font-weight="500">${segLabel}</text>
      </g>`;
    }

    // First point — close indicator
    const fp=drawPoints[0];
    const fpx=(fp[0]-ox)*SCALE, fpy=(fp[1]-oy)*SCALE;
    drawSvg+=`<circle cx="${fpx}" cy="${fpy}" r="10" fill="rgba(196,102,58,0.15)" stroke="#C4663A" stroke-width="2"/>`;
    drawSvg+=`<circle cx="${fpx}" cy="${fpy}" r="4.5" fill="#C4663A"/>`;
    // "Click to close" hint near first point
    if(drawPoints.length>=3){
      drawSvg+=`<text x="${fpx+14}" y="${fpy-8}" font-size="9" fill="#C4663A" font-family="DM Sans,sans-serif" font-weight="500">← close shape</text>`;
    }

    // All other placed points
    drawPoints.slice(1).forEach((p,i)=>{
      const px=(p[0]-ox)*SCALE, py=(p[1]-oy)*SCALE;
      drawSvg+=`<circle cx="${px}" cy="${py}" r="4" fill="#C4663A" stroke="#fff" stroke-width="1.5"/>`;
    });

    // Live line from last point to mouse
    if(mousePt){
      const lp=drawPoints[drawPoints.length-1];
      const lpx=(lp[0]-ox)*SCALE, lpy=(lp[1]-oy)*SCALE;
      const mpx=(mousePt[0]-ox)*SCALE, mpy=(mousePt[1]-oy)*SCALE;
      const liveDist=Math.sqrt((mousePt[0]-lp[0])**2+(mousePt[1]-lp[1])**2);

      // Dashed preview line
      drawSvg+=`<line x1="${lpx}" y1="${lpy}" x2="${mpx}" y2="${mpy}" stroke="#C4663A" stroke-width="1.5" stroke-dasharray="5,3" opacity="0.7"/>`;

      // Cursor crosshair
      drawSvg+=`<line x1="${mpx-10}" y1="${mpy}" x2="${mpx+10}" y2="${mpy}" stroke="#C4663A" stroke-width="1" opacity="0.8"/>`;
      drawSvg+=`<line x1="${mpx}" y1="${mpy-10}" x2="${mpx}" y2="${mpy+10}" stroke="#C4663A" stroke-width="1" opacity="0.8"/>`;
      drawSvg+=`<circle cx="${mpx}" cy="${mpy}" r="3.5" fill="#C4663A"/>`;

      // Live segment length label — follows the cursor
      if(liveDist>0.05){
        const midX=(lpx+mpx)/2, midY=(lpy+mpy)/2;
        const angle=Math.atan2(mpy-lpy,mpx-lpx)*180/Math.PI;
        const labelAngle=Math.abs(angle)>90?angle+180:angle;
        const liveLabel=fmtM(liveDist);
        const lw=liveLabel.length*6.5+8;
        drawSvg+=`<g transform="translate(${midX},${midY}) rotate(${labelAngle})">
          <rect x="${-lw/2}" y="-11" width="${lw}" height="14" fill="rgba(30,25,20,0.78)" rx="3"/>
          <text x="0" y="0" text-anchor="middle" font-size="10" fill="#fff" font-family="DM Sans,sans-serif" font-weight="500">${liveLabel}</text>
        </g>`;
      }

      // Cursor coordinate tooltip (top-right of cursor)
      const coordLabel=fmtM(mousePt[0]-ox)+', '+fmtM(mousePt[1]-oy);
      const cw=coordLabel.length*6+8;
      const tipX=mpx+14, tipY=mpy-14;
      drawSvg+=`<rect x="${tipX-2}" y="${tipY-12}" width="${cw}" height="16" fill="rgba(30,25,20,0.82)" rx="3"/>`;
      drawSvg+=`<text x="${tipX+1}" y="${tipY}" font-size="10" fill="rgba(255,255,255,0.9)" font-family="DM Sans,sans-serif">${coordLabel}</text>`;

      // Snap indicator — small square at snapped position
      drawSvg+=`<rect x="${mpx-4}" y="${mpy-4}" width="8" height="8" fill="none" stroke="#C4663A" stroke-width="1.2" opacity="0.6"/>`;
    }

    // Total perimeter so far
    if(drawPoints.length>=2){
      let perim=0;
      for(let i=1;i<drawPoints.length;i++){
        perim+=Math.sqrt((drawPoints[i][0]-drawPoints[i-1][0])**2+(drawPoints[i][1]-drawPoints[i-1][1])**2);
      }
      drawSvg+=`<rect x="4" y="4" width="${('Total: '+fmtM(perim)).length*6.8+8}" height="18" fill="rgba(30,25,20,0.7)" rx="3"/>`;
      drawSvg+=`<text x="8" y="16" font-size="10" fill="rgba(255,255,255,0.85)" font-family="DM Sans,sans-serif">Total: ${fmtM(perim)}</text>`;
    }
  }

  svg.innerHTML=`
    <defs>
      <clipPath id="${cid}"><path d="${path}" transform="translate(${RULER},${RULER})"/></clipPath>
      <mask id="voidMask${cid}">
        <rect x="${RULER}" y="${RULER}" width="${W}" height="${H}" fill="white"/>
        <path d="${path}" fill="black" transform="translate(${RULER},${RULER})"/>
      </mask>
    </defs>

    <!-- Void area: matches canvas bg colour + same dot pattern -->
    <defs>
      <pattern id="canvasDots${cid}" patternUnits="userSpaceOnUse" width="20" height="20">
        <circle cx="11" cy="11" r="1" fill="rgba(100,120,160,0.12)"/>
      </pattern>
    </defs>
    <rect x="${RULER}" y="${RULER}" width="${W}" height="${H}" fill="#E8EEF4" mask="url(#voidMask${cid})"/>
    <rect x="${RULER}" y="${RULER}" width="${W}" height="${H}" fill="url(#canvasDots${cid})" mask="url(#voidMask${cid})"/>

    <!-- Room content offset by RULER on both x and y (rulers on all sides) -->
    <g transform="translate(${RULER},${RULER})">
      <path d="${path}" fill="#FFFFFF"/>
      <g clip-path="url(#${cid})">${grid}</g>
      <!-- Wall outer shadow -->
      <path d="${path}" fill="none" stroke="rgba(40,60,100,0.12)" stroke-width="12" stroke-linejoin="round"/>
      <!-- Wall body - dark architectural line -->
      <path d="${path}" fill="none" stroke="#2C3E50" stroke-width="5" stroke-linejoin="round"/>
      <!-- Wall inner highlight -->
      <path d="${path}" fill="none" stroke="rgba(255,255,255,0.4)" stroke-width="1" stroke-linejoin="round"/>
      ${drawSvg}
    </g>

    ${labels}
  `;
}

// ─── SVG FURNITURE DRAWINGS (top-down architectural style) ───────
function getFurnSVG(furnId, w, h, rot=0){
  const p=3;
  const iw=w-p*2, ih=h-p*2;
  const cx=w/2, cy=h/2;
  const r=(v,d=1)=>Math.round(v*10**d)/10**d;

  const svg=(children,fill='#EEE8DF',stroke='#B0A898',rx=3)=>
    `<svg width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" xmlns="http://www.w3.org/2000/svg" style="position:absolute;top:0;left:0;pointer-events:none">
      <rect x="0" y="0" width="${w}" height="${h}" fill="${fill}" rx="${rx}"/>
      ${children}
      <rect x="0.5" y="0.5" width="${w-1}" height="${h-1}" fill="none" stroke="${stroke}" stroke-width="1.5" rx="${rx}"/>
    </svg>`;

  // ── BEDS ──────────────────────────────────────────────────────────
  if(['bed-king','bed-queen','bed-double','bed-single','bed-bunk'].includes(furnId)){
    const isSingle=furnId==='bed-single';
    const frameColor='#5A7A8A';
    const headboardColor='#4A6878';
    const mattressColor='#EEF4F8';
    const sheetColor='#C8DCF0';
    const pillowColor='#FFFFFF';

    // rot determines which side has the headboard:
    // 0   → headboard at TOP    (h > w, portrait)
    // 90  → headboard at RIGHT  (w > h, landscape, head on right)
    // 180 → headboard at BOTTOM (h > w, portrait, head at bottom)
    // 270 → headboard at LEFT   (w > h, landscape, head on left)
    const bedRot=rot%360;

    // We always draw the bed in its current w×h orientation
    // and place the headboard on the correct edge based on bedRot

    // Determine head edge thickness (shorter dimension proportion)
    const shortSide=Math.min(w,h);
    const longSide=Math.max(w,h);
    const headThick=Math.min(shortSide*0.18, 28);
    const footThick=Math.min(shortSide*0.06, 10);
    const railThick=3;

    // Build bed pointing UP, then rotate entire SVG
    // Headboard at top, foot at bottom, rails on sides
    // Then rotate to match bedRot

    // Use w/h as-is since swapping already happened
    // Detect orientation: if w > h, bed is landscape → headboard was originally at top of portrait
    // We track actual direction via rot

    // Draw in a normalized way: headboard always "at top" in local coords,
    // then rotate the whole thing
    // But since w and h are already swapped, we must draw in actual w×h
    // and infer head position from rot

    // Simple approach: draw headboard on the edge indicated by bedRot
    // bedRot=0: top edge, bedRot=90: right edge, bedRot=180: bottom, bedRot=270: left

    const bedInner=(bw,bh)=>{
      // Always draws headboard at TOP in local bw×bh space
      const hh=Math.min(bh*0.18, 28);
      const fh=Math.min(bh*0.06, 10);
      const mattH=bh-hh-fh;
      const shY=hh+mattH*0.35;
      const shH=mattH*0.65;
      const plY=hh+5;
      const plH=Math.min(mattH*0.26, mattH*0.32-8);

      let pil='';
      if(isSingle){
        const pw2=bw*0.55, px2=(bw-pw2)/2;
        pil=`<rect x="${r(px2)}" y="${r(plY)}" width="${r(pw2)}" height="${r(plH)}" fill="${pillowColor}" rx="4" stroke="#C8D8E8" stroke-width="1"/>
             <rect x="${r(px2+4)}" y="${r(plY+3)}" width="${r(pw2-8)}" height="${r(plH-6)}" fill="none" stroke="#D8E8F4" stroke-width="0.8" rx="3"/>`;
      } else {
        const gap=5, mg=8;
        const pw2=(bw-mg*2-gap)/2;
        pil=`<rect x="${r(mg)}" y="${r(plY)}" width="${r(pw2)}" height="${r(plH)}" fill="${pillowColor}" rx="4" stroke="#C8D8E8" stroke-width="1"/>
             <rect x="${r(mg+3)}" y="${r(plY+3)}" width="${r(pw2-6)}" height="${r(plH-6)}" fill="none" stroke="#D8E8F4" stroke-width="0.7" rx="3"/>
             <rect x="${r(mg+pw2+gap)}" y="${r(plY)}" width="${r(pw2)}" height="${r(plH)}" fill="${pillowColor}" rx="4" stroke="#C8D8E8" stroke-width="1"/>
             <rect x="${r(mg+pw2+gap+3)}" y="${r(plY+3)}" width="${r(pw2-6)}" height="${r(plH-6)}" fill="none" stroke="#D8E8F4" stroke-width="0.7" rx="3"/>`;
      }

      return `
        <!-- Frame -->
        <rect x="0" y="0" width="${bw}" height="${bh}" fill="${frameColor}" rx="3"/>
        <!-- Mattress -->
        <rect x="3" y="${r(hh)}" width="${bw-6}" height="${r(mattH)}" fill="${mattressColor}" rx="1"/>
        <rect x="3" y="${r(hh)}" width="${bw-6}" height="${r(mattH)}" fill="none" stroke="#C0CCD8" stroke-width="0.8" rx="1"/>
        <!-- Sheet -->
        <rect x="5" y="${r(shY)}" width="${bw-10}" height="${r(shH)}" fill="${sheetColor}" rx="2"/>
        <rect x="5" y="${r(shY)}" width="${bw-10}" height="${r(shH)}" fill="none" stroke="#A8C0D0" stroke-width="0.7" rx="2"/>
        <line x1="5" y1="${r(shY+shH*0.15)}" x2="${bw-5}" y2="${r(shY+shH*0.15)}" stroke="#A8C0D0" stroke-width="0.6" opacity="0.7"/>
        <!-- Pillows -->
        ${pil}
        <!-- Headboard -->
        <rect x="0" y="0" width="${bw}" height="${r(hh)}" fill="${headboardColor}" rx="3"/>
        <rect x="4" y="3" width="${bw-8}" height="${r(hh-5)}" fill="${frameColor}" rx="2" opacity="0.5"/>
        <rect x="0" y="${r(hh-4)}" width="${bw}" height="5" fill="${frameColor}"/>
        <!-- Footboard -->
        <rect x="0" y="${r(bh-fh)}" width="${bw}" height="${r(fh)}" fill="${frameColor}" rx="2"/>
        <!-- Side rails -->
        <rect x="0" y="${r(hh)}" width="3" height="${r(mattH)}" fill="${frameColor}"/>
        <rect x="${bw-3}" y="${r(hh)}" width="3" height="${r(mattH)}" fill="${frameColor}"/>
        <!-- Border -->
        <rect x="0.5" y="0.5" width="${bw-1}" height="${bh-1}" fill="none" stroke="#6A5535" stroke-width="1.5" rx="3"/>`;
    };

    // Rotate the inner drawing to match bedRot
    // bedRot=0: no rotation (headboard top)
    // bedRot=90: rotate 90° CW → headboard moves to RIGHT
    // bedRot=180: rotate 180° → headboard moves to BOTTOM
    // bedRot=270: rotate 270° CW → headboard moves to LEFT
    // We draw inner content in a virtual (iw×ih) space where iw=long, ih=short for portrait
    // and then transform to fit actual w×h

    let innerSvg='';
    if(bedRot===0){
      // Portrait: headboard top — draw in w×h
      innerSvg=bedInner(w,h);
      return `<svg width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" xmlns="http://www.w3.org/2000/svg" style="position:absolute;top:0;left:0;pointer-events:none">${innerSvg}</svg>`;
    } else if(bedRot===90){
      // Landscape: headboard RIGHT — draw portrait (h×w), rotate 90° CW, translate
      innerSvg=bedInner(h,w);
      return `<svg width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" xmlns="http://www.w3.org/2000/svg" style="position:absolute;top:0;left:0;pointer-events:none">
        <g transform="rotate(90,${w/2},${h/2}) translate(${(w-h)/2},${(h-w)/2})">${innerSvg}</g>
      </svg>`;
    } else if(bedRot===180){
      // Portrait flipped: headboard BOTTOM
      innerSvg=bedInner(w,h);
      return `<svg width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" xmlns="http://www.w3.org/2000/svg" style="position:absolute;top:0;left:0;pointer-events:none">
        <g transform="rotate(180,${w/2},${h/2})">${innerSvg}</g>
      </svg>`;
    } else {
      // 270: Landscape: headboard LEFT
      innerSvg=bedInner(h,w);
      return `<svg width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" xmlns="http://www.w3.org/2000/svg" style="position:absolute;top:0;left:0;pointer-events:none">
        <g transform="rotate(270,${w/2},${h/2}) translate(${(w-h)/2},${(h-w)/2})">${innerSvg}</g>
      </svg>`;
    }
  }

  // ── BEDSIDE TABLE ─────────────────────────────────────────────────
  if(furnId==='bedside'||furnId==='bedside-r'){
    const wood='#C4B48A', drw='#D8C8A0', hdl='#8A7850', frame='#9A8860';
    return `<svg width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" xmlns="http://www.w3.org/2000/svg" style="position:absolute;top:0;left:0;pointer-events:none">
      <rect x="0" y="0" width="${w}" height="${h}" fill="${frame}" rx="3"/>
      <!-- Top surface -->
      <rect x="2" y="2" width="${w-4}" height="${r(h*0.45)}" fill="${wood}" rx="2"/>
      <!-- Small lamp circle on top -->
      <circle cx="${cx}" cy="${r(h*0.22)}" r="${r(Math.min(iw,ih)*0.18)}" fill="rgba(255,220,100,0.25)" stroke="#C8A030" stroke-width="0.8"/>
      <circle cx="${cx}" cy="${r(h*0.22)}" r="2" fill="#C8A030"/>
      <!-- Drawer -->
      <rect x="2" y="${r(h*0.5)}" width="${w-4}" height="${r(h*0.44)}" fill="${drw}" rx="2" stroke="${frame}" stroke-width="0.6"/>
      <!-- Handle -->
      <rect x="${r(cx-8)}" y="${r(h*0.69)}" width="16" height="4" fill="${hdl}" rx="2"/>
    </svg>`;
  }

  // ── SOFA ──────────────────────────────────────────────────────────
  if(furnId==='sofa-3'||furnId==='sofa-2'){
    const cushCount=furnId==='sofa-3'?3:2;
    const bkH=Math.min(ih*0.3,18);     // backrest depth
    const armW=Math.min(iw*0.08,10);   // armrest width
    const cGap=3;
    const cW=(iw-armW*2-cGap*(cushCount-1))/cushCount;
    const cH=ih-bkH-4;
    // Colour palette: warm linen
    const frame='#8B7355', back='#A08060', cushFill='#F5EDE0', cushStroke='#C8A878', armFill='#957050';
    let cushions='';
    for(let i=0;i<cushCount;i++){
      const cx2=r(armW+i*(cW+cGap));
      const cy2=r(bkH+2);
      cushions+=`
        <rect x="${cx2}" y="${cy2}" width="${r(cW)}" height="${r(cH)}" fill="${cushFill}" rx="4" stroke="${cushStroke}" stroke-width="1"/>
        <rect x="${r(parseFloat(cx2)+3)}" y="${r(parseFloat(cy2)+3)}" width="${r(cW-6)}" height="${r(cH-6)}" fill="none" stroke="${cushStroke}" stroke-width="0.4" rx="3" opacity="0.5"/>
        <path d="M${r(parseFloat(cx2)+5)},${r(parseFloat(cy2)+cH*0.55)} Q${r(parseFloat(cx2)+cW/2)},${r(parseFloat(cy2)+cH*0.42)} ${r(parseFloat(cx2)+cW-5)},${r(parseFloat(cy2)+cH*0.55)}" fill="none" stroke="${cushStroke}" stroke-width="0.8" opacity="0.6"/>`;
    }
    return `<svg width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" xmlns="http://www.w3.org/2000/svg" style="position:absolute;top:0;left:0;pointer-events:none">
      <!-- Frame -->
      <rect x="0" y="0" width="${w}" height="${h}" fill="${frame}" rx="4"/>
      <!-- Backrest -->
      <rect x="${r(armW)}" y="0" width="${r(iw-armW*2)}" height="${r(bkH)}" fill="${back}" rx="2"/>
      <!-- Back cushion divisions -->
      ${Array.from({length:cushCount},(_,i)=>`<rect x="${r(armW+i*(cW+cGap)+1)}" y="1" width="${r(cW-2)}" height="${r(bkH-2)}" fill="${cushFill}" rx="2" opacity="0.5"/>`).join('')}
      <!-- Arms -->
      <rect x="0" y="0" width="${r(armW)}" height="${h}" fill="${armFill}" rx="3"/>
      <rect x="${r(w-armW)}" y="0" width="${r(armW)}" height="${h}" fill="${armFill}" rx="3"/>
      <!-- Arm top detail -->
      <rect x="1" y="1" width="${r(armW-2)}" height="${r(h*0.35)}" fill="rgba(255,255,255,0.12)" rx="2"/>
      <rect x="${r(w-armW+1)}" y="1" width="${r(armW-2)}" height="${r(h*0.35)}" fill="rgba(255,255,255,0.12)" rx="2"/>
      <!-- Seat cushions -->
      ${cushions}
      <!-- Outer border -->
      <rect x="0.5" y="0.5" width="${w-1}" height="${h-1}" fill="none" stroke="${frame}" stroke-width="1.5" rx="4"/>
    </svg>`;
  }

  // ── ARMCHAIR ──────────────────────────────────────────────────────
  if(furnId==='armchair'){
    const bk=Math.min(ih*0.28,16), arm=Math.min(iw*0.14,10);
    const seatW=iw-arm*2, seatH=ih-bk-2;
    const frame='#7A6040', back='#9A8060', seat='#F0E4CC', armC='#8A7050';
    return `<svg width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" xmlns="http://www.w3.org/2000/svg" style="position:absolute;top:0;left:0;pointer-events:none">
      <rect x="0" y="0" width="${w}" height="${h}" fill="${frame}" rx="5"/>
      <!-- Backrest with subtle padding detail -->
      <rect x="${r(arm)}" y="0" width="${r(seatW)}" height="${r(bk)}" fill="${back}" rx="3"/>
      <rect x="${r(arm+3)}" y="2" width="${r(seatW-6)}" height="${r(bk-4)}" fill="rgba(255,255,255,0.15)" rx="2"/>
      <!-- Arms with rounded tops -->
      <rect x="0" y="0" width="${r(arm)}" height="${h}" fill="${armC}" rx="4"/>
      <rect x="${r(w-arm)}" y="0" width="${r(arm)}" height="${h}" fill="${armC}" rx="4"/>
      <rect x="1" y="1" width="${r(arm-2)}" height="${r(h*0.3)}" fill="rgba(255,255,255,0.15)" rx="3"/>
      <rect x="${r(w-arm+1)}" y="1" width="${r(arm-2)}" height="${r(h*0.3)}" fill="rgba(255,255,255,0.15)" rx="3"/>
      <!-- Single seat cushion -->
      <rect x="${r(arm+2)}" y="${r(bk+2)}" width="${r(seatW-4)}" height="${r(seatH-2)}" fill="${seat}" rx="4" stroke="${back}" stroke-width="0.8"/>
      <rect x="${r(arm+5)}" y="${r(bk+5)}" width="${r(seatW-10)}" height="${r(seatH-8)}" fill="none" stroke="${back}" stroke-width="0.4" rx="3" opacity="0.5"/>
      <!-- Cushion seam -->
      <path d="M${r(arm+6)},${r(bk+seatH*0.55)} Q${cx},${r(bk+seatH*0.42)} ${r(w-arm-6)},${r(bk+seatH*0.55)}" fill="none" stroke="${back}" stroke-width="0.8" opacity="0.55"/>
    </svg>`;
  }

  // ── OTTOMAN ───────────────────────────────────────────────────────
  if(furnId==='ottoman'){
    const fr='#8A7050', top='#C8B078', btn='#7A6040';
    return `<svg width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" xmlns="http://www.w3.org/2000/svg" style="position:absolute;top:0;left:0;pointer-events:none">
      <!-- Body -->
      <rect x="0" y="0" width="${w}" height="${h}" fill="${fr}" rx="5"/>
      <!-- Top surface -->
      <rect x="3" y="3" width="${w-6}" height="${h-6}" fill="${top}" rx="4"/>
      <!-- Tufting pattern — 3×2 grid of buttons -->
      ${[0.25,0.5,0.75].map(fx=>[0.33,0.67].map(fy=>`<circle cx="${r(fx*w)}" cy="${r(fy*h)}" r="2.5" fill="${btn}" stroke="rgba(255,255,255,0.2)" stroke-width="0.5"/>`).join('')).join('')}
      <!-- Stitch lines between buttons -->
      <line x1="${r(w*0.25)}" y1="${r(h*0.33)}" x2="${r(w*0.5)}" y2="${r(h*0.33)}" stroke="${btn}" stroke-width="0.5" opacity="0.4"/>
      <line x1="${r(w*0.5)}" y1="${r(h*0.33)}" x2="${r(w*0.75)}" y2="${r(h*0.33)}" stroke="${btn}" stroke-width="0.5" opacity="0.4"/>
      <line x1="${r(w*0.25)}" y1="${r(h*0.67)}" x2="${r(w*0.5)}" y2="${r(h*0.67)}" stroke="${btn}" stroke-width="0.5" opacity="0.4"/>
      <line x1="${r(w*0.5)}" y1="${r(h*0.67)}" x2="${r(w*0.75)}" y2="${r(h*0.67)}" stroke="${btn}" stroke-width="0.5" opacity="0.4"/>
    </svg>`;
  }

  // ── DINING CHAIR ──────────────────────────────────────────────────
  if(furnId==='chair'){
    return svg(`
      <rect x="${p}" y="${p}" width="${iw}" height="${r(ih*0.28)}" fill="#C8B890" rx="2"/>
      <rect x="${r(p+iw*0.1)}" y="${r(p+ih*0.33)}" width="${r(iw*0.8)}" height="${r(ih*0.62)}" fill="#F0E8D4" rx="3" stroke="#C0A880" stroke-width="0.8"/>
      <path d="M${r(p+iw*0.2)},${r(p+ih*0.6)} Q${cx},${r(p+ih*0.52)} ${r(p+iw*0.8)},${r(p+ih*0.6)}" fill="none" stroke="#C0A880" stroke-width="0.6" opacity="0.7"/>
    `,'#E8DCC8','#B0A080');
  }

  // ── STOOL ─────────────────────────────────────────────────────────
  if(furnId==='stool'){
    return `<svg width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" xmlns="http://www.w3.org/2000/svg" style="position:absolute;top:0;left:0;pointer-events:none">
      <ellipse cx="${cx}" cy="${cy}" rx="${r(iw/2)}" ry="${r(ih/2)}" fill="#D8C8A8" stroke="#A89870" stroke-width="1.5"/>
      <ellipse cx="${cx}" cy="${cy}" rx="${r(iw/2-5)}" ry="${r(ih/2-5)}" fill="#E8D8B8" stroke="#A89870" stroke-width="0.7" opacity="0.8"/>
      <circle cx="${cx}" cy="${cy}" r="2.5" fill="#A89870"/>
    </svg>`;
  }

  // ── DINING TABLE (rectangular) ────────────────────────────────────
  if(furnId==='dining-6'||furnId==='dining-4'){
    // dining-4: 2 top + 2 bottom = 4 seats total
    // dining-6: 2 top + 2 bottom + 1 left + 1 right = 6 seats total
    const sw=13, sh=10; // chair width, depth
    const gap=3;        // gap between chair and table edge
    const tX=sw+gap, tY=sh+gap;
    const tW=w-tX*2, tH=h-tY*2;
    let chairs='';

    // Helper: draw one chair facing UP (backrest at top in local coords)
    const chair=(x,y,rotDeg)=>{
      const bh=r(sh*0.38);
      const cx0=r(x+sw/2), cy0=r(y+sh/2);
      return `<g transform="rotate(${rotDeg},${cx0},${cy0})">
        <rect x="${r(x)}" y="${r(y)}" width="${sw}" height="${sh}" fill="#EEE0C0" rx="3" stroke="#B09860" stroke-width="1"/>
        <rect x="${r(x)}" y="${r(y)}" width="${sw}" height="${bh}" fill="#C8A870" rx="2"/>
        <rect x="${r(x+2)}" y="${r(y+parseFloat(bh)+1)}" width="${sw-4}" height="${r(sh-parseFloat(bh)-3)}" fill="#F5EDD5" rx="2" stroke="#C8A870" stroke-width="0.5"/>
      </g>`;
    };

    // ── dining-4: 2 seats top, 2 seats bottom, 0 side ────────────────
    if(furnId==='dining-4'){
      const slotW=tW/2;
      for(let i=0;i<2;i++){
        const cx2=tX+i*slotW+slotW/2-sw/2;
        chairs+=chair(cx2, gap-sh, 180);      // top row (faces inward)
        chairs+=chair(cx2, h-gap, 0);          // bottom row (faces inward)
      }
    }

    // ── dining-6: 2 top, 2 bottom, 1 each side ────────────────────────
    if(furnId==='dining-6'){
      const slotW=tW/2;
      // Top + bottom: 2 chairs each
      for(let i=0;i<2;i++){
        const cx2=tX+i*slotW+slotW/2-sw/2;
        chairs+=chair(cx2, gap-sh, 180);
        chairs+=chair(cx2, h-gap, 0);
      }
      // Left side: 1 chair centred
      const cy2=h/2-sw/2;
      // Left chair — draw sideways using rotate
      chairs+=`<g transform="rotate(90,${r(gap-sh/2+sh/2)},${r(cy2+sw/2)})">
        <rect x="${r(gap-sh/2+sh/2-sw/2)}" y="${r(cy2)}" width="${sw}" height="${sh}" fill="#EEE0C0" rx="3" stroke="#B09860" stroke-width="1"/>
        <rect x="${r(gap-sh/2+sh/2-sw/2)}" y="${r(cy2)}" width="${sw}" height="${r(sh*0.38)}" fill="#C8A870" rx="2"/>
      </g>`;
      // Right chair
      chairs+=`<g transform="rotate(270,${r(w-gap+sh/2-sh/2)},${r(cy2+sw/2)})">
        <rect x="${r(w-gap+sh/2-sh/2-sw/2)}" y="${r(cy2)}" width="${sw}" height="${sh}" fill="#EEE0C0" rx="3" stroke="#B09860" stroke-width="1"/>
        <rect x="${r(w-gap+sh/2-sh/2-sw/2)}" y="${r(cy2)}" width="${sw}" height="${r(sh*0.38)}" fill="#C8A870" rx="2"/>
      </g>`;
    }

    // Table surface
    const grainLines=Array.from({length:4},(_,i)=>{
      const gx=tX+tW*(i+1)/5;
      return `<line x1="${r(gx)}" y1="${r(tY+4)}" x2="${r(gx)}" y2="${r(tY+tH-4)}" stroke="#C4A050" stroke-width="0.5" opacity="0.35"/>`;
    }).join('');

    return `<svg width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" xmlns="http://www.w3.org/2000/svg" style="position:absolute;top:0;left:0;pointer-events:none">
      ${chairs}
      <rect x="${tX}" y="${tY}" width="${tW}" height="${tH}" fill="#D8C080" rx="4" stroke="#A89040" stroke-width="2"/>
      <rect x="${r(tX+3)}" y="${r(tY+3)}" width="${r(tW-6)}" height="${r(tH-6)}" fill="#E0C870" rx="3" stroke="#C0A848" stroke-width="1" opacity="0.7"/>
      ${grainLines}
    </svg>`;
  }

  // ── ROUND TABLE ───────────────────────────────────────────────────
  if(furnId==='dining-round'){
    const tr=Math.min(iw,ih)/2-12;
    const sr=8, sg=8; // seat radius, gap from table
    return `<svg width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" xmlns="http://www.w3.org/2000/svg" style="position:absolute;top:0;left:0;pointer-events:none">
      <circle cx="${cx}" cy="${cy}" r="${r(tr+sg+sr)}" fill="none"/>
      ${[0,90,180,270].map(a=>{
        const rad=a*Math.PI/180;
        const sx=cx+Math.cos(rad)*(tr+sg+sr);
        const sy=cy+Math.sin(rad)*(tr+sg+sr);
        return `<ellipse cx="${r(sx)}" cy="${r(sy)}" rx="${sr}" ry="${r(sr*0.7)}" fill="#E8D8B4" stroke="#B09860" stroke-width="1" transform="rotate(${a},${r(sx)},${r(sy)})"/>`;
      }).join('')}
      <circle cx="${cx}" cy="${cy}" r="${r(tr)}" fill="#D4B880" stroke="#A08850" stroke-width="1.5"/>
      <circle cx="${cx}" cy="${cy}" r="${r(tr-7)}" fill="none" stroke="#C0A060" stroke-width="0.7" opacity="0.6"/>
    </svg>`;
  }

  // ── COFFEE TABLE (rectangular) ────────────────────────────────────
  if(furnId==='coffee'){
    return svg(`
      <rect x="${r(p+5)}" y="${r(p+5)}" width="${r(iw-10)}" height="${r(ih-10)}" fill="#C8A860" rx="2" stroke="#A08840" stroke-width="0.8"/>
      <rect x="${r(p+10)}" y="${r(p+10)}" width="${r(iw-20)}" height="${r(ih-20)}" fill="none" stroke="#B89850" stroke-width="0.5" rx="1" opacity="0.6"/>
      <circle cx="${p+5}" cy="${p+5}" r="2" fill="#906830" opacity="0.7"/>
      <circle cx="${w-p-5}" cy="${p+5}" r="2" fill="#906830" opacity="0.7"/>
      <circle cx="${p+5}" cy="${h-p-5}" r="2" fill="#906830" opacity="0.7"/>
      <circle cx="${w-p-5}" cy="${h-p-5}" r="2" fill="#906830" opacity="0.7"/>
    `,'#D8B870','#A08840');
  }

  // ── ROUND COFFEE TABLE ────────────────────────────────────────────
  if(furnId==='coffee-round'){
    return `<svg width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" xmlns="http://www.w3.org/2000/svg" style="position:absolute;top:0;left:0;pointer-events:none">
      <circle cx="${cx}" cy="${cy}" r="${r(Math.min(iw,ih)/2-1)}" fill="#D8B870" stroke="#A08840" stroke-width="1.5"/>
      <circle cx="${cx}" cy="${cy}" r="${r(Math.min(iw,ih)/2-6)}" fill="#C8A860" stroke="#B09850" stroke-width="0.8"/>
      <circle cx="${cx}" cy="${cy}" r="${r(Math.min(iw,ih)/2-12)}" fill="none" stroke="#B09850" stroke-width="0.5" opacity="0.6"/>
      <circle cx="${cx}" cy="${cy}" r="3" fill="#906830"/>
    </svg>`;
  }

  // ── SIDE / CONSOLE TABLE ──────────────────────────────────────────
  if(furnId==='side-table'||furnId==='console'){
    return svg(`
      <rect x="${p+3}" y="${p+3}" width="${iw-6}" height="${ih-6}" fill="#D0C090" rx="2" stroke="#A89860" stroke-width="0.8"/>
      <circle cx="${cx}" cy="${cy}" r="2.5" fill="#A89860"/>
    `,'#E0D0A0','#B0A070');
  }

  // ── DESK ──────────────────────────────────────────────────────────
  if(furnId==='desk'){
    return svg(`
      <rect x="${p}" y="${p}" width="${iw}" height="5" fill="#8098B8" rx="1"/>
      <rect x="${r(p+3)}" y="${r(p+7)}" width="${r(iw*0.58)}" height="${r(ih-10)}" fill="#C0D0E0" rx="2" stroke="#8098B8" stroke-width="0.7"/>
      <rect x="${r(p+iw*0.65)}" y="${r(p+7)}" width="${r(iw*0.32)}" height="${r(ih*0.45)}" fill="#C0D0E0" rx="2" stroke="#8098B8" stroke-width="0.7"/>
      <rect x="${r(p+iw*0.65)}" y="${r(p+ih*0.55)}" width="${r(iw*0.32)}" height="${r(ih*0.38)}" fill="#B0C0D0" rx="2" stroke="#8098B8" stroke-width="0.7"/>
    `,'#D0E0F0','#7090A8');
  }

  // ── CORNER DESK ───────────────────────────────────────────────────
  if(furnId==='desk-corner'){
    const ec='#5880A8', dc='#D8E8F4', sc='#C0D4E8', dr='#B0C4DC';
    const tk=6; // edge thickness
    // L-shape: top section full width, return section left portion only
    // Cut-out: bottom-right quadrant is transparent
    const cutX=r(w*0.52); // return width
    const cutY=r(h*0.50); // where return starts
    // L polygon
    const dPath=`M0,0 L${w},0 L${w},${cutY} L${cutX},${cutY} L${cutX},${h} L0,${h} Z`;

    return `<svg width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" xmlns="http://www.w3.org/2000/svg" style="position:absolute;top:0;left:0;pointer-events:none">
      <defs>
        <clipPath id="ldsk${w}${h}"><path d="${dPath}"/></clipPath>
      </defs>

      <!-- Desk L-shaped surface -->
      <path d="${dPath}" fill="${dc}"/>

      <!-- Wall edges: top + left -->
      <rect x="0" y="0" width="${w}" height="${tk}" fill="${ec}" clip-path="url(#ldsk${w}${h})"/>
      <rect x="0" y="0" width="${tk}" height="${h}" fill="${ec}" clip-path="url(#ldsk${w}${h})"/>
      <!-- Inner corner edge -->
      <polyline points="${w},${cutY} ${cutX},${cutY} ${cutX},${h}" fill="none" stroke="${ec}" stroke-width="${tk}"/>

      <!-- Main surface top (monitor area) -->
      <rect x="${r(tk+3)}" y="${r(tk+3)}" width="${r(w-tk-6)}" height="${r(cutY-tk-6)}" fill="${sc}" rx="2" stroke="${ec}" stroke-width="0.6"/>
      <!-- Monitor -->
      <rect x="${r(tk+8)}" y="${r(tk+5)}" width="${r(w*0.38)}" height="${r(cutY*0.55)}" fill="#B0C4DC" rx="2" stroke="${ec}" stroke-width="0.7"/>
      <rect x="${r(tk+10)}" y="${r(tk+7)}" width="${r(w*0.34)}" height="${r(cutY*0.44)}" fill="#8090B8" rx="1"/>
      <!-- Keyboard -->
      <rect x="${r(tk+8)}" y="${r(cutY-tk-14)}" width="${r(w*0.3)}" height="${r(9)}" fill="${dr}" rx="1" stroke="${ec}" stroke-width="0.4"/>

      <!-- Return surface (left portion, lower half) -->
      <rect x="${r(tk+3)}" y="${r(cutY+3)}" width="${r(cutX-tk-6)}" height="${r(h-cutY-6)}" fill="${sc}" rx="2" stroke="${ec}" stroke-width="0.6"/>
      <!-- Drawer unit on return -->
      <rect x="${r(tk+4)}" y="${r(cutY+8)}" width="${r(cutX*0.55)}" height="${r(h-cutY-16)}" fill="${dr}" rx="2" stroke="${ec}" stroke-width="0.6"/>
      <line x1="${r(tk+4)}" y1="${r(cutY+h*0.28)}" x2="${r(tk+4+cutX*0.55)}" y2="${r(cutY+h*0.28)}" stroke="${ec}" stroke-width="0.5"/>
      <circle cx="${r(tk+4+cutX*0.275)}" cy="${r(cutY+h*0.18)}" r="2" fill="${ec}"/>
      <circle cx="${r(tk+4+cutX*0.275)}" cy="${r(cutY+h*0.35)}" r="2" fill="${ec}"/>

      <!-- Inner corner highlight -->
      <polyline points="${w},${cutY} ${cutX},${cutY} ${cutX},${h}" fill="none" stroke="rgba(255,255,255,0.4)" stroke-width="1"/>

      <!-- Cut-out: transparent — background shows through (no fill rect) -->
    </svg>`;
  }

  // ── WARDROBE ──────────────────────────────────────────────────────
  if(furnId==='wardrobe-2'||furnId==='wardrobe-3'){
    const doors=furnId==='wardrobe-3'?3:2;
    const dw=(iw-2)/doors-1;
    let ds='';
    for(let i=0;i<doors;i++){
      const dx=p+1+i*(dw+1);
      ds+=`<rect x="${r(dx)}" y="${p+1}" width="${r(dw)}" height="${ih-2}" fill="#D8ECD4" rx="2" stroke="#9AB89A" stroke-width="0.8"/>`;
      ds+=`<rect x="${r(dx+4)}" y="${p+5}" width="${r(dw-8)}" height="${r(ih-14)}" fill="none" stroke="#9AB89A" stroke-width="0.5" rx="1" opacity="0.5"/>`;
      ds+=`<circle cx="${r(dx+dw/2)}" cy="${cy}" r="2.5" fill="#6A9A6A"/>`;
    }
    return svg(ds,'#C8DCC4','#8AAA8A');
  }

  // ── WALK-IN WARDROBE ──────────────────────────────────────────────
  if(furnId==='wardrobe-walk'){
    return svg(`
      <rect x="${p}" y="${p}" width="${r(iw*0.15)}" height="${ih}" fill="#B8D0B4" rx="1"/>
      <rect x="${w-p-r(iw*0.15)}" y="${p}" width="${r(iw*0.15)}" height="${ih}" fill="#B8D0B4" rx="1"/>
      <line x1="${r(p+iw*0.15)}" y1="${cy}" x2="${r(w-p-iw*0.15)}" y2="${cy}" stroke="#9AB09A" stroke-width="0.6" stroke-dasharray="4,2"/>
      <text x="${cx}" y="${cy+4}" text-anchor="middle" font-size="8" fill="#5A8A5A" font-family="sans-serif">Walk-in</text>
    `,'#CCE4C8','#8AAA8A');
  }

  // ── BOOKSHELF ─────────────────────────────────────────────────────
  if(furnId==='bookshelf'){
    const cols=Math.max(2,Math.floor(iw/12));
    const colW=iw/cols;
    const bookColors=['#D86060','#6090D8','#70C070','#D8C060','#A070C8','#D8A060','#60B8B8'];
    let books='';
    for(let s=0;s<cols;s++){
      const bx=p+s*colW;
      let boff=0;
      while(boff<colW-3){
        const bw2=Math.max(4,Math.min(9,4+Math.floor((bx+boff)*7%5)));
        const col=bookColors[(s*4+Math.floor(boff/4))%bookColors.length];
        books+=`<rect x="${r(bx+boff)}" y="${p+1}" width="${bw2-1}" height="${ih-2}" fill="${col}" rx="1" opacity="0.85"/>`;
        boff+=bw2;
      }
      if(s<cols-1) books+=`<line x1="${r(bx+colW)}" y1="${p}" x2="${r(bx+colW)}" y2="${h-p}" stroke="#905030" stroke-width="1"/>`;
    }
    return svg(books,'#C4A060','#A07840');
  }

  // ── DRESSER ───────────────────────────────────────────────────────
  if(furnId==='dresser'){
    const rows=3, dh=(ih-4)/rows;
    const frame='#8A7850', drw='#D8C898', hdl='#7A6840';
    let drawers='';
    for(let i=0;i<rows;i++){
      const dy=p+2+i*dh;
      drawers+=`<rect x="${p+2}" y="${r(dy)}" width="${iw-4}" height="${r(dh-2)}" fill="${drw}" rx="2" stroke="${frame}" stroke-width="0.8"/>`;
      drawers+=`<rect x="${r(p+4)}" y="${r(dy+3)}" width="${r(iw-8)}" height="${r(dh-8)}" fill="none" stroke="${frame}" stroke-width="0.4" rx="1" opacity="0.4"/>`;
      // Two handles per drawer
      drawers+=`<rect x="${r(cx-14)}" y="${r(dy+dh/2-2)}" width="10" height="4" fill="${hdl}" rx="2"/>`;
      drawers+=`<rect x="${r(cx+4)}" y="${r(dy+dh/2-2)}" width="10" height="4" fill="${hdl}" rx="2"/>`;
    }
    return svg(drawers,'#C8B890','#9A8860');
  }

  // ── CABINET ───────────────────────────────────────────────────────
  if(furnId==='cabinet'){
    return svg(`
      <line x1="${cx}" y1="${p}" x2="${cx}" y2="${h-p}" stroke="#909060" stroke-width="1"/>
      <circle cx="${r(cx-4)}" cy="${cy}" r="2.5" fill="#808050"/>
      <circle cx="${r(cx+4)}" cy="${cy}" r="2.5" fill="#808050"/>
    `,'#D0C898','#A09860');
  }

  // ── SHOE RACK ─────────────────────────────────────────────────────
  if(furnId==='shoe-rack'){
    const cols=Math.floor(iw/10);
    let lines='';
    for(let i=1;i<cols;i++) lines+=`<line x1="${r(p+i*iw/cols)}" y1="${p}" x2="${r(p+i*iw/cols)}" y2="${h-p}" stroke="#9A8060" stroke-width="0.7"/>`;
    return svg(lines+'<line x1="${p}" y1="${cy}" x2="${w-p}" y2="${cy}" stroke="#9A8060" stroke-width="0.7"/>','#E0D0B0','#A08860');
  }

  // ── TV (flat screen on wall) ───────────────────────────────────────
  if(furnId==='tv'||furnId==='tv-65'){
    return `<svg width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" xmlns="http://www.w3.org/2000/svg" style="position:absolute;top:0;left:0;pointer-events:none">
      <!-- Outer bezel -->
      <rect x="0" y="0" width="${w}" height="${h}" fill="#1C1C2A" rx="3"/>
      <!-- Screen -->
      <rect x="3" y="3" width="${w-6}" height="${h-6}" fill="#080810" rx="2"/>
      <!-- Screen reflection gradient feel -->
      <rect x="3" y="3" width="${r((w-6)*0.4)}" height="${h-6}" fill="rgba(255,255,255,0.03)" rx="2"/>
      <!-- Power LED -->
      <circle cx="${r(w-6)}" cy="${r(h-4)}" r="1.5" fill="#4090FF" opacity="0.9"/>
      <!-- Brand bar (thin strip at bottom of screen) -->
      <rect x="3" y="${r(h-8)}" width="${w-6}" height="2" fill="#141420" rx="1"/>
      <!-- Stand/mount shadow -->
      <rect x="${r(cx-8)}" y="${h-2}" width="16" height="2" fill="#141420" rx="1" opacity="0.6"/>
      <rect x="0.5" y="0.5" width="${w-1}" height="${h-1}" fill="none" stroke="#2A2A3A" stroke-width="1" rx="3"/>
    </svg>`;
  }

  // ── TV CABINET ────────────────────────────────────────────────────
  if(furnId==='tv-cabinet'){
    const sections=3;
    const sw2=(iw-4)/sections-2;
    let secs='';
    for(let i=0;i<sections;i++){
      const sx=p+2+i*(sw2+2);
      secs+=`<rect x="${r(sx)}" y="${p+2}" width="${r(sw2)}" height="${ih-4}" fill="#3A3848" rx="2" stroke="#505060" stroke-width="0.7"/>`;
      if(i===1) secs+=`<line x1="${r(sx+4)}" y1="${r(p+ih*0.35)}" x2="${r(sx+sw2-4)}" y2="${r(p+ih*0.35)}" stroke="#505060" stroke-width="0.5" opacity="0.5"/>`;
    }
    return svg(secs,'#484858','#363648');
  }

  // ── TV STAND ──────────────────────────────────────────────────────
  if(furnId==='tv-stand'){
    return svg(`
      <rect x="${r(p+4)}" y="${r(p+3)}" width="${r(iw-8)}" height="${r(ih-6)}" fill="#383848" rx="2" stroke="#484858" stroke-width="0.7"/>
      <circle cx="${r(cx-12)}" cy="${cy}" r="3" fill="#505060"/>
      <circle cx="${cx}" cy="${cy}" r="3" fill="#505060"/>
      <circle cx="${r(cx+12)}" cy="${cy}" r="3" fill="#505060"/>
    `,'#404050','#303040');
  }

  // ── MEDIA UNIT ────────────────────────────────────────────────────
  if(furnId==='media-unit'){
    return svg(`
      <line x1="${r(iw*0.33+p)}" y1="${p}" x2="${r(iw*0.33+p)}" y2="${h-p}" stroke="#404050" stroke-width="1"/>
      <line x1="${r(iw*0.66+p)}" y1="${p}" x2="${r(iw*0.66+p)}" y2="${h-p}" stroke="#404050" stroke-width="1"/>
      <circle cx="${r(p+iw*0.165)}" cy="${cy}" r="2.5" fill="#404050"/>
      <circle cx="${r(p+iw*0.5)}" cy="${cy}" r="2.5" fill="#404050"/>
      <circle cx="${r(p+iw*0.83)}" cy="${cy}" r="2.5" fill="#404050"/>
    `,'#505060','#363646');
  }

  // ── FRIDGE ────────────────────────────────────────────────────────
  if(furnId==='fridge'){
    // Single door fridge - top view shows door panel + handle + compressor bump
    return `<svg width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" xmlns="http://www.w3.org/2000/svg" style="position:absolute;top:0;left:0;pointer-events:none">
      <!-- Body -->
      <rect x="0" y="0" width="${w}" height="${h}" fill="#D0DCE4" rx="3" stroke="#7898A8" stroke-width="1.5"/>
      <!-- Door panel (inset) -->
      <rect x="3" y="3" width="${w-6}" height="${r(h*0.82)}" fill="#E0ECF4" rx="2" stroke="#90A8B8" stroke-width="0.8"/>
      <!-- Door handle (right side, vertical) -->
      <rect x="${w-7}" y="${r(h*0.18)}" width="4" height="${r(h*0.45)}" fill="#8098A8" rx="2" stroke="#607888" stroke-width="0.8"/>
      <!-- Compressor bump at bottom -->
      <rect x="2" y="${r(h*0.85)}" width="${w-4}" height="${r(h*0.12)}" fill="#B0C0C8" rx="2" stroke="#8098A8" stroke-width="0.7"/>
      <!-- Vent lines on compressor -->
      <line x1="6" y1="${r(h*0.89)}" x2="${w-6}" y2="${r(h*0.89)}" stroke="#8098A8" stroke-width="0.5" opacity="0.6"/>
      <line x1="6" y1="${r(h*0.93)}" x2="${w-6}" y2="${r(h*0.93)}" stroke="#8098A8" stroke-width="0.5" opacity="0.6"/>
      <!-- Freezer compartment (top of door) -->
      <rect x="5" y="5" width="${w-10}" height="${r(h*0.25)}" fill="#C8DCE8" rx="2" stroke="#90A8B8" stroke-width="0.6"/>
      <line x1="3" y1="${r(h*0.3)}" x2="${w-3}" y2="${r(h*0.3)}" stroke="#90A8B8" stroke-width="1"/>
      <rect x="0.5" y="0.5" width="${w-1}" height="${h-1}" fill="none" stroke="#6888A0" stroke-width="1.5" rx="3"/>
    </svg>`;
  }
  if(furnId==='fridge-2d'){
    // French door / 2-door fridge - top view shows two side-by-side doors
    return `<svg width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" xmlns="http://www.w3.org/2000/svg" style="position:absolute;top:0;left:0;pointer-events:none">
      <!-- Body -->
      <rect x="0" y="0" width="${w}" height="${h}" fill="#D0DCE4" rx="3" stroke="#7898A8" stroke-width="1.5"/>
      <!-- Left door -->
      <rect x="2" y="2" width="${r(w/2-2)}" height="${r(h*0.82)}" fill="#E0ECF4" rx="2" stroke="#90A8B8" stroke-width="0.8"/>
      <!-- Right door -->
      <rect x="${r(w/2+1)}" y="2" width="${r(w/2-3)}" height="${r(h*0.82)}" fill="#E0ECF4" rx="2" stroke="#90A8B8" stroke-width="0.8"/>
      <!-- Center divider -->
      <line x1="${cx}" y1="2" x2="${cx}" y2="${r(h*0.83)}" stroke="#7898A8" stroke-width="1.5"/>
      <!-- Left handle (right edge of left door) -->
      <rect x="${r(w/2-6)}" y="${r(h*0.2)}" width="4" height="${r(h*0.42)}" fill="#8098A8" rx="2" stroke="#607888" stroke-width="0.7"/>
      <!-- Right handle (left edge of right door) -->
      <rect x="${r(w/2+3)}" y="${r(h*0.2)}" width="4" height="${r(h*0.42)}" fill="#8098A8" rx="2" stroke="#607888" stroke-width="0.7"/>
      <!-- Freezer drawer at bottom -->
      <rect x="2" y="${r(h*0.83)}" width="${w-4}" height="${r(h*0.14)}" fill="#C0D0D8" rx="2" stroke="#8098A8" stroke-width="0.7"/>
      <line x1="${r(w*0.3)}" y1="${r(h*0.88)}" x2="${r(w*0.7)}" y2="${r(h*0.88)}" stroke="#8098A8" stroke-width="1" stroke-linecap="round"/>
      <rect x="0.5" y="0.5" width="${w-1}" height="${h-1}" fill="none" stroke="#6888A0" stroke-width="1.5" rx="3"/>
    </svg>`;
  }

  // ── WASHING MACHINE ───────────────────────────────────────────────
  if(furnId==='washing'){
    const dr=Math.min(iw,ih)/2-7;
    return svg(`
      <!-- Drum porthole -->
      <circle cx="${cx}" cy="${r(cy+3)}" r="${r(dr)}" fill="#C8D8EC" stroke="#6080A0" stroke-width="1.5"/>
      <circle cx="${cx}" cy="${r(cy+3)}" r="${r(dr-5)}" fill="#D8E8F8" stroke="#7090B0" stroke-width="0.8"/>
      <circle cx="${cx}" cy="${r(cy+3)}" r="${r(dr-10)}" fill="#A8C0DC" stroke="#6080A0" stroke-width="0.6"/>
      <!-- Drum fins (4 paddles) -->
      ${[0,90,180,270].map(a=>{
        const rad=a*Math.PI/180, r2=dr-12;
        const fx=cx+Math.cos(rad)*r2, fy=cy+3+Math.sin(rad)*r2;
        return `<ellipse cx="${r(fx)}" cy="${r(fy)}" rx="4" ry="2" fill="#8098B8" transform="rotate(${a},${r(fx)},${r(fy)})" opacity="0.7"/>`;
      }).join('')}
      <!-- Control panel top -->
      <rect x="2" y="2" width="${w-4}" height="${r(h*0.18)}" fill="#B0C0D0" rx="2" stroke="#6080A0" stroke-width="0.7"/>
      <circle cx="${r(w*0.25)}" cy="${r(h*0.1)}" r="4" fill="#7090B0" stroke="#5070A0" stroke-width="0.8"/>
      <rect x="${r(w*0.45)}" y="${r(h*0.06)}" width="${r(w*0.35)}" height="${r(h*0.08)}" fill="#90A8C0" rx="1"/>
    `,'#C0CCE0','#5878A8');
  }
  // ── DRYER ──────────────────────────────────────────────────────────
  if(furnId==='dryer'){
    const dr=Math.min(iw,ih)/2-7;
    return svg(`
      <!-- Drum porthole — warm orange-grey tones different from washer -->
      <circle cx="${cx}" cy="${r(cy+3)}" r="${r(dr)}" fill="#DDD0C0" stroke="#907060" stroke-width="1.5"/>
      <circle cx="${cx}" cy="${r(cy+3)}" r="${r(dr-5)}" fill="#EDE4D4" stroke="#A08070" stroke-width="0.8"/>
      <circle cx="${cx}" cy="${r(cy+3)}" r="${r(dr-10)}" fill="#C8B8A0" stroke="#907060" stroke-width="0.6"/>
      <!-- Tumble fins (3 paddles — dryers typically have 3) -->
      ${[0,120,240].map(a=>{
        const rad=a*Math.PI/180, r2=dr-12;
        const fx=cx+Math.cos(rad)*r2, fy=cy+3+Math.sin(rad)*r2;
        return `<ellipse cx="${r(fx)}" cy="${r(fy)}" rx="4" ry="2" fill="#B09070" transform="rotate(${a},${r(fx)},${r(fy)})" opacity="0.8"/>`;
      }).join('')}
      <!-- Control panel top — warmer colour -->
      <rect x="2" y="2" width="${w-4}" height="${r(h*0.18)}" fill="#C8B8A0" rx="2" stroke="#907060" stroke-width="0.7"/>
      <!-- Temperature dial -->
      <circle cx="${r(w*0.25)}" cy="${r(h*0.1)}" r="4" fill="#A89070" stroke="#806040" stroke-width="0.8"/>
      <!-- Lint trap indicator (rectangle) -->
      <rect x="${r(w*0.45)}" y="${r(h*0.06)}" width="${r(w*0.35)}" height="${r(h*0.08)}" fill="#B8A888" rx="1"/>
      <line x1="${r(w*0.52)}" y1="${r(h*0.1)}" x2="${r(w*0.73)}" y2="${r(h*0.1)}" stroke="#907060" stroke-width="0.5" opacity="0.7"/>
    `,'#D8CCBC','#806050');
  }

  // ── DISHWASHER ────────────────────────────────────────────────────
  if(furnId==='dishwasher'){
    // Top-down: shows door panel with rack pattern visible through glass
    return `<svg width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" xmlns="http://www.w3.org/2000/svg" style="position:absolute;top:0;left:0;pointer-events:none">
      <!-- Body -->
      <rect x="0" y="0" width="${w}" height="${h}" fill="#D4D8DC" rx="3" stroke="#8090A0" stroke-width="1.5"/>
      <!-- Door panel -->
      <rect x="2" y="2" width="${w-4}" height="${r(h*0.75)}" fill="#E0E4E8" rx="2" stroke="#90A0B0" stroke-width="0.8"/>
      <!-- Dish rack pattern (top view of rack tines) -->
      ${Array.from({length:5},(_,i)=>{
        const rx2=5+i*(w-10)/5;
        return `<line x1="${r(rx2)}" y1="5" x2="${r(rx2)}" y2="${r(h*0.72)}" stroke="#A0B0C0" stroke-width="1" opacity="0.5"/>`;
      }).join('')}
      ${Array.from({length:4},(_,i)=>{
        const ry=8+i*(h*0.65)/4;
        return `<line x1="4" y1="${r(ry)}" x2="${w-4}" y2="${r(ry)}" stroke="#A0B0C0" stroke-width="0.6" opacity="0.35"/>`;
      }).join('')}
      <!-- Control panel strip at top -->
      <rect x="2" y="2" width="${w-4}" height="${r(h*0.14)}" fill="#B8C0C8" rx="2" stroke="#90A0B0" stroke-width="0.7"/>
      <!-- Program dial -->
      <circle cx="${r(w*0.3)}" cy="${r(h*0.08)}" r="4" fill="#9098A8" stroke="#707888" stroke-width="0.8"/>
      <!-- Power button -->
      <circle cx="${r(w*0.72)}" cy="${r(h*0.08)}" r="3" fill="#78D870" stroke="#50A848" stroke-width="0.8"/>
      <!-- Door handle -->
      <rect x="${r(w*0.2)}" y="${r(h*0.76)}" width="${r(w*0.6)}" height="5" fill="#9098A8" rx="2" stroke="#707888" stroke-width="0.7"/>
      <!-- Vent strip at bottom -->
      <rect x="2" y="${r(h*0.84)}" width="${w-4}" height="${r(h*0.13)}" fill="#C0C8D0" rx="2"/>
      ${Array.from({length:4},(_,i)=>{
        const lx=6+i*(w-12)/4;
        return `<line x1="${r(lx)}" y1="${r(h*0.86)}" x2="${r(lx)}" y2="${r(h*0.95)}" stroke="#9098A8" stroke-width="0.6" opacity="0.6"/>`;
      }).join('')}
      <rect x="0.5" y="0.5" width="${w-1}" height="${h-1}" fill="none" stroke="#7888A0" stroke-width="1.5" rx="3"/>
    </svg>`;
  }

  // ── MICROWAVE ─────────────────────────────────────────────────────
  if(furnId==='microwave'){
    return svg(`
      <rect x="${p+2}" y="${p+2}" width="${r(iw*0.75)}" height="${ih-4}" fill="#606070" rx="2"/>
      <rect x="${r(p+iw*0.8)}" y="${p+2}" width="${r(iw*0.17)}" height="${ih-4}" fill="#484858" rx="1"/>
      <circle cx="${r(p+iw*0.88)}" cy="${cy}" r="4" fill="#585868" stroke="#606070" stroke-width="0.7"/>
    `,'#707080','#404050');
  }

  // ── PLANTS ────────────────────────────────────────────────────────
  if(furnId==='plant-l'||furnId==='plant-s'){
    const r2=Math.min(iw,ih)/2-3;
    const leafColors=['#2E7A2E','#3A8A3A','#226622','#48A048','#2E6828'];
    let leaves='';
    const leafCount=furnId==='plant-l'?8:6;
    for(let i=0;i<leafCount;i++){
      const angle=(i/leafCount)*Math.PI*2-(Math.PI/2);
      const lx=cx+Math.cos(angle)*r2*0.62, ly=cy+Math.sin(angle)*r2*0.62;
      const col=leafColors[i%leafColors.length];
      leaves+=`<ellipse cx="${r(lx)}" cy="${r(ly)}" rx="${r(r2*0.52)}" ry="${r(r2*0.3)}" fill="${col}" transform="rotate(${r(angle*180/Math.PI+90)},${r(lx)},${r(ly)})" opacity="0.92"/>`;
    }
    const potR=r2*0.28;
    return `<svg width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" xmlns="http://www.w3.org/2000/svg" style="position:absolute;top:0;left:0;pointer-events:none">
      ${leaves}
      <circle cx="${cx}" cy="${cy}" r="${r(potR+2)}" fill="#7A5230" stroke="#5A3810" stroke-width="0.8"/>
      <circle cx="${cx}" cy="${cy}" r="${r(potR)}" fill="#8A5A30"/>
    </svg>`;
  }

  // ── RUG ───────────────────────────────────────────────────────────
  if(furnId==='rug'){
    return `<svg width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" xmlns="http://www.w3.org/2000/svg" style="position:absolute;top:0;left:0;pointer-events:none">
      <rect x="0" y="0" width="${w}" height="${h}" fill="rgba(180,140,90,0.28)" stroke="#A08050" stroke-width="1.5" rx="4" stroke-dasharray="6,3"/>
      <rect x="7" y="7" width="${w-14}" height="${h-14}" fill="none" stroke="#A08050" stroke-width="0.8" rx="3" opacity="0.55"/>
      <rect x="13" y="13" width="${w-26}" height="${h-26}" fill="none" stroke="#A08050" stroke-width="0.5" rx="2" opacity="0.35"/>
      <!-- Rug pattern: border + inner diamond -->
      <rect x="5" y="5" width="${w-10}" height="${h-10}" fill="none" stroke="#A07848" stroke-width="0.8" opacity="0.5"/>
      <rect x="10" y="10" width="${w-20}" height="${h-20}" fill="none" stroke="#A07848" stroke-width="0.5" opacity="0.35"/>
      <line x1="5" y1="5" x2="${w-5}" y2="${h-5}" stroke="#A07848" stroke-width="0.4" opacity="0.2"/>
      <line x1="${w-5}" y1="5" x2="5" y2="${h-5}" stroke="#A07848" stroke-width="0.4" opacity="0.2"/>
    </svg>`;
  }

  // ── ROUND RUG ─────────────────────────────────────────────────────
  if(furnId==='rug-round'){
    const rr=Math.min(iw,ih)/2-2;
    return `<svg width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" xmlns="http://www.w3.org/2000/svg" style="position:absolute;top:0;left:0;pointer-events:none">
      <circle cx="${cx}" cy="${cy}" r="${r(rr)}" fill="rgba(180,140,90,0.28)" stroke="#A08050" stroke-width="1.5" stroke-dasharray="6,3"/>
      <circle cx="${cx}" cy="${cy}" r="${r(rr-6)}" fill="none" stroke="#A08050" stroke-width="0.7" opacity="0.5"/>
      <circle cx="${cx}" cy="${cy}" r="${r(rr-14)}" fill="none" stroke="#A08050" stroke-width="0.5" opacity="0.3"/>
    </svg>`;
  }

  // ── FLOOR LAMP ────────────────────────────────────────────────────
  if(furnId==='lamp'){
    const lr=Math.min(iw,ih)/2-1;
    return `<svg width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" xmlns="http://www.w3.org/2000/svg" style="position:absolute;top:0;left:0;pointer-events:none">
      <!-- Light cone (top view) -->
      <circle cx="${cx}" cy="${cy}" r="${r(lr)}" fill="rgba(255,230,100,0.18)" stroke="rgba(200,160,20,0.4)" stroke-width="1"/>
      <circle cx="${cx}" cy="${cy}" r="${r(lr*0.65)}" fill="rgba(255,220,80,0.22)" stroke="rgba(200,160,20,0.5)" stroke-width="0.8"/>
      <circle cx="${cx}" cy="${cy}" r="${r(lr*0.35)}" fill="rgba(255,200,50,0.35)" stroke="#C8A020" stroke-width="1"/>
      <!-- Pole base -->
      <circle cx="${cx}" cy="${cy}" r="3.5" fill="#888870" stroke="#606050" stroke-width="0.8"/>
      <circle cx="${cx}" cy="${cy}" r="1.5" fill="#505040"/>
    </svg>`;
  }

  // ── TABLE LAMP ────────────────────────────────────────────────────
  if(furnId==='lamp-table'){
    return `<svg width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" xmlns="http://www.w3.org/2000/svg" style="position:absolute;top:0;left:0;pointer-events:none">
      <circle cx="${cx}" cy="${cy}" r="${r(Math.min(iw,ih)/2-1)}" fill="rgba(255,220,80,0.25)" stroke="#C8A020" stroke-width="1.2"/>
      <circle cx="${cx}" cy="${cy}" r="4" fill="#D8B030" stroke="#B09020" stroke-width="0.8"/>
    </svg>`;
  }

  // ── MIRROR ────────────────────────────────────────────────────────
  if(furnId==='mirror'){
    return `<svg width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" xmlns="http://www.w3.org/2000/svg" style="position:absolute;top:0;left:0;pointer-events:none">
      <!-- Frame -->
      <rect x="0" y="0" width="${w}" height="${h}" fill="#9A8868" rx="3" stroke="#786848" stroke-width="1.5"/>
      <!-- Mirror glass -->
      <rect x="3" y="3" width="${w-6}" height="${h-6}" fill="#D8E8F0" rx="2"/>
      <!-- Glass tint gradient effect -->
      <rect x="3" y="3" width="${r((w-6)*0.35)}" height="${h-6}" fill="rgba(255,255,255,0.22)" rx="2"/>
      <!-- Reflection lines -->
      <line x1="${r(p+iw*0.2)}" y1="${r(p+ih*0.15)}" x2="${r(p+iw*0.38)}" y2="${r(p+ih*0.38)}" stroke="rgba(255,255,255,0.7)" stroke-width="1.5" stroke-linecap="round"/>
      <line x1="${r(p+iw*0.22)}" y1="${r(p+ih*0.42)}" x2="${r(p+iw*0.32)}" y2="${r(p+ih*0.56)}" stroke="rgba(255,255,255,0.4)" stroke-width="1" stroke-linecap="round"/>
    </svg>`;
  }

  // ── EXERCISE MAT ──────────────────────────────────────────────────
  if(furnId==='exercise'){
    return svg(`
      <rect x="${p+2}" y="${p+2}" width="${iw-4}" height="${ih-4}" fill="#507860" rx="3" stroke="#406850" stroke-width="0.8"/>
      <line x1="${p+4}" y1="${r(cy-10)}" x2="${w-p-4}" y2="${r(cy-10)}" stroke="#406850" stroke-width="0.5" opacity="0.5"/>
      <line x1="${p+4}" y1="${cy}" x2="${w-p-4}" y2="${cy}" stroke="#406850" stroke-width="0.5" opacity="0.5"/>
      <line x1="${p+4}" y1="${r(cy+10)}" x2="${w-p-4}" y2="${r(cy+10)}" stroke="#406850" stroke-width="0.5" opacity="0.5"/>
    `,'#608870','#406850');
  }

  // ── BATHTUB ───────────────────────────────────────────────────────
  if(furnId==='bathtub'){
    return `<svg width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" xmlns="http://www.w3.org/2000/svg" style="position:absolute;top:0;left:0;pointer-events:none">
      <rect x="0" y="0" width="${w}" height="${h}" fill="#C0D0D8" rx="8" stroke="#90A8B8" stroke-width="1.5"/>
      <rect x="5" y="5" width="${w-10}" height="${h-10}" fill="#D8ECF4" rx="6" stroke="#A0B8C8" stroke-width="0.8"/>
      <rect x="${r(w*0.15)}" y="${r(h*0.04)}" width="${r(w*0.7)}" height="${r(h*0.1)}" fill="#B0C0C8" rx="3"/>
      <circle cx="${cx}" cy="${r(h*0.09)}" r="4" fill="#90A8B8"/>
      <ellipse cx="${cx}" cy="${r(h*0.65)}" rx="${r(w*0.3)}" ry="${r(h*0.08)}" fill="none" stroke="#A0B8C8" stroke-width="0.6" opacity="0.5"/>
    </svg>`;
  }

  // ── TOILET ────────────────────────────────────────────────────────
  if(furnId==='toilet'){
    return `<svg width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" xmlns="http://www.w3.org/2000/svg" style="position:absolute;top:0;left:0;pointer-events:none">
      <rect x="2" y="2" width="${w-4}" height="${r(h*0.32)}" fill="#C8D0D4" rx="3" stroke="#909898" stroke-width="1.2"/>
      <ellipse cx="${cx}" cy="${r(h*0.32+h*0.38)}" rx="${r(w/2-3)}" ry="${r(h*0.35)}" fill="#D8E0E4" stroke="#909898" stroke-width="1.2"/>
      <ellipse cx="${cx}" cy="${r(h*0.32+h*0.35)}" rx="${r(w/2-7)}" ry="${r(h*0.29)}" fill="#E4ECEF" stroke="#A0A8AC" stroke-width="0.7"/>
    </svg>`;
  }

  // ── SINK ──────────────────────────────────────────────────────────
  if(furnId==='sink'){
    return `<svg width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" xmlns="http://www.w3.org/2000/svg" style="position:absolute;top:0;left:0;pointer-events:none">
      <rect x="0" y="0" width="${w}" height="${h}" fill="#C0C8CC" rx="3" stroke="#909898" stroke-width="1.5"/>
      <rect x="4" y="4" width="${w-8}" height="${h-8}" fill="#D4DCE0" rx="3" stroke="#A0A8AC" stroke-width="0.8"/>
      <ellipse cx="${cx}" cy="${cy}" rx="${r(w*0.32)}" ry="${r(h*0.3)}" fill="#B8C4C8" stroke="#909898" stroke-width="0.7"/>
      <circle cx="${cx}" cy="${cy}" r="3" fill="#909898"/>
      <rect x="${r(cx-1.5)}" y="${p}" width="3" height="8" fill="#909898" rx="1.5"/>
    </svg>`;
  }

  // ── SHOWER ────────────────────────────────────────────────────────
  if(furnId==='shower'){
    return `<svg width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" xmlns="http://www.w3.org/2000/svg" style="position:absolute;top:0;left:0;pointer-events:none">
      <rect x="0" y="0" width="${w}" height="${h}" fill="#C8D8E0" rx="3" stroke="#90A8B8" stroke-width="1.5"/>
      <rect x="3" y="3" width="${w-6}" height="${h-6}" fill="#D8ECF4" rx="2" stroke="#A0B8C8" stroke-width="0.7"/>
      <circle cx="${r(w*0.75)}" cy="${r(h*0.2)}" r="6" fill="#B0C8D8" stroke="#90A8B8" stroke-width="1"/>
      <circle cx="${r(w*0.75)}" cy="${r(h*0.2)}" r="3" fill="#90A8B8"/>
      ${[0,40,80,130,170,220,270,310].map(a=>{
        const rad=a*Math.PI/180;
        const sx=w*0.75+Math.cos(rad)*8, sy=h*0.2+Math.sin(rad)*8;
        return `<circle cx="${r(sx)}" cy="${r(sy)}" r="1" fill="#90A8B8" opacity="0.6"/>`;
      }).join('')}
      <line x1="4" y1="${h-4}" x2="${w-4}" y2="${h-4}" stroke="#90A8B8" stroke-width="1" opacity="0.4"/>
    </svg>`;
  }

  // ── L-SHAPE SOFA ─────────────────────────────────────────────────
  if(furnId==='sofa-l'){
    // L-shape sofa: true L polygon, cut-out bottom-right is transparent
    // Main section: top half full width
    // Chaise: right half full height
    // Cut-out: bottom-left quarter is transparent (not part of sofa)
    const bk=Math.min(Math.min(iw,ih)*0.14, 14); // backrest
    const arm=Math.min(Math.min(iw,ih)*0.07, 8);  // armrest
    const cutX=r(iw*0.52); // where chaise starts horizontally
    const cutY=r(ih*0.52); // where main section ends vertically
    const seatColor='#F2E6D0', backColor='#C4A87A', armColor='#B89060', frameColor='#A07840';

    // L-shape polygon path: top-left → top-right → mid-right → bottom-right → bottom-mid → mid-mid → top-left
    const lPath=`M0,0 L${w},0 L${w},${h} L${cutX},${h} L${cutX},${cutY} L0,${cutY} Z`;

    return `<svg width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" xmlns="http://www.w3.org/2000/svg" style="position:absolute;top:0;left:0;pointer-events:none">
      <defs>
        <clipPath id="lsofa${w}${h}"><path d="${lPath}"/></clipPath>
      </defs>

      <!-- L-shaped frame -->
      <path d="${lPath}" fill="${frameColor}" rx="0"/>

      <!-- Backrests — top edge and left edge -->
      <rect x="0" y="0" width="${w}" height="${r(bk)}" fill="${backColor}" clip-path="url(#lsofa${w}${h})"/>
      <rect x="0" y="0" width="${r(bk)}" height="${cutY}" fill="${backColor}"/>
      <!-- Bottom backrest of chaise -->
      <rect x="${cutX}" y="${r(h-bk)}" width="${r(w-cutX)}" height="${r(bk)}" fill="${backColor}"/>
      <!-- Right armrest -->
      <rect x="${r(w-arm)}" y="0" width="${arm}" height="${r(cutY)}" fill="${armColor}"/>
      <!-- Bottom-left armrest of chaise -->
      <rect x="${cutX}" y="${r(h-arm)}" width="${r(w-cutX)}" height="${arm}" fill="${armColor}"/>

      <!-- Main seat cushion (top section, left of chaise) -->
      <rect x="${r(bk+2)}" y="${r(bk+2)}" width="${r(cutX-bk-4)}" height="${r(cutY-bk-4)}" fill="${seatColor}" rx="4" stroke="${backColor}" stroke-width="0.8"/>
      <!-- cushion seam -->
      <path d="M${r(bk+6)},${r(cutY*0.55)} Q${r(cutX*0.5)},${r(cutY*0.45)} ${r(cutX-8)},${r(cutY*0.55)}" fill="none" stroke="${backColor}" stroke-width="0.6" opacity="0.5"/>

      <!-- Chaise cushion (right section, full height) -->
      <rect x="${r(cutX+2)}" y="${r(bk+2)}" width="${r(w-cutX-arm-4)}" height="${r(h-bk*2-4)}" fill="${seatColor}" rx="4" stroke="${backColor}" stroke-width="0.8"/>
      <!-- chaise seam -->
      <path d="M${r(cutX+5)},${r(h*0.5)} Q${r(cutX+(w-cutX)*0.5)},${r(h*0.43)} ${r(w-arm-5)},${r(h*0.5)}" fill="none" stroke="${backColor}" stroke-width="0.6" opacity="0.5"/>

      <!-- Corner inner edge line -->
      <polyline points="${cutX},0 ${cutX},${cutY} 0,${cutY}" fill="none" stroke="${frameColor}" stroke-width="2"/>

      <!-- Cut-out area: fully transparent (no fill) — shows background through -->
    </svg>`;
  }

  // ── DEFAULT fallback ──────────────────────────────────────────────
  return svg(`
    <text x="${cx}" y="${cy+4}" text-anchor="middle" font-size="9" fill="#706860" font-family="sans-serif">${furnId}</text>
  `,'#C8C0B0','#908880');
}


// Get DOM left/top from item position (item.x/y = visual top-left)
function itemToDOM(item){
  const rot=(item.rot||0)%360;
  const isBed=['bed-king','bed-queen','bed-double','bed-single','bed-bunk'].includes(item.furnId);
  if(isBed||(rot===0||rot===180)){
    // No offset needed
    return {left:item.x, top:item.y};
  }
  // At 90/270: CSS rotates pw×ph DOM element around its centre
  // Visual bounding box becomes ph×pw
  // DOM left/top must be shifted so visual top-left = item.x/y
  const pw=item.w*SCALE, ph=item.h*SCALE;
  const off=(pw-ph)/2;  // positive when pw>ph
  return {left:item.x-off, top:item.y+off};
}

// Get item x/y (visual top-left) from DOM left/top and rotation
function domToItem(left,top,item){
  const rot=(item.rot||0)%360;
  const isBed=['bed-king','bed-queen','bed-double','bed-single','bed-bunk'].includes(item.furnId);
  if(isBed||(rot===0||rot===180)){
    return {x:left, y:top};
  }
  const pw=item.w*SCALE, ph=item.h*SCALE;
  const off=(pw-ph)/2;
  return {x:left+off, y:top-off};
}
// ─── RENDER ITEMS ─────────────────────────────────────────────────
function renderItems(){
  document.getElementById('roomCanvas').querySelectorAll('.furniture-on-canvas').forEach(e=>e.remove());
  items.forEach(item=>{
    const el=document.createElement('div');
    el.className='furniture-on-canvas'+(selected===item.id?' selected':'');
    el.dataset.id=item.id;
    const pw=item.w*SCALE, ph=item.h*SCALE;
    const _RL=window._RULER||28;
    const isBed=['bed-king','bed-queen','bed-double','bed-single','bed-bunk'].includes(item.furnId);
    const rot=item.rot||0;
    const cssRot=isBed?0:rot;
    const domPos=itemToDOM(item);
    el.style.cssText=`left:${domPos.left+_RL}px;top:${domPos.top+_RL}px;width:${pw}px;height:${ph}px;z-index:${item.zIndex||5};overflow:visible;background:transparent;transform:rotate(${cssRot}deg);transform-origin:center center;`;
    el.innerHTML=`
      ${getFurnSVG(item.furnId||item.id.replace(/item_s\d+/,''),pw,ph,rot)}
      <div class="rotate-handle" data-action="rotate">↻</div>
      <div class="delete-handle" data-action="delete">✕</div>
      <div class="furn-label" style="position:absolute;top:100%;margin-top:4px;left:50%;transform:translateX(-50%) rotate(${-(isBed?0:rot)}deg);white-space:nowrap;color:#1A2840;font-size:9px;font-family:DM Sans,sans-serif;pointer-events:none;text-align:center;font-weight:500;line-height:1.3;">${esc(item.label)}<br/><span style="color:#5878A8;font-size:8px;font-weight:400">${fmtDim(item.w,item.h)}</span></div>
    `;
    el.addEventListener('mousedown',onItemMouseDown);
    document.getElementById('roomCanvas').appendChild(el);
  });
  checkWarnings();
  if(selected) renderProps();
}

function darken(hex,amt){
  if(!hex||hex.startsWith('rgba')||hex.startsWith('rgb')) return 'rgba(0,0,0,0.2)';
  hex=hex.replace('#','');
  if(hex.length===3) hex=hex.split('').map(c=>c+c).join('');
  const r=Math.max(0,parseInt(hex.substring(0,2),16)-amt);
  const g=Math.max(0,parseInt(hex.substring(2,4),16)-amt);
  const b=Math.max(0,parseInt(hex.substring(4,6),16)-amt);
  return `rgb(${r},${g},${b})`;
}

// ─── RENDER WALLS (windows & doors as draggable elements) ───────────
// Wall data: {type, px, py, size, rot}
// px/py = top-left corner in metres (before rotation)
// rot = 0|90|180|270 — we swap w/h dimensions on 90/270

function getWallDims(w){
  // Returns {wpx, hpx} pixel dimensions after accounting for rotation
  const sz=w.size*SCALE;
  const thick=w.type==='window'?14:sz;
  const r=w.rot||0;
  // On 90 or 270, width and height swap
  if(r===90||r===270) return{wpx:thick,hpx:sz};
  return{wpx:sz,hpx:thick};
}

function renderWalls(){
  document.getElementById('roomCanvas').querySelectorAll('.wall-elem').forEach(e=>e.remove());
  const{ox,oy,W,H}=getCW();
  walls.forEach((w,idx)=>{
    const el=document.createElement('div');
    el.className='wall-elem';
    el.dataset.widx=idx;
    // Store pixel pos — offset by RULER for left vertical ruler
    const RULER_W=window._RULER||22;
    const px=RULER_W+(w.px-ox)*SCALE;
    const py=RULER_W+(w.py-oy)*SCALE;
    const sz=w.size*SCALE;
    const rot=w.rot||0;
    const{wpx,hpx}=getWallDims(w);

    el.style.cssText=`left:${px}px;top:${py}px;width:${wpx}px;height:${hpx}px;position:absolute;cursor:grab;z-index:15;user-select:none;`;

    if(w.type==='window'){
      const svgW=wpx, svgH=hpx;
      // Architectural window: wall break with 3 parallel lines (frame + glass)
      let svgContent='';
      const wallThick=6; // matches wall visual thickness
      if(rot===0||rot===180){
        // Horizontal window — breaks wall top/bottom, glass in middle
        svgContent=`
          <!-- Wall frame stops (the wall ends) -->
          <rect x="0" y="0" width="${svgW}" height="${wallThick}" fill="#2C3E50"/>
          <rect x="0" y="${svgH-wallThick}" width="${svgW}" height="${wallThick}" fill="#2C3E50"/>
          <!-- Glass pane — 3 lines: outer frame + centre glass line -->
          <rect x="0" y="${wallThick}" width="${svgW}" height="${svgH-wallThick*2}" fill="rgba(168,210,240,0.35)"/>
          <line x1="0" y1="${wallThick}" x2="${svgW}" y2="${wallThick}" stroke="#4A90C0" stroke-width="1.5"/>
          <line x1="0" y1="${svgH/2}" x2="${svgW}" y2="${svgH/2}" stroke="#4A90C0" stroke-width="0.8" opacity="0.6"/>
          <line x1="0" y1="${svgH-wallThick}" x2="${svgW}" y2="${svgH-wallThick}" stroke="#4A90C0" stroke-width="1.5"/>`;
      } else {
        // Vertical window
        svgContent=`
          <rect x="0" y="0" width="${wallThick}" height="${svgH}" fill="#2C3E50"/>
          <rect x="${svgW-wallThick}" y="0" width="${wallThick}" height="${svgH}" fill="#2C3E50"/>
          <rect x="${wallThick}" y="0" width="${svgW-wallThick*2}" height="${svgH}" fill="rgba(168,210,240,0.35)"/>
          <line x1="${wallThick}" y1="0" x2="${wallThick}" y2="${svgH}" stroke="#4A90C0" stroke-width="1.5"/>
          <line x1="${svgW/2}" y1="0" x2="${svgW/2}" y2="${svgH}" stroke="#4A90C0" stroke-width="0.8" opacity="0.6"/>
          <line x1="${svgW-wallThick}" y1="0" x2="${svgW-wallThick}" y2="${svgH}" stroke="#4A90C0" stroke-width="1.5"/>`;
      }
      el.innerHTML=`
        <svg width="${svgW}" height="${svgH}" style="pointer-events:none;display:block;overflow:visible">
          ${svgContent}
        </svg>
        <div class="wall-delete" data-widx="${idx}">✕</div>
        <div class="wall-rotate" data-widx="${idx}">↻</div>
        <div class="wall-label" style="position:absolute;bottom:-15px;left:50%;transform:translateX(-50%);white-space:nowrap;color:#1A2840;font-size:8px;font-family:DM Sans,sans-serif;pointer-events:none;font-weight:500;">Window</div>`;
    } else {
      // Door: architectural arc — hinge bar on wall, quarter-circle sweep
      const svgW=wpx, svgH=hpx;
      const wallThick=6;
      const arcR=sz; // full door width = arc radius
      let doorContent='';
      // Colour scheme: wall-matching dark bar, warm brown door panel, blue arc
      const hingeColor='#2C3E50';
      const doorColor='#C4A882';
      const arcColor='#5878A8';
      const arcFill='rgba(88,120,168,0.07)';

      if(rot===0){
        // Hinge top-left, door opens to the right, arc sweeps to bottom-right
        doorContent=`
          <rect x="0" y="0" width="${wallThick}" height="${sz}" fill="${hingeColor}"/>
          <rect x="${wallThick}" y="0" width="${Math.min(sz*0.12,14)}" height="${sz}" fill="${doorColor}" rx="1"/>
          <path d="M${wallThick},0 A${sz},${sz} 0 0,1 ${sz+wallThick},${sz}" fill="${arcFill}" stroke="${arcColor}" stroke-width="1.2" stroke-dasharray="6,3"/>
          <line x1="${sz+wallThick}" y1="${sz}" x2="${sz+wallThick}" y2="${sz-4}" stroke="${arcColor}" stroke-width="1.5"/>`;
      } else if(rot===90){
        // Hinge top-left, opens downward
        doorContent=`
          <rect x="0" y="0" width="${sz}" height="${wallThick}" fill="${hingeColor}"/>
          <rect x="0" y="${wallThick}" width="${sz}" height="${Math.min(sz*0.12,14)}" fill="${doorColor}" rx="1"/>
          <path d="M0,${wallThick} A${sz},${sz} 0 0,0 ${sz},${sz+wallThick}" fill="${arcFill}" stroke="${arcColor}" stroke-width="1.2" stroke-dasharray="6,3"/>`;
      } else if(rot===180){
        // Hinge top-right, opens to the left
        doorContent=`
          <rect x="${svgW-wallThick}" y="0" width="${wallThick}" height="${sz}" fill="${hingeColor}"/>
          <rect x="${svgW-wallThick-Math.min(sz*0.12,14)}" y="0" width="${Math.min(sz*0.12,14)}" height="${sz}" fill="${doorColor}" rx="1"/>
          <path d="M${svgW-wallThick},0 A${sz},${sz} 0 0,0 ${svgW-wallThick-sz},${sz}" fill="${arcFill}" stroke="${arcColor}" stroke-width="1.2" stroke-dasharray="6,3"/>`;
      } else if(rot===270){
        // Hinge bottom-left, opens upward
        doorContent=`
          <rect x="0" y="${svgH-wallThick}" width="${sz}" height="${wallThick}" fill="${hingeColor}"/>
          <rect x="0" y="${svgH-wallThick-Math.min(sz*0.12,14)}" width="${sz}" height="${Math.min(sz*0.12,14)}" fill="${doorColor}" rx="1"/>
          <path d="M0,${svgH-wallThick} A${sz},${sz} 0 0,1 ${sz},${svgH-wallThick-sz}" fill="${arcFill}" stroke="${arcColor}" stroke-width="1.2" stroke-dasharray="6,3"/>`;
      }
      el.innerHTML=`
        <svg width="${svgW}" height="${svgH}" style="pointer-events:none;display:block;overflow:visible">
          ${doorContent}
        </svg>
        <div class="wall-delete" data-widx="${idx}">✕</div>
        <div class="wall-rotate" data-widx="${idx}">↻</div>
        <div class="wall-label" style="position:absolute;bottom:-15px;left:50%;transform:translateX(-50%);white-space:nowrap;color:#1A2840;font-size:8px;font-family:DM Sans,sans-serif;pointer-events:none;font-weight:500;">Door</div>`;
    }

    // Drag — only on the SVG, not on handles
    el.addEventListener('mousedown', onWallMouseDown);

    // Delete
    el.querySelector('.wall-delete').addEventListener('mousedown', e=>e.stopPropagation());
    el.querySelector('.wall-delete').addEventListener('click', e=>{
      e.stopPropagation();
      saveHistory();
      walls.splice(idx,1);
      renderWalls();
    });

    // Rotate — cycle 0→90→180→270→0
    el.querySelector('.wall-rotate').addEventListener('mousedown', e=>e.stopPropagation());
    el.querySelector('.wall-rotate').addEventListener('click', e=>{
      e.stopPropagation();
      saveHistory();
      const w=walls[idx];
      const oldDims=getWallDims(w);
      w.rot=((w.rot||0)+90)%360;
      const newDims=getWallDims(w);
      // Adjust position so the element stays centred on same spot
      const ocx=(w.px-ox)*SCALE+oldDims.wpx/2;
      const ocy=(w.py-oy)*SCALE+oldDims.hpx/2;
      // New top-left from centre
      let npx=(ocx-newDims.wpx/2)/SCALE+ox;
      let npy=(ocy-newDims.hpx/2)/SCALE+oy;
      // Clamp inside room
      const b=getBounds();
      npx=Math.max(b.minX,Math.min(npx,b.maxX-newDims.wpx/SCALE));
      npy=Math.max(b.minY,Math.min(npy,b.maxY-newDims.hpx/SCALE));
      w.px=npx; w.py=npy;
      renderWalls();
    });

    document.getElementById('roomCanvas').appendChild(el);
  });
  // Restore selected-wall highlight after DOM rebuild
  if(selectedWallIdx>=0){
    const els=document.getElementById('roomCanvas').querySelectorAll('.wall-elem');
    if(els[selectedWallIdx]) els[selectedWallIdx].classList.add('selected-wall');
  }
}

let wallDragging=false, wallDragIdx=-1, wallDragOx=0, wallDragOy=0;
let selectedWallIdx=-1;
function onWallMouseDown(e){
  // Ignore clicks on the handle buttons
  if(e.target.classList.contains('wall-delete')||e.target.classList.contains('wall-rotate')) return;
  e.preventDefault(); e.stopPropagation();
  const idx=parseInt(e.currentTarget.dataset.widx);
  // Select this wall + deselect furniture
  selectedWallIdx=idx;
  selectItem(null);
  // Update PTZ hint
  const hint=document.getElementById('ptzHint');
  if(hint) hint.textContent=walls[idx]?walls[idx].type.charAt(0).toUpperCase()+walls[idx].type.slice(1):'Wall';
  // Highlight selected wall
  document.querySelectorAll('.wall-elem').forEach((el,i)=>{
    el.classList.toggle('selected-wall',i===idx);
  });
  // Auto-expand panel on mobile
  const panel=document.getElementById('sidebarRight');
  if(panel&&window.innerWidth<=768){
    panel.classList.add('panel-expanded');
    const btn=document.getElementById('panelCollapseBtn');
    if(btn) btn.textContent='▼';
  }
  wallDragging=true; wallDragIdx=idx;
  const cr=document.getElementById('roomCanvas').getBoundingClientRect();
  const{ox,oy}=getCW();
  const w=walls[idx];
  // Offset from mouse to element top-left
  wallDragOx=e.clientX-cr.left-(window._RULER||28)-(w.px-ox)*SCALE;
  wallDragOy=e.clientY-cr.top-(window._RULER||28)-(w.py-oy)*SCALE;
}

// ─── DRAG ────────────────────────────────────────────────────────
function onItemMouseDown(e){
  if(drawMode) return;
  const el=e.currentTarget,action=e.target.dataset.action;
  if(action==='delete'){saveHistory();items=items.filter(i=>i.id!==el.dataset.id);if(selected===el.dataset.id)selected=null;renderItems();renderProps();return;}
  if(action==='rotate'){saveHistory();const item=items.find(i=>i.id===el.dataset.id);if(item){const isBed=['bed-king','bed-queen','bed-double','bed-single','bed-bunk'].includes(item.furnId);const orot=item.rot||0;const cx=item.x+item.w*SCALE/2,cy=item.y+item.h*SCALE/2;item.rot=(orot+90)%360;if(isBed){[item.w,item.h]=[item.h,item.w];item.x=cx-item.w*SCALE/2;item.y=cy-item.h*SCALE/2;}};renderItems();return;}
  e.preventDefault();
  selectItem(el.dataset.id);
  isDragging=true;dragTarget=el.dataset.id;
  const cr=document.getElementById('roomCanvas').getBoundingClientRect();
  const dragItem=items.find(i=>i.id===el.dataset.id);
  const _RL=window._RULER||28;
  // Subtract RULER so offset matches the mousemove calculation
  dragOffX=(e.clientX-cr.left-_RL)-dragItem.x;
  dragStartX=dragItem.x;dragStartY=dragItem.y;
  dragOffY=(e.clientY-cr.top-_RL)-dragItem.y;
}

// ─── TOAST ────────────────────────────────────────────────────────
let toastTimer=null;
function showSupportToast(){
  const wrap=document.getElementById('toastWrap');
  const t=document.createElement('div');
  t.className='support-toast';

  const msg=document.createElement('div');
  msg.className='support-toast-msg';
  msg.textContent='Your PDF is ready! RoomWise is free to use, and I plan to keep it that way. If it saved you time, consider supporting to help keep it free forever ☕';

  const actions=document.createElement('div');
  actions.className='support-toast-actions';

  const btn=document.createElement('a');
  btn.className='support-toast-btn';
  btn.href='https://ko-fi.com/roomwise';
  btn.target='_blank';
  btn.rel='noopener';
  btn.textContent='Support RoomWise ☕';

  const dismiss=document.createElement('button');
  dismiss.className='support-toast-dismiss';
  dismiss.textContent='Dismiss';

  actions.appendChild(btn);
  actions.appendChild(dismiss);
  t.appendChild(msg);
  t.appendChild(actions);
  wrap.appendChild(t);

  const hide=()=>{
    t.style.animation='toastOut 0.3s ease forwards';
    setTimeout(()=>t.remove(),300);
  };
  dismiss.addEventListener('click',hide);
}

function showToast(msg,type='warn'){
  const wrap=document.getElementById('toastWrap');
  const t=document.createElement('div');
  t.className='toast'+(type==='ok'?' ok':'');
  const ico=document.createElement('span');
  ico.className='toast-ico';
  ico.textContent=type==='ok'?'✓':'⚠️';
  t.appendChild(ico);
  t.appendChild(document.createTextNode(msg));
  wrap.appendChild(t);
  setTimeout(()=>{
    t.style.animation='toastOut 0.3s ease forwards';
    setTimeout(()=>t.remove(),300);
  },2800);
}

// Track position before drag starts for snap-back
let dragStartX=0,dragStartY=0;

document.addEventListener('mousemove',e=>{
  if(isDragging&&dragTarget){
    const cr=document.getElementById('roomCanvas').getBoundingClientRect();
    const item=items.find(i=>i.id===dragTarget);if(!item)return;
    const{W,H}=getCW();
    const RL=window._RULER||28;
    // Raw mouse pos relative to canvas content (excluding ruler)
    const rawX=e.clientX-cr.left-RL-dragOffX;
    const rawY=e.clientY-cr.top-RL-dragOffY;
    // Clamp visual bounding box within room
    const ed=getEffectiveDims(item);
    const vx=Math.max(0,Math.min(snap(rawX),W-ed.w*SCALE));
    const vy=Math.max(0,Math.min(snap(rawY),H-ed.h*SCALE));
    item.x=vx; item.y=vy;
    const el=document.getElementById('roomCanvas').querySelector(`[data-id="${dragTarget}"]`);
    const overlapping=items.some(b=>b.id!==item.id&&rectsOverlap(item,b));
    if(el){
      const domPos=itemToDOM(item);
      el.style.left=(domPos.left+RL)+'px';
      el.style.top=(domPos.top+RL)+'px';
      el.classList.toggle('overlapping',overlapping);
    }
    showMeasureTip(e,item);checkWarnings();
  }
  if(wallDragging && wallDragIdx>=0){
    const cr=document.getElementById('roomCanvas').getBoundingClientRect();
    const{ox,oy,W,H}=getCW();
    const w=walls[wallDragIdx];
    const{wpx,hpx}=getWallDims(w);
    let nx=(e.clientX-cr.left-(window._RULER||28)-wallDragOx)/SCALE+ox;
    let ny_raw=(e.clientY-cr.top-(window._RULER||22)-wallDragOy)/SCALE+oy;
    let ny=ny_raw;
    // Snap to 0.1m grid
    nx=Math.round(nx*10)/10; ny=Math.round(ny*10)/10;
    // Clamp so element stays fully within canvas pixel bounds
    const b=getBounds();
    nx=Math.max(b.minX, Math.min(nx, b.maxX - wpx/SCALE));
    ny=Math.max(b.minY, Math.min(ny, b.maxY - hpx/SCALE));
    w.px=nx; w.py=ny;
    renderWalls();
  }
  if(drawMode){
    const cr=document.getElementById('roomCanvas').getBoundingClientRect();
    const{ox,oy}=getCW();
    // Track mouse relative to canvas — allow slight overshoot
    const sx=snap(e.clientX-cr.left-(window._RULER||28));
    const sy=snap(e.clientY-cr.top-(window._RULER||28));
    mousePt=[sx/SCALE+ox, sy/SCALE+oy];
    renderCanvas();
  }
});

document.addEventListener('mouseup',()=>{
  if(isDragging&&dragTarget){
    const item=items.find(i=>i.id===dragTarget);
    if(item){
      saveHistory();
      // Check overlaps after drop — just warn, don't block
      const clash=items.find(b=>b.id!==item.id&&rectsOverlap(item,b));
      if(clash) showToast(`"${item.label}" overlaps "${clash.label}"`, 'warn');
    }
    isDragging=false;dragTarget=null;
    renderItems();
  }
  if(wallDragging){saveHistory();wallDragging=false;wallDragIdx=-1;renderWalls();}
  document.getElementById('measureTip').style.display='none';
});

// Canvas drop
document.getElementById('roomCanvas').addEventListener('dragover',e=>{e.preventDefault();e.dataTransfer.dropEffect='copy';});
document.getElementById('roomCanvas').addEventListener('drop',e=>{
  if(drawMode)return;
  e.preventDefault();
  const data=JSON.parse(e.dataTransfer.getData('application/json'));
  const cr=document.getElementById('roomCanvas').getBoundingClientRect();
  const{W,H}=getCW();
  let x=snap(e.clientX-cr.left-(window._RULER||28)-data.w*SCALE/2),y=snap(e.clientY-cr.top-(window._RULER||28)-data.h*SCALE/2);
  x=Math.max(0,Math.min(x,W-data.w*SCALE));y=Math.max(0,Math.min(y,H-data.h*SCALE));
  saveHistory();idCounter++;
  items.push({...data,id:'item_'+idCounter,x,y,rot:0,zIndex:5});
  selected='item_'+idCounter;
  renderItems();switchTab('props');
});

// Canvas click (draw mode)
document.getElementById('roomCanvas').addEventListener('click',e=>{
  if(!drawMode)return;
  const cr=document.getElementById('roomCanvas').getBoundingClientRect();
  const{ox,oy}=getCW();
  const sx=snap(e.clientX-cr.left-(window._RULER||28)),sy=snap(e.clientY-cr.top-(window._RULER||28));
  const mx=sx/SCALE+ox,my=sy/SCALE+oy;
  if(drawPoints.length>=3){
    const fp=drawPoints[0];
    const fpx=(fp[0]-ox)*SCALE,fpy=(fp[1]-oy)*SCALE;
    if(Math.hypot(sx-fpx,sy-fpy)<16){
      roomPoints=[...drawPoints];
      exitDrawMode();renderCanvas();renderWalls();renderItems();
      return;
    }
  }
  drawPoints.push([mx,my]);
  renderCanvas();
});

// Background click to deselect
document.getElementById('roomCanvas').addEventListener('mousedown',e=>{
  if(drawMode)return;
  const t=e.target;
  if(t===document.getElementById('roomCanvas')||t.tagName==='svg'||t.tagName==='path'||t.tagName==='line'||t.tagName==='text'){
    selectItem(null);
    selectedWallIdx=-1;
    document.querySelectorAll('.wall-elem').forEach(el=>el.classList.remove('selected-wall'));
    const hint=document.getElementById('ptzHint');
    if(hint) hint.textContent='← tap item to move';
  }
});

function snap(v){const grid=Math.max(1,Math.round(SCALE*0.05));return Math.round(v/grid)*grid;}
function selectItem(id){
  if(drawMode)return;
  selected=id;
  renderItems();
  if(id){
    // Deselect any wall when furniture is selected
    selectedWallIdx=-1;
    document.querySelectorAll('.wall-elem').forEach(el=>el.classList.remove('selected-wall'));
    switchTab('props');
    const hint=document.getElementById('ptzHint');
    if(hint){const item=items.find(i=>i.id===id);hint.textContent=item?item.label:'selected';}
    // Auto-expand panel on mobile when item selected
    const panel=document.getElementById('sidebarRight');
    if(panel&&window.innerWidth<=768){
      panel.classList.add('panel-expanded');
      const btn=document.getElementById('panelCollapseBtn');
      if(btn) btn.textContent='▼';
    }
  } else {
    const hint=document.getElementById('ptzHint');
    if(hint) hint.textContent='← tap item to move';
    // Collapse panel on mobile when deselected
    const panel=document.getElementById('sidebarRight');
    if(panel&&window.innerWidth<=768){
      panel.classList.remove('panel-expanded');
      const btn=document.getElementById('panelCollapseBtn');
      if(btn) btn.textContent='▲';
    }
  }
}

// ─── DRAW MODE ────────────────────────────────────────────────────
function enterDrawMode(){
  drawMode=true;drawPoints=[];mousePt=null;
  document.getElementById('modeBanner').classList.add('visible');
  document.getElementById('btnDrawMode').classList.add('active');
  document.getElementById('roomCanvas').style.cursor='crosshair';
  document.getElementById('canvasArea').style.cursor='crosshair';
}
function exitDrawMode(){
  drawMode=false;drawPoints=[];mousePt=null;
  document.getElementById('modeBanner').classList.remove('visible');
  document.getElementById('btnDrawMode').classList.remove('active');
  document.getElementById('roomCanvas').style.cursor='default';
  document.getElementById('canvasArea').style.cursor='default';
}
document.getElementById('btnDrawMode').addEventListener('click',()=>{drawMode?exitDrawMode():enterDrawMode();renderCanvas();});

// ─── MEASURE TIP ─────────────────────────────────────────────────
function showMeasureTip(e,item){
  const tip=document.getElementById('measureTip'),{ox,oy}=getCW();
  const cr=document.getElementById('roomCanvas').getBoundingClientRect();
  tip.style.display='block';
  tip.style.left=(e.clientX-cr.left-(window._RULER||28)+14)+'px';tip.style.top=(e.clientY-cr.top-(window._RULER||28)+14)+'px';
  tip.textContent=`${(item.x/SCALE+ox).toFixed(1)}m, ${(item.y/SCALE+oy).toFixed(1)}m`;
}

// ─── WARNINGS ────────────────────────────────────────────────────
function checkWarnings(){
  const strip=document.getElementById('warnStrip'),warns=[];
  // Track which items are overlapping
  const overlappingIds=new Set();
  items.forEach(a=>{
    items.forEach(b=>{
      if(a.id>=b.id) return;
      if(rectsOverlap(a,b)){
        warns.push(`${a.label} overlaps ${b.label}`);
        overlappingIds.add(a.id);
        overlappingIds.add(b.id);
      }
    });
  });
  // Apply red outline to overlapping items on canvas
  document.getElementById('roomCanvas').querySelectorAll('.furniture-on-canvas').forEach(el=>{
    const id=el.dataset.id;
    if(overlappingIds.has(id)){
      el.style.outline='2.5px solid #E03050';
      el.style.outlineOffset='1px';
    } else {
      el.style.outline='';
      el.style.outlineOffset='';
    }
  });
  if(warns.length){
    strip.className='warn-strip';
    strip.textContent='⚠ '+warns[0]+(warns.length>1?` (+${warns.length-1} more)`:'');
  } else {
    strip.className='warn-strip ok';
    strip.textContent='✓ Layout looks good so far';
  }
}
function getEffectiveDims(item){
  const isBed=['bed-king','bed-queen','bed-double','bed-single','bed-bunk'].includes(item.furnId);
  const rot=item.rot||0;
  // For CSS-rotated non-bed items at 90/270, visual bounding box swaps w/h
  // item.x/y is top-left of unrotated box; visually the box is rotated around centre
  if(!isBed&&(rot===90||rot===270)){
    // Visual centre stays the same, but effective w/h swap
    return{x:item.x, y:item.y, w:item.h, h:item.w};
  }
  return{x:item.x, y:item.y, w:item.w, h:item.h};
}
function rectsOverlap(a,b){
  const da=getEffectiveDims(a), db=getEffectiveDims(b);
  return!(da.x+da.w*SCALE<=db.x||db.x+db.w*SCALE<=da.x||da.y+da.h*SCALE<=db.y||db.y+db.h*SCALE<=da.y);
}

// ─── HISTORY ─────────────────────────────────────────────────────
function saveHistory(){history.push(JSON.stringify({items,walls,roomPoints}));if(history.length>50)history.shift();future=[];}
document.getElementById('btnUndo').addEventListener('click',()=>{if(!history.length)return;future.push(JSON.stringify({items,walls,roomPoints}));const s=JSON.parse(history.pop());items=s.items;walls=s.walls;roomPoints=s.roomPoints;renderCanvas();renderWalls();renderItems();});
document.getElementById('btnRedo').addEventListener('click',()=>{if(!future.length)return;history.push(JSON.stringify({items,walls,roomPoints}));const s=JSON.parse(future.pop());items=s.items;walls=s.walls;roomPoints=s.roomPoints;renderCanvas();renderWalls();renderItems();});

// ─── WINDOWS & DOORS ─────────────────────────────────────────────
document.getElementById('btnAddWindow').addEventListener('click',()=>{
  saveHistory();const b=getBounds();
  walls.push({type:'window',orient:'h',px:b.minX+(b.maxX-b.minX)*0.3,py:b.minY,size:1.2});
  selectItem(null);selectedWallIdx=-1;renderCanvas();renderWalls();
});
document.getElementById('btnAddDoor').addEventListener('click',()=>{
  saveHistory();const b=getBounds();
  walls.push({type:'door',orient:'v',px:b.minX,py:b.minY+(b.maxY-b.minY)*0.15,size:0.9});
  selectItem(null);selectedWallIdx=-1;renderCanvas();renderWalls();
});

// ─── CLEAR / EXPORT ──────────────────────────────────────────────
document.getElementById('btnClear').addEventListener('click',()=>{if(!confirm('Clear all furniture?'))return;saveHistory();items=[];selected=null;renderItems();});

document.getElementById('btnExport').addEventListener('click', async ()=>{
  const btn=document.getElementById('btnExport');
  btn.disabled=true; btn.textContent='⏳ Exporting…';

  const prev=selected; selectItem(null);
  // Hide furn labels and handles before capture
  document.querySelectorAll('.furn-label,.rotate-handle,.delete-handle,.wall-delete,.wall-rotate,.wall-label').forEach(e=>e.style.visibility='hidden');
  await new Promise(r=>setTimeout(r,120));

  try {
    const{jsPDF}=window.jspdf;
    const b=getBounds();
    const roomW=b.maxX-b.minX, roomH=b.maxY-b.minY;
    const canvasEl=document.getElementById('roomCanvas');

    // ── 1. Capture ONLY the room SVG area (no ruler overflow) ────────
    const RULER=window._RULER||28;
    const{W,H}=getCW();
    // Capture at 2.5x for crisp PDF
    const shot=await html2canvas(canvasEl,{
      backgroundColor:'#F9F5EF',
      scale:2.5,
      useCORS:true,
      logging:false,
      x:RULER,        // start after left ruler
      y:RULER,        // start after top ruler
      width:W,        // only the room area
      height:H,
    });
    const imgData=shot.toDataURL('image/png');

    // ── 2. PDF layout ─────────────────────────────────────────────────
    const A4W=210, A4H=297;
    const margin=14;
    const headerH=22;   // space for title + meta
    const footerH=10;
    const legendRowH=9; // per furniture row in legend
    const legendCols=3;
    const legendRows=Math.ceil(items.length/legendCols);
    const legendH=items.length>0 ? 8+legendRows*legendRowH : 0;

    // How much space is left for the image
    const availH=A4H-margin*2-headerH-legendH-footerH;
    const availW=A4W-margin*2;
    const imgW=shot.width, imgH=shot.height;
    const ratio=Math.min(availW/imgW, availH/imgH);
    const drawW=imgW*ratio, drawH=imgH*ratio;

    // Centre image horizontally
    const imgX=margin+(availW-drawW)/2;
    const imgY=margin+headerH;

    const pdf=new jsPDF({orientation:'portrait',unit:'mm',format:'a4'});

    // ── Header ────────────────────────────────────────────────────────
    pdf.setFont('helvetica','bold');
    pdf.setFontSize(20);
    pdf.setTextColor(196,102,58);
    pdf.text('RoomWise',margin,margin+7);

    pdf.setFont('helvetica','normal');
    pdf.setFontSize(9.5);
    pdf.setTextColor(110,105,100);
    pdf.text(`Room: ${fmtM(roomW)} × ${fmtM(roomH)}   ·   ${items.length} item${items.length!==1?'s':''}   ·   ${new Date().toLocaleDateString()}`, margin, margin+14);

    // Thin separator line
    pdf.setDrawColor(220,214,206);
    pdf.setLineWidth(0.3);
    pdf.line(margin, margin+17, A4W-margin, margin+17);

    // ── Room image with border ─────────────────────────────────────────
    pdf.addImage(imgData,'PNG', imgX, imgY, drawW, drawH);
    // Border around image
    pdf.setDrawColor(180,172,162);
    pdf.setLineWidth(0.4);
    pdf.rect(imgX, imgY, drawW, drawH);

    // ── Furniture legend ──────────────────────────────────────────────
    if(items.length>0){
      const legY=imgY+drawH+6;

      // Section header
      pdf.setFont('helvetica','bold');
      pdf.setFontSize(7.5);
      pdf.setTextColor(160,152,140);
      pdf.text('FURNITURE LIST', margin, legY);

      // Separator
      pdf.setDrawColor(220,214,206);
      pdf.setLineWidth(0.2);
      pdf.line(margin, legY+2, A4W-margin, legY+2);

      const colW=(A4W-margin*2)/legendCols;
      let curY=legY+7;

      items.forEach((item,i)=>{
        const col=i%legendCols;
        const row=Math.floor(i/legendCols);
        const x=margin+col*colW;
        const y=curY+row*legendRowH;
        if(y>A4H-margin-footerH) return;

        // Colour dot
        const hex=item.color.replace('#','');
        if(hex.length===6){
          const r=parseInt(hex.slice(0,2),16);
          const g=parseInt(hex.slice(2,4),16);
          const bv=parseInt(hex.slice(4,6),16);
          pdf.setFillColor(r,g,bv);
          pdf.circle(x+1.5, y-1.5, 1.5, 'F');
        }

        // Name
        pdf.setFont('helvetica','bold');
        pdf.setFontSize(8.5);
        pdf.setTextColor(40,36,30);
        pdf.text(item.label, x+5, y);

        // Dimensions
        pdf.setFont('helvetica','normal');
        pdf.setFontSize(7.5);
        pdf.setTextColor(140,134,124);
        pdf.text(fmtM(item.w)+' × '+fmtM(item.h), x+5, y+3.5);
      });
    }

    // ── Footer ────────────────────────────────────────────────────────
    pdf.setDrawColor(220,214,206);
    pdf.setLineWidth(0.2);
    pdf.line(margin, A4H-margin-5, A4W-margin, A4H-margin-5);
    pdf.setFont('helvetica','normal');
    pdf.setFontSize(7.5);
    pdf.setTextColor(190,184,176);
    pdf.text('Generated by RoomWise · roomwise.homes', A4W/2, A4H-margin, {align:'center'});

    pdf.save('roomwise-layout.pdf');
    setTimeout(showSupportToast, 1000);

  } catch(err){
    alert('Export failed: '+err.message);
    console.error(err);
  }

  // Restore labels
  document.querySelectorAll('.furn-label,.rotate-handle,.delete-handle,.wall-delete,.wall-rotate,.wall-label').forEach(e=>e.style.visibility='');
  btn.disabled=false; btn.innerHTML='📤 PDF';
  if(prev) selectItem(prev);
});

// ─── ZOOM ────────────────────────────────────────────────────────
function setZoom(s){
  const minScale=window.innerWidth<=768?8:20;
  SCALE=Math.max(minScale,Math.min(220,s));
  document.getElementById('zoomLabel').textContent=Math.round(SCALE/60*100)+'%';
  renderCanvas();renderWalls();renderItems();
  centreCanvas();
}

function centreCanvas(){
  requestAnimationFrame(()=>{
    const area=document.getElementById('canvasArea');
    const canvas=document.getElementById('roomCanvas');
    const aW=area.clientWidth, aH=area.clientHeight;
    const cW=canvas.offsetWidth, cH=canvas.offsetHeight;
    if(cW<=aW && cH<=aH){
      // Room fits — centre it, no scrollbar
      const mH=Math.floor((aW-cW)/2);
      const mV=Math.floor((aH-cH)/2);
      canvas.style.margin=`${mV}px ${mH}px`;
      area.style.overflow='hidden';
    } else {
      // Room bigger than viewport — allow scrolling
      canvas.style.margin='20px';
      area.style.overflow='auto';
    }
  });
}
function fitZoom(){
  requestAnimationFrame(()=>{
    const area=document.getElementById('canvasArea');
    const aW=area.clientWidth, aH=area.clientHeight;
    const b=getBounds();
    const roomW=b.maxX-b.minX, roomH=b.maxY-b.minY;
    if(!roomW||!roomH) return;
    const RULER=window._RULER||28;
    const padding=window.innerWidth<=768?12:40;
    const s=Math.floor(Math.min(
      (aW - RULER*2 - padding) / roomW,
      (aH - RULER*2 - padding) / roomH
    ));
    // On mobile allow smaller zoom so large rooms always fit
    const minZ=window.innerWidth<=768?8:20;
    setZoom(Math.max(minZ, s));
    // Centre the room in the canvas area using margin on the canvas element
    requestAnimationFrame(()=>{
      const canvas=document.getElementById('roomCanvas');
      const cW=canvas.offsetWidth, cH=canvas.offsetHeight;
      const marginH=Math.max(0, Math.floor((aW-cW)/2));
      const marginV=Math.max(0, Math.floor((aH-cH)/2));
      centreCanvas();
      area.scrollLeft=0; area.scrollTop=0;
    });
  });
}
document.getElementById('zoomIn').addEventListener('click',()=>setZoom(SCALE+10));
document.getElementById('zoomOut').addEventListener('click',()=>setZoom(SCALE-10));
document.getElementById('zoomFit').addEventListener('click',fitZoom);

// ─── TABS ─────────────────────────────────────────────────────────
function switchTab(tab){
  currentTab=tab;
  ['props','info'].forEach(t=>{
    const cap=t.charAt(0).toUpperCase()+t.slice(1);
    document.getElementById('tab'+cap)?.classList.toggle('active',t===tab);
    const panel=document.getElementById('panel'+cap);
    if(panel){
      panel.style.display=t===tab?'block':'none';
      panel.classList.toggle('active-panel',t===tab);
    }
  });
  if(tab==='props') renderProps();
}

// ─── PROPERTIES ──────────────────────────────────────────────────
const COLORS=['#C4A882','#B8C4B0','#C4B8D4','#A8B8C0','#D4B896','#B89068','#888','#E5C07B','#7A9E7E','#C4663A'];
function renderProps(){
  const empty=document.getElementById('propEmpty'),editor=document.getElementById('propEditor');
  if(!selected){empty.style.display='block';editor.style.display='none';return;}
  const item=items.find(i=>i.id===selected);
  if(!item){empty.style.display='block';editor.style.display='none';return;}
  empty.style.display='none';editor.style.display='block';
  const{ox,oy}=getCW();
  editor.innerHTML=`
    <div class="prop-section"><div class="prop-label">Selected</div><div class="prop-name">${esc(item.label)}</div></div>
    <div class="prop-section"><div class="prop-label">Dimensions (" + unitLabel() + ")</div>
      <div class="prop-row"><div class="prop-field"><label>Width</label><input type="number" id="pw" value="${toDisp(item.w)}" step="${unitStep()}" min="0.01"/></div><div class="prop-field"><label>Depth</label><input type="number" id="ph" value="${toDisp(item.h)}" step="${unitStep()}" min="0.01"/></div></div>
    </div>
    <div class="prop-section"><div class="prop-label">Position (" + unitLabel() + " from origin)</div>
      <div class="prop-row"><div class="prop-field"><label>X (left)</label><input type="number" id="px" value="${toDisp(item.x/SCALE+ox)}" step="${unitStep()}"/></div><div class="prop-field"><label>Y (top)</label><input type="number" id="py" value="${toDisp(item.y/SCALE+oy)}" step="${unitStep()}"/></div></div>
    </div>
    <div class="prop-section"><div class="prop-label">Colour</div><div class="prop-colors">${COLORS.map(c=>`<div class="color-swatch${item.color===c?' active':''}" style="background:${c}" onclick="setColor('${c}')"></div>`).join('')}</div></div>
    <button class="prop-btn" onclick="rotateSelected()">↻ Rotate 90°</button>
    <button class="prop-btn danger" onclick="deleteSelected()">✕ Remove</button>
    <a class="shop-btn" href="${getAmazonLink(item.furnId)}" target="_blank" rel="noopener">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="#111"><path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"/></svg>
      Shop this on Amazon →
    </a>
  `;
  ['pw','ph','px','py'].forEach(id=>{const el=document.getElementById(id);if(el)el.addEventListener('input',applyPropEdit);});
}
function applyPropEdit(){
  const item=items.find(i=>i.id===selected);if(!item)return;
  const{ox,oy}=getCW();
  item.w=toMetres(parseFloat(document.getElementById('pw')?.value)||toDisp(item.w));
  item.h=toMetres(parseFloat(document.getElementById('ph')?.value)||toDisp(item.h));
  item.x=(toMetres(parseFloat(document.getElementById('px')?.value)||toDisp(item.x/SCALE+ox))-ox)*SCALE;
  item.y=(toMetres(parseFloat(document.getElementById('py')?.value)||toDisp(item.y/SCALE+oy))-oy)*SCALE;
  const el=document.getElementById('roomCanvas').querySelector(`[data-id="${selected}"]`);
  if(el){el.style.left=item.x+'px';el.style.top=item.y+'px';el.style.width=(item.w*SCALE)+'px';el.style.height=(item.h*SCALE)+'px';}
  checkWarnings();
}
function setColor(c){const item=items.find(i=>i.id===selected);if(!item)return;item.color=c;renderItems();renderProps();}
function rotateSelected(){const item=items.find(i=>i.id===selected);if(!item)return;saveHistory();const isBed=['bed-king','bed-queen','bed-double','bed-single','bed-bunk'].includes(item.furnId);const cx=item.x+item.w*SCALE/2,cy=item.y+item.h*SCALE/2;item.rot=((item.rot||0)+90)%360;if(isBed){[item.w,item.h]=[item.h,item.w];item.x=cx-item.w*SCALE/2;item.y=cy-item.h*SCALE/2;}renderItems();renderProps();}
function deleteSelected(){saveHistory();items=items.filter(i=>i.id!==selected);selected=null;renderItems();renderProps();}

// ─── MODAL ────────────────────────────────────────────────────────
function openModal(){
  document.getElementById('roomModal').classList.remove('hidden');
  // Sync unit buttons and labels to current unit
  ['M','Ft','Cm'].forEach(u=>document.getElementById('modalUnit'+u)?.classList.remove('active'));
  document.getElementById('modalUnit'+currentUnit.charAt(0).toUpperCase()+currentUnit.slice(1))?.classList.add('active');
  const b=getBounds();
  syncModalInputs(b.maxX-b.minX||4, b.maxY-b.minY||5);
  // Remember current template so we know if user is switching or just resizing
  originalTpl=activeTpl;
  updateModalWarning();
}
function closeModal(){document.getElementById('roomModal').classList.add('hidden');}

function selectTpl(tpl,el){
  activeTpl=tpl;
  document.querySelectorAll('.template-card').forEach(c=>c.classList.remove('active'));
  el.classList.add('active');
  const isCustom=tpl==='custom';
  document.getElementById('sizeSection').style.display=isCustom?'none':'block';
  document.getElementById('drawSection').style.display=isCustom?'block':'none';
  document.getElementById('modalConfirmBtn').textContent=isCustom?'Start Drawing →':'Apply Changes →';
  updateModalWarning();
}

function updateModalWarning(){
  const warn=document.getElementById('modalWarn');
  const info=document.getElementById('modalInfoNote');
  const hasItems=items.length>0;
  const isShapeChange=activeTpl!==originalTpl;
  const isCustom=activeTpl==='custom';

  if(!hasItems){
    // Nothing placed yet — no warning needed
    warn.classList.remove('visible');
    info.style.display='none';
    return;
  }

  if(isCustom){
    document.getElementById('modalWarnText').textContent='Drawing a new shape will clear all your placed furniture. This cannot be undone.';
    warn.classList.add('visible');
    info.style.display='none';
  } else if(isShapeChange){
    document.getElementById('modalWarnText').textContent='Switching to a different shape will clear all your placed furniture. Just adjusting the dimensions below will keep everything.';
    warn.classList.add('visible');
    info.style.display='none';
  } else {
    // Same template, just resizing — safe!
    warn.classList.remove('visible');
    info.style.display='block';
  }
}

function confirmShape(){
  if(activeTpl==='custom'){
    if(items.length>0 && !confirm('Drawing a new shape will clear all placed furniture. Continue?')) return;
    closeModal();
    items=[];selected=null;walls=[];
    roomPoints=[[0,0],[12,0],[12,12],[0,12]];
    renderCanvas();renderWalls();renderItems();
    enterDrawMode();
    return;
  }

  const W=toMetres(parseFloat(document.getElementById('modalW').value)||3.5);
  const L=toMetres(parseFloat(document.getElementById('modalL').value)||3.5);
  const isShapeChange=activeTpl!==originalTpl;

  if(isShapeChange && items.length>0){
    if(!confirm('Switching shape will clear all placed furniture. Continue?')) return;
    saveHistory();
    roomPoints=TEMPLATES[activeTpl](W,L);
    items=[];selected=null;walls=[];
  } else {
    // Same template — resize only, keep furniture
    saveHistory();
    const oldBounds=getBounds();
    const oldW=oldBounds.maxX-oldBounds.minX;
    const oldH=oldBounds.maxY-oldBounds.minY;
    roomPoints=TEMPLATES[activeTpl](W,L);

    // Proportionally reposition furniture so it stays in roughly the same spot
    if(oldW>0 && oldH>0){
      const scaleX=W/oldW, scaleY=L/oldH;
      items.forEach(item=>{
        item.x=item.x*scaleX;
        item.y=item.y*scaleY;
        // Clamp inside new room boundary
        const newBounds=getBounds();
        const nW=(newBounds.maxX-newBounds.minX)*SCALE;
        const nH=(newBounds.maxY-newBounds.minY)*SCALE;
        item.x=Math.max(0,Math.min(item.x, nW-item.w*SCALE));
        item.y=Math.max(0,Math.min(item.y, nH-item.h*SCALE));
      });
    }
    selected=null;
  }

  originalTpl=activeTpl;
  closeModal();
  renderCanvas();renderWalls();renderItems();
  fitZoom();
}

// ─── FURNITURE LIBRARY UI ────────────────────────────────────────
function buildLibrary(filter=''){
  const container=document.getElementById('furnitureList');
  container.innerHTML='';
  FURNITURE_LIBRARY.forEach(cat=>{
    const filtered=cat.items.filter(i=>!filter||i.name.toLowerCase().includes(filter.toLowerCase()));
    if(!filtered.length)return;
    const group=document.createElement('div');group.className='cat-group';
    const header=document.createElement('div');header.className='cat-header';
    header.innerHTML=`${cat.cat} <span style="font-size:0.6rem">${filtered.length}</span>`;
    group.appendChild(header);
    const itemsEl=document.createElement('div');itemsEl.className='cat-items';
    filtered.forEach(furn=>{
      const el=document.createElement('div');el.className='furn-item';el.draggable=true;
      el.innerHTML=`<div class="furn-icon">${furn.icon}</div><div><div class="furn-name">${furn.name}</div><div class="furn-dims">${fmtM(furn.w)} × ${fmtM(furn.h)}</div></div>`;
      el.addEventListener('dragstart',e=>{e.dataTransfer.setData('application/json',JSON.stringify({furnId:furn.id,w:furn.w,h:furn.h,color:furn.color,label:furn.label,icon:furn.icon}));});
      itemsEl.appendChild(el);
    });
    group.appendChild(itemsEl);container.appendChild(group);
  });
}
document.getElementById('furnSearch').addEventListener('input',e=>buildLibrary(e.target.value));

// ─── AI ──────────────────────────────────────────────────────────
// ─── KEYBOARD ────────────────────────────────────────────────────
document.addEventListener('keydown',e=>{
  if(e.key==='Escape'){if(drawMode){exitDrawMode();renderCanvas();}else selectItem(null);}
  if(!drawMode){
    if(e.key==='Delete'&&selected){deleteSelected();return;}
    if(e.key==='r'&&selected){rotateSelected();return;}
  }
  if((e.ctrlKey||e.metaKey)&&e.key==='z'){document.getElementById('btnUndo').click();e.preventDefault();}
  if((e.ctrlKey||e.metaKey)&&e.key==='y'){document.getElementById('btnRedo').click();e.preventDefault();}
});

// ─── UNIT SYSTEM ─────────────────────────────────────────────────
function unitLabel(){return currentUnit==='ft'?'ft / in':currentUnit==='cm'?'cm':'m';}
function unitStep(){return currentUnit==='ft'?0.1:currentUnit==='cm'?1:0.05;}

// metres → display value
function toDisp(m){
  if(currentUnit==='cm') return Math.round(m*100);
  if(currentUnit==='ft') return Math.round(m*3.28084*10)/10;
  return Math.round(m*100)/100;
}

// display value → metres
function toMetres(v){
  if(currentUnit==='cm') return v/100;
  if(currentUnit==='ft') return v/3.28084;
  return v;
}

// Format a metre value as display string with unit suffix
function fmtM(metres){
  if(currentUnit==='cm') return Math.round(metres*100)+'cm';
  if(currentUnit==='ft'){
    const totalIn=Math.round(metres*39.3701);
    const ft=Math.floor(totalIn/12), inch=totalIn%12;
    return inch>0?`${ft}'${inch}"`:`${ft}'`;
  }
  return metres.toFixed(1)+'m';
}

// Format w×h dimensions
function fmtDim(w,h){
  return fmtM(w)+' × '+fmtM(h);
}

// Sync modal inputs when unit changes
function syncModalInputs(wM,lM){
  const wEl=document.getElementById('modalW'),lEl=document.getElementById('modalL');
  if(wEl){wEl.value=toDisp(wM||4);lEl.value=toDisp(lM||5);}
  const ul=currentUnit==='ft'?'ft':currentUnit==='cm'?'cm':'m';
  const wLbl=document.getElementById('modalWLabel'),lLbl=document.getElementById('modalLLabel');
  if(wLbl){wLbl.textContent='Width ('+ul+')';lLbl.textContent='Length ('+ul+')';}
}

function setUnit(unit, fromModal=false){
  // Store current modal values in metres before switching
  const wEl=document.getElementById('modalW'), lEl=document.getElementById('modalL');
  let wM=4,lM=5;
  if(wEl&&lEl){wM=toMetres(parseFloat(wEl.value)||4);lM=toMetres(parseFloat(lEl.value)||5);}
  currentUnit=unit;
  // Update topbar buttons
  ['M','Ft','Cm'].forEach(u=>document.getElementById('unit'+u)?.classList.remove('active'));
  document.getElementById('unit'+unit.charAt(0).toUpperCase()+unit.slice(1))?.classList.add('active');
  // Update modal buttons
  ['M','Ft','Cm'].forEach(u=>document.getElementById('modalUnit'+u)?.classList.remove('active'));
  document.getElementById('modalUnit'+unit.charAt(0).toUpperCase()+unit.slice(1))?.classList.add('active');
  // Update modal inputs with converted values & labels
  syncModalInputs(wM,lM);
  // Refresh everything
  renderCanvas();renderWalls();renderItems();
  if(selected) renderProps();
  // Update furniture library dims
  buildLibrary(document.getElementById('furnSearch').value);
}


// ─── SHARE ────────────────────────────────────────────────────────
document.getElementById('btnShare').addEventListener('click',()=>{
  if(!items.length && !walls.length){
    showToast('Add some furniture first before sharing!');
    return;
  }
  // Encode layout as compressed JSON in URL hash
  const payload={
    v:1, // version
    rp:roomPoints.map(p=>[Math.round(p[0]*100)/100, Math.round(p[1]*100)/100]),
    u:currentUnit,
    items:items.map(i=>({
      fid:i.furnId,w:Math.round(i.w*100)/100,h:Math.round(i.h*100)/100,
      x:Math.round(i.x),y:Math.round(i.y),
      rot:i.rot||0,color:i.color,label:i.label,icon:i.icon
    })),
    walls:walls.map(w=>({
      type:w.type,px:Math.round(w.px*100)/100,py:Math.round(w.py*100)/100,
      size:w.size,rot:w.rot||0
    }))
  };
  const json=JSON.stringify(payload);
  // Base64 encode
  const encoded=btoa(unescape(encodeURIComponent(json)));
  const url=window.location.origin+window.location.pathname+'#layout='+encoded;
  document.getElementById('shareUrl').value=url;
  document.getElementById('shareCopied').style.display='none';
  document.getElementById('shareModal').classList.remove('hidden');
});

function copyShareUrl(){
  const input=document.getElementById('shareUrl');
  input.select();
  input.setSelectionRange(0,99999);
  navigator.clipboard.writeText(input.value).then(()=>{
    const copied=document.getElementById('shareCopied');
    copied.style.display='block';
    document.getElementById('copyBtn').textContent='Copied!';
    setTimeout(()=>{
      copied.style.display='none';
      document.getElementById('copyBtn').textContent='Copy Link';
    },2500);
  }).catch(()=>{
    // Fallback for older browsers
    document.execCommand('copy');
    document.getElementById('shareCopied').style.display='block';
  });
}

// ─── LOAD FROM SHARE LINK ─────────────────────────────────────────
function loadFromUrl(){
  try{
    const hash=window.location.hash;
    if(!hash.includes('#layout=')) return false;
    const encoded=hash.replace('#layout=','');
    const json=decodeURIComponent(escape(atob(encoded)));
    const payload=JSON.parse(json);
    if(!payload.v||!payload.rp) return false;

    // Restore layout
    roomPoints=payload.rp;
    currentUnit=payload.u||'m';
    walls=(payload.walls||[]).map(w=>({...w}));

    // Restore items with idCounter
    idCounter=0;
    items=(payload.items||[]).map(item=>{
      idCounter++;
      return{
        id:'item_'+idCounter,
        furnId:item.fid,
        w:item.w,h:item.h,
        x:item.x,y:item.y,
        rot:item.rot||0,
        color:item.color,
        label:item.label,
        icon:item.icon,
        zIndex:5
      };
    });

    // Sync unit buttons
    ['M','Cm','Ft'].forEach(u=>document.getElementById('unit'+u)?.classList.remove('active'));
    const unitCap=currentUnit.charAt(0).toUpperCase()+currentUnit.slice(1);
    document.getElementById('unit'+unitCap)?.classList.add('active');

    renderCanvas();renderWalls();renderItems();
    fitZoom();
    showToast('Layout loaded from shared link ✓','ok');
    return true;
  }catch(e){
    console.warn('Failed to load shared layout:',e);
    return false;
  }
}


// ─── SIDEBAR TOGGLE ───────────────────────────────────────────────
function toggleSidebar(){
  const sb=document.getElementById('sidebarLeft');
  const btn=document.getElementById('sidebarToggle');
  sb.classList.toggle('collapsed');
  btn.textContent=sb.classList.contains('collapsed')?'›':'‹';
  // Refit canvas after sidebar animates
  setTimeout(()=>fitZoom(),220);
}

// ─── PTZ MOVE PAD ────────────────────────────────────────────────
let ptzStep=5; // pixels per tap
function setPtzStep(px,btn){
  ptzStep=px;
  document.querySelectorAll('.ptz-step-btn').forEach(b=>b.classList.remove('active'));
  btn.classList.add('active');
}
function ptzMove(dx,dy){
  // Move selected wall if one is selected
  if(selectedWallIdx>=0 && selectedWallIdx<walls.length){
    saveHistory();
    const w=walls[selectedWallIdx];
    const stepM=ptzStep/SCALE;
    const b=getBounds();
    const{wpx,hpx}=getWallDims(w);
    // Clamp so wall stays fully within room bounds
    const maxPx=b.maxX - wpx/SCALE;
    const maxPy=b.maxY - hpx/SCALE;
    w.px=Math.max(b.minX, Math.min(w.px+dx*stepM, maxPx));
    w.py=Math.max(b.minY, Math.min(w.py+dy*stepM, maxPy));
    renderWalls();
    return;
  }
  // Move selected furniture item
  const item=items.find(i=>i.id===selected);
  if(!item) return;
  saveHistory();
  const{W,H}=getCW();
  const ed=getEffectiveDims(item);
  item.x=Math.max(0,Math.min(item.x+dx*ptzStep, W-ed.w*SCALE));
  item.y=Math.max(0,Math.min(item.y+dy*ptzStep, H-ed.h*SCALE));
  renderItems();
}

// ─── PANEL COLLAPSE (mobile) ──────────────────────────────────────
function togglePanel(){
  const panel=document.getElementById('sidebarRight');
  const btn=document.getElementById('panelCollapseBtn');
  panel.classList.toggle('panel-expanded');
  btn.textContent=panel.classList.contains('panel-expanded')?'▼':'▲';
  // Restore wall/furniture highlight after collapse
  if(selectedWallIdx>=0){
    const els=document.getElementById('roomCanvas').querySelectorAll('.wall-elem');
    if(els[selectedWallIdx]) els[selectedWallIdx].classList.add('selected-wall');
  }
  setTimeout(()=>centreCanvas(),270);
}

// ─── MOBILE ONBOARDING TIP ────────────────────────────────────────
function dismissTip(){
  const tip=document.getElementById('mobileTip');
  if(tip) tip.classList.add('hidden');
  // Remember dismissed so it doesn't show again
  try{ localStorage.setItem('rw_tip_dismissed','1'); }catch(e){}
}
function initMobileTip(){
  // Only show on mobile and only if not dismissed before
  if(window.innerWidth>768) return;
  try{ if(localStorage.getItem('rw_tip_dismissed')) return; }catch(e){}
  // Don't show if loading from a shared link
  if(window.location.hash.includes('layout=')) return;
  const tip=document.getElementById('mobileTip');
  if(tip) tip.classList.remove('hidden');
}

// ─── AMAZON AFFILIATE LINKS ───────────────────────────────────────
const AMAZON_TAG = 'roomwiseau-22';
const AMAZON_SEARCH = {
  'sofa-3':       'sofa 3 seater',
  'sofa-2':       'sofa 2 seater',
  'sofa-l':       'L shape sofa',
  'armchair':     'armchair',
  'chair':        'dining chair',
  'stool':        'bar stool',
  'ottoman':      'ottoman footstool',
  'bed-king':     'king size bed frame',
  'bed-queen':    'queen size bed frame',
  'bed-double':   'double bed frame',
  'bed-single':   'single bed frame',
  'bed-bunk':     'bunk bed',
  'bedside':      'bedside table',
  'bedside-r':    'bedside table',
  'dining-6':     'dining table 6 seater',
  'dining-4':     'dining table 4 seater',
  'dining-round': 'round dining table',
  'coffee':       'coffee table',
  'coffee-round': 'round coffee table',
  'side-table':   'side table',
  'console':      'console table',
  'desk':         'office desk',
  'desk-corner':  'corner desk',
  'wardrobe-2':   'wardrobe 2 door',
  'wardrobe-3':   'wardrobe 3 door',
  'wardrobe-walk':'walk in wardrobe',
  'bookshelf':    'bookshelf',
  'dresser':      'chest of drawers dresser',
  'cabinet':      'storage cabinet',
  'shoe-rack':    'shoe rack',
  'tv':           '55 inch TV',
  'tv-65':        '65 inch TV',
  'tv-cabinet':   'TV cabinet',
  'tv-stand':     'TV stand',
  'media-unit':   'media unit',
  'fridge':       'fridge refrigerator',
  'fridge-2d':    'french door fridge',
  'washing':      'washing machine',
  'dryer':        'clothes dryer',
  'dishwasher':   'dishwasher',
  'microwave':    'microwave oven',
  'plant-l':      'large indoor plant',
  'plant-s':      'indoor plant pot',
  'rug':          'area rug',
  'rug-round':    'round rug',
  'lamp':         'floor lamp',
  'lamp-table':   'table lamp',
  'mirror':       'wall mirror',
  'exercise':     'exercise yoga mat',
  'bathtub':      'freestanding bathtub',
  'toilet':       'toilet',
  'sink':         'bathroom sink',
  'shower':       'shower enclosure',
};

function getAmazonLink(furnId){
  const q=AMAZON_SEARCH[furnId]||'furniture';
  const url='https://www.amazon.com.au/s?k='+encodeURIComponent(q)+'&tag='+AMAZON_TAG;
  return url;
}
// ─── INIT ─────────────────────────────────────────────────────────
buildLibrary();
renderCanvas();
setTimeout(()=>{
  if(!loadFromUrl()){
    // New user — show room shape chooser on load
    openModal();
  }
  // Show mobile onboarding tip
  setTimeout(initMobileTip, 800);
},100);
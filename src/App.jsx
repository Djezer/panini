import { useState, useEffect } from "react";
import { GROUPS, ALREADY_GOT, RECENT_DOUBLES } from "./data";

const S = {
  body: { minHeight:"100vh", background:"#0d0d0d", fontFamily:"'Inter',sans-serif", color:"#fff" },
  header: { background:"linear-gradient(135deg,#1a1a2e,#16213e)", borderBottom:"1px solid #ffffff11", padding:"14px 16px", position:"sticky", top:0, zIndex:100 },
  headerInner: { maxWidth:860, margin:"0 auto", display:"flex", alignItems:"center", justifyContent:"space-between", flexWrap:"wrap", gap:8 },
  title: { fontWeight:900, fontSize:17, letterSpacing:1 },
  sub: { fontSize:10, color:"#ffffff44", marginTop:2, letterSpacing:2 },
  statsRow: { display:"flex", gap:10, alignItems:"center" },
  statBox: { textAlign:"center" },
  statNum: { fontSize:20, fontWeight:900 },
  statLabel: { fontSize:9, color:"#ffffff44", letterSpacing:1 },
  div: { width:1, height:32, background:"#ffffff22" },
  progressWrap: { maxWidth:860, margin:"10px auto 0", display:"flex", alignItems:"center", gap:8 },
  progressBar: { flex:1, height:5, background:"#ffffff11", borderRadius:3, overflow:"hidden" },
  modeTabs: { display:"flex", background:"#111", borderBottom:"2px solid #ffffff0d" },
  groupTabsWrap: { overflowX:"auto", background:"#0d0d0d", borderBottom:"1px solid #ffffff09", position:"sticky", top:95, zIndex:99 },
  groupTabs: { display:"inline-flex", gap:4, padding:"8px 10px", whiteSpace:"nowrap" },
  content: { maxWidth:860, margin:"0 auto", padding:"20px 14px 80px" },
  footer: { textAlign:"center", padding:14, color:"#ffffff1a", fontSize:10, letterSpacing:2, borderTop:"1px solid #ffffff08" },
};

function allMissingCodes() {
  return Object.values(GROUPS).flatMap(g => Object.values(g.missing).flat().map(s => s[0]));
}
function totalMissing() { return allMissingCodes().length; }
function totalDoubles() {
  return Object.values(GROUPS).reduce((a,g) => a + Object.values(g.doubles).flat().length, 0) + RECENT_DOUBLES.length;
}

export default function App() {
  const [got, setGot] = useState(() => {
    try {
      const saved = localStorage.getItem("panini_got");
      return saved ? JSON.parse(saved) : { ...ALREADY_GOT };
    } catch { return { ...ALREADY_GOT }; }
  });
  const [mode, setMode] = useState("missing");
  const [activeGroup, setActiveGroup] = useState("⭐");
  const [toast, setToast] = useState(null);

  useEffect(() => {
    localStorage.setItem("panini_got", JSON.stringify(got));
  }, [got]);

  useEffect(() => {
    if (!toast) return;
    const t = setTimeout(() => setToast(null), 1800);
    return () => clearTimeout(t);
  }, [toast]);

  const gotCount = allMissingCodes().filter(c => got[c]).length;
  const remaining = totalMissing() - gotCount;
  const pct = Math.round((gotCount / totalMissing()) * 100);

  function toggle(code, name) {
    setGot(prev => {
      const next = { ...prev };
      if (next[code]) { delete next[code]; setToast("↩ " + code + " retiré"); }
      else { next[code] = true; setToast("✓ " + code + " trouvé !"); }
      return next;
    });
  }

  const g = GROUPS[activeGroup];

  const allGroupMissing = Object.values(g.missing).flat().map(s => s[0]);
  const groupGot = allGroupMissing.filter(c => got[c]).length;
  const groupLeft = allGroupMissing.length - groupGot;

  return (
    <div style={S.body}>
      {/* HEADER */}
      <div style={S.header}>
        <div style={S.headerInner}>
          <div>
            <div style={S.title}>⚽ <span style={{color:"#f5c518"}}>PANINI</span> · FIFA WC 2026</div>
            <div style={S.sub}>GESTIONNAIRE DE STICKERS</div>
          </div>
          <div style={S.statsRow}>
            <div style={S.statBox}>
              <div style={{...S.statNum, color:"#2ecc71"}}>{gotCount}</div>
              <div style={S.statLabel}>TROUVÉS</div>
            </div>
            <div style={S.div}/>
            <div style={S.statBox}>
              <div style={{...S.statNum, color:"#e74c3c"}}>{remaining}</div>
              <div style={S.statLabel}>RESTANTS</div>
            </div>
            <div style={S.div}/>
            <div style={S.statBox}>
              <div style={{...S.statNum, color:"#f5c518"}}>{totalDoubles()}</div>
              <div style={S.statLabel}>DOUBLES</div>
            </div>
          </div>
        </div>
        <div style={S.progressWrap}>
          <div style={S.progressBar}>
            <div style={{height:"100%", width:`${pct}%`, background:"linear-gradient(90deg,#e74c3c,#f5c518,#2ecc71)", borderRadius:3, transition:"width .4s"}}/>
          </div>
          <div style={{fontSize:11, fontWeight:800, color:"#f5c518", minWidth:36, textAlign:"right"}}>{pct}%</div>
        </div>
      </div>

      {/* MODE TABS */}
      <div style={S.modeTabs}>
        {[["missing","❌ STICKERS MANQUANTS","#e74c3c"],["doubles","✅ MES DOUBLES","#2ecc71"]].map(([m,label,col]) => (
          <button key={m} onClick={() => setMode(m)} style={{
            flex:1, padding:13, textAlign:"center", fontWeight:800, fontSize:13,
            cursor:"pointer", border:"none", background:"transparent",
            color: mode===m ? col : "#ffffff44",
            letterSpacing:1, borderBottom: mode===m ? `3px solid ${col}` : "3px solid transparent",
            marginBottom:-2, transition:"all .2s"
          }}>{label}</button>
        ))}
      </div>

      {/* GROUP TABS */}
      <div style={S.groupTabsWrap}>
        <div style={S.groupTabs}>
          {Object.entries(GROUPS).map(([key, grp]) => {
            const allM = Object.values(grp.missing).flat().map(s=>s[0]);
            const left = allM.length - allM.filter(c=>got[c]).length;
            const dcount = Object.values(grp.doubles).flat().length;
            const active = key === activeGroup;
            const badgeNum = mode==="missing" ? left : dcount;
            const badgeCol = mode==="missing" ? (left===0?"#2ecc71":"#e74c3c") : "#2ecc71";
            const badgeText = mode==="missing" && left===0 ? "✓" : badgeNum;
            return (
              <button key={key} onClick={() => setActiveGroup(key)} style={{
                borderRadius:8, padding:"6px 13px", cursor:"pointer", fontWeight:700,
                fontSize:12, letterSpacing:.5, transition:"all .15s",
                border: active ? "none" : "1px solid #ffffff11",
                background: active ? grp.color : "transparent",
                color: active ? "#000" : "#ffffff55",
                position:"relative", flexShrink:0
              }}>
                {key === "⭐" ? "⭐" : `Grp ${key}`}
                {badgeNum > 0 && (
                  <span style={{
                    position:"absolute", top:-5, right:-5, background:badgeCol, color:"#000",
                    borderRadius:"50%", width:16, height:16, fontSize:8, fontWeight:800,
                    display:"flex", alignItems:"center", justifyContent:"center"
                  }}>{badgeText}</span>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* CONTENT */}
      <div style={S.content}>
        {/* Group header */}
        <div style={{
          background:`linear-gradient(135deg,${g.bg},${g.color}22)`,
          border:`1px solid ${g.color}44`, borderRadius:14,
          padding:"18px 20px", marginBottom:20,
          display:"flex", alignItems:"center", justifyContent:"space-between", gap:10
        }}>
          <div>
            <div style={{fontSize:26, fontWeight:900, letterSpacing:1, color:g.color}}>{g.label.toUpperCase()}</div>
            <div style={{fontSize:11, color:"#ffffff55", marginTop:4, letterSpacing:2}}>
              {mode==="missing"
                ? `${groupLeft} sticker${groupLeft!==1?"s":""} restants · ${allGroupMissing.length} au total`
                : `${Object.values(g.doubles).flat().length} doubles disponibles`}
            </div>
          </div>
          <div style={{textAlign:"right"}}>
            <div style={{fontSize:36, fontWeight:900, color: mode==="missing"?(groupLeft===0?"#2ecc71":g.color):"#2ecc71"}}>
              {mode==="missing" ? groupLeft : Object.values(g.doubles).flat().length}
            </div>
            <div style={{fontSize:10, color:"#ffffff44"}}>{mode==="missing"?"à trouver":"à échanger"}</div>
          </div>
        </div>

        {mode === "missing" && (
          <div style={{background:"#ffffff08", borderRadius:10, padding:"10px 14px", marginBottom:16, fontSize:11, color:"#ffffff55", textAlign:"center", letterSpacing:.5}}>
            👆 Appuie sur un sticker pour le cocher comme trouvé
          </div>
        )}

        {/* RECENT DOUBLES banner (doubles mode only) */}
        {mode === "doubles" && (
          <>
            <div style={{background:"#0a1f10", border:"1px solid #2ecc7133", borderRadius:12, padding:"14px 18px", marginBottom:20, display:"flex", alignItems:"center", gap:12}}>
              <div style={{fontSize:26}}>🔄</div>
              <div>
                <div style={{fontSize:22, fontWeight:900, color:"#2ecc71"}}>{totalDoubles()} doubles au total</div>
                <div style={{fontSize:12, color:"#2ecc71aa", marginTop:2}}>Disponibles pour l'échange ! Repérés par 🆕 si récents.</div>
              </div>
            </div>
          </>
        )}

        {/* Teams */}
        {Object.entries(mode==="missing" ? g.missing : g.doubles).map(([team, stickers]) => {
          const teamGot = mode==="missing" ? stickers.filter(s=>got[s[0]]).length : 0;
          const teamLeft = stickers.length - teamGot;
          return (
            <div key={team} style={{background:"#161616", borderRadius:12, padding:"16px 18px", marginBottom:14, borderLeft:`4px solid ${g.color}`}}>
              <div style={{display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:12}}>
                <div style={{fontWeight:700, fontSize:14}}>{team}</div>
                <div style={{fontSize:11, fontWeight:600, padding:"3px 10px", borderRadius:20,
                  color: mode==="doubles" ? "#2ecc71cc" : (teamLeft===0?"#2ecc71cc":"#e74c3ccc"),
                  background: mode==="doubles" ? "#2ecc7122" : (teamLeft===0?"#2ecc7122":"#e74c3c22")
                }}>
                  {mode==="doubles" ? `${stickers.length} double${stickers.length!==1?"s":""}` : teamLeft===0 ? "✓ Complet !" : `${teamLeft} manquant${teamLeft!==1?"s":""}`}
                </div>
              </div>
              <div style={{display:"flex", flexWrap:"wrap", gap:7}}>
                {stickers.map(([code, name]) => {
                  const isGot = !!got[code];
                  if (mode==="doubles") return (
                    <div key={code} style={{borderRadius:9, padding:"9px 12px", display:"flex", flexDirection:"column", alignItems:"center", gap:3, minWidth:76, border:"1.5px solid #2ecc7155", background:"#0a1f10"}}>
                      <div style={{fontWeight:800, fontSize:13, color:"#2ecc71"}}>{code}</div>
                      <div style={{fontSize:9, color:"#2ecc71aa", textAlign:"center", lineHeight:1.3, maxWidth:72}}>{name}</div>
                    </div>
                  );
                  return (
                    <div key={code} onClick={() => toggle(code, name)}
                      style={{
                        borderRadius:9, padding:"9px 12px", cursor:"pointer",
                        display:"flex", flexDirection:"column", alignItems:"center", gap:3,
                        minWidth:76, border:`1.5px solid ${g.color}44`,
                        background: g.bg, position:"relative",
                        opacity: isGot ? .45 : 1, transition:"all .2s",
                        WebkitTapHighlightColor:"transparent"
                      }}>
                      {isGot && (
                        <div style={{position:"absolute", inset:0, display:"flex", alignItems:"center", justifyContent:"center", fontSize:24, fontWeight:900, color:"#2ecc71", background:"#00000077", borderRadius:8}}>✓</div>
                      )}
                      <div style={{fontWeight:800, fontSize:13, color:g.color, letterSpacing:.5}}>{code}</div>
                      <div style={{fontSize:9, color:"#ffffffaa", textAlign:"center", lineHeight:1.3, maxWidth:72}}>{name}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>

      <div style={S.footer}>⚽ PANINI · FIFA WORLD CUP 2026™</div>

      {/* TOAST */}
      {toast && (
        <div style={{
          position:"fixed", bottom:24, left:"50%", transform:"translateX(-50%)",
          background:"#2ecc71", color:"#000", fontWeight:800, fontSize:13,
          padding:"10px 20px", borderRadius:30, zIndex:999, whiteSpace:"nowrap",
          boxShadow:"0 4px 20px #2ecc7166"
        }}>{toast}</div>
      )}
    </div>
  );
}

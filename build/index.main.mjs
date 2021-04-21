// Automatically generated with Reach 0.1.2
/* eslint-disable */
export const _version = '0.1.2';


export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };

export async function Alice(ctc, interact) {
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Tuple([ctc0, ctc0]);
  const ctc2 = stdlib.T_Digest;
  const ctc3 = stdlib.T_Null;
  const ctc4 = stdlib.T_Address;
  const ctc5 = stdlib.T_Tuple([ctc0, ctc4, ctc0, ctc4, ctc0, ctc0]);
  const ctc6 = stdlib.T_Tuple([ctc0, ctc4, ctc0, ctc4, ctc0]);
  const ctc7 = stdlib.T_Tuple([]);
  const ctc8 = stdlib.T_Tuple([ctc0, ctc4, ctc0, ctc4, ctc2, ctc0, ctc0, ctc0]);
  const ctc9 = stdlib.T_Tuple([ctc0, ctc4, ctc0, ctc4, ctc2, ctc0, ctc0]);
  const ctc10 = stdlib.T_Tuple([ctc0, ctc4, ctc0, ctc4, ctc2, ctc0]);
  const ctc11 = stdlib.T_Tuple([ctc0, ctc4, ctc0, ctc0, ctc0]);
  const ctc12 = stdlib.T_Tuple([ctc0, ctc4, ctc0, ctc0]);
  const ctc13 = stdlib.T_Tuple([ctc0]);
  
  
  const v50 = await ctc.creationTime();
  const v49 = stdlib.protect(ctc0, interact.wager, null);
  const txn1 = await (ctc.sendrecv(1, 1, stdlib.checkedBigNumberify('./index.rsh:44:9:dot', stdlib.UInt_max, 0), [ctc0, ctc0], [v50, v49], [v49, []], [ctc0], true, true, false, (async (txn1) => {
    const sim_r = { txns: [] };
    sim_r.prevSt = stdlib.digest(ctc1, [stdlib.checkedBigNumberify('./index.rsh:44:9:dot', stdlib.UInt_max, 0), v50]);
    sim_r.prevSt_noPrevTime = stdlib.digest(ctc13, [stdlib.checkedBigNumberify('./index.rsh:44:9:dot', stdlib.UInt_max, 0)]);
    const [v55] = txn1.data;
    const v58 = txn1.time;
    const v54 = txn1.from;
    
    stdlib.assert(true, {
      at: './index.rsh:44:9:dot',
      fs: [],
      msg: null,
      who: 'Alice'
      });
    const v57 = stdlib.add(stdlib.checkedBigNumberify('./index.rsh:compileDApp', stdlib.UInt_max, 0), v55);
    sim_r.txns.push({
      amt: v55,
      kind: 'to',
      tok: undefined
      });
    stdlib.assert(true, {
      at: './index.rsh:44:9:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Alice'
      });
    sim_r.nextSt = stdlib.digest(ctc11, [stdlib.checkedBigNumberify('./index.rsh:46:15:after expr stmt semicolon', stdlib.UInt_max, 1), v54, v55, v57, v58]);
    sim_r.nextSt_noTime = stdlib.digest(ctc12, [stdlib.checkedBigNumberify('./index.rsh:46:15:after expr stmt semicolon', stdlib.UInt_max, 1), v54, v55, v57]);
    sim_r.isHalt = false;
    
    return sim_r;
    })));
  const [v55] = txn1.data;
  const v58 = txn1.time;
  const v54 = txn1.from;
  stdlib.assert(true, {
    at: './index.rsh:44:9:dot',
    fs: [],
    msg: null,
    who: 'Alice'
    });
  const v57 = stdlib.add(stdlib.checkedBigNumberify('./index.rsh:compileDApp', stdlib.UInt_max, 0), v55);
  ;
  stdlib.assert(true, {
    at: './index.rsh:44:9:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Alice'
    });
  const txn2 = await (ctc.recv(2, 0, [], false, stdlib.checkedBigNumberify('./index.rsh:32:18:decimal', stdlib.UInt_max, 10)));
  if (txn2.didTimeout) {
    const txn3 = await (ctc.sendrecv(3, 0, stdlib.checkedBigNumberify('reach standard library:209:7:dot', stdlib.UInt_max, 3), [ctc4, ctc0, ctc0, ctc0], [v54, v55, v57, v58], [stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0), []], [], true, true, false, (async (txn3) => {
      const sim_r = { txns: [] };
      sim_r.prevSt = stdlib.digest(ctc11, [stdlib.checkedBigNumberify('reach standard library:209:7:dot', stdlib.UInt_max, 1), v54, v55, v57, v58]);
      sim_r.prevSt_noPrevTime = stdlib.digest(ctc12, [stdlib.checkedBigNumberify('reach standard library:209:7:dot', stdlib.UInt_max, 1), v54, v55, v57]);
      const [] = txn3.data;
      const v203 = txn3.time;
      const v199 = txn3.from;
      
      stdlib.assert(true, {
        at: 'reach standard library:209:7:dot',
        fs: ['at ./index.rsh:51:41:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
        msg: null,
        who: 'Alice'
        });
      const v201 = stdlib.add(v57, stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0));
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0),
        kind: 'to',
        tok: undefined
        });
      const v202 = stdlib.addressEq(v54, v199);
      stdlib.assert(v202, {
        at: 'reach standard library:209:7:dot',
        fs: ['at ./index.rsh:51:41:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
        msg: 'sender correct',
        who: 'Alice'
        });
      sim_r.txns.push({
        amt: v201,
        kind: 'from',
        to: v54,
        tok: undefined
        });
      sim_r.txns.push({
        kind: 'halt',
        tok: undefined
        })
      sim_r.nextSt = stdlib.digest(ctc7, []);
      sim_r.nextSt_noTime = stdlib.digest(ctc7, []);
      sim_r.isHalt = true;
      
      return sim_r;
      })));
    const [] = txn3.data;
    const v203 = txn3.time;
    const v199 = txn3.from;
    stdlib.assert(true, {
      at: 'reach standard library:209:7:dot',
      fs: ['at ./index.rsh:51:41:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
      msg: null,
      who: 'Alice'
      });
    const v201 = stdlib.add(v57, stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0));
    ;
    const v202 = stdlib.addressEq(v54, v199);
    stdlib.assert(v202, {
      at: 'reach standard library:209:7:dot',
      fs: ['at ./index.rsh:51:41:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
      msg: 'sender correct',
      who: 'Alice'
      });
    ;
    stdlib.protect(ctc3, await interact.informTimeout(), {
      at: './index.rsh:40:33:application',
      fs: ['at ./index.rsh:39:13:application call to [unknown function] (defined at: ./index.rsh:39:25:function exp)', 'at reach standard library:212:8:application call to "after" (defined at: ./index.rsh:38:32:function exp)', 'at ./index.rsh:51:41:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
      msg: 'informTimeout',
      who: 'Alice'
      });
    return;
    }
  else {
    const [] = txn2.data;
    const v65 = txn2.time;
    const v62 = txn2.from;
    stdlib.assert(true, {
      at: './index.rsh:50:9:dot',
      fs: [],
      msg: null,
      who: 'Alice'
      });
    const v64 = stdlib.add(v57, v55);
    ;
    stdlib.assert(true, {
      at: './index.rsh:50:9:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Alice'
      });
    let v66 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1);
    let v218 = v65;
    let v220 = v64;
    
    while ((() => {
      const v76 = stdlib.eq(v66, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1));
      
      return v76;})()) {
      const v80 = stdlib.protect(ctc0, await interact.getHand(), {
        at: './index.rsh:59:42:application',
        fs: ['at ./index.rsh:58:15:application call to [unknown function] (defined at: ./index.rsh:58:19:function exp)'],
        msg: 'getHand',
        who: 'Alice'
        });
      const v82 = stdlib.protect(ctc0, await interact.random(), {
        at: 'reach standard library:60:31:application',
        fs: ['at ./index.rsh:60:52:application call to "makeCommitment" (defined at: reach standard library:59:8:function exp)', 'at ./index.rsh:58:15:application call to [unknown function] (defined at: ./index.rsh:58:19:function exp)'],
        msg: 'random',
        who: 'Alice'
        });
      const v83 = stdlib.digest(ctc1, [v82, v80]);
      const txn3 = await (ctc.sendrecv(6, 1, stdlib.checkedBigNumberify('./index.rsh:62:11:dot', stdlib.UInt_max, 3), [ctc4, ctc0, ctc4, ctc0, ctc0, ctc2], [v54, v55, v62, v218, v220, v83], [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []], [ctc2], true, true, stdlib.checkedBigNumberify('./index.rsh:32:18:decimal', stdlib.UInt_max, 10), (async (txn3) => {
        const sim_r = { txns: [] };
        sim_r.prevSt = stdlib.digest(ctc5, [stdlib.checkedBigNumberify('./index.rsh:62:11:dot', stdlib.UInt_max, 4), v54, v55, v62, v218, v220]);
        sim_r.prevSt_noPrevTime = stdlib.digest(ctc6, [stdlib.checkedBigNumberify('./index.rsh:62:11:dot', stdlib.UInt_max, 4), v54, v55, v62, v220]);
        const [v86] = txn3.data;
        const v90 = txn3.time;
        const v85 = txn3.from;
        
        stdlib.assert(true, {
          at: './index.rsh:62:11:dot',
          fs: [],
          msg: null,
          who: 'Alice'
          });
        const v88 = stdlib.add(v220, stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0));
        sim_r.txns.push({
          amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
          kind: 'to',
          tok: undefined
          });
        const v89 = stdlib.addressEq(v54, v85);
        stdlib.assert(v89, {
          at: './index.rsh:62:11:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Alice'
          });
        sim_r.nextSt = stdlib.digest(ctc9, [stdlib.checkedBigNumberify('./index.rsh:64:17:after expr stmt semicolon', stdlib.UInt_max, 6), v54, v55, v62, v86, v88, v90]);
        sim_r.nextSt_noTime = stdlib.digest(ctc10, [stdlib.checkedBigNumberify('./index.rsh:64:17:after expr stmt semicolon', stdlib.UInt_max, 6), v54, v55, v62, v86, v88]);
        sim_r.isHalt = false;
        
        return sim_r;
        })));
      if (txn3.didTimeout) {
        const txn4 = await (ctc.recv(7, 0, [], false, false));
        const [] = txn4.data;
        const v165 = txn4.time;
        const v161 = txn4.from;
        stdlib.assert(true, {
          at: 'reach standard library:209:7:dot',
          fs: ['at ./index.rsh:63:43:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
          msg: null,
          who: 'Alice'
          });
        const v163 = stdlib.add(v220, stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0));
        ;
        const v164 = stdlib.addressEq(v62, v161);
        stdlib.assert(v164, {
          at: 'reach standard library:209:7:dot',
          fs: ['at ./index.rsh:63:43:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
          msg: 'sender correct',
          who: 'Alice'
          });
        ;
        stdlib.protect(ctc3, await interact.informTimeout(), {
          at: './index.rsh:40:33:application',
          fs: ['at ./index.rsh:39:13:application call to [unknown function] (defined at: ./index.rsh:39:25:function exp)', 'at reach standard library:212:8:application call to "after" (defined at: ./index.rsh:38:32:function exp)', 'at ./index.rsh:63:43:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
          msg: 'informTimeout',
          who: 'Alice'
          });
        return;
        }
      else {
        const [v86] = txn3.data;
        const v90 = txn3.time;
        const v85 = txn3.from;
        stdlib.assert(true, {
          at: './index.rsh:62:11:dot',
          fs: [],
          msg: null,
          who: 'Alice'
          });
        const v88 = stdlib.add(v220, stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0));
        ;
        const v89 = stdlib.addressEq(v54, v85);
        stdlib.assert(v89, {
          at: './index.rsh:62:11:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Alice'
          });
        const txn4 = await (ctc.recv(8, 1, [ctc0], false, stdlib.checkedBigNumberify('./index.rsh:32:18:decimal', stdlib.UInt_max, 10)));
        if (txn4.didTimeout) {
          const txn5 = await (ctc.sendrecv(9, 0, stdlib.checkedBigNumberify('reach standard library:209:7:dot', stdlib.UInt_max, 5), [ctc4, ctc0, ctc4, ctc2, ctc0, ctc0], [v54, v55, v62, v86, v88, v90], [stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0), []], [], true, true, false, (async (txn5) => {
            const sim_r = { txns: [] };
            sim_r.prevSt = stdlib.digest(ctc9, [stdlib.checkedBigNumberify('reach standard library:209:7:dot', stdlib.UInt_max, 6), v54, v55, v62, v86, v88, v90]);
            sim_r.prevSt_noPrevTime = stdlib.digest(ctc10, [stdlib.checkedBigNumberify('reach standard library:209:7:dot', stdlib.UInt_max, 6), v54, v55, v62, v86, v88]);
            const [] = txn5.data;
            const v145 = txn5.time;
            const v141 = txn5.from;
            
            stdlib.assert(true, {
              at: 'reach standard library:209:7:dot',
              fs: ['at ./index.rsh:70:43:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
              msg: null,
              who: 'Alice'
              });
            const v143 = stdlib.add(v88, stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0));
            sim_r.txns.push({
              amt: stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0),
              kind: 'to',
              tok: undefined
              });
            const v144 = stdlib.addressEq(v54, v141);
            stdlib.assert(v144, {
              at: 'reach standard library:209:7:dot',
              fs: ['at ./index.rsh:70:43:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
              msg: 'sender correct',
              who: 'Alice'
              });
            sim_r.txns.push({
              amt: v143,
              kind: 'from',
              to: v54,
              tok: undefined
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined
              })
            sim_r.nextSt = stdlib.digest(ctc7, []);
            sim_r.nextSt_noTime = stdlib.digest(ctc7, []);
            sim_r.isHalt = true;
            
            return sim_r;
            })));
          const [] = txn5.data;
          const v145 = txn5.time;
          const v141 = txn5.from;
          stdlib.assert(true, {
            at: 'reach standard library:209:7:dot',
            fs: ['at ./index.rsh:70:43:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
            msg: null,
            who: 'Alice'
            });
          const v143 = stdlib.add(v88, stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0));
          ;
          const v144 = stdlib.addressEq(v54, v141);
          stdlib.assert(v144, {
            at: 'reach standard library:209:7:dot',
            fs: ['at ./index.rsh:70:43:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
            msg: 'sender correct',
            who: 'Alice'
            });
          ;
          stdlib.protect(ctc3, await interact.informTimeout(), {
            at: './index.rsh:40:33:application',
            fs: ['at ./index.rsh:39:13:application call to [unknown function] (defined at: ./index.rsh:39:25:function exp)', 'at reach standard library:212:8:application call to "after" (defined at: ./index.rsh:38:32:function exp)', 'at ./index.rsh:70:43:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
            msg: 'informTimeout',
            who: 'Alice'
            });
          return;
          }
        else {
          const [v96] = txn4.data;
          const v100 = txn4.time;
          const v95 = txn4.from;
          stdlib.assert(true, {
            at: './index.rsh:69:11:dot',
            fs: [],
            msg: null,
            who: 'Alice'
            });
          const v98 = stdlib.add(v88, stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0));
          ;
          const v99 = stdlib.addressEq(v62, v95);
          stdlib.assert(v99, {
            at: './index.rsh:69:11:dot',
            fs: [],
            msg: 'sender correct',
            who: 'Alice'
            });
          const txn5 = await (ctc.sendrecv(10, 2, stdlib.checkedBigNumberify('./index.rsh:75:11:dot', stdlib.UInt_max, 6), [ctc4, ctc0, ctc4, ctc2, ctc0, ctc0, ctc0, ctc0, ctc0], [v54, v55, v62, v86, v96, v98, v100, v82, v80], [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []], [ctc0, ctc0], true, true, stdlib.checkedBigNumberify('./index.rsh:32:18:decimal', stdlib.UInt_max, 10), (async (txn5) => {
            const sim_r = { txns: [] };
            sim_r.prevSt = stdlib.digest(ctc8, [stdlib.checkedBigNumberify('./index.rsh:75:11:dot', stdlib.UInt_max, 8), v54, v55, v62, v86, v96, v98, v100]);
            sim_r.prevSt_noPrevTime = stdlib.digest(ctc9, [stdlib.checkedBigNumberify('./index.rsh:75:11:dot', stdlib.UInt_max, 8), v54, v55, v62, v86, v96, v98]);
            const [v105, v106] = txn5.data;
            const v110 = txn5.time;
            const v104 = txn5.from;
            
            stdlib.assert(true, {
              at: './index.rsh:75:11:dot',
              fs: [],
              msg: null,
              who: 'Alice'
              });
            const v108 = stdlib.add(v98, stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0));
            sim_r.txns.push({
              amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
              kind: 'to',
              tok: undefined
              });
            const v109 = stdlib.addressEq(v54, v104);
            stdlib.assert(v109, {
              at: './index.rsh:75:11:dot',
              fs: [],
              msg: 'sender correct',
              who: 'Alice'
              });
            const v112 = stdlib.digest(ctc1, [v105, v106]);
            const v113 = stdlib.digestEq(v86, v112);
            stdlib.assert(v113, {
              at: 'reach standard library:65:17:application',
              fs: ['at ./index.rsh:77:24:application call to "checkCommitment" (defined at: reach standard library:64:8:function exp)'],
              msg: null,
              who: 'Alice'
              });
            const v116 = stdlib.sub(stdlib.checkedBigNumberify('./index.rsh:7:18:decimal', stdlib.UInt_max, 4), v96);
            const v117 = stdlib.add(v106, v116);
            const v118 = stdlib.mod(v117, stdlib.checkedBigNumberify('./index.rsh:7:32:decimal', stdlib.UInt_max, 3));
            const cv66 = v118;
            const cv218 = v110;
            const cv220 = v108;
            
            (() => {
              const v66 = cv66;
              const v218 = cv218;
              const v220 = cv220;
              
              if ((() => {
                const v76 = stdlib.eq(v66, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1));
                
                return v76;})()) {
                sim_r.nextSt = stdlib.digest(ctc5, [stdlib.checkedBigNumberify('./index.rsh:56:17:after expr stmt semicolon', stdlib.UInt_max, 4), v54, v55, v62, v218, v220]);
                sim_r.nextSt_noTime = stdlib.digest(ctc6, [stdlib.checkedBigNumberify('./index.rsh:56:17:after expr stmt semicolon', stdlib.UInt_max, 4), v54, v55, v62, v220]);
                sim_r.isHalt = false;
                }
              else {
                const v180 = stdlib.eq(v66, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 2));
                const v183 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:83:16:decimal', stdlib.UInt_max, 2), v55);
                const v185 = v180 ? v54 : v62;
                sim_r.txns.push({
                  amt: v183,
                  kind: 'from',
                  to: v185,
                  tok: undefined
                  });
                sim_r.txns.push({
                  kind: 'halt',
                  tok: undefined
                  })
                sim_r.nextSt = stdlib.digest(ctc7, []);
                sim_r.nextSt_noTime = stdlib.digest(ctc7, []);
                sim_r.isHalt = true;
                }})();
            return sim_r;
            })));
          if (txn5.didTimeout) {
            const txn6 = await (ctc.recv(11, 0, [], false, false));
            const [] = txn6.data;
            const v125 = txn6.time;
            const v121 = txn6.from;
            stdlib.assert(true, {
              at: 'reach standard library:209:7:dot',
              fs: ['at ./index.rsh:76:43:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
              msg: null,
              who: 'Alice'
              });
            const v123 = stdlib.add(v98, stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0));
            ;
            const v124 = stdlib.addressEq(v62, v121);
            stdlib.assert(v124, {
              at: 'reach standard library:209:7:dot',
              fs: ['at ./index.rsh:76:43:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
              msg: 'sender correct',
              who: 'Alice'
              });
            ;
            stdlib.protect(ctc3, await interact.informTimeout(), {
              at: './index.rsh:40:33:application',
              fs: ['at ./index.rsh:39:13:application call to [unknown function] (defined at: ./index.rsh:39:25:function exp)', 'at reach standard library:212:8:application call to "after" (defined at: ./index.rsh:38:32:function exp)', 'at ./index.rsh:76:43:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
              msg: 'informTimeout',
              who: 'Alice'
              });
            return;
            }
          else {
            const [v105, v106] = txn5.data;
            const v110 = txn5.time;
            const v104 = txn5.from;
            stdlib.assert(true, {
              at: './index.rsh:75:11:dot',
              fs: [],
              msg: null,
              who: 'Alice'
              });
            const v108 = stdlib.add(v98, stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0));
            ;
            const v109 = stdlib.addressEq(v54, v104);
            stdlib.assert(v109, {
              at: './index.rsh:75:11:dot',
              fs: [],
              msg: 'sender correct',
              who: 'Alice'
              });
            const v112 = stdlib.digest(ctc1, [v105, v106]);
            const v113 = stdlib.digestEq(v86, v112);
            stdlib.assert(v113, {
              at: 'reach standard library:65:17:application',
              fs: ['at ./index.rsh:77:24:application call to "checkCommitment" (defined at: reach standard library:64:8:function exp)'],
              msg: null,
              who: 'Alice'
              });
            const v116 = stdlib.sub(stdlib.checkedBigNumberify('./index.rsh:7:18:decimal', stdlib.UInt_max, 4), v96);
            const v117 = stdlib.add(v106, v116);
            const v118 = stdlib.mod(v117, stdlib.checkedBigNumberify('./index.rsh:7:32:decimal', stdlib.UInt_max, 3));
            const cv66 = v118;
            const cv218 = v110;
            const cv220 = v108;
            
            v66 = cv66;
            v218 = cv218;
            v220 = cv220;
            
            continue;}
          }
        }
      }
    const v180 = stdlib.eq(v66, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 2));
    const v183 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:83:16:decimal', stdlib.UInt_max, 2), v55);
    const v185 = v180 ? v54 : v62;
    ;
    stdlib.protect(ctc3, await interact.seeOutcome(v66), {
      at: './index.rsh:87:28:application',
      fs: ['at ./index.rsh:86:11:application call to [unknown function] (defined at: ./index.rsh:86:23:function exp)'],
      msg: 'seeOutcome',
      who: 'Alice'
      });
    return;}
  
  
  };
export async function Bob(ctc, interact) {
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Null;
  const ctc2 = stdlib.T_Digest;
  const ctc3 = stdlib.T_Tuple([ctc0, ctc0]);
  const ctc4 = stdlib.T_Tuple([]);
  const ctc5 = stdlib.T_Address;
  const ctc6 = stdlib.T_Tuple([ctc0, ctc5, ctc0, ctc5, ctc2, ctc0, ctc0, ctc0]);
  const ctc7 = stdlib.T_Tuple([ctc0, ctc5, ctc0, ctc5, ctc2, ctc0, ctc0]);
  const ctc8 = stdlib.T_Tuple([ctc0, ctc5, ctc0, ctc5, ctc2, ctc0]);
  const ctc9 = stdlib.T_Tuple([ctc0, ctc5, ctc0, ctc5, ctc0, ctc0]);
  const ctc10 = stdlib.T_Tuple([ctc0, ctc5, ctc0, ctc5, ctc0]);
  const ctc11 = stdlib.T_Tuple([ctc0, ctc5, ctc0, ctc0, ctc0]);
  const ctc12 = stdlib.T_Tuple([ctc0, ctc5, ctc0, ctc0]);
  
  
  const v50 = await ctc.creationTime();
  const txn1 = await (ctc.recv(1, 1, [ctc0], false, false));
  const [v55] = txn1.data;
  const v58 = txn1.time;
  const v54 = txn1.from;
  stdlib.assert(true, {
    at: './index.rsh:44:9:dot',
    fs: [],
    msg: null,
    who: 'Bob'
    });
  const v57 = stdlib.add(stdlib.checkedBigNumberify('./index.rsh:compileDApp', stdlib.UInt_max, 0), v55);
  ;
  stdlib.assert(true, {
    at: './index.rsh:44:9:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Bob'
    });
  stdlib.protect(ctc1, await interact.acceptWager(v55), {
    at: './index.rsh:49:29:application',
    fs: ['at ./index.rsh:48:13:application call to [unknown function] (defined at: ./index.rsh:48:17:function exp)'],
    msg: 'acceptWager',
    who: 'Bob'
    });
  const txn2 = await (ctc.sendrecv(2, 0, stdlib.checkedBigNumberify('./index.rsh:50:9:dot', stdlib.UInt_max, 3), [ctc5, ctc0, ctc0, ctc0], [v54, v55, v57, v58], [v55, []], [], true, true, stdlib.checkedBigNumberify('./index.rsh:32:18:decimal', stdlib.UInt_max, 10), (async (txn2) => {
    const sim_r = { txns: [] };
    sim_r.prevSt = stdlib.digest(ctc11, [stdlib.checkedBigNumberify('./index.rsh:50:9:dot', stdlib.UInt_max, 1), v54, v55, v57, v58]);
    sim_r.prevSt_noPrevTime = stdlib.digest(ctc12, [stdlib.checkedBigNumberify('./index.rsh:50:9:dot', stdlib.UInt_max, 1), v54, v55, v57]);
    const [] = txn2.data;
    const v65 = txn2.time;
    const v62 = txn2.from;
    
    stdlib.assert(true, {
      at: './index.rsh:50:9:dot',
      fs: [],
      msg: null,
      who: 'Bob'
      });
    const v64 = stdlib.add(v57, v55);
    sim_r.txns.push({
      amt: v55,
      kind: 'to',
      tok: undefined
      });
    stdlib.assert(true, {
      at: './index.rsh:50:9:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Bob'
      });
    const v66 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1);
    const v218 = v65;
    const v220 = v64;
    
    if ((() => {
      const v76 = stdlib.eq(v66, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1));
      
      return v76;})()) {
      sim_r.nextSt = stdlib.digest(ctc9, [stdlib.checkedBigNumberify('./index.rsh:56:17:after expr stmt semicolon', stdlib.UInt_max, 4), v54, v55, v62, v218, v220]);
      sim_r.nextSt_noTime = stdlib.digest(ctc10, [stdlib.checkedBigNumberify('./index.rsh:56:17:after expr stmt semicolon', stdlib.UInt_max, 4), v54, v55, v62, v220]);
      sim_r.isHalt = false;
      }
    else {
      const v180 = stdlib.eq(v66, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 2));
      const v183 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:83:16:decimal', stdlib.UInt_max, 2), v55);
      const v185 = v180 ? v54 : v62;
      sim_r.txns.push({
        amt: v183,
        kind: 'from',
        to: v185,
        tok: undefined
        });
      sim_r.txns.push({
        kind: 'halt',
        tok: undefined
        })
      sim_r.nextSt = stdlib.digest(ctc4, []);
      sim_r.nextSt_noTime = stdlib.digest(ctc4, []);
      sim_r.isHalt = true;
      }
    return sim_r;
    })));
  if (txn2.didTimeout) {
    const txn3 = await (ctc.recv(3, 0, [], false, false));
    const [] = txn3.data;
    const v203 = txn3.time;
    const v199 = txn3.from;
    stdlib.assert(true, {
      at: 'reach standard library:209:7:dot',
      fs: ['at ./index.rsh:51:41:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
      msg: null,
      who: 'Bob'
      });
    const v201 = stdlib.add(v57, stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0));
    ;
    const v202 = stdlib.addressEq(v54, v199);
    stdlib.assert(v202, {
      at: 'reach standard library:209:7:dot',
      fs: ['at ./index.rsh:51:41:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
      msg: 'sender correct',
      who: 'Bob'
      });
    ;
    stdlib.protect(ctc1, await interact.informTimeout(), {
      at: './index.rsh:40:33:application',
      fs: ['at ./index.rsh:39:13:application call to [unknown function] (defined at: ./index.rsh:39:25:function exp)', 'at reach standard library:212:8:application call to "after" (defined at: ./index.rsh:38:32:function exp)', 'at ./index.rsh:51:41:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
      msg: 'informTimeout',
      who: 'Bob'
      });
    return;
    }
  else {
    const [] = txn2.data;
    const v65 = txn2.time;
    const v62 = txn2.from;
    stdlib.assert(true, {
      at: './index.rsh:50:9:dot',
      fs: [],
      msg: null,
      who: 'Bob'
      });
    const v64 = stdlib.add(v57, v55);
    ;
    stdlib.assert(true, {
      at: './index.rsh:50:9:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Bob'
      });
    let v66 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1);
    let v218 = v65;
    let v220 = v64;
    
    while ((() => {
      const v76 = stdlib.eq(v66, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1));
      
      return v76;})()) {
      const txn3 = await (ctc.recv(6, 1, [ctc2], false, stdlib.checkedBigNumberify('./index.rsh:32:18:decimal', stdlib.UInt_max, 10)));
      if (txn3.didTimeout) {
        const txn4 = await (ctc.sendrecv(7, 0, stdlib.checkedBigNumberify('reach standard library:209:7:dot', stdlib.UInt_max, 3), [ctc5, ctc0, ctc5, ctc0, ctc0], [v54, v55, v62, v218, v220], [stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0), []], [], true, true, false, (async (txn4) => {
          const sim_r = { txns: [] };
          sim_r.prevSt = stdlib.digest(ctc9, [stdlib.checkedBigNumberify('reach standard library:209:7:dot', stdlib.UInt_max, 4), v54, v55, v62, v218, v220]);
          sim_r.prevSt_noPrevTime = stdlib.digest(ctc10, [stdlib.checkedBigNumberify('reach standard library:209:7:dot', stdlib.UInt_max, 4), v54, v55, v62, v220]);
          const [] = txn4.data;
          const v165 = txn4.time;
          const v161 = txn4.from;
          
          stdlib.assert(true, {
            at: 'reach standard library:209:7:dot',
            fs: ['at ./index.rsh:63:43:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
            msg: null,
            who: 'Bob'
            });
          const v163 = stdlib.add(v220, stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0));
          sim_r.txns.push({
            amt: stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0),
            kind: 'to',
            tok: undefined
            });
          const v164 = stdlib.addressEq(v62, v161);
          stdlib.assert(v164, {
            at: 'reach standard library:209:7:dot',
            fs: ['at ./index.rsh:63:43:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
            msg: 'sender correct',
            who: 'Bob'
            });
          sim_r.txns.push({
            amt: v163,
            kind: 'from',
            to: v62,
            tok: undefined
            });
          sim_r.txns.push({
            kind: 'halt',
            tok: undefined
            })
          sim_r.nextSt = stdlib.digest(ctc4, []);
          sim_r.nextSt_noTime = stdlib.digest(ctc4, []);
          sim_r.isHalt = true;
          
          return sim_r;
          })));
        const [] = txn4.data;
        const v165 = txn4.time;
        const v161 = txn4.from;
        stdlib.assert(true, {
          at: 'reach standard library:209:7:dot',
          fs: ['at ./index.rsh:63:43:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
          msg: null,
          who: 'Bob'
          });
        const v163 = stdlib.add(v220, stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0));
        ;
        const v164 = stdlib.addressEq(v62, v161);
        stdlib.assert(v164, {
          at: 'reach standard library:209:7:dot',
          fs: ['at ./index.rsh:63:43:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
          msg: 'sender correct',
          who: 'Bob'
          });
        ;
        stdlib.protect(ctc1, await interact.informTimeout(), {
          at: './index.rsh:40:33:application',
          fs: ['at ./index.rsh:39:13:application call to [unknown function] (defined at: ./index.rsh:39:25:function exp)', 'at reach standard library:212:8:application call to "after" (defined at: ./index.rsh:38:32:function exp)', 'at ./index.rsh:63:43:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
          msg: 'informTimeout',
          who: 'Bob'
          });
        return;
        }
      else {
        const [v86] = txn3.data;
        const v90 = txn3.time;
        const v85 = txn3.from;
        stdlib.assert(true, {
          at: './index.rsh:62:11:dot',
          fs: [],
          msg: null,
          who: 'Bob'
          });
        const v88 = stdlib.add(v220, stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0));
        ;
        const v89 = stdlib.addressEq(v54, v85);
        stdlib.assert(v89, {
          at: './index.rsh:62:11:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Bob'
          });
        const v94 = stdlib.protect(ctc0, await interact.getHand(), {
          at: './index.rsh:68:52:application',
          fs: ['at ./index.rsh:67:15:application call to [unknown function] (defined at: ./index.rsh:67:19:function exp)'],
          msg: 'getHand',
          who: 'Bob'
          });
        const txn4 = await (ctc.sendrecv(8, 1, stdlib.checkedBigNumberify('./index.rsh:69:11:dot', stdlib.UInt_max, 5), [ctc5, ctc0, ctc5, ctc2, ctc0, ctc0, ctc0], [v54, v55, v62, v86, v88, v90, v94], [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []], [ctc0], true, true, stdlib.checkedBigNumberify('./index.rsh:32:18:decimal', stdlib.UInt_max, 10), (async (txn4) => {
          const sim_r = { txns: [] };
          sim_r.prevSt = stdlib.digest(ctc7, [stdlib.checkedBigNumberify('./index.rsh:69:11:dot', stdlib.UInt_max, 6), v54, v55, v62, v86, v88, v90]);
          sim_r.prevSt_noPrevTime = stdlib.digest(ctc8, [stdlib.checkedBigNumberify('./index.rsh:69:11:dot', stdlib.UInt_max, 6), v54, v55, v62, v86, v88]);
          const [v96] = txn4.data;
          const v100 = txn4.time;
          const v95 = txn4.from;
          
          stdlib.assert(true, {
            at: './index.rsh:69:11:dot',
            fs: [],
            msg: null,
            who: 'Bob'
            });
          const v98 = stdlib.add(v88, stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0));
          sim_r.txns.push({
            amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
            kind: 'to',
            tok: undefined
            });
          const v99 = stdlib.addressEq(v62, v95);
          stdlib.assert(v99, {
            at: './index.rsh:69:11:dot',
            fs: [],
            msg: 'sender correct',
            who: 'Bob'
            });
          sim_r.nextSt = stdlib.digest(ctc6, [stdlib.checkedBigNumberify('./index.rsh:71:17:after expr stmt semicolon', stdlib.UInt_max, 8), v54, v55, v62, v86, v96, v98, v100]);
          sim_r.nextSt_noTime = stdlib.digest(ctc7, [stdlib.checkedBigNumberify('./index.rsh:71:17:after expr stmt semicolon', stdlib.UInt_max, 8), v54, v55, v62, v86, v96, v98]);
          sim_r.isHalt = false;
          
          return sim_r;
          })));
        if (txn4.didTimeout) {
          const txn5 = await (ctc.recv(9, 0, [], false, false));
          const [] = txn5.data;
          const v145 = txn5.time;
          const v141 = txn5.from;
          stdlib.assert(true, {
            at: 'reach standard library:209:7:dot',
            fs: ['at ./index.rsh:70:43:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
            msg: null,
            who: 'Bob'
            });
          const v143 = stdlib.add(v88, stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0));
          ;
          const v144 = stdlib.addressEq(v54, v141);
          stdlib.assert(v144, {
            at: 'reach standard library:209:7:dot',
            fs: ['at ./index.rsh:70:43:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
            msg: 'sender correct',
            who: 'Bob'
            });
          ;
          stdlib.protect(ctc1, await interact.informTimeout(), {
            at: './index.rsh:40:33:application',
            fs: ['at ./index.rsh:39:13:application call to [unknown function] (defined at: ./index.rsh:39:25:function exp)', 'at reach standard library:212:8:application call to "after" (defined at: ./index.rsh:38:32:function exp)', 'at ./index.rsh:70:43:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
            msg: 'informTimeout',
            who: 'Bob'
            });
          return;
          }
        else {
          const [v96] = txn4.data;
          const v100 = txn4.time;
          const v95 = txn4.from;
          stdlib.assert(true, {
            at: './index.rsh:69:11:dot',
            fs: [],
            msg: null,
            who: 'Bob'
            });
          const v98 = stdlib.add(v88, stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0));
          ;
          const v99 = stdlib.addressEq(v62, v95);
          stdlib.assert(v99, {
            at: './index.rsh:69:11:dot',
            fs: [],
            msg: 'sender correct',
            who: 'Bob'
            });
          const txn5 = await (ctc.recv(10, 2, [ctc0, ctc0], false, stdlib.checkedBigNumberify('./index.rsh:32:18:decimal', stdlib.UInt_max, 10)));
          if (txn5.didTimeout) {
            const txn6 = await (ctc.sendrecv(11, 0, stdlib.checkedBigNumberify('reach standard library:209:7:dot', stdlib.UInt_max, 6), [ctc5, ctc0, ctc5, ctc2, ctc0, ctc0, ctc0], [v54, v55, v62, v86, v96, v98, v100], [stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0), []], [], true, true, false, (async (txn6) => {
              const sim_r = { txns: [] };
              sim_r.prevSt = stdlib.digest(ctc6, [stdlib.checkedBigNumberify('reach standard library:209:7:dot', stdlib.UInt_max, 8), v54, v55, v62, v86, v96, v98, v100]);
              sim_r.prevSt_noPrevTime = stdlib.digest(ctc7, [stdlib.checkedBigNumberify('reach standard library:209:7:dot', stdlib.UInt_max, 8), v54, v55, v62, v86, v96, v98]);
              const [] = txn6.data;
              const v125 = txn6.time;
              const v121 = txn6.from;
              
              stdlib.assert(true, {
                at: 'reach standard library:209:7:dot',
                fs: ['at ./index.rsh:76:43:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
                msg: null,
                who: 'Bob'
                });
              const v123 = stdlib.add(v98, stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0));
              sim_r.txns.push({
                amt: stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0),
                kind: 'to',
                tok: undefined
                });
              const v124 = stdlib.addressEq(v62, v121);
              stdlib.assert(v124, {
                at: 'reach standard library:209:7:dot',
                fs: ['at ./index.rsh:76:43:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
                msg: 'sender correct',
                who: 'Bob'
                });
              sim_r.txns.push({
                amt: v123,
                kind: 'from',
                to: v62,
                tok: undefined
                });
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined
                })
              sim_r.nextSt = stdlib.digest(ctc4, []);
              sim_r.nextSt_noTime = stdlib.digest(ctc4, []);
              sim_r.isHalt = true;
              
              return sim_r;
              })));
            const [] = txn6.data;
            const v125 = txn6.time;
            const v121 = txn6.from;
            stdlib.assert(true, {
              at: 'reach standard library:209:7:dot',
              fs: ['at ./index.rsh:76:43:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
              msg: null,
              who: 'Bob'
              });
            const v123 = stdlib.add(v98, stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0));
            ;
            const v124 = stdlib.addressEq(v62, v121);
            stdlib.assert(v124, {
              at: 'reach standard library:209:7:dot',
              fs: ['at ./index.rsh:76:43:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
              msg: 'sender correct',
              who: 'Bob'
              });
            ;
            stdlib.protect(ctc1, await interact.informTimeout(), {
              at: './index.rsh:40:33:application',
              fs: ['at ./index.rsh:39:13:application call to [unknown function] (defined at: ./index.rsh:39:25:function exp)', 'at reach standard library:212:8:application call to "after" (defined at: ./index.rsh:38:32:function exp)', 'at ./index.rsh:76:43:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
              msg: 'informTimeout',
              who: 'Bob'
              });
            return;
            }
          else {
            const [v105, v106] = txn5.data;
            const v110 = txn5.time;
            const v104 = txn5.from;
            stdlib.assert(true, {
              at: './index.rsh:75:11:dot',
              fs: [],
              msg: null,
              who: 'Bob'
              });
            const v108 = stdlib.add(v98, stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0));
            ;
            const v109 = stdlib.addressEq(v54, v104);
            stdlib.assert(v109, {
              at: './index.rsh:75:11:dot',
              fs: [],
              msg: 'sender correct',
              who: 'Bob'
              });
            const v112 = stdlib.digest(ctc3, [v105, v106]);
            const v113 = stdlib.digestEq(v86, v112);
            stdlib.assert(v113, {
              at: 'reach standard library:65:17:application',
              fs: ['at ./index.rsh:77:24:application call to "checkCommitment" (defined at: reach standard library:64:8:function exp)'],
              msg: null,
              who: 'Bob'
              });
            const v116 = stdlib.sub(stdlib.checkedBigNumberify('./index.rsh:7:18:decimal', stdlib.UInt_max, 4), v96);
            const v117 = stdlib.add(v106, v116);
            const v118 = stdlib.mod(v117, stdlib.checkedBigNumberify('./index.rsh:7:32:decimal', stdlib.UInt_max, 3));
            const cv66 = v118;
            const cv218 = v110;
            const cv220 = v108;
            
            v66 = cv66;
            v218 = cv218;
            v220 = cv220;
            
            continue;}
          }
        }
      }
    const v180 = stdlib.eq(v66, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 2));
    const v183 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:83:16:decimal', stdlib.UInt_max, 2), v55);
    const v185 = v180 ? v54 : v62;
    ;
    stdlib.protect(ctc1, await interact.seeOutcome(v66), {
      at: './index.rsh:87:28:application',
      fs: ['at ./index.rsh:86:11:application call to [unknown function] (defined at: ./index.rsh:86:23:function exp)'],
      msg: 'seeOutcome',
      who: 'Bob'
      });
    return;}
  
  
  };

const _ALGO = {
  appApproval: `#pragma version 3
// Check that we're an App
txn TypeEnum
int appl
==
assert
txn RekeyTo
global ZeroAddress
==
assert
// Check that everyone's here
global GroupSize
int 3
>=
assert
// Check txnAppl (us)
txn GroupIndex
int 0
==
assert
// Check txnFromHandler
int 0
gtxn 2 Sender
byte "{{m1}}"
==
||
gtxn 2 Sender
byte "{{m2}}"
==
||
gtxn 2 Sender
byte "{{m3}}"
==
||
gtxn 2 Sender
byte "{{m6}}"
==
||
gtxn 2 Sender
byte "{{m7}}"
==
||
gtxn 2 Sender
byte "{{m8}}"
==
||
gtxn 2 Sender
byte "{{m9}}"
==
||
gtxn 2 Sender
byte "{{m10}}"
==
||
gtxn 2 Sender
byte "{{m11}}"
==
||
assert
byte base64(cw==)
app_global_get
gtxna 0 ApplicationArgs 0
==
assert
byte base64(bA==)
app_global_get
gtxna 0 ApplicationArgs 4
btoi
==
assert
// Don't check anyone else, because Handler does
// Update state
byte base64(cw==)
gtxna 0 ApplicationArgs 1
app_global_put
byte base64(bA==)
global Round
app_global_put
byte base64(aA==)
gtxna 0 ApplicationArgs 2
btoi
app_global_put
byte base64(aA==)
app_global_get
bnz halted
txn OnCompletion
int NoOp
==
assert
b done
halted:
txn OnCompletion
int DeleteApplication
==
assert
done:
int 1
return
`,
  appApproval0: `#pragma version 3
// Check that we're an App
txn TypeEnum
int appl
==
assert
txn RekeyTo
global ZeroAddress
==
assert
txn Sender
byte "{{Deployer}}"
==
assert
txn ApplicationID
bz init
global GroupSize
int 2
==
assert
txn OnCompletion
int UpdateApplication
==
assert
byte base64(cw==)
// compute state in HM_Set 0
int 0
itob
keccak256
app_global_put
byte base64(bA==)
global Round
app_global_put
byte base64(aA==)
int 0
app_global_put
b done
init:
global GroupSize
int 1
==
assert
txn OnCompletion
int NoOp
==
assert
done:
int 1
return
`,
  appClear: `#pragma version 3
// We're alone
global GroupSize
int 1
==
assert
// We're halted
byte base64(aA==)
app_global_get
int 1
==
assert
done:
int 1
return
`,
  ctc: `#pragma version 3
// Check size
global GroupSize
int 3
>=
assert
// Check txnAppl
gtxn 0 TypeEnum
int appl
==
assert
gtxn 0 ApplicationID
byte "{{ApplicationID}}"
btoi
==
assert
// Don't check anything else, because app does
// Check us
txn TypeEnum
int pay
==
int axfer
dup2
==
||
assert
txn RekeyTo
global ZeroAddress
==
assert
txn GroupIndex
int 3
>=
assert
done:
int 1
return
`,
  stepargs: [0, 89, 129, 129, 0, 0, 193, 161, 201, 193, 217, 201],
  steps: [null, `#pragma version 3
// Handler 1
// Check txnAppl
gtxn 0 TypeEnum
int appl
==
assert
gtxn 0 ApplicationID
byte "{{ApplicationID}}"
btoi
==
assert
gtxn 0 NumAppArgs
int 6
==
assert
// Check txnToHandler
gtxn 1 TypeEnum
int pay
==
assert
gtxn 1 Receiver
txn Sender
==
assert
gtxn 1 Amount
gtxn 2 Fee
int 100000
+
==
assert
// Check txnFromHandler (us)
txn GroupIndex
int 2
==
assert
txn TypeEnum
int pay
==
assert
txn Amount
int 0
==
assert
txn Receiver
gtxn 1 Sender
==
assert
// compute state in HM_Check 0
int 0
itob
keccak256
gtxna 0 ApplicationArgs 0
==
assert
txn CloseRemainderTo
gtxn 1 Sender
==
assert
// Run body
// Nothing
// "./index.rsh:44:9:dot"
// "[]"
int 1
assert
int 0
gtxna 0 ApplicationArgs 5
btoi
+
store 255
// CheckPay
// "./index.rsh:44:9:dot"
// "[]"
gtxn 3 TypeEnum
int pay
==
assert
gtxn 3 Receiver
byte "{{ContractAddr}}"
==
assert
gtxn 3 Amount
gtxna 0 ApplicationArgs 3
btoi
-
gtxna 0 ApplicationArgs 5
btoi
==
assert
// Just "sender correct"
// "./index.rsh:44:9:dot"
// "[]"
int 1
assert
// compute state in HM_Set 1
int 1
itob
gtxn 0 Sender
concat
gtxna 0 ApplicationArgs 5
concat
load 255
itob
concat
keccak256
gtxna 0 ApplicationArgs 1
==
assert
gtxna 0 ApplicationArgs 2
btoi
int 0
==
assert
b done
// Check GroupSize
global GroupSize
int 4
==
assert
gtxna 0 ApplicationArgs 3
btoi
int 0
==
assert
// Check time limits
done:
int 1
return
`, `#pragma version 3
// Handler 2
// Check txnAppl
gtxn 0 TypeEnum
int appl
==
assert
gtxn 0 ApplicationID
byte "{{ApplicationID}}"
btoi
==
assert
gtxn 0 NumAppArgs
int 8
==
assert
// Check txnToHandler
gtxn 1 TypeEnum
int pay
==
assert
gtxn 1 Receiver
txn Sender
==
assert
gtxn 1 Amount
gtxn 2 Fee
int 100000
+
==
assert
// Check txnFromHandler (us)
txn GroupIndex
int 2
==
assert
txn TypeEnum
int pay
==
assert
txn Amount
int 0
==
assert
txn Receiver
gtxn 1 Sender
==
assert
// compute state in HM_Check 1
int 1
itob
gtxna 0 ApplicationArgs 5
concat
gtxna 0 ApplicationArgs 6
concat
gtxna 0 ApplicationArgs 7
concat
keccak256
gtxna 0 ApplicationArgs 0
==
assert
txn CloseRemainderTo
gtxn 1 Sender
==
assert
// Run body
// Nothing
// "./index.rsh:50:9:dot"
// "[]"
int 1
assert
gtxna 0 ApplicationArgs 7
btoi
gtxna 0 ApplicationArgs 6
btoi
+
store 255
// CheckPay
// "./index.rsh:50:9:dot"
// "[]"
gtxn 3 TypeEnum
int pay
==
assert
gtxn 3 Receiver
byte "{{ContractAddr}}"
==
assert
gtxn 3 Amount
gtxna 0 ApplicationArgs 3
btoi
-
gtxna 0 ApplicationArgs 6
btoi
==
assert
// Just "sender correct"
// "./index.rsh:50:9:dot"
// "[]"
int 1
assert
int 1
int 1
==
bz l0
// compute state in HM_Set 4
int 4
itob
gtxna 0 ApplicationArgs 5
concat
gtxna 0 ApplicationArgs 6
concat
gtxn 0 Sender
concat
load 255
itob
concat
keccak256
gtxna 0 ApplicationArgs 1
==
assert
gtxna 0 ApplicationArgs 2
btoi
int 0
==
assert
b done
// Check GroupSize
global GroupSize
int 4
==
assert
gtxna 0 ApplicationArgs 3
btoi
int 0
==
assert
// Check time limits
gtxna 0 ApplicationArgs 4
btoi
int 10
+
dup
gtxn 0 LastValid
==
assert
dup
gtxn 1 LastValid
==
assert
dup
gtxn 2 LastValid
==
assert
dup
gtxn 3 LastValid
==
assert
pop
l0:
gtxn 4 TypeEnum
int pay
==
assert
gtxn 4 Receiver
gtxn 0 Sender
gtxna 0 ApplicationArgs 5
int 1
int 2
==
select
==
assert
gtxn 4 Amount
int 2
gtxna 0 ApplicationArgs 6
btoi
*
==
assert
gtxn 4 Sender
byte "{{ContractAddr}}"
==
assert
gtxn 5 TypeEnum
int pay
==
assert
// We don't check the receiver
gtxn 5 Amount
int 0
==
assert
gtxn 5 Sender
byte "{{ContractAddr}}"
==
assert
gtxn 5 CloseRemainderTo
byte "{{Deployer}}"
==
assert
gtxna 0 ApplicationArgs 2
btoi
int 1
==
assert
b done
// Check GroupSize
global GroupSize
int 6
==
assert
gtxna 0 ApplicationArgs 3
btoi
gtxn 4 Fee
gtxn 5 Fee
+
==
assert
// Check time limits
gtxna 0 ApplicationArgs 4
btoi
int 10
+
dup
gtxn 0 LastValid
==
assert
dup
gtxn 1 LastValid
==
assert
dup
gtxn 2 LastValid
==
assert
dup
gtxn 3 LastValid
==
assert
dup
gtxn 4 LastValid
==
assert
dup
gtxn 5 LastValid
==
assert
pop
done:
int 1
return
`, `#pragma version 3
// Handler 3
// Check txnAppl
gtxn 0 TypeEnum
int appl
==
assert
gtxn 0 ApplicationID
byte "{{ApplicationID}}"
btoi
==
assert
gtxn 0 NumAppArgs
int 8
==
assert
// Check txnToHandler
gtxn 1 TypeEnum
int pay
==
assert
gtxn 1 Receiver
txn Sender
==
assert
gtxn 1 Amount
gtxn 2 Fee
int 100000
+
==
assert
// Check txnFromHandler (us)
txn GroupIndex
int 2
==
assert
txn TypeEnum
int pay
==
assert
txn Amount
int 0
==
assert
txn Receiver
gtxn 1 Sender
==
assert
// compute state in HM_Check 1
int 1
itob
gtxna 0 ApplicationArgs 5
concat
gtxna 0 ApplicationArgs 6
concat
gtxna 0 ApplicationArgs 7
concat
keccak256
gtxna 0 ApplicationArgs 0
==
assert
txn CloseRemainderTo
gtxn 1 Sender
==
assert
// Run body
// Nothing
// "reach standard library:209:7:dot"
// "[at ./index.rsh:51:41:application call to \"closeTo\" (defined at: reach standard library:207:8:function exp)]"
int 1
assert
// CheckPay
// "reach standard library:209:7:dot"
// "[at ./index.rsh:51:41:application call to \"closeTo\" (defined at: reach standard library:207:8:function exp)]"
gtxn 3 TypeEnum
int pay
==
assert
gtxn 3 Receiver
byte "{{ContractAddr}}"
==
assert
gtxn 3 Amount
gtxna 0 ApplicationArgs 3
btoi
-
int 0
==
assert
// Just "sender correct"
// "reach standard library:209:7:dot"
// "[at ./index.rsh:51:41:application call to \"closeTo\" (defined at: reach standard library:207:8:function exp)]"
gtxna 0 ApplicationArgs 5
gtxn 0 Sender
==
assert
gtxn 4 TypeEnum
int pay
==
assert
gtxn 4 Receiver
gtxna 0 ApplicationArgs 5
==
assert
gtxn 4 Amount
gtxna 0 ApplicationArgs 7
btoi
int 0
+
==
assert
gtxn 4 Sender
byte "{{ContractAddr}}"
==
assert
gtxn 5 TypeEnum
int pay
==
assert
// We don't check the receiver
gtxn 5 Amount
int 0
==
assert
gtxn 5 Sender
byte "{{ContractAddr}}"
==
assert
gtxn 5 CloseRemainderTo
byte "{{Deployer}}"
==
assert
gtxna 0 ApplicationArgs 2
btoi
int 1
==
assert
b done
// Check GroupSize
global GroupSize
int 6
==
assert
gtxna 0 ApplicationArgs 3
btoi
gtxn 4 Fee
gtxn 5 Fee
+
==
assert
// Check time limits
gtxna 0 ApplicationArgs 4
btoi
int 10
+
dup
gtxn 0 FirstValid
==
assert
dup
gtxn 1 FirstValid
==
assert
dup
gtxn 2 FirstValid
==
assert
dup
gtxn 3 FirstValid
==
assert
dup
gtxn 4 FirstValid
==
assert
dup
gtxn 5 FirstValid
==
assert
pop
done:
int 1
return
`, null, null, `#pragma version 3
// Handler 6
// Check txnAppl
gtxn 0 TypeEnum
int appl
==
assert
gtxn 0 ApplicationID
byte "{{ApplicationID}}"
btoi
==
assert
gtxn 0 NumAppArgs
int 10
==
assert
// Check txnToHandler
gtxn 1 TypeEnum
int pay
==
assert
gtxn 1 Receiver
txn Sender
==
assert
gtxn 1 Amount
gtxn 2 Fee
int 100000
+
==
assert
// Check txnFromHandler (us)
txn GroupIndex
int 2
==
assert
txn TypeEnum
int pay
==
assert
txn Amount
int 0
==
assert
txn Receiver
gtxn 1 Sender
==
assert
// compute state in HM_Check 4
int 4
itob
gtxna 0 ApplicationArgs 5
concat
gtxna 0 ApplicationArgs 6
concat
gtxna 0 ApplicationArgs 7
concat
gtxna 0 ApplicationArgs 8
concat
keccak256
gtxna 0 ApplicationArgs 0
==
assert
txn CloseRemainderTo
gtxn 1 Sender
==
assert
// Run body
// Nothing
// "./index.rsh:62:11:dot"
// "[]"
int 1
assert
gtxna 0 ApplicationArgs 8
btoi
int 0
+
store 255
// CheckPay
// "./index.rsh:62:11:dot"
// "[]"
gtxn 3 TypeEnum
int pay
==
assert
gtxn 3 Receiver
byte "{{ContractAddr}}"
==
assert
gtxn 3 Amount
gtxna 0 ApplicationArgs 3
btoi
-
int 0
==
assert
// Just "sender correct"
// "./index.rsh:62:11:dot"
// "[]"
gtxna 0 ApplicationArgs 5
gtxn 0 Sender
==
assert
// compute state in HM_Set 6
int 6
itob
gtxna 0 ApplicationArgs 5
concat
gtxna 0 ApplicationArgs 6
concat
gtxna 0 ApplicationArgs 7
concat
gtxna 0 ApplicationArgs 9
concat
load 255
itob
concat
keccak256
gtxna 0 ApplicationArgs 1
==
assert
gtxna 0 ApplicationArgs 2
btoi
int 0
==
assert
b done
// Check GroupSize
global GroupSize
int 4
==
assert
gtxna 0 ApplicationArgs 3
btoi
int 0
==
assert
// Check time limits
gtxna 0 ApplicationArgs 4
btoi
int 10
+
dup
gtxn 0 LastValid
==
assert
dup
gtxn 1 LastValid
==
assert
dup
gtxn 2 LastValid
==
assert
dup
gtxn 3 LastValid
==
assert
pop
done:
int 1
return
`, `#pragma version 3
// Handler 7
// Check txnAppl
gtxn 0 TypeEnum
int appl
==
assert
gtxn 0 ApplicationID
byte "{{ApplicationID}}"
btoi
==
assert
gtxn 0 NumAppArgs
int 9
==
assert
// Check txnToHandler
gtxn 1 TypeEnum
int pay
==
assert
gtxn 1 Receiver
txn Sender
==
assert
gtxn 1 Amount
gtxn 2 Fee
int 100000
+
==
assert
// Check txnFromHandler (us)
txn GroupIndex
int 2
==
assert
txn TypeEnum
int pay
==
assert
txn Amount
int 0
==
assert
txn Receiver
gtxn 1 Sender
==
assert
// compute state in HM_Check 4
int 4
itob
gtxna 0 ApplicationArgs 5
concat
gtxna 0 ApplicationArgs 6
concat
gtxna 0 ApplicationArgs 7
concat
gtxna 0 ApplicationArgs 8
concat
keccak256
gtxna 0 ApplicationArgs 0
==
assert
txn CloseRemainderTo
gtxn 1 Sender
==
assert
// Run body
// Nothing
// "reach standard library:209:7:dot"
// "[at ./index.rsh:63:43:application call to \"closeTo\" (defined at: reach standard library:207:8:function exp)]"
int 1
assert
// CheckPay
// "reach standard library:209:7:dot"
// "[at ./index.rsh:63:43:application call to \"closeTo\" (defined at: reach standard library:207:8:function exp)]"
gtxn 3 TypeEnum
int pay
==
assert
gtxn 3 Receiver
byte "{{ContractAddr}}"
==
assert
gtxn 3 Amount
gtxna 0 ApplicationArgs 3
btoi
-
int 0
==
assert
// Just "sender correct"
// "reach standard library:209:7:dot"
// "[at ./index.rsh:63:43:application call to \"closeTo\" (defined at: reach standard library:207:8:function exp)]"
gtxna 0 ApplicationArgs 7
gtxn 0 Sender
==
assert
gtxn 4 TypeEnum
int pay
==
assert
gtxn 4 Receiver
gtxna 0 ApplicationArgs 7
==
assert
gtxn 4 Amount
gtxna 0 ApplicationArgs 8
btoi
int 0
+
==
assert
gtxn 4 Sender
byte "{{ContractAddr}}"
==
assert
gtxn 5 TypeEnum
int pay
==
assert
// We don't check the receiver
gtxn 5 Amount
int 0
==
assert
gtxn 5 Sender
byte "{{ContractAddr}}"
==
assert
gtxn 5 CloseRemainderTo
byte "{{Deployer}}"
==
assert
gtxna 0 ApplicationArgs 2
btoi
int 1
==
assert
b done
// Check GroupSize
global GroupSize
int 6
==
assert
gtxna 0 ApplicationArgs 3
btoi
gtxn 4 Fee
gtxn 5 Fee
+
==
assert
// Check time limits
gtxna 0 ApplicationArgs 4
btoi
int 10
+
dup
gtxn 0 FirstValid
==
assert
dup
gtxn 1 FirstValid
==
assert
dup
gtxn 2 FirstValid
==
assert
dup
gtxn 3 FirstValid
==
assert
dup
gtxn 4 FirstValid
==
assert
dup
gtxn 5 FirstValid
==
assert
pop
done:
int 1
return
`, `#pragma version 3
// Handler 8
// Check txnAppl
gtxn 0 TypeEnum
int appl
==
assert
gtxn 0 ApplicationID
byte "{{ApplicationID}}"
btoi
==
assert
gtxn 0 NumAppArgs
int 11
==
assert
// Check txnToHandler
gtxn 1 TypeEnum
int pay
==
assert
gtxn 1 Receiver
txn Sender
==
assert
gtxn 1 Amount
gtxn 2 Fee
int 100000
+
==
assert
// Check txnFromHandler (us)
txn GroupIndex
int 2
==
assert
txn TypeEnum
int pay
==
assert
txn Amount
int 0
==
assert
txn Receiver
gtxn 1 Sender
==
assert
// compute state in HM_Check 6
int 6
itob
gtxna 0 ApplicationArgs 5
concat
gtxna 0 ApplicationArgs 6
concat
gtxna 0 ApplicationArgs 7
concat
gtxna 0 ApplicationArgs 8
concat
gtxna 0 ApplicationArgs 9
concat
keccak256
gtxna 0 ApplicationArgs 0
==
assert
txn CloseRemainderTo
gtxn 1 Sender
==
assert
// Run body
// Nothing
// "./index.rsh:69:11:dot"
// "[]"
int 1
assert
gtxna 0 ApplicationArgs 9
btoi
int 0
+
store 255
// CheckPay
// "./index.rsh:69:11:dot"
// "[]"
gtxn 3 TypeEnum
int pay
==
assert
gtxn 3 Receiver
byte "{{ContractAddr}}"
==
assert
gtxn 3 Amount
gtxna 0 ApplicationArgs 3
btoi
-
int 0
==
assert
// Just "sender correct"
// "./index.rsh:69:11:dot"
// "[]"
gtxna 0 ApplicationArgs 7
gtxn 0 Sender
==
assert
// compute state in HM_Set 8
int 8
itob
gtxna 0 ApplicationArgs 5
concat
gtxna 0 ApplicationArgs 6
concat
gtxna 0 ApplicationArgs 7
concat
gtxna 0 ApplicationArgs 8
concat
gtxna 0 ApplicationArgs 10
concat
load 255
itob
concat
keccak256
gtxna 0 ApplicationArgs 1
==
assert
gtxna 0 ApplicationArgs 2
btoi
int 0
==
assert
b done
// Check GroupSize
global GroupSize
int 4
==
assert
gtxna 0 ApplicationArgs 3
btoi
int 0
==
assert
// Check time limits
gtxna 0 ApplicationArgs 4
btoi
int 10
+
dup
gtxn 0 LastValid
==
assert
dup
gtxn 1 LastValid
==
assert
dup
gtxn 2 LastValid
==
assert
dup
gtxn 3 LastValid
==
assert
pop
done:
int 1
return
`, `#pragma version 3
// Handler 9
// Check txnAppl
gtxn 0 TypeEnum
int appl
==
assert
gtxn 0 ApplicationID
byte "{{ApplicationID}}"
btoi
==
assert
gtxn 0 NumAppArgs
int 10
==
assert
// Check txnToHandler
gtxn 1 TypeEnum
int pay
==
assert
gtxn 1 Receiver
txn Sender
==
assert
gtxn 1 Amount
gtxn 2 Fee
int 100000
+
==
assert
// Check txnFromHandler (us)
txn GroupIndex
int 2
==
assert
txn TypeEnum
int pay
==
assert
txn Amount
int 0
==
assert
txn Receiver
gtxn 1 Sender
==
assert
// compute state in HM_Check 6
int 6
itob
gtxna 0 ApplicationArgs 5
concat
gtxna 0 ApplicationArgs 6
concat
gtxna 0 ApplicationArgs 7
concat
gtxna 0 ApplicationArgs 8
concat
gtxna 0 ApplicationArgs 9
concat
keccak256
gtxna 0 ApplicationArgs 0
==
assert
txn CloseRemainderTo
gtxn 1 Sender
==
assert
// Run body
// Nothing
// "reach standard library:209:7:dot"
// "[at ./index.rsh:70:43:application call to \"closeTo\" (defined at: reach standard library:207:8:function exp)]"
int 1
assert
// CheckPay
// "reach standard library:209:7:dot"
// "[at ./index.rsh:70:43:application call to \"closeTo\" (defined at: reach standard library:207:8:function exp)]"
gtxn 3 TypeEnum
int pay
==
assert
gtxn 3 Receiver
byte "{{ContractAddr}}"
==
assert
gtxn 3 Amount
gtxna 0 ApplicationArgs 3
btoi
-
int 0
==
assert
// Just "sender correct"
// "reach standard library:209:7:dot"
// "[at ./index.rsh:70:43:application call to \"closeTo\" (defined at: reach standard library:207:8:function exp)]"
gtxna 0 ApplicationArgs 5
gtxn 0 Sender
==
assert
gtxn 4 TypeEnum
int pay
==
assert
gtxn 4 Receiver
gtxna 0 ApplicationArgs 5
==
assert
gtxn 4 Amount
gtxna 0 ApplicationArgs 9
btoi
int 0
+
==
assert
gtxn 4 Sender
byte "{{ContractAddr}}"
==
assert
gtxn 5 TypeEnum
int pay
==
assert
// We don't check the receiver
gtxn 5 Amount
int 0
==
assert
gtxn 5 Sender
byte "{{ContractAddr}}"
==
assert
gtxn 5 CloseRemainderTo
byte "{{Deployer}}"
==
assert
gtxna 0 ApplicationArgs 2
btoi
int 1
==
assert
b done
// Check GroupSize
global GroupSize
int 6
==
assert
gtxna 0 ApplicationArgs 3
btoi
gtxn 4 Fee
gtxn 5 Fee
+
==
assert
// Check time limits
gtxna 0 ApplicationArgs 4
btoi
int 10
+
dup
gtxn 0 FirstValid
==
assert
dup
gtxn 1 FirstValid
==
assert
dup
gtxn 2 FirstValid
==
assert
dup
gtxn 3 FirstValid
==
assert
dup
gtxn 4 FirstValid
==
assert
dup
gtxn 5 FirstValid
==
assert
pop
done:
int 1
return
`, `#pragma version 3
// Handler 10
// Check txnAppl
gtxn 0 TypeEnum
int appl
==
assert
gtxn 0 ApplicationID
byte "{{ApplicationID}}"
btoi
==
assert
gtxn 0 NumAppArgs
int 13
==
assert
// Check txnToHandler
gtxn 1 TypeEnum
int pay
==
assert
gtxn 1 Receiver
txn Sender
==
assert
gtxn 1 Amount
gtxn 2 Fee
int 100000
+
==
assert
// Check txnFromHandler (us)
txn GroupIndex
int 2
==
assert
txn TypeEnum
int pay
==
assert
txn Amount
int 0
==
assert
txn Receiver
gtxn 1 Sender
==
assert
// compute state in HM_Check 8
int 8
itob
gtxna 0 ApplicationArgs 5
concat
gtxna 0 ApplicationArgs 6
concat
gtxna 0 ApplicationArgs 7
concat
gtxna 0 ApplicationArgs 8
concat
gtxna 0 ApplicationArgs 9
concat
gtxna 0 ApplicationArgs 10
concat
keccak256
gtxna 0 ApplicationArgs 0
==
assert
txn CloseRemainderTo
gtxn 1 Sender
==
assert
// Run body
// Nothing
// "./index.rsh:75:11:dot"
// "[]"
int 1
assert
gtxna 0 ApplicationArgs 10
btoi
int 0
+
store 255
// CheckPay
// "./index.rsh:75:11:dot"
// "[]"
gtxn 3 TypeEnum
int pay
==
assert
gtxn 3 Receiver
byte "{{ContractAddr}}"
==
assert
gtxn 3 Amount
gtxna 0 ApplicationArgs 3
btoi
-
int 0
==
assert
// Just "sender correct"
// "./index.rsh:75:11:dot"
// "[]"
gtxna 0 ApplicationArgs 5
gtxn 0 Sender
==
assert
// Nothing
// "reach standard library:65:17:application"
// "[at ./index.rsh:77:24:application call to \"checkCommitment\" (defined at: reach standard library:64:8:function exp)]"
gtxna 0 ApplicationArgs 8
gtxna 0 ApplicationArgs 11
gtxna 0 ApplicationArgs 12
concat
keccak256
==
assert
gtxna 0 ApplicationArgs 12
btoi
int 4
gtxna 0 ApplicationArgs 9
btoi
-
+
int 3
%
dup
store 254
int 1
==
bz l0
// compute state in HM_Set 4
int 4
itob
gtxna 0 ApplicationArgs 5
concat
gtxna 0 ApplicationArgs 6
concat
gtxna 0 ApplicationArgs 7
concat
load 255
itob
concat
keccak256
gtxna 0 ApplicationArgs 1
==
assert
gtxna 0 ApplicationArgs 2
btoi
int 0
==
assert
b done
// Check GroupSize
global GroupSize
int 4
==
assert
gtxna 0 ApplicationArgs 3
btoi
int 0
==
assert
// Check time limits
gtxna 0 ApplicationArgs 4
btoi
int 10
+
dup
gtxn 0 LastValid
==
assert
dup
gtxn 1 LastValid
==
assert
dup
gtxn 2 LastValid
==
assert
dup
gtxn 3 LastValid
==
assert
pop
l0:
gtxn 4 TypeEnum
int pay
==
assert
gtxn 4 Receiver
gtxna 0 ApplicationArgs 7
gtxna 0 ApplicationArgs 5
load 254
int 2
==
select
==
assert
gtxn 4 Amount
int 2
gtxna 0 ApplicationArgs 6
btoi
*
==
assert
gtxn 4 Sender
byte "{{ContractAddr}}"
==
assert
gtxn 5 TypeEnum
int pay
==
assert
// We don't check the receiver
gtxn 5 Amount
int 0
==
assert
gtxn 5 Sender
byte "{{ContractAddr}}"
==
assert
gtxn 5 CloseRemainderTo
byte "{{Deployer}}"
==
assert
gtxna 0 ApplicationArgs 2
btoi
int 1
==
assert
b done
// Check GroupSize
global GroupSize
int 6
==
assert
gtxna 0 ApplicationArgs 3
btoi
gtxn 4 Fee
gtxn 5 Fee
+
==
assert
// Check time limits
gtxna 0 ApplicationArgs 4
btoi
int 10
+
dup
gtxn 0 LastValid
==
assert
dup
gtxn 1 LastValid
==
assert
dup
gtxn 2 LastValid
==
assert
dup
gtxn 3 LastValid
==
assert
dup
gtxn 4 LastValid
==
assert
dup
gtxn 5 LastValid
==
assert
pop
done:
int 1
return
`, `#pragma version 3
// Handler 11
// Check txnAppl
gtxn 0 TypeEnum
int appl
==
assert
gtxn 0 ApplicationID
byte "{{ApplicationID}}"
btoi
==
assert
gtxn 0 NumAppArgs
int 11
==
assert
// Check txnToHandler
gtxn 1 TypeEnum
int pay
==
assert
gtxn 1 Receiver
txn Sender
==
assert
gtxn 1 Amount
gtxn 2 Fee
int 100000
+
==
assert
// Check txnFromHandler (us)
txn GroupIndex
int 2
==
assert
txn TypeEnum
int pay
==
assert
txn Amount
int 0
==
assert
txn Receiver
gtxn 1 Sender
==
assert
// compute state in HM_Check 8
int 8
itob
gtxna 0 ApplicationArgs 5
concat
gtxna 0 ApplicationArgs 6
concat
gtxna 0 ApplicationArgs 7
concat
gtxna 0 ApplicationArgs 8
concat
gtxna 0 ApplicationArgs 9
concat
gtxna 0 ApplicationArgs 10
concat
keccak256
gtxna 0 ApplicationArgs 0
==
assert
txn CloseRemainderTo
gtxn 1 Sender
==
assert
// Run body
// Nothing
// "reach standard library:209:7:dot"
// "[at ./index.rsh:76:43:application call to \"closeTo\" (defined at: reach standard library:207:8:function exp)]"
int 1
assert
// CheckPay
// "reach standard library:209:7:dot"
// "[at ./index.rsh:76:43:application call to \"closeTo\" (defined at: reach standard library:207:8:function exp)]"
gtxn 3 TypeEnum
int pay
==
assert
gtxn 3 Receiver
byte "{{ContractAddr}}"
==
assert
gtxn 3 Amount
gtxna 0 ApplicationArgs 3
btoi
-
int 0
==
assert
// Just "sender correct"
// "reach standard library:209:7:dot"
// "[at ./index.rsh:76:43:application call to \"closeTo\" (defined at: reach standard library:207:8:function exp)]"
gtxna 0 ApplicationArgs 7
gtxn 0 Sender
==
assert
gtxn 4 TypeEnum
int pay
==
assert
gtxn 4 Receiver
gtxna 0 ApplicationArgs 7
==
assert
gtxn 4 Amount
gtxna 0 ApplicationArgs 10
btoi
int 0
+
==
assert
gtxn 4 Sender
byte "{{ContractAddr}}"
==
assert
gtxn 5 TypeEnum
int pay
==
assert
// We don't check the receiver
gtxn 5 Amount
int 0
==
assert
gtxn 5 Sender
byte "{{ContractAddr}}"
==
assert
gtxn 5 CloseRemainderTo
byte "{{Deployer}}"
==
assert
gtxna 0 ApplicationArgs 2
btoi
int 1
==
assert
b done
// Check GroupSize
global GroupSize
int 6
==
assert
gtxna 0 ApplicationArgs 3
btoi
gtxn 4 Fee
gtxn 5 Fee
+
==
assert
// Check time limits
gtxna 0 ApplicationArgs 4
btoi
int 10
+
dup
gtxn 0 FirstValid
==
assert
dup
gtxn 1 FirstValid
==
assert
dup
gtxn 2 FirstValid
==
assert
dup
gtxn 3 FirstValid
==
assert
dup
gtxn 4 FirstValid
==
assert
dup
gtxn 5 FirstValid
==
assert
pop
done:
int 1
return
`],
  unsupported: false
  };
const _ETH = {
  ABI: `[
  {
    "inputs": [],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "anonymous": false,
    "inputs": [],
    "name": "e0",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v50",
                "type": "uint256"
              }
            ],
            "internalType": "struct T0",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v55",
                "type": "uint256"
              }
            ],
            "internalType": "struct T2",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T3",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e1",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v54",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v55",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v62",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v86",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v96",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v98",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v100",
                "type": "uint256"
              }
            ],
            "internalType": "struct T16",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v105",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v106",
                "type": "uint256"
              }
            ],
            "internalType": "struct T20",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T21",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e10",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v54",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v55",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v62",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v86",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v96",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v98",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v100",
                "type": "uint256"
              }
            ],
            "internalType": "struct T16",
            "name": "svs",
            "type": "tuple"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T22",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e11",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v54",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v55",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v57",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v58",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "svs",
            "type": "tuple"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T8",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e2",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v54",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v55",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v57",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v58",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "svs",
            "type": "tuple"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T8",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e3",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v54",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v55",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v62",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v218",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v220",
                "type": "uint256"
              }
            ],
            "internalType": "struct T9",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v86",
                "type": "uint256"
              }
            ],
            "internalType": "struct T13",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T14",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e6",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v54",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v55",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v62",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v218",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v220",
                "type": "uint256"
              }
            ],
            "internalType": "struct T9",
            "name": "svs",
            "type": "tuple"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T15",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e7",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v54",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v55",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v62",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v86",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v88",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v90",
                "type": "uint256"
              }
            ],
            "internalType": "struct T12",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v96",
                "type": "uint256"
              }
            ],
            "internalType": "struct T17",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T18",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e8",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v54",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v55",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v62",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v86",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v88",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v90",
                "type": "uint256"
              }
            ],
            "internalType": "struct T12",
            "name": "svs",
            "type": "tuple"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T19",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e9",
    "type": "event"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v50",
                "type": "uint256"
              }
            ],
            "internalType": "struct T0",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v55",
                "type": "uint256"
              }
            ],
            "internalType": "struct T2",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T3",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m1",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v54",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v55",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v62",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v86",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v96",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v98",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v100",
                "type": "uint256"
              }
            ],
            "internalType": "struct T16",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v105",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v106",
                "type": "uint256"
              }
            ],
            "internalType": "struct T20",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T21",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m10",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v54",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v55",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v62",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v86",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v96",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v98",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v100",
                "type": "uint256"
              }
            ],
            "internalType": "struct T16",
            "name": "svs",
            "type": "tuple"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T22",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m11",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v54",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v55",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v57",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v58",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "svs",
            "type": "tuple"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T8",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m2",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v54",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v55",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v57",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v58",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "svs",
            "type": "tuple"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T8",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m3",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v54",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v55",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v62",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v218",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v220",
                "type": "uint256"
              }
            ],
            "internalType": "struct T9",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v86",
                "type": "uint256"
              }
            ],
            "internalType": "struct T13",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T14",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m6",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v54",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v55",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v62",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v218",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v220",
                "type": "uint256"
              }
            ],
            "internalType": "struct T9",
            "name": "svs",
            "type": "tuple"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T15",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m7",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v54",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v55",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v62",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v86",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v88",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v90",
                "type": "uint256"
              }
            ],
            "internalType": "struct T12",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v96",
                "type": "uint256"
              }
            ],
            "internalType": "struct T17",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T18",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m8",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v54",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v55",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v62",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v86",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v88",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v90",
                "type": "uint256"
              }
            ],
            "internalType": "struct T12",
            "name": "svs",
            "type": "tuple"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T19",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m9",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x608060408190527f49ff028a829527a47ec6839c7147b484eccf5a2a94853eddac09cef44d9d4e9e90600090a160408051602080820183524382528251808201845260008082529251815283518083018490529051818501528351808203850181526060909101909352825192019190912090556113c6806100826000396000f3fe60806040526004361061008a5760003560e01c80639532ef01116100595780639532ef01146100e4578063b32a639f146100f7578063b861cb101461010a578063dc0f106b1461011d578063e4f83a8f1461013057610091565b8063108acff5146100965780634188e022146100ab5780636cc4a844146100be5780636dacfd6f146100d157610091565b3661009157005b600080fd5b6100a96100a4366004611054565b610143565b005b6100a96100b9366004611004565b610261565b6100a96100cc366004610fe9565b610370565b6100a96100df366004611004565b610560565b6100a96100f2366004611043565b610754565b6100a9610105366004611031565b61088f565b6100a9610118366004610fe9565b6109a4565b6100a961012b36600461101f565b610ab9565b6100a961013e366004611054565b610c6b565b6040516101579060019083906020016112e4565b6040516020818303038152906040528051906020012060001c6000541461017d57600080fd5b60008055610190600a606083013561130c565b431015801561019d575060015b6101a657600080fd5b34156101b157600080fd5b336101bf6020830183610fc8565b6001600160a01b0316146101d257600080fd5b6101df6020820182610fc8565b6001600160a01b03166108fc6101fa6000604085013561130c565b6040518115909202916000818181858888f19350505050158015610222573d6000803e3d6000fd5b507f613b30050768160fb8fb1fedba26a4639c7df8d370861f403061c2d46f9802e581604051610252919061128b565b60405180910390a16000805533ff5b6040516102759060069083906020016112bb565b6040516020818303038152906040528051906020012060001c6000541461029b57600080fd5b600080556102ae600a60a083013561130c565b43101580156102bb575060015b6102c457600080fd5b34156102cf57600080fd5b336102dd6020830183610fc8565b6001600160a01b0316146102f057600080fd5b6102fd6020820182610fc8565b6001600160a01b03166108fc6103186000608085013561130c565b6040518115909202916000818181858888f19350505050158015610340573d6000803e3d6000fd5b507fe30737f1ebfc963c65c5913e78ab44df878e431e05d360e374cda18b462b262b8160405161025291906111ff565b6040516103849060049083906020016112f8565b6040516020818303038152906040528051906020012060001c600054146103aa57600080fd5b600080805560408051602081019091529081526103cc600a606084013561130c565b43106103d757600080fd5b6103e66000608084013561130c565b815234156103f357600080fd5b336104016020840184610fc8565b6001600160a01b03161461041457600080fd5b7f16424d059cabc243859f670786693b7e657c3f04cbc39631fa14608999bfaef9826040516104439190611197565b60405180910390a16104966040518060c0016040528060006001600160a01b031681526020016000815260200160006001600160a01b031681526020016000815260200160008152602001600081525090565b6104a36020840184610fc8565b6001600160a01b03168152602080840135908201526104c86060840160408501610fc8565b6001600160a01b03908116604083810191825260a08681013560608087019182528751608080890191825243858a01908152865160066020808301919091528b518b1698820198909852968a0151938701939093529551909616948401949094525190820152915160c08301525160e0820152610100015b60408051601f198184030181529190528051602090910120600055505050565b6040516105749060069083906020016112bb565b6040516020818303038152906040528051906020012060001c6000541461059a57600080fd5b600080805560408051602081019091529081526105bc600a60a084013561130c565b43106105c757600080fd5b6105d66000608084013561130c565b815234156105e357600080fd5b336105f46060840160408501610fc8565b6001600160a01b03161461060757600080fd5b7fa03e2b199cbd4c163bca89aa8e3581bcf82ee511c6ed7b600ee5e8a3e78842b48260405161063691906111e3565b60405180910390a16106906040518060e0016040528060006001600160a01b031681526020016000815260200160006001600160a01b03168152602001600081526020016000815260200160008152602001600081525090565b61069d6020840184610fc8565b6001600160a01b03168152602080840135908201526106c26060840160408501610fc8565b6001600160a01b03908116604083810191825260608681013581860190815260c0808901356080808901918252895160a0808b0191825243858c01908152885160086020808301919091528d518d169a82019a909a52988c0151978901979097529751909816908601529151948401949094525192820192909252915160e08301525161010082015261012001610540565b60408051600060208201528235918101919091526060016040516020818303038152906040528051906020012060001c6000541461079157600080fd5b600080805560408051602081019091529081526107b36020830135600061130c565b8152346020830135146107c557600080fd5b6040805183358152602080850135908201527ff2c62eba998811305a23599b2e6d212befbd7ded3a73f4c08bfb9aefe08dc166910160405180910390a1610836604051806080016040528060006001600160a01b031681526020016000815260200160008152602001600081525090565b33815260208381013581830190815283516040808501918252436060808701918252825160019681019690965286516001600160a01b0316928601929092529251908401525160808301525160a082015260c001610540565b6040516108a39060089083906020016112cf565b6040516020818303038152906040528051906020012060001c600054146108c957600080fd5b600080556108dc600a60c083013561130c565b43101580156108e9575060015b6108f257600080fd5b34156108fd57600080fd5b3361090e6060830160408401610fc8565b6001600160a01b03161461092157600080fd5b6109316060820160408301610fc8565b6001600160a01b03166108fc61094c600060a085013561130c565b6040518115909202916000818181858888f19350505050158015610974573d6000803e3d6000fd5b507fe7cd06eed96e73ebf1eef9fa7a8d285d298aa9f119f81a14f729b421ad209bfa81604051610252919061125a565b6040516109b89060049083906020016112f8565b6040516020818303038152906040528051906020012060001c600054146109de57600080fd5b600080556109f1600a606083013561130c565b43101580156109fe575060015b610a0757600080fd5b3415610a1257600080fd5b33610a236060830160408401610fc8565b6001600160a01b031614610a3657600080fd5b610a466060820160408301610fc8565b6001600160a01b03166108fc610a616000608085013561130c565b6040518115909202916000818181858888f19350505050158015610a89573d6000803e3d6000fd5b507f5005c4e6004c19e98ada43b5f5d05731c1a82aa5d9215871f88ceb584e0f83e08160405161025291906111b3565b604051610acd9060089083906020016112cf565b6040516020818303038152906040528051906020012060001c60005414610af357600080fd5b60008055610b06600a60c083013561130c565b4310610b1157600080fd5b3415610b1c57600080fd5b33610b2a6020830183610fc8565b6001600160a01b031614610b3d57600080fd5b6040805160e083013560208201526101008301359181019190915260600160408051601f198184030181529190528051602090910120606082013514610b8257600080fd5b7f352ea7fc48371f0bd43d7d1ad042d3e6a673947e2deccddfd368812813abc47281604051610bb1919061122f565b60405180910390a1610bc1610f32565b610bce6020830183610fc8565b81516001600160a01b0390911690528051602080840135910152610bf86060830160408401610fc8565b81516001600160a01b039091166040909101526003610c1c60808401356004611343565b610c2b9061010085013561130c565b610c35919061135a565b6020808301805192909252905143910152610c55600060a084013561130c565b602082015160400152610c6781610d63565b5050565b604051610c7f9060019083906020016112e4565b6040516020818303038152906040528051906020012060001c60005414610ca557600080fd5b60008055610cb8600a606083013561130c565b4310610cc357600080fd5b34602082013514610cd357600080fd5b7fe2fcb5361608dd42d825c4e917fd4fca89057bb8eb0b7e34b8c2813a114cc15281604051610d02919061128b565b60405180910390a1610d12610f32565b610d1f6020830183610fc8565b81516001600160a01b03909116905280516020808401359181018290528251336040918201528184018051600190525143920191909152610c55919084013561130c565b60208101515160011415610e5a57610db56040518060a0016040528060006001600160a01b031681526020016000815260200160006001600160a01b0316815260200160008152602001600081525090565b8151516001600160a01b0390811682528251602090810151818401908152845160409081015184168186019081528387018051850151606080890191825291518401516080808a0191825285516004988101989098528951891695880195909552945191860191909152905190941690830152915160a0820152905160c082015260e00160408051601f19818403018152919052805160209091012060005550610ec2565b6040805160c0810182526000818301818152606083018281526080840183815260a085018481528386526020808701959095528751516001600160a01b03908116909452875185015190925286519095015190911690935283015151909152610c6781610ec5565b50565b805160600151600214610edd57805160400151610ee1565b8051515b6001600160a01b03166108fc8260000151602001516002610f029190611324565b6040518115909202916000818181858888f19350505050158015610f2a573d6000803e3d6000fd5b506000805533ff5b6040805160a08101825260009181018281526060820183905260808201929092529081908152602001610f7f60405180606001604052806000815260200160008152602001600081525090565b905290565b80356001600160a01b0381168114610f9b57600080fd5b919050565b600060c08284031215610fb1578081fd5b50919050565b600060e08284031215610fb1578081fd5b600060208284031215610fd9578081fd5b610fe282610f84565b9392505050565b600060c08284031215610ffa578081fd5b610fe28383610fa0565b600060e08284031215611015578081fd5b610fe28383610fb7565b60006101208284031215610fb1578081fd5b60006101008284031215610fb1578081fd5b600060408284031215610fb1578081fd5b600060a08284031215610fb1578081fd5b6001600160a01b038061107783610f84565b168352602082013560208401528061109160408401610f84565b16604084015250606081013560608301526080810135608083015260a081013560a08301525050565b6001600160a01b03806110cc83610f84565b16835260208201356020840152806110e660408401610f84565b16604084015250606081013560608301526080810135608083015260a081013560a083015260c081013560c08301525050565b6001600160a01b0361112a82610f84565b1682526020810135602083015260408101356040830152606081013560608301525050565b6001600160a01b038061116183610f84565b168352602082013560208401528061117b60408401610f84565b1660408401525060608181013590830152608090810135910152565b60c081016111a5828461114f565b60a092830135919092015290565b60c081016111c1828461114f565b60a08301358015158082146111d557600080fd5b8060a0850152505092915050565b60e081016111f18284611065565b60c092830135919092015290565b60e0810161120d8284611065565b60c083013580151580821461122157600080fd5b8060c0850152505092915050565b610120810161123e82846110ba565b60e083013560e083015261010080840135818401525092915050565b610100810161126982846110ba565b60e083013580151580821461127d57600080fd5b8060e0850152505092915050565b60a081016112998284611119565b60808301358015158082146112ad57600080fd5b806080850152505092915050565b82815260e08101610fe26020830184611065565b8281526101008101610fe260208301846110ba565b82815260a08101610fe26020830184611119565b82815260c08101610fe2602083018461114f565b6000821982111561131f5761131f61137a565b500190565b600081600019048311821515161561133e5761133e61137a565b500290565b6000828210156113555761135561137a565b500390565b60008261137557634e487b7160e01b81526012600452602481fd5b500690565b634e487b7160e01b600052601160045260246000fdfea2646970667358221220e1822fd02b0226db968573ab19c55af141e22acf79d04e586e27dabe8cda8f3a64736f6c63430008020033`,
  deployMode: `DM_constructor`
  };

export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };


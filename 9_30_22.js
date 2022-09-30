f=i=>[1,2,3,4].map(x=>[...i].reduce((i,s)=>s.charCodeAt()+i,0)*x%256)
// char limit was 77
// transformed web address to ip number following ruleset
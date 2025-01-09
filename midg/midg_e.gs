*initialize and open file
'reinit'
'open TCCIPtemp.ctl'

'set lon 120.81 120.81'
'set lat 23.51 23.51'

*cal. temperature cycle
'set t 1 12'
'define tcycle=ave(temp,t+0,t=732,12)'
'modify tcycle seasonal'

*cal. annomaly
'set t 1 732'
'define notcycle=temp-tcycle'

*cal. tloop
'set t 19 714'
'define ttlp=tloop(ave(notcycle,t-18,t+18))'

'set t 1 732'

*graph setting
'set vpage 0 11 4.25 8.5'
'set parea 1 10 0.5 3.75'
'set grads off'
'set xlopts 1 3 0.15'
'set ylopts 1 3 0.15'
'set vrange -5 5'
'set ylint 1'

*figure 1
*annomaly
'set cthick 5'
'set ccolor 11'
'set cmark 0'
'd notcycle'
*tloop
'set cthick 10'
'set ccolor 12'
'set cmark 0'
'd ttlp'
*title and labels
'draw title Alishan Temperature Anomaly (blue) & Moving Average (yellow)'
'draw ylab [degree C]'

*figure 2
'set t 1 12'
'set vpage 0 11 0 4.25'
'set parea 1 10 0.5 3.75'
'set grads off'
'set xlopts 1 3 0.15'
'set ylopts 1 3 0.15'
'set tlsupp year'
'set cthick 12'
'set ccolor 14'
'set cmark 0'
'set vrange 8 17'
*temp.cycle
'd tcycle'
*title and labels
'draw title Alisan Annual Temperature Cycle'
'draw ylab [degree C]'

*save and close
'printim midg_e.png x1100 y850 white'
'close 1'

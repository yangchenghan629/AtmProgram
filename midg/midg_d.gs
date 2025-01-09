*initialize
'reinit'
'open midg_c.ctl'

*graph setting
'set mpdset hires'
'set parea 1 10 1 7.5'
'set grads off'
'set xlopts 1 3 0.15'
'set ylopts 1 3 0.15'
'set xlint 0.5'
'set ylint 0.5'
'set clevs 1 2 3 4 5 6'
'set lon 120 122'
'set lat 21.9 25.3'

*draw filled grid, title and color bar
'set gxout grfill'
'd d'
'cbar'
'draw title MAY2014 Days of Rainfall >=50 mm/day'

*save and close
'printim midg_d.png x1100 y850 white'
'close 1'


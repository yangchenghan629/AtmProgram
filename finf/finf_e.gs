*initialize
'reinit'

*open file
'open finf_d.ctl'

*basic graph setting
'set parea 1 10 1 7.5'
'set grads off'
'set mpdset hires'
'set xlopts 1 3 0.15'
'set ylopts 1 3 0.15'
'set xlint 0.5'
'set ylint 0.5'

*graph setting
'set clevs 500 1000 1500 2000 2500 3000 3500'
'set lon 120 122'
'set lat 21.9 25.3'

*draw total rainfall with filled grid
'set gxout grfill'
'd rain'
*colorbar
'cbar'

*title
'draw title 2009 Total Rainfall [mm]'

*save image
'printim finf_e.png x1100 y850 white'

*close file
'close 1'

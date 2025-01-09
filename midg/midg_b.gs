*initialize and open file
'reinit'
'sdfopen PREC_5km.nc'

'set lon 120 122'
'set lat 21.9 25.3'
'set t 19845'
'define s=sum(prec,t=19845,t=19875)'

*graph setting
'set mpdset hires'
'set parea 1 10 1 7.5'
'set grads off'
'set xlopts 1 3 0.15'
'set ylopts 1 3 0.15'
'set clevs 50 100 150 200 300 400 500 600 700 800 900 1000'
'set xlint 0.5'
'set ylint 0.5'
*draw filled grid,color bar and title
'set gxout grfill'
'd s'
'cbar'
'draw title MAY2014 Total Rainfall [mm]'

*save and close
'printim midg_b.png x1100 y850 white'
'close 1'

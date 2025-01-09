*initialize and open file
'reinit'
'open sounding_20201123.ctl'

*figure 1
*graph setting and draw
'set vpage 0 5.5 4.25 8.5'
'set parea 1 10 1 7.5'
'set grads off'
'set xlopts 1 3 0.15'
'set ylopts 1 3 0.15'
'set lev 1025 300'
'set gxout contour'
'set vrange 200 300'
'set ylint 50'
*draw temperature
'set cthick 8'
'set ccolor 2'
'set cmark 0'
'd Tx+273.15'
*draw dew point
'set ccolor 4'
'set cthick 5'
'set cmark 0'
'd Td+273.15'
*title and labels
'draw title 23NOV2020 Temperature (red) & Dew Point (blue)'
'draw ylab Pressure [hPa]'
'draw xlab [K]'

*figure 2
'set vpage 5.5 11 4.25 8.5'
'set parea 1 10 1 7.5'
'set grads off'
'set xlopts 1 3 0.15'
'set ylopts 1 3 0.15'
'set lev 1025 300'
'set ylint 50'
'set vrange 0 100'
'set cthick 4'
'set ccolor 9'
'set cmark 0'
'd RH'
'draw title 23NOV2020 Relative Humidity'
'draw xlab [%]'
'draw ylab Pressure [hPa]'

*figure 3
*graph setting
'set vpage 0 5.5 0 4.25'
'set parea 1 10 1 7.5'
'set grads off'
'set xlopts 1 3 0.15'
'set ylopts 1 3 0.15'
'set ylint 50'
'set lev 1025 300'
'set vrange 0 18'
'set cthick 5'
'set ccolor 3'
'set cmark 0'

*draw. write title and labels
'd mag(U,V)'
'draw title 23NOV2020 Wind Speed'
'draw xlab [kt]'
'draw ylab Pressure [hPa]'

*figure 4
*graph setting
'set vpage 5.5 11 0 4.25'
'set parea 1 10 1 7.5'
'set grads off'
'set xlopts 1 3 0.15'
'set ylopts 1 3 0.15'
'set frame off'
'set xlab off'

*draw .write title and labels
'set lev 1025 300'
'set ylint 50'
'set t 0 2'
'set gxout vector'
'd U;V'
'draw title 23NOV2020 Wind Vector'
'draw ylab Pressure [hPa]'

*save and close
'printim midg_a.png x1100 y850 white'
'close 1'

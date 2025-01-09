*initialize
'reinit'
'sdfopen PREC_5km.nc'

*calculate
'set lon 120 122'
'set lat 21.9 25.3'
'set z 1'
'set t 19845 19875'
'define more50=const(maskout(prec,prec-50),1)'
'define prec50=const(more50,0,-u)'
'define s=sum(prec50,t=19845,t=19875)'

*write out to midg_c.dat
'set gxout fwrite'
'set fwrite midg_c.dat'
'define out=const(maskout(s,s-1),-9999,-u)'
'd out'
'disable fwrite'

*close
'close 1'

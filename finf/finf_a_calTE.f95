function calTE(albedo)
implicit none

!declare
real,intent(in)::albedo !array for albedo (input)
real::calTE !result of effective temperature
real,parameter::s=1366.,sigma=5.67e-8 !s:solor constant [W/m2], 
                                      !sigma:stefan-boltzmann constant [W/m2K4]

!calculate effective radiating temperature
calTE=(s*(1-albedo)/(4*sigma))**(1./4)

!return result
return
end function


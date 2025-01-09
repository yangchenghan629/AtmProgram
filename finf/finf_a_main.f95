program finf_a_main
implicit none

!declare
integer,parameter::imax=7         !amount of data
real,dimension(imax)::albedo,temp !array for albedo and effective temperature
integer::i 
real::calTE !function

!open files
open(1,file='Albedo.txt')
open(2,file='finf_a.txt')

!read data
!calculate Te with function 'calTE' if albedo is valid
!otherwise print 'invalid albedo'
!Finally,print result to file2('finf_b.txt') with IO format
do i=1,imax
  read(1,*)albedo(i)
  if(albedo(i)>=0 .and. albedo(i)<=1)then !valid albedo
    temp(i)=calTE(albedo(i))
    write(2,20)'Albedo=',albedo(i),': Effective Radiating Temperature = ',temp(i),' K'
    20 format(A,F5.2,A,F5.1,A)
  else !invalid albedo
    write(2,21)'Albedo=',albedo(i),': Invalid Planetary Albedo'
    21 format(A,F5.2,A)
  end if

end do

!close files
close(1)
close(2)

end program finf_a_main


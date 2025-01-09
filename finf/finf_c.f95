program finf_c
implicit none

!declare
integer,parameter::xmax=41,ymax=69 !x:longitude,y:latitude
integer::x,y,lrec !lrec:length of record
real,dimension(xmax,ymax)::rain !array for total rainfall

!query length of record
inquire(iolength=lrec)rain

!open files
open(1,file='TCCIPrain2009.txt')
open(2,file='finf_c.dat',access='direct',recl=lrec)

!read data in file1 ('TCCIPrain2009.txt')
do y=1,ymax
  read(1,*)(rain(x,y),x=1,xmax)
end do

!write out data as binary file
write(2,rec=1)((rain(x,y),x=1,xmax),y=1,ymax)

!close files
close(1)
close(2)

end program finf_c

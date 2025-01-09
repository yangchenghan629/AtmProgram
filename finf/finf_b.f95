program finf_b
implicit none

!declare
real,dimension(3,14)::h,t,td,rh !array for Height,Temperature,Dew point Temperature and Reletive Humidity
integer::i,j !i:layer,j:profile number
integer,dimension(3)::maxh,minh,moistnum,invnum !array for height of max rh/min rh,amount of moist layer and amount of invalid rh

!open files
open(1,file='Profile.txt')
open(2,file='finf_b.txt')

!header
read(1,*)

!read height,temperature and dew point temperature at every layer in different profiles
do i=1,14
  read(1,*) h(1,i),t(1,i),td(1,i),& !profile 1
            h(2,i),t(2,i),td(2,i),& !profile 2
            h(3,i),t(3,i),td(3,i)   !profile 3
end do

!calculate rh with input h,t,td,and return rh,maxh,minh,moistnum,invnum
call RelHum(h,t,td,rh,maxh,minh,moistnum,invnum)

!write result to file2('finf_b.txt) with IO format
write(2,20)'Prof1','Prof2','Prof3'
20 format(28x,3(A6))
write(2,21)'# of Moist Layer:',moistnum(1),moistnum(2),moistnum(3)
21 format(A28,3(5x,I1))
write(2,22)'Height of Max. RH Layer (m):',maxh(1),maxh(2),maxh(3)
22 format(A28,3(I6))
write(2,23)'Height of Min. RH Layer (m):',minh(1),minh(2),minh(3)
23 format(A28,3(I6))
write(2,24)'# of Invalid Layer:',invnum(1),invnum(2),invnum(3)
24 format(A28,3(5x,I1))

!close files
close(1)
close(2)

end program finf_b

!------------------------------------------------
!subroutine below

subroutine RelHum(h,t,td,rh,maxh,minh,moistnum,invnum)
implicit none

!declare
real,dimension(3,14),intent(in)::h,t,td !array for height,temp. and dewpoint temp. (input)
real,dimension(3,14),intent(out)::rh    !array for relative humidity (output)
integer,dimension(3),intent(out)::maxh,minh,moistnum,invnum !array for height of max/min rh,amount of moist layer and invalid rh
integer,dimension(1)::maxhid,minhid !location of max/min rh
real,parameter::a=17.625,b=243.04   !constant A and B
integer::layer,i
logical::condiction !condiction for valid temp. and dewpoint temp. range

do i=1,3
  do layer=1,14
    !valid temp. and dewpoint temp. range
    condiction=(t(i,layer)>=-80. .and. t(i,layer)<=50) .and.&
               (td(i,layer)>=-80. .and. td(i,layer)<=50)
    !if it is a valid condiction , calculate rh
    if (condiction) then
      rh(i,layer)=exp((a*td(i,layer))/(b+td(i,layer)))/&
                  exp((a*t(i,layer))/(b+t(i,layer)))*100
    !if it isnt a valid condiction , give invalid value (let be -1)
    else
      rh(i,layer)=-1.
    end if
  end do
  !height of max/min rh,amount of moist layer and invalid value
  maxhid=maxloc(rh(i,:),rh(i,:)>=0.)
  maxh(i)=h(i,maxhid(1))             !height of max rh
  minhid=minloc(rh(i,:),rh(i,:)>=0.)
  minh(i)=h(i,minhid(1))             !height of min rh
  moistnum(i)=count(rh(i,:)>=80.)    !amount of moist layer
  invnum(i)=count(rh(i,:)==-1.)      !amount of anvalid value
end do

!return result
return
end subroutine RelHum






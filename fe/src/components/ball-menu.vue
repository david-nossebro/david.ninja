<template>
    <div>
    <nav class="menu">
      <input type="checkbox" href="#" class="menu-open" name="menu-open" id="menu-open"/>
      <label class="menu-open-button" for="menu-open">
        <span class="hamburger hamburger-1"></span>
        <span class="hamburger hamburger-2"></span>
        <span class="hamburger hamburger-3"></span>
      </label>
      
      <slot>
      </slot>
      
    </nav>

    <!-- filters -->
    <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
        <defs>
          <filter id="shadowed-goo">
              
              <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="10" />
              <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="goo" />
              <feGaussianBlur in="goo" stdDeviation="3" result="shadow" />
              <feColorMatrix in="shadow" mode="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 1 -0.2" result="shadow" />
              <feOffset in="shadow" dx="1" dy="1" result="shadow" />
              <feComposite in2="shadow" in="goo" result="goo" />
              <feComposite in2="goo" in="SourceGraphic" result="mix" />
          </filter>
          <filter id="goo">
              <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="10" />
              <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="goo" />
              <feComposite in2="goo" in="SourceGraphic" result="mix" />
          </filter>
        </defs>
    </svg>
    </div>
</template>

<script>
export default {
  props: {

  }
}
</script>

<style scoped lang="scss">
nav.menu {
  left: 8%;
  height: 100%;
}

#content {
  float: left;
}

//vars
$fg:#00bcd4;

//config
$menu-items:5;

%goo{
  filter:url('#shadowed-goo');
}
%ball{
  background:$fg;
  border-radius:100%;
  width:80px;
  height:80px;
  margin-left:-40px;
  position:absolute;
  top:20px;
  color:white;
  text-align:center;
  line-height:80px;
  transform:translate3d(0,0,0);
  transition:transform ease-out 100ms;
}
.menu-open{
  display:none;
}
.menu-item{
  @extend %ball;
}
.hamburger{
  $width:25px;
  $height:3px;
  width:$width;
  height:$height;
  background:white;
  display:block;
  position:absolute;
  top:50%;
  left:50%;
  margin-left:-$width/2;
  margin-top:-$height/2;
  transition:transform 100ms;
}
$hamburger-spacing:8px;
.hamburger-1{
  transform:translate3d(0,-$hamburger-spacing,0);
}
.hamburger-2{
  transform:translate3d(0,0,0);
}
.hamburger-3{
  transform:translate3d(0,$hamburger-spacing,0);
}
.menu-open:checked+.menu-open-button{
  .hamburger-1{
    transform:translate3d(0,0,0) rotate(45deg); 
  }
  .hamburger-2{
    transform:translate3d(0,0,0) scale(0.1,1);
  }
  .hamburger-3{
    transform:translate3d(0,0,0) rotate(-45deg); 
  }
}
.menu{
  @extend %goo;
  $width:650px;
  $height:150px;
  position:absolute;
  left:50%;
  margin-left:-80px;
  padding-top:20px;
  padding-left:80px;
  width:$width;
  height:$height;
  box-sizing:border-box;
  font-size:30px;
  text-align:left;
}


.menu-item{
  &:hover{
    background:white;
    color:$fg;
  }
  @for $i from 1 through $menu-items{
    &:nth-child(#{$i+2}){
      transition-duration:100ms;
    }
  }
}

.menu-open-button{
  @extend %ball;
  z-index:2;
  transition-timing-function:cubic-bezier(0.175, 0.885, 0.320, 1.275);
  transition-duration:150ms;
  transform:scale(1.1,1.1) translate3d(0,0,0);
  cursor:pointer;
}
.menu-open-button:hover{
  transform:scale(1.2,1.2) translate3d(0,0,0);
}
.menu-open:checked+.menu-open-button{
  transition-timing-function:linear;
  transition-duration:100ms;
  transform:scale(0.8,0.8) translate3d(0,0,0);
}

.menu-open:checked~.menu-item{
  transition-timing-function:cubic-bezier(0.165, 0.840, 0.440, 1.000);
  @for $i from 1 through $menu-items{

    &:nth-child(#{$i+2}){
      transition-duration:30ms+(60ms*$i);
      transform:translate3d(0,80px*$i,0);
    }
  }
}
</style>
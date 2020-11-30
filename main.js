canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

car1_image="car1.png";
car1_width =120;
car1_height =70;
car1_x =10;
car1_y =10;

car2_image="download.png";
car2_width =120;
car2_height =70;
car2_x =10;
car2_y =100;

bg_image="racing.jpg";

    function add(){
        bg_image_tag =new Image();
        bg_image_tag.onload = uploadBackground();
        bg_image_tag.src =bg_image;

        car1_image_tag =new Image();
        car1_image_tag.onload = uploadCar1();
        car1_image_tag.src =car1_image;

        car2_image_tag =new Image();
        car2_image_tag.onload = uploadCar2();
        car2_image_tag.src =car2_image;
    }
    function uploadBackground(){
        ctx.drawImage(bg_image_tag,0,0,canvas.width,canvas.height);
    }
    function uploadCar1(){
        ctx.drawImage(car1_image_tag,car1_x,car1_y,car1_width,car1_height);
    }
    function uploadCar2(){
        ctx.drawImage(car2_image_tag,car2_x,car2_y,car2_width,car2_height);
    }
    window.addEventListener("keydown",my_keydown);

    function my_keydown(e){
        var keyPressed=e.keyCode;
        if(keyPressed=='37'){
            car1_left();
        }
        if(keyPressed=='38'){
            car1_up();
        }
        if(keyPressed=='39'){
            car1_right();
        }
        if(keyPressed=='40'){
            car1_down();
        }
        if(keyPressed=='87'){
            car2_up();
        }
        if(keyPressed=='65'){
            car2_left();
        }
        if(keyPressed=='83'){
            car2_down();
        }
        if(keyPressed=='68'){
            car2_right();
        }
    }

let pantalla = document.querySelector("canvas");
let pincel = pantalla.getContext("2d");

pincel.fillStyle = "purple";
pincel.fillRect(0, 0, 600, 1100);       //fondo

pincel.fillStyle = "darkgreen";
pincel.fillRect(121, 52, 350, 344.5);   //cabeza

pincel.fillStyle = "darkgreen";
pincel.fillRect(157, 401, 285, 398);    //cuerpo

pincel.fillStyle = "darkgreen";
pincel.fillRect(42.5, 798, 515, 160);    //pies

pincel.fillStyle = "black";
pincel.fillRect(167, 99.5, 90, 90);      //ojo izq.
pincel.fillRect(330.5, 99.5, 90, 90);    //ojo der.
pincel.fillRect(330.5, 99.5, 90, 90);    //ojo der.
pincel.fillRect(259.5, 192.5, 70, 100);  //Nariz.
pincel.fillRect(220, 242, 40, 95);   //boca lado izq.
pincel.fillRect(329, 242, 40, 95);   //boca lado der.
pincel.fillRect(42.5, 898, 40, 60);   //dedo izq 1
pincel.fillRect(125, 898, 40, 60);    //dedo izq 2
pincel.fillRect(435, 898, 40, 60);    //dedo der 2
pincel.fillRect(516, 898, 40, 60);    //dedo der 1
pincel.fillRect(192, 831, 9, 135);    //linea pie izq
pincel.fillRect(399, 831, 9, 135);    //linea pie der

pincel.fillStyle = "black";
pincel.fillRect(113, 47, 8, 355);     //borde cabeza izq
pincel.fillRect(470, 47, 8, 355);     //borde cabeza der
pincel.fillRect(114, 47, 362, 8);     //borde cabeza top
pincel.fillRect(114, 395, 362, 8);    //borde cabeza bottom
pincel.fillRect(149, 401, 8, 397.5);  //borde cuerpo izq
pincel.fillRect(442, 401, 8, 397.5);  //borde cuerpo der
pincel.fillRect(35, 793, 122, 8);    //borde pie encima izq
pincel.fillRect(443, 793, 122, 8);    //borde pie encima der
pincel.fillRect(50, 949, 370, 8);    //borde  pie bottom
pincel.fillRect(35, 958, 165, 10);    //borde pie bottom izq
pincel.fillRect(400, 958, 165, 10);    //borde pie bottom der
pincel.fillRect(35, 800, 9, 160);    // borde linea pie izq
pincel.fillRect(556, 800, 9, 160);    // borde linea pie der

pincel.fillStyle = "grey"
pincel.fillRect(84, 898, 40, 60);      //dedo gris izq 1
pincel.fillRect(165, 898, 27, 60);     //dedo gris izq 2
pincel.fillRect(475, 898, 41, 60);     //dedo gris der 2
pincel.fillRect(409.5, 898, 25, 60);   //dedo gris der 1

# Sobre que trata el e-commerce

Elegí el tema de la venta de productos para el cuidado del cabello y barba ya que está relacionado con el trabajo de mi padre, además de que este venía siendo el tema central de mi proyecto desde los anteriores cursos, donde traté desde un inicio crear una e-commerce para una peluquería.

Para React me centré en la venta de productos exclusivamente, ya que este proyecto debía orientarse a la venta y ser un e-commerce. Por lo que descarté la idea de colocar agendas de citas, por ejemplo, como me había propuesto antes. Cabe aclarar que con los conocimientos impartidos no sería difícil implementar esto último.

# Elecciones

Elegí Vite como principal herramienta, ya que el profesor mencionó que era más comúnmente usada, por lo que quise familiarizarme con esta herramienta de complicación, su instalación, uso general y demás.

Usé Firebase como se nos indicó para guardar los datos tales como los productos (items) o las ordenes. Los items utilizan un IP dinámico para poder familiarizarme con esto. 

Utilicé como extra SweetAlert2 para colocar los mensajes y no depender de alerts básicos, instalando npm este corre también SweetAlert. 

Para la parte estética utilicé Bootstrap, aunque modifiqué con mi propio archivo .css ciertas cosas y generé otras.

# Aclaraciones

/cart nos lleva a al detalle del carrito y a la vez a finalizar la compra.

Generé el componente CartItem para colocar las tarjetas parecidas a las que utilicé en Item y que la estética del sito no se rompiera.

El icono del Carro se hace seleccionable solo cuando hay compras, de esta manera se evita que se ingrese a la sección /cart si esta se encuentra vacía. 

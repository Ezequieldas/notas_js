/*

 * ¿Que es EventLoop?
El bucle de eventos es un patrón de diseño que espera y distribuye eventos o mensajes en un programa

Memory Heap
Los objetos son asignados a un montículo (espacio grande en memoria no organizado)

Call Stack (pila)
Apila de forma organizada las instrucciones de nuestro progama

Task Queue
Cola de tareas, se maneja la concurrencia, se agregan las tareas que ya están listas para pasar al stack(pila)
El stack debe estar vacío.

MicroTask Queue
Las promesas tienen otra forma de ejecutarse y una prioridad superior

Web APIs

Entonces el EventLoop tiene la tarea asignada para mover del Task Queue al Stack, solo si el Stack está vacío

 */
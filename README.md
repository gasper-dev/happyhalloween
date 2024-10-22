# Happy Halloween

## Descripción

Happy Halloween es una aplicación que permite enviar felicitaciones personalizadas de Halloween a amigos. Los usuarios pueden seleccionar una imagen, transformarla utilizando efectos de Halloween y añadir un mensaje antes de enviarla.

## Funcionalidades

- Selección de imágenes desde el dispositivo local.
- Transformación de imágenes usando Cloudinary.
- Personalización de mensajes de felicitación.
- Vista previa de la imagen transformada.
- Opción para compartir en redes sociales.

## Image Example

![HappyHalloween](/happydemo.png)

## Tecnologías Utilizadas

- **Frontend**: Astro
- **Almacenamiento de Imágenes**: Cloudinary

## .env configuración

- PUBLIC_CLOUDINARY_CLOUD_NAME=""

- PUBLIC_CLOUDINARY_API_KEY=""

- CLOUDINARY_API_SECRET=""

Todos los comandos se ejecutan desde la raíz del proyecto, desde una terminal:

| comando         | Acción                                      |
| :-------------- | :------------------------------------------ |
| `npm install`   | Installs dependencies                       |
| `npm run dev`   | Starts local dev server at `localhost:4321` |
| `npm run build` | Build your production site to `./dist/`     |

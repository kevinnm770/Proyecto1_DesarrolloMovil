# DevKev — Portafolio Personal (Proyecto 1)

Portafolio personal desarrollado con **React Native** y **Expo Router**, para la clase de Programación para Dispositivos Móviles. Muestra información personal, proyectos realizados y datos de contacto, navegando entre pantallas mediante un Bottom Tab Navigator, un Stack Navigator y un Drawer Navigator.

## Tecnologías utilizadas

- [Expo](https://docs.expo.dev/versions/v54.0.0/) `~54.0.35` (con [Expo Router](https://docs.expo.dev/router/introduction/) `~6.0.24` para el enrutamiento basado en archivos)
- [React Native](https://reactnative.dev/) `0.81.5` / [React](https://react.dev/) `19.1.0`
- [React Navigation](https://reactnavigation.org/) — `@react-navigation/bottom-tabs`, `@react-navigation/drawer`, `@react-navigation/native`
- [expo-linear-gradient](https://docs.expo.dev/versions/v54.0.0/sdk/linear-gradient/) — degradados de las tarjetas
- [expo-image](https://docs.expo.dev/versions/v54.0.0/sdk/image/) — foto de perfil
- [lucide-react-native](https://lucide.dev/) — set de íconos usado en toda la app
- TypeScript

## Estructura de navegación

La app usa **file-based routing** de Expo Router dentro de `app/`:

```
app/
├── _layout.tsx                    Stack raíz (sin header)
└── (tabs)/                        Bottom Tab Navigator
    ├── _layout.tsx                 Configuración de las 3 pestañas + tab activo con degradado
    ├── index.tsx                   Pantalla "Home" (perfil)
    ├── contact.tsx                 Pantalla "Contact"
    └── projects/                   Stack Navigator (proyectos)
        ├── _layout.tsx              Stack sin header
        ├── index.tsx                 Lista de proyectos (FlatList)
        └── [id]/                     Ruta dinámica por proyecto
            ├── _layout.tsx            Drawer Navigator + datos compartidos (PROJECTS)
            └── index.tsx              Detalle del proyecto
```

- **Bottom Tab Navigator** (`app/(tabs)/_layout.tsx`): 3 pestañas — Home, Projects, Contact — con íconos de lucide (`User`, `Folder`, `Send`). La pestaña activa se muestra dentro de un círculo con degradado azul, más grande que la barra, sobresaliendo de esta.
- **Stack Navigator** (`app/(tabs)/projects/_layout.tsx`): permite pasar de la lista de proyectos al detalle de un proyecto específico (`/projects/[id]`).
- **Drawer Navigator** (`app/(tabs)/projects/[id]/_layout.tsx`): dentro del detalle de un proyecto, un menú de hamburguesa permite saltar a "Projects" (la lista) o a cualquier otro proyecto sin salir de la vista de detalle.

## Pantallas

### Home (`app/(tabs)/index.tsx`)
Foto de perfil (`assets/images/profile.png`), nombre, rol y estadísticas (Skills / Years old / Projects), sección **About me**, sección **Skills** (grid de tecnologías) y sección **Grades** (estudios realizados).

### Projects (`app/(tabs)/projects/index.tsx`)
Lista desplazable (`FlatList`) de los proyectos, cada uno como tarjeta con degradado mostrando título y herramientas usadas. Al tocar una tarjeta navega al detalle del proyecto.

### Project detail (`app/(tabs)/projects/[id]/index.tsx`)
Título y descripción del proyecto, cuadros con las herramientas utilizadas (**Tools**) y un enlace al sitio publicado (**Link**). Incluye el botón de hamburguesa que abre el Drawer.

Los datos de los proyectos (título, descripción, herramientas, link) están centralizados en `app/(tabs)/projects/[id]/_layout.tsx`, y tanto la lista como el detalle los importan desde ahí para mantenerse sincronizados.

### Contact (`app/(tabs)/contact.tsx`)
Correo, teléfono, dirección, GitHub y LinkedIn, cada uno con su ícono. Correo, teléfono, GitHub y LinkedIn son tocables y abren la app correspondiente (`mailto:`, `tel:`, navegador) mediante la API `Linking` de React Native.

## Cómo correr el proyecto

1. Instalar dependencias

   ```bash
   npm install
   ```

2. Iniciar el servidor de desarrollo

   ```bash
   npx expo start
   ```

3. En la terminal, elegir cómo abrir la app:

   - Presionar `a` — [emulador de Android](https://docs.expo.dev/workflow/android-studio-emulator/) (requiere Android Studio)
   - Presionar `w` — versión web en el navegador (`npx expo start --web`)
   - Escanear el código QR con [Expo Go](https://expo.dev/go) desde un dispositivo físico
   - iOS Simulator solo está disponible en macOS

## Recursos

- [Documentación de Expo SDK 54](https://docs.expo.dev/versions/v54.0.0/)
- [Documentación de Expo Router](https://docs.expo.dev/router/introduction/)
- [Documentación de React Navigation](https://reactnavigation.org/docs/getting-started)
- [Íconos de Lucide](https://lucide.dev/)

/* ============================================================
   apps-config.js
   Catálogo de herramientas del Portal Hub SCM
   (Plan de Implementación IA & Analytics SCM v1.1, Sección 2 y 4.2.2)
   ------------------------------------------------------------
   CÓMO AGREGAR UNA APP NUEVA A MEDIDA QUE LA VAS GENERANDO:
   1. Sube el HTML de la app al repo, idealmente en su propia carpeta:
        /apps/<nombre-carpeta>/index.html
   2. Agrega un objeto nuevo a ISM_APPS (o edita uno existente si ya
      estaba como placeholder) con la url real.
   3. Cambia "estado" a "nuevo" o "actualizado" — esto es CRÍTICO:
      manager y lead solo ven apps en estado "nuevo"/"actualizado"
      (ver auth-users.js). Mientras una app quede en "pendiente",
      NINGÚN manager ni lead la verá, sin importar su categoría.
   4. Guarda y sube — el portal genera la card automáticamente.

   CAMPOS Y CÓMO SE USAN PARA EL CONTROL DE ACCESO:

     nombre       — nombre visible de la app.

     categoria    — define el alcance de manager / lead. Puede llevar
                    varias etiquetas separadas por "/", ej:
                    "Planeamiento / Almacenes / Compras" → la app
                    cuenta para el alcance "Planeamiento", "Almacenes"
                    Y "Compras" por igual.
                    REGLA TRANSVERSAL: cualquier app cuya categoria
                    incluya la etiqueta "Restringido" SOLO la ve el
                    perfil admin — sin excepción.

     proceso      — define el alcance exacto de los 4 perfiles
                    "analista*" (ver auth-users.js). Debe calzar EXACTO
                    (no por etiquetas) con el "proceso" del usuario.
                    Valores usados hoy: "Planeamiento de Demanda",
                    "Planeamiento de Producción", "Planeamiento de
                    Materiales", "Planeamiento de Inventarios de PT",
                    "Planeamiento Integral de Supply Chain",
                    "Planeamiento de Supply Chain", "Supply Chain
                    Finance", o null si no aplica a un proceso puntual.

     sensibilidad — "alta" | "media" | "baja" (🔴🟡🟢 — Sección 2 del Plan).
     paises       — array de países (códigos PE/RD/HT/BR/GT/CHL) o ["Todos"].
     estado       — "pendiente" | "nuevo" | "actualizado".
     url          — "#" = aún no publicada (card se muestra "Pendiente
                    de publicar" y no se puede abrir).

   NOTA: el campo "área" se retiró del modelo — ya no describe ni
   filtra ninguna app. El alcance de cada perfil se define 100% con
   "categoria" (manager/lead) y "proceso" (analista*).
   ============================================================ */

const ISM_APPS = [
  {
    nombre: "Inventario de Materiales Directos Inmovilizados",
    categoria: "Planeamiento / Almacenes / Compras",
    proceso: "Planeamiento de Materiales",
    sensibilidad: "alta",
    paises: ["PE", "RD", "HT", "GT"],
    estado: "nuevo",
    url: "apps/md-inmovilizados/index.html",
  },
  {
    nombre: "Análisis de Estados Financieros",
    categoria: "Restringido",
    proceso: "Supply Chain Finance",
    sensibilidad: "alta",
    paises: ["Todos"],
    estado: "nuevo",
    url: "apps/analisis-financiero/index.html",
  },
  {
    nombre: "Proyección de Cobertura",
    categoria: "Planeamiento / Almacenes",
    proceso: "Planeamiento de Inventarios de PT",
    sensibilidad: "media",
    paises: ["Todos"],
    estado: "nuevo",
    url: "apps/proyeccion-cobertura/index.html",
  },
  {
    nombre: "ABCI",
    categoria: "Planeamiento",
    proceso: "Planeamiento Integral de Supply Chain",
    sensibilidad: "alta",
    paises: ["Todos"],
    estado: "nuevo",
    url: "apps/abci/index.html",
  },
  {
    nombre: "Optimización de Portafolio",
    categoria: "Estratégico",
    proceso: "Planeamiento de Supply Chain",
    sensibilidad: "alta",
    paises: ["Todos"],
    estado: "nuevo",
    url: "apps/optimizacion-portafolio/index.html",
  },
  {
    nombre: "Costos y Presupuestos",
    categoria: "Restringido",
    proceso: "Planeamiento de Inventarios de PT",
    sensibilidad: "media",
    paises: ["Todos"],
    estado: "nuevo",
    url: "apps/costos-presupuestos/index.html",
  },
  {
    nombre: "Split Diario de Demanda",
    categoria: "Planeamiento",
    proceso: "Planeamiento de Demanda",
    sensibilidad: "media",
    paises: ["Todos"],
    estado: "nuevo",
    url: "#",
  },
  {
    nombre: "Portafolio de Proyectos",
    categoria: "Restringido",
    proceso: "Gestión de Proyectos",
    sensibilidad: "alta",
    paises: ["Todos"],
    estado: "nuevo",
    url: "apps/portafolio-proyectos/index.html",
  },
  {
    nombre: "Inventario de Materiales Indirectos Inmovilizados",
    categoria: "Planeamiento / Almacenes / Compras",
    proceso: "Planeamiento de Materiales",
    sensibilidad: "alta",
    paises: ["PE", "RD", "HT", "GT"],
    estado: "nuevo",
    url: "apps/mi-inmovilizados/index.html",
  },
];

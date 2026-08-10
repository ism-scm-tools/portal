/* ============================================================
   auth-users.js
   Mapa de usuarios y roles — Autenticación Nivel 2
   (Plan de Implementación IA & Analytics SCM v1.1, Sección 4.3.1)
   ------------------------------------------------------------
   CÓMO AGREGAR O CAMBIAR UN USUARIO (sin tocar ningún otro archivo):
   1. Abre index.html en el navegador, abre la consola (F12) y ejecuta:
        await ISMAuth.hashPassword("laNuevaClave")
      Copia el texto largo (hash) que te devuelve.
   2. Agrega una línea nueva al arreglo ISM_USERS de abajo, o edita
      el campo "hash" / "role" / "categoria" / "proceso" de un usuario
      existente.
   3. Guarda este archivo y haz push al repositorio.

   ------------------------------------------------------------
   CÓMO SE DEFINE EL ALCANCE DE CADA PERFIL
   (ya NO se usa "área" — se usa "categoria" o "proceso", según el rol):

   "admin"       Supply Chain Admin (Administrador)
                 → ve TODAS las apps, de cualquier categoría — es el
                   ÚNICO perfil que puede ver apps de categoría
                   "Restringido". No necesita campo "categoria" ni
                   "proceso".

   "manager"     Supply Chain Manager (Gerentes)
                 → ve TODAS las apps, de cualquier categoría (incluido
                   "Estratégico") y cualquier estado. Es el único rol,
                   junto con admin, que ve todos los procesos por
                   igual. No se filtra por el campo "categoria" del
                   usuario — ese campo queda solo como referencia de
                   a qué área pertenece la persona.
                 → Nunca ve "Restringido" (esa es la única diferencia
                   real frente a admin).

   "lead"        Supply Chain Lead
                 → ve TODAS las apps en estado "nuevo" o "actualizado",
                   EXCLUYENDO por completo las de categoría "Estratégico"
                   (a diferencia del manager, que sí las ve). No se
                   filtra por el campo "categoria" del usuario — ese
                   campo queda solo como referencia de a qué área
                   pertenece la persona, no restringe lo que ve.
                 → Nunca ve "Restringido".

   "analistadp"  Supply Chain Analyst — Planeamiento de Demanda
                 → campo "proceso" = "Planeamiento de Demanda".
   "analistamps" Supply Chain Analyst — Planeamiento de Producción
                 → campo "proceso" = "Planeamiento de Producción".
   "analistamrp" Supply Chain Analyst — Planeamiento de Materiales
                 → campo "proceso" = "Planeamiento de Materiales".
   "analistainv" Supply Chain Analyst — Planeamiento de Inventarios de PT
                 → campo "proceso" = "Planeamiento de Inventarios de PT".
                 → Los 4 "analista*" ven SOLO apps cuyo "proceso" (en
                   apps-config.js) calce EXACTO con el suyo, EXCLUYENDO
                   por completo las de categoría "Estratégico", y nunca
                   ven "Restringido" aunque el proceso calce (ej.
                   "Costos y Presupuestos" es Restringido con proceso
                   "Planeamiento de Inventarios de PT" — analistainv
                   NO la ve).

   ⚠️ NOTA DE SEGURIDAD: esto es autenticación del lado del cliente
   (Nivel 2). Los hashes quedan visibles en el código fuente del
   repositorio — es fricción de acceso, no seguridad auditable.
   Para datos verdaderamente críticos, el Plan reserva el Nivel 3
   (OAuth2 / SSO corporativo), que requiere backend real.

   Contraseña de demostración para TODOS los usuarios de abajo: "ISM2026"
   → CÁMBIALA (uno por uno, con el paso 1 de arriba) antes de compartir
     la URL fuera de tu equipo de prueba.
   ============================================================ */

const ISM_USERS = [
  { user: "rsanchez",    nombre: "Roberto Sánchez",                hash: "eac50db3e6bbd428c5ca297e0e69db9573553aebac6fdfc4d48463cea87f66bb", role: "admin" },

  { user: "jramos",      nombre: "Jennifer Ramos",                 hash: "eac50db3e6bbd428c5ca297e0e69db9573553aebac6fdfc4d48463cea87f66bb", role: "manager", categoria: "Supply Chain" },
  { user: "rperez",      nombre: "Rodrigo Pérez",                  hash: "eac50db3e6bbd428c5ca297e0e69db9573553aebac6fdfc4d48463cea87f66bb", role: "manager", categoria: "Supply Chain" },
  { user: "cmiranda",      nombre: "Carlos Miranda",               hash: "eac50db3e6bbd428c5ca297e0e69db9573553aebac6fdfc4d48463cea87f66bb", role: "manager", categoria: "Supply Chain" },

   
  { user: "aalvarado",   nombre: "Aarón Alvarado",                 hash: "eac50db3e6bbd428c5ca297e0e69db9573553aebac6fdfc4d48463cea87f66bb", role: "lead",    categoria: "Planeamiento de Supply Chain" },
  { user: "jatoche",     nombre: "Jeferson Atoche",                hash: "eac50db3e6bbd428c5ca297e0e69db9573553aebac6fdfc4d48463cea87f66bb", role: "lead",    categoria: "Desarrollo Logístico" },

  /* Demo/placeholder — aún sin persona nombrada asignada a estos 4 roles.
     Renómbralos cuando asignes a la persona real de cada sub-equipo. */
  { user: "analistadp",  nombre: "Analista Demanda (demo)",        hash: "eac50db3e6bbd428c5ca297e0e69db9573553aebac6fdfc4d48463cea87f66bb", role: "analistadp",  proceso: "Planeamiento de Demanda" },
  { user: "analistamps", nombre: "Analista Producción MPS (demo)", hash: "eac50db3e6bbd428c5ca297e0e69db9573553aebac6fdfc4d48463cea87f66bb", role: "analistamps", proceso: "Planeamiento de Producción" },
  { user: "analistamrp", nombre: "Analista Materiales MRP (demo)", hash: "eac50db3e6bbd428c5ca297e0e69db9573553aebac6fdfc4d48463cea87f66bb", role: "analistamrp", proceso: "Planeamiento de Materiales" },
  { user: "analistainv", nombre: "Analista Inventarios PT (demo)", hash: "eac50db3e6bbd428c5ca297e0e69db9573553aebac6fdfc4d48463cea87f66bb", role: "analistainv", proceso: "Planeamiento de Inventarios de PT" },
];
